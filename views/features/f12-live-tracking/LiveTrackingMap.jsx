import React, { useState, useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import {
  X, Truck, MapPin, Clock, Navigation, Package,
  CheckCircle, Loader2, AlertCircle, RefreshCw,
  Radio, RotateCcw, User, ArrowRight, Wifi
} from 'lucide-react';
import { startTrackingSession, pollTrackingState, resetTrackingSession, updateCourierGPS } from './trackingApi.js';

// ─── Status config ────────────────────────────────────────────────────────────
const STATUS_CFG = {
  preparing:  { label: 'Preparing Pickup',     color: 'text-amber-400',  bg: 'bg-amber-500/20',  border: 'border-amber-500/30',  dot: '#f59e0b' },
  in_transit: { label: 'In Transit',           color: 'text-emerald-400',bg: 'bg-emerald-500/20',border: 'border-emerald-500/30',dot: '#10b981' },
  arrived:    { label: 'Delivered!',           color: 'text-sky-400',    bg: 'bg-sky-500/20',    border: 'border-sky-500/30',    dot: '#38bdf8' },
  loading:    { label: 'Connecting...',        color: 'text-gray-400',   bg: 'bg-gray-500/20',   border: 'border-gray-500/30',   dot: '#9ca3af' }
};

// ─── Custom Leaflet icons ─────────────────────────────────────────────────────
function makeTruckIcon(L, animated = false) {
  const pulse = animated
    ? `<div style="position:absolute;inset:-6px;border-radius:50%;border:2px solid #C9980A;animation:truckPulse 1.4s ease-out infinite;"></div>`
    : '';
  const html = `
    <div style="position:relative;width:42px;height:42px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.5))">
      ${pulse}
      <div style="width:42px;height:42px;background:#C9980A;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.4)">
        <span style="font-size:20px">🚚</span>
      </div>
    </div>`;
  return L.divIcon({ html, className: '', iconSize: [42, 42], iconAnchor: [21, 21], popupAnchor: [0, -24] });
}

function makePinIcon(L, color, emoji) {
  const html = `
    <div style="display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 3px 8px rgba(0,0,0,0.4))">
      <div style="width:36px;height:36px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3)">
        <span style="font-size:16px">${emoji}</span>
      </div>
      <div style="width:2px;height:8px;background:${color};border-radius:0 0 2px 2px"></div>
    </div>`;
  return L.divIcon({ html, className: '', iconSize: [36, 46], iconAnchor: [18, 46], popupAnchor: [0, -48] });
}

// ─── ETA display ─────────────────────────────────────────────────────────────
function ETADisplay({ minutes, status }) {
  if (status === 'arrived')   return <span className="text-sky-400 font-bold">Delivered ✓</span>;
  if (status === 'preparing') return <span className="text-amber-400 font-bold">Calculating…</span>;
  if (!minutes && minutes !== 0) return <span className="text-gray-400">—</span>;
  if (minutes === 0) return <span className="text-emerald-400 font-bold">Arriving now</span>;
  if (minutes < 60)  return <span className="text-white font-bold">{minutes} min</span>;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return <span className="text-white font-bold">{h}h {m}m</span>;
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
function ProgressBar({ progress = 0, status }) {
  const pct = Math.round(progress * 100);
  const color = status === 'arrived' ? '#38bdf8' : status === 'preparing' ? '#f59e0b' : '#C9980A';
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-gray-400 font-mono">
        <span>Route Progress</span>
        <span style={{ color }}>{pct}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function LiveTrackingMap({ job, isOpen, onClose, viewerRole = 'buyer' }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef  = useRef(null);
  const truckMarkerRef  = useRef(null);
  const routeLayerRef   = useRef(null);
  const pickupMarkerRef = useRef(null);
  const dropMarkerRef   = useRef(null);
  const leafletRef      = useRef(null);
  const pollTimerRef    = useRef(null);

  const [tracking,    setTracking]    = useState(null);
  const [mapReady,    setMapReady]    = useState(false);
  const [loadError,   setLoadError]   = useState(null);
  const [isStarting,  setIsStarting]  = useState(false);
  const [pollCount,   setPollCount]   = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [mapMode,     setMapMode]     = useState('street'); // 'dark' | 'street'
  const [gpsLoading,  setGpsLoading]  = useState(false);   // courier GPS push

  const TILE_LAYERS = {
    dark:   { url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',   attr: '© OpenStreetMap, © CartoDB' },
    street: { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',             attr: '© OpenStreetMap contributors' }
  };

  // ── Initialize tracking ────────────────────────────────────────────────────
  const initTracking = useCallback(async () => {
    if (!job?._id) return;
    setIsStarting(true);
    setLoadError(null);
    try {
      await startTrackingSession(job._id);
      const data = await pollTrackingState(job._id);
      if (data.success) {
        setTracking(data);
        setLastUpdated(new Date());
      } else {
        setLoadError(data.message || 'Failed to start tracking.');
      }
    } catch (e) {
      setLoadError('Cannot reach tracking server. Ensure backend is running.');
    }
    setIsStarting(false);
  }, [job]);

  // ── Poll for updates every 3 seconds ──────────────────────────────────────
  const poll = useCallback(async () => {
    if (!job?._id) return;
    try {
      const data = await pollTrackingState(job._id);
      if (data.success) {
        setTracking(data);
        setLastUpdated(new Date());
        setPollCount(c => c + 1);
      }
    } catch {}
  }, [job]);

  // ── Start polling when open ────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    initTracking();
    const t = setInterval(poll, 3000);
    pollTimerRef.current = t;
    return () => clearInterval(t);
  }, [isOpen, initTracking, poll]);

  // ── Initialize Leaflet map ─────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen || !mapContainerRef.current) return;

    // Inject pulse keyframe once
    if (!document.getElementById('truck-pulse-style')) {
      const style = document.createElement('style');
      style.id = 'truck-pulse-style';
      style.textContent = `
        @keyframes truckPulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }`;
      document.head.appendChild(style);
    }

    leafletRef.current = L;

    // Destroy previous map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const isValidCoord = (c) => typeof c === 'number' && !isNaN(c);

    const pLat = isValidCoord(job?.pickupLat) ? job.pickupLat : (isValidCoord(tracking?.pickupLat) ? tracking.pickupLat : 23.8103);
    const pLng = isValidCoord(job?.pickupLng) ? job.pickupLng : (isValidCoord(tracking?.pickupLng) ? tracking.pickupLng : 90.4125);
    const dLat = isValidCoord(job?.dropoffLat) ? job.dropoffLat : (isValidCoord(tracking?.dropoffLat) ? tracking.dropoffLat : 23.7925);
    const dLng = isValidCoord(job?.dropoffLng) ? job.dropoffLng : (isValidCoord(tracking?.dropoffLng) ? tracking.dropoffLng : 90.4078);

    const center = [(pLat + dLat) / 2, (pLng + dLng) / 2];

    const map = L.map(mapContainerRef.current, {
      center,
      zoom: 13,
      zoomControl: true,
      attributionControl: true
    });
    mapInstanceRef.current = map;

    // Tile layer
    const { url, attr } = TILE_LAYERS[mapMode];
    L.tileLayer(url, { attribution: attr, maxZoom: 19 }).addTo(map);

    // Force Leaflet tile recalculation as soon as modal is visible
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 100);

    // Pickup marker
    if (isValidCoord(pLat) && isValidCoord(pLng)) {
      const pickupIcon = makePinIcon(L, '#10b981', '🏠');
      pickupMarkerRef.current = L.marker([pLat, pLng], { icon: pickupIcon })
        .bindPopup(`<b>📦 PICKUP</b><br/>${job?.pickupAddress || tracking?.pickupAddress || ''}`)
        .addTo(map);

      // Initial truck at pickup
      const truckIcon = makeTruckIcon(L, true);
      truckMarkerRef.current = L.marker([pLat, pLng], { icon: truckIcon, zIndexOffset: 1000 })
        .bindPopup(`<b>🚚 ${job?.lockedByCourierName || tracking?.courierName || 'Courier'}</b><br/>En route…`)
        .addTo(map);
    }

    // Dropoff marker
    if (isValidCoord(dLat) && isValidCoord(dLng)) {
      const dropIcon = makePinIcon(L, '#ef4444', '🎯');
      dropMarkerRef.current = L.marker([dLat, dLng], { icon: dropIcon })
        .bindPopup(`<b>🎯 DROP-OFF</b><br/>${job?.dropoffAddress || tracking?.dropoffAddress || ''}`)
        .addTo(map);
    }

    setMapReady(true);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      setMapReady(false);
    };
  }, [isOpen, job?._id]);

  // ── Update map when tracking data changes ──────────────────────────────────
  useEffect(() => {
    const L   = leafletRef.current;
    const map = mapInstanceRef.current;
    if (!L || !map || !tracking?.courier || !mapReady) return;

    const { lat, lng, status } = tracking.courier;
    const isValidCoord = (c) => typeof c === 'number' && !isNaN(c);

    // Update pickup/dropoff markers if needed
    if (isValidCoord(tracking.pickupLat) && isValidCoord(tracking.pickupLng) && pickupMarkerRef.current) {
      pickupMarkerRef.current.setLatLng([tracking.pickupLat, tracking.pickupLng]);
    }
    if (isValidCoord(tracking.dropoffLat) && isValidCoord(tracking.dropoffLng) && dropMarkerRef.current) {
      dropMarkerRef.current.setLatLng([tracking.dropoffLat, tracking.dropoffLng]);
    }

    // Move or create truck marker
    if (isValidCoord(lat) && isValidCoord(lng)) {
      if (truckMarkerRef.current) {
        truckMarkerRef.current.setLatLng([lat, lng]);
        const truckIcon = makeTruckIcon(L, status === 'in_transit');
        truckMarkerRef.current.setIcon(truckIcon);
        truckMarkerRef.current.setPopupContent(
          `<b>🚚 ${tracking.courierName}</b><br/>` +
          (status === 'arrived'
            ? 'Delivered!'
            : status === 'preparing'
            ? 'Preparing pickup…'
            : `${tracking.courier.remainingKm} km · ${tracking.courier.etaMinutes} min`)
        );
      } else {
        const truckIcon = makeTruckIcon(L, status === 'in_transit');
        truckMarkerRef.current = L.marker([lat, lng], { icon: truckIcon, zIndexOffset: 1000 })
          .bindPopup(`<b>🚚 ${tracking.courierName}</b><br/>En route…`)
          .addTo(map);
      }
    }

    // Draw / update route polyline
    if (tracking.routeCoords?.length >= 2) {
      if (routeLayerRef.current) {
        map.removeLayer(routeLayerRef.current);
      }
      routeLayerRef.current = L.polyline(tracking.routeCoords, {
        color:     '#C9980A',
        weight:    5,
        opacity:   0.9,
        dashArray: status === 'preparing' ? '8 6' : null,
        lineJoin:  'round'
      }).addTo(map);

      // Fit bounds on first route draw
      if (pollCount <= 1 && isValidCoord(tracking.pickupLat) && isValidCoord(tracking.dropoffLat) && isValidCoord(lat)) {
        const bounds = L.latLngBounds([
          [tracking.pickupLat,  tracking.pickupLng],
          [tracking.dropoffLat, tracking.dropoffLng],
          [lat, lng]
        ]);
        map.fitBounds(bounds, { padding: [40, 40] });
      }
    }
  }, [tracking, mapReady, pollCount]);

  // ── Toggle tile layer ──────────────────────────────────────────────────────
  const toggleMapMode = () => {
    const L   = leafletRef.current;
    const map = mapInstanceRef.current;
    if (!L || !map) return;
    const next = mapMode === 'dark' ? 'street' : 'dark';
    setMapMode(next);
    map.eachLayer(layer => { if (layer._url) map.removeLayer(layer); });
    const { url, attr } = TILE_LAYERS[next];
    L.tileLayer(url, { attribution: attr, maxZoom: 19 }).addTo(map);
  };

  const handleReset = async () => {
    if (!job?._id) return;
    await resetTrackingSession(job._id);
    initTracking();
  };

  // ── Courier: push real device GPS to server ────────────────────────────────
  const handleShareGPS = async () => {
    if (!job?._id || !navigator.geolocation) return;
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const user = JSON.parse(localStorage.getItem('decorate3d_user') || '{}');
        try {
          await updateCourierGPS(job._id, { lat: latitude, lng: longitude, courierId: user.id });
        } catch {}
        setGpsLoading(false);
      },
      () => setGpsLoading(false),
      { enableHighAccuracy: true, timeout: 6000 }
    );
  };

  if (!isOpen) return null;

  const status   = tracking?.courier?.status || 'loading';
  const statusCfg = STATUS_CFG[status] || STATUS_CFG.loading;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4">
      <div className="w-full max-w-6xl h-[90vh] bg-[#0F1117] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#1E232A] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#C9980A]/20 rounded-xl flex items-center justify-center border border-[#C9980A]/30">
              <Truck className="w-4.5 h-4.5 text-[#C9980A]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">LIVE DELIVERY TRACKING</span>
                <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${statusCfg.bg} ${statusCfg.color} ${statusCfg.border}`}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: statusCfg.dot }} />
                  {statusCfg.label.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5 truncate max-w-xs">
                {job?.productTitle || 'Loading…'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live indicator */}
            <div className="hidden sm:flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
              <Wifi className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-emerald-400 font-bold">LIVE</span>
              {lastUpdated && (
                <span className="text-[10px] font-mono text-gray-500">
                  {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              )}
            </div>

            {/* Toggle map style */}
            <button
              onClick={toggleMapMode}
              title="Toggle map style"
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
            </button>

            {/* Reset simulation */}
            <button
              onClick={handleReset}
              title="Restart simulation"
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Body: Map + Side Panel ── */}
        <div className="flex flex-1 overflow-hidden">

          {/* ── Map ── */}
          <div className="relative flex-1">
            {/* Map container */}
            <div ref={mapContainerRef} className="w-full h-full" style={{ background: '#1a1e26' }} />

            {/* Loading overlay */}
            {(isStarting || !mapReady) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0F1117]/90 z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-[#C9980A]/30 flex items-center justify-center">
                    <span className="text-3xl animate-bounce">🚚</span>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-t-[#C9980A] animate-spin" />
                </div>
                <p className="text-white font-bold mt-4 text-sm">Initialising Live Tracking…</p>
                <p className="text-gray-500 text-xs mt-1">Fetching route via OSRM OpenStreetMap</p>
              </div>
            )}

            {/* Error overlay */}
            {loadError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0F1117]/90 z-10">
                <AlertCircle className="w-10 h-10 text-rose-400 mb-3" />
                <p className="text-white font-bold">Tracking Unavailable</p>
                <p className="text-gray-400 text-xs mt-1 max-w-xs text-center">{loadError}</p>
                <button
                  onClick={initTracking}
                  className="mt-4 px-4 py-2 bg-[#C9980A] text-black text-xs font-bold rounded-xl hover:bg-[#A17A16] transition-colors"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Map overlay: route source badge */}
            {mapReady && !loadError && (
              <div className="absolute top-3 left-3 z-[400]">
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-[#C9980A]" />
                  <span className="text-[10px] font-mono text-gray-300">Route: OSRM OpenStreetMap</span>
                </div>
              </div>
            )}

            {/* Legend */}
            {mapReady && !loadError && (
              <div className="absolute bottom-3 left-3 z-[400] space-y-1">
                {[
                  { dot: '#10b981', label: 'Pickup' },
                  { dot: '#ef4444', label: 'Drop-off' },
                  { dot: '#C9980A', label: 'Courier' }
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: l.dot }} />
                    <span className="text-[10px] font-mono text-gray-300">{l.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Right Info Panel ── */}
          <div className="w-72 xl:w-80 bg-[#1A1E26] border-l border-white/10 flex flex-col overflow-y-auto flex-shrink-0">

            {/* Product info */}
            {job && (
              <div className="p-4 border-b border-white/10">
                <div className="flex gap-3">
                  <img
                    src={job.productImage}
                    alt={job.productTitle}
                    className="w-14 h-14 rounded-xl object-cover border border-white/10 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-white text-xs font-bold leading-snug line-clamp-2">{job.productTitle}</p>
                    <p className="text-gray-500 text-[10px] font-mono mt-1">{job.category} · {job.conditionGrade}</p>
                  </div>
                </div>
              </div>
            )}

            {/* ETA + Stats */}
            <div className="p-4 border-b border-white/10 space-y-4">
              {/* Big ETA */}
              <div className={`rounded-2xl border p-4 text-center ${statusCfg.bg} ${statusCfg.border}`}>
                <p className={`text-[10px] font-mono font-bold uppercase tracking-widest ${statusCfg.color}`}>
                  {status === 'preparing' ? 'Preparing Pickup' : status === 'arrived' ? 'Delivered' : 'Est. Arrival'}
                </p>
                <div className="text-3xl font-bold text-white mt-1">
                  <ETADisplay minutes={tracking?.courier?.etaMinutes} status={status} />
                </div>
                {status === 'in_transit' && tracking?.courier?.remainingKm > 0 && (
                  <p className="text-gray-400 text-xs mt-1">{tracking.courier.remainingKm} km remaining</p>
                )}
              </div>

              {/* Progress bar */}
              <ProgressBar progress={tracking?.courier?.progress || 0} status={status} />

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <p className="text-[9px] font-mono text-gray-500 uppercase">Covered</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {tracking?.courier?.coveredKm ?? '—'} km
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <p className="text-[9px] font-mono text-gray-500 uppercase">Total</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {tracking?.totalDistanceKm ?? job?.distanceKm ?? '—'} km
                  </p>
                </div>
              </div>
            </div>

            {/* Route details */}
            <div className="p-4 border-b border-white/10 space-y-3">
              <p className="text-[10px] font-mono text-gray-500 uppercase font-bold">Route</p>

              {/* Pickup */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-emerald-400 font-bold">PICKUP</p>
                  <p className="text-xs text-white font-medium leading-snug mt-0.5">
                    {tracking?.pickupAddress || job?.pickupAddress}
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                    {(tracking?.pickupLat || job?.pickupLat)?.toFixed(4)}, {(tracking?.pickupLng || job?.pickupLng)?.toFixed(4)}
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex items-center gap-2 pl-3.5">
                <div className="w-[2px] h-4 bg-white/10 rounded" />
                <ArrowRight className="w-3 h-3 text-gray-600" />
              </div>

              {/* Courier position */}
              {tracking?.courier && status === 'in_transit' && (
                <>
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#C9980A]/20 border border-[#C9980A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">🚚</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-[#C9980A] font-bold">COURIER NOW</p>
                      <p className="text-xs text-white font-medium mt-0.5">
                        {tracking.courier.lat?.toFixed(5)}, {tracking.courier.lng?.toFixed(5)}
                      </p>
                      <p className="text-[10px] text-gray-500 font-mono mt-0.5">Live GPS — updates every 3s</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-3.5">
                    <div className="w-[2px] h-4 bg-white/10 rounded" />
                    <ArrowRight className="w-3 h-3 text-gray-600" />
                  </div>
                </>
              )}

              {/* Dropoff */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-rose-400 font-bold">DROP-OFF</p>
                  <p className="text-xs text-white font-medium leading-snug mt-0.5">
                    {tracking?.dropoffAddress || job?.dropoffAddress}
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                    {(tracking?.dropoffLat || job?.dropoffLat)?.toFixed(4)}, {(tracking?.dropoffLng || job?.dropoffLng)?.toFixed(4)}
                  </p>
                </div>
              </div>
            </div>

            {/* Courier + Parties */}
            <div className="p-4 space-y-3">
              <p className="text-[10px] font-mono text-gray-500 uppercase font-bold">Delivery Parties</p>

              {[
                { role: 'COURIER', name: tracking?.courierName || job?.lockedByCourierName, icon: '🚚', color: 'text-[#C9980A]' },
                { role: 'SELLER',  name: tracking?.sellerName  || job?.sellerName,          icon: '🏪', color: 'text-emerald-400' },
                { role: 'BUYER',   name: tracking?.buyerName   || job?.buyerName,           icon: '👤', color: 'text-sky-400' }
              ].map(p => (
                <div key={p.role} className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5">
                  <span className="text-base">{p.icon}</span>
                  <div>
                    <p className={`text-[10px] font-mono font-bold ${p.color}`}>{p.role}</p>
                    <p className="text-xs text-white font-medium">{p.name || '—'}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Courier GPS push button — only visible when logged in as courier */}
            {viewerRole === 'courier' && (
              <div className="px-4 pb-3">
                <button
                  onClick={handleShareGPS}
                  disabled={gpsLoading}
                  title="Push your real device GPS location to update the live map"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C9980A]/10 hover:bg-[#C9980A]/20 border border-[#C9980A]/40 hover:border-[#C9980A] text-[#C9980A] text-xs font-bold rounded-xl transition-all disabled:opacity-50"
                >
                  {gpsLoading
                    ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Locating…</>
                    : <><Navigation className="w-3.5 h-3.5" />SHARE MY GPS LOCATION</>}
                </button>
                <p className="text-[10px] text-gray-600 font-mono text-center mt-1.5">Pushes your real device GPS to the live map</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
