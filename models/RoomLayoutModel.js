import mongoose from 'mongoose';

const placedItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  productId: { type: String, default: null },
  title: { type: String, required: true },
  category: { type: String, default: 'Furniture' },
  placementType: { type: String, enum: ['FLOOR', 'WALL', 'CEILING', 'FREE'], default: 'FLOOR' },
  modelUrl: { type: String, required: true },
  customFrameImageUrl: { type: String, default: '' },
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    z: { type: Number, default: 0 }
  },
  rotation: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    z: { type: Number, default: 0 }
  },
  scale: {
    x: { type: Number, default: 1.0 },
    y: { type: Number, default: 1.0 },
    z: { type: Number, default: 1.0 }
  },
  dimensions: {
    width: { type: Number, default: 0.9 },
    depth: { type: Number, default: 0.9 },
    height: { type: Number, default: 0.85 }
  }
});

const doorWindowSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, enum: ['door', 'window'], default: 'door' },
  wall: { type: String, enum: ['north', 'south', 'east', 'west'], default: 'east' },
  offsetRatio: { type: Number, default: 0.5 }, // 0 to 1 along wall
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    z: { type: Number, default: 0 }
  },
  dimensions: {
    width: { type: Number, default: 0.9 },
    height: { type: Number, default: 2.1 }
  }
});

const roomLayoutSchema = new mongoose.Schema({
  userId: { type: String, default: 'guest_user' },
  layoutName: { type: String, default: 'My Architectural 3D Room' },
  roomDimensions: {
    width: { type: Number, default: 5.0 },   // X axis in meters
    length: { type: Number, default: 6.0 },  // Z axis in meters
    height: { type: Number, default: 3.0 },  // Y ceiling height in meters
    unit: { type: String, enum: ['m', 'ft'], default: 'm' }
  },
  wallCustomization: {
    paintColor: { type: String, default: '#EAE6E1' }, // Default architectural warm white/beige
    wallMaterial: { type: String, default: 'plaster' } // 'plaster', 'brick', 'concrete', 'wood_panel'
  },
  floorCustomization: {
    floorMaterial: { type: String, default: 'hardwood_oak' }, // 'hardwood_oak', 'walnut', 'marble_white', 'ceramic_tile', 'carpet_neutral'
    tintColor: { type: String, default: '#C29B72' }
  },
  openings: [doorWindowSchema],
  placedItems: [placedItemSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const RoomLayoutModel = mongoose.models.RoomLayout || mongoose.model('RoomLayout', roomLayoutSchema);
