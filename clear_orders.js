import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';
mongoose.connect(connStr)
  .then(async () => {
    console.log('Connected to DB. Deleting all f13orders...');
    await mongoose.connection.db.collection('f13orders').deleteMany({});
    console.log('Successfully deleted all orders. You can now test cleanly!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error connecting to DB:', err);
    process.exit(1);
  });
