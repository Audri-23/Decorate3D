import React, { useState } from 'react';
import { X, Sliders, RotateCw, Grid, Layers, Share2, Users, Check } from 'lucide-react';
import { Viewer3DCanvas } from './Viewer3DCanvas.jsx';

export const RoomPlannerPreview = ({ product, isOpen, onClose }) => {
  const [rotationAngle, setRotationAngle] = useState(142);
  const [heightAdjust, setHeightAdjust] = useState(0.0);
  const [placed, setPlaced] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1E232A] flex flex-col overflow-hidden animate-fadeIn text-white">
      
      {/* Top Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md z-10">
        <div className="flex items-center space-x-3">
          <Grid className="w-5 h-5 text-[#A17A16]" />
          <span className="font-serif text-lg font-bold tracking-tight text-white">
            Virtual 3D Room Planner
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      {/* Main Room Planner Spatial Canvas matching Screenshot 3 */}
      <div className="relative flex-1 w-full h-full bg-[#1E232A]">
        
        {/* Real Room Background Image Overlay matching Screenshot 3 */}
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80')`
        }} />

        {/* 3D Canvas Overlay */}
        <div className="absolute inset-0 pointer-events-auto">
          <Viewer3DCanvas
            product={product}
            geometryType="lounge_chair"
            selectedMaterial="tan"
            isWireframe={false}
            isAutoRotating={false}
            zoomFactor={4.2}
            elevationOffset={heightAdjust}
          />
        </div>

        {/* Left Control: HEIGHT ADJUST matching Screenshot 3 */}
        <div className="absolute top-12 left-10 glass-panel bg-black/50 text-white border-white/20 p-4 rounded-2xl w-64 pointer-events-auto">
          <div className="flex justify-between items-center text-xs font-mono font-bold text-[#A17A16] uppercase mb-2">
            <span>HEIGHT ADJUST</span>
            <span>{heightAdjust.toFixed(1)}m</span>
          </div>
          <input
            type="range"
            min="-0.5"
            max="1.5"
            step="0.1"
            value={heightAdjust}
            onChange={(e) => setHeightAdjust(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#A17A16]"
          />
        </div>

        {/* Top Center Readout: ROTATION 142° dial matching Screenshot 3 */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-auto">
          <div className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-widest">
            ROTATION
          </div>
          <div className="font-serif text-3xl font-bold text-white mt-1">
            {rotationAngle}°
          </div>
          <div className="flex items-center justify-center space-x-6 text-[10px] font-mono text-gray-400 mt-2">
            <span>90°</span>
            <div className="w-1 h-3 bg-[#A17A16]" />
            <span>180°</span>
            <span>270°</span>
          </div>
        </div>

        {/* Center Floating Button: PLACE OBJECT matching Screenshot 3 */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto">
          <button
            onClick={() => setPlaced(!placed)}
            className={`px-8 py-4 rounded-2xl font-mono text-sm font-bold tracking-wider flex items-center space-x-3 shadow-2xl transition-all hover:scale-105 border ${
              placed
                ? 'bg-emerald-600 border-emerald-400 text-white'
                : 'gold-gradient-btn border-[#E9D3A4]/40'
            }`}
          >
            {placed ? <Check className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
            <span>{placed ? 'OBJECT LOCKED IN ROOM' : 'PLACE OBJECT'}</span>
          </button>
        </div>

        {/* Bottom Status Bar matching Screenshot 3 */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-[#FBF9F5] text-gray-800 border-t border-[#E5DEC9] px-8 flex items-center justify-between text-xs font-mono pointer-events-auto">
          <div className="flex items-center space-x-8">
            <span className="font-bold text-[#A17A16] border-r border-gray-300 pr-8">
              PLANNER SUITE V4.2
            </span>
            <button className="hover:text-[#A17A16] font-semibold">FLOOR MAP</button>
            <button className="hover:text-[#A17A16] font-semibold">INVENTORY</button>
            <button className="hover:text-[#A17A16] font-semibold flex items-center space-x-1">
              <Share2 className="w-3.5 h-3.5" />
              <span>SHARE DESIGN</span>
            </button>
          </div>

          <div className="flex items-center space-x-3 text-gray-500">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#1E232A] text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">MA</div>
              <div className="w-7 h-7 rounded-full bg-[#A17A16] text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">+2</div>
            </div>
            <span className="text-[11px]">Design Collaborators</span>
          </div>
        </div>

      </div>
    </div>
  );
};
