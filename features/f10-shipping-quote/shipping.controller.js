import { seedProductsData } from '../../models/seedData.js';

const SELLER_GEO_DATA = {
  '66b1a1112233445566778899': {
    lat: 23.8103,
    lng: 90.4125,
    address: 'Dhaka, Bangladesh',
    sellerName: 'Muhtasim Ahmed'
  },
  '66b1a22233445566778899aa': {
    lat: 23.7960,
    lng: 90.4070,
    address: 'Gulshan, Dhaka',
    sellerName: 'Ashfaq Habib Rafi'
  },
  '66b1a333445566778899aabb': {
    lat: 23.7461,
    lng: 90.3742,
    address: 'Dhanmondi, Dhaka',
    sellerName: 'Fahim Ahmed'
  },
  '66b1a4445566778899aabbcc': {
    lat: 23.8759,
    lng: 90.3795,
    address: 'Uttara, Dhaka',
    sellerName: 'Shouvik Banik'
  }
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

function getVolumeTier(dimensions) {
  if (!dimensions) return { tier: 'MEDIUM', surcharge: SURCHARGE_MEDIUM };

  const w = parseDimensionToInches(dimensions.width || dimensions.w || '');
  const d = parseDimensionToInches(dimensions.depth || dimensions.d || '');
  const h = parseDimensionToInches(dimensions.height || dimensions.h || '');
  const volume = w * d * h;

  if (volume < 10000) return { tier: 'SMALL', surcharge: SURCHARGE_SMALL };
  if (volume < 25000) return { tier: 'MEDIUM', surcharge: SURCHARGE_MEDIUM };
  return { tier: 'LARGE', surcharge: SURCHARGE_LARGE };
}

async function fetchOSRMRoute(sellerLat, sellerLng, buyerLat, buyerLng) {
  const url =
    `https://router.project-osrm.org/route/v1/driving/` +
    `${sellerLng},${sellerLat};${buyerLng},${buyerLat}` +
    `?overview=false&alternatives=false`;

  try {
    const resp = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const json = await resp.json();

    if (json.code === 'Ok' && json.routes && json.routes.length > 0) {
      const route = json.routes[0];
      return {
        distanceKm: Math.round((route.distance / 1000) * 10) / 10,
        drivingDurationMin: Math.ceil(route.duration / 60),
        source: 'osrm_openstreetmap'
      };
    }
    return null;
  } catch {
    return null;
  }
}

export const getShippingQuote = async (req, res) => {
  try {
    const { buyerLat, buyerLng, productId } = req.body;

    if (buyerLat === undefined || buyerLng === undefined || !productId) {
      return res.status(400).json({
        success: false,
        message: 'Required fields: buyerLat (number), buyerLng (number), productId (string).'
      });
    }

    const bLat = parseFloat(buyerLat);
    const bLng = parseFloat(buyerLng);

    if (isNaN(bLat) || isNaN(bLng)) {
      return res.status(400).json({
        success: false,
        message: 'buyerLat and buyerLng must be valid numeric GPS coordinates.'
      });
    }

    const sellerGeo = SELLER_GEO_DATA[productId];
    if (!sellerGeo) {
      return res.status(404).json({
        success: false,
        message: `No seller location data found for productId: ${productId}`
      });
    }

    const product = seedProductsData.find((p) => p._id === productId);
    const { tier: volumeTier, surcharge: volumeSurcharge } = getVolumeTier(
      product?.dimensions
    );

    let distanceData = await fetchOSRMRoute(
      sellerGeo.lat,
      sellerGeo.lng,
      bLat,
      bLng
    );

    if (!distanceData) {
      const straightKm = haversineKm(sellerGeo.lat, sellerGeo.lng, bLat, bLng);
      const roadKm = Math.round(straightKm * 1.3 * 10) / 10;
      const durationMin = Math.ceil((roadKm / 30) * 60);
      distanceData = {
        distanceKm: roadKm,
        drivingDurationMin: durationMin,
        source: 'haversine_estimate'
      };
    }

    const baseFee = Math.max(
      Math.round(distanceData.distanceKm * RATE_PER_KM),
      MIN_BASE_FEE
    );
    const totalFee = baseFee + volumeSurcharge;

    return res.status(200).json({
      success: true,
      feature: 'Live Shipping Price Quote',
      productId,
      sellerAddress: sellerGeo.address,
      sellerName: sellerGeo.sellerName,
      buyerLocation: { lat: bLat, lng: bLng },
      distanceKm: distanceData.distanceKm,
      drivingDurationMin: distanceData.drivingDurationMin,
      distanceSource: distanceData.source,
      itemVolumeTier: volumeTier,
      pricing: {
        currency: 'BDT',
        ratePerKm: RATE_PER_KM,
        baseFee,
        volumeSurcharge,
        totalFee,
        breakdown: `Base (${distanceData.distanceKm} km × ৳${RATE_PER_KM}/km = ৳${baseFee}) + ${volumeTier} Volume Surcharge (৳${volumeSurcharge}) = ৳${totalFee}`
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to generate shipping quote.'
    });
  }
};
