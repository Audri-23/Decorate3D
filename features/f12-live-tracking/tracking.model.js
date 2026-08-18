/**
 * F12 — Live Delivery Tracking — In-Memory Session Store
 *
 * NOTE: Uses OSRM (Open Source Routing Machine) for route calculation —
 * the same engine already used by F10 Shipping Quote.
 * To swap to Google Directions API, replace fetchOSRMRoute() in
 * tracking.controller.js with a Google Directions API call using
 * GOOGLE_MAPS_API_KEY from .env.
 */

// Map<jobId, TrackingSession>
export const trackingSessions = new Map();

/**
 * Create or reset a tracking session for a locked dispatch job.
 */
export function initTrackingSession(job) {
  const session = {
    jobId:          job._id,
    productTitle:   job.productTitle,
    productImage:   job.productImage  || '',
    category:       job.category      || 'Furniture',
    pickupAddress:  job.pickupAddress,
    pickupLat:      job.pickupLat,
    pickupLng:      job.pickupLng,
    dropoffAddress: job.dropoffAddress,
    dropoffLat:     job.dropoffLat,
    dropoffLng:     job.dropoffLng,
    sellerName:     job.sellerName    || 'Seller',
    buyerName:      job.buyerName     || 'Buyer',
    courierName:    job.lockedByCourierName || 'Courier',
    courierId:      job.lockedByCourierId   || null,
    // Route geometry from OSRM — array of [lng, lat] pairs
    routeCoords:    [],
    // Cached [lat,lng] version of routeCoords (computed once after OSRM fetch)
    routeLatLngCache: null,
    totalDistanceKm: job.distanceKm   || 5,
    // Timing
    startTime:      Date.now(),
    // Manual override: if courier manually updates their position via PUT
    manualLat:      null,
    manualLng:      null,
    manualSetAt:    null,
    routeFetched:   false
  };

  trackingSessions.set(job._id, session);
  return session;
}

// ── Simulation constants ──────────────────────────────────────────────────────
// Realistic Dhaka urban courier speed — 25 km/h average.
// SIMULATION_MULTIPLIER = 1 means real-time (no compression).
// A 5 km route takes ~12 min; a 7 km route takes ~17 min.
export const COURIER_SPEED_KMH      = 25;
export const SIMULATION_MULTIPLIER  = 1;
export const PREPARING_DURATION_MS  = 5000; // 5s quick preparing phase (was 30s)
