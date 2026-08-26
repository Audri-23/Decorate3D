import React, { useState, useEffect } from 'react';
import { AlertOctagon, CheckCircle, RefreshCw, ShieldAlert, DollarSign, ArrowRight, User, AlertCircle, FileText } from 'lucide-react';

export function DisputeDashboard() {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedDispute, setSelectedDispute] = useState(null);

  // Split form state
  const [splitSellerAmt, setSplitSellerAmt] = useState('');
  const [splitBuyerAmt, setSplitBuyerAmt] = useState('');
  const [resolving, setResolving] = useState(false);
  const [resolveError, setResolveError] = useState('');
  const [resolveSuccess, setResolveSuccess] = useState('');

  useEffect(() => {
    loadDisputes(true);

    const intervalId = setInterval(() => {
      loadDisputes(false);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [statusFilter]);

  const loadDisputes = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    if (showLoading) setError('');

    try {
      const res = await fetch(`/api/disputes?status=${statusFilter}`);
      const data = await res.json();
      if (data.success) {
        setDisputes(data.disputes || []);
      } else {
        setError('Could not load disputes.');
      }
    } catch (err) {
      setError('Server error loading dispute records.');
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  const handleResolve = async (disputeId, outcome) => {
    setResolving(true);
    setResolveError('');
    setResolveSuccess('');

    try {
      const payload = {
        resolutionOutcome: outcome,
        resolutionNote: `Admin mediation outcome: ${outcome}`,
        sellerSplitAmount: Number(splitSellerAmt || 0),
        buyerRefundAmount: Number(splitBuyerAmt || 0)
      };

      const res = await fetch(`/api/disputes/${disputeId}/resolve`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success) {
        setResolveSuccess(`Dispute resolved as ${outcome}!`);
        setSelectedDispute(null);
        loadDisputes(false);
      } else {
        setResolveError(data.error || 'Failed to resolve dispute.');
      }
    } catch (err) {
      setResolveError('Network error resolving dispute.');
    } finally {
      setResolving(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">

      {/* Admin Dark Banner */}
      <div className="bg-[#1E232A] text-white rounded-3xl p-6 sm:p-8 border border-[#A17A16]/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="gold-badge text-xs px-3 py-1 rounded-full uppercase">ADMIN MEDIATION PORTAL</span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-3">Escrow Dispute Dashboard</h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl">
              Review flagged buyer and seller disputes, inspect evidence photos, and issue binding resolutions (Escrow Release, Full Refund, or Partial Split).
            </p>
          </div>
          <button
            onClick={() => loadDisputes(true)}
            className="gold-gradient-btn px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 shadow-xl whitespace-nowrap min-h-[44px]"
          >
            <RefreshCw className="w-4 h-4" />
            <span>REFRESH</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {['ALL', 'OPEN', 'RESOLVED'].map((filterKey) => (
          <button
            key={filterKey}
            onClick={() => setStatusFilter(filterKey)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-colors whitespace-nowrap min-h-[44px] ${
              statusFilter === filterKey
                ? 'bg-[#1E232A] text-[#A17A16] border border-[#A17A16]'
                : 'bg-white text-gray-600 border border-[#E5DEC9] hover:border-[#A17A16]'
            }`}
          >
            {filterKey} DISPUTES
          </button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-16 text-gray-400 text-sm">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-[#A17A16]" />
          Loading dispute cases...
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="flex items-center space-x-3 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Success Notice */}
      {resolveSuccess && (
        <div className="flex items-center space-x-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm font-bold">
          <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
          <span>{resolveSuccess}</span>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && disputes.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DEC9] text-gray-400 text-sm space-y-2 p-6">
          <ShieldAlert className="w-10 h-10 mx-auto text-gray-300" />
          <p className="font-bold text-gray-700">No disputes found</p>
          <p className="text-xs text-gray-500">There are currently no active or historical dispute cases matching this filter.</p>
        </div>
      )}

      {/* Dispute Cards Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {disputes.map((dispute) => {
            const isOpenCase = dispute.status === 'OPEN' || dispute.status === 'UNDER_REVIEW';

            return (
              <div key={dispute._id} className="bg-white rounded-2xl border border-[#E5DEC9] shadow-sm overflow-hidden p-6 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700">
                    DISPUTE #{dispute._id}
                  </span>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                    isOpenCase ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {dispute.status}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-1.5 text-xs text-gray-600">
                  <p className="font-bold text-gray-900 text-sm">Reason: {dispute.reason}</p>
                  <p><strong className="text-gray-900">Raised By:</strong> {dispute.raisedBy} ({dispute.raisedByEmail})</p>
                  <p><strong className="text-gray-900">Order ID:</strong> {dispute.orderId}</p>
                  <p className="bg-[#FBF9F5] p-3 rounded-xl border border-[#E5DEC9] text-gray-800 mt-2">
                    "{dispute.description}"
                  </p>
                </div>

                {/* Evidence Photos */}
                {dispute.evidenceImageUrls && dispute.evidenceImageUrls.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-[11px] font-bold text-gray-500 uppercase">Uploaded Evidence:</p>
                    <div className="flex gap-2 overflow-x-auto">
                      {dispute.evidenceImageUrls.map((url, idx) => (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                          <img src={url} alt="Evidence" className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resolution Outcomes or Action */}
                {dispute.status === 'RESOLVED' ? (
                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs font-mono text-purple-900 space-y-1">
                    <p className="font-bold">RESOLVED OUTCOME: {dispute.resolutionOutcome}</p>
                    <p className="text-[11px] text-purple-700">{dispute.resolutionNote}</p>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-gray-100 space-y-3">
                    <p className="text-xs font-bold text-gray-700 uppercase">Admin Resolution Actions:</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        onClick={() => handleResolve(dispute._id, 'RELEASED_TO_SELLER')}
                        disabled={resolving}
                        className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm min-h-[44px]"
                      >
                        RELEASE TO SELLER
                      </button>

                      <button
                        onClick={() => handleResolve(dispute._id, 'REFUNDED_TO_BUYER')}
                        disabled={resolving}
                        className="px-3 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-xs shadow-sm min-h-[44px]"
                      >
                        FULL REFUND TO BUYER
                      </button>
                    </div>

                    {/* Partial Split Drawer Toggle */}
                    <button
                      onClick={() => setSelectedDispute(selectedDispute === dispute._id ? null : dispute._id)}
                      className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold text-xs min-h-[44px]"
                    >
                      {selectedDispute === dispute._id ? 'CANCEL CUSTOM SPLIT' : 'MANUAL PARTIAL SPLIT...'}
                    </button>

                    {selectedDispute === dispute._id && (
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                        <div className="text-[11px] font-mono text-gray-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                          <strong>Formula:</strong> Sum of Splitted (Seller Split + Buyer Refund) = Total Price − Platform Commission (10%).
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase">Seller Split ($)</label>
                            <input
                              type="number"
                              step="0.01"
                              placeholder="e.g. 150.00"
                              value={splitSellerAmt}
                              onChange={(e) => setSplitSellerAmt(e.target.value)}
                              className="w-full p-2 text-xs border rounded-lg bg-white"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase">Buyer Refund ($)</label>
                            <input
                              type="number"
                              step="0.01"
                              placeholder="e.g. 57.00"
                              value={splitBuyerAmt}
                              onChange={(e) => setSplitBuyerAmt(e.target.value)}
                              className="w-full p-2 text-xs border rounded-lg bg-white"
                            />
                          </div>
                        </div>

                        <button
                          onClick={() => handleResolve(dispute._id, 'SPLIT')}
                          disabled={resolving}
                          className="w-full bg-[#1E232A] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm min-h-[44px]"
                        >
                          CONFIRM SPLIT RESOLUTION
                        </button>
                      </div>
                    )}

                    {resolveError && (
                      <div className="p-2 bg-rose-50 text-rose-700 text-xs rounded-lg">
                        {resolveError}
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
