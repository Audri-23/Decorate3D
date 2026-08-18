import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';

  try {
    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`[Database] MongoDB Connected to ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    try {
      console.log(`[Database] Standard MongoDB unavailable (${error.message}). Launching MongoMemoryServer instance...`);
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create({
        instance: { dbName: 'decorate3d' }
      });
      const uri = mongod.getUri();
      await mongoose.connect(uri);
      console.log(`[Database] MongoDB Connected via MongoMemoryServer at ${uri}`);
      return true;
    } catch (memError) {
      console.warn(`[Database Warning] MongoDB connection skipped/offline. Running in-memory persistence fallback: ${error.message}`);
      return false;
    }
  }
};
