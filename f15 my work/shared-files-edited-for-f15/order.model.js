import mongoose from 'mongoose';

const f13OrderSchema = new mongoose.Schema({
  buyerEmail: {
    type: String,
    required: true
  },
  sellerEmail: {
    type: String,
    default: 'seller@decorate3d.com'
  },
  sellerStripeAccountId: {
    type: String,
    default: 'acct_1TestSellerAccount123'
  },
  productTitle: {
    type: String,
    required: true
  },
  productId: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  platformCommissionFee: {
    type: Number,
    required: true
  },
  sellerEarnings: {
    type: Number,
    required: true
  },
  stripePaymentIntentId: {
    type: String
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'succeeded', 'failed'],
    default: 'pending'
  },
  escrowStatus: {
    type: String,
    enum: ['LOCKED_IN_ESCROW', 'ASSIGNED_TO_COURIER', 'DISPATCHED', 'DELIVERED', 'RELEASED_TO_SELLER', 'DISPUTED', 'REFUNDED', 'SPLIT_RESOLVED'],
    default: 'LOCKED_IN_ESCROW'
  },
  assignedCourierId: {
    type: String,
    default: null
  },
  assignedCourierName: {
    type: String,
    default: null
  },
  deliveryMethod: {
    type: String,
    enum: ['OTP', 'DISPUTE_RESOLUTION', null],
    default: null
  },
  deliveredAt: {
    type: Date,
    default: null
  },
  invoiceUrl: {
    type: String,
    default: null
  },
  otpCode: {
    type: String,
    default: () => Math.floor(1000 + Math.random() * 9000).toString()
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const F13OrderModel = mongoose.models.F13Order || mongoose.model('F13Order', f13OrderSchema);
