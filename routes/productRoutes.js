import express from 'express';
import { getProducts, getProductById, get3DModelSpecs } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/:id/3d-specs', get3DModelSpecs);

export default router;
