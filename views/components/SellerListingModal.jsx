import React, { useState, useRef, useEffect } from 'react';
import { X, Camera, Upload, CheckCircle, Sparkles, Box, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

export const SellerListingModal = ({ isOpen, onClose, onAddProduct }) => {
  const [activeStep, setActiveStep] = useState('details'); // 'details' or 'multi_angle_capture'
  const [captureMethod, setCaptureMethod] = useState('upload'); // 'upload' or 'camera'

  // Form State
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Chairs');
  const [material, setMaterial] = useState('Top-Grain Leather & Solid Wood');
  const [era, setEra] = useState('Mid-Century Modern');
  const [description, setDescription] = useState('');

  // Dynamic Pricing States (Module 2, Feature 1)
  const [originalPrice, setOriginalPrice] = useState('');
  const [itemAge, setItemAge] = useState('');
  const [conditionGrade, setConditionGrade] = useState('GOOD');
  const [pricingRecommendation, setPricingRecommendation] = useState(null);
  const [isCalculatingPrice, setIsCalculatingPrice] = useState(false);
  const [pricingError, setPricingError] = useState(null);

  // 4 Key Angles Photos (Front, Back, Side, Top)
  const [angles, setAngles] = useState({
    front: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80',
    back: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80',
    side: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80',
    top: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80'
  });

  // Camera State
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [activeAngleTarget, setActiveAngleTarget] = useState('front'); // 'front', 'back', 'side', 'top'
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Processing state
  const [isProcessing3D, setIsProcessing3D] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);

  // Fetch Pricing Recommendation Hook
  useEffect(() => {
    const fetchRecommendation = async () => {
      const priceNum = parseFloat(originalPrice);
      const ageNum = parseFloat(itemAge);

      if (!originalPrice || !itemAge || isNaN(priceNum) || isNaN(ageNum) || priceNum <= 0 || ageNum < 0) {
        setPricingRecommendation(null);
        setPricingError(null);
        return;
      }

      setIsCalculatingPrice(true);
      setPricingError(null);

      try {
        const res = await fetch('/api/modules/m2/price-recommendation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            originalPrice: priceNum,
            itemAge: ageNum,
            category,
            conditionGrade
          })
        });

        const data = await res.json();
        if (data.success) {
          setPricingRecommendation(data.data.recommendedRange);
        } else {
          setPricingError(data.message);
        }
      } catch (err) {
        setPricingError('Failed to connect to pricing engine.');
      } finally {
        setIsCalculatingPrice(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchRecommendation();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [originalPrice, itemAge, category, conditionGrade]);

  if (!isOpen) return null;


  // Start live camera stream
  const startCamera = async (targetAngle) => {
    setActiveAngleTarget(targetAngle);
    setIsCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn('Camera access error:', err);
    }
  };

  // Stop camera stream
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  // Capture frame from camera stream
  const capturePhotoFromCamera = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    setAngles(prev => ({ ...prev, [activeAngleTarget]: dataUrl }));
    stopCamera();
  };

  // Handle mock file upload selection
  const handleFileUpload = (e, angleKey) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAngles(prev => ({ ...prev, [angleKey]: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitFinal = () => {
    setIsProcessing3D(true);
    setProcessingProgress(20);

    // Simulate 3D Mesh texture map synthesis
    setTimeout(() => setProcessingProgress(60), 600);
    setTimeout(() => setProcessingProgress(100), 1200);

    setTimeout(() => {
      setIsProcessing3D(false);
      const newProduct = {
        _id: 'prod_' + Date.now(),
        title: title || 'Custom Seller 3D Furniture',
        subtitle: `${category} • Seller Verified 3D`,
        price: parseFloat(price) || 350,
        estimatedNewPrice: parseFloat(originalPrice) || (parseFloat(price) || 350) * 2.2,
        category: category,
        conditionGrade: conditionGrade,
        isRareFind: true,
        description: description || 'Handcrafted furniture item uploaded with multi-angle 3D spatial inspection texture model.',
        material: material,
        era: era,
        dimensions: { width: '32 in', depth: '34 in', height: '32 in' },
        images: [angles.front, angles.back, angles.side, angles.top],
        multiAngleImages: angles,
        has3DModel: true,
        model3D: {
          archivalSeries: 'Seller Custom Series № ' + Math.floor(Math.random() * 900 + 100),
          polygonCount: '142.8k',
          lodLevel: 'ULTRA',
          defaultTexture: 'tan',
          geometryType: category.toLowerCase().includes('sofa') ? 'sofa' : (category.toLowerCase().includes('table') ? 'table' : 'lounge_chair')
        },
        seller: {
          name: 'Verified Seller User',
          rating: 5.0,
          verified: true,
          location: 'Dhaka, Bangladesh'
        }
      };

      onAddProduct(newProduct);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#FBF9F5] rounded-3xl max-w-2xl w-full p-8 border border-[#E5DEC9] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => { stopCamera(); onClose(); }}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#1E232A] text-[#A17A16] flex items-center justify-center mx-auto mb-2 border-2 border-[#A17A16]">
            <Box className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            List Furniture Item with 3D Scanner
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Capture or Upload 4 Angles (Front, Back, Side, Top) to Generate interactive 360° 3D Model
          </p>
        </div>

        {/* Processing Spinner Overlay */}
        {isProcessing3D && (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 border-4 border-[#E5DEC9] border-t-[#A17A16] rounded-full animate-spin mx-auto" />
            <h3 className="font-serif text-xl font-bold text-gray-900">Synthesizing Volumetric 3D Model...</h3>
            <div className="max-w-xs mx-auto bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-[#A17A16] h-full transition-all duration-300" style={{ width: `${processingProgress}%` }} />
            </div>
            <p className="text-xs font-mono text-gray-500">Mapping Multi-Angle Surface Textures to 3D Furniture Mesh</p>
          </div>
        )}

        {!isProcessing3D && (
          <>
            {/* Step Navigation Bar */}
            <div className="flex bg-[#E5DEC9]/50 p-1 rounded-2xl mb-6 border border-[#E5DEC9]">
              <button
                type="button"
                onClick={() => setActiveStep('details')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                  activeStep === 'details' ? 'bg-white text-[#A17A16] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>1. ITEM INFORMATION</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStep('multi_angle_capture')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                  activeStep === 'multi_angle_capture' ? 'bg-white text-[#A17A16] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A17A16]" />
                <span>2. 3D MULTI-ANGLE CAPTURE</span>
              </button>
            </div>

            {/* STEP 1: ITEM INFORMATION */}
            {activeStep === 'details' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Furniture Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Vintage Italian Leather Armchair"
                    className="w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                    >
                      <option value="Chairs">Chairs & Armchairs</option>
                      <option value="Sofas">Sofas & Couches</option>
                      <option value="Tables">Coffee & Dining Tables</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Listing Price ($ USD)</label>
                    <input
                      type="number"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="450"
                      className="w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16] font-bold text-[#A17A16]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Material Composition</label>
                    <input
                      type="text"
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      placeholder="e.g. Top-Grain Leather & Walnut Wood"
                      className="w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Design Era</label>
                    <input
                      type="text"
                      value={era}
                      onChange={(e) => setEra(e.target.value)}
                      placeholder="e.g. Mid-Century Modern (1960s)"
                      className="w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                    />
                  </div>
                </div>

                {/* AI pricing assistant panel */}
                <div className="p-5 bg-[#F9F4E9]/50 border border-[#E9D3A4]/60 rounded-2xl space-y-4">
                  <h3 className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>AI & Regression Pricing Assistant</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-600 uppercase mb-1">Condition Grade</label>
                      <select
                        value={conditionGrade}
                        onChange={(e) => setConditionGrade(e.target.value)}
                        className="w-full px-2.5 py-2 bg-white border border-[#E5DEC9] rounded-lg text-xs focus:outline-none focus:border-[#A17A16] font-semibold"
                      >
                        <option value="EXCELLENT">EXCELLENT</option>
                        <option value="GOOD">GOOD</option>
                        <option value="FAIR">FAIR</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-600 uppercase mb-1">Original Price ($)</label>
                      <input
                        type="number"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="e.g. 1200"
                        className="w-full px-3 py-2 bg-white border border-[#E5DEC9] rounded-lg text-xs focus:outline-none focus:border-[#A17A16]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-600 uppercase mb-1">Item Age (Years)</label>
                      <input
                        type="number"
                        step="0.5"
                        value={itemAge}
                        onChange={(e) => setItemAge(e.target.value)}
                        placeholder="e.g. 2.5"
                        className="w-full px-3 py-2 bg-white border border-[#E5DEC9] rounded-lg text-xs focus:outline-none focus:border-[#A17A16]"
                      />
                    </div>
                  </div>

                  {/* Recommendation Card Output */}
                  {(isCalculatingPrice || pricingRecommendation || pricingError) && (
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#E9D3A4] transition-all animate-fadeIn">
                      {isCalculatingPrice && (
                        <div className="flex items-center justify-center space-x-2 py-2 text-[11px] text-gray-500 font-mono">
                          <RefreshCw className="w-4 h-4 animate-spin text-[#A17A16]" />
                          <span>Computing pricing regression...</span>
                        </div>
                      )}

                      {pricingError && (
                        <div className="text-[11px] text-rose-600 py-1 font-mono text-center">{pricingError}</div>
                      )}

                      {pricingRecommendation && !isCalculatingPrice && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="space-y-1 text-center sm:text-left">
                            <span className="text-[9px] font-mono font-bold text-[#A17A16] uppercase tracking-wider block">
                              Suggested Price Range
                            </span>
                            <span className="text-lg font-serif font-bold text-gray-900 block">
                              ${pricingRecommendation.min} - ${pricingRecommendation.max}
                            </span>
                            <p className="text-[11px] text-gray-500 max-w-sm leading-relaxed">
                              Suggested listing price is <strong className="text-gray-800">${pricingRecommendation.suggested}</strong>. This accounts for age depreciation and condition grade.
                            </p>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => setPrice(pricingRecommendation.suggested.toString())}
                            className="bg-[#A17A16] hover:bg-[#8C5A2B] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-md transition-all whitespace-nowrap flex items-center space-x-1.5"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>APPLY SUGGESTED PRICE</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Craftsmanship & Condition Description</label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe condition details, wood grain patina, cushion density, and history..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep('multi_angle_capture')}
                  className="w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md tracking-wider flex items-center justify-center space-x-2"
                >
                  <span>NEXT: CAPTURE 4-ANGLE 3D PHOTOS</span>
                </button>
              </div>
            )}


            {/* STEP 2: 3D MULTI-ANGLE CAPTURE (UPLOAD OR LIVE CAMERA) */}
            {activeStep === 'multi_angle_capture' && (
              <div className="space-y-6">
                {/* Method Switcher: Upload Photos vs Live Camera Scanner */}
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={() => { stopCamera(); setCaptureMethod('upload'); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${
                      captureMethod === 'upload' ? 'bg-[#1E232A] text-white border-[#1E232A]' : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload 4 Angle Photos</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCaptureMethod('camera')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${
                      captureMethod === 'camera' ? 'bg-[#A17A16] text-white border-[#A17A16]' : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    <span>Real-Time Device Camera Scanner</span>
                  </button>
                </div>

                {/* Live Camera Viewfinder Overlay */}
                {isCameraActive && (
                  <div className="p-4 bg-black rounded-2xl text-center space-y-3 relative">
                    <video ref={videoRef} autoPlay playsInline className="w-full h-56 object-cover rounded-xl border border-white/20" />
                    <canvas ref={canvasRef} className="hidden" />
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        type="button"
                        onClick={capturePhotoFromCamera}
                        className="gold-gradient-btn px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg flex items-center space-x-2"
                      >
                        <Camera className="w-4 h-4" />
                        <span>CAPTURE {activeAngleTarget.toUpperCase()} ANGLE PHOTO</span>
                      </button>

                      <button
                        type="button"
                        onClick={stopCamera}
                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2.5 rounded-xl font-bold text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* 4 Angle Grid (Front, Back, Side, Top) */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'front', label: '1. FRONT VIEW', desc: 'Front seat & frame face' },
                    { key: 'back', label: '2. BACK VIEW', desc: 'Rear upholstery & back legs' },
                    { key: 'side', label: '3. SIDE VIEW', desc: 'Armrest & side profile' },
                    { key: 'top', label: '4. TOP / DETAIL VIEW', desc: 'Top cushion or table surface' }
                  ].map((item) => (
                    <div key={item.key} className="bg-white p-3 rounded-2xl border border-[#E5DEC9] space-y-2 relative group">
                      <div className="flex justify-between items-center text-xs font-mono font-bold text-[#A17A16]">
                        <span>{item.label}</span>
                        {angles[item.key] && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                      </div>

                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                        {angles[item.key] ? (
                          <img src={angles[item.key]} alt={item.label} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs text-center p-2">
                            <span>{item.desc}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 pt-1">
                        <label className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center cursor-pointer">
                          <span>Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, item.key)}
                            className="hidden"
                          />
                        </label>

                        <button
                          type="button"
                          onClick={() => startCamera(item.key)}
                          className="bg-[#F9F4E9] text-[#A17A16] hover:bg-[#E9D3A4] p-1.5 rounded-lg"
                          title="Snap with device camera"
                        >
                          <Camera className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit 3D Model Button */}
                <button
                  type="button"
                  onClick={handleSubmitFinal}
                  className="w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm shadow-xl tracking-wider flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>PUBLISH ITEM & GENERATE 360° 3D MODEL</span>
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};
