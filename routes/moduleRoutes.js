import express from 'express';
import { getModuleStatus, roomPlannerLayoutHook, deliveryQuoteHook, getPricingRecommendation } from '../controllers/moduleHooksController.js';
import { getAllProductLocations } from '../features/f9-geo-map/geo.controller.js';
import { getShippingQuote } from '../features/f10-shipping-quote/shipping.controller.js';

const router = express.Router();

router.get('/status', getModuleStatus);
router.get('/m2/room-planner-layouts', roomPlannerLayoutHook);
router.get('/m2/delivery-quote-calc', deliveryQuoteHook);
router.post('/m2/price-recommendation', getPricingRecommendation);
router.get('/m3/geo-map-finder', getAllProductLocations);
router.post('/m3/shipping-price-quote', getShippingQuote);

export default router;
