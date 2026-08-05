import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import { initEmailTransporter } from './config/email.js';

import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import moduleRoutes from './routes/moduleRoutes.js';
import stripeRoutes from './features/f13-stripe-checkout/stripe.routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/stripe', stripeRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    project: 'Decorate3D - C2C Marketplace',
    activeModule: 'Module 1 Feature 2 (Muhtasim Ahmed)',
    architecture: 'Unified MVC Architecture',
    databaseConfigured: !!process.env.MONGODB_URI,
    jwtConfigured: !!process.env.JWT_SECRET,
    emailConfigured: !!process.env.EMAIL_USER
  });
});

import fs from 'fs';

// Serve frontend static build for all non-API routes (/buyer, /seller, /courier, /admin)
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

// Connect DB, Init Email Transporter & Start Server
connectDB().then(async () => {
  await initEmailTransporter();
  const server = app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(` 🚀 Decorate3D Production Server running on port ${PORT}`);
    console.log(` ⚙️ Environment (.env) loaded:`);
    console.log(`    - PORT: ${PORT}`);
    console.log(`    - MONGODB_URI: ${process.env.MONGODB_URI || 'default local'}`);
    console.log(`    - JWT_SECRET: Configured (${(process.env.JWT_SECRET || '').substring(0, 10)}...)`);
    console.log(`    - EMAIL_HOST: ${process.env.EMAIL_HOST || 'smtp.ethereal.email'}`);
    console.log(` 📦 Module 1 Feature 2 (Muhtasim Ahmed) Ready`);
    console.log(`=======================================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`\n⚠️ Port ${PORT} is already in use by another process.`);
      console.error(`   Please stop any running node process on port ${PORT} or check running background tasks.\n`);
      process.exit(1);
    } else {
      console.error('Server error:', err);
    }
  });
});
