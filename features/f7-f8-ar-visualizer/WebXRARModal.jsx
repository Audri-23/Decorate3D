import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  Smartphone, ArrowLeft, RefreshCw, CheckCircle2, AlertTriangle,
  Ruler, RotateCw, X, ShieldAlert, Sparkles, Box, Maximize2
} from 'lucide-react';
import { arService } from './ar.service.js';

export const WebXRARModal = ({ product, isOpen, onClose, onOpenFitValidation }) => {
  const mountRef = useRef(null);
  const arContainerRef = useRef(null);
  const videoRef = useRef(null);
  const cameraStreamRef = useRef(null);

  // Status & Capability States
  const [xrSupportStatus, setXrSupportStatus] = useState({ checking: true, supported: false, reason: '' });
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isModelPlaced, setIsModelPlaced] = useState(false);
  const [isLoadingModel, setIsLoadingModel] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [downloadProgressStr, setDownloadProgressStr] = useState('');
  const [loadError, setLoadError] = useState(null);
  const [isSimulatedAR, setIsSimulatedAR] = useState(false);
  const [showPlacedBadge, setShowPlacedBadge] = useState(false);
  const [customScaleFactor, setCustomScaleFactor] = useState(30);

  // References for WebXR & Three.js
  const xrSessionRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const reticleRef = useRef(null);
  const placedModelGroupRef = useRef(null);
  const hitTestSourceRef = useRef(null);
  const localSpaceRef = useRef(null);
  const rawLoadedModelRef = useRef(null);
  const badgeTimerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const raycasterRef = useRef(new THREE.Raycaster());
  const floorPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));

  const metricDims = arService.getProductMetricDimensions(product?.dimensions);

  // 1. Initial Device & WebXR Capability Check
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    arService.checkWebXRSupport().then((res) => {
      if (isMounted) {
        setXrSupportStatus({
          checking: false,
          supported: res.supported,
          reason: res.reason || ''
        });
      }
    });

    return () => { isMounted = false; };
  }, [isOpen]);

  // Cleanup on unmount or modal close
  useEffect(() => {
    if (!isOpen && xrSessionRef.current) {
      xrSessionRef.current.end().catch(() => { });
      xrSessionRef.current = null;
    }
    if (!isOpen && cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach(t => t.stop());
      cameraStreamRef.current = null;
    }
    if (badgeTimerRef.current) {
      clearTimeout(badgeTimerRef.current);
    }
  }, [isOpen]);

  // Connect video element to active camera stream when session activates
  useEffect(() => {
    if (isSessionActive && cameraStreamRef.current && videoRef.current) {
      videoRef.current.srcObject = cameraStreamRef.current;
      videoRef.current.play().catch(err => console.warn('[WebXR AR] Video play note:', err));
    }
  }, [isSessionActive]);

  // Trigger placement notification with auto-hide after 1.2s
  const triggerPlacedNotification = () => {
    setShowPlacedBadge(true);
    if (badgeTimerRef.current) clearTimeout(badgeTimerRef.current);
    badgeTimerRef.current = setTimeout(() => {
      setShowPlacedBadge(false);
    }, 1200);
  };

  // 2. Launch Native WebXR Immersive AR Session
  const startWebXRSession = async () => {
    if (!('xr' in navigator)) return;

    try {
      setIsLoadingModel(true);
      setLoadingProgress(0);
      setDownloadProgressStr('0%');
      setLoadError(null);
      rawLoadedModelRef.current = null;

      // Start camera feed for video background
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { ideal: 'environment' } }
          });
          cameraStreamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        }
      } catch (camErr) {
        console.warn('[WebXR AR] Camera stream note:', camErr);
      }

      // Request Immersive AR session with hit-test AND dom-overlay features
      const overlayElement = arContainerRef.current;
      const sessionInit = {
        requiredFeatures: ['hit-test', 'local-floor'],
        optionalFeatures: ['dom-overlay'],
      };
      if (overlayElement) {
        sessionInit.domOverlay = { root: overlayElement };
      }

      const session = await navigator.xr.requestSession('immersive-ar', sessionInit);
      xrSessionRef.current = session;
      setIsSessionActive(true);

      // Scene, Camera, Renderer Setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera();
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      rendererRef.current = renderer;

      // Mount WebGL Canvas to DOM element
      const mountEl = mountRef.current;
      if (mountEl) {
        mountEl.innerHTML = '';
        renderer.domElement.className = 'absolute inset-0 w-full h-full pointer-events-none z-10';
        mountEl.appendChild(renderer.domElement);
      }

      // Set WebXR Reference Space
      const localSpace = await session.requestReferenceSpace('local');
      localSpaceRef.current = localSpace;

      const viewerSpace = await session.requestReferenceSpace('viewer');
      const hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
      hitTestSourceRef.current = hitTestSource;

      // Reticle (Placement Indicator Ring)
      const reticleGeo = new THREE.RingGeometry(0.18, 0.22, 32).rotateX(-Math.PI / 2);
      const reticleMat = new THREE.MeshBasicMaterial({ color: 0xA17A16, side: THREE.DoubleSide });
      const reticle = new THREE.Mesh(reticleGeo, reticleMat);
      reticle.matrixAutoUpdate = false;
      reticle.visible = false;
      scene.add(reticle);
      reticleRef.current = reticle;

      // Ambient & Directional Lighting for Real-world Matching
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xfff5ea, 2.0);
      dirLight.position.set(2, 4, 2);
      scene.add(dirLight);

      // Group for placed 1:1 scale model
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);
      placedModelGroupRef.current = modelGroup;

      // Function to place 1:1 furniture model at reticle or in front of camera
      const placeFurnitureModel = () => {
        if (!rawLoadedModelRef.current || !placedModelGroupRef.current) return;

        try {
          if ('vibrate' in navigator) {
            navigator.vibrate(50);
          }
        } catch (e) { }

        const clone = rawLoadedModelRef.current.clone(true);

        clone.traverse((child) => {
          if (child.isMesh) {
            child.visible = true;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        while (placedModelGroupRef.current.children.length > 0) {
          placedModelGroupRef.current.remove(placedModelGroupRef.current.children[0]);
        }

        if (reticleRef.current && reticleRef.current.visible) {
          placedModelGroupRef.current.position.setFromMatrixPosition(reticleRef.current.matrix);
          placedModelGroupRef.current.rotation.setFromRotationMatrix(reticleRef.current.matrix);
          clone.position.set(0, 0, 0);
          clone.rotation.set(0, 0, 0);
        } else {
          const dir = new THREE.Vector3();
          camera.getWorldDirection(dir);
          dir.y = 0;
          dir.normalize();

          const targetPos = camera.position.clone().add(dir.multiplyScalar(2.2));
          targetPos.y = -0.3; // Center vertically on screen floor area
          placedModelGroupRef.current.position.copy(targetPos);
          clone.position.set(0, 0, 0);
          clone.rotation.set(0, 0, 0);
        }

        placedModelGroupRef.current.add(clone);
        setIsModelPlaced(true);
        triggerPlacedNotification();
      };

      // Load Product GLB/GLTF model
      const rawUrl = product?.model3D?.url || product?.modelUrl || product?.model3DUrl || product?.url || '/uploads/models/sample_chair.gltf';
      const modelUrl = rawUrl.startsWith('http') ? rawUrl : `${window.location.origin}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;
      const loader = new GLTFLoader();
      loader.setRequestHeader({
        'bypass-tunnel-reminder': 'true',
        'ngrok-skip-browser-warning': 'true'
      });

      loader.load(
        modelUrl,
        (gltf) => {
          try {
            const loadedScene = gltf.scene;

            const wrapperGroup = new THREE.Group();

            const box = new THREE.Box3().setFromObject(loadedScene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            loadedScene.position.set(-center.x, -box.min.y, -center.z);

            // Auto-orient front-facing if exported along side axis
            if (size.x > size.z * 1.2) {
              loadedScene.rotation.y = Math.PI / 2;
            }

            wrapperGroup.add(loadedScene);

            const { scale } = arService.calculate1To1ScaleFactor(wrapperGroup, metricDims);
            const compactBaseScale = scale * 0.30; // Clean 30% base scale factor matching image
            wrapperGroup.scale.setScalar(compactBaseScale);

            rawLoadedModelRef.current = wrapperGroup;
            setLoadError(null);

            // Auto-place model on screen immediately as soon as loaded!
            setTimeout(() => {
              placeFurnitureModel();
            }, 50);
          } catch (err) {
            console.error('[WebXR AR] Model post-process error:', err);
            setLoadError('Failed to process 3D model: ' + err.message);
          } finally {
            setIsLoadingModel(false);
          }
        },
        (xhr) => {
          if (xhr.lengthComputable && xhr.total > 0) {
            const pct = Math.round((xhr.loaded / xhr.total) * 100);
            const loadedMB = (xhr.loaded / 1048576).toFixed(1);
            const totalMB = (xhr.total / 1048576).toFixed(1);
            setLoadingProgress(pct);
            setDownloadProgressStr(`${pct}% (${loadedMB} MB / ${totalMB} MB)`);
          } else if (xhr.loaded) {
            const loadedMB = (xhr.loaded / 1048576).toFixed(1);
            setDownloadProgressStr(`${loadedMB} MB downloaded`);
          }
        },
        (err) => {
          console.error('[WebXR AR] Failed to load GLB file from server:', err);
          setLoadError(`Unable to download 3D GLB asset. Please check network connection.`);
          setIsLoadingModel(false);
        }
      );

      // WebXR Session End Event
      session.addEventListener('end', () => {
        if (placedModelGroupRef.current) {
          while (placedModelGroupRef.current.children.length > 0) {
            placedModelGroupRef.current.remove(placedModelGroupRef.current.children[0]);
          }
        }
        if (mountRef.current) {
          mountRef.current.innerHTML = '';
        }
        setIsSessionActive(false);
        setIsModelPlaced(false);
        xrSessionRef.current = null;
        if (cameraStreamRef.current) {
          cameraStreamRef.current.getTracks().forEach(t => t.stop());
          cameraStreamRef.current = null;
        }
        if (rendererRef.current) {
          rendererRef.current.setAnimationLoop(null);
        }
      });

      // Handle WebXR Touch Select Event
      session.addEventListener('select', placeFurnitureModel);

      // Render Loop
      renderer.setAnimationLoop((timestamp, frame) => {
        if (frame) {
          const hitTestResults = frame.getHitTestResults(hitTestSourceRef.current);
          if (hitTestResults.length > 0) {
            const hit = hitTestResults[0];
            const pose = hit.getPose(localSpaceRef.current);
            if (pose && reticleRef.current) {
              reticleRef.current.visible = true;
              reticleRef.current.matrix.fromArray(pose.transform.matrix);
            }
          } else if (reticleRef.current) {
            reticleRef.current.visible = false;
          }
        }
        renderer.render(scene, camera);
      });

    } catch (err) {
      console.error('[WebXR AR Error]', err);
      setIsLoadingModel(false);
      setLoadError(err.message || 'Unable to initialize WebXR camera overlay.');
    }
  };

  // End AR Session & Complete Teardown
  const exitWebXRSession = () => {
    if (placedModelGroupRef.current) {
      while (placedModelGroupRef.current.children.length > 0) {
        placedModelGroupRef.current.remove(placedModelGroupRef.current.children[0]);
      }
    }
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
    }
    if (xrSessionRef.current) {
      xrSessionRef.current.end().catch(() => { });
      xrSessionRef.current = null;
    }
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach(t => t.stop());
      cameraStreamRef.current = null;
    }
    if (rendererRef.current) {
      rendererRef.current.setAnimationLoop(null);
    }
    setIsSessionActive(false);
    setIsModelPlaced(false);
    setIsSimulatedAR(false);
    setShowPlacedBadge(false);
  };

  const handleCloseModal = () => {
    exitWebXRSession();
    onClose();
  };

  // Rotate Placed Model manually by +45° or -45° around center pivot
  const handleRotateModel = (angleDegrees = 45) => {
    if (placedModelGroupRef.current) {
      placedModelGroupRef.current.rotation.y += THREE.MathUtils.degToRad(angleDegrees);
    }
  };

  // Rotate Placed Model Sideways (X-axis roll) from Portrait to Landscape View (+90° or -90°)
  const handleSidewaysRotate = (angleDegrees = 90) => {
    if (placedModelGroupRef.current) {
      placedModelGroupRef.current.rotation.x += THREE.MathUtils.degToRad(angleDegrees);
    }
  };

  // Adjust Furniture Scaling Factor (+10% or -10%) with 30% minimum floor limit
  const handleScaleChange = (deltaPercent) => {
    setCustomScaleFactor(prev => {
      if (deltaPercent < 0 && prev <= 30) return 30;
      const nextPercent = Math.max(30, Math.min(prev + deltaPercent, 250));
      const scaleMultiplier = (nextPercent / 30); // 30% base scale = 1.0 multiplier
      if (placedModelGroupRef.current) {
        placedModelGroupRef.current.scale.setScalar(scaleMultiplier);
      }
      return nextPercent;
    });
  };

  // Reset Furniture Scale to default 30% scale
  const handleResetScale = () => {
    setCustomScaleFactor(30);
    if (placedModelGroupRef.current) {
      placedModelGroupRef.current.scale.setScalar(1.0);
    }
  };

  // Reset Placed Model
  const handleResetPlacement = () => {
    if (placedModelGroupRef.current) {
      while (placedModelGroupRef.current.children.length > 0) {
        placedModelGroupRef.current.remove(placedModelGroupRef.current.children[0]);
      }
    }
    setIsModelPlaced(false);
  };

  // Direct 2D Screen Dragging (Left/Right moves X, Up/Down moves Y on screen)
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    dragStartRef.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current || !placedModelGroupRef.current) return;

    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    const dx = clientX - dragStartRef.current.x;
    const dy = clientY - dragStartRef.current.y;
    dragStartRef.current = { x: clientX, y: clientY };

    // Move model smoothly along screen X (left/right) and Y (up/down)
    const moveSensitivity = 0.004;
    placedModelGroupRef.current.position.x += dx * moveSensitivity;
    placedModelGroupRef.current.position.y -= dy * moveSensitivity;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Manual placement trigger helper for DOM tap
  const handleViewportTap = (e) => {
    if (!rawLoadedModelRef.current || !placedModelGroupRef.current) return;
    placeFurnitureModel();
  };

  if (!isOpen || !product) return null;

  return (
    <div
      ref={arContainerRef}
      className={`fixed inset-0 z-50 flex flex-col justify-between overflow-hidden animate-fadeIn select-none ${
        isSessionActive ? 'bg-transparent' : 'bg-black/90 backdrop-blur-md'
      }`}
    >
      {/* Background Live Camera Video Feed Stream */}
      {isSessionActive && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      )}

      {/* Three.js 3D WebGL Canvas Mount Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />

      {/* CASE A: Native WebXR Session Active (Overlaid on Camera Feed) */}
      {isSessionActive && (
        <div className="relative w-full h-full flex flex-col justify-between p-4 pointer-events-none z-20">

          {/* Top Safe-Area Header */}
          <div className="pt-safe flex items-center justify-between w-full pointer-events-auto z-20">
            <div className="bg-black/75 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-white flex items-center space-x-3 shadow-lg">
              <Smartphone className="w-5 h-5 text-[#E9D3A4] animate-pulse" />
              <div>
                <h4 className="text-xs font-mono font-bold truncate max-w-[180px] sm:max-w-xs text-[#E9D3A4]">{product.title}</h4>
                <p className="text-[10px] text-gray-300 font-mono">1:1 Physical AR Scale Active</p>
              </div>
            </div>

            <button
              onClick={exitWebXRSession}
              className="w-11 h-11 bg-rose-600/90 text-white rounded-2xl flex items-center justify-center shadow-xl border border-rose-400 active:scale-95 transition-all"
              title="Exit AR Session"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Placement Prompt & Interactive Floor Drag Viewport */}
          <div
            onClick={handleViewportTap}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="flex-1 w-full flex flex-col items-center justify-center text-center pointer-events-auto cursor-grab active:cursor-grabbing space-y-3 my-auto z-10 touch-none"
          >
            {isLoadingModel && (
              <div className="bg-black/80 backdrop-blur-md px-6 py-4 rounded-3xl border border-[#A17A16]/50 text-white flex flex-col items-center space-y-2 pointer-events-auto">
                <div className="w-8 h-8 border-3 border-white/20 border-t-[#E9D3A4] rounded-full animate-spin" />
                <span className="font-mono text-xs text-[#E9D3A4]">Loading 1:1 Scale Furniture Model... {downloadProgressStr || `${loadingProgress}%`}</span>
              </div>
            )}

            {!isLoadingModel && !isModelPlaced && (
              <div className="bg-black/70 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/20 text-white flex items-center space-x-2.5 shadow-2xl animate-pulse pointer-events-auto">
                <Maximize2 className="w-5 h-5 text-[#E9D3A4]" />
                <span className="text-xs font-mono font-bold text-[#E9D3A4]">
                  Point phone at floor & TAP or DRAG to place
                </span>
              </div>
            )}

            {!isLoadingModel && isModelPlaced && showPlacedBadge && (
              <div className="bg-emerald-950/95 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-500/60 text-emerald-200 flex items-center space-x-2 shadow-2xl animate-fadeIn pointer-events-auto">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-300">
                  ✓ Furniture Anchored (1:1 Physical Scale)
                </span>
              </div>
            )}
          </div>

          {/* Bottom Floating Safe-Area AR Controls */}
          <div className="pb-safe w-full flex flex-col items-center space-y-2.5 pointer-events-auto z-20">

            {/* Custom Scale Adjustment Bar */}
            <div className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20 text-white text-xs font-mono flex items-center justify-between w-full max-w-sm shadow-xl space-x-2">
              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">SCALE ADJ:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleScaleChange(-10)}
                  disabled={customScaleFactor <= 30}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${
                    customScaleFactor <= 30 ? 'bg-white/5 text-gray-600 cursor-not-allowed opacity-40' : 'bg-white/10 hover:bg-white/20 active:scale-90 text-white'
                  }`}
                  title="Decrease Furniture Scale (-10%)"
                >
                  -
                </button>
                <button
                  onClick={handleResetScale}
                  className="px-2.5 py-1 bg-[#A17A16]/30 text-[#E9D3A4] rounded-lg text-[10px] font-bold border border-[#E9D3A4]/40 hover:bg-[#A17A16]/50 transition-all"
                  title="Reset to Compact Base Scale (30%)"
                >
                  {customScaleFactor}% {customScaleFactor === 30 ? '(Base)' : ''}
                </button>
                <button
                  onClick={() => handleScaleChange(10)}
                  className="w-7 h-7 bg-white/10 hover:bg-white/20 active:scale-90 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all"
                  title="Increase Furniture Scale (+10%)"
                >
                  +
                </button>
              </div>
            </div>

            {/* 3D Yaw Rotation & Pitch Tilt Controls Row */}
            <div className="grid grid-cols-4 gap-1.5 w-full max-w-sm">
              <button
                onClick={() => handleRotateModel(-45)}
                className="bg-white/95 hover:bg-white text-gray-900 py-2.5 px-2 rounded-xl font-mono text-[10px] font-bold shadow-xl flex items-center justify-center space-x-1 active:scale-95 transition-all"
                title="Rotate Left (-45°)"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#A17A16] -scale-x-100" />
                <span>-45°</span>
              </button>

              <button
                onClick={() => handleRotateModel(45)}
                className="bg-white/95 hover:bg-white text-gray-900 py-2.5 px-2 rounded-xl font-mono text-[10px] font-bold shadow-xl flex items-center justify-center space-x-1 active:scale-95 transition-all"
                title="Rotate Right (+45°)"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#A17A16]" />
                <span>+45°</span>
              </button>

              <button
                onClick={() => handleSidewaysRotate(-45)}
                className="bg-gray-800/90 hover:bg-gray-700 text-white py-2.5 px-2 rounded-xl font-mono text-[10px] font-bold border border-white/20 shadow-xl flex items-center justify-center space-x-1 active:scale-95 transition-all"
                title="Rotate Sideways Counter-Clockwise (-45°)"
              >
                <span>SIDEWAYS ↺</span>
              </button>

              <button
                onClick={() => handleSidewaysRotate(45)}
                className="bg-gray-800/90 hover:bg-gray-700 text-white py-2.5 px-2 rounded-xl font-mono text-[10px] font-bold border border-white/20 shadow-xl flex items-center justify-center space-x-1 active:scale-95 transition-all"
                title="Rotate Sideways Clockwise (+45°)"
              >
                <span>SIDEWAYS ↻</span>
              </button>
            </div>

            {/* Switch to F8 Fit Validation Button */}
            <button
              onClick={() => {
                exitWebXRSession();
                onOpenFitValidation(product);
              }}
              className="w-full max-w-sm gold-gradient-btn py-3 px-4 rounded-2xl font-mono text-xs font-bold tracking-wider shadow-2xl flex items-center justify-center space-x-2 border border-[#E9D3A4]/60 active:scale-95 transition-all"
            >
              <Ruler className="w-4 h-4 text-gray-900" />
              <span>MEASURE & VALIDATE ROOM FIT</span>
            </button>
          </div>
        </div>
      )}

      {/* CASE B: WebXR Setup / Device Capability Check & Pre-session Landing Page */}
      {!isSessionActive && (
        <div className="max-w-lg w-full mx-auto my-auto p-6 sm:p-8 bg-[#1E232A] text-white rounded-3xl border border-[#A17A16]/40 shadow-2xl space-y-6 animate-fadeIn">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E9D3A4]/20 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#A17A16]/20 border border-[#E9D3A4]/40 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#E9D3A4]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#E9D3A4] uppercase tracking-wider block">WEBXR SPATIAL VISUALIZER</span>
                <h3 className="font-serif text-lg font-bold text-white">WebXR AR Camera Visualizer</h3>
              </div>
            </div>

            <button
              onClick={handleCloseModal}
              className="p-2 text-gray-400 hover:text-white rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Summary Card */}
          <div className="bg-[#14181D] p-4 rounded-2xl border border-white/10 flex items-center space-x-4">
            <img
              src={product.images?.[0] || 'https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80'}
              alt={product.title}
              className="w-16 h-16 object-cover rounded-xl border border-white/10"
            />
            <div className="flex-1 min-w-0 space-y-1">
              <h4 className="font-serif text-sm font-bold text-white truncate">{product.title}</h4>
              <p className="text-xs font-mono text-[#E9D3A4]">
                1:1 Scale: {metricDims.widthCm}cm × {metricDims.depthCm}cm × {metricDims.heightCm}cm
              </p>
              <span className="text-[10px] font-mono text-gray-400 block truncate">GLB Path: {product.model3D?.url || '/uploads/models/sample_chair.gltf'}</span>
            </div>
          </div>

          {/* Status Message / Hardware Capabilities */}
          {xrSupportStatus.checking ? (
            <div className="p-4 bg-gray-800/60 rounded-2xl border border-white/10 flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-[#E9D3A4] rounded-full animate-spin" />
              <span className="text-xs font-mono text-gray-300">Checking device camera & WebXR capability...</span>
            </div>
          ) : xrSupportStatus.supported ? (
            <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/40 text-emerald-300 text-xs font-mono space-y-1">
              <div className="flex items-center space-x-2 font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>WebXR Immersive AR Hardware Ready!</span>
              </div>
              <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                Click below to launch the camera feed. You can point your phone at the floor to project this 1:1 scale furniture item into your room.
              </p>
            </div>
          ) : (
            <div className="p-4 bg-amber-950/60 rounded-2xl border border-amber-500/40 text-amber-300 text-xs font-mono space-y-2">
              <div className="flex items-center space-x-2 font-bold text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <span>WebXR AR Not Detected on current browser</span>
              </div>
              <p className="text-[11px] text-amber-200/80 leading-relaxed">
                {xrSupportStatus.reason}
              </p>
            </div>
          )}

          {/* Primary Launch Action Buttons */}
          <div className="space-y-3 pt-2">
            {xrSupportStatus.supported && (
              <button
                onClick={startWebXRSession}
                className="w-full gold-gradient-btn py-4 rounded-2xl font-mono text-sm font-bold tracking-wider shadow-xl flex items-center justify-center space-x-2 border border-[#E9D3A4]/60 active:scale-95 transition-all"
              >
                <Smartphone className="w-5 h-5 text-gray-900" />
                <span>LAUNCH WEBXR AR CAMERA OVERLAY</span>
              </button>
            )}

            {/* Fit Validation Tool Button */}
            <button
              onClick={() => {
                onClose();
                onOpenFitValidation(product);
              }}
              className="w-full bg-[#14181D] hover:bg-black text-[#E9D3A4] py-3.5 rounded-2xl font-mono text-xs font-bold border border-[#E9D3A4]/40 flex items-center justify-center space-x-2 transition-all"
            >
              <Ruler className="w-4 h-4 text-[#E9D3A4]" />
              <span>OPEN AR MEASUREMENT FIT TOOL</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
