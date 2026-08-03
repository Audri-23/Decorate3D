import React from 'react';
import { Box, Sparkles, Eye, ShieldCheck, Heart } from 'lucide-react';

export const ProductCard = ({ product, onSelectProduct, open3DInspector }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E5DEC9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Product Image Header with 3D Badge */}
      <div className="relative aspect-[4/3] w-full bg-[#1E232A] overflow-hidden">
        <img
          src={product.images?.[0] || "https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />

        {/* 3D Available Badge */}
        {product.has3DModel && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#E5DEC9] flex items-center space-x-1.5 shadow-sm">
            <Box className="w-3.5 h-3.5 text-[#A17A16]" />
            <span>3D Model</span>
          </div>
        )}

        {/* AI Condition Badge */}
        <div className="absolute top-3 right-3 gold-badge text-[10px] px-2.5 py-1 rounded-full uppercase">
          AI: {product.conditionGrade || 'GOOD'}
        </div>

        {/* Quick Launch Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={() => open3DInspector(product)}
            className="gold-gradient-btn px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider flex items-center space-x-2 shadow-lg hover:scale-105"
          >
            <Box className="w-4 h-4" />
            <span>LAUNCH 3D INSPECTOR</span>
          </button>
        </div>
      </div>

      {/* Product Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex justify-between items-start">
            <h3
              onClick={() => onSelectProduct(product)}
              className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#A17A16] transition-colors line-clamp-1 cursor-pointer"
            >
              {product.title}
            </h3>
          </div>

          <p className="text-xs text-gray-500 line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Specs & Pricing Footer */}
        <div className="pt-3 border-t border-[#E5DEC9]/60 flex items-center justify-between">
          <div>
            <span className="font-serif text-xl font-bold text-[#A17A16]">
              ${product.price}
            </span>
            {product.estimatedNewPrice && (
              <span className="text-[11px] text-gray-400 line-through ml-2">
                ${product.estimatedNewPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => onSelectProduct(product)}
            className="text-xs font-semibold text-gray-700 hover:text-[#A17A16] flex items-center space-x-1"
          >
            <span>Details</span>
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
