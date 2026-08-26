import express from 'express';
import { downloadInvoice } from './invoice.controller.js';

const router = express.Router();

// Mounted under /api/escrow/invoice/:orderId
router.get('/invoice/:orderId', downloadInvoice);

export default router;
