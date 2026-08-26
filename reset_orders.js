import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';

mongoose.connect(connStr).then(async () => {
  console.log("Connected to MongoDB. Resetting orders to LOCKED_IN_ESCROW...");
  const res = await mongoose.connection.db.collection('f13orders').updateMany(
    {},
    { $set: { escrowStatus: 'LOCKED_IN_ESCROW' } }
  );
  console.log(`Reset ${res.modifiedCount} order(s) back to LOCKED_IN_ESCROW!`);
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
