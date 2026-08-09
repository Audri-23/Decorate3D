import React, { useState, useEffect, useRef, useCallback } from 'react';
import { fetchGeoListings, fetchAllProductLocations } from './geoApi.js';
import {
  MapPin,
  Navigation,
  Search,
  SlidersHorizontal,
  Box,
  ShieldCheck,
  Star,
  ChevronRight,
  Loader2,
  AlertTriangle,
  Map,
  LocateFixed
} from 'lucide-react';

// ─── Dhaka centre (fallback if geolocation is denied) ────────────────────────
const DHAKA_CENTER = { lat: 23.7925, lng: 90.4044 };

// ─── Condition colour map ─────────────────────────────────────────────────────
const CONDITION_COLORS = {
  EXCELLENT: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300', hex: '#10B981' },
  GOOD:      { bg: 'bg-amber-100',   text: 'text-amber-700',   border: 'border-amber-300',   hex: '#A17A16' },
  FAIR:      { bg: 'bg-rose-100',    text: 'text-rose-700',    border: 'border-rose-300',    hex: '#EF4444' }
};

// ─── Load Leaflet from CDN (no install needed) ────────────────────────────────
function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) { resolve(window.L); return; }

    // Inject Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id   = 'leaflet-css';
      link.rel  = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Inject Leaflet JS
    if (!document.getElementById('leaflet-js')) {
      const script    = document.createElement('script');
      script.id       = 'leaflet-js';
      script.src      = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload   = () => resolve(window.L);
      document.head.appendChild(script);
    } else {
      // Already injecting — poll
      const t = setInterval(() => {
        if (window.L) { clearInterval(t); resolve(window.L); }
      }, 80);
    }
  });
}

// ─── SVG pin factory for Leaflet DivIcon ─────────────────────────────────────
function makePinIcon(L, hexColor = '#A17A16', size = 38) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${Math.round(size * 1.18)}" viewBox="0 0 38 46">
    <filter id="ds"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter>
    <g filter="url(#ds)">
      <path d="M19 2C10.16 2 3 9.16 3 18c0 10.5 14 28 16 30 2-2 16-19.5 16-30C35 9.16 27.84 2 19 2z"
            fill="${hexColor}" stroke="white" stroke-width="2.2"/>
    </g>
    <circle cx="19" cy="18" r="7" fill="white" opacity="0.95"/>
    <circle cx="19" cy="18" r="4.5" fill="${hexColor}"/>
  </svg>`;
  return L.divIcon({
    html:        svg,
    className:   '',
    iconSize:    [size, Math.round(size * 1.18)],
    iconAnchor:  [size / 2, Math.round(size * 1.18)],
    popupAnchor: [0, -Math.round(size * 1.18)]
  });
}

function makeUserIcon(L) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
    <circle cx="13" cy="13" r="11" fill="#1E232A" stroke="#A17A16" stroke-width="3"/>
    <circle cx="13" cy="13" r="5" fill="#A17A16"/>
  </svg>`;
  return L.divIcon({
    html:        svg,
    className:   '',
    iconSize:    [26, 26],
    iconAnchor:  [13, 13],
    popupAnchor: [0, -14]
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export function GeoMapPage({ onSelectProduct }) {
  const mapDivRef     = useRef(null);
  const mapRef        = useRef(null);      // Leaflet map instance
  const markersRef    = useRef([]);        // product markers
  const circleRef     = useRef(null);
  const userMarkerRef = useRef(null);
  const leafletRef    = useRef(null);      // window.L reference

  const [leafletReady, setLeafletReady] = useState(false);
  const [gpsStatus,    setGpsStatus]    = useState('idle');
  const [userCoords,   setUserCoords]   = useState(null);

  const [radius,       setRadius]       = useState(15);
  const [selectedCat,  setSelectedCat]  = useState('All');
  const [selectedCond, setSelectedCond] = useState('All');

  const [listings,     setListings]     = useState([]);
  const [allPins,      setAllPins]      = useState([]);
  const [fetching,     setFetching]     = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchInput,  setSearchInput]  = useState('');

  const categories = ['All', 'Chairs', 'Sofas', 'Tables'];
  const conditions  = ['All', 'EXCELLENT', 'GOOD', 'FAIR'];

  // ── 1. Load Leaflet SDK ──────────────────────────────────────────────────
  useEffect(() => {
    loadLeaflet().then((L) => {
      leafletRef.current = L;
      setLeafletReady(true);
    });
  }, []);

  // ── 2. Init map once Leaflet + div are ready ─────────────────────────────
  useEffect(() => {
    if (!leafletReady || !mapDivRef.current || mapRef.current) return;
    const L = leafletRef.current;

    mapRef.current = L.map(mapDivRef.current, {
      center:    [DHAKA_CENTER.lat, DHAKA_CENTER.lng],
      zoom:      13,
      zoomControl: true
    });

    // OpenStreetMap tile layer — completely free, no key
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(mapRef.current);

    // Fetch all pins for initial (pre-GPS) overview
    fetchAllProductLocations()
      .then((data) => { if (data.success) setAllPins(data.pins); })
      .catch(() => {});
  }, [leafletReady]);

  // ── 3. Show all pins before GPS is granted ──────────────────────────────
  useEffect(() => {
    if (!mapRef.current || !leafletRef.current || allPins.length === 0 || userCoords) return;
    clearMarkers();
    allPins.forEach((pin) => addMarker(pin, false));
  }, [allPins, leafletReady]);

  // ── 4. GPS ───────────────────────────────────────────────────────────────
  const requestGPS = useCallback(() => {
    if (!navigator.geolocation) { setGpsStatus('denied'); return; }
    setGpsStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserCoords(coords);
        setGpsStatus('granted');
        if (mapRef.current) {
          mapRef.current.setView([coords.lat, coords.lng], 13);
        }
      },
      () => {
        setGpsStatus('denied');
        setUserCoords(DHAKA_CENTER);   // graceful fallback
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, []);

  // ── 5. User location marker ──────────────────────────────────────────────
  useEffect(() => {
    if (!mapRef.current || !leafletRef.current || !userCoords) return;
    const L = leafletRef.current;

    if (userMarkerRef.current) userMarkerRef.current.remove();
    userMarkerRef.current = L.marker(
      [userCoords.lat, userCoords.lng],
      { icon: makeUserIcon(L), zIndexOffset: 1000 }
    )
      .addTo(mapRef.current)
      .bindPopup('<b>Your Location</b>');
  }, [userCoords, leafletReady]);

  // ── 6. Radius circle ────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapRef.current || !leafletRef.current || !userCoords) return;
    const L = leafletRef.current;

    if (circleRef.current) circleRef.current.remove();
    circleRef.current = L.circle(
      [userCoords.lat, userCoords.lng],
      {
        radius:      radius * 1000,
        color:       '#A17A16',
        weight:      2,
        opacity:     0.8,
        fillColor:   '#A17A16',
        fillOpacity: 0.06
      }
    ).addTo(mapRef.current);

    mapRef.current.fitBounds(circleRef.current.getBounds(), { padding: [20, 20] });
  }, [userCoords, radius]);

  // ── 7. Fetch listings when coords / filters change ───────────────────────
  useEffect(() => {
    if (!userCoords) return;
    setFetching(true);
    fetchGeoListings({
      lat: userCoords.lat, lng: userCoords.lng,
      radius, category: selectedCat, condition: selectedCond
    })
      .then((data) => {
        if (data.success) {
          setListings(data.listings);
          renderMarkers(data.listings);
        }
      })
      .catch(() => {})
      .finally(() => setFetching(false));
  }, [userCoords, radius, selectedCat, selectedCond]);

  // ── Marker helpers ───────────────────────────────────────────────────────
  function clearMarkers() {
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];
  }

  function addMarker(listing, withDistance = true) {
    if (!mapRef.current || !leafletRef.current) return;
    const L     = leafletRef.current;
    const cond  = CONDITION_COLORS[listing.conditionGrade] || CONDITION_COLORS.GOOD;
    const isSelected = selectedItem?._id === listing._id;
    const iconSize   = isSelected ? 46 : 36;

    const marker = L.marker(
      [listing.geo.lat, listing.geo.lng],
      { icon: makePinIcon(L, cond.hex, iconSize) }
    ).addTo(mapRef.current);

    const distBadge = withDistance
      ? `<span style="color:#A17A16;font-weight:700;font-size:11px">📍 ${listing.geo.distanceKm} km away</span>`
      : `<span style="font-size:11px;color:#6B7280">${listing.geo?.address || ''}</span>`;

    marker.bindPopup(`
      <div style="font-family:Inter,sans-serif;min-width:200px;padding:2px 0">
        <img src="${listing.images?.[0]}"
             style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:8px"
             alt="${listing.title}"/>
        <p style="font-size:13px;font-weight:700;color:#1E232A;margin:0 0 2px;line-height:1.3">
          ${listing.title}
        </p>
        <p style="font-size:11px;color:#6B7280;margin:0 0 6px">${listing.geo?.address || ''}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:15px;font-weight:700;color:#A17A16">$${listing.price}</span>
          ${distBadge}
        </div>
        <span style="display:inline-block;font-size:10px;padding:2px 8px;
                     background:#F9F4E9;border:1px solid #E9D3A4;
                     border-radius:999px;color:#A17A16;font-weight:700">
          ${listing.conditionGrade}
        </span>
      </div>
    `, { maxWidth: 240 });

    marker.on('click', () => setSelectedItem(listing));
    markersRef.current.push(marker);
  }

  function renderMarkers(listingsData) {
    clearMarkers();
    listingsData.forEach((l) => addMarker(l, true));
  }

  // ── Pan to listing on sidebar click ─────────────────────────────────────
  function handleSidebarClick(listing) {
    setSelectedItem(listing);
    if (mapRef.current) {
      mapRef.current.setView([listing.geo.lat, listing.geo.lng], 15, { animate: true });
      // Open the popup for this marker
      const idx = listings.findIndex(l => l._id === listing._id);
      if (markersRef.current[idx]) {
        markersRef.current[idx].openPopup();
      }
    }
  }

  // ── Filtered sidebar list ────────────────────────────────────────────────
  const displayedListings = listings.filter((l) =>
    l.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    l.geo.address.toLowerCase().includes(searchInput.toLowerCase())
  );

  // ────────────────────────────────────────────────────────────────────────────
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'calc(100vh - 80px)', overflow:'hidden' }}
         className="bg-[#FBF9F5]">

      {/* ── Top Control Bar ─────────────────────────────────────────────── */}
      <div className="shrink-0 bg-[#1E232A] border-b border-[#A17A16]/30 px-4 py-3">
        <div className="max-w-full flex flex-col md:flex-row items-start md:items-center gap-3 flex-wrap">

          {/* Title */}
          <div className="flex items-center space-x-3 mr-auto">
            <div className="w-9 h-9 rounded-xl bg-[#A17A16]/20 border border-[#A17A16] flex items-center justify-center text-[#A17A16] shrink-0">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#A17A16] uppercase font-bold block">
                GEO MAP FINDER
              </span>
              <p className="text-white font-serif text-base font-bold leading-tight">
                Local Furniture Radius Search
              </p>
            </div>
          </div>

          {/* GPS Button */}
          <button
            onClick={requestGPS}
            disabled={gpsStatus === 'loading'}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-[#A17A16] bg-[#A17A16]/10 hover:bg-[#A17A16]/20 text-[#A17A16] font-bold text-xs transition-all disabled:opacity-50 shrink-0"
          >
            {gpsStatus === 'loading'
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <LocateFixed className="w-4 h-4" />}
            <span>
              {gpsStatus === 'idle'    && 'Use My GPS Location'}
              {gpsStatus === 'loading' && 'Acquiring GPS…'}
              {gpsStatus === 'granted' && 'GPS Active ✓'}
              {gpsStatus === 'denied'  && 'GPS Denied — Dhaka Centre'}
            </span>
          </button>

          {/* Radius Slider */}
          <div className="flex items-center space-x-3 bg-white/10 border border-white/20 rounded-xl px-4 py-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#A17A16] shrink-0" />
            <span className="text-xs text-gray-300 font-semibold">Radius:</span>
            <input
              type="range" min={1} max={50} step={1}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-28 accent-[#A17A16] cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-white w-12 text-right">{radius} km</span>
          </div>

          {/* Category */}
          <select value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)}
            className="bg-white/10 border border-white/20 text-white text-xs px-3 py-2 rounded-xl font-semibold focus:outline-none focus:border-[#A17A16] shrink-0">
            {categories.map(c => (
              <option key={c} value={c} className="text-[#1E232A] bg-white">
                {c === 'All' ? 'All Categories' : c}
              </option>
            ))}
          </select>

          {/* Condition */}
          <select value={selectedCond} onChange={(e) => setSelectedCond(e.target.value)}
            className="bg-white/10 border border-white/20 text-white text-xs px-3 py-2 rounded-xl font-semibold focus:outline-none focus:border-[#A17A16] shrink-0">
            {conditions.map(c => (
              <option key={c} value={c} className="text-[#1E232A] bg-white">
                {c === 'All' ? 'All Conditions' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Body: Sidebar + Map ──────────────────────────────────────────── */}
      <div style={{ display:'flex', flex:1, overflow:'hidden' }}>

        {/* ── Left Sidebar ──────────────────────────────────────────────── */}
        <aside style={{ width:'300px', flexShrink:0, display:'flex', flexDirection:'column', overflow:'hidden' }}
               className="bg-white border-r border-[#E5DEC9]">

          {/* Search + stats */}
          <div className="px-3 py-3 border-b border-[#E5DEC9] bg-[#FBF9F5] shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
              <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search listings or areas…"
                className="w-full pl-8 pr-3 py-2 bg-white border border-[#E5DEC9] rounded-xl text-xs focus:outline-none focus:border-[#A17A16]" />
            </div>
            <div className="mt-2 flex justify-between items-center text-[10px] font-mono text-gray-500">
              {userCoords ? (
                <>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>{fetching ? 'Searching…' : `${displayedListings.length} listing${displayedListings.length !== 1 ? 's' : ''} found`}</span>
                  </span>
                  <span className="text-[#A17A16] font-bold">{radius} km radius</span>
                </>
              ) : (
                <span className="text-amber-600 font-bold">↑ Enable GPS to search your area</span>
              )}
            </div>
          </div>

          {/* GPS prompt */}
          {!userCoords && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F9F4E9] border border-[#E9D3A4] flex items-center justify-center">
                <Navigation className="w-7 h-7 text-[#A17A16]" />
              </div>
              <div>
                <p className="font-serif font-bold text-gray-900">Find Furniture Near You</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Click <strong>"Use My GPS Location"</strong> above to discover
                  verified furniture listings within your chosen radius.
                </p>
              </div>
              <button onClick={requestGPS}
                className="gold-gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center space-x-2">
                <LocateFixed className="w-4 h-4" />
                <span>ENABLE GPS SEARCH</span>
              </button>
            </div>
          )}

          {/* Listing cards */}
          {userCoords && (
            <div style={{ flex:1, overflowY:'auto' }} className="p-2 space-y-2">

              {fetching && (
                <div className="flex items-center justify-center py-8 text-gray-400">
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  <span className="text-xs">Searching nearby…</span>
                </div>
              )}

              {!fetching && displayedListings.length === 0 && (
                <div className="text-center py-10 space-y-2">
                  <MapPin className="w-8 h-8 text-gray-300 mx-auto" />
                  <p className="text-xs text-gray-400 font-semibold">No listings within {radius} km</p>
                  <p className="text-[11px] text-gray-400">Try increasing the radius slider above.</p>
                </div>
              )}

              {!fetching && displayedListings.map((listing) => {
                const cond     = CONDITION_COLORS[listing.conditionGrade] || CONDITION_COLORS.GOOD;
                const isActive = selectedItem?._id === listing._id;

                return (
                  <button key={listing._id} onClick={() => handleSidebarClick(listing)}
                    className={`w-full text-left rounded-2xl border transition-all overflow-hidden group ${
                      isActive
                        ? 'border-[#A17A16] shadow-md bg-[#FBF9F5]'
                        : 'border-[#E5DEC9] bg-white hover:border-[#A17A16]/50 hover:shadow-sm'
                    }`}>
                    <div className="flex space-x-3 p-3">
                      <img src={listing.images?.[0]} alt={listing.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0 space-y-1">
                        <p className="font-serif text-xs font-bold text-gray-900 truncate leading-tight">
                          {listing.title}
                        </p>
                        <div className="flex items-center space-x-1 text-[10px] text-gray-500">
                          <MapPin className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{listing.geo.address}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-sm font-bold text-[#A17A16]">${listing.price}</span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${cond.bg} ${cond.text} ${cond.border}`}>
                            {listing.conditionGrade}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-emerald-600 font-bold">{listing.geo.distanceKm} km away</span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#A17A16]' : 'text-gray-400'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Expanded detail on selected */}
                    {isActive && (
                      <div className="px-3 pb-3 border-t border-[#E5DEC9] pt-2 space-y-2">
                        <div className="flex items-center space-x-2 text-[10px] text-gray-600">
                          <Star className="w-3 h-3 text-[#A17A16]" />
                          <span className="font-bold">{listing.seller?.name}</span>
                          <span>· ★ {listing.seller?.rating}</span>
                          {listing.seller?.verified && (
                            <span className="flex items-center space-x-0.5 text-emerald-600">
                              <ShieldCheck className="w-3 h-3" /><span>Verified</span>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1.5 text-[10px] text-gray-500">
                          <Box className="w-3 h-3 text-[#A17A16]" />
                          <span>{listing.category} · {listing.material}</span>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); if (onSelectProduct) onSelectProduct(listing); }}
                          className="w-full gold-gradient-btn py-1.5 rounded-xl text-[10px] font-bold tracking-wide shadow-sm flex items-center justify-center space-x-1.5">
                          <Box className="w-3 h-3" />
                          <span>VIEW FULL LISTING + 3D MODEL</span>
                        </button>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Sidebar footer */}
          <div className="shrink-0 px-4 py-2 border-t border-[#E5DEC9] bg-[#FBF9F5] flex items-center justify-between text-[10px] text-gray-400 font-mono">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>Escrow Protected</span>
            </span>
            <span className="text-[#A17A16] font-bold">Decorate3D</span>
          </div>
        </aside>

        {/* ── Map Area ──────────────────────────────────────────────────── */}
        <div style={{ flex:1, position:'relative', overflow:'hidden' }}>

          {/* Leaflet map mount point */}
          <div ref={mapDivRef} style={{ width:'100%', height:'100%' }} />

          {/* Loading overlay */}
          {!leafletReady && (
            <div className="absolute inset-0 bg-[#F5F0E8] flex flex-col items-center justify-center space-y-4 z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#1E232A] flex items-center justify-center">
                <Loader2 className="w-7 h-7 text-[#A17A16] animate-spin" />
              </div>
              <p className="font-serif font-bold text-gray-700">Loading Map…</p>
              <p className="text-xs text-gray-400">Powered by OpenStreetMap</p>
            </div>
          )}

          {/* Radius badge */}
          {userCoords && leafletReady && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1E232A]/90 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-xs font-mono font-bold border border-[#A17A16]/40 z-[1000] flex items-center space-x-2 shadow-lg pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#A17A16] animate-pulse" />
              <span>Searching within {radius} km · {listings.length} listing{listings.length !== 1 ? 's' : ''} found</span>
            </div>
          )}

          {/* Floating legend */}
          {leafletReady && (
            <div className="absolute bottom-6 right-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-[#E5DEC9] shadow-lg p-3 space-y-2 text-[10px] font-bold z-[1000]">
              <p className="text-gray-500 uppercase tracking-wider font-mono mb-1">Legend</p>
              {[
                { color: '#10B981', label: 'EXCELLENT condition' },
                { color: '#A17A16', label: 'GOOD condition' },
                { color: '#EF4444', label: 'FAIR condition' },
                { color: '#1E232A', label: 'Your Location' }
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
              {userCoords && (
                <div className="pt-1 border-t border-[#E5DEC9] text-[9px] text-gray-400 font-mono">
                  GPS: {userCoords.lat.toFixed(4)}, {userCoords.lng.toFixed(4)}
                </div>
              )}
              <div className="pt-1 border-t border-[#E5DEC9] text-[9px] text-gray-400">
                © OpenStreetMap contributors
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
