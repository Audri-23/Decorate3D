import express from 'express';
import { getModuleStatus, roomPlannerLayoutHook, deliveryQuoteHook, getPricingRecommendation } from '../controllers/moduleHooksController.js';
import { getAllProductLocations } from '../features/f9-geo-map/geo.controller.js'; // F9 — Geo Map Finder (Injamamul Haque Fahim)

const router = express.Router();

router.get('/status', getModuleStatus);
router.get('/m2/room-planner-layouts', roomPlannerLayoutHook);
router.get('/m2/delivery-quote-calc', deliveryQuoteHook);
router.post('/m2/price-recommendation', getPricingRecommendation);
router.get('/m3/geo-map-finder', getAllProductLocations); // F9 — Geo Map Finder (Injamamul Haque Fahim)

export default router;

