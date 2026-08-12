import express from 'express';
import { getEscrowOrders, verifyOtpAndRelease } from './escrow.controller.js';

const router = express.Router();

// GET /api/escrow/orders — returns all escrow orders
router.get('/orders', getEscrowOrders);

// POST /api/escrow/verify-otp — seller submits OTP to unlock escrow
router.post('/verify-otp', verifyOtpAndRelease);

export default router;
