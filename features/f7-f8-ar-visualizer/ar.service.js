import * as THREE from 'three';

/**
 * AR & WebXR Utility Service for F7 (AR Camera Overlay) & F8 (AR Measurement Fit Tool)
 */
class ARService {
  /**
   * Check whether WebXR Immersive AR is supported by current browser/device
   * @returns {Promise<{ supported: boolean, reason?: string }>}
   */
  async checkWebXRSupport() {
    if (!window.isSecureContext && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return {
        supported: false,
        reason: 'WebXR requires a secure HTTPS connection. Please access over HTTPS or via a local HTTPS tunnel (e.g., npx localtunnel --port 5000).'
      };
    }

    if (!('xr' in navigator)) {
      return {
        supported: false,
        reason: 'WebXR Device API is not available on this browser. On mobile devices, please open in Google Chrome (Android) or a WebXR-enabled browser.'
      };
    }

    try {
      const isSupported = await navigator.xr.isSessionSupported('immersive-ar');
      if (isSupported) {
        return { supported: true };
      } else {
        return {
          supported: false,
          reason: 'Your device hardware does not currently support WebXR Immersive AR mode.'
        };
      }
    } catch (err) {
      return {
        supported: false,
        reason: `WebXR support check error: ${err.message}`
      };
    }
  }

  /**
   * Parse dimension strings (e.g. "32 in", "85 cm", "1.5 m") into meters
   * @param {string|number} dimVal 
   * @returns {number} Value in meters
   */
  parseDimensionToMeters(dimVal) {
    if (typeof dimVal === 'number') {
      return dimVal > 10 ? dimVal / 100 : dimVal;
    }

    if (!dimVal || typeof dimVal !== 'string') return 0.8; // Default 80cm fallback

    const str = dimVal.trim().toLowerCase();
    const num = parseFloat(str);

    if (isNaN(num)) return 0.8;

    if (str.includes('in') || str.includes('inch') || str.includes('"')) {
      return num * 0.0254; // Inches to meters
    }
    if (str.includes('cm')) {
      return num / 100; // Centimeters to meters
    }
    if (str.includes('m') && !str.includes('cm')) {
      return num; // Already meters
    }
    if (str.includes('ft') || str.includes('feet') || str.includes("'")) {
      return num * 0.3048; // Feet to meters
    }

    // Default heuristic: numbers > 10 assumed to be inches or cm (if > 50 -> cm, else inches)
    if (num > 50) return num / 100;
    if (num > 10) return num * 0.0254;
    return num;
  }

  /**
   * Convert product dimensions object to metric meters
   * @param {object} dimensions - { width: "32 in", depth: "35 in", height: "34 in" }
   * @returns {{ widthMeters: number, depthMeters: number, heightMeters: number }}
   */
  getProductMetricDimensions(dimensions = {}) {
    const widthMeters = this.parseDimensionToMeters(dimensions.width || '32 in');
    const depthMeters = this.parseDimensionToMeters(dimensions.depth || '35 in');
    const heightMeters = this.parseDimensionToMeters(dimensions.height || '34 in');

    return {
      widthMeters,
      depthMeters,
      heightMeters,
      widthCm: Math.round(widthMeters * 100),
      depthCm: Math.round(depthMeters * 100),
      heightCm: Math.round(heightMeters * 100),
      widthInches: Math.round(widthMeters / 0.0254),
      depthInches: Math.round(depthMeters / 0.0254),
      heightInches: Math.round(heightMeters / 0.0254)
    };
  }

  /**
   * Calculate uniform 1:1 real-world physical scale factor for a GLB 3D model
   * @param {THREE.Object3D} modelScene 
   * @param {object} metricDimensions - { widthMeters, depthMeters, heightMeters }
   * @returns {{ scale: number, realBounds: THREE.Vector3 }}
   */
  calculate1To1ScaleFactor(modelScene, metricDimensions) {
    const box = new THREE.Box3().setFromObject(modelScene);
    const size = box.getSize(new THREE.Vector3());

    const targetWidth = metricDimensions?.widthMeters || 0.85;
    const targetHeight = metricDimensions?.heightMeters || 0.85;
    const targetDepth = metricDimensions?.depthMeters || 0.85;

    let scaleFactor = 1.0;

    const maxModelFootprint = Math.max(size.x, size.z);
    const maxTargetFootprint = Math.max(targetWidth, targetDepth);

    if (maxModelFootprint > 0) {
      scaleFactor = maxTargetFootprint / maxModelFootprint;
    } else if (size.y > 0) {
      scaleFactor = targetHeight / size.y;
    }

    return {
      scale: scaleFactor,
      realBounds: new THREE.Vector3(size.x * scaleFactor, size.y * scaleFactor, size.z * scaleFactor)
    };
  }

  /**
   * Calculate clearance fit validation (F8)
   * @param {number} measuredClearanceMeters 
   * @param {number} furnitureWidthMeters 
   * @returns {{ fits: boolean, clearanceDeltaCm: number, status: string, color: string }}
   */
  calculateFitValidation(measuredClearanceMeters, furnitureWidthMeters) {
    const clearanceDeltaMeters = measuredClearanceMeters - furnitureWidthMeters;
    const clearanceDeltaCm = parseFloat((clearanceDeltaMeters * 100).toFixed(1));
    const fits = clearanceDeltaMeters >= 0;

    return {
      fits,
      status: fits ? 'FITS' : 'DOES NOT FIT (COLLISION)',
      clearanceDeltaCm,
      clearanceDeltaMeters: parseFloat(clearanceDeltaMeters.toFixed(3)),
      measuredCm: Math.round(measuredClearanceMeters * 100),
      furnitureCm: Math.round(furnitureWidthMeters * 100),
      colorHex: fits ? '#10B981' : '#EF4444', // Green vs Red
      bgColorClass: fits ? 'bg-emerald-500' : 'bg-rose-500',
      textColorClass: fits ? 'text-emerald-600' : 'text-rose-600',
      borderColorClass: fits ? 'border-emerald-500' : 'border-rose-500'
    };
  }
}

export const arService = new ARService();
