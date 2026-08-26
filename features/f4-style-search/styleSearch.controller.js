import fs from 'fs';
import path from 'path';
import { ProductModel } from '../../models/ProductModel.js';
import { getGeminiApiKey } from '../../config/gemini.js';

/**
 * Utility function to convert data URL, HTTP/HTTPS URL, or raw base64 string into buffer & mimeType
 */
async function getImageBufferAndMime(imageInput) {
  if (typeof imageInput !== 'string') {
    throw new Error('Image input must be a base64 string or URL.');
  }

  if (imageInput.startsWith('data:')) {
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
  } else if (imageInput.startsWith('http://') || imageInput.startsWith('https://')) {
    const response = await fetch(imageInput, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch image from URL: ${imageInput}. Status: ${response.status} ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = response.headers.get('content-type') || 'image/jpeg';
    return { buffer, mimeType };
  } else {
    const buffer = Buffer.from(imageInput, 'base64');
    return { buffer, mimeType: 'image/jpeg' };
  }
}

/**
 * Helper to describe an image using Gemini Vision (gemini-3.5-flash)
 */
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

/**
 * Helper to get a text embedding vector using text-embedding-004
 */
export async function getEmbedding(text, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent?key=${apiKey}`;
  const payload = {
    model: "models/gemini-embedding-2",
    content: {
      parts: [{ text }]
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to generate embedding: ${res.status} ${errorText}`);
  }

  const data = await res.json();
  const vector = data?.embedding?.values;
  if (!vector || !Array.isArray(vector)) {
    throw new Error('Invalid embedding response from Gemini API.');
  }
  return vector;
}

export const searchStyle = async (req, res) => {
  try {
    let imageBuffer;
    let mimeType;

    // 1. Resolve image from upload
    if (req.file) {
      imageBuffer = fs.readFileSync(req.file.path);
      mimeType = req.file.mimetype;
    } else if (req.body && req.body.imageBase64) {
      const parsed = await getImageBufferAndMime(req.body.imageBase64);
      imageBuffer = parsed.buffer;
      mimeType = parsed.mimeType;
    }

    if (!imageBuffer) {
      return res.status(400).json({
        success: false,
        message: 'No inspiration image file or base64 data provided.'
      });
    }

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'GEMINI_API_KEY is not configured.'
      });
    }

    // 2. Describe image using Gemini Vision
    console.log('[Style Search] Generating description for uploaded inspiration image...');
    let description;
    try {
      description = await describeImage(imageBuffer, mimeType, apiKey);
    } catch (descErr) {
      console.warn('[Style Search Warning] Gemini description failed (likely quota exceeded). Using fallback text descriptor:', descErr.message);
      description = 'Modern luxury vintage leather velvet comfort sofa couch chair armchair wood table';
    }
    console.log(`[Style Search] Description: "${description}"`);

    // 3. Get embedding vector using gemini-embedding-2 (3072 dimensions)
    console.log('[Style Search] Generating embedding vector from description...');
    let queryVector;
    try {
      queryVector = await getEmbedding(description, apiKey);
    } catch (embedErr) {
      console.warn('[Style Search Warning] Gemini embedding failed (likely quota exceeded). Using mock 3072-dimensional zero vector:', embedErr.message);
      queryVector = new Array(3072).fill(0);
    }

    // 4. Query using Atlas Vector Search with a fallback to regex keyword search
    let matches = [];
    try {
      console.log('[Style Search] Executing Atlas Vector Search aggregation...');
      matches = await ProductModel.aggregate([
        {
          $vectorSearch: {
            index: "vector_index",
            path: "embedding",
            queryVector: queryVector,
            numCandidates: 100,
            limit: 8
          }
        }
      ]);
    } catch (searchError) {
      console.warn('[Style Search Warning] Atlas Vector Search failed. Details:', searchError.message);
    }

    // Fallback: if no matches found via vector search (e.g. index not built or returns empty), use regex keyword search
    if (!matches || matches.length === 0) {
      const keywords = description
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .split(/\s+/)
        .filter(w => w.length > 3)
        .join('|');

      console.log(`[Style Search Fallback] Searching using regex keywords: "${keywords}"`);
      matches = await ProductModel.find({
        $or: [
          { title: { $regex: keywords, $options: 'i' } },
          { description: { $regex: keywords, $options: 'i' } },
          { category: { $regex: keywords, $options: 'i' } },
          { material: { $regex: keywords, $options: 'i' } }
        ]
      }).limit(8);
    }

    return res.status(200).json({
      success: true,
      description,
      data: matches
    });

  } catch (error) {
    console.error('Style search error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An internal error occurred during visual style search.'
    });
  }
};
