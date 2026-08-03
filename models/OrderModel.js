import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  buyer: { type: String, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  productTitle: { type: String },
  amount: { type: Number, required: true },
  escrowStatus: { type: String, enum: ['LOCKED_IN_ESCROW', 'DISPATCHED', 'DELIVERED', 'RELEASED_TO_SELLER'], default: 'LOCKED_IN_ESCROW' },
  courierAssigned: { type: String, default: 'Pending Local Dispatch' },
  otpCode: { type: String, default: '8492' },
  createdAt: { type: Date, default: Date.now }
});

export const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);
