/**
 * Model layer state store for 3D WebGL Canvas Viewer (Module 1 Feature 2)
 */
export const initialViewer3DState = {
  activeProductId: null,
  activeProduct: null,
  isInspectorOpen: false,
  isAutoRotating: true,
  rotationSpeed: 0.5,
  cameraDistance: 4.5,
  elevationOffset: 0.0,
  selectedMaterial: 'tan', // 'tan', 'forest', 'ebony'
  isWireframe: false,
  polygonCount: '124.2k',
  lodLevel: 'ULTRA',
  archivalSeries: 'Archival Series № 422',
  viewMode: '3d_inspector', // '3d_inspector', 'room_planner', 'ar_preview'
};

export class Viewer3DStateModel {
  constructor(initialState = initialViewer3DState) {
    this.state = { ...initialState };
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  updateState(updates) {
    this.state = { ...this.state, ...updates };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

export const globalViewer3DStore = new Viewer3DStateModel();
