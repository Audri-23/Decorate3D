import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';
mongoose.connect(connStr).then(async () => {
  const result = await mongoose.connection.db.collection('users').updateOne(
    { email: 'shouvikbanik19@gmail.com', role: 'courier' },
    { $set: { role: 'admin' } }
  );
  console.log('Update result:', JSON.stringify(result, null, 2));

  // Verify the change
  const user = await mongoose.connection.db.collection('users').findOne({ email: 'shouvikbanik19@gmail.com' });
  console.log('Updated user:', JSON.stringify(user, null, 2));
  process.exit(0);
});
