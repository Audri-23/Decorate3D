import React, { useState, useEffect } from 'react';
import {
  X, Grid, Box, RotateCw, Check, AlertTriangle, ShieldCheck,
  Save, Plus, Trash2, Sliders, Maximize2, Compass, Layers, Info,
  Eye, Move, Upload, Copy, Palette, Sun, Home, Navigation, Sparkles,
  FilePlus, FolderOpen, FileText, CheckCircle2, HardDrive, Image as ImageIcon
} from 'lucide-react';
import { SpatialRoomCanvas } from './SpatialRoomCanvas.jsx';
import { CustomModelImportModal } from './CustomModelImportModal.jsx';
import { BUILTIN_3D_ASSET_LIBRARY, ASSET_CATEGORIES } from '../../services/3d/assetLibrary.js';

export const RoomPlannerPreview = ({ product, isOpen, onClose, initialMarketplaceProducts = [] }) => {
  const [viewMode, setViewMode] = useState('3d'); // '3d' | '2d' | 'walkthrough'
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [leftNavTab, setLeftNavTab] = useState('library'); // 'library' | 'marketplace' | 'finishes'

  // Room Dimensions (in meters)
  const [roomDimensions, setRoomDimensions] = useState({
    width: 5.0,
    length: 6.0,
    height: 3.0,
    unit: 'm'
  });

  // Wall & Floor Customization State
  const [wallCustomization, setWallCustomization] = useState({
    paintColor: '#EAE6E1',
    wallMaterial: 'plaster'
  });

  const [floorCustomization, setFloorCustomization] = useState({
    floorMaterial: 'hardwood_oak',
    tintColor: '#C29B72'
  });

  const [layoutName, setLayoutName] = useState('My Custom Floor Plan');
  const [savedLayouts, setSavedLayouts] = useState([]);
  const [selectedLayoutId, setSelectedLayoutId] = useState(null);

  // User-Uploaded Custom 3D Asset Models from Backend Storage
  const [userUploadedAssets, setUserUploadedAssets] = useState([]);

  // Placed Furniture & Decorative Items Array (EMPTY BY DEFAULT!)
  const [placedItems, setPlacedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Modals & Analytics
  const [isCustomImportOpen, setIsCustomImportOpen] = useState(false);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [isUnsavedWarningModalOpen, setIsUnsavedWarningModalOpen] = useState(false);
  const [pendingActionAfterSave, setPendingActionAfterSave] = useState(null); // 'NEW' | 'LOAD'
  const [targetPlanToLoad, setTargetPlanToLoad] = useState(null);

  const [clearanceReport, setClearanceReport] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Selected Category filter for Asset Library
  const [selectedCategory, setSelectedCategory] = useState(ASSET_CATEGORIES.SOFAS);
  const [activeMobileDrawer, setActiveMobileDrawer] = useState(null); // null | 'library' | 'settings'

  // Fetch saved layouts and custom models from backend on modal open (always start with an empty room grid by default)
  useEffect(() => {
    if (isOpen) {
      setPlacedItems([]);
      setSelectedItemId(null);
      setHasUnsavedChanges(false);
      fetchSavedLayouts();
      fetchCustomModels();
    }
  }, [isOpen]);

  // Track Unsaved Changes
  const markDirty = () => {
    setHasUnsavedChanges(true);
  };

  // Fetch saved layouts from backend REST API
  const fetchSavedLayouts = async () => {
    try {
      const res = await fetch('/api/room-planner?userId=guest_user');
      const data = await res.json();
      if (data.success && data.data) {
        setSavedLayouts(data.data);
      }
    } catch (err) {
      console.warn('[RoomPlanner] Could not load saved layouts:', err);
    }
  };

  // Fetch uploaded custom 3D models from backend REST API
  const fetchCustomModels = async () => {
    try {
      const res = await fetch('/api/room-planner/custom-models');
      const data = await res.json();
      if (data.success && data.data) {
        setUserUploadedAssets(data.data);
      }
    } catch (err) {
      console.warn('[RoomPlanner] Could not load custom 3D models from server:', err);
    }
  };

  // Delete Custom Uploaded 3D Model File from Server Storage
  const handleDeleteCustomAsset = async (assetToDelete, e) => {
    e.stopPropagation();

    if (!assetToDelete.filename) {
      console.warn('Cannot delete asset without filename:', assetToDelete);
      return;
    }

    try {
      const res = await fetch(`/api/room-planner/delete-model/${assetToDelete.filename}`, {
        method: 'DELETE'
      });
      const data = await res.json();

      if (data.success) {
        setUserUploadedAssets((prev) => prev.filter((a) => a.filename !== assetToDelete.filename));
        setPlacedItems((prev) => prev.filter((item) => item.modelUrl !== assetToDelete.modelUrl));
        if (selectedItem?.modelUrl === assetToDelete.modelUrl) {
          setSelectedItemId(null);
        }
        markDirty();
      }
    } catch (err) {
      console.error('[RoomPlanner Error] Failed to delete custom 3D model:', err);
    }
  };

  // Save current room design to backend REST API (Database & Disk Storage JSON)
  const handleSaveLayout = async (andThenDo = null) => {
    setIsSaving(true);
    setSaveSuccessMsg(null);

    try {
      const payload = {
        _id: selectedLayoutId || undefined,
        userId: 'guest_user',
        layoutName: layoutName || 'My Custom Floor Plan',
        roomDimensions,
        wallCustomization,
        floorCustomization,
        placedItems
      };

      const res = await fetch('/api/room-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success) {
        const layoutId = data.data?._id || selectedLayoutId;
        const relativeDiskPath = data.storageLocation?.diskDirectory || `uploads/room-layouts/layout_${layoutId}.json`;

        setSaveSuccessMsg(`Saved to Database!`);
        if (data.data?._id) setSelectedLayoutId(data.data._id);
        setHasUnsavedChanges(false);
        fetchSavedLayouts();
        setTimeout(() => setSaveSuccessMsg(null), 4000);

        if (andThenDo === 'NEW') {
          startNewCleanPlan();
        } else if (andThenDo === 'LOAD' && targetPlanToLoad) {
          loadSelectedPlanDirectly(targetPlanToLoad);
        }
      }
    } catch (err) {
      console.error('[RoomPlanner Error] Failed to save layout:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // Helper to start a fresh clean plan
  const startNewCleanPlan = () => {
    setSelectedLayoutId(null);
    setLayoutName('My Custom Floor Plan');
    setRoomDimensions({ width: 5.0, length: 6.0, height: 3.0, unit: 'm' });
    setWallCustomization({ paintColor: '#EAE6E1', wallMaterial: 'plaster' });
    setFloorCustomization({ floorMaterial: 'hardwood_oak', tintColor: '#C29B72' });
    setPlacedItems([]);
    setSelectedItemId(null);
    setHasUnsavedChanges(false);
    setIsUnsavedWarningModalOpen(false);
    setPendingActionAfterSave(null);
  };

  // Handle "NEW PLAN" Toolbar Button Click
  const handleNewPlanClick = () => {
    if (hasUnsavedChanges) {
      setPendingActionAfterSave('NEW');
      setIsUnsavedWarningModalOpen(true);
    } else {
      startNewCleanPlan();
    }
  };

  // Directly load layout object into canvas studio
  const loadSelectedPlanDirectly = (plan) => {
    setSelectedLayoutId(plan._id);
    setLayoutName(plan.layoutName || 'Loaded Floor Plan');
    if (plan.roomDimensions) setRoomDimensions(plan.roomDimensions);
    if (plan.wallCustomization) setWallCustomization(plan.wallCustomization);
    if (plan.floorCustomization) setFloorCustomization(plan.floorCustomization);
    setPlacedItems(plan.placedItems || []);
    setSelectedItemId(null);
    setHasUnsavedChanges(false);
    setIsLoadModalOpen(false);
    setIsUnsavedWarningModalOpen(false);
    setTargetPlanToLoad(null);
    setPendingActionAfterSave(null);
  };

  // Handle Loading a Saved Plan
  const handleLoadPlanSelect = (plan) => {
    if (hasUnsavedChanges) {
      setTargetPlanToLoad(plan);
      setPendingActionAfterSave('LOAD');
      setIsUnsavedWarningModalOpen(true);
    } else {
      loadSelectedPlanDirectly(plan);
    }
  };

  // Delete a saved plan layout from DB & disk storage
  const handleDeleteSavedLayout = async (planId, e) => {
    e.stopPropagation();
    try {
      const res = await fetch(`/api/room-planner/${planId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSavedLayouts((prev) => prev.filter((p) => p._id !== planId));
        if (selectedLayoutId === planId) {
          setSelectedLayoutId(null);
        }
      }
    } catch (err) {
      console.error('[RoomPlanner Error] Failed to delete layout:', err);
    }
  };

  // Handle Add Item from 3D Asset Library or Custom Uploads
  const handleAddLibraryAsset = (asset) => {
    const newItem = {
      id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      assetId: asset.id || asset._id,
      title: asset.title,
      category: asset.category || selectedCategory,
      placementType: asset.placementType || 'FLOOR',
      modelUrl: asset.modelUrl,
      isPhotoFrame: !!asset.isPhotoFrame,
      customFrameImageUrl: asset.customFrameImageUrl || null,
      position: asset.placementType === 'WALL'
        ? { x: 0, y: 1.6, z: -roomDimensions.length / 2 + 0.05 }
        : { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1.0, y: 1.0, z: 1.0 }
    };

    setPlacedItems((prev) => [...prev, newItem]);
    setSelectedItemId(newItem.id);
    markDirty();
  };

  // Combined library list for selected category
  const categoryAssets = BUILTIN_3D_ASSET_LIBRARY.filter((a) => a.category === selectedCategory);
  const categoryCustomAssets = userUploadedAssets.filter((a) => a.category === selectedCategory);
  const filteredAssets = [...categoryCustomAssets, ...categoryAssets];

  // Currently Selected Placed Item
  const selectedItem = placedItems.find((i) => i.id === selectedItemId);

  // Update selected item transforms
  const handleUpdateSelectedItem = (updates) => {
    if (!selectedItemId) return;
    setPlacedItems((prev) =>
      prev.map((item) => {
        if (item.id === selectedItemId) {
          const updated = { ...item };
          if (updates.position) updated.position = { ...updated.position, ...updates.position };
          if (updates.rotation) updated.rotation = { ...updated.rotation, ...updates.rotation };
          if (updates.scale) updated.scale = updates.scale;
          if (updates.title) updated.title = updates.title;
          if (updates.customFrameImageUrl !== undefined) updated.customFrameImageUrl = updates.customFrameImageUrl;
          return updated;
        }
        return item;
      })
    );
    markDirty();
  };

  // Delete selected item
  const handleDeleteSelectedItem = () => {
    if (!selectedItemId) return;
    setPlacedItems((prev) => prev.filter((i) => i.id !== selectedItemId));
    setSelectedItemId(null);
    markDirty();
  };

  // Duplicate selected item
  const handleDuplicateSelectedItem = () => {
    if (!selectedItem) return;
    const dup = {
      ...selectedItem,
      id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      position: {
        x: selectedItem.position.x + 0.3,
        y: selectedItem.position.y,
        z: selectedItem.position.z + 0.3
      }
    };
    setPlacedItems((prev) => [...prev, dup]);
    setSelectedItemId(dup.id);
    markDirty();
  };

  // Room Dimension Change Handlers
  const handleRoomDimensionChange = (key, val) => {
    const numVal = Math.max(1.5, Math.min(25.0, parseFloat(val) || 1.5));
    setRoomDimensions((prev) => ({
      ...prev,
      [key]: numVal
    }));
    markDirty();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in select-none">

      {/* 1. TOP HEADER TOOLBAR */}
      <header className="min-h-14 bg-[#161B22] border-b border-white/10 px-3 lg:px-6 py-2 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 z-20 shrink-0">

        {/* Title & Layout Selector */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#E9D3A4] to-[#C29B72] flex items-center justify-center text-black font-bold shadow-md shrink-0">
              <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <input
                type="text"
                value={layoutName}
                onChange={(e) => { setLayoutName(e.target.value); markDirty(); }}
                className="bg-transparent font-serif font-bold text-white text-sm sm:text-base outline-none hover:bg-white/5 px-2 py-0.5 rounded transition-all focus:bg-white/10 max-w-[130px] sm:max-w-none"
              />
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 block px-2">
                <span className="hidden sm:inline">Real 3D Spatial Interior Studio </span>{hasUnsavedChanges && <span className="text-amber-400 font-bold">• Unsaved Edits</span>}
              </span>
            </div>
          </div>
        </div>

        {/* View Mode & Actions Controls */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">

          {/* View Mode Tabs: 3D, 2D, Walkthrough */}
          <div className="flex items-center bg-black/40 border border-white/10 p-0.5 sm:p-1 rounded-xl">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all flex items-center space-x-1 ${viewMode === '3d' ? 'bg-[#E9D3A4] text-black shadow' : 'text-gray-400 hover:text-white'
                }`}
            >
              <Box className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>3D</span>
            </button>
            <button
              onClick={() => setViewMode('2d')}
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all flex items-center space-x-1 ${viewMode === '2d' ? 'bg-[#E9D3A4] text-black shadow' : 'text-gray-400 hover:text-white'
                }`}
            >
              <Grid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>2D</span>
            </button>
            <button
              onClick={() => setViewMode('walkthrough')}
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all flex items-center space-x-1 ${viewMode === 'walkthrough' ? 'bg-[#E9D3A4] text-black shadow' : 'text-gray-400 hover:text-white'
                }`}
            >
              <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">WALKTHROUGH</span>
              <span className="inline sm:hidden">WALK</span>
            </button>
          </div>

          {/* Presentation Mode Toggle */}
          <button
            onClick={() => setIsPresentationMode(!isPresentationMode)}
            className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono font-semibold border transition-all flex items-center space-x-1 ${isPresentationMode
              ? 'bg-amber-950/80 border-amber-500/50 text-amber-300'
              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            title="Toggle Photorealistic Presentation Mode"
          >
            <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">{isPresentationMode ? 'REALISTIC VIEW' : 'DESIGN GRID'}</span>
          </button>

          {/* New Plan Button */}
          <button
            onClick={handleNewPlanClick}
            className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg font-mono text-[10px] sm:text-xs font-bold flex items-center space-x-1 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
            title="Start a new clean floor plan"
          >
            <FilePlus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
            <span className="hidden sm:inline">NEW PLAN</span>
          </button>

          {/* Load Plan Button */}
          <button
            onClick={() => setIsLoadModalOpen(true)}
            className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg font-mono text-[10px] sm:text-xs font-bold flex items-center space-x-1 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
            title="Load previously saved floor plans"
          >
            <FolderOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E9D3A4]" />
            <span className="hidden sm:inline">LOAD</span>
          </button>

          {/* Save Layout Button */}
          <button
            onClick={() => handleSaveLayout()}
            disabled={isSaving}
            className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg font-mono text-[10px] sm:text-xs font-bold flex items-center space-x-1.5 bg-gradient-to-r from-[#E9D3A4] to-[#C29B72] text-black hover:opacity-90 transition-all shadow-md active:scale-95 disabled:opacity-50"
          >
            <Save className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{isSaving ? 'SAVING...' : 'SAVE'}</span>
          </button>

          {saveSuccessMsg && (
            <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg animate-fade-in">
              {saveSuccessMsg}
            </span>
          )}

          <button onClick={onClose} className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10 ml-1">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      {/* 2. Main 3-Column Studio Layout */}
      <div className="flex-1 w-full h-full bg-[#0F1319] flex overflow-hidden relative">

        {/* LEFT COLUMN: Asset Library & Room Customization Drawer */}
        <aside className={`lg:w-80 w-full max-w-[320px] bg-[#161B22]/98 border-r border-white/10 flex flex-col z-30 transition-all ${
          activeMobileDrawer === 'library' ? 'fixed inset-y-14 left-0 bottom-14 shadow-2xl' : 'hidden lg:flex'
        }`}>
          {/* Mobile Drawer Close Header */}
          <div className="lg:hidden p-3 bg-black/60 border-b border-white/10 flex items-center justify-between font-mono text-xs text-white">
            <span className="font-bold text-[#E9D3A4] flex items-center space-x-1.5">
              <Box className="w-4 h-4" />
              <span>3D ASSETS LIBRARY</span>
            </span>
            <button onClick={() => setActiveMobileDrawer(null)} className="p-1 text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-black/40 text-xs font-mono font-bold">
            <button
              onClick={() => setLeftNavTab('library')}
              className={`py-3 border-b-2 transition-all ${leftNavTab === 'library' ? 'border-[#E9D3A4] text-[#E9D3A4]' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              3D ASSETS
            </button>
            <button
              onClick={() => setLeftNavTab('marketplace')}
              className={`py-3 border-b-2 transition-all ${leftNavTab === 'marketplace' ? 'border-[#E9D3A4] text-[#E9D3A4]' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              MARKETPLACE
            </button>
            <button
              onClick={() => setLeftNavTab('finishes')}
              className={`py-3 border-b-2 transition-all ${leftNavTab === 'finishes' ? 'border-[#E9D3A4] text-[#E9D3A4]' : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              FINISHES
            </button>
          </div>

          {/* Tab 1: User-Uploaded & Authentic Real 3D Asset Library */}
          {leftNavTab === 'library' && (
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">

              {/* Category Filter Pills */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  FILTER BY FURNITURE TYPE
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-xs font-mono px-3 py-2 rounded-xl text-white outline-none hover:border-white/20 cursor-pointer font-bold"
                >
                  {Object.values(ASSET_CATEGORIES).map((cat) => (
                    <option key={cat} value={cat} className="bg-[#161B22] text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload GLB Quick Action Button */}
              <button
                onClick={() => setIsCustomImportOpen(true)}
                className="w-full py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:bg-amber-500/20 border border-[#E9D3A4]/40 rounded-xl text-xs font-mono font-bold text-[#E9D3A4] flex items-center justify-center space-x-2 transition-all"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>+ UPLOAD FILE FOR THIS CATEGORY</span>
              </button>

              {/* Asset List or Empty Category Prompt */}
              {filteredAssets.length > 0 ? (
                <div className="space-y-2">
                  {filteredAssets.map((asset) => (
                    <div
                      key={asset.id || asset._id}
                      onClick={() => handleAddLibraryAsset(asset)}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E9D3A4]/40 rounded-xl cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <img
                          src={asset.thumbnailUrl || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200'}
                          alt={asset.title}
                          className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                        <div className="truncate">
                          <h5 className="font-serif text-xs font-bold text-white group-hover:text-[#E9D3A4] transition-colors leading-tight truncate">
                            {asset.title}
                          </h5>
                          <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                            {asset.placementType} • {asset.dimensions?.width}m × {asset.dimensions?.depth}m
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 shrink-0 ml-2">
                        {asset.filename && (
                          <button
                            onClick={(e) => handleDeleteCustomAsset(asset, e)}
                            className="p-1.5 text-gray-400 hover:text-rose-400 hover:bg-rose-950/60 rounded-lg transition-colors"
                            title="Delete custom model file from server storage"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center space-y-2 text-xs font-mono">
                  <Box className="w-8 h-8 mx-auto text-[#E9D3A4] opacity-60 mb-1" />
                  <p className="text-gray-300 font-bold">No 3D assets in "{selectedCategory}"</p>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Upload your own custom .GLB model file for this category using the button above.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Marketplace Products */}
          {leftNavTab === 'marketplace' && (
            <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-2">
                DECORATE3D MARKETPLACE ITEMS
              </span>
              {initialMarketplaceProducts.map((p) => (
                <div
                  key={p._id || p.id}
                  onClick={() => {
                    const resolvedModelUrl = p.model3D?.url || p.modelUrl || p.model3DUrl || p.url || (
                      (p.category || '').toLowerCase().includes('sofa') || (p.title || '').toLowerCase().includes('divan')
                        ? '/uploads/models/victorian_lounge_sofa-1785965996790-766675802.glb'
                        : '/uploads/models/sample_chair.gltf'
                    );
                    handleAddLibraryAsset({
                      id: p._id || p.id,
                      title: p.title,
                      category: p.category || 'Sofas & Seating',
                      placementType: p.placementType || 'FLOOR',
                      modelUrl: resolvedModelUrl,
                      thumbnailUrl: p.images?.[0] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200',
                      dimensions: { width: 1.0, depth: 1.0, height: 1.0 }
                    });
                  }}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E9D3A4]/40 rounded-xl cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <img
                      src={p.images?.[0] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200'}
                      alt={p.title}
                      className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="truncate">
                      <h5 className="font-serif text-xs font-bold text-white group-hover:text-[#E9D3A4] transition-colors truncate">
                        {p.title}
                      </h5>
                      <span className="text-[10px] font-mono text-[#E9D3A4] font-bold block mt-0.5">
                        ${p.price}
                      </span>
                    </div>
                  </div>
                  <Plus className="w-4 h-4 text-gray-400 group-hover:text-white shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Room Finishes (Paint & Flooring) */}
          {leftNavTab === 'finishes' && (
            <div className="flex-1 p-4 overflow-y-auto space-y-5 custom-scrollbar">

              {/* Wall Paint Finishes */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  WALL PAINT COLORS
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { color: '#EAE6E1', label: 'Alabaster' },
                    { color: '#D8D0C5', label: 'Warm Taupe' },
                    { color: '#4A5568', label: 'Slate' },
                    { color: '#2C3E50', label: 'Midnight Blue' },
                    { color: '#2F3E46', label: 'Forest Green' }
                  ].map((p) => (
                    <button
                      key={p.color}
                      onClick={() => { setWallCustomization((prev) => ({ ...prev, paintColor: p.color })); markDirty(); }}
                      style={{ backgroundColor: p.color }}
                      className={`w-10 h-10 rounded-xl border-2 transition-all relative ${wallCustomization.paintColor === p.color ? 'border-[#E9D3A4] scale-110 shadow-lg' : 'border-white/10 hover:scale-105'
                        }`}
                      title={p.label}
                    />
                  ))}
                </div>
              </div>

              {/* Floor Material Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  FLOORING MATERIAL
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: 'hardwood_oak', name: 'Oak Hardwood Plank' },
                    { id: 'walnut', name: 'Walnut Dark Wood' },
                    { id: 'marble_white', name: 'Carrara White Marble' },
                    { id: 'ceramic_tile', name: 'Neutral Ceramic Tiles' },
                    { id: 'carpet_neutral', name: 'Plush Neutral Carpet' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => { setFloorCustomization((prev) => ({ ...prev, floorMaterial: f.id })); markDirty(); }}
                      className={`w-full p-2.5 rounded-xl border text-xs font-mono font-semibold transition-all text-left flex items-center justify-between ${floorCustomization.floorMaterial === f.id
                        ? 'bg-[#E9D3A4]/15 border-[#E9D3A4] text-[#E9D3A4]'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                    >
                      <span>{f.name}</span>
                      {floorCustomization.floorMaterial === f.id && <Check className="w-3.5 h-3.5 text-[#E9D3A4]" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* CENTER COLUMN: 3D Canvas Studio */}
        <main className="flex-1 h-full relative overflow-hidden bg-[#0A0D12]">

          <SpatialRoomCanvas
            roomDimensions={roomDimensions}
            wallCustomization={wallCustomization}
            floorCustomization={floorCustomization}
            placedItems={placedItems}
            openings={[]}
            selectedItemId={selectedItemId}
            viewMode={viewMode}
            isPresentationMode={isPresentationMode}
            snapToGrid={snapToGrid}
            onSelectItem={(id) => setSelectedItemId(id)}
            onItemPositionChange={(id, newPos, newRot) => {
              setPlacedItems((prev) =>
                prev.map((item) => {
                  if (item.id === id) {
                    const updated = { ...item, position: newPos };
                    if (newRot) updated.rotation = { ...updated.rotation, ...newRot };
                    return updated;
                  }
                  return item;
                })
              );
              markDirty();
            }}
            onClearanceReport={(rep) => setClearanceReport(rep)}
          />

          {/* Quick HUD Overlays */}
          <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl font-mono text-xs text-white flex items-center space-x-2">
              <Maximize2 className="w-3.5 h-3.5 text-[#E9D3A4]" />
              <span>
                Room: {roomDimensions.width}m × {roomDimensions.length}m × {roomDimensions.height}m
              </span>
            </div>
          </div>

          {/* Mobile Bottom Navigation Bar */}
          <div className="lg:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-40 bg-[#161B22]/90 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl flex items-center space-x-1.5 text-[11px] font-mono font-bold shadow-2xl max-w-[calc(100vw-1rem)]">
            <button
              onClick={() => setActiveMobileDrawer(activeMobileDrawer === 'library' ? null : 'library')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${
                activeMobileDrawer === 'library' ? 'bg-[#E9D3A4] text-black shadow' : 'text-gray-300 hover:text-white bg-white/5'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>ASSETS</span>
            </button>

            <button
              onClick={() => setActiveMobileDrawer(null)}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${
                activeMobileDrawer === null ? 'bg-[#E9D3A4] text-black shadow' : 'text-gray-300 hover:text-white bg-white/5'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>CANVAS</span>
            </button>

            <button
              onClick={() => setActiveMobileDrawer(activeMobileDrawer === 'settings' ? null : 'settings')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${
                activeMobileDrawer === 'settings' ? 'bg-[#E9D3A4] text-black shadow' : 'text-gray-300 hover:text-white bg-white/5'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>SETTINGS</span>
            </button>
          </div>
        </main>

        {/* RIGHT COLUMN: Room Controls & Spatial Analytics Panel */}
        <aside className={`lg:w-80 w-full max-w-[320px] bg-[#161B22]/98 border-l border-white/10 flex flex-col z-30 overflow-y-auto custom-scrollbar p-4 space-y-4 transition-all ${
          activeMobileDrawer === 'settings' ? 'fixed inset-y-14 right-0 bottom-14 shadow-2xl' : 'hidden lg:flex'
        }`}>
          {/* Mobile Drawer Close Header */}
          <div className="lg:hidden p-3 bg-black/60 border-b border-white/10 flex items-center justify-between font-mono text-xs text-white -mx-4 -mt-4 mb-2">
            <span className="font-bold text-[#E9D3A4] flex items-center space-x-1.5">
              <Sliders className="w-4 h-4" />
              <span>ROOM SETTINGS</span>
            </span>
            <button onClick={() => setActiveMobileDrawer(null)} className="p-1 text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Room Scale & Architectural Dimensions Sliders */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
            <h4 className="font-serif text-xs font-bold text-white flex items-center justify-between">
              <span>ROOM SIZE (METERS)</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#E9D3A4]" />
            </h4>

            <div className="space-y-3 text-xs font-mono">
              {/* Room Width Slider */}
              <div>
                <div className="flex justify-between text-gray-400 mb-1">
                  <span>Room Width (X)</span>
                  <span className="text-white font-bold">{roomDimensions.width.toFixed(1)}m</span>
                </div>
                <input
                  type="range" min="2.0" max="20.0" step="0.5"
                  value={roomDimensions.width}
                  onChange={(e) => handleRoomDimensionChange('width', parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#E9D3A4]"
                />
              </div>

              {/* Room Length Slider */}
              <div>
                <div className="flex justify-between text-gray-400 mb-1">
                  <span>Room Length (Z)</span>
                  <span className="text-white font-bold">{roomDimensions.length.toFixed(1)}m</span>
                </div>
                <input
                  type="range" min="2.0" max="20.0" step="0.5"
                  value={roomDimensions.length}
                  onChange={(e) => handleRoomDimensionChange('length', parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#E9D3A4]"
                />
              </div>

              {/* Room Ceiling Height Slider */}
              <div>
                <div className="flex justify-between text-gray-400 mb-1">
                  <span>Ceiling Height (Y)</span>
                  <span className="text-white font-bold">{roomDimensions.height.toFixed(1)}m</span>
                </div>
                <input
                  type="range" min="2.0" max="6.0" step="0.1"
                  value={roomDimensions.height}
                  onChange={(e) => handleRoomDimensionChange('height', parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#E9D3A4]"
                />
              </div>
            </div>
          </div>

          {/* Selected Item Inspector & Control Panel */}
          {selectedItem ? (
            <div className="bg-white/5 border border-[#E9D3A4]/30 rounded-2xl p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#E9D3A4]">{selectedItem.title}</h4>
                  <span className="text-[10px] font-mono text-gray-400">{selectedItem.category}</span>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={handleDuplicateSelectedItem}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Duplicate object"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleDeleteSelectedItem}
                    className="p-1.5 text-rose-400 hover:bg-rose-950/60 rounded-lg transition-colors"
                    title="Delete object from room"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Transform Inputs */}
              <div className="space-y-3 font-mono text-xs">

                {/* Position Coordinates */}
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-bold">
                    POSITION (METERS)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-[10px] text-gray-500 block">X Pos</span>
                      <input
                        type="number" step="0.1"
                        value={selectedItem.position.x}
                        onChange={(e) => handleUpdateSelectedItem({ position: { x: parseFloat(e.target.value) || 0 } })}
                        className="w-full bg-white/5 border border-white/10 px-2 py-1 rounded text-white font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Y Height</span>
                      <input
                        type="number" step="0.1"
                        value={selectedItem.position.y || 0}
                        onChange={(e) => handleUpdateSelectedItem({ position: { y: parseFloat(e.target.value) || 0 } })}
                        className="w-full bg-white/5 border border-white/10 px-2 py-1 rounded text-white font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Z Pos</span>
                      <input
                        type="number" step="0.1"
                        value={selectedItem.position.z}
                        onChange={(e) => handleUpdateSelectedItem({ position: { z: parseFloat(e.target.value) || 0 } })}
                        className="w-full bg-white/5 border border-white/10 px-2 py-1 rounded text-white font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Rotation Slider - Hidden for Wall Mounted Items */}
                {!(selectedItem.placementType === 'WALL' ||
                  (selectedItem.category && (
                    selectedItem.category.toLowerCase().includes('art') ||
                    selectedItem.category.toLowerCase().includes('frame') ||
                    selectedItem.category.toLowerCase().includes('mirror') ||
                    selectedItem.category.toLowerCase().includes('opening')
                  ))) && (
                    <div>
                      <div className="flex justify-between text-gray-400 mb-1">
                        <span>Y Rotation</span>
                        <span className="text-white font-bold">{selectedItem.rotation?.y || selectedItem.rotationY || 0}°</span>
                      </div>
                      <input
                        type="range" min="0" max="360" step="5"
                        value={selectedItem.rotation?.y || selectedItem.rotationY || 0}
                        onChange={(e) => handleUpdateSelectedItem({ rotation: { y: parseInt(e.target.value) } })}
                        className="w-full h-1 bg-white/20 rounded appearance-none cursor-pointer accent-[#E9D3A4]"
                      />
                    </div>
                  )}

                {/* Scale Slider */}
                <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Scale Factor</span>
                    <span className="text-white font-bold">
                      {(typeof selectedItem.scale === 'number' ? selectedItem.scale : (selectedItem.scale?.x || 1.0)).toFixed(2)}x
                    </span>
                  </div>
                  <input
                    type="range" min="0.3" max="2.5" step="0.05"
                    value={typeof selectedItem.scale === 'number' ? selectedItem.scale : (selectedItem.scale?.x || 1.0)}
                    onChange={(e) => {
                      const s = parseFloat(e.target.value);
                      handleUpdateSelectedItem({ scale: { x: s, y: s, z: s } });
                    }}
                    className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#E9D3A4]"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center space-y-2">
              <Info className="w-6 h-6 mx-auto text-gray-400 opacity-60" />
              <p className="text-xs font-mono text-gray-300 font-bold">No Object Selected</p>
              <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                Click any 3D model in the room canvas or add items from the 3D Assets library to inspect dimensions and controls.
              </p>
            </div>
          )}

          {/* Spatial Clearance & Real Overlap Conflict Analytics Card */}
          {clearanceReport && (
            <div className={`border rounded-2xl p-4 space-y-3 transition-all ${clearanceReport.isOverlapping
              ? 'bg-rose-950/90 border-rose-500/80 text-rose-300'
              : clearanceReport.intersectsWall
                ? 'bg-amber-950/70 border-amber-500/60 text-amber-300'
                : 'bg-white/5 border-white/10 text-gray-300'
              }`}>
              <h4 className="font-serif text-xs font-bold flex items-center justify-between">
                <span className="uppercase tracking-wider">Spatial Fit & Model Analytics</span>
                {clearanceReport.isOverlapping ? (
                  <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
                ) : clearanceReport.intersectsWall ? (
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                )}
              </h4>

              {/* Conflict Overlap Banner */}
              {clearanceReport.isOverlapping && (
                <div className="p-2.5 bg-rose-900/60 border border-rose-500/50 rounded-xl text-xs font-mono font-bold text-rose-200">
                  ⚠️ SPATIAL CONFLICT DETECTED! Overlaps with: {clearanceReport.overlappingTitles.join(', ')}
                </div>
              )}

              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-400">Calculated Size:</span>
                  <span className="font-bold">
                    {clearanceReport.dimensions?.width}m × {clearanceReport.dimensions?.depth}m × {clearanceReport.dimensions?.height}m
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Wall Clearance:</span>
                  <span className="font-bold">{clearanceReport.minClearance}m</span>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* 3. MODAL: LOAD PREVIOUSLY SAVED PLANS */}
      {isLoadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161B22] border border-white/10 rounded-2xl w-full max-w-xl p-6 space-y-4 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <FolderOpen className="w-5 h-5 text-[#E9D3A4]" />
                <h3 className="font-serif text-lg font-bold text-white">Load Previously Saved Plans</h3>
              </div>
              <button onClick={() => setIsLoadModalOpen(false)} className="text-gray-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {savedLayouts.length > 0 ? (
                savedLayouts.map((plan) => (
                  <div
                    key={plan._id}
                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E9D3A4]/50 rounded-xl transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#E9D3A4] transition-colors">
                        {plan.layoutName || 'Untitled Plan'}
                      </h4>
                      <div className="flex items-center space-x-3 text-[11px] font-mono text-gray-400">
                        <span>Size: {plan.roomDimensions?.width || 5}m × {plan.roomDimensions?.length || 6}m</span>
                        <span>• {plan.placedItems?.length || 0} Objects</span>
                        <span>• Saved: {new Date(plan.updatedAt || plan.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-[10px] font-mono text-amber-400/80">
                        <HardDrive className="w-3 h-3" />
                        <span>Saved in DB & Disk Storage: uploads/room-layouts/layout_{plan._id}.json</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => handleLoadPlanSelect(plan)}
                        className="px-3 py-1.5 bg-[#E9D3A4] hover:bg-[#c9b486] text-black font-mono font-bold text-xs rounded-lg transition-all shadow-sm"
                      >
                        LOAD PLAN
                      </button>
                      <button
                        onClick={(e) => handleDeleteSavedLayout(plan._id, e)}
                        className="p-2 text-gray-400 hover:text-rose-400 hover:bg-rose-950/60 rounded-lg transition-all"
                        title="Delete plan permanently from database & storage"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-white/5 border border-white/10 rounded-xl space-y-2 text-xs font-mono">
                  <FileText className="w-8 h-8 mx-auto text-[#E9D3A4] opacity-50" />
                  <p className="text-gray-300 font-bold">No Saved Plans Found</p>
                  <p className="text-gray-400 text-[11px]">
                    Create your first room design and press "SAVE PLAN" to store it in server storage directory.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL: UNSAVED CHANGES WARNING DIALOG */}
      {isUnsavedWarningModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#161B22] border border-amber-500/50 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl animate-fade-in">
            <div className="flex items-center space-x-3 text-amber-400 border-b border-white/10 pb-3">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <h3 className="font-serif text-base font-bold text-white">Unsaved Changes Warning</h3>
                <p className="text-[11px] font-mono text-gray-400">Current floor plan has unsaved modifications.</p>
              </div>
            </div>

            <p className="text-xs font-mono text-gray-300 leading-relaxed">
              You have unsaved changes in <span className="text-[#E9D3A4] font-bold">"{layoutName}"</span>. Would you like to save your work before proceeding?
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setIsUnsavedWarningModalOpen(false);
                  handleSaveLayout(pendingActionAfterSave);
                }}
                className="w-full py-2.5 bg-gradient-to-r from-[#E9D3A4] to-[#C29B72] text-black font-mono font-bold text-xs rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Current Plan & Proceed</span>
              </button>

              <button
                onClick={() => {
                  if (pendingActionAfterSave === 'NEW') {
                    startNewCleanPlan();
                  } else if (pendingActionAfterSave === 'LOAD' && targetPlanToLoad) {
                    loadSelectedPlanDirectly(targetPlanToLoad);
                  }
                }}
                className="w-full py-2.5 bg-white/5 hover:bg-rose-950/50 border border-white/10 hover:border-rose-500/40 text-rose-300 font-mono font-bold text-xs rounded-xl transition-all"
              >
                Don't Save (Discard & Proceed)
              </button>

              <button
                onClick={() => {
                  setIsUnsavedWarningModalOpen(false);
                  setPendingActionAfterSave(null);
                  setTargetPlanToLoad(null);
                }}
                className="w-full py-2 bg-transparent text-gray-400 hover:text-white font-mono text-xs transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL: IMPORT CUSTOM GLB MODEL */}
      {isCustomImportOpen && (
        <CustomModelImportModal
          isOpen={isCustomImportOpen}
          onClose={() => setIsCustomImportOpen(false)}
          selectedCategory={selectedCategory}
          onImportAsset={(newCustomAsset) => {
            setUserUploadedAssets((prev) => [newCustomAsset, ...prev]);
            setSelectedCategory(newCustomAsset.category || selectedCategory);
            setLeftNavTab('library');
          }}
        />
      )}
    </div>
  );
};
