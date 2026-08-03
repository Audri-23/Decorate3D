import React, { useState } from 'react';
import { User, ShieldCheck, Box, Package, Star, Edit3, LogOut, Check, X, Save } from 'lucide-react';

export const ProfilePage = ({ user, onUpdateProfile, onLogout, openAuthModal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [role, setRole] = useState(user?.role || 'buyer');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!user) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-[#E5DEC9] text-center space-y-4 shadow-sm">
        <User className="w-12 h-12 text-[#A17A16] mx-auto" />
        <h2 className="font-serif text-2xl font-bold text-gray-900">Sign In to View Profile</h2>
        <p className="text-xs text-gray-500">Please sign in or create an account to manage your profile and 3D listings.</p>
        <button
          onClick={openAuthModal}
          className="gold-gradient-btn px-6 py-3 rounded-xl font-bold text-xs shadow-md tracking-wider"
        >
          SIGN IN / REGISTER NOW
        </button>
      </div>
    );
  }

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile({
      ...user,
      name,
      email,
      avatar: avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role,
    });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8 animate-fadeIn">
      
      {/* Alert Banner for Save Success */}
      {saveSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-2xl flex items-center space-x-2 text-xs font-semibold animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Your profile details have been successfully updated!</span>
        </div>
      )}

      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-8 border border-[#E5DEC9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <img
            src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-[#A17A16] shadow-md"
          />

          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <h1 className="font-serif text-2xl font-bold text-gray-900">{user.name}</h1>
              <span className="gold-badge text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                {user.role || 'VERIFIED USER'}
              </span>
            </div>

            <p className="text-xs text-gray-500 font-mono">
              {user.email}
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-[#A17A16] pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Escrow Protected Account</span>
            </div>
          </div>
        </div>

        {/* Action Buttons: Edit Profile & Logout */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#F9F4E9] hover:bg-[#E9D3A4] text-[#A17A16] rounded-xl text-xs font-bold transition-all border border-[#E9D3A4] flex items-center justify-center space-x-2"
          >
            <Edit3 className="w-4 h-4" />
            <span>{isEditing ? 'CANCEL EDIT' : 'EDIT PROFILE'}</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full sm:w-auto px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-all border border-rose-200 flex items-center justify-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>LOG OUT</span>
          </button>
        </div>
      </div>

      {/* Interactive Update Profile Form */}
      {isEditing && (
        <div className="bg-white rounded-3xl p-8 border border-[#A17A16]/40 shadow-lg space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-[#E5DEC9]">
            <h3 className="font-serif text-lg font-bold text-gray-900 flex items-center space-x-2">
              <Edit3 className="w-5 h-5 text-[#A17A16]" />
              <span>Update Profile Information</span>
            </h3>
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1">
                Profile Avatar Photo URL
              </label>
              <input
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-1">
                Account Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
              >
                <option value="buyer">Buyer (Search & View 3D Models)</option>
                <option value="seller">Seller (List Used Furniture Items)</option>
                <option value="courier">Logistics Courier Driver</option>
              </select>
            </div>

            <div className="md:col-span-2 flex justify-end space-x-3 pt-4 border-t border-[#E5DEC9]">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="gold-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider flex items-center space-x-2 shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>SAVE PROFILE CHANGES</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* User Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-500 text-xs font-mono">
            <span>SAVED 3D MODELS</span>
            <Box className="w-4 h-4 text-[#A17A16]" />
          </div>
          <div className="font-serif text-3xl font-bold text-gray-900">4 Items</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-500 text-xs font-mono">
            <span>ACTIVE ESCROW ORDERS</span>
            <Package className="w-4 h-4 text-[#A17A16]" />
          </div>
          <div className="font-serif text-3xl font-bold text-gray-900">1 Order</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-500 text-xs font-mono">
            <span>INSPECTION HISTORY</span>
            <Star className="w-4 h-4 text-[#A17A16]" />
          </div>
          <div className="font-serif text-3xl font-bold text-gray-900">12 Scans</div>
        </div>
      </div>

    </div>
  );
};
