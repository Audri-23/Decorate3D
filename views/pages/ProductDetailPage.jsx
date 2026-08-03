import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Box, Eye, Heart, Share2, ShoppingCart, MapPin, Truck, ChevronRight } from 'lucide-react';

export const ProductDetailPage = ({ product, open3DInspector, onAddToCart, onLaunchRoomPlanner }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const images = product.images && product.images.length > 0
    ? product.images
    : ["https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-6">
        <span>Marketplace</span>
        <ChevronRight className="w-3 h-3" />
        <span>{product.category}</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#A17A16] font-semibold">{product.title}</span>
      </div>

      {/* Main 2-Column Product Grid matching Screenshot 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image & 3D Interactive Hero Preview (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#1E232A] shadow-xl border border-[#E5DEC9] group">
            
            {/* Main Product Image */}
            <img
              src={images[selectedImageIndex] || images[0]}
              alt={product.title}
              className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
            />

            {/* Top Left Badge: 3D Model Available matching Screenshot 1 */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5DEC9] flex items-center space-x-2 shadow-sm">
              <Box className="w-4 h-4 text-[#A17A16]" />
              <span className="text-xs font-bold text-gray-800 tracking-wide">3D Model Available</span>
            </div>

            {/* Center Hero Overlay Button: LAUNCH INTERACTIVE 3D INSPECTOR matching Screenshot 1 */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-all group-hover:bg-black/40">
              <button
                onClick={() => open3DInspector(product)}
                className="gold-gradient-btn px-6 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider flex items-center space-x-3 shadow-2xl transition-all hover:scale-105 border border-[#E9D3A4]/40"
              >
                <Box className="w-5 h-5 animate-pulse" />
                <span>LAUNCH INTERACTIVE 3D INSPECTOR</span>
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery Row matching Screenshot 1 */}
          <div className="flex items-center space-x-4 pt-2">
            {/* Image Thumbnail 1 */}
            <button
              onClick={() => setSelectedImageIndex(0)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                selectedImageIndex === 0 ? 'border-[#A17A16] ring-2 ring-[#A17A16]/20' : 'border-[#E5DEC9] opacity-70 hover:opacity-100'
              }`}
            >
              <img src={images[0]} alt="Thumbnail 1" className="w-full h-full object-cover" />
            </button>

            {/* 3D Launch Thumbnail Button */}
            <button
              onClick={() => open3DInspector(product)}
              className="w-20 h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group"
              title="Launch 3D Model Inspector"
            >
              <Box className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span className="text-[10px] font-mono font-bold mt-1">3D VIEW</span>
            </button>

            {/* Room Planner Thumbnail Button */}
            <button
              onClick={onLaunchRoomPlanner}
              className="w-20 h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group"
              title="Launch 3D Room Planner"
            >
              <Sparkles className="w-6 h-6 transition-transform group-hover:scale-110 text-[#A17A16]" />
              <span className="text-[10px] font-mono font-bold mt-1">PLANNER</span>
            </button>
          </div>
        </div>

        {/* Right Column: Product Metadata & Purchasing Info matching Screenshot 1 (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Badges Row matching Screenshot 1 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="gold-badge text-[11px] px-3 py-1 rounded-md uppercase">
              AI VERIFIED CONDITION: {product.conditionGrade || 'GOOD'}
            </span>
            {product.isRareFind && (
              <span className="bg-[#F9F4E9] text-[#A17A16] border border-[#E9D3A4] text-[11px] font-bold px-3 py-1 rounded-md uppercase">
                RARE FIND
              </span>
            )}
          </div>

          {/* Product Title matching Screenshot 1 */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] leading-tight">
            {product.title}
          </h1>

          {/* Price Row matching Screenshot 1 */}
          <div className="flex items-baseline space-x-4 border-b border-[#E5DEC9] pb-6">
            <span className="font-serif text-4xl font-bold text-[#A17A16]">
              ${product.price}
            </span>
            {product.estimatedNewPrice && (
              <span className="text-sm font-sans text-gray-500 line-through">
                ${product.estimatedNewPrice} Est. New
              </span>
            )}
          </div>

          {/* Craftsmanship Details Card matching Screenshot 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider">
              CRAFTSMANSHIP DETAILS
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5DEC9]/60 text-xs">
              <div>
                <span className="text-gray-400 font-bold uppercase block text-[10px]">MATERIAL</span>
                <span className="font-semibold text-gray-800">{product.material}</span>
              </div>
              <div>
                <span className="text-gray-400 font-bold uppercase block text-[10px]">ERA</span>
                <span className="font-semibold text-gray-800">{product.era}</span>
              </div>
            </div>
          </div>

          {/* Seller & Escrow Trust Details */}
          <div className="p-4 bg-[#F9F4E9] rounded-xl border border-[#E9D3A4] flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#1E232A] text-white font-bold flex items-center justify-center font-serif text-sm">
                MA
              </div>
              <div>
                <span className="font-bold text-gray-900 block">{product.seller?.name || 'Muhtasim Ahmed'}</span>
                <span className="text-gray-500">Seller • {product.seller?.location || 'Dhaka, Bangladesh'}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-[#A17A16] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Escrow Protected</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => onAddToCart(product)}
              className="w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>ADD TO CART (ESCROW SECURED)</span>
            </button>

            <button
              onClick={() => open3DInspector(product)}
              className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-xl text-sm border border-[#E5DEC9] transition-all flex items-center justify-center space-x-2"
            >
              <Box className="w-4 h-4 text-[#A17A16]" />
              <span>OPEN 360° 3D INSPECTOR CANVAS</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
