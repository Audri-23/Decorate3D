import mongoose from 'mongoose';
import { stripe } from './stripeClient.js';
import { F13OrderModel } from './order.model.js';

const inMemoryF13Orders = [];

const PLATFORM_COMMISSION_PERCENTAGE = 10;

export async function createPaymentIntent(req, res) {
  try {
    const { amount, productTitle, productId, buyerEmail, sellerEmail, sellerStripeAccountId } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: 'Valid payment amount is required.' });
    }

    const totalAmountInCents = Math.round(amount * 100);
    const platformFeeInCents = Math.round(totalAmountInCents * (PLATFORM_COMMISSION_PERCENTAGE / 100));
    const targetSellerAccountId = sellerStripeAccountId || 'acct_1TestSellerAccount123';

    const paymentIntentParams = {
      amount: totalAmountInCents,
      currency: 'usd',
      payment_method_types: ['card'],
      description: `Decorate3D Furniture Escrow Purchase: ${productTitle || 'Used Furniture Item'}`,
      metadata: {
        productTitle: productTitle || 'Furniture Item',
        productId: productId || 'item_123',
        buyerEmail: buyerEmail || 'buyer@example.com',
        platformCommissionFee: (platformFeeInCents / 100).toFixed(2)
      }
    };

    if (targetSellerAccountId && targetSellerAccountId.startsWith('acct_')) {
      try {
        paymentIntentParams.application_fee_amount = platformFeeInCents;
        paymentIntentParams.transfer_data = {
          destination: targetSellerAccountId
        };
      } catch (err) {
        console.warn('Stripe Connect seller account parameters omitted:', err.message);
      }
    }

    let paymentIntent;
    try {
      paymentIntent = await stripe.paymentIntents.create(paymentIntentParams);
    } catch (stripeErr) {
      delete paymentIntentParams.application_fee_amount;
      delete paymentIntentParams.transfer_data;
      paymentIntent = await stripe.paymentIntents.create(paymentIntentParams);
    }

    const orderPayload = {
      buyerEmail: buyerEmail || 'buyer@example.com',
      sellerEmail: sellerEmail || 'seller@decorate3d.com',
      sellerStripeAccountId: targetSellerAccountId,
      productTitle: productTitle || 'Furniture Item',
      productId: productId || 'item_123',
      amount: amount,
      platformCommissionFee: Number((platformFeeInCents / 100).toFixed(2)),
      sellerEarnings: Number(((totalAmountInCents - platformFeeInCents) / 100).toFixed(2)),
      stripePaymentIntentId: paymentIntent.id,
      paymentStatus: 'pending',
      escrowStatus: 'LOCKED_IN_ESCROW'
    };

    let newOrderId;

    if (mongoose.connection && mongoose.connection.readyState === 1) {
      try {
        const dbOrder = await F13OrderModel.create(orderPayload);
        newOrderId = dbOrder._id;
      } catch (dbErr) {
        newOrderId = 'ord_' + Date.now();
        inMemoryF13Orders.push({ _id: newOrderId, ...orderPayload });
      }
    } else {
      newOrderId = 'ord_' + Date.now();
      inMemoryF13Orders.push({ _id: newOrderId, ...orderPayload });
    }

    return res.status(200).json({
      success: true,
      clientSecret: paymentIntent.clientSecret || paymentIntent.client_secret,
      orderId: newOrderId,
      paymentIntentId: paymentIntent.id,
      summary: {
        totalPrice: amount,
        platformCommissionFee: (platformFeeInCents / 100).toFixed(2),
        sellerEarnings: ((totalAmountInCents - platformFeeInCents) / 100).toFixed(2)
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to create Stripe Payment Intent'
    });
  }
}

export async function handleStripeWebhook(req, res) {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (webhookSecret && sig) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    }
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;

    try {
      if (mongoose.connection && mongoose.connection.readyState === 1) {
        await F13OrderModel.findOneAndUpdate(
          { stripePaymentIntentId: paymentIntent.id },
          { paymentStatus: 'succeeded', escrowStatus: 'LOCKED_IN_ESCROW' },
          { new: true }
        );
      } else {
        const memoryOrder = inMemoryF13Orders.find(o => o.stripePaymentIntentId === paymentIntent.id);
        if (memoryOrder) {
          memoryOrder.paymentStatus = 'succeeded';
          memoryOrder.escrowStatus = 'LOCKED_IN_ESCROW';
        }
      }
    } catch (dbErr) {
      console.error('Error updating order via webhook:', dbErr);
    }
  }

  res.status(200).json({ received: true });
}
