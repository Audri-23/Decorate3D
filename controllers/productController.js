import fs from 'fs';
import path from 'path';
import { seedProductsData } from '../models/seedData.js';
import { ProductModel } from '../models/ProductModel.js';
import { getEmbedding } from '../features/f4-style-search/styleSearch.controller.js';
import { getGeminiApiKey } from '../config/gemini.js';

async function fetchImageBuffer(imageInput) {
  if (imageInput.startsWith('/uploads/') || imageInput.startsWith('uploads/')) {
    const cleanPath = imageInput.startsWith('/') ? imageInput.slice(1) : imageInput;
    const absPath = path.join(process.cwd(), cleanPath);
    if (fs.existsSync(absPath)) {
      return { buffer: fs.readFileSync(absPath), mimeType: path.extname(cleanPath) === '.png' ? 'image/png' : 'image/jpeg' };
    }
  } else if (imageInput.startsWith('http://') || imageInput.startsWith('https://')) {
    const response = await fetch(imageInput, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (response.ok) {
      return { buffer: Buffer.from(await response.arrayBuffer()), mimeType: response.headers.get('content-type') || 'image/jpeg' };
    }
  } else if (imageInput.startsWith('data:')) {
    const match = imageInput.match(/^data:([^;]+);base64,(.*)$/);
    if (match) {
      return { buffer: Buffer.from(match[2], 'base64'), mimeType: match[1] };
    }
  }
  return { buffer: Buffer.from(imageInput, 'base64'), mimeType: 'image/jpeg' };
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
    throw new Error(`Gemini Image Description failed: ${res.status}`);
  }

  const data = await res.json();
  const description = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!description) {
    throw new Error('Failed to generate image description.');
  }
  return description.trim();
}

export const getProducts = async (req, res) => {
  try {
    const { category, condition, search } = req.query;
    let products = [];
    try {
      const dbProducts = await ProductModel.find().sort({ createdAt: -1 }).lean();
      const dbIds = new Set((dbProducts || []).map(p => String(p._id)));

      // Combine dbProducts + seedProductsData items not in DB yet
      const extraSeed = seedProductsData.filter(p => !dbIds.has(String(p._id)));
      products = [...extraSeed, ...(dbProducts || [])];

      if (products.length === 0) {
        products = [...seedProductsData];
      }
    } catch {
      products = [...seedProductsData];
    }

    if (category && category !== 'All') {
      products = products.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());
    }

    if (condition && condition !== 'All') {
      products = products.filter(p => p.conditionGrade && p.conditionGrade.toLowerCase() === condition.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(p => (p.title && p.title.toLowerCase().includes(q)) || (p.description && p.description.toLowerCase().includes(q)));
    }

    return res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let product;

    try {
      product = await ProductModel.findById(id).lean();
    } catch {
      product = seedProductsData.find(p => p._id === id);
    }

    if (!product) {
      product = seedProductsData.find(p => p._id === id) || seedProductsData[0];
    }

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const get3DModelSpecs = async (req, res) => {
  try {
    const { id } = req.params;
    let product;
    try {
      product = await ProductModel.findById(id).lean();
    } catch {
      product = seedProductsData.find(p => p._id === id);
    }
    if (!product) {
      product = seedProductsData.find(p => p._id === id) || seedProductsData[0];
    }
    return res.status(200).json({
      success: true,
      productId: product._id,
      model3D: product.model3D
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/products/upload - File upload endpoint for images and GLB models
export const uploadFiles = async (req, res) => {
  try {
    const files = req.files || [];
    const fileData = { images: [], model3DUrl: '' };

    files.forEach((file) => {
      const ext = file.originalname.toLowerCase();
      if (ext.endsWith('.glb') || ext.endsWith('.gltf')) {
        fileData.model3DUrl = `/uploads/models/${file.filename}`;
      } else {
        fileData.images.push(`/uploads/images/${file.filename}`);
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Files uploaded successfully to local storage.',
      data: fileData
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/products - Create furniture product
export const createProduct = async (req, res) => {
  try {
    const productData = { ...req.body };

    // Normalize conditionGrade to valid MongoDB enum ('FAIR', 'GOOD', 'EXCELLENT')
    const validGrades = ['FAIR', 'GOOD', 'EXCELLENT'];
    if (!validGrades.includes(String(productData.conditionGrade || '').toUpperCase())) {
      productData.conditionGrade = 'GOOD';
    } else {
      productData.conditionGrade = String(productData.conditionGrade).toUpperCase();
    }

    // Strip custom string _id if it's not a valid 24-char hex ObjectId
    if (productData._id && typeof productData._id === 'string' && !productData._id.match(/^[0-9a-fA-F]{24}$/)) {
      delete productData._id;
    }

    let newProduct;

    try {
      newProduct = await ProductModel.create(productData);
      if (newProduct && newProduct.toObject) {
        newProduct = newProduct.toObject();
      }
    } catch (dbErr) {
      console.warn('[Database Notice] Fallback to memory store:', dbErr.message);
      newProduct = {
        _id: 'prod_' + Date.now(),
        ...productData,
        createdAt: new Date()
      };
    }

    // Always push to in-memory seed dataset so all roles see newly created products immediately
    const existingIndex = seedProductsData.findIndex(p => String(p._id) === String(newProduct._id));
    if (existingIndex === -1) {
      seedProductsData.unshift(newProduct);
    }

    // Return response immediately to client so listing creation finishes in milliseconds
    res.status(201).json({ success: true, data: newProduct });

    // Generate embedding vector asynchronously in background (non-blocking)
    const primaryImage = productData.images?.[0] || productData.primaryImage || '';
    const apiKey = getGeminiApiKey();
    if (primaryImage && apiKey && !apiKey.includes('YOUR_GEMINI_API_KEY_HERE')) {
      (async () => {
        try {
          const { buffer, mimeType } = await fetchImageBuffer(primaryImage);
          const description = await describeImage(buffer, mimeType, apiKey);
          const vector = await getEmbedding(description, apiKey);
          if (newProduct._id && ProductModel.findByIdAndUpdate) {
            await ProductModel.findByIdAndUpdate(newProduct._id, { embedding: vector });
          }
        } catch (embErr) {
          console.warn('[Product Creation Warning] Non-blocking embedding generation skipped:', embErr.message);
        }
      })();
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/products/:id - Update furniture product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let updatedProduct;

    try {
      updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    } catch {
      const index = seedProductsData.findIndex(p => p._id === id);
      if (index !== -1) {
        seedProductsData[index] = { ...seedProductsData[index], ...req.body };
        updatedProduct = seedProductsData[index];
      }
    }

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    return res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/products/:id - Delete furniture product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Delete from database
    try {
      await ProductModel.findByIdAndDelete(id);
    } catch (dbErr) {
      console.warn('[Delete Product Warning] DB delete failed:', dbErr.message);
    }

    // 2. ALWAYS remove from in-memory seedProductsData array so it is never re-merged
    const index = seedProductsData.findIndex(p => p._id === id || (p._id && p._id.toString() === id));
    if (index !== -1) {
      seedProductsData.splice(index, 1);
    }

    return res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

