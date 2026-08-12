import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Clock, DollarSign, AlertCircle, RefreshCw, Building2, UserCheck } from 'lucide-react';

// This page shows all orders that are currently locked in Escrow.
// Escrow means: the buyer's money is held safely and will NOT be released
// to the seller until the buyer confirms physical delivery using an OTP code.

export function EscrowVaultPage({ user }) {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // When the page loads, fetch all escrow orders from the backend
  useEffect(() => {
    loadOrders(true);

    // Dynamic auto-refresh: poll every 5 seconds
    const intervalId = setInterval(() => {
      loadOrders(false);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  async function loadOrders(showLoading = true) {
    if (showLoading) setLoading(true);
    if (showLoading) setError('');

    // If user is not logged in, show nothing
    if (!user || !user.email) {
      setError('You must be logged in to view your escrow orders.');
      setLoading(false);
      return;
    }

    try {
      // Pass the buyer's email so backend only returns THIS buyer's orders
      const response = await fetch(`/api/escrow/orders?buyerEmail=${encodeURIComponent(user.email)}`);
      const data = await response.json();

      if (data.success) {
        setOrders(data.orders);
      } else {
        setError('Could not load escrow orders.');
      }
    } catch (err) {
      setError('Server error. Make sure the backend is running.');
    }

    setLoading(false);
  }

  // Helper: give each escrow status a color and label
  function getStatusStyle(status) {
    if (status === 'LOCKED_IN_ESCROW') return { color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', label: 'Locked in Escrow' };
    if (status === 'DISPATCHED') return { color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', label: 'Dispatched' };
    if (status === 'DELIVERED') return { color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', label: 'Delivered' };
    if (status === 'RELEASED_TO_SELLER') return { color: 'text-gray-700', bg: 'bg-gray-50', border: 'border-gray-200', label: 'Released to Seller' };
    return { color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200', label: status };
  }

  // Calculate totals for the summary cards at the top
  const totalLocked = orders
    .filter(o => o.escrowStatus === 'LOCKED_IN_ESCROW')
    .reduce((sum, o) => sum + o.amount, 0);

  const totalOrders = orders.length;
  const lockedOrders = orders.filter(o => o.escrowStatus === 'LOCKED_IN_ESCROW').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">

      {/* Page Header — dark banner like the Courier and Seller dashboards */}
      <div className="bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="gold-badge text-xs px-3 py-1 rounded-full uppercase"> ESCROW VAULT</span>
            <h1 className="font-serif text-3xl font-bold mt-3">Escrow Holding & Lock System</h1>
            <p className="text-sm text-gray-300 mt-2 max-w-xl">
              All buyer payments are held securely in escrow. Funds are <strong className="text-[#A17A16]">blocked from release</strong> to the seller or courier until the buyer confirms physical delivery with an OTP handover code.
            </p>
          </div>
          <button
            onClick={loadOrders}
            className="gold-gradient-btn px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 shadow-xl whitespace-nowrap"
          >
            <RefreshCw className="w-4 h-4" />
            <span>REFRESH</span>
          </button>
        </div>
      </div>

      {/* Summary Cards — 3 simple stat boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

        <div className="bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-sm space-y-2">
          <span className="text-xs font-mono text-gray-400 font-bold uppercase">Total Orders in System</span>
          <p className="font-serif text-3xl font-bold text-gray-900">{totalOrders}</p>
          <span className="text-xs text-gray-500">All payment records</span>
        </div>

        <div className="bg-[#F9F4E9] rounded-2xl p-6 border border-[#E9D3A4] shadow-sm space-y-2">
          <span className="text-xs font-mono text-[#A17A16] font-bold uppercase">Currently Locked in Escrow</span>
          <p className="font-serif text-3xl font-bold text-[#A17A16]">{lockedOrders}</p>
          <span className="text-xs text-[#A17A16]">Awaiting delivery OTP</span>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-sm space-y-2">
          <span className="text-xs font-mono text-gray-400 font-bold uppercase">Total USD Locked</span>
          <p className="font-serif text-3xl font-bold text-gray-900">${totalLocked.toFixed(2)}</p>
          <span className="text-xs text-gray-500">Payout release blocked</span>
        </div>

      </div>

      {/* Escrow Lock Explanation Box */}
      <div className="bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl p-5 flex items-start space-x-3">
        <ShieldCheck className="w-6 h-6 text-[#A17A16] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-bold text-[#A17A16]">How Escrow Lock Works</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            When a buyer completes Stripe payment, the funds are immediately <strong>locked in escrow</strong>.
            The seller cannot receive any payout and the courier cannot be paid until the buyer physically receives
            the furniture and enters the delivery OTP code. This protects both buyer and seller from fraud.
          </p>
        </div>
      </div>

      {/* Order List */}
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-gray-900">All Escrow Orders</h2>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-16 text-gray-400 text-sm">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-[#A17A16]" />
            Loading escrow orders...
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex items-center space-x-3 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && orders.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DEC9] text-gray-400 text-sm">
            <Lock className="w-10 h-10 mx-auto mb-3 text-gray-300" />
            No escrow orders found. Complete a Stripe checkout first to see orders here.
          </div>
        )}

        {/* Order Cards */}
        {!loading && !error && orders.map((order) => {
          const status = getStatusStyle(order.escrowStatus);

          return (
            <div
              key={order._id}
              className="bg-white rounded-2xl border border-[#E5DEC9] shadow-sm overflow-hidden"
            >
              {/* Card top row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4">

                {/* Left: Order info */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-[#A17A16] shrink-0" />
                    <h3 className="font-serif font-bold text-gray-900 truncate">{order.productTitle}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-mono">Buyer: {order.buyerEmail}</p>
                  <p className="text-xs text-gray-400 font-mono">
                    Stripe ID: {order.stripePaymentIntentId}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(order.createdAt).toLocaleString()}</span>
                  </p>
                </div>

                {/* Right: Status badge */}
                <div className={`px-4 py-2 rounded-xl border text-xs font-bold font-mono uppercase ${status.color} ${status.bg} ${status.border} whitespace-nowrap`}>
                  {status.label}
                </div>

              </div>

              {/* Card bottom: money breakdown */}
              <div className="grid grid-cols-3 divide-x divide-[#E5DEC9] border-t border-[#E5DEC9] bg-[#FBF9F5]">

                <div className="p-4 text-center">
                  <p className="text-xs font-mono text-gray-400 uppercase mb-1">Total Paid</p>
                  <p className="font-serif font-bold text-gray-900">${Number(order.amount).toFixed(2)}</p>
                </div>

                <div className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Building2 className="w-3 h-3 text-[#A17A16]" />
                    <p className="text-xs font-mono text-gray-400 uppercase">Platform (10%)</p>
                  </div>
                  <p className="font-serif font-bold text-[#A17A16]">${Number(order.platformCommissionFee).toFixed(2)}</p>
                </div>

                <div className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <UserCheck className="w-3 h-3 text-emerald-600" />
                    <p className="text-xs font-mono text-gray-400 uppercase">Seller (90%)</p>
                  </div>
                  {order.escrowStatus === 'LOCKED_IN_ESCROW' ? (
                    <p className="font-serif font-bold text-rose-500 text-xs">
                      ${Number(order.sellerEarnings).toFixed(2)} — PAYOUT BLOCKED
                    </p>
                  ) : (
                    <p className="font-serif font-bold text-emerald-600">${Number(order.sellerEarnings).toFixed(2)}</p>
                  )}
                </div>

              </div>

              {/* If locked: show the OTP hint row */}
              {order.escrowStatus === 'LOCKED_IN_ESCROW' && (
                <div className="px-5 py-3 border-t border-amber-100 bg-amber-50 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-amber-700">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Escrow release is <strong>blocked</strong>. Waiting for buyer delivery OTP confirmation.</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-lg border border-amber-200">
                    OTP: {order.otpCode}
                  </span>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
