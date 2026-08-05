/**
 * F9 — Geo Map Finder Routes
 * Assigned to: Injamamul Haque Fahim
 */

import express from 'express';
import { getGeoListings, getAllProductLocations } from './geo.controller.js';

const router = express.Router();

// GET /api/geo/listings?lat=&lng=&radius=&category=&condition=
router.get('/listings', getGeoListings);

// GET /api/geo/product-locations  (all pins for initial map load)
router.get('/product-locations', getAllProductLocations);

export default router;
