import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['buyer', 'seller', 'courier', 'admin'], default: 'buyer' },
  avatar: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
  isVerified: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

// Enforce compound uniqueness per (email, role) combination
userSchema.index({ email: 1, role: 1 }, { unique: true });

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

// In-memory registered users database fallback with role-isolated seed accounts
export const registeredUsersDB = [
  {
    id: 'usr_buyer_1',
    name: 'Muhtasim Buyer',
    email: 'buyer@decorate3d.com',
    password: 'buyer123',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    isVerified: true
  },
  {
    id: 'usr_seller_1',
    name: 'Muhtasim Seller',
    email: 'seller@decorate3d.com',
    password: 'seller123',
    role: 'seller',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    isVerified: true
  },
  {
    id: 'usr_courier_1',
    name: 'Logistics Courier Driver',
    email: 'courier@decorate3d.com',
    password: 'courier123',
    role: 'courier',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    isVerified: true
  },
  {
    id: 'usr_admin_1',
    name: 'Decorate3D System Admin',
    email: 'admin@decorate3d.com',
    password: 'admin123',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    isVerified: true
  },
  {
    id: 'usr_dual_buyer',
    name: 'Muhtasim Dual Account',
    email: 'muhtasim@example.com',
    password: 'buyerpassword123',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    isVerified: true
  },
  {
    id: 'usr_dual_seller',
    name: 'Muhtasim Dual Account',
    email: 'muhtasim@example.com',
    password: 'sellerpassword123',
    role: 'seller',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    isVerified: true
  }
];

// Active OTP session store for 2FA (keyed by cleanEmail_role)
export const activeOTPSessions = new Map();
