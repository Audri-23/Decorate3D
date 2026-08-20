import express from 'express';
import {
  startTracking,
  getTrackingState,
  updateCourierLocation,
  getRouteGeometry,
  resetTracking
} from './tracking.controller.js';

const router = express.Router();

// F12 — Live Delivery Tracking Routes (no server-side auth — role enforced on frontend)
router.post('/:jobId/start',    startTracking);         // POST /api/tracking/:jobId/start
router.get('/:jobId',           getTrackingState);       // GET  /api/tracking/:jobId
router.put('/:jobId/location',  updateCourierLocation);  // PUT  /api/tracking/:jobId/location
router.get('/:jobId/route',     getRouteGeometry);       // GET  /api/tracking/:jobId/route
router.post('/:jobId/reset',    resetTracking);          // POST /api/tracking/:jobId/reset

export default router;
