import mongoose from 'mongoose';
import { DisputeModel, demoDisputes } from './dispute.model.js';
import { F13OrderModel } from '../f13-stripe-checkout/order.model.js';
import { releaseEscrow } from '../f15-invoice/escrowRelease.service.js';
import { generateInvoice } from '../f15-invoice/invoice.controller.js';

// POST /api/disputes
export async function createDispute(req, res) {
  try {
    const { orderId, raisedBy, raisedByEmail, reason, description, evidenceImageUrls } = req.body;

    if (!orderId || !raisedBy || !raisedByEmail || !reason || !description) {
      return res.status(400).json({
        success: false,
        error: 'orderId, raisedBy, raisedByEmail, reason, and description are required.'
      });
    }

    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    let order = null;
    if (isMongoConnected) {
      order = await F13OrderModel.findById(orderId);
    } else {
      order = global.demoEscrowOrders?.find(o => String(o._id) === String(orderId)) || null;
    }

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found.' });
    }

    // Eligibility Window Check: locked/assigned, OR released within 48 hours
    if (order.escrowStatus === 'RELEASED_TO_SELLER') {
      const deliveredTime = order.deliveredAt ? new Date(order.deliveredAt).getTime() : Date.now();
      const hoursSinceDelivery = (Date.now() - deliveredTime) / (1000 * 60 * 60);
      if (hoursSinceDelivery > 48) {
        return res.status(409).json({
          success: false,
          error: 'The 48-hour dispute window has closed for this order.'
        });
      }
    }

    // Prevent duplicate open disputes on same order
    let existingDispute = null;
    if (isMongoConnected) {
      existingDispute = await DisputeModel.findOne({
        orderId: String(order._id),
        status: { $in: ['OPEN', 'UNDER_REVIEW'] }
      });
    } else {
      existingDispute = demoDisputes.find(d => String(d.orderId) === String(order._id) && d.status !== 'RESOLVED');
    }

    if (existingDispute) {
      return res.status(409).json({
        success: false,
        error: 'An active dispute is already under review for this order.'
      });
    }

    // Create dispute record
    const disputePayload = {
      _id: isMongoConnected ? undefined : 'dispute_' + Date.now(),
      orderId: String(order._id),
      raisedBy,
      raisedByEmail,
      reason,
      description,
      evidenceImageUrls: Array.isArray(evidenceImageUrls) ? evidenceImageUrls : [],
      status: 'OPEN',
      createdAt: new Date()
    };

    let newDispute = null;
    if (isMongoConnected) {
      newDispute = await DisputeModel.create(disputePayload);
    } else {
      newDispute = { ...disputePayload, _id: 'dispute_' + Date.now() };
      demoDisputes.unshift(newDispute);
    }

    // Freeze order if still in locked or assigned state
    if (order.escrowStatus === 'LOCKED_IN_ESCROW' || order.escrowStatus === 'ASSIGNED_TO_COURIER') {
      order.escrowStatus = 'DISPUTED';
      if (isMongoConnected) {
        await order.save();
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Dispute submitted successfully. Escrow release frozen pending admin mediation.',
      dispute: newDispute,
      order
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

// GET /api/disputes
export async function listDisputes(req, res) {
  try {
    const { status } = req.query;
    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      const filter = {};
      if (status && status !== 'ALL') filter.status = status;
      const disputes = await DisputeModel.find(filter).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, disputes });
    } else {
      let filtered = demoDisputes;
      if (status && status !== 'ALL') {
        filtered = demoDisputes.filter(d => d.status === status);
      }
      return res.status(200).json({ success: true, disputes: filtered });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

// PATCH /api/disputes/:id/resolve
export async function resolveDispute(req, res) {
  try {
    const { id } = req.params;
    const { resolutionOutcome, resolutionNote, sellerSplitAmount, buyerRefundAmount } = req.body;

    if (!resolutionOutcome) {
      return res.status(400).json({ success: false, error: 'resolutionOutcome is required.' });
    }

    const validOutcomes = ['RELEASED_TO_SELLER', 'REFUNDED_TO_BUYER', 'SPLIT'];
    if (!validOutcomes.includes(resolutionOutcome)) {
      return res.status(400).json({ success: false, error: 'Invalid resolution outcome.' });
    }

    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    let dispute = null;
    let order = null;

    if (isMongoConnected) {
      dispute = await DisputeModel.findById(id);
      if (dispute) {
        order = await F13OrderModel.findById(dispute.orderId);
      }
    } else {
      dispute = demoDisputes.find(d => String(d._id) === String(id));
      if (dispute) {
        order = global.demoEscrowOrders?.find(o => String(o._id) === String(dispute.orderId)) || null;
      }
    }

    if (!dispute) {
      return res.status(404).json({ success: false, error: 'Dispute not found.' });
    }

    if (dispute.status === 'RESOLVED') {
      return res.status(409).json({ success: false, error: 'This dispute has already been resolved.' });
    }

    if (!order) {
      return res.status(404).json({ success: false, error: 'Associated order not found.' });
    }

    // Branch on resolution outcome
    if (resolutionOutcome === 'RELEASED_TO_SELLER') {
      // Call shared release service with bypassDisputeCheck = true
      const releaseResult = await releaseEscrow(order._id, 'DISPUTE_RESOLUTION', { bypassDisputeCheck: true });
      if (!releaseResult.success) {
        return res.status(releaseResult.status || 400).json(releaseResult);
      }
      order = releaseResult.order;
    } else if (resolutionOutcome === 'REFUNDED_TO_BUYER') {
      order.escrowStatus = 'REFUNDED';
      order.deliveryMethod = 'DISPUTE_RESOLUTION';
      order.deliveredAt = new Date();
      if (isMongoConnected) {
        await order.save();
      }
      try {
        await generateInvoice(order);
      } catch (invErr) {
        console.warn('[DisputeController] Invoice generation warning:', invErr.message);
      }
    } else if (resolutionOutcome === 'SPLIT') {
      const sellerAmt = Number(sellerSplitAmount || 0);
      const buyerAmt = Number(buyerRefundAmount || 0);
      const totalAmount = Number(order.amount || 0);
      const platformCommission = Number(order.platformCommissionFee || (totalAmount * 0.10));
      const allowedSplitSum = Number((totalAmount - platformCommission).toFixed(2));

      // Validate split math: Sum of splitted = Total Price - Platform Commission
      if (Math.abs((sellerAmt + buyerAmt) - allowedSplitSum) > 0.01) {
        return res.status(400).json({
          success: false,
          error: `The sum of splitted amounts ($${sellerAmt.toFixed(2)} + $${buyerAmt.toFixed(2)} = $${(sellerAmt + buyerAmt).toFixed(2)}) must be equal to Total Price ($${totalAmount.toFixed(2)}) minus Platform Commission ($${platformCommission.toFixed(2)}), which is $${allowedSplitSum.toFixed(2)}.`
        });
      }

      order.escrowStatus = 'SPLIT_RESOLVED';
      order.deliveryMethod = 'DISPUTE_RESOLUTION';
      order.sellerEarnings = Number(sellerAmt.toFixed(2));
      order.deliveredAt = new Date();
      if (isMongoConnected) {
        await order.save();
      }
      try {
        await generateInvoice(order);
      } catch (invErr) {
        console.warn('[DisputeController] Invoice generation warning:', invErr.message);
      }
    }

    // Update dispute record
    dispute.status = 'RESOLVED';
    dispute.resolutionOutcome = resolutionOutcome;
    dispute.resolutionNote = resolutionNote || 'Resolved by admin mediation.';
    dispute.sellerSplitAmount = Number(sellerSplitAmount || 0);
    dispute.buyerRefundAmount = Number(buyerRefundAmount || 0);
    dispute.resolvedAt = new Date();

    if (isMongoConnected) {
      await dispute.save();
    }

    return res.status(200).json({
      success: true,
      message: `Dispute resolved successfully: ${resolutionOutcome}.`,
      dispute,
      order
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

// POST /api/disputes/upload
export async function uploadDisputeEvidence(req, res) {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, error: 'No image file uploaded.' });
    }
    const files = req.files.map(file => {
      return {
        url: `/uploads/images/${file.filename}`,
        filename: file.filename
      };
    });
    return res.status(200).json({ success: true, files, url: files[0].url });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
