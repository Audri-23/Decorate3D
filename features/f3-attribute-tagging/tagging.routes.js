import express from 'express';
import { upload } from '../../config/multer.js';
import { tagAttributes } from './tagging.controller.js';

const router = express.Router();

// Support uploading multiple angles (front, back, left, right) or a single image
router.post('/', upload.fields([
  { name: 'front', maxCount: 1 },
  { name: 'back', maxCount: 1 },
  { name: 'left', maxCount: 1 },
  { name: 'right', maxCount: 1 },
  { name: 'image', maxCount: 1 }
]), tagAttributes);

export default router;
