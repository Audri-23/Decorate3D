import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Shared 3D Asset Loading, Normalization & Validation Service
 * Unified architectural service for loading, auto-scaling, auto-orienting, and positioning real GLB / GLTF 3D models.
 */
class ModelLoaderService {
  constructor() {
    this.loader = new GLTFLoader();
    this.cache = new Map();
  }

  /**
   * Validate if a file is a supported 3D model format (.glb or .gltf)
   * @param {File|string} fileOrFilename 
   * @returns {{ valid: boolean, error?: string, extension?: string }}
   */
  validate3DFile(fileOrFilename) {
    const filename = typeof fileOrFilename === 'string' ? fileOrFilename : fileOrFilename?.name || '';
    const ext = filename.split('.').pop().toLowerCase();

    if (ext === 'glb' || ext === 'gltf') {
      return { valid: true, extension: ext };
    }

    const unsupportedFormats = ['obj', 'fbx', 'max', '3ds', 'blend', 'zip', 'png', 'jpg', 'jpeg', 'pdf'];
    if (unsupportedFormats.includes(ext)) {
      return {
        valid: false,
        error: `Unsupported file format ".${ext}". The Room Planner supports .glb and .gltf 3D assets only.`
      };
    }

    return {
      valid: false,
      error: `Invalid 3D asset file. Please upload a valid .glb or .gltf file.`
    };
  }

  /**
   * Determine target real-world bounding dimension (in meters) based on category
   */
  getTargetDimensionsForCategory(category = '') {
    const catLower = (category || '').toLowerCase();

    if (catLower.includes('sofa') || catLower.includes('seating')) {
      return 2.0;
    }
    if (catLower.includes('chair') || catLower.includes('armchair')) {
      return 0.9;
    }
    if (catLower.includes('table') || catLower.includes('desk')) {
      return 1.4;
    }
    if (catLower.includes('bed')) {
      return 2.0;
    }
    if (catLower.includes('cabinet') || catLower.includes('storage') || catLower.includes('shelf')) {
      return 1.4;
    }
    if (catLower.includes('lamp') || catLower.includes('lighting')) {
      return 1.4;
    }
    if (catLower.includes('plant')) {
      return 1.0;
    }
    if (catLower.includes('art') || catLower.includes('mirror') || catLower.includes('frame')) {
      return 0.8;
    }
    if (catLower.includes('rug') || catLower.includes('carpet')) {
      return 2.4;
    }
    if (catLower.includes('door') || catLower.includes('window') || catLower.includes('opening')) {
      return 1.8;
    }

    return 1.2;
  }

  /**
   * Calculate automatic uniform normalization scale factor
   */
  calculateNormalizationScale(rawSize, category) {
    const rawMaxDim = Math.max(rawSize.x, rawSize.y, rawSize.z);

    if (rawMaxDim <= 0) return 1.0;

    const targetMaxDim = this.getTargetDimensionsForCategory(category);
    return targetMaxDim / rawMaxDim;
  }

  /**
   * Load a GLB/GLTF model from a URL
   * @param {string} url - Target URL of GLB/GLTF model
   * @param {function} onProgress - Progress callback (percentage)
   * @returns {Promise<{ scene: THREE.Group, boundingBox: THREE.Box3, size: THREE.Vector3, center: THREE.Vector3 }>}
   */
  loadGLTFModel(url, onProgress = null) {
    return new Promise((resolve, reject) => {
      if (!url) {
        return reject(new Error('Model URL is required.'));
      }

      this.loader.load(
        url,
        (gltf) => {
          const loadedScene = gltf.scene;
          const clonedScene = loadedScene.clone(true);

          const box = new THREE.Box3().setFromObject(clonedScene);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          clonedScene.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                child.material.needsUpdate = true;
              }
            }
          });

          resolve({
            scene: clonedScene,
            boundingBox: box,
            size: size,
            center: center,
            rawGltf: gltf
          });
        },
        (xhr) => {
          if (xhr.lengthComputable && onProgress) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            onProgress(percent);
          }
        },
        (error) => {
          console.error(`[ModelLoaderService Error] Failed to load 3D asset at "${url}":`, error);
          reject(new Error(`Unable to load 3D model from "${url}". The file may be missing, corrupted, or not valid GLTF.`));
        }
      );
    });
  }

  /**
   * Load, auto-orient front-faced, and normalize a GLB/GLTF model to realistic room dimensions
   */
  async loadAndNormalizeGLTFModel(url, category = '', roomDimensions = { width: 5, length: 6, height: 3 }, onProgress = null) {
    const loaded = await this.loadGLTFModel(url, onProgress);
    const rawScene = loaded.scene;
    let rawSize = loaded.size;

    const catLower = (category || '').toLowerCase();
    const isWallMounted = catLower.includes('art') || catLower.includes('frame') || catLower.includes('mirror') || catLower.includes('opening');

    // Auto-orient wall decors if exported sideways
    if (isWallMounted) {
      if (rawSize.x < rawSize.z && rawSize.x < rawSize.y) {
        rawScene.rotation.y = Math.PI / 2;
        rawScene.updateMatrixWorld(true);

        const newBox = new THREE.Box3().setFromObject(rawScene);
        rawSize = newBox.getSize(new THREE.Vector3());
      }
    }

    // 1. Calculate uniform normalization scale
    const normScale = this.calculateNormalizationScale(rawSize, category);

    // 2. Apply UNIFORM scaling to scene
    rawScene.scale.setScalar(normScale);

    // 3. Recalculate normalized bounding box
    const normBox = new THREE.Box3().setFromObject(rawScene);
    const normSize = normBox.getSize(new THREE.Vector3());

    // 4. Align lowest Y point to floor Y = 0
    this.alignModelToFloor(rawScene);

    return {
      scene: rawScene,
      rawSize: { x: rawSize.x, y: rawSize.y, z: rawSize.z },
      normalizedSize: { width: normSize.x, depth: normSize.z, height: normSize.y },
      normalizationScale: normScale,
      boundingBox: normBox
    };
  }

  /**
   * Align model lowest Y coordinate to sit cleanly on floor plane (Y = 0)
   * @param {THREE.Group} modelGroup 
   */
  alignModelToFloor(modelGroup) {
    const box = new THREE.Box3().setFromObject(modelGroup);
    modelGroup.children.forEach(child => {
      child.position.y -= box.min.y;
    });
  }
}

export const modelLoaderService = new ModelLoaderService();
