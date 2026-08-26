/**
 * Generic Real 3D Asset Library Registry for Decorate3D Interior Design System
 * 
 * Every asset references an authentic 3D GLB model file.
 * Placement types:
 * - FLOOR: Placed on room floor plane (Y = 0) with automatic bounding box floor alignment.
 * - WALL: Snapped flush against room walls with height adjustment and wall sliding.
 * - FREE: Free positioning in 3D space.
 */

export const ASSET_CATEGORIES = {
  SOFAS: 'Sofas & Seating',
  CHAIRS: 'Chairs & Armchairs',
  TABLES: 'Tables & Desks',
  BEDS: 'Beds & Bedroom',
  STORAGE: 'Cabinets & Shelves',
  LIGHTING: 'Lamps & Lighting',
  PLANTS: 'Indoor Plants',
  WALL_ART: 'Wall Art & Mirrors',
  PHOTO_FRAMES: 'Custom Photo Frames',
  RUGS: 'Rugs & Carpets',
  OPENINGS: 'Doors & Windows'
};

export const BUILTIN_3D_ASSET_LIBRARY = [
  // Authentic User-Uploaded Real GLB Models
  {
    id: 'asset_sofa_victorian_luxury',
    title: 'Vintage Divan',
    category: ASSET_CATEGORIES.SOFAS,
    placementType: 'FLOOR',
    modelUrl: '/uploads/models/victorian_lounge_sofa-1785965996790-766675802.glb',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80',
    dimensions: { width: 2.2, depth: 0.95, height: 0.88 },
    description: 'Authentic 12MB 3D GLB model of a classic Vintage Divan / Victorian tufted leather lounge sofa.'
  }
];
