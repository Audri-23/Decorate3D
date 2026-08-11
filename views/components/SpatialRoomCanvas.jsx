import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { modelLoaderService } from '../../services/3d/modelLoaderService.js';

export const SpatialRoomCanvas = ({
  roomDimensions = { width: 5.0, length: 6.0, height: 3.0 },
  wallCustomization = { paintColor: '#EAE6E1', wallMaterial: 'plaster' },
  floorCustomization = { floorMaterial: 'hardwood_oak', tintColor: '#C29B72' },
  placedItems = [],
  openings = [],
  selectedItemId = null,
  viewMode = '3d', // '3d' | '2d' | 'walkthrough'
  isPresentationMode = false,
  snapToGrid = true,
  onSelectItem = null,
  onItemPositionChange = null,
  onItemTransformChange = null,
  onClearanceReport = null,
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);

  // Mesh & Architectural Object References
  const floorMeshRef = useRef(null);
  const northWallRef = useRef(null);
  const westWallRef = useRef(null);
  const eastWallRef = useRef(null);
  const gridGroupRef = useRef(null);

  const itemGroupsRef = useRef(new Map());
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  // Interactive Mouse Dragging State
  const dragStateRef = useRef({
    isDragging: false,
    itemId: null,
    placementType: 'FLOOR',
    activeWall: 'NORTH', // 'NORTH' | 'WEST' | 'EAST'
    plane: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
    offset: new THREE.Vector3()
  });

  // Walkthrough Movement State
  const walkthroughKeysRef = useRef({ forward: false, backward: false, left: false, right: false });

  // Procedural PBR Floor Texture Generator
  const createFloorTexture = (matType, width, length) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (matType === 'marble_white') {
      ctx.fillStyle = '#F4F4F6';
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.strokeStyle = 'rgba(180, 180, 190, 0.25)';
      ctx.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 1024, 0);
        ctx.bezierCurveTo(Math.random() * 1024, 300, Math.random() * 1024, 700, Math.random() * 1024, 1024);
        ctx.stroke();
      }
    } else if (matType === 'ceramic_tile') {
      ctx.fillStyle = '#DCD8D0';
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.strokeStyle = '#99948B';
      ctx.lineWidth = 6;
      for (let x = 0; x <= 1024; x += 128) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1024); ctx.stroke();
      }
      for (let y = 0; y <= 1024; y += 128) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
      }
    } else if (matType === 'carpet_neutral') {
      ctx.fillStyle = '#C8BEB2';
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.fillStyle = 'rgba(0,0,0,0.04)';
      for (let i = 0; i < 8000; i++) {
        ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 2);
      }
    } else {
      ctx.fillStyle = matType === 'walnut' ? '#4A3423' : '#C29B72';
      ctx.fillRect(0, 0, 1024, 1024);
      ctx.strokeStyle = matType === 'walnut' ? '#312114' : '#8A6743';
      ctx.lineWidth = 3;
      for (let y = 0; y < 1024; y += 64) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
        const offset = (y / 64 % 2 === 0) ? 0 : 128;
        for (let x = offset; x < 1024; x += 256) {
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 64); ctx.stroke();
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(width / 2, length / 2);
    return texture;
  };

  // Helper to create exact rectangular floor grid
  const createRectangularGrid = (width, length) => {
    const group = new THREE.Group();
    const halfW = width / 2;
    const halfL = length / 2;

    const matMain = new THREE.LineBasicMaterial({ color: 0xE9D3A4, transparent: true, opacity: 0.6 });
    const matSub = new THREE.LineBasicMaterial({ color: 0x3B4654, transparent: true, opacity: 0.4 });

    // Grid lines along X
    for (let x = -halfW; x <= halfW + 0.001; x += 0.5) {
      const isMajor = Math.abs(Math.round(x) - x) < 0.01;
      const points = [new THREE.Vector3(x, 0.003, -halfL), new THREE.Vector3(x, 0.003, halfL)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, isMajor ? matMain : matSub);
      group.add(line);
    }

    // Grid lines along Z
    for (let z = -halfL; z <= halfL + 0.001; z += 0.5) {
      const isMajor = Math.abs(Math.round(z) - z) < 0.01;
      const points = [new THREE.Vector3(-halfW, 0.003, z), new THREE.Vector3(halfW, 0.003, z)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, isMajor ? matMain : matSub);
      group.add(line);
    }

    return group;
  };

  // Helper to build 3D Frame Mesh for Photo Frame Wall Decorations
  const createPhotoFrame3DMesh = (customImageUrl = null) => {
    const group = new THREE.Group();
    const frameGeo = new THREE.BoxGeometry(0.8, 1.0, 0.05);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x2A1D15, roughness: 0.5 });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.castShadow = true;
    group.add(frameMesh);

    const canvasGeo = new THREE.PlaneGeometry(0.7, 0.9);
    let canvasMat;

    if (customImageUrl) {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(customImageUrl);
      canvasMat = new THREE.MeshBasicMaterial({ map: texture });
    } else {
      canvasMat = new THREE.MeshStandardMaterial({ color: 0xF5F0E6, roughness: 0.9 });
    }

    const canvasMesh = new THREE.Mesh(canvasGeo, canvasMat);
    canvasMesh.position.z = 0.026;
    group.add(canvasMesh);

    return group;
  };

  // Helper to check 3D bounding box collision overlaps (SEPARATING FLOOR VS WALL ITEMS)
  const checkFurnitureCollisions = (selectedId, selectedGroup, allGroupsMap) => {
    if (!selectedGroup) return { isOverlapping: false, overlappingTitles: [] };

    const selectedItemData = selectedGroup.userData?.itemData || {};
    const selectedCatLower = (selectedItemData.category || '').toLowerCase();
    const selectedPlacement = selectedItemData.placementType === 'WALL' ||
      selectedCatLower.includes('art') || selectedCatLower.includes('frame') || selectedCatLower.includes('mirror') || selectedCatLower.includes('opening')
      ? 'WALL' : 'FLOOR';

    const selectedBox = new THREE.Box3().setFromObject(selectedGroup);
    const selectedSize = selectedBox.getSize(new THREE.Vector3());

    // Shrink collision box by 15% on X and Z to eliminate false alarm warnings for close spacing
    selectedBox.expandByVector(new THREE.Vector3(-selectedSize.x * 0.15, 0, -selectedSize.z * 0.15));

    const overlappingTitles = [];

    allGroupsMap.forEach((group, id) => {
      if (id === selectedId) return;

      const otherItemData = group.userData?.itemData || {};
      const otherCatLower = (otherItemData.category || '').toLowerCase();
      const otherPlacement = otherItemData.placementType === 'WALL' ||
        otherCatLower.includes('art') || otherCatLower.includes('frame') || otherCatLower.includes('mirror') || otherCatLower.includes('opening')
        ? 'WALL' : 'FLOOR';

      // SEPARATE CONFLICT CHECK: FLOOR items ONLY collide with FLOOR items; WALL items ONLY collide with WALL items!
      if (selectedPlacement !== otherPlacement) return;

      const otherBox = new THREE.Box3().setFromObject(group);
      const otherSize = otherBox.getSize(new THREE.Vector3());
      otherBox.expandByVector(new THREE.Vector3(-otherSize.x * 0.15, 0, -otherSize.z * 0.15));

      if (selectedBox.intersectsBox(otherBox)) {
        const title = otherItemData?.title || 'Furniture Item';
        if (!overlappingTitles.includes(title)) {
          overlappingTitles.push(title);
        }
      }
    });

    return {
      isOverlapping: overlappingTitles.length > 0,
      overlappingTitles
    };
  };

  // Helper to render tight, non-cluttering selection indicator ring directly under object base
  const attachSelectionIndicatorRing = (itemGroup, normSize, userScaleMultiplier) => {
    const existingRing = itemGroup.getObjectByName('selection_ring');
    if (existingRing) itemGroup.remove(existingRing);

    // Tight, subtle selection ring radius (38% of base footprint)
    const baseW = (normSize?.width || 1.0) * userScaleMultiplier;
    const baseD = (normSize?.depth || 1.0) * userScaleMultiplier;
    const ringRadius = Math.max(0.15, Math.min(baseW, baseD) * 0.38);

    const ringGeo = new THREE.RingGeometry(ringRadius, ringRadius + 0.02, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xE9D3A4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.name = 'selection_ring';
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.003;
    itemGroup.add(ringMesh);
  };

  // 1. Initial Scene Setup (runs ONCE on mount)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isPresentationMode ? 0x0A0D12 : 0x11161D);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(roomDimensions.width * 1.3, roomDimensions.height * 1.6, roomDimensions.length * 1.4);
    camera.lookAt(0, roomDimensions.height * 0.3, 0);
    cameraRef.current = camera;

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

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.5;
    controls.maxDistance = 35;
    controlsRef.current = controls;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(roomDimensions.width * 1.5, roomDimensions.height * 2.5, roomDimensions.length * 1.5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x99bbff, 0.7);
    fillLight.position.set(-roomDimensions.width, roomDimensions.height * 2, -roomDimensions.length);
    scene.add(fillLight);

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (viewMode === 'walkthrough' && cameraRef.current) {
        const speed = 0.08;
        const dir = new THREE.Vector3();
        cameraRef.current.getWorldDirection(dir);
        dir.y = 0; dir.normalize();

        const sideDir = new THREE.Vector3().crossVectors(cameraRef.current.up, dir).negate();

        if (walkthroughKeysRef.current.forward) cameraRef.current.position.addScaledVector(dir, speed);
        if (walkthroughKeysRef.current.backward) cameraRef.current.position.addScaledVector(dir, -speed);
        if (walkthroughKeysRef.current.left) cameraRef.current.position.addScaledVector(sideDir, -speed);
        if (walkthroughKeysRef.current.right) cameraRef.current.position.addScaledVector(sideDir, speed);

        const halfW = roomDimensions.width / 2;
        const halfL = roomDimensions.length / 2;
        cameraRef.current.position.x = Math.max(-halfW + 0.3, Math.min(halfW - 0.3, cameraRef.current.position.x));
        cameraRef.current.position.z = Math.max(-halfL + 0.3, Math.min(halfL - 0.3, cameraRef.current.position.z));
        cameraRef.current.position.y = 1.65;
      } else if (controlsRef.current) {
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
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (controlsRef.current) controlsRef.current.dispose();
      renderer.dispose();
    };
  }, []); // Run ONCE on mount so camera angle NEVER resets!

  // 2. View Mode Camera Adjustments (2D vs 3D vs Walkthrough)
  useEffect(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    if (viewMode === '2d') {
      cameraRef.current.position.set(0, Math.max(roomDimensions.width, roomDimensions.length) * 1.6, 0.001);
      cameraRef.current.lookAt(0, 0, 0);
      controlsRef.current.maxPolarAngle = 0.01;
    } else if (viewMode === 'walkthrough') {
      cameraRef.current.position.set(0, 1.65, 0);
      cameraRef.current.lookAt(0, 1.65, -2);
    } else {
      controlsRef.current.maxPolarAngle = Math.PI / 2 - 0.02;
    }
  }, [viewMode]);

  // 3. Dynamic Room Geometry & Finishes Update
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (floorMeshRef.current) scene.remove(floorMeshRef.current);
    if (northWallRef.current) scene.remove(northWallRef.current);
    if (westWallRef.current) scene.remove(westWallRef.current);
    if (eastWallRef.current) scene.remove(eastWallRef.current);
    if (gridGroupRef.current) scene.remove(gridGroupRef.current);

    // Floor Mesh
    const floorGeo = new THREE.PlaneGeometry(roomDimensions.width, roomDimensions.length);
    const floorMat = new THREE.MeshStandardMaterial({
      map: createFloorTexture(floorCustomization.floorMaterial, roomDimensions.width, roomDimensions.length),
      roughness: 0.4,
      metalness: 0.05
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = 0;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);
    floorMeshRef.current = floorMesh;

    // Rectangular Grid Lines
    if (!isPresentationMode && viewMode !== 'walkthrough') {
      const rectGrid = createRectangularGrid(roomDimensions.width, roomDimensions.length);
      scene.add(rectGrid);
      gridGroupRef.current = rectGrid;
    }

    // Walls (North, West, East)
    const wallColor = new THREE.Color(wallCustomization.paintColor || '#EAE6E1');
    const wallMat = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.8, metalness: 0.02, side: THREE.DoubleSide });

    const halfW = roomDimensions.width / 2;
    const halfL = roomDimensions.length / 2;
    const wallH = roomDimensions.height;
    const wallT = 0.15;

    // North Wall (Back)
    const northWall = new THREE.Mesh(new THREE.BoxGeometry(roomDimensions.width + wallT * 2, wallH, wallT), wallMat);
    northWall.position.set(0, wallH / 2, -halfL - wallT / 2);
    northWall.castShadow = true; northWall.receiveShadow = true;
    scene.add(northWall);
    northWallRef.current = northWall;

    // West Wall (Left)
    const westWall = new THREE.Mesh(new THREE.BoxGeometry(wallT, wallH, roomDimensions.length), wallMat);
    westWall.position.set(-halfW - wallT / 2, wallH / 2, 0);
    westWall.castShadow = true; westWall.receiveShadow = true;
    scene.add(westWall);
    westWallRef.current = westWall;

    // East Wall (Right)
    const eastWall = new THREE.Mesh(new THREE.BoxGeometry(wallT, wallH, roomDimensions.length), wallMat);
    eastWall.position.set(halfW + wallT / 2, wallH / 2, 0);
    eastWall.castShadow = true; eastWall.receiveShadow = true;
    scene.add(eastWall);
    eastWallRef.current = eastWall;

    scene.background = new THREE.Color(isPresentationMode ? 0x0A0D12 : 0x11161D);
  }, [roomDimensions.width, roomDimensions.length, roomDimensions.height, wallCustomization, floorCustomization, isPresentationMode, viewMode]);

  // Helper to extract scale multiplier factor reliably
  const getScaleVal = (s, axis) => {
    if (typeof s === 'number') return s;
    if (s && typeof s[axis] === 'number') return s[axis];
    return 1.0;
  };

  // 4. Load, Auto-Normalize & Sync REAL 3D GLB/GLTF Models
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    let isCancelled = false;
    const activeItemIds = new Set(placedItems.map((i) => i.id));

    // Remove groups for deleted items
    itemGroupsRef.current.forEach((group, id) => {
      if (!activeItemIds.has(id)) {
        scene.remove(group);
        itemGroupsRef.current.delete(id);
      }
    });

    placedItems.forEach((item) => {
      let itemGroup = itemGroupsRef.current.get(item.id);

      const catLower = (item.category || '').toLowerCase();
      const isWallItem = item.placementType === 'WALL' ||
        catLower.includes('art') || catLower.includes('frame') || catLower.includes('mirror') || catLower.includes('opening');

      const rotX = (item.rotation?.x || 0) * (Math.PI / 180);
      let rotY = (item.rotation?.y || item.rotationY || 0) * (Math.PI / 180);
      const rotZ = (item.rotation?.z || 0) * (Math.PI / 180);

      if (isWallItem) {
        const halfW = roomDimensions.width / 2;
        if (Math.abs(item.position.x - (-halfW)) < 0.3) rotY = Math.PI / 2;
        else if (Math.abs(item.position.x - halfW) < 0.3) rotY = -Math.PI / 2;
        else rotY = 0;
      }

      const userScaleMultiplier = getScaleVal(item.scale, 'x');

      // If group is ALREADY loaded in scene: UPDATE TRANSFORMS SYNCHRONOUSLY!
      if (itemGroup) {
        itemGroup.position.set(item.position.x, item.position.y || 0, item.position.z);
        itemGroup.rotation.set(rotX, rotY, rotZ);
        itemGroup.scale.setScalar(userScaleMultiplier);

        const isSelected = item.id === selectedItemId;
        if (isSelected && !isPresentationMode) {
          attachSelectionIndicatorRing(itemGroup, itemGroup.userData.normalizedSize, userScaleMultiplier);
        } else {
          const existingRing = itemGroup.getObjectByName('selection_ring');
          if (existingRing) itemGroup.remove(existingRing);
        }

        // Clearance & Real Collision Analytics Report
        if (isSelected && onClearanceReport && itemGroup.userData.normalizedSize) {
          const halfW = roomDimensions.width / 2;
          const halfL = roomDimensions.length / 2;
          const normSize = itemGroup.userData.normalizedSize;

          const finalW = (normSize.width * userScaleMultiplier).toFixed(2);
          const finalH = (normSize.height * userScaleMultiplier).toFixed(2);
          const finalD = (normSize.depth * userScaleMultiplier).toFixed(2);

          const distWallX = halfW - Math.abs(item.position.x) - finalW / 2;
          const distWallZ = halfL - Math.abs(item.position.z) - finalD / 2;
          const minClearance = Math.min(distWallX, distWallZ);

          const collision = checkFurnitureCollisions(item.id, itemGroup, itemGroupsRef.current);

          onClearanceReport({
            itemId: item.id,
            title: item.title,
            category: item.category,
            rawDimensions: itemGroup.userData.rawSize,
            normalizedDimensions: itemGroup.userData.normalizedSize,
            autoScaleFactor: itemGroup.userData.normalizationScale,
            userScaleMultiplier: userScaleMultiplier,
            dimensions: {
              width: finalW,
              depth: finalD,
              height: finalH
            },
            minClearance: minClearance.toFixed(2),
            intersectsWall: minClearance < -0.05,
            isOverlapping: collision.isOverlapping,
            overlappingTitles: collision.overlappingTitles,
            fitsInRoom: minClearance >= -0.05 && !collision.isOverlapping
          });
        }

        return;
      }

      // Group does not exist yet: Create Group and Load GLB asynchronously
      itemGroup = new THREE.Group();
      itemGroup.userData = { id: item.id, itemData: item };

      itemGroup.position.set(item.position.x, item.position.y || 0, item.position.z);
      itemGroup.rotation.set(rotX, rotY, rotZ);
      itemGroup.scale.setScalar(userScaleMultiplier);

      const isSelected = item.id === selectedItemId;
      scene.add(itemGroup);
      itemGroupsRef.current.set(item.id, itemGroup);

      if (item.isPhotoFrame) {
        const photoFrameMesh = createPhotoFrame3DMesh(item.customFrameImageUrl);
        itemGroup.add(photoFrameMesh);
        itemGroup.userData.normalizedSize = { width: 0.8, depth: 0.05, height: 1.0 };
        itemGroup.userData.rawSize = { x: 0.8, y: 1.0, z: 0.05 };
        itemGroup.userData.normalizationScale = 1.0;
        if (isSelected && !isPresentationMode) {
          attachSelectionIndicatorRing(itemGroup, itemGroup.userData.normalizedSize, userScaleMultiplier);
        }
      } else {
        modelLoaderService
          .loadAndNormalizeGLTFModel(item.modelUrl, item.category, roomDimensions)
          .then((normData) => {
            if (isCancelled) return;

            const modelScene = normData.scene;

            itemGroup.userData.rawSize = normData.rawSize;
            itemGroup.userData.normalizedSize = normData.normalizedSize;
            itemGroup.userData.normalizationScale = normData.normalizationScale;

            itemGroup.add(modelScene);

            if (isSelected && !isPresentationMode) {
              attachSelectionIndicatorRing(itemGroup, normData.normalizedSize, userScaleMultiplier);
            }

            if (isSelected && onClearanceReport) {
              const halfW = roomDimensions.width / 2;
              const halfL = roomDimensions.length / 2;
              const finalW = (normData.normalizedSize.width * userScaleMultiplier).toFixed(2);
              const finalH = (normData.normalizedSize.height * userScaleMultiplier).toFixed(2);
              const finalD = (normData.normalizedSize.depth * userScaleMultiplier).toFixed(2);

              const distWallX = halfW - Math.abs(item.position.x) - finalW / 2;
              const distWallZ = halfL - Math.abs(item.position.z) - finalD / 2;
              const minClearance = Math.min(distWallX, distWallZ);

              const collision = checkFurnitureCollisions(item.id, itemGroup, itemGroupsRef.current);

              onClearanceReport({
                itemId: item.id,
                title: item.title,
                category: item.category,
                rawDimensions: normData.rawSize,
                normalizedDimensions: normData.normalizedSize,
                autoScaleFactor: normData.normalizationScale,
                userScaleMultiplier: userScaleMultiplier,
                dimensions: {
                  width: finalW,
                  depth: finalD,
                  height: finalH
                },
                minClearance: minClearance.toFixed(2),
                intersectsWall: minClearance < -0.05,
                isOverlapping: collision.isOverlapping,
                overlappingTitles: collision.overlappingTitles,
                fitsInRoom: minClearance >= -0.05 && !collision.isOverlapping
              });
            }
          })
          .catch((err) => {
            if (isCancelled) return;
            console.error(`[Room Planner Error] Failed to load 3D GLB model for "${item.title}":`, err);

            const errorSpriteCanvas = document.createElement('canvas');
            errorSpriteCanvas.width = 256; errorSpriteCanvas.height = 64;
            const ctx = errorSpriteCanvas.getContext('2d');
            ctx.fillStyle = '#EF4444'; ctx.fillRect(0, 0, 256, 64);
            ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 16px monospace';
            ctx.fillText('3D Model Load Error', 20, 38);
            const texture = new THREE.CanvasTexture(errorSpriteCanvas);
            const spriteMat = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMat);
            sprite.position.y = 0.5;
            sprite.scale.set(1.5, 0.4, 1);
            itemGroup.add(sprite);
          });
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [placedItems, selectedItemId, roomDimensions.width, roomDimensions.length, isPresentationMode]);

  // Interactive Mouse Raycaster Drag & Drop Handler
  const handlePointerDown = (e) => {
    if (!mountRef.current || !cameraRef.current || viewMode === 'walkthrough') return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const groups = Array.from(itemGroupsRef.current.values());
    const intersects = raycasterRef.current.intersectObjects(groups, true);

    if (intersects.length > 0) {
      let rootGroup = intersects[0].object;
      while (rootGroup.parent && rootGroup.parent.type !== 'Scene' && !rootGroup.userData.id) {
        rootGroup = rootGroup.parent;
      }
      const itemId = rootGroup.userData?.id;
      if (itemId) {
        if (onSelectItem) onSelectItem(itemId);

        const itemData = rootGroup.userData?.itemData || {};
        const catLower = (itemData.category || '').toLowerCase();
        const isWallMounted = itemData.placementType === 'WALL' ||
          catLower.includes('art') || catLower.includes('frame') || catLower.includes('mirror') || catLower.includes('opening');

        if (isWallMounted) {
          const halfW = roomDimensions.width / 2;
          const halfL = roomDimensions.length / 2;

          let activeWall = 'NORTH';
          if (Math.abs(rootGroup.position.x - (-halfW)) < 0.3) activeWall = 'WEST';
          else if (Math.abs(rootGroup.position.x - halfW) < 0.3) activeWall = 'EAST';

          const dragPlane = new THREE.Plane(
            activeWall === 'NORTH' ? new THREE.Vector3(0, 0, 1) : (activeWall === 'WEST' ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(-1, 0, 0)),
            activeWall === 'NORTH' ? halfL : (activeWall === 'WEST' ? halfW : halfW)
          );

          const intersectionPoint = new THREE.Vector3();
          raycasterRef.current.ray.intersectPlane(dragPlane, intersectionPoint);

          dragStateRef.current = {
            isDragging: true,
            itemId: itemId,
            placementType: 'WALL',
            activeWall: activeWall,
            plane: dragPlane,
            offset: new THREE.Vector3().copy(rootGroup.position).sub(intersectionPoint || rootGroup.position)
          };
        } else {
          const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -rootGroup.position.y);
          const intersectionPoint = new THREE.Vector3();
          raycasterRef.current.ray.intersectPlane(floorPlane, intersectionPoint);

          if (intersectionPoint) {
            dragStateRef.current = {
              isDragging: true,
              itemId: itemId,
              placementType: 'FLOOR',
              activeWall: 'NORTH',
              plane: floorPlane,
              offset: new THREE.Vector3().copy(rootGroup.position).sub(intersectionPoint)
            };
          }
        }

        if (controlsRef.current) controlsRef.current.enabled = false;
      }
    } else {
      if (onSelectItem) onSelectItem(null);
    }
  };

  const handlePointerMove = (e) => {
    if (!dragStateRef.current.isDragging || !mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersectionPoint = new THREE.Vector3();

    const halfW = roomDimensions.width / 2 - 0.1;
    const halfL = roomDimensions.length / 2 - 0.1;
    const wallH = roomDimensions.height - 0.2;

    if (dragStateRef.current.placementType === 'WALL') {
      const currentWall = dragStateRef.current.activeWall;
      let targetPlane = dragStateRef.current.plane;

      if (currentWall === 'NORTH') targetPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), halfL);
      else if (currentWall === 'WEST') targetPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), halfW);
      else targetPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), halfW);

      if (raycasterRef.current.ray.intersectPlane(targetPlane, intersectionPoint)) {
        let newX = intersectionPoint.x + dragStateRef.current.offset.x;
        let newY = intersectionPoint.y + dragStateRef.current.offset.y;
        let newZ = intersectionPoint.z + dragStateRef.current.offset.z;

        newY = Math.max(0.2, Math.min(wallH, newY));

        let newRotY = 0;

        if (currentWall === 'NORTH') {
          if (newX > halfW) {
            dragStateRef.current.activeWall = 'EAST';
            newX = halfW - 0.05;
            newZ = -halfL + 0.3;
            newRotY = -90;
          } else if (newX < -halfW) {
            dragStateRef.current.activeWall = 'WEST';
            newX = -halfW + 0.05;
            newZ = -halfL + 0.3;
            newRotY = 90;
          } else {
            newZ = -halfL + 0.05;
            newRotY = 0;
          }
        } else if (currentWall === 'WEST') {
          if (newZ < -halfL) {
            dragStateRef.current.activeWall = 'NORTH';
            newX = -halfW + 0.3;
            newZ = -halfL + 0.05;
            newRotY = 0;
          } else {
            newX = -halfW + 0.05;
            newZ = Math.max(-halfL, Math.min(halfL, newZ));
            newRotY = 90;
          }
        } else if (currentWall === 'EAST') {
          if (newZ < -halfL) {
            dragStateRef.current.activeWall = 'NORTH';
            newX = halfW - 0.3;
            newZ = -halfL + 0.05;
            newRotY = 0;
          } else {
            newX = halfW - 0.05;
            newZ = Math.max(-halfL, Math.min(halfL, newZ));
            newRotY = -90;
          }
        }

        if (snapToGrid) {
          newX = Math.round(newX * 10) / 10;
          newY = Math.round(newY * 10) / 10;
          newZ = Math.round(newZ * 10) / 10;
        }

        if (onItemPositionChange) {
          onItemPositionChange(dragStateRef.current.itemId, { x: newX, y: newY, z: newZ }, { y: newRotY });
        }
      }
    } else {
      if (raycasterRef.current.ray.intersectPlane(dragStateRef.current.plane, intersectionPoint)) {
        let newX = intersectionPoint.x + dragStateRef.current.offset.x;
        let newZ = intersectionPoint.z + dragStateRef.current.offset.z;

        if (snapToGrid) {
          newX = Math.round(newX * 10) / 10;
          newZ = Math.round(newZ * 10) / 10;
        }

        newX = Math.max(-halfW, Math.min(halfW, newX));
        newZ = Math.max(-halfL, Math.min(halfL, newZ));

        if (onItemPositionChange) {
          onItemPositionChange(dragStateRef.current.itemId, { x: newX, y: 0, z: newZ });
        }
      }
    }
  };

  const handlePointerUp = () => {
    if (dragStateRef.current.isDragging) {
      dragStateRef.current.isDragging = false;
      if (controlsRef.current) controlsRef.current.enabled = true;
    }
  };

  // Keyboard Listeners for First-Person Walkthrough Movement (WASD)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'walkthrough') return;
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') walkthroughKeysRef.current.forward = true;
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') walkthroughKeysRef.current.backward = true;
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') walkthroughKeysRef.current.left = true;
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') walkthroughKeysRef.current.right = true;
    };

    const handleKeyUp = (e) => {
      if (viewMode !== 'walkthrough') return;
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') walkthroughKeysRef.current.forward = false;
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') walkthroughKeysRef.current.backward = false;
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') walkthroughKeysRef.current.left = false;
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') walkthroughKeysRef.current.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [viewMode]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    />
  );
};
