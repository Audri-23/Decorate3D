import fs from 'fs';
import path from 'path';

export const assessDamage = async (req, res) => {
  try {
    let imageBuffer;
    let mimeType;
    let imageUrl;

    // 1. Accept EITHER multipart file upload (req.file) OR base64 string
    if (req.file) {
      imageBuffer = fs.readFileSync(req.file.path);
      mimeType = req.file.mimetype;
      imageUrl = `/uploads/images/${req.file.filename}`;
    } else if (req.body && req.body.imageBase64) {
      let base64Data = req.body.imageBase64;
      mimeType = req.body.mimeType || 'image/jpeg';
      
      // If the base64 string includes prefix (e.g. data:image/png;base64,...), strip it
      const base64PrefixRegex = /^data:([^;]+);base64,(.*)$/;
      const match = base64Data.match(base64PrefixRegex);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }

      imageBuffer = Buffer.from(base64Data, 'base64');
      
      // Determine file extension
      const ext = mimeType.split('/')[1] || 'jpg';
      const filename = `base64-${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
      
      // Ensure target directory exists
      const imagesDir = path.join(process.cwd(), 'uploads', 'images');
      if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
      }

      const savePath = path.join(imagesDir, filename);
      fs.writeFileSync(savePath, imageBuffer);
      imageUrl = `/uploads/images/${filename}`;
    } else {
      return res.status(400).json({
        success: false,
        message: 'No image file or imageBase64 data provided in request.'
      });
    }

    // 2. Obtain GEMINI_API_KEY from environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: 'GEMINI_API_KEY is not configured in the environment variables.'
      });
    }

    const base64Image = imageBuffer.toString('base64');

    // 3. Define the prompt instructions for Gemini
    const prompt = `
You are an expert furniture quality inspector. Analyze this image of a furniture item and perform a detailed damage assessment.
Detect any visible defects or damages such as tears, scratches, dents, stains, structural cracks, or general wear.

Identify bounding boxes for all detected damage regions.
The bounding box coordinates MUST be normalized to a 0–1000 scale, formatted as [ymin, xmin, ymax, xmax].

You MUST return your output in the following JSON schema:
{
  "conditionGrade": "FAIR" | "GOOD" | "EXCELLENT",
  "confidenceScore": number (0 to 100),
  "summary": "a one-sentence summary of the furniture condition and any detected damage",
  "damages": [
    {
      "type": "scratch" | "dent" | "tear" | "stain" | "structural_crack" | "wear",
      "severity": "minor" | "moderate" | "severe",
      "description": "a concise description of the specific defect and its location",
      "boundingBox": [ymin, xmin, ymax, xmax]
    }
  ]
}

Strict Rules:
- If the furniture looks clean, undamaged, or has negligible wear, return conditionGrade "EXCELLENT" or "GOOD" and an empty damages array [].
- Do not invent defects that are not clearly visible in the image.
- Return ONLY the raw valid JSON matching the schema. No markdown formatting.
`;

    // 4. Send request to Google Gemini API (gemini-3.5-flash model)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
    
    const responseSchema = {
      type: 'OBJECT',
      properties: {
        conditionGrade: {
          type: 'STRING',
          enum: ['FAIR', 'GOOD', 'EXCELLENT']
        },
        confidenceScore: {
          type: 'INTEGER'
        },
        summary: {
          type: 'STRING'
        },
        damages: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              type: {
                type: 'STRING',
                enum: ['scratch', 'dent', 'tear', 'stain', 'structural_crack', 'wear']
              },
              severity: {
                type: 'STRING',
                enum: ['minor', 'moderate', 'severe']
              },
              description: {
                type: 'STRING'
              },
              boundingBox: {
                type: 'ARRAY',
                items: {
                  type: 'INTEGER'
                }
              }
            },
            required: ['type', 'severity', 'description', 'boundingBox']
          }
        }
      },
      required: ['conditionGrade', 'confidenceScore', 'summary', 'damages']
    };

    const payload = {
      contents: [{
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: mimeType,
              data: base64Image
            }
          }
        ]
      }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json',
        responseSchema: responseSchema
      }
    };

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API request failed with status ${response.status}: ${errorText}`);
    }

    const resultData = await response.json();
    
    // Parse response content text
    const responseText = resultData?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) {
      throw new Error('Gemini API returned an empty or invalid content structure.');
    }

    // Parse the JSON response
    const assessmentResult = JSON.parse(responseText.trim());

    // 5. Convert bounding boxes from 0-1000 scale to percentages
    const normalizedDamages = (assessmentResult.damages || []).map(damage => {
      const box = damage.boundingBox || [0, 0, 0, 0];
      const ymin = box[0];
      const xmin = box[1];
      const ymax = box[2];
      const xmax = box[3];

      // Convert coordinates from [0, 1000] scale to percentages [0, 100]
      const top = ymin / 10;
      const left = xmin / 10;
      const bottom = ymax / 10;
      const right = xmax / 10;

      return {
        type: damage.type,
        severity: damage.severity,
        description: damage.description,
        boundingBox: box,
        boundingBoxPercent: {
          top: Number(top.toFixed(2)),
          left: Number(left.toFixed(2)),
          bottom: Number(bottom.toFixed(2)),
          right: Number(right.toFixed(2))
        }
      };
    });

    // 6. Return response matching the required format
    return res.status(200).json({
      success: true,
      feature: 'AI Damage Assessment',
      conditionGrade: assessmentResult.conditionGrade || 'GOOD',
      confidenceScore: assessmentResult.confidenceScore || 100,
      summary: assessmentResult.summary || 'Item scanned successfully.',
      damages: normalizedDamages,
      imageUrl: imageUrl
    });

  } catch (error) {
    console.error('Damage assessment controller error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An internal error occurred during damage assessment.'
    });
  }
};
