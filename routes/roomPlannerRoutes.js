import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  getRoomLayouts,
  getRoomLayoutById,
  saveRoomLayout,
  deleteRoomLayout,
  uploadCustomModel,
  getCustomModels,
  deleteCustomModel
} from '../controllers/roomPlannerController.js';

const router = express.Router();

// Multer Storage Configuration for saving uploaded 3D .GLB / .GLTF files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), 'uploads', 'models');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = `custom_${Date.now()}_${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.glb' || ext === '.gltf') {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file format. Only .glb and .gltf files are allowed.'));
    }
  }
});

// IMPORTANT: Custom 3D Model File Storage Routes MUST come BEFORE dynamic '/:id' route!
router.post('/upload-model', upload.single('modelFile'), uploadCustomModel);
router.get('/custom-models', getCustomModels);
router.delete('/delete-model/:filename', deleteCustomModel);

// Layout REST Routes
router.get('/', getRoomLayouts);
router.get('/:id', getRoomLayoutById);
router.post('/', saveRoomLayout);
router.delete('/:id', deleteRoomLayout);

export default router;
