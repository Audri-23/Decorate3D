import mongoose from 'mongoose';

const customAssetSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  filename: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  placementType: { type: String, enum: ['FLOOR', 'WALL', 'CEILING', 'FREE'], default: 'FLOOR' },
  modelUrl: { type: String, required: true },
  thumbnailUrl: { type: String, default: '' },
  dimensions: {
    width: { type: Number, default: 1.0 },
    depth: { type: Number, default: 1.0 },
    height: { type: Number, default: 1.0 }
  },
  createdAt: { type: Date, default: Date.now }
});

export const CustomAssetModel = mongoose.models.CustomAsset || mongoose.model('CustomAsset', customAssetSchema);
