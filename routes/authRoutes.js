import express from 'express';
import { loginUser, registerUser, verifyOTP, resendOTP, getUserProfile } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.get('/profile', getUserProfile);

export default router;
