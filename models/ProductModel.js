import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  price: { type: Number, required: true },
  estimatedNewPrice: { type: Number, default: 0 },
  category: { type: String, default: 'Chairs' },
  conditionGrade: { type: String, enum: ['FAIR', 'GOOD', 'EXCELLENT'], default: 'GOOD' },
  isRareFind: { type: Boolean, default: true },
  description: { type: String, required: true },
  material: { type: String, default: 'Top-Grain Leather & Walnut Wood' },
  era: { type: String, default: 'Mid-Century Modern (1960s)' },
  dimensions: {
    width: { type: String, default: '32 in' },
    depth: { type: String, default: '35 in' },
    height: { type: String, default: '34 in' }
  },
  images: [{ type: String }],
  has3DModel: { type: Boolean, default: true },
  model3D: {
    archivalSeries: { type: String, default: 'Archival Series № 422' },
    polygonCount: { type: String, default: '124.2k' },
    lodLevel: { type: String, default: 'ULTRA' },
    defaultTexture: { type: String, default: 'tan' },
    materialVariants: [
      {
        id: { type: String },
        name: { type: String },
        colorHex: { type: String },
        previewColor: { type: String }
      }
    ],
    geometryType: { type: String, default: 'lounge_chair' }
  },
  seller: {
    name: { type: String, default: 'Muhtasim Ahmed' },
    rating: { type: Number, default: 4.9 },
    verified: { type: Boolean, default: true },
    location: { type: String, default: 'Dhaka, Bangladesh' }
  },
  createdAt: { type: Date, default: Date.now }
});

export const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema);
