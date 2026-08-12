import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';
mongoose.connect(connStr).then(async () => {
  const users = await mongoose.connection.db.collection('users').find({}).toArray();
  console.log("USERS:", JSON.stringify(users, null, 2));
  process.exit(0);
});
