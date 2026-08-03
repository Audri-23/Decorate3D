import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Viewer3DCanvas = ({
  product = null,
  geometryType = 'lounge_chair',
  selectedMaterial = 'tan',
  isWireframe = false,
  isAutoRotating = false,
  rotationSpeed = 0.8,
  zoomFactor = 4.5,
  elevationOffset = 0.0,
  presetAngle = 'front', // 'front', 'back', 'side', 'top'
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const modelGroupRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const interactiveMaterialsRef = useRef([]);

  // Material Tint Colors
  const materialColors = {
    tan: 0xffffff,       // Original full photo color balance
    forest: 0xc2dfcc,    // Sage Forest tint
    ebony: 0x999999,     // Onyx Monochrome tint
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfbf9f5); // Soft cream studio background
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.1 + elevationOffset, zoomFactor);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Three-Point Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    keyLight.position.set(4.5, 6.0, 4.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdce6f2, 1.1);
    fillLight.position.set(-4.5, 3.5, -3.5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffeedd, 0.8);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // Floor Shadow & Studio Grid
    const floorGeo = new THREE.PlaneGeometry(12, 12);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.95;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(8, 16, 0xe5dec9, 0xf0ebd9);
    grid.position.y = -0.95;
    scene.add(grid);

    // 5. Load Multi-Angle Photos (Front, Back, Side, Top)
    const frontUrl = product?.multiAngleImages?.front || product?.images?.[0] || 'https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80';
    const backUrl = product?.multiAngleImages?.back || product?.images?.[1] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80';
    const sideUrl = product?.multiAngleImages?.side || product?.images?.[2] || 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80';
    const topUrl = product?.multiAngleImages?.top || product?.images?.[0] || 'https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80';

    const textureLoader = new THREE.TextureLoader();

    const frontTex = textureLoader.load(frontUrl, (t) => { t.colorSpace = THREE.SRGBColorSpace; });
    const backTex = textureLoader.load(backUrl, (t) => { t.colorSpace = THREE.SRGBColorSpace; });
    const sideTex = textureLoader.load(sideUrl, (t) => { t.colorSpace = THREE.SRGBColorSpace; });
    const topTex = textureLoader.load(topUrl, (t) => { t.colorSpace = THREE.SRGBColorSpace; });

    // Casing / Frame Material (Rich Dark Solid Walnut Wood)
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3b2212, roughness: 0.28, metalness: 0.05, wireframe: isWireframe });
    // Brass Ferrules & Accents Material
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xc89d44, roughness: 0.2, metalness: 0.85, wireframe: isWireframe });

    const frontMat = new THREE.MeshStandardMaterial({ map: frontTex, roughness: 0.35, metalness: 0.05, wireframe: isWireframe });
    const backMat = new THREE.MeshStandardMaterial({ map: backTex, roughness: 0.35, metalness: 0.05, wireframe: isWireframe });
    const sideMat = new THREE.MeshStandardMaterial({ map: sideTex, roughness: 0.35, metalness: 0.05, wireframe: isWireframe });
    const topMat = new THREE.MeshStandardMaterial({ map: topTex, roughness: 0.35, metalness: 0.05, wireframe: isWireframe });

    interactiveMaterialsRef.current = [frontMat, backMat, sideMat, topMat, woodMat, brassMat];

    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;

    const cat = (product?.category || '').toLowerCase();
    const type = product?.model3D?.geometryType || (cat.includes('sofa') ? 'sofa' : (cat.includes('table') ? 'table' : 'lounge_chair'));

    // --- A. LOUNGE CHAIR / ARMCHAIR VOLUMETRIC 3D MESH ---
    if (type === 'lounge_chair') {
      // 1. Seat Cushion (Top texture on top, Front texture on front)
      const seatGeo = new THREE.BoxGeometry(1.6, 0.32, 1.4);
      const seatMaterials = [sideMat, sideMat, topMat, woodMat, frontMat, backMat];
      const seatMesh = new THREE.Mesh(seatGeo, seatMaterials);
      seatMesh.position.set(0, -0.05, 0.05);
      seatMesh.castShadow = true;
      seatMesh.receiveShadow = true;
      modelGroup.add(seatMesh);

      // 2. Ergonomic Tufted Backrest (Front texture on front, REAL BACK TEXTURE on rear face!)
      const backGeo = new THREE.BoxGeometry(1.6, 1.35, 0.25);
      const backMaterials = [sideMat, sideMat, woodMat, woodMat, frontMat, backMat];
      const backMesh = new THREE.Mesh(backGeo, backMaterials);
      backMesh.position.set(0, 0.62, -0.52);
      backMesh.rotation.x = THREE.MathUtils.degToRad(-12);
      backMesh.castShadow = true;
      backMesh.receiveShadow = true;
      modelGroup.add(backMesh);

      // 3. Backrest Brass Buttons (8 3D tufts)
      const buttonPositions = [
        [-0.48, 0.88, -0.38], [0, 0.88, -0.38], [0.48, 0.88, -0.38],
        [-0.48, 0.52, -0.46], [0, 0.52, -0.46], [0.48, 0.52, -0.46],
        [-0.48, 0.20, -0.54], [0.48, 0.20, -0.54]
      ];
      buttonPositions.forEach(([bx, by, bz]) => {
        const bGeo = new THREE.SphereGeometry(0.038, 16, 16);
        const bMesh = new THREE.Mesh(bGeo, brassMat);
        bMesh.position.set(bx, by, bz);
        modelGroup.add(bMesh);
      });

      // 4. Sculpted Walnut Armrests & 4 Angled Support Legs
      const createArmFrame = (isRight) => {
        const armGroup = new THREE.Group();
        const posX = isRight ? 0.84 : -0.84;

        // Top Armrest Rail
        const railGeo = new THREE.BoxGeometry(0.12, 0.07, 1.45);
        const rail = new THREE.Mesh(railGeo, woodMat);
        rail.position.set(posX, 0.28, 0.0);
        rail.castShadow = true;
        armGroup.add(rail);

        // Front Leg
        const legFGeo = new THREE.CylinderGeometry(0.045, 0.03, 1.05, 16);
        const legF = new THREE.Mesh(legFGeo, woodMat);
        legF.position.set(posX, -0.42, 0.58);
        legF.rotation.z = THREE.MathUtils.degToRad(isRight ? -8 : 8);
        legF.castShadow = true;
        armGroup.add(legF);

        // Rear Leg
        const legRGeo = new THREE.CylinderGeometry(0.045, 0.028, 1.15, 16);
        const legR = new THREE.Mesh(legRGeo, woodMat);
        legR.position.set(posX, -0.42, -0.58);
        legR.rotation.x = THREE.MathUtils.degToRad(-16);
        legR.rotation.z = THREE.MathUtils.degToRad(isRight ? -8 : 8);
        legR.castShadow = true;
        armGroup.add(legR);

        // Brass Leg Caps
        const capGeo = new THREE.CylinderGeometry(0.032, 0.028, 0.08, 16);
        const capF = new THREE.Mesh(capGeo, brassMat);
        capF.position.set(posX, -0.90, 0.62);
        armGroup.add(capF);

        const capR = new THREE.Mesh(capGeo, brassMat);
        capR.position.set(posX, -0.90, -0.72);
        armGroup.add(capR);

        return armGroup;
      };

      modelGroup.add(createArmFrame(false));
      modelGroup.add(createArmFrame(true));
    }
    // --- B. CHESTERFIELD SOFA VOLUMETRIC 3D MESH ---
    else if (type === 'sofa') {
      // 1. Wide Seat Cushion Platform
      const seatGeo = new THREE.BoxGeometry(2.5, 0.35, 1.3);
      const seatMaterials = [sideMat, sideMat, topMat, woodMat, frontMat, backMat];
      const seatMesh = new THREE.Mesh(seatGeo, seatMaterials);
      seatMesh.position.set(0, -0.05, 0.05);
      seatMesh.castShadow = true;
      modelGroup.add(seatMesh);

      // 2. Tufted Backrest (Front & Back view textures)
      const backGeo = new THREE.BoxGeometry(2.5, 1.1, 0.28);
      const backMaterials = [sideMat, sideMat, woodMat, woodMat, frontMat, backMat];
      const backMesh = new THREE.Mesh(backGeo, backMaterials);
      backMesh.position.set(0, 0.52, -0.5);
      backMesh.castShadow = true;
      modelGroup.add(backMesh);

      // 3. Rolled Side Armrests
      const createArm = (isRight) => {
        const armGeo = new THREE.BoxGeometry(0.28, 0.85, 1.45);
        const armMaterials = [sideMat, sideMat, topMat, woodMat, frontMat, backMat];
        const armMesh = new THREE.Mesh(armGeo, armMaterials);
        armMesh.position.set(isRight ? 1.35 : -1.35, 0.32, 0);
        armMesh.castShadow = true;
        return armMesh;
      };

      modelGroup.add(createArm(false));
      modelGroup.add(createArm(true));

      // 4. Turned Hardwood Legs
      [-1.1, 1.1].forEach((lx) => {
        [-0.5, 0.5].forEach((lz) => {
          const lGeo = new THREE.CylinderGeometry(0.05, 0.03, 0.45, 16);
          const lMesh = new THREE.Mesh(lGeo, woodMat);
          lMesh.position.set(lx, -0.42, lz);
          lMesh.castShadow = true;
          modelGroup.add(lMesh);
        });
      });
    }
    // --- C. LIVE-EDGE TABLE VOLUMETRIC 3D MESH ---
    else {
      // 1. Solid Table Slab Top (Top texture on top surface)
      const slabGeo = new THREE.BoxGeometry(2.3, 0.16, 1.25);
      const slabMaterials = [sideMat, sideMat, topMat, woodMat, frontMat, backMat];
      const slabMesh = new THREE.Mesh(slabGeo, slabMaterials);
      slabMesh.position.set(0, 0.25, 0);
      slabMesh.castShadow = true;
      modelGroup.add(slabMesh);

      // 2. Powder-Coated Steel Hairpin Legs
      [-0.95, 0.95].forEach((lx) => {
        [-0.48, 0.48].forEach((lz) => {
          const lGeo = new THREE.CylinderGeometry(0.035, 0.02, 0.95, 16);
          const lMesh = new THREE.Mesh(lGeo, woodMat);
          lMesh.position.set(lx, -0.30, lz);
          lMesh.rotation.z = lx > 0 ? -0.12 : 0.12;
          lMesh.castShadow = true;
          modelGroup.add(lMesh);
        });
      });
    }

    modelGroup.position.y = 0.1;
    scene.add(modelGroup);

    // 6. Interactive Mouse & Touch Drag Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging || !modelGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      modelGroupRef.current.rotation.y += deltaX * 0.01;
      modelGroupRef.current.rotation.x += deltaY * 0.005;
      modelGroupRef.current.rotation.x = Math.max(-0.4, Math.min(0.4, modelGroupRef.current.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !modelGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      modelGroupRef.current.rotation.y += deltaX * 0.01;
      modelGroupRef.current.rotation.x += deltaY * 0.005;
      modelGroupRef.current.rotation.x = Math.max(-0.4, Math.min(0.4, modelGroupRef.current.rotation.x));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('touchstart', handleTouchStart);
    domElement.addEventListener('touchmove', handleTouchMove);
    domElement.addEventListener('touchend', handleTouchEnd);

    // 7. Render Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isAutoRotating && modelGroupRef.current && !isDragging) {
        modelGroupRef.current.rotation.y += 0.006 * rotationSpeed;
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
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      domElement.removeEventListener('touchmove', handleTouchMove);
      domElement.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [product]);

  // Handle Preset Angle Controls ('front', 'back', 'side', 'top')
  useEffect(() => {
    if (!modelGroupRef.current) return;
    if (presetAngle === 'front') {
      modelGroupRef.current.rotation.set(0, 0, 0);
    } else if (presetAngle === 'back') {
      modelGroupRef.current.rotation.set(0, Math.PI, 0); // 180° rotation to view rear upholstery
    } else if (presetAngle === 'side') {
      modelGroupRef.current.rotation.set(0, Math.PI / 2, 0); // 90° rotation for side view
    } else if (presetAngle === 'top') {
      modelGroupRef.current.rotation.set(Math.PI / 4, 0, 0); // Angled top view
    }
  }, [presetAngle]);

  // Update dynamic camera parameters
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = zoomFactor;
      cameraRef.current.position.y = 1.1 + elevationOffset;
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, [zoomFactor, elevationOffset]);

  // Update material colors & wireframe
  useEffect(() => {
    const activeColor = materialColors[selectedMaterial] || materialColors.tan;
    interactiveMaterialsRef.current.forEach(mat => {
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
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
