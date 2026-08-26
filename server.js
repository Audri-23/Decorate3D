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
import escrowRoutes from './features/f14-escrow-holding/escrow.routes.js';
import geoRoutes from './features/f9-geo-map/geo.routes.js';
import roomPlannerRoutes from './routes/roomPlannerRoutes.js';
import damageRoutes from './features/f1-damage-assessment/damage.routes.js';
import dispatchRoutes from './features/f11-courier-dispatch/dispatch.routes.js';
import trackingRoutes from './features/f12-live-tracking/tracking.routes.js';
import taggingRoutes from './features/f3-attribute-tagging/tagging.routes.js';
import styleSearchRoutes from './features/f4-style-search/styleSearch.routes.js';
import assistantRoutes from './features/f5-ai-assistant/assistant.routes.js';

import invoiceRoutes from './features/f15-invoice/invoice.routes.js';
import disputeRoutes from './features/f16-disputes/dispute.routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve local uploaded files statically (/uploads/images & /uploads/models)
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

// Mount API routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/stripe', stripeRoutes);
app.use('/api/escrow', escrowRoutes);
app.use('/api/escrow', invoiceRoutes);
app.use('/api/disputes', disputeRoutes);
app.use('/api/geo', geoRoutes);
app.use('/api/room-planner', roomPlannerRoutes);
app.use('/api/modules/m1/ai-damage-assessor', damageRoutes);
app.use('/api/modules/m3/attribute-tagging', taggingRoutes); // F3 — Auto Attribute Tagging
app.use('/api/modules/m3/style-search', styleSearchRoutes); // F4 — Visual Style Search
app.use('/api/modules/m3/ai-assistant', assistantRoutes); // F5 — AI Shop Assistant & Negotiator
app.use('/api/dispatch',  dispatchRoutes);          // F11 — Courier Dispatch Board
app.use('/api/tracking',  trackingRoutes);          // F12 — Live Delivery Tracking

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    project: 'Decorate3D - C2C Marketplace',
    environment: process.env.NODE_ENV || 'development',
    architecture: 'Unified MVC Architecture',
    databaseConfigured: !!(process.env.MONGO_URI || process.env.MONGODB_URI),
    jwtConfigured: !!process.env.JWT_SECRET,
    emailConfigured: !!process.env.EMAIL_USER,
    stripeConfigured: !!process.env.STRIPE_SECRET_KEY,
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    mapsConfigured: !!process.env.VITE_GOOGLE_MAPS_API_KEY
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

// Lazy DB Connection Middleware for Serverless & API calls
app.use(async (req, res, next) => {
  if (req.path.startsWith('/api')) {
    await connectDB();
  }
  next();
});

// Connect DB, Init Email Transporter & Start Server
connectDB().then(async () => {
  await initEmailTransporter();
  const server = app.listen(PORT, '0.0.0.0', () => {
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || 'local fallback';
    const isAtlas = mongoUri.includes('mongodb+srv');
    console.log(`=======================================================`);
    console.log(` 🚀 Decorate3D Server running on port ${PORT}`);
    console.log(` 🌐 Local:   http://localhost:${PORT}`);
    console.log(` ⚙️  Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(` 🍃 MongoDB: ${isAtlas ? '✅ Atlas (Cloud)' : '⚠️  Local'}`);
    console.log(` 📧 Email:   ${process.env.EMAIL_USER ? '✅ ' + process.env.EMAIL_USER : '❌ Not configured'}`);
    console.log(` 💳 Stripe:  ${process.env.STRIPE_SECRET_KEY ? '✅ Configured' : '❌ Not configured'}`);
    console.log(` 🤖 Gemini:  ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE' ? '✅ Configured' : '⚠️  Key needed'}`);
    console.log(` 🗺️  Maps:    ${process.env.VITE_GOOGLE_MAPS_API_KEY && process.env.VITE_GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE' ? '✅ Configured' : '⚠️  Key needed'}`);
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

export default app;
