import React, { useState, useEffect } from 'react';
import { Sparkles, AlertCircle, CheckCircle, ShieldCheck, Scan, RefreshCw, Eye, Image } from 'lucide-react';

export const DamageAssessorWidget = ({ angles = {}, onApplyCondition }) => {
  const [activeAngle, setActiveAngle] = useState('front');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [hoveredDamageIndex, setHoveredDamageIndex] = useState(null);

  // Individual scan tracking states
  const [scanStatuses, setScanStatuses] = useState({
    front: 'idle',
    back: 'idle',
    left: 'idle',
    right: 'idle'
  });
  const [scanResults, setScanResults] = useState({
    front: null,
    back: null,
    left: null,
    right: null
  });

  // Auto-switch active angle to the first one that has details if needed once scan results are loaded
  useEffect(() => {
    if (result?.damages?.length > 0) {
      const firstDefect = result.damages[0];
      if (firstDefect && firstDefect.angle) {
        setActiveAngle(firstDefect.angle);
      }
    }
  }, [result]);

  // Aggregate individual scan reports into a unified assessment
  const getAggregatedResult = (results) => {
    const validResults = Object.entries(results)
      .filter(([_, res]) => res !== null)
      .map(([angle, res]) => ({ angle, ...res }));

    if (validResults.length === 0) return null;

    // 1. Union of all damages from all angles
    const allDamages = [];
    validResults.forEach(res => {
      if (res.damages && Array.isArray(res.damages)) {
        res.damages.forEach(dmg => {
          allDamages.push({
            ...dmg,
            angle: res.angle
          });
        });
      }
    });

    // 2. Select condition grade: worst-case minimum (FAIR < GOOD < EXCELLENT)
    const gradePriority = { 'FAIR': 1, 'GOOD': 2, 'EXCELLENT': 3 };
    let minGradeValue = 3;
    let finalGrade = 'EXCELLENT';

    validResults.forEach(res => {
      const val = gradePriority[res.conditionGrade] || 2;
      if (val < minGradeValue) {
        minGradeValue = val;
        finalGrade = res.conditionGrade;
      }
    });

    // 3. Average confidence score
    const totalConfidence = validResults.reduce((sum, res) => sum + (res.confidenceScore || 100), 0);
    const avgConfidence = Math.round(totalConfidence / validResults.length);

    // 4. Construct a unified summary description
    const summaryParts = validResults.map(res => {
      const label = res.angle === 'front' ? 'Front' : res.angle === 'back' ? 'Back' : res.angle === 'left' ? 'Left' : 'Right';
      return `${label} view: ${res.summary}`;
    });
    const unifiedSummary = `Multi-angle analysis completed. Overall item condition is graded as ${finalGrade}. View-by-view details: ${summaryParts.join(' | ')}`;

    // 5. Gather image URLs mapping
    const imageUrls = {};
    validResults.forEach(res => {
      if (res.imageUrl) {
        imageUrls[res.angle] = res.imageUrl;
      } else if (res.imageUrls && res.imageUrls[res.angle]) {
        imageUrls[res.angle] = res.imageUrls[res.angle];
      }
    });

    return {
      conditionGrade: finalGrade,
      confidenceScore: avgConfidence,
      summary: unifiedSummary,
      damages: allDamages,
      imageUrls
    };
  };

  const runAssessment = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const initialStatuses = { front: 'idle', back: 'idle', left: 'idle', right: 'idle' };
    const initialResults = { front: null, back: null, left: null, right: null };
    
    // Filter down to the angles that have uploaded images
    const anglesToScan = ['front', 'back', 'left', 'right'].filter(k => !!angles[k]);

    if (anglesToScan.length === 0) {
      setError('Please ensure at least one angle photo is uploaded before starting.');
      setLoading(false);
      return;
    }

    setScanStatuses({ ...initialStatuses });
    setScanResults({ ...initialResults });

    const currentResults = { ...initialResults };

    try {
      // Scan each image sequentially
      for (const angleKey of anglesToScan) {
        // Switch main view focus to show the active image being scanned
        setActiveAngle(angleKey);
        
        // Update state to scanning
        setScanStatuses(prev => ({ ...prev, [angleKey]: 'scanning' }));

        const res = await fetch('/api/modules/m1/ai-damage-assessor/assess', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imageBase64: angles[angleKey],
            angle: angleKey,
          }),
        });

        const data = await res.json();
        if (data.success) {
          currentResults[angleKey] = data;
          setScanResults(prev => ({ ...prev, [angleKey]: data }));
          setScanStatuses(prev => ({ ...prev, [angleKey]: 'done' }));
        } else {
          setScanStatuses(prev => ({ ...prev, [angleKey]: 'failed' }));
          throw new Error(`Scanning failed for ${getAngleLabel(angleKey)}: ${data.message || 'unknown error'}`);
        }

        // Slight delay for smooth visual workflow pacing
        await new Promise(r => setTimeout(r, 600));
      }

      // Aggregate and compile all results after successfully scanning all views
      const finalEvaluation = getAggregatedResult(currentResults);
      setResult(finalEvaluation);
      if (onApplyCondition && finalEvaluation.conditionGrade) {
        onApplyCondition(finalEvaluation.conditionGrade);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to complete multi-angle scan.');
    } finally {
      setLoading(false);
    }
  };

  const resetWidget = () => {
    setResult(null);
    setError(null);
    setActiveAngle('front');
    setScanStatuses({ front: 'idle', back: 'idle', left: 'idle', right: 'idle' });
    setScanResults({ front: null, back: null, left: null, right: null });
  };

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

  const getAngleLabel = (key) => {
    switch (key) {
      case 'front': return 'Front View';
      case 'back': return 'Backside View';
      case 'left': return 'Left Side';
      case 'right': return 'Right Side';
      default: return key;
    }
  };

  return (
    <div className="bg-white border border-[#E5DEC9] rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-[#E5DEC9]/60 pb-3">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#A17A16]" />
          <h4 className="font-serif font-bold text-sm text-gray-900">AI Sequential Damage Scanner</h4>
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

      {/* Angle Selector Tabs with Scanning Status indicators */}
      <div className="grid grid-cols-4 gap-2">
        {['front', 'back', 'left', 'right'].map((angleKey) => {
          const hasImage = !!angles[angleKey];
          const isActive = activeAngle === angleKey;
          const angleDefectsCount = result?.damages?.filter(d => d.angle === angleKey).length || 0;

          return (
            <button
              key={angleKey}
              type="button"
              onClick={() => setActiveAngle(angleKey)}
              className={`p-2 rounded-xl border transition-all text-left flex flex-col justify-between relative overflow-hidden h-16 ${
                isActive
                  ? 'border-[#A17A16] bg-[#FDFBF7] ring-1 ring-[#A17A16]/30'
                  : 'border-gray-200 hover:border-[#E5DEC9] bg-white'
              }`}
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-[10px] font-bold text-gray-600 truncate max-w-[80%] uppercase font-mono">
                  {getAngleLabel(angleKey)}
                </span>
                {angleDefectsCount > 0 && (
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse border border-white" title={`${angleDefectsCount} defects detected`} />
                )}
              </div>

              {hasImage ? (
                <div className="w-full flex items-center justify-between mt-1">
                  <div className="w-8 h-6 rounded overflow-hidden bg-gray-100 border border-gray-200">
                    <img src={angles[angleKey]} className="w-full h-full object-cover" alt="" />
                  </div>
                  {scanStatuses[angleKey] === 'scanning' ? (
                    <span className="text-[8px] font-mono text-amber-600 font-bold animate-pulse">SCANNING</span>
                  ) : scanStatuses[angleKey] === 'done' ? (
                    <span className="text-[8px] font-mono text-emerald-600 font-bold">SCANNED</span>
                  ) : scanStatuses[angleKey] === 'failed' ? (
                    <span className="text-[8px] font-mono text-rose-600 font-bold">FAILED</span>
                  ) : (
                    <span className="text-[8px] font-mono text-gray-400 font-bold">READY</span>
                  )}
                </div>
              ) : (
                <div className="w-full flex items-center justify-between mt-1 text-gray-400">
                  <Image className="w-4 h-4" />
                  <span className="text-[8px] font-mono font-bold">EMPTY</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Scanner Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: Active Image Preview & Scan Overlay */}
        <div className="relative border border-[#E5DEC9] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center group" style={{ minHeight: '260px' }}>
          {angles[activeAngle] ? (
            <img
              src={angles[activeAngle]}
              alt={`${getAngleLabel(activeAngle)} Preview`}
              className="w-full h-full object-contain max-h-[300px]"
            />
          ) : (
            <div className="text-center text-gray-400 p-8">
              <Image className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-xs font-semibold">No photo uploaded for {getAngleLabel(activeAngle)}</p>
              <p className="text-[10px] mt-1">Upload an image in the section above</p>
            </div>
          )}

          {/* Bounding box overlays (rendered only after full scan completion) */}
          {result?.damages?.map((damage, idx) => {
            if (damage.angle !== activeAngle) return null;

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
          {scanStatuses[activeAngle] === 'scanning' && (
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
                <p className="text-xs font-bold text-gray-700">Sequence Scanner Ready</p>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  We will scan each of your uploaded views (Front, Back, Left Side, Right Side) individually. The individual findings will be processed silently, and once all images are successfully scanned, we will render the combined report.
                </p>
              </div>
              <button
                type="button"
                onClick={runAssessment}
                className="w-full gold-gradient-btn py-2.5 rounded-xl font-bold text-xs shadow flex items-center justify-center space-x-1.5"
              >
                <Scan className="w-4 h-4" />
                <span>START SEQUENTIAL SCAN</span>
              </button>
            </div>
          )}

          {loading && !result && (
            <div className="text-center py-6 space-y-3 bg-[#FDFBF7]/50 rounded-xl p-5 border border-[#E5DEC9]/40">
              <span className="loading loading-spinner loading-md text-[#A17A16]"></span>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Scanning {getAngleLabel(activeAngle)}...
                </p>
                <p className="text-[9px] text-gray-400 mt-1">Analyzing texture and condition details using Gemini 3.5 Flash</p>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mt-3 max-w-[200px] mx-auto">
                <div 
                  className="bg-[#A17A16] h-full transition-all duration-300" 
                  style={{ 
                    width: `${
                      (Object.values(scanStatuses).filter(s => s === 'done').length / 
                      Object.keys(angles).filter(k => !!angles[k]).length) * 100
                    }%` 
                  }} 
                />
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
                type="button"
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
                <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">AGGREGATED EVALUATION</span>
                <div className="flex items-center space-x-2">
                  {renderGradeBadge(result.conditionGrade)}
                  <span className="text-[10px] font-mono font-bold text-gray-500">
                    Confidence: {result.confidenceScore}%
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">UNIFIED SUMMARY</span>
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
                        onClick={() => {
                          if (damage.angle) {
                            setActiveAngle(damage.angle);
                          }
                        }}
                        className={`p-2 rounded-lg border text-[10px] cursor-pointer transition-colors flex justify-between items-center ${
                          hoveredDamageIndex === idx
                            ? 'border-yellow-400 bg-yellow-50/50'
                            : 'border-gray-100 bg-[#FBF9F5]/30 hover:border-gray-200'
                        }`}
                        onMouseEnter={() => setHoveredDamageIndex(idx)}
                        onMouseLeave={() => setHoveredDamageIndex(null)}
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center space-x-1.5">
                            <span className="px-1 py-0.5 bg-[#F4EFE6] text-[#A17A16] font-mono font-bold rounded text-[8px] uppercase">
                              {getAngleLabel(damage.angle)}
                            </span>
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
                    <span>No defects or damage detected across all views!</span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

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
