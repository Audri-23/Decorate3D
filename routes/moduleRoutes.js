import express from 'express';
import { getModuleStatus, roomPlannerLayoutHook, deliveryQuoteHook } from '../controllers/moduleHooksController.js';

const router = express.Router();

router.get('/status', getModuleStatus);
router.get('/m2/room-planner-layouts', roomPlannerLayoutHook);
router.get('/m2/delivery-quote-calc', deliveryQuoteHook);

export default router;
