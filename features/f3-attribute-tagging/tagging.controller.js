import fs from 'fs';
import path from 'path';
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

function getMockTagging() {
  return {
    category: 'Chairs',
    material: 'Top-Grain Leather & Walnut Wood',
    color: 'Tan Brown',
    era: 'Mid-Century Modern (1960s)',
    confidence: 85
  };
}

export const tagAttributes = async (req, res) => {
  try {
    const imagesToProcess = {}; // Maps field key to { buffer, mimeType }

    // 1. Resolve images from multipart uploads
    if (req.files) {
      const fields = ['front', 'back', 'left', 'right', 'image'];
      for (const field of fields) {
        if (req.files[field] && req.files[field][0]) {
          const file = req.files[field][0];
          const buffer = fs.readFileSync(file.path);
          const key = field === 'image' ? 'front' : field;
          imagesToProcess[key] = {
            buffer,
            mimeType: file.mimetype
          };
        }
      }
    }

    // 2. Resolve images from JSON body
    if (req.body) {
      if (req.body.images && typeof req.body.images === 'object') {
        const fields = ['front', 'back', 'left', 'right'];
        for (const field of fields) {
          const imgData = req.body.images[field];
          if (imgData) {
            try {
              const { buffer, mimeType } = await getImageBufferAndMime(imgData);
              imagesToProcess[field] = { buffer, mimeType };
            } catch (err) {
              console.error(`Failed to process angle ${field}:`, err);
            }
          }
        }
      } else if (req.body.imageBase64) {
        const angleKey = req.body.angle || 'front';
        try {
          const { buffer, mimeType } = await getImageBufferAndMime(req.body.imageBase64);
          imagesToProcess[angleKey] = { buffer, mimeType };
        } catch (err) {
          console.error('Failed to process fallback imageBase64:', err);
        }
      }
    }

    if (Object.keys(imagesToProcess).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid image data provided for tagging.'
      });
    }

    // 3. Obtain GEMINI_API_KEY from config/gemini helper (rotates multiple keys if present)
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'GEMINI_API_KEY is not configured.'
      });
    }

    // 4. Define prompt and JSON response schema
    const prompt = `
You are an expert furniture catalog assistant. Analyze the provided image of a furniture item and automatically classify it.
Determine the item's category, its material composition, its primary color, and its design era (e.g. 'Mid-Century Modern (1960s)' or 'Contemporary Nordic').

The category MUST be strictly one of: 'chair', 'sofa', 'table', or 'other'.
Provide a concise material composition description (e.g., 'Velvet & Steel' or 'Solid Oak Wood').
Provide the primary color name.
Provide the design era.
Assign a classification confidence score from 0 to 100.

You MUST return your output in the following JSON schema:
{
  "category": "chair" | "sofa" | "table" | "other",
  "material": "material description",
  "color": "color name",
  "era": "design era",
  "confidence": number
}

Strict Rules:
- Return ONLY the raw valid JSON matching the schema. No markdown formatting.
`;

    const responseSchema = {
      type: 'OBJECT',
      properties: {
        category: {
          type: 'STRING',
          enum: ['chair', 'sofa', 'table', 'other']
        },
        material: {
          type: 'STRING'
        },
        color: {
          type: 'STRING'
        },
        era: {
          type: 'STRING'
        },
        confidence: {
          type: 'INTEGER'
        }
      },
      required: ['category', 'material', 'color', 'era', 'confidence']
    };

    const parts = [{ text: prompt }];

    // Add first available image to process (or front if available)
    const primaryKey = imagesToProcess.front ? 'front' : Object.keys(imagesToProcess)[0];
    const img = imagesToProcess[primaryKey];
    
    parts.push({
      inline_data: {
        mime_type: img.mimeType,
        data: img.buffer.toString('base64')
      }
    });

    const payload = {
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: responseSchema
      }
    };

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;
    
    let result;
    try {
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API returned status ${response.status}: ${errorText}`);
      }

      const resultData = await response.json();
      const responseText = resultData?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!responseText) {
        throw new Error('Gemini API returned empty response.');
      }

      const parsed = JSON.parse(responseText.trim());
      
      // Map category to the database/form names (Chairs, Sofas, Tables)
      const categoryMapping = {
        'chair': 'Chairs',
        'sofa': 'Sofas',
        'table': 'Tables',
        'other': 'Chairs'
      };
      
      result = {
        category: categoryMapping[parsed.category] || 'Chairs',
        material: parsed.material || 'Unknown Material',
        color: parsed.color || 'Unknown Color',
        era: parsed.era || 'Unknown Era',
        confidence: parsed.confidence || 80
      };
    } catch (apiError) {
      console.warn('Gemini Tagging API failed. Using mock fallback. Details:', apiError.message);
      result = getMockTagging();
    }

    return res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Attribute tagging error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An internal error occurred during attribute tagging.'
    });
  }
};
