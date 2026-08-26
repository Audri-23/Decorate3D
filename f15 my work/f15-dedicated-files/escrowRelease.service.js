import mongoose from 'mongoose';
import { F13OrderModel } from '../f13-stripe-checkout/order.model.js';
import { generateInvoice } from './invoice.controller.js';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Escrow Status State Machine Diagram
 * ─────────────────────────────────────────────────────────────────────────────
 * LOCKED_IN_ESCROW
 *    │
 *    ├──(seller enters correct OTP, F14)──► RELEASED_TO_SELLER (Triggers PDF Invoice, F15)
 *    │
 *    └──(buyer or seller raises dispute, F16)──► DISPUTED
 *                                                  │
 *                                                  ├──(admin: release to seller)──► RELEASED_TO_SELLER (Invoice, F15)
 *                                                  ├──(admin: refund to buyer)────► REFUNDED
 *                                                  └──(admin: split)──────────────► SPLIT_RESOLVED
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Shared Escrow Release Service
 * The single source of truth called by OTP Handover (F14) and Admin Dispute Resolution (F16).
 * Automatically triggers official PDF Invoice generation (F15).
 *
 * @param {string} orderId
 * @param {'OTP' | 'DISPUTE_RESOLUTION'} deliveryMethod
 * @param {{ bypassDisputeCheck?: boolean }} options
 */
export async function releaseEscrow(orderId, deliveryMethod, options = {}) {
  try {
    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    let order = null;

    if (isMongoConnected) {
      order = await F13OrderModel.findById(orderId);
    } else {
      // In-memory demo fallback lookup if Mongo is offline
      order = global.demoEscrowOrders?.find(o => String(o._id) === String(orderId)) || null;
    }

    if (!order) {
      return { success: false, status: 404, error: 'Order not found.' };
    }

    // F16 integration point: block release while disputed, UNLESS admin is resolving
    if (order.escrowStatus === 'DISPUTED' && !options.bypassDisputeCheck) {
      return {
        success: false,
        status: 409,
        error: 'This order is under dispute and cannot be released.'
      };
    }

    // Guard: block double release
    if (order.escrowStatus === 'RELEASED_TO_SELLER') {
      return {
        success: false,
        status: 409,
        error: 'This order has already been released.'
      };
    }

    // Update order fields
    order.escrowStatus = 'RELEASED_TO_SELLER';
    order.deliveryMethod = deliveryMethod;
    order.deliveredAt = new Date();

    if (isMongoConnected) {
      await order.save();
    }

    // Generate PDF invoice (wrapped safely so invoice generation failure never blocks release)
    try {
      await generateInvoice(order);
    } catch (invErr) {
      console.warn('[EscrowReleaseService] PDF invoice generation warning:', invErr.message);
    }

    return {
      success: true,
      status: 200,
      message: `Escrow unlocked successfully via ${deliveryMethod}! Seller payout has been released.`,
      order
    };

  } catch (error) {
    return { success: false, status: 500, error: error.message };
  }
}
