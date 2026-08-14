import express from 'express';
import { upload } from '../../config/multer.js';
import { assessDamage } from './damage.controller.js';

const router = express.Router();

// Support uploading multiple angles (front, back, left, right) or a single image
router.post('/assess', upload.fields([
  { name: 'front', maxCount: 1 },
  { name: 'back', maxCount: 1 },
  { name: 'left', maxCount: 1 },
  { name: 'right', maxCount: 1 },
  { name: 'image', maxCount: 1 }
]), assessDamage);

export default router;
