import {
  trackingSessions,
  initTrackingSession,
  COURIER_SPEED_KMH,
  SIMULATION_MULTIPLIER,
  PREPARING_DURATION_MS
} from './tracking.model.js';
import { inMemoryDispatchJobs } from '../f11-courier-dispatch/dispatch.model.js';

// ─── OSRM route fetch (same engine as F10 Shipping Quote) ─────────────────────
async function fetchOSRMRoute(fromLat, fromLng, toLat, toLng) {
  const url =
    `https://router.project-osrm.org/route/v1/driving/` +
    `${fromLng},${fromLat};${toLng},${toLat}` +
    `?overview=full&geometries=geojson&alternatives=false`;

  try {
    // 3s timeout — fail fast so the fallback route kicks in immediately
    const resp = await fetch(url, { signal: AbortSignal.timeout(3000) });
    const json = await resp.json();

    if (json.code === 'Ok' && json.routes?.length > 0) {
      const route = json.routes[0];
      return {
        // GeoJSON coords are [lng, lat] — keep as-is, convert in helper
        coords:      route.geometry.coordinates,   // [[lng,lat], ...]
        distanceKm:  Math.round((route.distance / 1000) * 10) / 10,
        durationMin: Math.ceil(route.duration / 60)
      };
    }
    return null;
  } catch {
    return null;
  }
}

// ─── Apply route to session (builds cache once) ────────────────────────────────
function setSessionRoute(session, coords, distanceKm) {
  session.routeCoords      = coords;
  if (distanceKm) session.totalDistanceKm = distanceKm;
  // Pre-build Leaflet-ready [lat,lng] cache — avoids re-mapping on every poll
  session.routeLatLngCache = coords.map(c => [c[1], c[0]]);
  session.routeFetched     = true;
}

// ─── Interpolate straight-line fallback route ──────────────────────────────────
function buildStraightLineRoute(fromLat, fromLng, toLat, toLng, steps = 40) {
  const coords = [];
  for (let i = 0; i <= steps; i++) {
    const t   = i / steps;
    const lng = fromLng + (toLng - fromLng) * t;
    const lat = fromLat + (toLat - fromLat) * t;
    coords.push([lng, lat]);
  }
  return coords;
}

// ─── Calculate current courier position from elapsed time ─────────────────────
function calcCurrentPosition(session) {
  const { routeCoords, totalDistanceKm, startTime } = session;
  const effectiveSpeedKmh = COURIER_SPEED_KMH * SIMULATION_MULTIPLIER;

  // If courier manually updated position within last 15s, use that
  if (session.manualLat && session.manualSetAt &&
      Date.now() - session.manualSetAt < 15000) {
    return {
      lat:    session.manualLat,
      lng:    session.manualLng,
      status: 'in_transit',
      progress: 0.5,
      remainingKm: Math.round(totalDistanceKm * 0.5 * 10) / 10,
      etaMinutes:  Math.ceil((totalDistanceKm * 0.5 / COURIER_SPEED_KMH) * 60),
      coveredKm:   Math.round(totalDistanceKm * 0.5 * 10) / 10
    };
  }

  const elapsedMs = Date.now() - startTime;

  // Preparing phase
  if (elapsedMs < PREPARING_DURATION_MS) {
    return {
      lat:        session.pickupLat,
      lng:        session.pickupLng,
      status:     'preparing',
      progress:   0,
      remainingKm: totalDistanceKm,
      etaMinutes: Math.ceil((totalDistanceKm / COURIER_SPEED_KMH) * 60),
      coveredKm:  0
    };
  }

  const transitMs  = elapsedMs - PREPARING_DURATION_MS;
  const transitHrs = transitMs / 3_600_000;
  const coveredKm  = Math.min(effectiveSpeedKmh * transitHrs, totalDistanceKm);
  const progress   = coveredKm / totalDistanceKm;

  // Arrived
  if (progress >= 1.0) {
    const last = routeCoords.length > 0
      ? routeCoords[routeCoords.length - 1]
      : [session.dropoffLng, session.dropoffLat];
    return {
      lat:        last[1],
      lng:        last[0],
      status:     'arrived',
      progress:   1,
      remainingKm: 0,
      etaMinutes:  0,
      coveredKm:  totalDistanceKm
    };
  }

  // Interpolate along route
  let lat, lng;
  if (routeCoords.length >= 2) {
    const idx = Math.min(
      Math.floor(progress * (routeCoords.length - 1)),
      routeCoords.length - 2
    );
    const frac   = (progress * (routeCoords.length - 1)) - idx;
    const c0     = routeCoords[idx];
    const c1     = routeCoords[idx + 1];
    lng = c0[0] + (c1[0] - c0[0]) * frac;
    lat = c0[1] + (c1[1] - c0[1]) * frac;
  } else {
    lat = session.pickupLat + (session.dropoffLat - session.pickupLat) * progress;
    lng = session.pickupLng + (session.dropoffLng - session.pickupLng) * progress;
  }

  const remainingKm = Math.max(totalDistanceKm - coveredKm, 0);
  const etaMinutes  = Math.ceil((remainingKm / COURIER_SPEED_KMH) * 60);

  return {
    lat:  Math.round(lat * 100000) / 100000,
    lng:  Math.round(lng * 100000) / 100000,
    status: 'in_transit',
    progress:    Math.round(progress * 1000) / 1000,
    remainingKm: Math.round(remainingKm * 10) / 10,
    etaMinutes,
    coveredKm:   Math.round(coveredKm * 10) / 10
  };
}

// ─── Helper: find dispatch job ─────────────────────────────────────────────────
function findDispatchJob(jobId) {
  return inMemoryDispatchJobs.find(j => j._id === jobId) || null;
}

// ─── POST /api/tracking/:jobId/start ──────────────────────────────────────────
// Initialize (or reset) a tracking session for a locked job
export const startTracking = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = findDispatchJob(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: `Dispatch job not found: ${jobId}` });
    }
    if (job.status !== 'LOCKED' && job.status !== 'COMPLETED') {
      return res.status(400).json({
        success: false,
        message: `Job must be LOCKED before tracking can start. Current status: ${job.status}`
      });
    }

    const session = initTrackingSession(job);

    // Apply straight-line route immediately so first poll never blocks
    setSessionRoute(session,
      buildStraightLineRoute(job.pickupLat, job.pickupLng, job.dropoffLat, job.dropoffLng)
    );

    // Upgrade to real OSRM route in background — replaces cache when ready
    fetchOSRMRoute(job.pickupLat, job.pickupLng, job.dropoffLat, job.dropoffLng)
      .then(routeData => {
        if (routeData?.coords?.length >= 2) {
          session.durationMin = routeData.durationMin;
          setSessionRoute(session, routeData.coords, routeData.distanceKm);
        }
      })
      .catch(() => { /* already have fallback */ });

    return res.status(200).json({
      success: true,
      message: 'Tracking session started.',
      jobId,
      session: {
        jobId,
        productTitle:   session.productTitle,
        productImage:   session.productImage,
        pickupAddress:  session.pickupAddress,
        pickupLat:      session.pickupLat,
        pickupLng:      session.pickupLng,
        dropoffAddress: session.dropoffAddress,
        dropoffLat:     session.dropoffLat,
        dropoffLng:     session.dropoffLng,
        courierName:    session.courierName,
        sellerName:     session.sellerName,
        buyerName:      session.buyerName,
        totalDistanceKm: session.totalDistanceKm,
        routeFetched:   false
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── GET /api/tracking/:jobId ──────────────────────────────────────────────────
// Poll for current tracking state — called every 3 seconds by frontend
export const getTrackingState = async (req, res) => {
  try {
    const { jobId } = req.params;

    let session = trackingSessions.get(jobId);

    // Auto-start if no session but job is locked
    if (!session) {
      const job = findDispatchJob(jobId);
      if (!job) {
        return res.status(404).json({ success: false, message: `No tracking session for job: ${jobId}` });
      }
      if (job.status === 'LOCKED' || job.status === 'COMPLETED') {
        session = initTrackingSession(job);
        // Apply fallback immediately — respond without waiting for OSRM
        setSessionRoute(session,
          buildStraightLineRoute(job.pickupLat, job.pickupLng, job.dropoffLat, job.dropoffLng)
        );
        // Upgrade to real route async
        fetchOSRMRoute(job.pickupLat, job.pickupLng, job.dropoffLat, job.dropoffLng)
          .then(routeData => {
            if (routeData?.coords?.length >= 2) {
              session.durationMin = routeData.durationMin;
              setSessionRoute(session, routeData.coords, routeData.distanceKm);
            }
          })
          .catch(() => { /* fallback already set */ });
      } else {
        return res.status(400).json({
          success: false,
          message: `Job "${jobId}" is not LOCKED. Tracking only available for locked deliveries.`
        });
      }
    }

    const pos = calcCurrentPosition(session);

    // Use pre-built cache — avoids re-mapping hundreds of coords every 3s poll
    const routeLatLng = session.routeLatLngCache || [];

    return res.status(200).json({
      success: true,
      feature: 'F12 — Live Delivery Tracking',
      jobId,
      productTitle:    session.productTitle,
      productImage:    session.productImage,
      category:        session.category,
      pickupAddress:   session.pickupAddress,
      pickupLat:       session.pickupLat,
      pickupLng:       session.pickupLng,
      dropoffAddress:  session.dropoffAddress,
      dropoffLat:      session.dropoffLat,
      dropoffLng:      session.dropoffLng,
      courierName:     session.courierName,
      sellerName:      session.sellerName,
      buyerName:       session.buyerName,
      totalDistanceKm: session.totalDistanceKm,
      routeCoords:     routeLatLng,       // [[lat,lng], ...]
      routeFetched:    session.routeFetched,
      courier: {
        lat:         pos.lat,
        lng:         pos.lng,
        status:      pos.status,          // 'preparing' | 'in_transit' | 'arrived'
        progress:    pos.progress,        // 0.0 – 1.0
        coveredKm:   pos.coveredKm,
        remainingKm: pos.remainingKm,
        etaMinutes:  pos.etaMinutes
      },
      timestamp: Date.now()
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── PUT /api/tracking/:jobId/location ────────────────────────────────────────
// Courier manually updates their GPS position
export const updateCourierLocation = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { lat, lng, courierId } = req.body;

    if (lat === undefined || lng === undefined) {
      return res.status(400).json({ success: false, message: 'lat and lng are required.' });
    }

    const session = trackingSessions.get(jobId);
    if (!session) {
      return res.status(404).json({ success: false, message: 'No active tracking session.' });
    }

    session.manualLat    = parseFloat(lat);
    session.manualLng    = parseFloat(lng);
    session.manualSetAt  = Date.now();

    return res.status(200).json({
      success: true,
      message: 'Courier location updated.',
      courier: { lat: session.manualLat, lng: session.manualLng }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── GET /api/tracking/:jobId/route ───────────────────────────────────────────
// Returns just the route geometry (for initial map draw)
export const getRouteGeometry = async (req, res) => {
  try {
    const { jobId } = req.params;
    const session   = trackingSessions.get(jobId);

    if (!session) {
      return res.status(404).json({ success: false, message: 'No active tracking session.' });
    }

    const routeLatLng = session.routeCoords.map(c => [c[1], c[0]]);
    return res.status(200).json({
      success: true,
      routeCoords:     routeLatLng,
      routeFetched:    session.routeFetched,
      totalDistanceKm: session.totalDistanceKm
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── POST /api/tracking/:jobId/reset ─────────────────────────────────────────
// Reset session start time (restart simulation)
export const resetTracking = async (req, res) => {
  try {
    const { jobId } = req.params;
    const session   = trackingSessions.get(jobId);
    if (!session) {
      return res.status(404).json({ success: false, message: 'No active tracking session.' });
    }
    session.startTime   = Date.now();
    session.manualLat   = null;
    session.manualLng   = null;
    session.manualSetAt = null;
    return res.status(200).json({ success: true, message: 'Tracking simulation reset.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
