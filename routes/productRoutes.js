import express from 'express';
import {
  getProducts,
  getProductById,
  get3DModelSpecs,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadFiles
} from '../controllers/productController.js';
import { upload } from '../config/multer.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.post('/upload', upload.array('files', 10), uploadFiles);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id/3d-specs', get3DModelSpecs);

export default router;

