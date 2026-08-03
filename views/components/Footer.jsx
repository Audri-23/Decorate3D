import React from 'react';
import { ShieldCheck, Box, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1E232A] text-white border-t border-[#A17A16]/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white text-[#A17A16] font-serif font-bold text-sm flex items-center justify-center">3D</div>
              <span className="font-serif text-xl font-bold text-[#A17A16]">Decorate3D</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Smart C2C Used-Furniture & Interior Design Marketplace featuring WebGL 360° rotatable 3D model inspection, AI condition verification, and escrow protection.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3">Categories</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer">• Mid-Century Lounge Chairs</li>
              <li className="hover:text-white cursor-pointer">• Scandinavian Bouclé Armchairs</li>
              <li className="hover:text-white cursor-pointer">• Leather Chesterfield Sofas</li>
              <li className="hover:text-white cursor-pointer">• Live-Edge Wood Tables</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3">Platform Features</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer">• 360° Interactive 3D Inspector</li>
              <li className="hover:text-white cursor-pointer">• 3D Room Floor Planner</li>
              <li className="hover:text-white cursor-pointer">• Geospatial Courier Logistics</li>
              <li className="hover:text-white cursor-pointer">• Escrow Safe Payment Hold</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3">Customer Support</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Have questions about 3D models or escrow delivery verification?<br />
              <span className="text-[#A17A16] font-semibold">support@decorate3d.com</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© 2026 Decorate3D • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
