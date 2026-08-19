import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ProductModel } from '../models/ProductModel.js';
import { getEmbedding } from '../features/f4-style-search/styleSearch.controller.js';
import { getGeminiApiKey } from '../config/gemini.js';

dotenv.config();

const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';

async function fetchImageBuffer(imageInput) {
  if (imageInput.startsWith('/uploads/') || imageInput.startsWith('uploads/')) {
    // Local filesystem upload
    const cleanPath = imageInput.startsWith('/') ? imageInput.slice(1) : imageInput;
    const absPath = path.join(process.cwd(), cleanPath);
    if (!fs.existsSync(absPath)) {
      throw new Error(`File does not exist locally: ${absPath}`);
    }
    const buffer = fs.readFileSync(absPath);
    // Ext
    const ext = path.extname(cleanPath).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : (ext === '.webp' ? 'image/webp' : 'image/jpeg');
    return { buffer, mimeType };
  } else if (imageInput.startsWith('http://') || imageInput.startsWith('https://')) {
    // Remote URL (e.g. Unsplash placeholders)
    const response = await fetch(imageInput, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch remote image: ${imageInput}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = response.headers.get('content-type') || 'image/jpeg';
    return { buffer, mimeType };
  } else if (imageInput.startsWith('data:')) {
    const base64PrefixRegex = /^data:([^;]+);base64,(.*)$/;
    const match = imageInput.match(base64PrefixRegex);
    let mimeType = 'image/jpeg';
    let base64Data = imageInput;
    if (match) {
      mimeType = match[1];
      base64Data = match[2];
    }
    const buffer = Buffer.from(base64Data, 'base64');
    return { buffer, mimeType };
  } else {
    // Raw base64
    const buffer = Buffer.from(imageInput, 'base64');
    return { buffer, mimeType: 'image/jpeg' };
  }
}

async function describeImage(imageBuffer, mimeType, apiKey) {
  const prompt = `
Analyze the uploaded image of a furniture item and describe its style features in detail.
Specify the item type, design style, shape, details, material texturing, and primary colors.
Be extremely descriptive and detailed (e.g. 'A tan-brown leather lounge armchair with walnut wood outer shell and metal base, mid-century modern style').
Return ONLY the raw descriptive sentence. Do not include introductory text or formatting.
`;

  const payload = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: mimeType,
              data: imageBuffer.toString('base64')
            }
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.2
    }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Gemini Image Description failed: ${res.status} ${errorText}`);
  }

  const data = await res.json();
  const description = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!description) {
    throw new Error('Failed to generate image description.');
  }
  return description.trim();
}

async function run() {
  const initialApiKey = getGeminiApiKey();
  if (!initialApiKey) {
    console.error('❌ Error: GEMINI_API_KEY is not set correctly in .env.');
    process.exit(1);
  }

  console.log(`Connecting to MongoDB at: ${connStr.replace(/\/\/.*@/, '//****:****@')} ...`);
  await mongoose.connect(connStr);
  console.log('✅ Connected to MongoDB.');

  // Auto-seed if database is empty
  const count = await ProductModel.countDocuments();
  if (count === 0) {
    console.log('Database is empty. Seeding default products from seedData.js first...');
    const { seedProductsData } = await import('../models/seedData.js');
    await ProductModel.insertMany(seedProductsData);
    console.log('✅ Seeding complete.');
  }

  const products = await ProductModel.find({
    $or: [
      { embedding: { $exists: false } },
      { embedding: { $size: 0 } }
    ]
  });

  console.log(`Found ${products.length} products needing embedding generation.`);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`\n[${i + 1}/${products.length}] Processing product: "${product.title}" (${product._id})`);

    let buffer, mimeType, activeImage;
    if (!product.images || product.images.length === 0) {
      console.log('⚠️ No images found for this product. Skipping.');
      continue;
    }

    for (const imgUrl of product.images) {
      try {
        console.log(`Fetching/reading image: ${imgUrl.slice(0, 80)}...`);
        const result = await fetchImageBuffer(imgUrl);
        buffer = result.buffer;
        mimeType = result.mimeType;
        activeImage = imgUrl;
        break; // Success!
      } catch (fetchErr) {
        console.warn(`⚠️ Failed to fetch image ${imgUrl.slice(0, 50)}: ${fetchErr.message}. Trying next...`);
      }
    }

    if (!buffer) {
      console.error(`❌ Failed to fetch any images for product "${product.title}". Skipping.`);
      continue;
    }

    try {
      const activeApiKey = getGeminiApiKey();
      console.log('Generating style description via Gemini Vision...');
      const description = await describeImage(buffer, mimeType, activeApiKey);
      console.log(`Description: "${description}"`);
 
      console.log('Generating embedding vector (gemini-embedding-2)...');
      const vector = await getEmbedding(description, activeApiKey);
      console.log(`Generated ${vector.length}-dimension vector.`);

      product.embedding = vector;
      await product.save();
      console.log('✅ Saved embedding to database.');
    } catch (err) {
      console.error(`❌ Failed to process product "${product.title}":`, err.message);
    }
  }

  console.log('\n🎉 Backfill complete!');
  mongoose.connection.close();
  process.exit(0);
}

run().catch(err => {
  console.error('Fatal Migration Error:', err);
  process.exit(1);
});
