import mongoose from 'mongoose';

// ─── Mongoose Schema (optional — used only when MongoDB is connected) ───────────
const bidSchema = new mongoose.Schema({
  courierId:    { type: String, required: true },
  courierName:  { type: String, required: true },
  bidAmountBDT: { type: Number, required: true },
  note:         { type: String, default: '' },
  placedAt:     { type: Date, default: Date.now }
}, { _id: false });

const dispatchJobSchema = new mongoose.Schema({
  productId:      { type: String, required: true },
  productTitle:   { type: String, required: true },
  productImage:   { type: String, default: '' },
  category:       { type: String, default: 'Furniture' },
  conditionGrade: { type: String, default: 'GOOD' },
  dimensions: {
    width:  { type: String, default: '' },
    depth:  { type: String, default: '' },
    height: { type: String, default: '' }
  },
  itemVolumeTier:   { type: String, enum: ['SMALL', 'MEDIUM', 'LARGE'], default: 'MEDIUM' },
  pickupAddress:    { type: String, required: true },
  pickupLat:        { type: Number, required: true },
  pickupLng:        { type: Number, required: true },
  dropoffAddress:   { type: String, required: true },
  dropoffLat:       { type: Number, required: true },
  dropoffLng:       { type: Number, required: true },
  distanceKm:       { type: Number, default: 0 },
  suggestedFeeBDT:  { type: Number, default: 0 },
  status:           { type: String, enum: ['OPEN', 'BIDDING', 'LOCKED', 'COMPLETED'], default: 'OPEN' },
  bids:             [bidSchema],
  lockedByCourierId:   { type: String, default: null },
  lockedByCourierName: { type: String, default: null },
  sellerName:       { type: String, default: '' },
  buyerName:        { type: String, default: '' },
  createdAt:        { type: Date, default: Date.now }
});

export const DispatchJobModel = mongoose.models.DispatchJob
  || mongoose.model('DispatchJob', dispatchJobSchema);

// ─── In-Memory Seed Jobs ──────────────────────────────────────────────────────
// Each job represents a sold furniture item needing local courier transport.
export const inMemoryDispatchJobs = [
  {
    _id: 'job_dispatch_001',
    productId: '66b1a1112233445566778899',
    productTitle: 'Mid-Century Modern Tan Leather Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80',
    category: 'Chairs',
    conditionGrade: 'GOOD',
    dimensions: { width: '32 in', depth: '35 in', height: '34 in' },
    itemVolumeTier: 'MEDIUM',
    pickupAddress: 'Moghbazar, Dhaka (Seller Warehouse)',
    pickupLat: 23.8103,
    pickupLng: 90.4125,
    dropoffAddress: 'Bashundhara R/A, Dhaka (Buyer Residence)',
    dropoffLat: 23.8148,
    dropoffLng: 90.4270,
    distanceKm: 5.8,
    suggestedFeeBDT: 166,
    status: 'OPEN',
    bids: [],
    lockedByCourierId: null,
    lockedByCourierName: null,
    sellerName: 'Muhtasim Ahmed',
    buyerName: 'Ayasha Rahman',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    _id: 'job_dispatch_002',
    productId: '66b1a22233445566778899aa',
    productTitle: 'Minimalist Scandinavian Bouclé Accent Armchair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
    category: 'Chairs',
    conditionGrade: 'EXCELLENT',
    dimensions: { width: '30 in', depth: '31 in', height: '30 in' },
    itemVolumeTier: 'MEDIUM',
    pickupAddress: 'Gulshan-1, Dhaka (Seller Showroom)',
    pickupLat: 23.7960,
    pickupLng: 90.4070,
    dropoffAddress: 'Banani DOHS, Dhaka (Buyer Apartment)',
    dropoffLat: 23.7937,
    dropoffLng: 90.4066,
    distanceKm: 3.2,
    suggestedFeeBDT: 136,
    status: 'OPEN',
    bids: [],
    lockedByCourierId: null,
    lockedByCourierName: null,
    sellerName: 'Ashfaq Habib Rafi',
    buyerName: 'Nusrat Jahan',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
  },
  {
    _id: 'job_dispatch_003',
    productId: '66b1a333445566778899aabb',
    productTitle: 'Restoration Hardware Leather Club Chesterfield Sofa',
    productImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
    category: 'Sofas',
    conditionGrade: 'GOOD',
    dimensions: { width: '88 in', depth: '39 in', height: '32 in' },
    itemVolumeTier: 'LARGE',
    pickupAddress: 'Dhanmondi-27, Dhaka (Seller Home)',
    pickupLat: 23.7461,
    pickupLng: 90.3742,
    dropoffAddress: 'Mohammadpur, Dhaka (Buyer Office)',
    dropoffLat: 23.7590,
    dropoffLng: 90.3565,
    distanceKm: 4.5,
    suggestedFeeBDT: 216,
    status: 'OPEN',
    bids: [],
    lockedByCourierId: null,
    lockedByCourierName: null,
    sellerName: 'Injamamul Haque Fahim',
    buyerName: 'Demo Buyer Fahim',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
  },
  {
    _id: 'job_dispatch_004',
    productId: '66b1a4445566778899aabbcc',
    productTitle: 'Organic Live-Edge Walnut & Black Steel Coffee Table',
    productImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80',
    category: 'Tables',
    conditionGrade: 'EXCELLENT',
    dimensions: { width: '48 in', depth: '24 in', height: '18 in' },
    itemVolumeTier: 'MEDIUM',
    pickupAddress: 'Uttara Sector-7, Dhaka (Seller Garage)',
    pickupLat: 23.8759,
    pickupLng: 90.3795,
    dropoffAddress: 'Nikunja-2, Khilkhet, Dhaka (Buyer Home)',
    dropoffLat: 23.8340,
    dropoffLng: 90.4190,
    distanceKm: 7.1,
    suggestedFeeBDT: 177,
    status: 'LOCKED',
    bids: [
      {
        courierId: 'courier_seed_03',
        courierName: 'FastMove BD',
        bidAmountBDT: 200,
        note: 'Experienced with delicate furniture. Padding blankets included.',
        placedAt: new Date(Date.now() - 90 * 60 * 1000)
      }
    ],
    lockedByCourierId: 'courier_seed_03',
    lockedByCourierName: 'FastMove BD',
    sellerName: 'Shouvik Banik',
    buyerName: 'Tahmina Akter',
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
  }
];
