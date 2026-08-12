import React, { useState, useEffect } from 'react';
import { Upload, Sparkles, AlertCircle, CheckCircle, ShieldCheck, Scan, RefreshCw, Eye } from 'lucide-react';

export const DamageAssessorWidget = ({ currentPhoto, onApplyCondition }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [hoveredDamageIndex, setHoveredDamageIndex] = useState(null);

  // Sync with current listings photo if available
  useEffect(() => {
    if (currentPhoto && !imagePreview && !result) {
      setImagePreview(currentPhoto);
    }
  }, [currentPhoto]);

  // Handle local image file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setResult(null);
    setError(null);
  };

  // Run assessment on either file upload or base64 currentPhoto
  const runAssessment = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      let res;

      if (imageFile) {
        formData.append('image', imageFile);
        res = await fetch('/api/modules/m1/ai-damage-assessor/assess', {
          method: 'POST',
          body: formData,
        });
      } else if (imagePreview) {
        // If we have base64 or URL
        res = await fetch('/api/modules/m1/ai-damage-assessor/assess', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imageBase64: imagePreview,
            mimeType: 'image/jpeg',
          }),
        });
      } else {
        throw new Error('Please select or capture an image first.');
      }

      const data = await res.json();
      if (data.success) {
        setResult(data);
        if (onApplyCondition && data.conditionGrade) {
          onApplyCondition(data.conditionGrade);
        }
      } else {
        throw new Error(data.message || 'Damage assessment failed.');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to connect to the damage assessment service.');
    } finally {
      setLoading(false);
    }
  };

  const resetWidget = () => {
    setImagePreview(currentPhoto || null);
    setImageFile(null);
    setResult(null);
    setError(null);
  };

  // Render color badge based on condition grade
  const renderGradeBadge = (grade) => {
    const normalized = (grade || '').toUpperCase();
    if (normalized === 'EXCELLENT') {
      return (
        <span className="px-3 py-1.5 rounded-xl font-bold text-xs bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center space-x-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>EXCELLENT CONDITION</span>
        </span>
      );
    } else if (normalized === 'GOOD') {
      return (
        <span className="px-3 py-1.5 rounded-xl font-bold text-xs bg-amber-100 text-amber-800 border border-amber-200 flex items-center space-x-1">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>GOOD CONDITION</span>
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1.5 rounded-xl font-bold text-xs bg-rose-100 text-rose-800 border border-rose-200 flex items-center space-x-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>FAIR / DAMAGED CONDITION</span>
        </span>
      );
    }
  };

  return (
    <div className="bg-white border border-[#E5DEC9] rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#E5DEC9]/60 pb-3">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#A17A16]" />
          <h4 className="font-serif font-bold text-sm text-gray-900">AI Vision Damage Scanner</h4>
        </div>
        {result && (
          <button
            onClick={resetWidget}
            className="text-[10px] font-mono font-bold text-gray-500 hover:text-[#A17A16] flex items-center space-x-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>RESET SCANNER</span>
          </button>
        )}
      </div>

      {!imagePreview ? (
        // Drop Area
        <div className="border-2 border-dashed border-[#E5DEC9] hover:border-[#A17A16]/50 transition-colors rounded-xl p-8 text-center bg-[#FBF9F5]/40">
          <input
            type="file"
            id="damage-image-file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="damage-image-file" className="cursor-pointer block space-y-2.5">
            <div className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center mx-auto text-[#A17A16]">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700">Upload a furniture photo to assess</p>
              <p className="text-[10px] font-medium text-gray-400 mt-1">Supports PNG, JPG, JPEG, WEBP</p>
            </div>
          </label>
        </div>
      ) : (
        // Image loaded preview
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Image with Bounding Box Overlays */}
          <div className="relative border border-[#E5DEC9] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center group" style={{ minHeight: '260px' }}>
            <img
              src={imagePreview}
              alt="Damage Scan Preview"
              className="w-full h-full object-contain max-h-[300px]"
            />

            {/* Bounding box overlays */}
            {result?.damages?.map((damage, idx) => {
              const { top, left, bottom, right } = damage.boundingBoxPercent;
              const width = right - left;
              const height = bottom - top;

              const isHovered = hoveredDamageIndex === idx;

              return (
                <div
                  key={idx}
                  className={`absolute border-2 transition-all cursor-pointer ${
                    isHovered
                      ? 'border-yellow-400 bg-yellow-400/20 scale-105 z-20'
                      : 'border-red-500 bg-red-600/10 hover:border-yellow-400 hover:bg-yellow-400/20 z-10'
                  }`}
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${width}%`,
                    height: `${height}%`,
                  }}
                  onMouseEnter={() => setHoveredDamageIndex(idx)}
                  onMouseLeave={() => setHoveredDamageIndex(null)}
                  title={`${damage.type.toUpperCase()} (${damage.severity}): ${damage.description}`}
                >
                  <span className="absolute bottom-full left-0 bg-black/80 text-white font-mono text-[8px] font-bold px-1 py-0.5 rounded shadow max-w-[120px] truncate pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {damage.type}
                  </span>
                </div>
              );
            })}

            {/* Scanning line effect */}
            {loading && (
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-start z-30">
                <div className="w-full h-0.5 bg-emerald-500 shadow-[0_0_10px_2px_rgba(16,185,129,0.7)] animate-[scan_2s_ease-in-out_infinite]"></div>
                <div className="absolute inset-0 bg-emerald-500/5 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
              </div>
            )}
          </div>

          {/* Right Column: Scan Actions or Report Results */}
          <div className="flex flex-col justify-center space-y-4">
            {!result && !loading && !error && (
              <div className="text-center md:text-left space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-700">Image Ready for AI Analysis</p>
                  <p className="text-[10px] text-gray-500">
                    We will submit this image to our AI vision scanner to identify scratches, structural wear, dents, or tears, and calculate an objective condition grade.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={runAssessment}
                    className="flex-1 gold-gradient-btn py-2.5 rounded-xl font-bold text-xs shadow flex items-center justify-center space-x-1.5"
                  >
                    <Scan className="w-4 h-4" />
                    <span>START AI ANALYSIS</span>
                  </button>
                  <button
                    onClick={() => {
                      setImagePreview(null);
                      setImageFile(null);
                    }}
                    className="px-3 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-bold text-gray-500 transition-colors"
                  >
                    Change Image
                  </button>
                </div>
              </div>
            )}

            {loading && (
              <div className="text-center py-6 space-y-3">
                <span className="loading loading-spinner loading-md text-[#A17A16]"></span>
                <div>
                  <p className="text-xs font-bold text-gray-800 animate-pulse">Scanning furniture details...</p>
                  <p className="text-[9px] text-gray-400 mt-1">Analyzing texture patterns and defects with Gemini API</p>
                </div>
              </div>
            )}

            {error && (
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl space-y-2">
                <div className="flex items-center space-x-1.5 text-rose-700">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-bold">Scanning Error</span>
                </div>
                <p className="text-[10px] text-rose-600 font-medium leading-relaxed">{error}</p>
                <button
                  onClick={runAssessment}
                  className="w-full bg-white hover:bg-rose-100 border border-rose-200 text-[10px] font-bold py-1.5 rounded-lg text-rose-700 transition-colors"
                >
                  Retry Scan
                </button>
              </div>
            )}

            {result && (
              <div className="space-y-3 animate-fadeIn">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">ANALYSIS REPORT</span>
                  <div className="flex items-center space-x-2">
                    {renderGradeBadge(result.conditionGrade)}
                    <span className="text-[10px] font-mono font-bold text-gray-500">
                      Confidence: {result.confidenceScore}%
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">SUMMARY DESCRIPTION</span>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed bg-[#FBF9F5] p-2.5 rounded-lg border border-[#E5DEC9]/40">
                    {result.summary}
                  </p>
                </div>

                {result.damages && result.damages.length > 0 ? (
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">
                      DETECTED DEFECTS ({result.damages.length})
                    </span>
                    <div className="max-h-[110px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                      {result.damages.map((damage, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded-lg border text-[10px] transition-colors flex justify-between items-center ${
                            hoveredDamageIndex === idx
                              ? 'border-yellow-400 bg-yellow-50/50'
                              : 'border-gray-100 bg-[#FBF9F5]/30 hover:border-gray-200'
                          }`}
                          onMouseEnter={() => setHoveredDamageIndex(idx)}
                          onMouseLeave={() => setHoveredDamageIndex(null)}
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-1.5">
                              <span className="font-bold text-gray-800 capitalize">{damage.type}</span>
                              <span className={`px-1 py-0.5 rounded text-[8px] font-bold ${
                                damage.severity === 'severe'
                                  ? 'bg-rose-50 text-rose-700'
                                  : damage.severity === 'moderate'
                                  ? 'bg-amber-50 text-amber-700'
                                  : 'bg-blue-50 text-blue-700'
                              }`}>
                                {damage.severity}
                              </span>
                            </div>
                            <p className="text-gray-500 max-w-[200px] truncate">{damage.description}</p>
                          </div>
                          <Eye className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 bg-emerald-50/40 border border-emerald-100/60 rounded-xl text-center">
                    <p className="text-[10px] text-emerald-800 font-bold flex items-center justify-center space-x-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>No defects or damage detected. Grade remains intact!</span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global CSS scanning keyframe inject */}
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(220px); }
        }
      `}</style>
    </div>
  );
};
