import express from 'express';
import { createDispute, listDisputes, resolveDispute, uploadDisputeEvidence } from './dispute.controller.js';
import { upload } from '../../config/multer.js';

const router = express.Router();

// Mounted under /api/disputes
router.post('/upload', upload.array('files', 5), uploadDisputeEvidence);
router.post('/', createDispute);
router.get('/', listDisputes);
router.patch('/:id/resolve', resolveDispute);

export default router;
