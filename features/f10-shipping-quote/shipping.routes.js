import express from 'express';
import { getShippingQuote } from './shipping.controller.js';

const router = express.Router();

router.post('/shipping-quote', getShippingQuote);

export default router;
