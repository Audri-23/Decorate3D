import React, { useState, useEffect, useCallback } from 'react';
import {
  Truck, MapPin, Package, Clock, ChevronDown, ChevronUp,
  CheckCircle, Lock, AlertCircle, RefreshCw,
  Navigation, Ruler, User, Filter,
  ArrowRight, Loader2, BadgeCheck, XCircle, Trophy, Eye, Radio
} from 'lucide-react';
import { fetchDispatchJobs, lockDispatchJob, completeDispatchJob } from './dispatchApi.js';

// ─── Constants ────────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  OPEN:      { label: 'AVAILABLE', color: 'bg-emerald-500', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: '#10b981' },
  BIDDING:   { label: 'AVAILABLE', color: 'bg-emerald-500', textColor: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', dot: '#10b981' },
  LOCKED:    { label: 'ACCEPTED',  color: 'bg-rose-500',    textColor: 'text-rose-700',    bg: 'bg-rose-50',    border: 'border-rose-200',    dot: '#ef4444' },
  COMPLETED: { label: 'COMPLETED', color: 'bg-slate-500',   textColor: 'text-slate-600',   bg: 'bg-slate-50',   border: 'border-slate-200',   dot: '#64748b' }
};

const VOLUME_CONFIG = {
  SMALL:  { label: 'SMALL ITEM',  icon: '📦', color: 'text-sky-600',    bg: 'bg-sky-50',    border: 'border-sky-200' },
  MEDIUM: { label: 'MEDIUM ITEM', icon: '🛋️', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  LARGE:  { label: 'LARGE ITEM',  icon: '🏠', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' }
};

const FILTER_TABS = ['ALL', 'OPEN', 'LOCKED', 'COMPLETED'];

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

function DispatchJobCard({ job, user, onRefresh, onNotify, onTrackJob }) {
  const [expanded, setExpanded]   = useState(false);
  const [loading, setLoading]     = useState('');  // 'lock' | 'complete'
  const [localJob, setLocalJob]   = useState(job);

  useEffect(() => { setLocalJob(job); }, [job]);

  const statusCfg  = STATUS_CONFIG[localJob.status] || STATUS_CONFIG.OPEN;
  const volumeCfg  = VOLUME_CONFIG[localJob.itemVolumeTier] || VOLUME_CONFIG.MEDIUM;

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

  const handleLock = async () => {
    if (!isCourier) {
      onNotify('error', 'Courier Access Required', 'You must be logged in as a verified courier to accept delivery jobs.');
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
        onNotify('success', 'Job Accepted & Locked! 🔒', `You have committed to delivering "${localJob.productTitle}". Contact the seller to arrange pickup.`);
        onRefresh();
      } else {
        onNotify('error', 'Acceptance Failed', result.message || 'Could not accept job.');
      }
    } catch {
      onNotify('error', 'Network Error', 'Failed to reach dispatch server.');
    }
    setLoading('');
  };

  const handleComplete = async () => {
    if (!isCourier) {
      onNotify('error', 'Courier Access Required', 'Only the assigned courier can mark a job as delivered.');
      return;
    }
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
                  {localJob.status === 'LOCKED' ? <Lock className="w-2.5 h-2.5" /> : localJob.status === 'COMPLETED' ? <Trophy className="w-2.5 h-2.5" /> : <CheckCircle className="w-2.5 h-2.5" />}
                  {statusCfg.label}
                </span>
                <h3 className="font-serif text-base font-bold text-gray-900 leading-tight line-clamp-2 pr-2">
                  {localJob.productTitle}
                </h3>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[10px] font-mono text-gray-400">DELIVERY FEE</p>
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
              <p className="text-[10px] font-mono text-gray-400 leading-none">PICKUP LOCATION</p>
              <p className="text-xs font-semibold text-gray-800 mt-0.5">{localJob.pickupAddress}</p>
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
              <p className="text-[10px] font-mono text-gray-400 leading-none">DROP-OFF LOCATION</p>
              <p className="text-xs font-semibold text-gray-800 mt-0.5">{localJob.dropoffAddress}</p>
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
          {expanded ? 'Hide details' : 'View item details'}
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
                Volume Tier: {localJob.itemVolumeTier} — Volume surcharge included
              </span>
            </div>
          </div>

          {/* Locked info */}
          {isLocked && (
            <div className="flex items-center gap-3 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3">
              <Lock className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-rose-700">Job Accepted & Locked</p>
                <p className="text-xs text-rose-600">Assigned to courier <strong>{localJob.lockedByCourierName}</strong></p>
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
                Log in as a <strong>Courier</strong> to accept available delivery jobs.
              </p>
            </div>
          )}

          {/* Courier actions — Accept / Lock Job directly */}
          {isCourier && !isLocked && (
            <button
              onClick={handleLock}
              disabled={loading === 'lock'}
              className="w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading === 'lock' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4 text-emerald-950" />}
              ACCEPT &amp; LOCK THIS JOB (৳{localJob.suggestedFeeBDT})
            </button>
          )}

          {/* Locked — assigned courier's complete button */}
          {isCourier && isMyLock && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <BadgeCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <p className="text-xs text-emerald-700 font-medium">
                  You have accepted this delivery. Contact the seller to arrange pickup.
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
  const isCourier = user?.role === 'courier';
  const [jobs, setJobs]               = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [activeFilter, setActiveFilter] = useState(isCourier ? 'OPEN' : 'ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastRefresh, setLastRefresh] = useState(null);

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
    open:      jobs.filter(j => j.status === 'OPEN' || j.status === 'BIDDING').length,
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
    <div id="dispatch-board-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">

      {/* ── Hero Header ── */}
      <div className="bg-[#1E232A] text-white rounded-3xl p-6 sm:p-8 border border-[#A17A16]/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#A17A16]/20 rounded-2xl flex items-center justify-center border border-[#A17A16]/40">
                <Truck className="w-5 h-5 text-[#C9980A]" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Logistics &amp; Delivery Hub
              </h1>
            </div>
            <p className="text-sm text-gray-300 mt-1 max-w-lg">
              Browse available local delivery jobs, claim assignments instantly, and manage live GPS tracking.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-2 w-full md:w-auto">
            {[
              { label: 'AVAILABLE', value: allStats.open,      color: 'text-emerald-400' },
              { label: 'ACCEPTED',  value: allStats.locked,    color: 'text-rose-400' },
              { label: 'DELIVERED', value: allStats.completed, color: 'text-slate-400' }
            ].map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center min-w-[90px]">
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
              You are viewing as a <strong>{user?.role || 'guest'}</strong>. Log in as a <strong>Courier</strong> to accept available delivery jobs.
            </p>
          </div>
        )}
        {isCourier && (
          <div className="mt-4 flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-400/30 rounded-xl px-4 py-3">
            <BadgeCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <p className="text-xs text-emerald-300">
              Verified Courier: <strong>{user?.name}</strong> — You can browse and accept delivery jobs.
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

    </div>
  );
}

