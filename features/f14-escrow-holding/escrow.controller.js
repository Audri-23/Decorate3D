import mongoose from 'mongoose';
import { F13OrderModel } from '../f13-stripe-checkout/order.model.js';

// Demo orders used when MongoDB is offline or has no orders for demo accounts
const demoOrders = [
  {
    _id: 'demo_ord_001',
    buyerEmail: 'buyer@decorate3d.com',
    sellerEmail: 'seller@decorate3d.com',
    jobId: 'job_dispatch_004',
    productTitle: 'Organic Live-Edge Walnut & Black Steel Coffee Table',
    amount: 450,
    platformCommissionFee: 45,
    sellerEarnings: 405,
    stripePaymentIntentId: 'pi_demo_test_abc123',
    paymentStatus: 'succeeded',
    escrowStatus: 'LOCKED_IN_ESCROW',
    otpCode: '7291',
    createdAt: new Date()
  },
  {
    _id: 'demo_ord_002',
    buyerEmail: 'buyer@decorate3d.com',
    sellerEmail: 'seller@decorate3d.com',
    jobId: 'job_dispatch_001',
    productTitle: 'Mid-Century Modern Tan Leather Lounge Chair',
    amount: 320,
    platformCommissionFee: 32,
    sellerEarnings: 288,
    stripePaymentIntentId: 'pi_demo_test_xyz456',
    paymentStatus: 'succeeded',
    escrowStatus: 'LOCKED_IN_ESCROW',
    otpCode: '4853',
    createdAt: new Date()
  }
];

// GET /api/escrow/orders?buyerEmail=xxx&sellerEmail=yyy&escrowStatus=LOCKED_IN_ESCROW
// Returns orders filtered by buyerEmail, sellerEmail, and/or escrowStatus
export async function getEscrowOrders(req, res) {
  try {

    const { buyerEmail, sellerEmail, escrowStatus } = req.query;

    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      // Build the filter object
      const filter = {};
      if (buyerEmail) filter.buyerEmail = buyerEmail;
      if (sellerEmail) filter.sellerEmail = sellerEmail;
      if (escrowStatus) filter.escrowStatus = escrowStatus;

      let orders = await F13OrderModel.find(filter).sort({ createdAt: -1 });

      if (!orders || orders.length === 0) {
        let filtered = demoOrders;
        if (buyerEmail)   filtered = filtered.filter(o => o.buyerEmail === buyerEmail);
        if (sellerEmail)  filtered = filtered.filter(o => o.sellerEmail === sellerEmail);
        if (escrowStatus) filtered = filtered.filter(o => o.escrowStatus === escrowStatus);
        orders = filtered;
      }

      return res.status(200).json({ success: true, orders });
    } else {
      // MongoDB offline — filter demo orders manually
      let filtered = demoOrders;
      if (buyerEmail)   filtered = filtered.filter(o => o.buyerEmail === buyerEmail);
      if (sellerEmail)  filtered = filtered.filter(o => o.sellerEmail === sellerEmail);
      if (escrowStatus) filtered = filtered.filter(o => o.escrowStatus === escrowStatus);
      return res.status(200).json({ success: true, orders: filtered });
    }

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}


// Export demo orders globally for offline fallback in service files
global.demoEscrowOrders = demoOrders;

// POST /api/escrow/verify-otp
// Seller enters the OTP. If it matches, escrow is unlocked via shared service.
export async function verifyOtpAndRelease(req, res) {
  try {
    const { orderId, enteredOtp } = req.body;

    if (!orderId || !enteredOtp) {
      return res.status(400).json({ success: false, error: 'Order ID and OTP are required.' });
    }

    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    let targetOrder = null;
    if (isMongoConnected) {
      targetOrder = await F13OrderModel.findById(orderId);
    } else {
      targetOrder = demoOrders.find(o => String(o._id) === String(orderId));
    }

    if (!targetOrder) {
      return res.status(404).json({ success: false, error: 'Order not found.' });
    }

    // OTP validation check
    if (enteredOtp !== targetOrder.otpCode) {
      return res.status(400).json({ success: false, error: 'Incorrect OTP. Please ask the buyer for the correct code.' });
    }

    // Call shared release service (handles dispute check, status update, and invoice creation)
    const { releaseEscrow } = await import('../f15-invoice/escrowRelease.service.js');
    const result = await releaseEscrow(orderId, 'OTP');

    if (!result.success) {
      return res.status(result.status || 400).json(result);
    }

    return res.status(200).json({
      success: true,
      message: 'OTP verified! Escrow unlocked. Seller payout has been released.',
      order: result.order
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
