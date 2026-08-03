import React, { useState } from 'react';
import { ShoppingBag, User, Search, ShieldCheck, MapPin, Grid, LogIn, LogOut, Edit3, ChevronDown, Box } from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab, cartCount, openAuthModal, user, onLogout, openCart, openSellerListingModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('marketplace')}>
            <div className="w-10 h-10 rounded-full bg-[#1E232A] flex items-center justify-center border-2 border-[#A17A16] shadow-sm">
              <span className="font-serif text-lg font-bold text-[#A17A16]">3D</span>
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#A17A16]">
              Decorate3D
            </span>
          </div>

          {/* Main Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'marketplace'
                  ? 'text-[#1E232A] font-bold border-b-2 border-[#A17A16] pb-1'
                  : 'text-gray-600 hover:text-[#A17A16]'
              }`}
            >
              <span>Marketplace</span>
            </button>

            <button
              onClick={() => setActiveTab('room_planner')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'room_planner'
                  ? 'text-[#1E232A] font-bold border-b-2 border-[#A17A16] pb-1'
                  : 'text-gray-600 hover:text-[#A17A16]'
              }`}
            >
              <span>3D Room Planner</span>
            </button>
          </nav>

          {/* Right Actions: Cart & Login/Profile */}
          <div className="flex items-center space-x-4">
            
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-[#A17A16] transition-colors rounded-full hover:bg-gray-100"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#A17A16] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* List Item (+3D) Button */}
            <button
              onClick={openSellerListingModal}
              className="px-3.5 py-1.5 rounded-full border border-[#E9D3A4] bg-[#F9F4E9] hover:bg-[#E9D3A4] text-[#A17A16] font-mono text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5"
              title="Upload multi-angle photos or snap with device camera to generate 3D model"
            >
              <Box className="w-3.5 h-3.5" />
              <span>List Furniture (+3D)</span>
            </button>

            {/* Profile Menu or Clear Login/Register Button */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#E5DEC9] hover:border-[#A17A16] transition-all bg-white shadow-sm"
                >
                  <img src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"} alt={user?.name || "User"} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-bold text-gray-800 hidden sm:inline">{user?.name || "User"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-[#E5DEC9] shadow-xl py-2 z-50 animate-fadeIn"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-900 truncate">{user?.name || "User"}</p>
                      <p className="text-[10px] text-gray-500 truncate">{user?.email || ""}</p>
                    </div>

                    <button
                      onClick={() => setActiveTab('profile')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F9F4E9] hover:text-[#A17A16] flex items-center space-x-2"
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>View Profile</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('profile')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F9F4E9] hover:text-[#A17A16] flex items-center space-x-2"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Update Profile</span>
                    </button>

                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center space-x-2 border-t border-gray-100 mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="gold-gradient-btn px-4 py-2 rounded-xl text-xs font-bold tracking-wider flex items-center space-x-2 shadow-md hover:scale-105"
              >
                <LogIn className="w-4 h-4" />
                <span>SIGN IN / REGISTER</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
