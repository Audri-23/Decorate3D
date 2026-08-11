import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, FileCode, CheckCircle2, AlertCircle, Box, Layers, ArrowRight } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { modelLoaderService } from '../../services/3d/modelLoaderService.js';
import { ASSET_CATEGORIES } from '../../services/3d/assetLibrary.js';

export const CustomModelImportModal = ({ isOpen, onClose, onImportAsset }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [assetTitle, setAssetTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ASSET_CATEGORIES.SOFAS);
  const [placementType, setPlacementType] = useState('FLOOR');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [modelDetails, setModelDetails] = useState(null);
  const [objectUrl, setObjectUrl] = useState(null);

  // Reset modal state when closed
  useEffect(() => {
    if (!isOpen) {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      setSelectedFile(null);
      setAssetTitle('');
      setSelectedCategory(ASSET_CATEGORIES.SOFAS);
      setErrorMsg(null);
      setPreviewLoaded(false);
      setModelDetails(null);
      setObjectUrl(null);
    }
  }, [isOpen]);

  // Automatically sync placementType when category changes
  useEffect(() => {
    const catLower = (selectedCategory || '').toLowerCase();
    if (catLower.includes('art') || catLower.includes('frame') || catLower.includes('mirror') || catLower.includes('opening')) {
      setPlacementType('WALL');
    } else {
      setPlacementType('FLOOR');
    }
  }, [selectedCategory]);

  // Handle File Selection & Validation
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMsg(null);
    setPreviewLoaded(false);
    setModelDetails(null);

    // Validate 3D File extension
    const validation = modelLoaderService.validate3DFile(file);
    if (!validation.valid) {
      setErrorMsg(validation.error);
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setAssetTitle(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
    setIsLoading(true);

    try {
      // Create local Blob URL for 3D preview canvas
      const url = URL.createObjectURL(file);
      setObjectUrl(url);

      // Load model using modelLoaderService for preview
      const loaded = await modelLoaderService.loadGLTFModel(url);

      setModelDetails({
        sizeMB: (file.size / (1024 * 1024)).toFixed(2),
        dimensions: {
          width: loaded.size.x.toFixed(2),
          depth: loaded.size.z.toFixed(2),
          height: loaded.size.y.toFixed(2)
        },
        rawScene: loaded.scene
      });

      setPreviewLoaded(true);
      initPreviewCanvas(loaded.scene, loaded.size);
    } catch (err) {
      console.error('[CustomModelImport] Error loading preview:', err);
      setErrorMsg(err.message || 'Unable to parse 3D GLB/GLTF model.');
    } finally {
      setIsLoading(false);
    }
  };

  // Render Preview 3D Scene
  const initPreviewCanvas = (modelScene, size) => {
    setTimeout(() => {
      const container = mountRef.current;
      if (!container) return;

      const w = container.clientWidth || 400;
      const h = container.clientHeight || 300;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x181C24);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.set(maxDim * 1.5, maxDim * 1.2, maxDim * 1.8);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      rendererRef.current = renderer;

      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2.0;
      controlsRef.current = controls;

      // Studio Lights
      const ambient = new THREE.AmbientLight(0xffffff, 1.5);
      scene.add(ambient);
      const dirLight = new THREE.DirectionalLight(0xfff8f0, 2.0);
      dirLight.position.set(5, 10, 5);
      scene.add(dirLight);

      // Floor Grid
      const grid = new THREE.GridHelper(maxDim * 3, 10, 0xE9D3A4, 0x333F4D);
      grid.position.y = 0;
      scene.add(grid);

      // Add Model
      modelLoaderService.alignModelToFloor(modelScene);
      scene.add(modelScene);

      let animId;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        if (controlsRef.current) controlsRef.current.update();
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    }, 100);
  };

  // Upload model file to Express server storage (/uploads/models/) and add to user category library
  const handleConfirmImport = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const formData = new FormData();
      formData.append('title', assetTitle || selectedFile.name);
      formData.append('category', selectedCategory);
      formData.append('placementType', placementType);
      formData.append('width', modelDetails?.dimensions?.width || 1.0);
      formData.append('depth', modelDetails?.dimensions?.depth || 1.0);
      formData.append('height', modelDetails?.dimensions?.height || 1.0);
      formData.append('modelFile', selectedFile);

      const res = await fetch('/api/room-planner/upload-model', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (data.success && data.data) {
        onImportAsset(data.data);
        onClose();
      } else {
        setErrorMsg(data.message || 'Failed to upload custom 3D model to server.');
      }
    } catch (err) {
      console.error('[CustomModelImport] Server Upload Error:', err);
      setErrorMsg('Network error uploading 3D model file to server storage.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn font-sans text-white">
      <div className="bg-[#161B22] border border-white/15 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <Box className="w-5 h-5 text-[#E9D3A4]" />
            <h3 className="font-serif text-lg font-bold text-white">Upload 3D Asset Model (.GLB / .GLTF)</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dropzone & Instructions */}
        {!selectedFile ? (
          <div className="border-2 border-dashed border-white/20 hover:border-[#E9D3A4] rounded-2xl p-8 text-center transition-all bg-white/5 hover:bg-white/10 cursor-pointer relative">
            <input
              type="file"
              accept=".glb,.gltf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <Upload className="w-12 h-12 mx-auto text-[#E9D3A4] mb-3 animate-bounce" />
            <h4 className="font-serif text-base font-bold text-white mb-1">
              Select or Drop a 3D Model File
            </h4>
            <p className="text-xs font-mono text-gray-400 mb-4">
              Supported Formats: <strong className="text-[#E9D3A4]">.GLB</strong> or <strong className="text-[#E9D3A4]">.GLTF</strong>
            </p>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#E9D3A4] to-[#C29B72] text-black font-mono text-xs font-bold rounded-xl shadow">
              BROWSE COMPUTER ASSETS
            </span>
          </div>
        ) : (
          /* File Preview & Config Section */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 3D Canvas Preview Window */}
            <div className="bg-[#0F1319] border border-white/10 rounded-xl overflow-hidden h-64 relative flex items-center justify-center">
              {isLoading && (
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 border-2 border-[#E9D3A4] border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs font-mono text-gray-400">Uploading & Processing 3D Asset...</p>
                </div>
              )}

              <div ref={mountRef} className="w-full h-full" />

              {previewLoaded && !isLoading && (
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                  REAL 3D GLB LOADED
                </div>
              )}
            </div>

            {/* Model Metadata & Configuration Panel */}
            <div className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="text-gray-400 block mb-1">Asset Title</label>
                <input
                  type="text"
                  value={assetTitle}
                  onChange={(e) => setAssetTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 focus:border-[#E9D3A4] px-3 py-2 rounded-xl text-white outline-none"
                  placeholder="e.g. Modern Leather Sofa"
                />
              </div>

              {/* Furniture Category / Type Selection Dropdown */}
              <div>
                <label className="text-gray-400 block mb-1 font-bold text-[#E9D3A4]">
                  TARGET FURNITURE CATEGORY
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 focus:border-[#E9D3A4] px-3 py-2 rounded-xl text-white outline-none cursor-pointer font-bold"
                >
                  {Object.values(ASSET_CATEGORIES).map((cat) => (
                    <option key={cat} value={cat} className="bg-[#161B22] text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {modelDetails && (
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1 text-[11px]">
                  <div className="flex justify-between text-gray-400">
                    <span>File Size:</span>
                    <span className="text-white font-bold">{modelDetails.sizeMB} MB</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Dimensions (W × D × H):</span>
                    <span className="text-[#E9D3A4] font-bold">
                      {modelDetails.dimensions.width}m × {modelDetails.dimensions.depth}m × {modelDetails.dimensions.height}m
                    </span>
                  </div>
                </div>
              )}

              {/* Placement Type Selector */}
              <div>
                <label className="text-gray-400 block mb-1">Placement Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPlacementType('FLOOR')}
                    className={`py-1.5 rounded-xl border text-xs font-bold transition-all ${
                      placementType === 'FLOOR'
                        ? 'bg-[#E9D3A4] text-black border-[#E9D3A4]'
                        : 'bg-white/5 text-gray-300 border-white/10'
                    }`}
                  >
                    FLOOR PLACEMENT
                  </button>
                  <button
                    onClick={() => setPlacementType('WALL')}
                    className={`py-1.5 rounded-xl border text-xs font-bold transition-all ${
                      placementType === 'WALL'
                        ? 'bg-[#E9D3A4] text-black border-[#E9D3A4]'
                        : 'bg-white/5 text-gray-300 border-white/10'
                    }`}
                  >
                    WALL MOUNTED
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex space-x-2">
                <button
                  onClick={() => setSelectedFile(null)}
                  className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-gray-300"
                >
                  CHANGE FILE
                </button>
                <button
                  onClick={handleConfirmImport}
                  disabled={!previewLoaded || isLoading}
                  className="flex-1 py-2 bg-gradient-to-r from-[#E9D3A4] to-[#C29B72] text-black font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 disabled:opacity-50 shadow-md"
                >
                  <Upload className="w-4 h-4" />
                  <span>{isLoading ? 'UPLOADING...' : 'UPLOAD FILE'}</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Error Card */}
        {errorMsg && (
          <div className="bg-rose-950/80 border border-rose-500/50 p-4 rounded-xl flex items-start space-x-3 text-xs text-rose-200">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-rose-300">Upload Error</h5>
              <p className="mt-0.5 leading-relaxed">{errorMsg}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
