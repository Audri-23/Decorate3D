/**
 * Live Shipping Price Quote Widget
 * A self-contained React widget for calculating live courier quotes on the Product Detail Page.
 */

import React, { useState, useCallback } from 'react';
import { fetchShippingQuote } from './shippingApi.js';
import {
  Truck,
  MapPin,
  Clock,
  Package,
  Loader2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  LocateFixed,
  BadgeCheck,
  Zap
} from 'lucide-react';

// ─── Volume tier styling map ─────────────────────────────────────────────────
const TIER_STYLE = {
  SMALL:  { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Small Item'  },
  MEDIUM: { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   label: 'Medium Item' },
  LARGE:  { bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-200',    label: 'Large Item'  }
};

// ─── Widget states ────────────────────────────────────────────────────────────
const STATE = {
  IDLE:     'idle',
  LOCATING: 'locating',
  FETCHING: 'fetching',
  SUCCESS:  'success',
  ERROR:    'error'
};

/**
 * ShippingQuoteWidget
 * @param {{ product: Object }} props
 */
export const ShippingQuoteWidget = ({ product }) => {
  const [widgetState, setWidgetState] = useState(STATE.IDLE);
  const [quote,       setQuote]       = useState(null);
  const [errorMsg,    setErrorMsg]    = useState('');
  const [expanded,    setExpanded]    = useState(false);

  if (!product) return null;

  // ── Request geolocation then fetch quote ──────────────────────────────────
  const handleGetQuote = useCallback(() => {
    if (!navigator.geolocation) {
      setErrorMsg('Your browser does not support geolocation. Please try a modern browser.');
      setWidgetState(STATE.ERROR);
      return;
    }

    setWidgetState(STATE.LOCATING);
    setQuote(null);
    setErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude: buyerLat, longitude: buyerLng } = position.coords;
        setWidgetState(STATE.FETCHING);
        try {
          const data = await fetchShippingQuote({
            buyerLat,
            buyerLng,
            productId: product._id
          });
          setQuote(data);
          setWidgetState(STATE.SUCCESS);
          setExpanded(true);
        } catch (err) {
          setErrorMsg(err.message || 'Could not generate a shipping quote. Please try again.');
          setWidgetState(STATE.ERROR);
        }
      },
      (geoError) => {
        const messages = {
          1: 'Location access was denied. Please allow location permission in your browser settings and try again.',
          2: 'Your location could not be determined. Please try again.',
          3: 'Location request timed out. Please try again.'
        };
        setErrorMsg(messages[geoError.code] || 'An unknown geolocation error occurred.');
        setWidgetState(STATE.ERROR);
      },
      { timeout: 10000, maximumAge: 60000, enableHighAccuracy: false }
    );
  }, [product._id]);

  const isLoading  = widgetState === STATE.LOCATING || widgetState === STATE.FETCHING;
  const loadingLabel = widgetState === STATE.LOCATING
    ? 'Detecting your location…'
    : 'Calculating route & price…';

  const tierStyle = quote ? (TIER_STYLE[quote.itemVolumeTier] || TIER_STYLE.MEDIUM) : null;

  return (
    <div
      id="f10-shipping-quote-widget"
      className="rounded-2xl border border-[#E5DEC9] bg-white overflow-hidden shadow-sm"
    >
      {/* ── Widget Header ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#F9F4E9] border-b border-[#E9D3A4]">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-full bg-[#1E232A] flex items-center justify-center flex-shrink-0">
            <Truck className="w-3.5 h-3.5 text-[#A17A16]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#1E232A] uppercase tracking-wider block">
              Live Delivery Quote
            </span>
            <span className="text-[10px] text-gray-500 font-mono">
              OpenStreetMap Route Calculation
            </span>
          </div>
        </div>

        {widgetState === STATE.SUCCESS && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-gray-400 hover:text-[#A17A16] transition-colors p-1 rounded-lg hover:bg-white"
            title={expanded ? 'Collapse' : 'Expand'}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* ── Widget Body ────────────────────────────────────────────────────── */}
      <div className="px-5 py-4 space-y-4">

        {/* IDLE / ERROR: CTA */}
        {(widgetState === STATE.IDLE || widgetState === STATE.ERROR) && (
          <div className="space-y-3">
            <p className="text-xs text-gray-500 leading-relaxed">
              Get an instant shipping price quote based on your current location and this item's size.
              Your location is used only for this calculation and is never stored.
            </p>

            <button
              id="f10-get-shipping-quote-btn"
              onClick={handleGetQuote}
              className="w-full gold-gradient-btn py-3 rounded-xl font-mono text-xs font-bold tracking-wider flex items-center justify-center space-x-2.5 shadow-md hover:scale-[1.01] transition-all"
            >
              <LocateFixed className="w-4 h-4" />
              <span>CHECK LIVE DELIVERY QUOTE</span>
              <Zap className="w-3.5 h-3.5" />
            </button>

            {widgetState === STATE.ERROR && (
              <div className="flex items-start space-x-2.5 bg-rose-50 border border-rose-200 rounded-xl p-3">
                <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-rose-700 leading-relaxed">{errorMsg}</p>
              </div>
            )}
          </div>
        )}

        {/* LOADING: Spinner */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-6 space-y-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#E9D3A4] flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-[#A17A16] animate-spin" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-[#A17A16]/20 animate-ping" />
            </div>
            <p className="text-xs font-mono text-gray-500 animate-pulse">{loadingLabel}</p>
          </div>
        )}

        {/* SUCCESS: Full expanded result */}
        {widgetState === STATE.SUCCESS && quote && expanded && (
          <div className="space-y-3 animate-fadeIn">

            {/* Distance + Duration row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F9F4E9] rounded-xl p-3 border border-[#E9D3A4] space-y-1">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A17A16]" />
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">Driving Distance</span>
                </div>
                <span className="font-serif text-xl font-bold text-[#1E232A] block">
                  {quote.distanceKm} km
                </span>
                {quote.distanceSource === 'haversine_estimate' && (
                  <span className="text-[9px] text-amber-600 font-mono">~ Estimated</span>
                )}
                {quote.distanceSource === 'osrm_openstreetmap' && (
                  <span className="text-[9px] text-emerald-600 font-mono flex items-center space-x-0.5">
                    <BadgeCheck className="w-2.5 h-2.5" />
                    <span>OpenStreetMap</span>
                  </span>
                )}
              </div>

              <div className="bg-[#F9F4E9] rounded-xl p-3 border border-[#E9D3A4] space-y-1">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A17A16]" />
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">Drive Time</span>
                </div>
                <span className="font-serif text-xl font-bold text-[#1E232A] block">
                  {quote.drivingDurationMin} min
                </span>
                <span className="text-[9px] text-gray-400 font-mono">Urban driving</span>
              </div>
            </div>

            {/* Item Volume Tier */}
            <div className={`flex items-center justify-between rounded-xl px-4 py-2.5 border ${tierStyle.bg} ${tierStyle.border}`}>
              <div className="flex items-center space-x-2">
                <Package className={`w-4 h-4 ${tierStyle.text}`} />
                <span className={`text-xs font-mono font-bold ${tierStyle.text}`}>
                  {tierStyle.label}
                </span>
              </div>
              <span className={`text-[10px] font-mono ${tierStyle.text}`}>
                Volume Surcharge: ৳{quote.pricing.volumeSurcharge}
              </span>
            </div>

            {/* Seller Origin */}
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="font-mono">
                From <span className="font-bold text-gray-700">{quote.sellerName}</span>
                {' · '}{quote.sellerAddress}
              </span>
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-[#E5DEC9] pt-3 space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-500">
                  Base fee ({quote.distanceKm} km × ৳{quote.pricing.ratePerKm}/km)
                </span>
                <span className="font-bold text-gray-700">৳{quote.pricing.baseFee}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-500">{tierStyle.label} surcharge</span>
                <span className="font-bold text-gray-700">৳{quote.pricing.volumeSurcharge}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#E9D3A4]">
                <span className="text-sm font-mono font-bold text-[#1E232A]">
                  Quoted Delivery Fee
                </span>
                <span className="font-serif text-2xl font-bold text-[#A17A16]">
                  ৳{quote.pricing.totalFee}
                </span>
              </div>
            </div>

            {/* Disclaimer + Recalculate */}
            <div className="space-y-2">
              <p className="text-[10px] text-gray-400 font-mono leading-relaxed">
                * Quote is indicative and subject to courier availability, traffic, and agreed pickup/delivery windows.
                Final fee confirmed at checkout.
              </p>
              <button
                onClick={handleGetQuote}
                className="text-[10px] font-mono text-[#A17A16] hover:underline flex items-center space-x-1"
              >
                <LocateFixed className="w-3.5 h-3.5" />
                <span>Recalculate with current location</span>
              </button>
            </div>
          </div>
        )}

        {/* SUCCESS: Collapsed summary pill */}
        {widgetState === STATE.SUCCESS && quote && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="w-full flex items-center justify-between text-xs font-mono text-gray-600 hover:text-[#A17A16] transition-colors py-1"
          >
            <span className="flex items-center space-x-2">
              <Truck className="w-3.5 h-3.5 text-[#A17A16]" />
              <span>
                {quote.distanceKm} km · {quote.drivingDurationMin} min ·{' '}
                <span className="font-bold text-[#A17A16]">৳{quote.pricing.totalFee} delivery</span>
              </span>
            </span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}

      </div>
    </div>
  );
};
