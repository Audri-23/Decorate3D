import React, { useState } from 'react';
import {
  ArrowLeft, RotateCcw, RotateCw, RefreshCw, ZoomIn, Layers,
  Grid, Download, Smartphone, ShoppingCart, Sparkles
} from 'lucide-react';
import { Viewer3DCanvas } from './Viewer3DCanvas.jsx';
import { useViewer3DController } from '../../controllers/useViewer3DController.js';

export const Viewer3DModal = ({ product, isOpen, onClose, onAddToCart, onLaunchAR }) => {
  const [presetAngle, setPresetAngle] = useState('front'); // 'front', 'back', 'side', 'top'
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const {
    isAutoRotating,
    zoomFactor,
    elevationOffset,
    selectedMaterial,
    isWireframe,
    toggleAutoRotate,
    rotateStep,
    setZoomFactor,
    setElevationOffset,
    changeMaterial,
    resetView,
  } = useViewer3DController(product);

  if (!isOpen || !product) return null;

  const model3D = product.model3D || {
    archivalSeries: 'Archival Series № 422',
    polygonCount: '124.2k',
    lodLevel: 'ULTRA',
    geometryType: 'lounge_chair'
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FBF9F5] flex flex-col overflow-hidden animate-fadeIn">
      
      {/* Top Navigation Header */}
      <header className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-[#E5DEC9] bg-[#FBF9F5]/90 backdrop-blur-md z-10">
        <button
          onClick={onClose}
          className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#A17A16] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Back to Product Details</span>
          <span className="inline sm:hidden">Back</span>
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-[10px] sm:text-xs font-mono bg-[#F9F4E9] border border-[#E9D3A4] text-[#A17A16] px-2.5 py-1 rounded-full font-bold flex items-center space-x-1">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">4-Angle Volumetric 3D Model Active</span>
            <span className="inline sm:hidden">3D Model</span>
          </span>
          <button
            onClick={() => { setPresetAngle('front'); resetView(); }}
            className="p-1.5 sm:p-2 text-gray-500 hover:text-[#A17A16] transition-colors rounded-full hover:bg-[#F9F4E9]"
            title="Reset View"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main 3D Inspector Viewport Container */}
      <div className="relative flex-1 w-full h-full bg-[#FBF9F5]">
        
        {/* Top Floating Angle Preset Selector Bar */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 bg-white/90 backdrop-blur-md p-1 sm:p-1.5 rounded-2xl border border-[#E5DEC9] shadow-md flex items-center space-x-1 font-mono text-[10px] sm:text-xs pointer-events-auto max-w-[calc(100vw-4rem)] overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setPresetAngle('front')}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
              presetAngle === 'front' ? 'bg-[#A17A16] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            FRONT 0°
          </button>
          <button
            onClick={() => setPresetAngle('back')}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
              presetAngle === 'back' ? 'bg-[#A17A16] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            BACK 180°
          </button>
          <button
            onClick={() => setPresetAngle('side')}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
              presetAngle === 'side' ? 'bg-[#A17A16] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            SIDE 90°
          </button>
          <button
            onClick={() => setPresetAngle('top')}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
              presetAngle === 'top' ? 'bg-[#A17A16] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            TOP 70°
          </button>
        </div>

        {/* Three.js WebGL Interactive 3D Canvas */}
        <Viewer3DCanvas
          modelUrl={product.model3D?.url}
          product={product}
          selectedMaterial={selectedMaterial}
          isWireframe={isWireframe}
          isAutoRotating={isAutoRotating}
          zoomFactor={zoomFactor}
          elevationOffset={elevationOffset}
          presetAngle={presetAngle}
        />

        {/* Mobile Details Toggle Button */}
        <button
          onClick={() => setShowMobileDetails(!showMobileDetails)}
          className="md:hidden absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-md rounded-xl border border-[#E5DEC9] shadow-md text-gray-700 hover:text-[#A17A16]"
          title="Toggle Product Specs"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        {/* Right Top Product Metadata Card */}
        <div className={`absolute top-14 sm:top-6 right-3 sm:right-6 w-72 sm:w-80 p-4 sm:p-6 rounded-2xl glass-panel shadow-lg border border-[#E5DEC9]/80 pointer-events-auto transition-all ${
          showMobileDetails ? 'block z-30 bg-white/95' : 'hidden md:block'
        }`}>
          <h2 className="font-serif text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
            {product.title}
          </h2>
          <p className="text-xs font-serif text-gray-500 italic mt-1 border-b border-[#E5DEC9] pb-3">
            {model3D.archivalSeries}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
            <div>
              <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px]">Polygons</span>
              <span className="text-sm font-bold text-[#A17A16]">{model3D.polygonCount}</span>
            </div>
            <div>
              <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px]">LOD Level</span>
              <span className="text-sm font-bold text-[#A17A16]">{model3D.lodLevel}</span>
            </div>
          </div>
        </div>

        {/* Floating Right Action Icon Buttons */}
        <div className="absolute bottom-24 sm:bottom-28 right-3 sm:right-6 flex flex-col space-y-2 sm:space-y-3 pointer-events-auto z-10">
          <button
            onClick={() => alert(`3D Model (${model3D.polygonCount} Polygons) exported as GLTF file.`)}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center shadow-md border border-[#E5DEC9] transition-all hover:scale-105"
            title="Download 3D Model GLTF"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={onLaunchAR}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-[#F9F4E9] text-[#A17A16] rounded-2xl flex items-center justify-center shadow-md border border-[#E9D3A4] transition-all hover:scale-105"
            title="View in WebXR AR"
          >
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 sm:w-12 sm:h-12 gold-gradient-btn rounded-2xl flex items-center justify-center shadow-lg transition-all hover:scale-105"
            title="Add to Cart & Proceed to Escrow"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Bottom Floating Control Bar (Responsive Glassmorphic Toolbar) */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl glass-panel shadow-xl border border-[#E5DEC9]/90 flex flex-wrap items-center justify-center gap-2 sm:gap-6 pointer-events-auto max-w-[calc(100vw-1rem)] z-10">
          
          {/* 1. Rotation Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              onClick={() => rotateStep('ccw')}
              className="p-1.5 sm:p-2 text-gray-700 hover:text-[#A17A16] hover:bg-gray-100 rounded-xl transition-colors"
              title="Rotate Counter-Clockwise 15°"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={toggleAutoRotate}
              className={`p-2 sm:p-2.5 rounded-xl transition-all shadow-sm ${
                isAutoRotating
                  ? 'bg-[#A17A16] text-white font-bold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title="Toggle 360° Auto-Rotate"
            >
              <span className="font-mono text-xs font-bold px-0.5">3D</span>
            </button>

            <button
              onClick={() => rotateStep('cw')}
              className="p-1.5 sm:p-2 text-gray-700 hover:text-[#A17A16] hover:bg-gray-100 rounded-xl transition-colors"
              title="Rotate Clockwise 15°"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden sm:block h-6 w-px bg-[#E5DEC9]" />

          {/* 2. Zoom & Elevation Sliders */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1.5" title="Zoom Control">
              <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
              <input
                type="range"
                min="2.5"
                max="6.5"
                step="0.1"
                value={zoomFactor}
                onChange={(e) => setZoomFactor(parseFloat(e.target.value))}
                className="w-16 sm:w-24 h-1.5 bg-[#E5DEC9] rounded-lg appearance-none cursor-pointer accent-[#A17A16]"
              />
            </div>

            <div className="flex items-center space-x-1.5" title="Elevation Control">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
              <input
                type="range"
                min="-0.8"
                max="0.8"
                step="0.05"
                value={elevationOffset}
                onChange={(e) => setElevationOffset(parseFloat(e.target.value))}
                className="w-16 sm:w-24 h-1.5 bg-[#E5DEC9] rounded-lg appearance-none cursor-pointer accent-[#A17A16]"
              />
            </div>
          </div>

          <div className="hidden sm:block h-6 w-px bg-[#E5DEC9]" />

          {/* 3. Material Texture Swatches */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider">
            {/* TAN Swatch */}
            <button
              onClick={() => changeMaterial('tan')}
              className="flex flex-col items-center group"
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8C5A2B] border-2 transition-transform ${
                selectedMaterial === 'tan' && !isWireframe ? 'border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30' : 'border-white group-hover:scale-105'
              }`} />
              <span className={`mt-0.5 ${selectedMaterial === 'tan' && !isWireframe ? 'text-[#A17A16]' : 'text-gray-500'}`}>TAN</span>
            </button>

            {/* FOREST Swatch */}
            <button
              onClick={() => changeMaterial('forest')}
              className="flex flex-col items-center group"
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#435B4D] border-2 transition-transform ${
                selectedMaterial === 'forest' && !isWireframe ? 'border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30' : 'border-white group-hover:scale-105'
              }`} />
              <span className={`mt-0.5 ${selectedMaterial === 'forest' && !isWireframe ? 'text-[#A17A16]' : 'text-gray-500'}`}>FOREST</span>
            </button>

            {/* EBONY Swatch */}
            <button
              onClick={() => changeMaterial('ebony')}
              className="flex flex-col items-center group"
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2B2B2D] border-2 transition-transform ${
                selectedMaterial === 'ebony' && !isWireframe ? 'border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30' : 'border-white group-hover:scale-105'
              }`} />
              <span className={`mt-0.5 ${selectedMaterial === 'ebony' && !isWireframe ? 'text-[#A17A16]' : 'text-gray-500'}`}>EBONY</span>
            </button>

            {/* WIREFRAME Button */}
            <button
              onClick={() => changeMaterial('wireframe')}
              className="flex flex-col items-center group pl-1 sm:pl-2"
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg border flex items-center justify-center transition-all ${
                isWireframe ? 'bg-[#A17A16] text-white border-[#A17A16]' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}>
                <Grid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              <span className={`mt-0.5 ${isWireframe ? 'text-[#A17A16]' : 'text-gray-500'}`}>WIRE</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
