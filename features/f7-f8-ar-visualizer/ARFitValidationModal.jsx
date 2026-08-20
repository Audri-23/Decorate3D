import React, { useState, useEffect } from 'react';
import {
  Ruler, CheckCircle2, AlertOctagon, ArrowLeft, RefreshCw,
  Smartphone, ShieldCheck, X, Sparkles, Sliders, ChevronRight
} from 'lucide-react';
import { arService } from './ar.service.js';

export const ARFitValidationModal = ({ product, isOpen, onClose, onLaunchAROverlay }) => {
  const metricDims = arService.getProductMetricDimensions(product?.dimensions);

  // Measurement State (default to standard 85cm doorway sample measurement)
  const [measurementInput, setMeasurementInput] = useState('85');
  const [unit, setUnit] = useState('cm'); // 'cm' | 'in' | 'm'
  const [mode, setMode] = useState('manual'); // 'manual' | 'ar_camera'

  // Calculated Fit Result
  const [fitResult, setFitResult] = useState(null);

  // Re-calculate fit whenever input or unit changes
  useEffect(() => {
    if (!product) return;

    let measuredMeters = 0.85;
    const num = parseFloat(measurementInput) || 0;

    if (unit === 'in') {
      measuredMeters = num * 0.0254;
    } else if (unit === 'm') {
      measuredMeters = num;
    } else {
      measuredMeters = num / 100; // cm
    }

    const result = arService.calculateFitValidation(measuredMeters, metricDims.widthMeters);
    setFitResult(result);
  }, [measurementInput, unit, product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn select-none">

      {/* Main Fit Validation Card */}
      <div className="max-w-lg w-full bg-[#1E232A] text-white rounded-3xl border border-[#A17A16]/50 shadow-2xl overflow-hidden space-y-0 my-auto">

        {/* Header */}
        <div className="p-6 bg-[#14181D] border-b border-[#2E2107]/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#A17A16]/20 border border-[#E9D3A4]/40 flex items-center justify-center">
              <Ruler className="w-5 h-5 text-[#E9D3A4]" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#E9D3A4] uppercase tracking-wider block">MODULE 3 FEATURE 4 (F8)</span>
              <h3 className="font-serif text-lg font-bold text-white">AR Measurement & Fit Validation</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">

          {/* Target Furniture Specifications Card */}
          <div className="p-4 bg-[#14181D] rounded-2xl border border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">TARGET FURNITURE ITEM</span>
              <h4 className="font-serif text-sm font-bold text-white truncate max-w-[200px]">{product.title}</h4>
              <p className="text-gray-400">Width: <strong className="text-[#E9D3A4]">{metricDims.widthCm} cm</strong> ({metricDims.widthInches} in)</p>
            </div>
            <div className="text-right">
              <span className="gold-badge text-[9px] px-2.5 py-1 rounded-full uppercase block mb-1">
                {product.category || 'Furniture'}
              </span>
              <span className="text-[10px] text-gray-400">Depth: {metricDims.depthCm}cm</span>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-[#14181D] p-1 rounded-2xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => setMode('manual')}
              className={`flex-1 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 ${mode === 'manual' ? 'bg-[#A17A16] text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
            >
              <Sliders className="w-4 h-4" />
              <span>MANUAL MEASUREMENT</span>
            </button>

            <button
              onClick={() => setMode('ar_camera')}
              className={`flex-1 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 ${mode === 'ar_camera' ? 'bg-[#A17A16] text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>AR CAMERA DEPTH (F7)</span>
            </button>
          </div>

          {/* MODE 1: Manual Doorway / Space Measurement Input */}
          {mode === 'manual' && (
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-gray-300 block">
                Enter Measured Doorway / Room Clearance Space:
              </label>

              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  step="0.1"
                  min="10"
                  value={measurementInput}
                  onChange={(e) => setMeasurementInput(e.target.value)}
                  placeholder="e.g. 85"
                  className="flex-1 bg-[#14181D] text-[#856E11] placeholder-gray-500 border border-[#E9D3A4]/60 px-4 py-3 rounded-2xl text-lg font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#E9D3A4]/40"
                />

                <div className="flex bg-[#14181D] border border-white/10 rounded-2xl p-1 font-mono text-xs font-bold">
                  <button
                    onClick={() => setUnit('cm')}
                    className={`px-3 py-2 rounded-xl transition-all ${unit === 'cm' ? 'bg-[#A17A16] text-white' : 'text-gray-400'}`}
                  >
                    cm
                  </button>
                  <button
                    onClick={() => setUnit('in')}
                    className={`px-3 py-2 rounded-xl transition-all ${unit === 'in' ? 'bg-[#A17A16] text-white' : 'text-gray-400'}`}
                  >
                    in
                  </button>
                </div>
              </div>

              {/* Quick Doorway Preset Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[10px] font-mono text-gray-400 block w-full">Quick Presets:</span>
                <button
                  onClick={() => { setMeasurementInput('75'); setUnit('cm'); }}
                  className="px-3 py-1 bg-[#14181D] hover:bg-gray-800 border border-white/10 rounded-xl text-xs font-mono text-gray-300"
                >
                  Narrow Door (75 cm)
                </button>
                <button
                  onClick={() => { setMeasurementInput('85'); setUnit('cm'); }}
                  className="px-3 py-1 bg-[#14181D] hover:bg-gray-800 border border-white/10 rounded-xl text-xs font-mono text-gray-300"
                >
                  Standard Door (85 cm)
                </button>
                <button
                  onClick={() => { setMeasurementInput('100'); setUnit('cm'); }}
                  className="px-3 py-1 bg-[#14181D] hover:bg-gray-800 border border-white/10 rounded-xl text-xs font-mono text-gray-300"
                >
                  Wide Opening (100 cm)
                </button>
              </div>
            </div>
          )}

          {/* MODE 2: AR Camera Spatial Point-to-Point Measurement Explanation */}
          {mode === 'ar_camera' && (
            <div className="p-4 bg-[#14181D] rounded-2xl border border-white/10 text-xs font-mono space-y-3">
              <div className="flex items-center space-x-2 text-[#E9D3A4] font-bold">
                <Smartphone className="w-4 h-4" />
                <span>WebXR Camera Depth Estimation</span>
              </div>
              <p className="text-[#E9D3A4]/80 text-[11px] leading-relaxed">
                Open WebXR AR Camera Overlay to tap 2 spatial points (Point A & Point B) across your physical doorway. WebXR depth estimation calculates real-world clearance automatically.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onLaunchAROverlay(product);
                }}
                className="w-full gold-gradient-btn py-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center space-x-2"
              >
                <span>LAUNCH AR CAMERA OVERLAY (F7)</span>
                <ChevronRight className="w-4 h-4 text-gray-900" />
              </button>
            </div>
          )}

          {/* COLOR-CODED FIT VALIDATION RESULT ALERT CARD (Green vs Red) */}
          {fitResult && (
            <div className={`p-5 rounded-2xl border ${fitResult.fits
              ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-100'
              : 'bg-rose-950/70 border-rose-500/60 text-rose-100'
              } space-y-3 shadow-xl transition-all`}>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5 font-bold font-mono text-sm">
                  {fitResult.fits ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <AlertOctagon className="w-5 h-5 text-rose-400 animate-pulse" />
                  )}
                  <span className={fitResult.fits ? 'text-emerald-300' : 'text-rose-300'}>
                    STATUS: {fitResult.status}
                  </span>
                </div>

                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full uppercase ${fitResult.fits ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                  {fitResult.fits ? 'GREEN (CLEARANCE OK)' : 'RED (COLLISION)'}
                </span>
              </div>

              {/* Mathematical Clearance Breakdown */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono text-xs">
                <div className="bg-black/40 p-2 rounded-xl">
                  <span className="text-[9px] text-gray-400 block uppercase font-bold">CLEARANCE SPACE</span>
                  <span className="font-bold text-white text-sm">{fitResult.measuredCm} cm</span>
                </div>
                <div className="bg-black/40 p-2 rounded-xl">
                  <span className="text-[9px] text-gray-400 block uppercase font-bold">FURNITURE WIDTH</span>
                  <span className="font-bold text-[#E9D3A4] text-sm">{fitResult.furnitureCm} cm</span>
                </div>
                <div className="bg-black/40 p-2 rounded-xl">
                  <span className="text-[9px] text-gray-400 block uppercase font-bold">MARGIN DELTA</span>
                  <span className={`font-bold text-sm ${fitResult.fits ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {fitResult.clearanceDeltaCm > 0 ? `+${fitResult.clearanceDeltaCm}` : fitResult.clearanceDeltaCm} cm
                  </span>
                </div>
              </div>

              <p className="text-[11px] font-mono text-gray-300/90 leading-relaxed pt-1">
                {fitResult.fits ? (
                  `Success! The ${product.title} (${fitResult.furnitureCm}cm wide) will safely pass through this clearance with +${fitResult.clearanceDeltaCm}cm remaining margin.`
                ) : (
                  `Warning! The ${product.title} (${fitResult.furnitureCm}cm wide) exceeds the measured clearance space by ${Math.abs(fitResult.clearanceDeltaCm).toFixed(1)}cm.`
                )}
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#14181D] border-t border-[#E9D3A4]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-mono text-xs font-bold transition-colors"
          >
            CLOSE TOOL
          </button>
        </div>

      </div>

    </div>
  );
};
