import express from 'express';
import { upload } from '../../config/multer.js';
import { assessDamage } from './damage.controller.js';

const router = express.Router();

// Upload parameter field name matches standard React forms and controllers
router.post('/assess', upload.single('image'), assessDamage);

export default router;
