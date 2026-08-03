import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';
    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`[Database] MongoDB Connected to ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[Database Warning] MongoDB connection skipped/offline. Running in-memory persistence fallback: ${error.message}`);
    return false;
  }
};
