import multer from 'multer';
import path from 'path';
import fs from 'fs';
import os from 'os';

// Use /tmp directory on serverless platforms (Vercel) to avoid read-only filesystem errors
const getBaseUploadDir = () => {
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    return path.join(os.tmpdir(), 'uploads');
  }
  return path.join(process.cwd(), 'uploads');
};

const getImagesDir = () => {
  const dir = path.join(getBaseUploadDir(), 'images');
  try { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); } catch (e) {}
  return dir;
};

const getModelsDir = () => {
  const dir = path.join(getBaseUploadDir(), 'models');
  try { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); } catch (e) {}
  return dir;
};

// Multer Disk Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.glb' || ext === '.gltf') {
      cb(null, getModelsDir());
    } else {
      cb(null, getImagesDir());
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    const nameWithoutExt = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `${nameWithoutExt}-${uniqueSuffix}${ext}`);
  }
});

// File Filter Validation
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.glb', '.gltf'];

  if (allowedExts.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file extension (${ext}). Allowed: jpg, jpeg, png, webp, glb, gltf`), false);
  }
};

// Multer Upload Instance with 100MB limit
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100 MB max file size
  }
});
