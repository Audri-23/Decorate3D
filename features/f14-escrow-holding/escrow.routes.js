import express from 'express';
import { getEscrowOrders, verifyOtpAndRelease } from './escrow.controller.js';

const router = express.Router();

// returns all escrow orders
router.get('/orders', getEscrowOrders);

// seller submits OTP to unlock escrow
router.post('/verify-otp', verifyOtpAndRelease);

export default router;
