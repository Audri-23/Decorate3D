import React, { useState } from 'react';
import { Search, Filter, Box, Sparkles, SlidersHorizontal, Camera, RefreshCw } from 'lucide-react';
import { ProductCard } from '../components/ProductCard.jsx';

export const MarketplacePage = ({ products, onSelectProduct, open3DInspector }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');

  // Style Search State removed

  const categories = ['All', 'Chairs', 'Sofas', 'Tables'];
  const conditions = ['All', 'EXCELLENT', 'GOOD', 'FAIR'];

  const filteredProducts = products.filter(p => {
    const titleStr = (p.title || '').toLowerCase();
    const descStr = (p.description || '').toLowerCase();
    const qStr = searchQuery.toLowerCase();
    const matchesSearch = !qStr || titleStr.includes(qStr) || descStr.includes(qStr);

    const pCat = (p.category || '').toLowerCase();
    const selCat = selectedCategory.toLowerCase();
    const matchesCat = selectedCategory === 'All' || pCat === selCat || pCat.includes(selCat) || selCat.includes(pCat);

    const pCond = (p.conditionGrade || 'GOOD').toUpperCase();
    const matchesCond = selectedCondition === 'All' || pCond === selectedCondition;

    return matchesSearch && matchesCat && matchesCond;
  });

  // handleStyleSearchUpload removed

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">

      {/* Hero Banner Section */}
      <div className="relative rounded-3xl bg-[#1E232A] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-[#A17A16]/30">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#A17A16]/20 border border-[#A17A16] px-3 py-1 rounded-full text-xs font-mono font-bold text-[#A17A16]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D C2C Furniture Marketplace</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Inspect in <span className="text-[#A17A16]">360° 3D</span> Before You Buy.
          </h1>

          <p className="text-sm text-gray-300 leading-relaxed">
            Eliminate spatial uncertainty and hidden damage. Rotate, zoom, and test top-grain leather sofas and designer chairs directly in WebGL 3D.
          </p>
        </div>

        {/* Decorative background accent */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none">
          <div className="w-72 h-72 rounded-full border-4 border-[#A17A16] flex items-center justify-center animate-spin-slow">
            <Box className="w-36 h-36 text-[#A17A16]" />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-[#E5DEC9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Search Bar with AI Visual Search */}
        <div className="relative w-full md:w-96 flex items-center">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Mid-Century chairs, sofas, tables..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCategory === cat
                  ? 'bg-[#A17A16] text-white shadow-sm'
                  : 'bg-[#F9F4E9] text-gray-700 hover:bg-[#E9D3A4]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* AI Condition Filter */}
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-gray-500 font-semibold hidden sm:inline">Condition:</span>
          <select
            value={selectedCondition}
            onChange={(e) => {
              setSelectedCondition(e.target.value);
            }}
            className="bg-[#FBF9F5] border border-[#E5DEC9] px-3 py-2 rounded-xl font-semibold text-gray-800 focus:outline-none focus:border-[#A17A16]"
          >
            {conditions.map(cond => (
              <option key={cond} value={cond}>AI Grade: {cond}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Catalog Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
          <span>Showing {filteredProducts.length} verified listings with 3D model data</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              onSelectProduct={onSelectProduct}
              open3DInspector={open3DInspector}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
