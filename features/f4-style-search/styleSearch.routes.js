import express from 'express';
import { upload } from '../../config/multer.js';
import { searchStyle } from './styleSearch.controller.js';

const router = express.Router();

// Route for visual style search upload
router.post('/', upload.single('image'), searchStyle);

export default router;
