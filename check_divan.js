import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connStr = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decorate3d';
mongoose.connect(connStr).then(async () => {
  const products = await mongoose.connection.db.collection('products').find({title: /Vintage Divan/i}).toArray();
  console.log("PRODUCTS:", JSON.stringify(products, null, 2));
  
  const orders = await mongoose.connection.db.collection('f13orders').find({productTitle: /Vintage Divan/i}).toArray();
  console.log("ORDERS:", JSON.stringify(orders, null, 2));
  
  process.exit(0);
});
