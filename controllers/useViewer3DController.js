import { useState, useCallback, useEffect } from 'react';
import { globalViewer3DStore } from '../models/Viewer3DStore.js';

export const useViewer3DController = (initialProduct = null) => {
  const [product, setProduct] = useState(initialProduct);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.8);
  const [zoomFactor, setZoomFactor] = useState(4.5); // Camera Z distance (2.5 to 7.0)
  const [elevationOffset, setElevationOffset] = useState(0.0); // Y position offset (-1.0 to 1.5)
  const [selectedMaterial, setSelectedMaterial] = useState('tan'); // 'tan', 'forest', 'ebony'
  const [isWireframe, setIsWireframe] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(142); // degrees

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
      if (initialProduct.model3D?.defaultTexture) {
        setSelectedMaterial(initialProduct.model3D.defaultTexture);
      }
    }
  }, [initialProduct]);

  const openInspector = useCallback((prodToInspect = null) => {
    if (prodToInspect) {
      setProduct(prodToInspect);
    }
    setIsInspectorOpen(true);
    globalViewer3DStore.updateState({ isInspectorOpen: true });
  }, []);

  const closeInspector = useCallback(() => {
    setIsInspectorOpen(false);
    globalViewer3DStore.updateState({ isInspectorOpen: false });
  }, []);

  const toggleAutoRotate = useCallback(() => {
    setIsAutoRotating(prev => !prev);
  }, []);

  const rotateStep = useCallback((direction = 'cw') => {
    setRotationAngle(prev => {
      const delta = direction === 'cw' ? 15 : -15;
      return (prev + delta + 360) % 360;
    });
  }, []);

  const changeMaterial = useCallback((matId) => {
    if (matId === 'wireframe') {
      setIsWireframe(prev => !prev);
    } else {
      setSelectedMaterial(matId);
      setIsWireframe(false);
    }
  }, []);

  const resetView = useCallback(() => {
    setZoomFactor(4.5);
    setElevationOffset(0.0);
    setIsAutoRotating(false);
    setIsWireframe(false);
    setRotationAngle(142);
  }, []);

  return {
    product,
    isInspectorOpen,
    isAutoRotating,
    rotationSpeed,
    zoomFactor,
    elevationOffset,
    selectedMaterial,
    isWireframe,
    rotationAngle,
    openInspector,
    closeInspector,
    toggleAutoRotate,
    rotateStep,
    setZoomFactor,
    setElevationOffset,
    changeMaterial,
    resetView,
  };
};
