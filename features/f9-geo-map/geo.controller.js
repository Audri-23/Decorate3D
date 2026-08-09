import { seedProductsData } from '../../models/seedData.js';

const PRODUCT_GEO_DATA = {
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

function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export const getGeoListings = (req, res) => {
  try {
    const {
      lat,
      lng,
      radius = 15,
      category,
      condition
    } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        success: false,
        message: 'Buyer GPS coordinates (lat, lng) are required.'
      });
    }

    const buyerLat = parseFloat(lat);
    const buyerLng = parseFloat(lng);
    const searchRadius = parseFloat(radius);

    if (isNaN(buyerLat) || isNaN(buyerLng) || isNaN(searchRadius)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid coordinate or radius values provided.'
      });
    }

    const geoEnrichedListings = seedProductsData
      .map((product) => {
        const geo = PRODUCT_GEO_DATA[product._id];
        if (!geo) return null;

        const distanceKm = haversineDistanceKm(
          buyerLat,
          buyerLng,
          geo.lat,
          geo.lng
        );

        return {
          ...product,
          geo: {
            lat: geo.lat,
            lng: geo.lng,
            address: geo.address,
            distanceKm: Math.round(distanceKm * 10) / 10
          }
        };
      })
      .filter((p) => {
        if (!p) return false;
        if (p.geo.distanceKm > searchRadius) return false;
        if (category && category !== 'All' && p.category.toLowerCase() !== category.toLowerCase()) return false;
        if (condition && condition !== 'All' && p.conditionGrade !== condition) return false;
        return true;
      })
      .sort((a, b) => a.geo.distanceKm - b.geo.distanceKm);

    return res.status(200).json({
      success: true,
      feature: 'Geo Map Finder',
      buyerLocation: { lat: buyerLat, lng: buyerLng },
      searchRadiusKm: searchRadius,
      totalFound: geoEnrichedListings.length,
      listings: geoEnrichedListings
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch geo listings.'
    });
  }
};

export const getAllProductLocations = (req, res) => {
  try {
    const allPins = seedProductsData.map((product) => {
      const geo = PRODUCT_GEO_DATA[product._id];
      if (!geo) return null;
      return {
        _id: product._id,
        title: product.title,
        price: product.price,
        category: product.category,
        conditionGrade: product.conditionGrade,
        images: product.images,
        seller: product.seller,
        geo: {
          lat: geo.lat,
          lng: geo.lng,
          address: geo.address
        }
      };
    }).filter(Boolean);

    return res.status(200).json({
      success: true,
      feature: 'Geo Map Finder',
      totalPins: allPins.length,
      pins: allPins
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch product pin locations.'
    });
  }
};
