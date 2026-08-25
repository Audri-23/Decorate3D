import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function buildProceduralFurnitureModel(category = 'Chairs', geometryType = 'lounge_chair', colorHex = '#A17A16') {
  const group = new THREE.Group();
  const cat = (category || '').toLowerCase();
  const geo = (geometryType || '').toLowerCase();

  const isSofa = cat.includes('sofa') || cat.includes('couch') || cat.includes('divan') || geo.includes('sofa');
  const isTable = cat.includes('table') || cat.includes('desk') || cat.includes('dining') || geo.includes('table');

  const woodMat = new THREE.MeshStandardMaterial({
    color: 0x5c4033,
    roughness: 0.5,
    metalness: 0.1
  });

  const mainMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colorHex || 0xA17A16),
    roughness: 0.4,
    metalness: 0.1
  });

  const cushionMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colorHex || 0x8C5A2B),
    roughness: 0.6,
    metalness: 0.05
  });

  if (isSofa) {
    // === SOFA / DIVAN MODEL ===
    const baseGeo = new THREE.BoxGeometry(2.2, 0.25, 0.9);
    const baseMesh = new THREE.Mesh(baseGeo, woodMat);
    baseMesh.position.y = 0.25;
    baseMesh.castShadow = true; baseMesh.receiveShadow = true;
    group.add(baseMesh);

    const legGeo = new THREE.CylinderGeometry(0.04, 0.025, 0.25, 12);
    [[-1.0, 0.125, -0.38], [1.0, 0.125, -0.38], [-1.0, 0.125, 0.38], [1.0, 0.125, 0.38]].forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, woodMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      group.add(leg);
    });

    const seatGeo = new THREE.BoxGeometry(0.68, 0.22, 0.82);
    [-0.7, 0, 0.7].forEach(x => {
      const seat = new THREE.Mesh(seatGeo, cushionMat);
      seat.position.set(x, 0.48, 0.02);
      seat.castShadow = true; seat.receiveShadow = true;
      group.add(seat);
    });

    const backGeo = new THREE.BoxGeometry(2.18, 0.65, 0.22);
    const backMesh = new THREE.Mesh(backGeo, mainMat);
    backMesh.position.set(0, 0.82, -0.32);
    backMesh.castShadow = true; backMesh.receiveShadow = true;
    group.add(backMesh);

    const armGeo = new THREE.BoxGeometry(0.22, 0.55, 0.88);
    [-1.05, 1.05].forEach(x => {
      const arm = new THREE.Mesh(armGeo, mainMat);
      arm.position.set(x, 0.62, 0);
      arm.castShadow = true; arm.receiveShadow = true;
      group.add(arm);
    });
  } else if (isTable) {
    // === TABLE / DESK MODEL ===
    const topGeo = new THREE.BoxGeometry(1.6, 0.08, 0.9);
    const topMesh = new THREE.Mesh(topGeo, mainMat);
    topMesh.position.y = 0.76;
    topMesh.castShadow = true; topMesh.receiveShadow = true;
    group.add(topMesh);

    const legGeo = new THREE.CylinderGeometry(0.045, 0.03, 0.72, 16);
    [[-0.7, 0.36, -0.38], [0.7, 0.36, -0.38], [-0.7, 0.36, 0.38], [0.7, 0.36, 0.38]].forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, woodMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      group.add(leg);
    });
  } else {
    // === LOUNGE CHAIR MODEL ===
    const legGeo = new THREE.CylinderGeometry(0.035, 0.02, 0.38, 12);
    [[-0.32, 0.19, -0.32], [0.32, 0.19, -0.32], [-0.32, 0.19, 0.32], [0.32, 0.19, 0.32]].forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, woodMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      group.add(leg);
    });

    const seatGeo = new THREE.BoxGeometry(0.78, 0.18, 0.76);
    const seat = new THREE.Mesh(seatGeo, cushionMat);
    seat.position.set(0, 0.47, 0);
    seat.castShadow = true; seat.receiveShadow = true;
    group.add(seat);

    const backGeo = new THREE.BoxGeometry(0.76, 0.62, 0.16);
    const backMesh = new THREE.Mesh(backGeo, mainMat);
    backMesh.position.set(0, 0.82, -0.30);
    backMesh.rotation.x = -0.1;
    backMesh.castShadow = true; backMesh.receiveShadow = true;
    group.add(backMesh);

    const armGeo = new THREE.BoxGeometry(0.12, 0.35, 0.72);
    [-0.39, 0.39].forEach(x => {
      const arm = new THREE.Mesh(armGeo, woodMat);
      arm.position.set(x, 0.60, 0);
      arm.castShadow = true; arm.receiveShadow = true;
      group.add(arm);
    });
  }

  return group;
}

export const Viewer3DCanvas = ({
  modelUrl = null,
  product = null,
  selectedMaterial = 'tan',
  isWireframe = false,
  isAutoRotating = false,
  rotationSpeed = 0.8,
  zoomFactor = 4.5,
  elevationOffset = 0.0,
  presetAngle = 'front', // 'front', 'back', 'side', 'top'
  onLoading = null,
  onLoadSuccess = null,
  onLoadError = null,
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const modelGroupRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const loadedMaterialsRef = useRef([]);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Material Tint Colors
  const materialColors = {
    tan: 0xffffff,       // Original model textures
    forest: 0xc2dfcc,    // Sage Forest tint
    ebony: 0x999999,     // Onyx Monochrome tint
  };

  // Determine target GLB/GLTF URL
  const targetUrl = modelUrl || product?.model3D?.url || '/uploads/models/sample_chair.gltf';

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    setIsLoading(true);
    setLoadError(null);
    setLoadingProgress(10);
    if (onLoading) onLoading(10);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfbf9f5); // Neutral cream studio environment
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2 + elevationOffset, zoomFactor);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // Ground plane boundary constraint
    controls.minDistance = 1.5;
    controls.maxDistance = 10;
    controlsRef.current = controls;

    // 5. Studio Lighting Architecture
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    keyLight.position.set(4.5, 6.0, 4.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdce6f2, 1.2);
    fillLight.position.set(-4.5, 3.5, -3.5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffeedd, 0.9);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Ground Floor Shadow & Studio Grid
    const floorGeo = new THREE.PlaneGeometry(12, 12);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.22 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(8, 16, 0xe5dec9, 0xf0ebd9);
    grid.position.y = 0;
    scene.add(grid);

    // 6. Load REAL 3D GLB/GLTF Model File
    const loader = new GLTFLoader();
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;
    scene.add(modelGroup);

    loadedMaterialsRef.current = [];

    // Determine actual target model URL
    let actualUrl = modelUrl || product?.model3D?.url;
    if (!actualUrl || actualUrl.includes('/uploads/models/sample_chair')) {
      const cat = (product?.category || '').toLowerCase();
      if (cat.includes('sofa') || cat.includes('couch')) actualUrl = '/models/sample_sofa.gltf';
      else if (cat.includes('table') || cat.includes('desk')) actualUrl = '/models/sample_table.gltf';
      else actualUrl = '/models/sample_chair.gltf';
    }

    loader.load(
      actualUrl,
      (gltf) => {
        const loadedModel = gltf.scene;

        // Auto-center and normalize bounding box
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Center model origin
        loadedModel.position.x -= center.x;
        loadedModel.position.y -= box.min.y; // Sit model cleanly on ground plane
        loadedModel.position.z -= center.z;

        // Scale model to fit 1.8m standard studio bounding box if needed
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const targetScale = 1.8 / maxDim;
          loadedModel.scale.setScalar(targetScale);
        }

        // Traversal for shadow casting and material collection
        loadedModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material) {
              const mats = Array.isArray(child.material) ? child.material : [child.material];
              mats.forEach((m) => {
                if (!loadedMaterialsRef.current.includes(m)) {
                  loadedMaterialsRef.current.push(m);
                }
              });
            }
          }
        });

        modelGroup.add(loadedModel);
        setIsLoading(false);
        setLoadingProgress(100);
        if (onLoadSuccess) onLoadSuccess();
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(percent);
          if (onLoading) onLoading(percent);
        }
      },
      (err) => {
        console.warn('[3D Viewer Notice] Could not parse GLB URL directly:', actualUrl, err);
        const categoryName = product?.category || 'Chairs';
        const geometryType = product?.model3D?.geometryType || 'lounge_chair';
        const proceduralModel = buildProceduralFurnitureModel(categoryName, geometryType, '#A17A16');
        modelGroup.add(proceduralModel);
        setIsLoading(false);
        setLoadingProgress(100);
        if (onLoadSuccess) onLoadSuccess();
      }
    );

    // 7. Render Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.autoRotate = isAutoRotating;
        controlsRef.current.autoRotateSpeed = rotationSpeed * 2.0;
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (controlsRef.current) controlsRef.current.dispose();
      renderer.dispose();
    };
  }, [targetUrl]);

  // Handle Preset Angle Controls ('front', 'back', 'side', 'top')
  useEffect(() => {
    if (!modelGroupRef.current || !controlsRef.current) return;
    if (presetAngle === 'front') {
      modelGroupRef.current.rotation.set(0, 0, 0);
    } else if (presetAngle === 'back') {
      modelGroupRef.current.rotation.set(0, Math.PI, 0);
    } else if (presetAngle === 'side') {
      modelGroupRef.current.rotation.set(0, Math.PI / 2, 0);
    } else if (presetAngle === 'top') {
      modelGroupRef.current.rotation.set(Math.PI / 4, 0, 0);
    }
  }, [presetAngle]);

  // Update dynamic camera zoom & elevation
  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.z = zoomFactor;
      cameraRef.current.position.y = 1.2 + elevationOffset;
      controlsRef.current.update();
    }
  }, [zoomFactor, elevationOffset]);

  // Update material tint & wireframe mode
  useEffect(() => {
    const activeColor = materialColors[selectedMaterial] || materialColors.tan;
    loadedMaterialsRef.current.forEach((mat) => {
      if (mat) {
        if (mat.color && selectedMaterial !== 'tan') {
          mat.color.setHex(activeColor);
        }
        mat.wireframe = isWireframe;
        mat.needsUpdate = true;
      }
    });
  }, [selectedMaterial, isWireframe]);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      
      {/* Loading Spinner & Progress Bar Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#FBF9F5]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#E5DEC9] border-t-[#A17A16] rounded-full animate-spin" />
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-gray-900 text-base">Loading 3D Furniture Model...</h4>
            <p className="text-xs font-mono text-gray-500">{loadingProgress}% downloaded</p>
          </div>
          <div className="w-48 bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#A17A16] h-full transition-all duration-200" style={{ width: `${loadingProgress}%` }} />
          </div>
        </div>
      )}

      {/* Error Fallback Card Overlay */}
      {loadError && !isLoading && (
        <div className="absolute inset-0 bg-[#FBF9F5] z-20 flex flex-col items-center justify-center p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
            <span className="font-mono font-bold text-xl">!</span>
          </div>
          <h4 className="font-serif font-bold text-gray-900 text-base">3D Model Preview Unavailable</h4>
          <p className="text-xs text-gray-500 max-w-sm leading-relaxed">{loadError}</p>
        </div>
      )}

      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

