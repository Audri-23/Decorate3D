import express from 'express';
import { getModuleStatus, roomPlannerLayoutHook, deliveryQuoteHook, getPricingRecommendation } from '../controllers/moduleHooksController.js';

const router = express.Router();

router.get('/status', getModuleStatus);
router.get('/m2/room-planner-layouts', roomPlannerLayoutHook);
router.get('/m2/delivery-quote-calc', deliveryQuoteHook);
router.post('/m2/price-recommendation', getPricingRecommendation);

export default router;

