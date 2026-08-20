import express from 'express';
import {
  getDispatchJobs,
  getDispatchJobById,
  createDispatchJob,
  placeBid,
  lockJob,
  completeJob
} from './dispatch.controller.js';

const router = express.Router();

// F11 — Courier Dispatch Board Routes (no server-side auth — role enforced on frontend)
router.get('/',               getDispatchJobs);    // GET  /api/dispatch
router.get('/:id',            getDispatchJobById); // GET  /api/dispatch/:id
router.post('/',              createDispatchJob);  // POST /api/dispatch
router.post('/:id/bid',       placeBid);           // POST /api/dispatch/:id/bid
router.post('/:id/lock',      lockJob);            // POST /api/dispatch/:id/lock
router.patch('/:id/complete', completeJob);        // PATCH /api/dispatch/:id/complete

export default router;
