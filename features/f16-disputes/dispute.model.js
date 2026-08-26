import mongoose from 'mongoose';

const disputeSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  raisedBy: { type: String, enum: ['buyer', 'seller'], required: true },
  raisedByEmail: { type: String, required: true },
  reason: {
    type: String,
    enum: ['ITEM_DAMAGED', 'NOT_DELIVERED', 'WRONG_ITEM', 'OTHER'],
    required: true
  },
  description: { type: String, required: true },
  evidenceImageUrls: [{ type: String }],
  status: {
    type: String,
    enum: ['OPEN', 'UNDER_REVIEW', 'RESOLVED'],
    default: 'OPEN'
  },
  resolutionOutcome: {
    type: String,
    enum: ['RELEASED_TO_SELLER', 'REFUNDED_TO_BUYER', 'SPLIT', null],
    default: null
  },
  resolutionNote: { type: String, default: null },
  sellerSplitAmount: { type: Number, default: 0 },
  buyerRefundAmount: { type: Number, default: 0 },
  resolvedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

export const DisputeModel = mongoose.models.Dispute || mongoose.model('Dispute', disputeSchema);

// In-memory fallback (empty for clean demo)
export const demoDisputes = [];
