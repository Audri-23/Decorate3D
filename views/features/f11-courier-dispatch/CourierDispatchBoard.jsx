import React, { useState, useEffect, useCallback } from 'react';
import {
  Truck, MapPin, Package, Clock, ChevronDown, ChevronUp,
  CheckCircle, Lock, Hammer, AlertCircle, RefreshCw,
  Navigation, Ruler, DollarSign, User, Star, Filter,
  ArrowRight, Loader2, BadgeCheck, XCircle, Trophy, Eye, Radio
} from 'lucide-react';
import { fetchDispatchJobs, placeBidOnJob, lockDispatchJob, completeDispatchJob } from './dispatchApi.js';

// ─── Constants ────────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  OPEN:      { label: 'OPEN',      color: 'bg-emerald-500', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: '#10b981' },
  BIDDING:   { label: 'BIDDING',   color: 'bg-amber-500',   textColor: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200',   dot: '#f59e0b' },
  LOCKED:    { label: 'LOCKED',    color: 'bg-rose-500',    textColor: 'text-rose-700',    bg: 'bg-rose-50',    border: 'border-rose-200',    dot: '#ef4444' },
  COMPLETED: { label: 'COMPLETED', color: 'bg-slate-500',   textColor: 'text-slate-600',   bg: 'bg-slate-50',   border: 'border-slate-200',   dot: '#64748b' }
};

const VOLUME_CONFIG = {
  SMALL:  { label: 'SMALL ITEM',  icon: '📦', color: 'text-sky-600',    bg: 'bg-sky-50',    border: 'border-sky-200' },
  MEDIUM: { label: 'MEDIUM ITEM', icon: '🛋️', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  LARGE:  { label: 'LARGE ITEM',  icon: '🏠', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' }
};

const FILTER_TABS = ['ALL', 'OPEN', 'BIDDING', 'LOCKED', 'COMPLETED'];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatBadge({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-[#E5DEC9] shadow-sm">
      <Icon className={`w-4 h-4 ${color}`} />
      <div>
        <p className="text-[10px] font-mono text-gray-400 uppercase leading-none">{label}</p>
        <p className="text-sm font-bold text-gray-900 leading-tight">{value}</p>
      </div>
    </div>
  );
}

function CoordPill({ lat, lng, label, color }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border ${color}`}>
      <MapPin className="w-3 h-3 flex-shrink-0" />
      <span className="truncate max-w-[180px]">{label}</span>
      <span className="opacity-60">· {lat.toFixed(4)}, {lng.toFixed(4)}</span>
    </div>
  );
}

function BidCard({ bid, isLowest }) {
  return (
    <div className={`flex items-center justify-between px-3 py-2.5 rounded-xl border ${isLowest ? 'border-emerald-200 bg-emerald-50' : 'border-[#E5DEC9] bg-[#FBF9F5]'}`}>
      <div className="flex items-center gap-2.5">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${isLowest ? 'bg-emerald-500' : 'bg-[#1E232A]'}`}>
          {bid.courierName?.charAt(0) || 'C'}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-gray-800">{bid.courierName}</span>
            {isLowest && <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">LOWEST BID</span>}
          </div>
          {bid.note && <p className="text-[11px] text-gray-500 mt-0.5 max-w-[200px] truncate">"{bid.note}"</p>}
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-[#A17A16]">৳{bid.bidAmountBDT}</p>
        <p className="text-[10px] text-gray-400 font-mono">
          {bid.placedAt ? new Date(bid.placedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
        </p>
      </div>
    </div>
  );
}

function DispatchJobCard({ job, user, onRefresh, onNotify, onTrackJob }) {
  const [expanded, setExpanded]       = useState(false);
  const [bidAmount, setBidAmount]     = useState('');
  const [bidNote, setBidNote]         = useState('');
  const [loading, setLoading]         = useState('');  // 'bid' | 'lock' | 'complete'
  const [localJob, setLocalJob]       = useState(job);

  useEffect(() => { setLocalJob(job); }, [job]);

  const statusCfg  = STATUS_CONFIG[localJob.status] || STATUS_CONFIG.OPEN;
  const volumeCfg  = VOLUME_CONFIG[localJob.itemVolumeTier] || VOLUME_CONFIG.MEDIUM;
  const sortedBids = [...(localJob.bids || [])].sort((a, b) => a.bidAmountBDT - b.bidAmountBDT);
  const myBid      = sortedBids.find(b => b.courierId === user?.id);
  const lowestBid  = sortedBids[0];

  const timeAgo = (date) => {
    if (!date) return '';
    const diff = Date.now() - new Date(date).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1)  return 'just now';
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  };

  const isCourier   = user?.role === 'courier';
  const isLocked    = localJob.status === 'LOCKED';
  const isMyLock    = isLocked && localJob.lockedByCourierId === user?.id;
  const isCompleted = localJob.status === 'COMPLETED';

  const handleBid = async () => {
    if (!isCourier) {
      onNotify('error', 'Courier Access Required', 'You must be logged in as a verified courier to place bids.');
      return;
    }
    const amount = parseFloat(bidAmount);
    if (!amount || amount < 50) {
      onNotify('error', 'Invalid Bid', 'Bid amount must be at least ৳50.');
      return;
    }
    setLoading('bid');
    try {
      const result = await placeBidOnJob(localJob._id, {
        courierId:    user.id,
        courierName:  user.name,
        bidAmountBDT: amount,
        note:         bidNote.trim()
      });
      if (result.success) {
        setLocalJob(result.job);
        setBidAmount('');
        setBidNote('');
        onNotify('success', 'Bid Placed!', `Your bid of ৳${amount} has been submitted for "${localJob.productTitle}".`);
        onRefresh();
      } else {
        onNotify('error', 'Bid Failed', result.message || 'Could not place bid.');
      }
    } catch {
      onNotify('error', 'Network Error', 'Failed to reach dispatch server.');
    }
    setLoading('');
  };

  const handleLock = async () => {
    if (!isCourier) {
      onNotify('error', 'Courier Access Required', 'You must be logged in as a verified courier to lock jobs.');
      return;
    }
    setLoading('lock');
    try {
      const result = await lockDispatchJob(localJob._id, {
        courierId:   user.id,
        courierName: user.name
      });
      if (result.success) {
        setLocalJob(result.job);
        onNotify('success', 'Job Locked! 🔒', `You have committed to delivering "${localJob.productTitle}". Contact the seller to arrange pickup.`);
        onRefresh();
      } else {
        onNotify('error', 'Lock Failed', result.message || 'Could not lock job.');
      }
    } catch {
      onNotify('error', 'Network Error', 'Failed to reach dispatch server.');
    }
    setLoading('');
  };

  const handleComplete = async () => {
    setLoading('complete');
    try {
      const result = await completeDispatchJob(localJob._id, { courierId: user?.id });
      if (result.success) {
        setLocalJob(result.job);
        onNotify('success', 'Delivery Completed! ✅', `"${localJob.productTitle}" has been marked as delivered. Payment will be released from escrow.`);
        onRefresh();
      } else {
        onNotify('error', 'Update Failed', result.message || 'Could not mark job as completed.');
      }
    } catch {
      onNotify('error', 'Network Error', 'Failed to reach dispatch server.');
    }
    setLoading('');
  };

  return (
    <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 ${isCompleted ? 'opacity-60' : ''} ${statusCfg.border}`}>
      {/* ── Card Header ── */}
      <div className="p-4 sm:p-5">
        <div className="flex gap-4">
          {/* Product thumbnail */}
          <div className="relative flex-shrink-0">
            <img
              src={localJob.productImage}
              alt={localJob.productTitle}
              className="w-20 h-20 object-cover rounded-xl border border-[#E5DEC9]"
            />
            <span className={`absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2 border-white`}
              style={{ backgroundColor: statusCfg.dot }} />
          </div>

          {/* Header info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${statusCfg.bg} ${statusCfg.textColor} border ${statusCfg.border} mb-1`}>
                  {localJob.status === 'LOCKED' ? <Lock className="w-2.5 h-2.5" /> : localJob.status === 'OPEN' ? <CheckCircle className="w-2.5 h-2.5" /> : localJob.status === 'BIDDING' ? <Hammer className="w-2.5 h-2.5" /> : <Trophy className="w-2.5 h-2.5" />}
                  {statusCfg.label}
                </span>
                <h3 className="font-serif text-base font-bold text-gray-900 leading-tight line-clamp-2 pr-2">
                  {localJob.productTitle}
                </h3>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[10px] font-mono text-gray-400">SUGGESTED FEE</p>
                <p className="text-lg font-bold text-[#A17A16]">৳{localJob.suggestedFeeBDT}</p>
              </div>
            </div>

            {/* Volume & Distance badges */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-1 rounded-lg border ${volumeCfg.bg} ${volumeCfg.color} ${volumeCfg.border}`}>
                {volumeCfg.icon} {volumeCfg.label}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-1 rounded-lg border bg-[#F9F4E9] text-[#7A5C10] border-[#E9D3A4]">
                <Navigation className="w-3 h-3" /> {localJob.distanceKm} km
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-mono">
                <Clock className="w-3 h-3" /> {timeAgo(localJob.createdAt)}
              </span>
              {localJob.bids?.length > 0 && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-1 rounded-lg border bg-violet-50 text-violet-700 border-violet-200">
                  <Hammer className="w-3 h-3" /> {localJob.bids.length} bid{localJob.bids.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Route strip ── */}
        <div className="mt-3.5 p-3 bg-[#FBF9F5] rounded-xl border border-[#E5DEC9] space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center mt-0.5">
              <MapPin className="w-3 h-3 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono text-gray-400 leading-none">PICKUP</p>
              <p className="text-xs font-semibold text-gray-800 mt-0.5">{localJob.pickupAddress}</p>
              <p className="text-[10px] font-mono text-gray-400">{localJob.pickupLat?.toFixed(4)}, {localJob.pickupLng?.toFixed(4)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-2.5">
            <div className="w-[2px] h-4 bg-[#E5DEC9] rounded" />
            <ArrowRight className="w-3 h-3 text-gray-300" />
          </div>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-rose-500 flex-shrink-0 flex items-center justify-center mt-0.5">
              <MapPin className="w-3 h-3 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono text-gray-400 leading-none">DROP-OFF</p>
              <p className="text-xs font-semibold text-gray-800 mt-0.5">{localJob.dropoffAddress}</p>
              <p className="text-[10px] font-mono text-gray-400">{localJob.dropoffLat?.toFixed(4)}, {localJob.dropoffLng?.toFixed(4)}</p>
            </div>
          </div>
        </div>

        {/* Seller/Buyer names */}
        <div className="flex gap-3 mt-3">
          {localJob.sellerName && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <User className="w-3 h-3" />
              <span>Seller: <strong className="text-gray-700">{localJob.sellerName}</strong></span>
            </div>
          )}
          {localJob.buyerName && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <User className="w-3 h-3" />
              <span>Buyer: <strong className="text-gray-700">{localJob.buyerName}</strong></span>
            </div>
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="w-full mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-dashed border-[#E5DEC9]"
        >
          <Eye className="w-3.5 h-3.5" />
          {expanded ? 'Hide details' : 'View dimensions & bids'}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* ── Expanded Section ── */}
      {expanded && (
        <div className="border-t border-[#E5DEC9] p-4 sm:p-5 space-y-4 bg-[#FDFCFA]">
          {/* Item Dimensions */}
          <div>
            <p className="text-[10px] font-mono font-bold text-gray-400 uppercase mb-2">Item Dimensions</p>
            <div className="grid grid-cols-3 gap-2">
              {['width', 'depth', 'height'].map(dim => (
                <div key={dim} className="bg-white rounded-xl border border-[#E5DEC9] p-2.5 text-center">
                  <p className="text-[10px] font-mono text-gray-400 uppercase">{dim}</p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    {localJob.dimensions?.[dim] || '—'}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full border ${volumeCfg.bg} ${volumeCfg.color} ${volumeCfg.border}`}>
                <Ruler className="w-3.5 h-3.5" />
                Volume Tier: {localJob.itemVolumeTier} — Volume surcharge applied
              </span>
            </div>
          </div>

          {/* Bids List */}
          {sortedBids.length > 0 && (
            <div>
              <p className="text-[10px] font-mono font-bold text-gray-400 uppercase mb-2">
                Active Bids ({sortedBids.length})
              </p>
              <div className="space-y-2">
                {sortedBids.map((bid, i) => (
                  <BidCard key={bid.courierId + i} bid={bid} isLowest={i === 0} />
                ))}
              </div>
            </div>
          )}

          {/* Locked info */}
          {isLocked && (
            <div className="flex items-center gap-3 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3">
              <Lock className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-rose-700">Job Locked</p>
                <p className="text-xs text-rose-600">Assigned to <strong>{localJob.lockedByCourierName}</strong></p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Action Footer ── */}
      {!isCompleted && (
        <div className="border-t border-[#E5DEC9] p-4 sm:p-5">
          {/* Not a courier */}
          {!isCourier && (
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <p className="text-xs text-amber-700 font-medium">
                Log in as a <strong>Courier</strong> to bid or lock delivery jobs.
              </p>
            </div>
          )}

          {/* Courier actions */}
          {isCourier && !isLocked && (
            <div className="space-y-3">
              {/* My current bid info */}
              {myBid && (
                <div className="flex items-center justify-between bg-[#F9F4E9] border border-[#E9D3A4] rounded-xl px-3 py-2.5">
                  <span className="text-xs text-[#7A5C10] font-medium">Your bid:</span>
                  <span className="text-sm font-bold text-[#A17A16]">৳{myBid.bidAmountBDT}</span>
                </div>
              )}

              {/* Bid input */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">৳</span>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={e => setBidAmount(e.target.value)}
                    placeholder={`Suggest ~৳${localJob.suggestedFeeBDT}`}
                    min="50"
                    className="w-full pl-7 pr-3 py-2.5 text-sm border border-[#E5DEC9] rounded-xl focus:outline-none focus:border-[#A17A16] focus:ring-1 focus:ring-[#A17A16]/30 bg-white font-mono"
                  />
                </div>
                <button
                  onClick={handleBid}
                  disabled={loading === 'bid'}
                  className="px-4 py-2.5 bg-[#1E232A] hover:bg-[#2d3540] text-white text-xs font-bold rounded-xl transition-colors disabled:opacity-50 flex items-center gap-1.5 whitespace-nowrap"
                >
                  {loading === 'bid' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Hammer className="w-3.5 h-3.5" />}
                  {myBid ? 'UPDATE BID' : 'PLACE BID'}
                </button>
              </div>

              {/* Bid note */}
              <input
                type="text"
                value={bidNote}
                onChange={e => setBidNote(e.target.value)}
                placeholder="Add a note to your bid (optional)"
                maxLength={100}
                className="w-full px-3 py-2.5 text-xs border border-[#E5DEC9] rounded-xl focus:outline-none focus:border-[#A17A16] focus:ring-1 focus:ring-[#A17A16]/30 bg-white text-gray-600"
              />

              {/* Lock job button */}
              <button
                onClick={handleLock}
                disabled={loading === 'lock'}
                className="w-full gold-gradient-btn py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading === 'lock' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                LOCK & ACCEPT THIS JOB
              </button>
            </div>
          )}

          {/* Locked — assigned courier's complete button */}
          {isCourier && isMyLock && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <BadgeCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <p className="text-xs text-emerald-700 font-medium">
                  You have locked this delivery. Contact the seller to arrange pickup.
                </p>
              </div>
              <button
                onClick={handleComplete}
                disabled={loading === 'complete'}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              >
                {loading === 'complete' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                MARK AS DELIVERED
              </button>
            </div>
          )}

          {/* Locked — another courier took it */}
          {isCourier && isLocked && !isMyLock && (
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <p className="text-xs text-slate-500">
                This job has been accepted by <strong>{localJob.lockedByCourierName}</strong>.
              </p>
            </div>
          )}

          {/* ── TRACK LIVE button — visible to all roles on LOCKED jobs ── */}
          {isLocked && (
            <button
              onClick={() => onTrackJob?.(localJob)}
              className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#1E232A] hover:bg-[#2d3540] text-white text-xs font-bold rounded-xl border border-[#A17A16]/40 hover:border-[#C9980A] transition-all group shadow-sm"
            >
              <Radio className="w-3.5 h-3.5 text-[#C9980A] group-hover:animate-pulse" />
              <span>TRACK LIVE DELIVERY</span>
              <span className="ml-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          )}
        </div>
      )}

      {/* Completed banner */}
      {isCompleted && (
        <div className="border-t border-[#E5DEC9] px-4 py-3 bg-slate-50 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#A17A16]" />
          <p className="text-xs font-mono font-bold text-slate-500">DELIVERY COMPLETED — Escrow Payment Released</p>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function CourierDispatchBoard({ user, onNotify, onTrackJob }) {
  const [jobs, setJobs]               = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastRefresh, setLastRefresh] = useState(null);

  const isCourier = user?.role === 'courier';

  const loadJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const filters = {};
      if (activeFilter !== 'ALL') filters.status = activeFilter;
      const data = await fetchDispatchJobs(filters);
      if (data.success) {
        setJobs(data.jobs || []);
        setLastRefresh(new Date());
      } else {
        setError(data.message || 'Failed to load dispatch jobs.');
      }
    } catch (e) {
      setError('Cannot reach dispatch server. Ensure the backend is running.');
    }
    setLoading(false);
  }, [activeFilter]);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  // Stats computed from jobs
  const allStats = {
    open:      jobs.filter(j => j.status === 'OPEN').length,
    bidding:   jobs.filter(j => j.status === 'BIDDING').length,
    locked:    jobs.filter(j => j.status === 'LOCKED').length,
    completed: jobs.filter(j => j.status === 'COMPLETED').length
  };

  // Apply search filter locally
  const filteredJobs = jobs.filter(j => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      j.productTitle?.toLowerCase().includes(q) ||
      j.pickupAddress?.toLowerCase().includes(q) ||
      j.dropoffAddress?.toLowerCase().includes(q) ||
      j.sellerName?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">

      {/* ── Hero Header ── */}
      <div className="bg-[#1E232A] text-white rounded-3xl p-6 sm:p-8 border border-[#A17A16]/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#A17A16]/20 rounded-2xl flex items-center justify-center border border-[#A17A16]/40">
                <Truck className="w-5 h-5 text-[#C9980A]" />
              </div>
              <div>
                <span className="gold-badge text-[10px] px-2.5 py-1 rounded-full uppercase tracking-widest">
                  F11 · COURIER DISPATCH BOARD
                </span>
              </div>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Furniture Transport Dispatch Hub
            </h1>
            <p className="text-sm text-gray-300 mt-1.5 max-w-lg">
              Browse open delivery jobs, inspect item dimensions and GPS coordinates, place competitive bids, and lock jobs to commit to delivery.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
            {[
              { label: 'OPEN',      value: allStats.open,      color: 'text-emerald-400' },
              { label: 'BIDDING',   value: allStats.bidding,   color: 'text-amber-400' },
              { label: 'LOCKED',    value: allStats.locked,    color: 'text-rose-400' },
              { label: 'DONE',      value: allStats.completed, color: 'text-slate-400' }
            ].map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-3 py-3 text-center min-w-[70px]">
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[10px] font-mono text-gray-400 mt-0.5 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courier role notice */}
        {!isCourier && (
          <div className="mt-4 flex items-center gap-2.5 bg-amber-500/10 border border-amber-400/30 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <p className="text-xs text-amber-300">
              You are viewing as a <strong>{user?.role || 'guest'}</strong>. Log in as a <strong>Courier</strong> at <code className="bg-white/10 px-1.5 py-0.5 rounded">/courier</code> to bid on or lock delivery jobs.
            </p>
          </div>
        )}
        {isCourier && (
          <div className="mt-4 flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-400/30 rounded-xl px-4 py-3">
            <BadgeCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="text-xs text-emerald-300">
              Verified Courier: <strong>{user?.name}</strong> — You can bid and lock delivery jobs.
            </p>
          </div>
        )}
      </div>

      {/* ── Toolbar ── */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        {/* Status filter tabs */}
        <div className="flex items-center gap-1.5 bg-white border border-[#E5DEC9] rounded-2xl p-1.5 shadow-sm flex-wrap">
          {FILTER_TABS.map(tab => {
            const cfg = tab !== 'ALL' ? STATUS_CONFIG[tab] : null;
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1E232A] text-white shadow-sm'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cfg && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.dot }} />}
                {tab}
              </button>
            );
          })}
        </div>

        {/* Search + Refresh */}
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-52">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search jobs..."
              className="w-full pl-8 pr-3 py-2.5 text-xs border border-[#E5DEC9] rounded-xl focus:outline-none focus:border-[#A17A16] focus:ring-1 focus:ring-[#A17A16]/30 bg-white"
            />
          </div>
          <button
            onClick={loadJobs}
            disabled={loading}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-xs font-bold text-gray-600 hover:border-[#A17A16] hover:text-[#A17A16] transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Last refresh time */}
      {lastRefresh && (
        <p className="text-[11px] font-mono text-gray-400 text-right -mt-2">
          Last updated: {lastRefresh.toLocaleTimeString()}
        </p>
      )}

      {/* ── Error State ── */}
      {error && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
          <div>
            <p className="font-bold text-rose-700 text-sm">Failed to Load Jobs</p>
            <p className="text-xs text-rose-500 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* ── Loading skeleton ── */}
      {loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-2xl border border-[#E5DEC9] p-5 animate-pulse space-y-3">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-100" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                  <div className="h-3 bg-gray-100 rounded w-2/3" />
                </div>
              </div>
              <div className="h-20 bg-gray-100 rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {/* ── Empty State ── */}
      {!loading && !error && filteredJobs.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#E5DEC9]">
          <Package className="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <h3 className="font-serif text-xl font-bold text-gray-400">No Jobs Found</h3>
          <p className="text-sm text-gray-400 mt-1">
            {activeFilter !== 'ALL'
              ? `No dispatch jobs with status "${activeFilter}".`
              : 'No dispatch jobs are available right now.'}
          </p>
          <button onClick={loadJobs} className="mt-4 text-xs font-bold text-[#A17A16] underline">
            Refresh board
          </button>
        </div>
      )}

      {/* ── Jobs Grid ── */}
      {!loading && !error && filteredJobs.length > 0 && (
        <>
          <p className="text-xs font-mono text-gray-400">
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
            {activeFilter !== 'ALL' ? ` · Filter: ${activeFilter}` : ''}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredJobs.map(job => (
              <DispatchJobCard
                key={job._id}
                job={job}
                user={user}
                onRefresh={loadJobs}
                onNotify={(type, title, msg) => onNotify?.(type, title, msg)}
                onTrackJob={onTrackJob}
              />
            ))}
          </div>
        </>
      )}

      {/* ── How it works ── */}
      <div className="bg-white rounded-3xl border border-[#E5DEC9] p-6 shadow-sm">
        <h3 className="font-serif text-base font-bold text-gray-900 mb-4">How Courier Dispatch Works</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { step: '01', icon: Package, title: 'Browse Jobs', desc: 'View open delivery jobs with item dimensions and GPS coordinates.' },
            { step: '02', icon: Hammer, title: 'Place a Bid', desc: 'Submit a competitive BDT price bid on any OPEN or BIDDING job.' },
            { step: '03', icon: Lock, title: 'Lock the Job', desc: 'Commit to a delivery by locking the job — it becomes yours exclusively.' },
            { step: '04', icon: CheckCircle, title: 'Deliver & Earn', desc: 'Complete delivery and get paid as escrow funds are released.' }
          ].map(s => (
            <div key={s.step} className="text-center space-y-2">
              <div className="w-10 h-10 bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl flex items-center justify-center mx-auto">
                <s.icon className="w-5 h-5 text-[#A17A16]" />
              </div>
              <p className="text-[10px] font-mono font-bold text-[#A17A16]">STEP {s.step}</p>
              <p className="text-xs font-bold text-gray-900">{s.title}</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
