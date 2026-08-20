import { ProductModel } from '../../models/ProductModel.js';
import { getGeminiApiKey } from '../../config/gemini.js';
import { DispatchJobModel, inMemoryDispatchJobs } from '../f11-courier-dispatch/dispatch.model.js';


export const handleAssistantChat = async (req, res) => {
  try {
    const { productId, messages } = req.body;

    if (!productId || !messages || !Array.isArray(messages)) {
      return res.status(400).json({ success: false, message: 'Invalid request body.' });
    }

    // 1. Fetch product from database
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    // Query dispatch job status and locked courier
    let deliveryInfo = 'Not yet assigned (courier driver is assigned after checkout/purchase).';
    try {
      let dispatchJob = await DispatchJobModel.findOne({ productId });
      if (!dispatchJob) {
        // Fallback to in-memory seed jobs for demo listings
        dispatchJob = inMemoryDispatchJobs.find(job => job.productId === productId);
      }

      if (dispatchJob) {
        if (dispatchJob.status === 'LOCKED') {
          deliveryInfo = `Assigned Courier: ${dispatchJob.lockedByCourierName || 'Courier Partner'}. Status: Locked/En-route.`;
        } else if (dispatchJob.status === 'COMPLETED') {
          deliveryInfo = `Delivered by: ${dispatchJob.lockedByCourierName || 'Courier Partner'}. Status: Completed/Delivered.`;
        } else if (dispatchJob.status === 'BIDDING') {
          deliveryInfo = `Couriers are currently bidding on this job. Courier will be locked shortly.`;
        } else {
          deliveryInfo = `Delivery job is open for courier bidding. Courier will be assigned once buyer/seller locks a courier.`;
        }
      }
    } catch (dbErr) {
      console.warn('[AI Assistant Warning] Failed to fetch dispatch job:', dbErr.message);
    }

    // 2. Format system context message detailing the listing
    let systemPrompt = `
You are an expert, friendly AI Sales Assistant for the Decorate3D C2C Marketplace. 
Your job is to assist buyers interested in purchasing the following listed furniture item:
- **Title**: "${product.title}"
- **Price**: $${product.price}
- **Category**: "${product.category}"
- **Condition Grade**: "${product.conditionGrade || 'GOOD'}"
- **Material**: "${product.material || 'Unknown'}"
- **Era/Design Era**: "${product.era || 'Unknown'}"
- **Description**: "${product.description || ''}"
- **Seller Name**: "${product.seller?.name || 'Seller'}"
- **Seller Location**: "${product.seller?.location || 'Unknown Location'}"
- **Dimensions**: Width: ${product.dimensions?.width || 'N/A'}, Depth: ${product.dimensions?.depth || 'N/A'}, Height: ${product.dimensions?.height || 'N/A'}
- **Suggested Delivery Transport**: "${getTransportVehicle(product.dimensions)}"
- **Delivery Driver/Courier Details**: "${deliveryInfo}"

Rules for conversation:
1. Answer questions about the product's dimensions, condition, materials, and era accurately using ONLY the provided metadata. If details are not available, politely say so.
2. If they ask about shipping and their location has not been calculated, remind them that shipping calculations are available in the Shipping Quote card right below our chat drawer.
3. If they attempt to negotiate the price:
   - You MUST NOT officially lower the listing price of $${product.price}.
   - Act as a virtual negotiator. You can tell them: "The listing price is $${product.price}, but if you would like to offer a discount (e.g., 10-15% off), you can submit a secure purchase offer or ask me to check if the seller might accept it. What price were you thinking of?"
   - Keep negotiations friendly, professional, and encouraging.
4. If they ask about delivery driver or courier details: Read the **Delivery Driver/Courier Details** context. If no courier is assigned yet, explain that a local courier/driver will be assigned once they buy the item and a dispatch job is locked on the dispatch board. If a courier is assigned, state the courier name and status.
5. Keep all replies concise (2-4 sentences max). Do not use introductory fluff.
`;

    // 3. Dynamic geocoding check on the latest user message
    const userMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';

    // Comprehensive list of Bangladesh cities and major areas
    const bdCities = [
      'dhaka', 'chittagong', 'chattogram', 'sylhet', 'khulna', 'rajshahi', 'barisal', 'barishal', 'rangpur',
      'mymensingh', 'gazipur', 'narayanganj', 'savar', 'tongi', 'comilla', 'coxs bazar', 'cox\'s bazar',
      'jessore', 'bogra', 'dinajpur', 'feni', 'tangail', 'jamalpur', 'pabna', 'kushtia', 'faridpur', 'noakhali',
      'sirajganj', 'kishoreganj', 'madaripur', 'shariatpur', 'munshiganj', 'gopalganj', 'manikganj', 'narsingdi',
      'netrokona', 'sherpur', 'bagerhat', 'chuadanga', 'jhenaidah', 'magura', 'meherpur', 'narail', 'satkhira',
      'natore', 'joypurhat', 'naogaon', 'chapai', 'nawabganj', 'pancagarh', 'kurigram', 'lalmonirhat', 'nilphamari',
      'gaibandha', 'thakurgaon', 'habiganj', 'moulvibazar', 'sunamganj', 'chandpur', 'lakshmipur', 'brahmanbaria',
      'khagrachhari', 'rangamati', 'bandarban', 'bhola', 'jhalokati', 'patuakhali', 'pirojpur', 'barguna'
    ];

    let matchedCity = null;
    for (const city of bdCities) {
      if (userMsg.includes(city)) {
        matchedCity = city;
        break;
      }
    }

    let locationMatch = null;
    if (matchedCity) {
      try {
        const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(matchedCity + ', Bangladesh')}&format=json&limit=1`;
        const geoRes = await fetch(geoUrl, {
          headers: { 'User-Agent': 'Decorate3D-Marketplace-AI-Assistant' }
        });
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData && geoData.length > 0) {
            locationMatch = {
              lat: parseFloat(geoData[0].lat),
              lng: parseFloat(geoData[0].lon),
              name: geoData[0].display_name.split(',')[0]
            };
            console.log(`[AI Assistant Dynamic Geo] Resolved "${matchedCity}" to lat: ${locationMatch.lat}, lng: ${locationMatch.lng}`);
          }
        }
      } catch (geoErr) {
        console.warn('[AI Assistant Warning] Geocoding failed:', geoErr.message);
      }
    }

    if (locationMatch) {
      const sellerGeo = SELLER_GEO_DATA[productId];
      if (sellerGeo) {
        // Haversine straight line + road estimate multiplier
        const straightKm = haversineKm(sellerGeo.lat, sellerGeo.lng, locationMatch.lat, locationMatch.lng);
        const roadKm = Math.round(straightKm * 1.3 * 10) / 10;
        const baseFee = Math.max(Math.round(roadKm * RATE_PER_KM), MIN_BASE_FEE);
        const volumeSurcharge = getVolumeSurcharge(product.dimensions);
        const totalFee = baseFee + volumeSurcharge;

        systemPrompt += `
**ADDITIONAL SHIPPING INFO FOR THIS CHAT TURN**:
The user mentioned they live in or are currently in "${locationMatch.name}". You have dynamically calculated their shipping details:
- Seller Location: "${product.seller?.location || 'Seller Location'}"
- Buyer Location: "${locationMatch.name}"
- Estimated Driving Distance: ${roadKm} km
- Estimated Shipping Fee: ৳${totalFee} BDT (comprising Base Fee: ৳${baseFee} BDT + Surcharge: ৳${volumeSurcharge} BDT)
- Inform the buyer about these exact details (distance: ${roadKm} km, fee: ৳${totalFee} BDT) directly, naturally, and politely in your response, so they don't have to look at the card.
`;
      }
    }

    // 4. Format the chat history for Gemini API content structure
    const contents = [];
    messages.forEach(msg => {
      contents.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      });
    });

    const payload = {
      contents,
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        temperature: 0.7
      }
    };

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({ success: false, message: 'Gemini API key is not configured.' });
    }

    // Use the stable gemini-3.5-flash-lite model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini Assistant Chat failed:', response.status, errorText);
      return res.status(200).json({
        success: true,
        reply: `Thanks for your query! The seller list price for this ${product.title} is $${product.price} in ${product.conditionGrade || 'GOOD'} condition. If you want to proceed with a purchase or place a custom secure escrow offer, you can click the securing button below.`
      });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      throw new Error('Gemini API returned empty chat response.');
    }

    return res.status(200).json({ success: true, reply: reply.trim() });

  } catch (error) {
    console.error('Assistant Chat Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Seller Coordinates mapped to Listing ID
const SELLER_GEO_DATA = {
  '66b1a1112233445566778899': { lat: 23.8103, lng: 90.4125 },
  '66b1a22233445566778899aa': { lat: 23.7960, lng: 90.4070 },
  '66b1a333445566778899aabb': { lat: 23.7461, lng: 90.3742 },
  '66b1a4445566778899aabbcc': { lat: 23.8759, lng: 90.3795 }
};

const RATE_PER_KM = 8;
const MIN_BASE_FEE = 120;
const SURCHARGE_SMALL = 0;
const SURCHARGE_MEDIUM = 80;
const SURCHARGE_LARGE = 180;

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function parseDimensionToInches(dimStr) {
  if (!dimStr) return 12;
  const num = parseFloat(dimStr);
  if (isNaN(num)) return 12;
  const lower = dimStr.toLowerCase();
  if (lower.includes('cm')) return num / 2.54;
  return num;
}

function getVolumeSurcharge(dimensions) {
  if (!dimensions) return SURCHARGE_MEDIUM;
  const w = parseDimensionToInches(dimensions.width || dimensions.w || '');
  const d = parseDimensionToInches(dimensions.depth || dimensions.d || '');
  const h = parseDimensionToInches(dimensions.height || dimensions.h || '');
  const volume = w * d * h;
  if (volume < 10000) return SURCHARGE_SMALL;
  if (volume < 25000) return SURCHARGE_MEDIUM;
  return SURCHARGE_LARGE;
}

function getTransportVehicle(dimensions) {
  if (!dimensions) return 'Covered Delivery Van';
  const w = parseDimensionToInches(dimensions.width || dimensions.w || '');
  const d = parseDimensionToInches(dimensions.depth || dimensions.d || '');
  const h = parseDimensionToInches(dimensions.height || dimensions.h || '');
  const volume = w * d * h;
  if (volume < 10000) return 'Rickshaw Delivery Van or Motorcycle Courier';
  if (volume < 25000) return 'Mini Pickup Truck (Tata Ace) or Large Rickshaw Van';
  return 'Covered Cargo Van or 1.5-Ton Pickup Truck';
}
