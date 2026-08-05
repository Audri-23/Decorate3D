import express from 'express';
import { createPaymentIntent, handleStripeWebhook } from './stripe.controller.js';

const router = express.Router();

router.post('/create-payment-intent', createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook);

export default router;
