import express from 'express';
import { getGeoListings, getAllProductLocations } from './geo.controller.js';
import { getShippingQuote } from '../f10-shipping-quote/shipping.controller.js';

const router = express.Router();

router.get('/listings', getGeoListings);
router.get('/product-locations', getAllProductLocations);
router.post('/shipping-quote', getShippingQuote);

export default router;
