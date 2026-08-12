import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, CheckCircle, AlertCircle, RefreshCw, Building2, UserCheck, KeyRound } from 'lucide-react';

// This is the SELLER side of the Escrow system.
// The seller can see all orders locked in escrow.
// To unlock the funds, the seller asks the buyer for the OTP at the time of physical delivery.
// The seller enters that OTP here, and the escrow is released.

export function SellerEscrowPanel({ user }) {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // For each order, we track the OTP the seller is typing and the result of the verification
  // We use an object like: { 'orderId': { otp: '1234', status: 'idle' | 'success' | 'error', message: '' } }
  const [otpInputs, setOtpInputs] = useState({});

  useEffect(() => {
    // Initial load
    loadOrders(true);

    // Dynamic auto-refresh: poll every 5 seconds to get new orders instantly
    const intervalId = setInterval(() => {
      loadOrders(false); // pass false so we don't show the loading spinner again
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  async function loadOrders(showLoading = true) {
    if (showLoading) setLoading(true);
    if (showLoading) setError('');
    try {
      // Only fetch orders belonging to this seller that are still LOCKED and need OTP verification
      const sellerEmailQuery = user?.email ? `&sellerEmail=${encodeURIComponent(user.email)}` : '';
      const response = await fetch(`/api/escrow/orders?escrowStatus=LOCKED_IN_ESCROW${sellerEmailQuery}`);
      const data = await response.json();
      if (data.success) {
        // Ensure strictly that only orders belonging to the logged-in seller are shown
        const userEmail = user?.email;
        const filteredOrders = userEmail 
          ? data.orders.filter(order => order.sellerEmail === userEmail)
          : []; // If no user email, show nothing
          
        setOrders(filteredOrders);
        const initialInputs = {};
        filteredOrders.forEach(order => {
          initialInputs[order._id] = { otp: '', status: 'idle', message: '' };
        });
        setOtpInputs(initialInputs);
      } else {
        setError('Could not load orders.');
      }
    } catch (err) {
      setError('Server error. Make sure the backend is running.');
    }
    setLoading(false);
  }

  // Called when seller types in the OTP box for a specific order
  function handleOtpChange(orderId, value) {
    setOtpInputs(prev => ({
      ...prev,
      [orderId]: { ...prev[orderId], otp: value, status: 'idle', message: '' }
    }));
  }

  // Called when seller clicks "Verify & Release" for a specific order
  async function handleVerifyOtp(orderId) {
    const enteredOtp = otpInputs[orderId]?.otp;

    if (!enteredOtp || enteredOtp.length < 4) {
      setOtpInputs(prev => ({
        ...prev,
        [orderId]: { ...prev[orderId], status: 'error', message: 'Please enter the 4-digit OTP from the buyer.' }
      }));
      return;
    }

    try {
      const response = await fetch('/api/escrow/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, enteredOtp })
      });

      const data = await response.json();

      if (data.success) {
        // OTP was correct — show success and update the order status in the list
        setOtpInputs(prev => ({
          ...prev,
          [orderId]: { ...prev[orderId], status: 'success', message: data.message }
        }));

        // Update the order's escrowStatus in our local state so the UI changes immediately
        setOrders(prev =>
          prev.map(o => o._id === orderId ? { ...o, escrowStatus: 'RELEASED_TO_SELLER' } : o)
        );

      } else {
        // OTP was wrong
        setOtpInputs(prev => ({
          ...prev,
          [orderId]: { ...prev[orderId], status: 'error', message: data.error }
        }));
      }

    } catch (err) {
      setOtpInputs(prev => ({
        ...prev,
        [orderId]: { ...prev[orderId], status: 'error', message: 'Network error. Try again.' }
      }));
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">

      {/* Page Header */}
      <div className="bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="gold-badge text-xs px-3 py-1 rounded-full uppercase">SELLER · ESCROW RELEASE</span>
            <h1 className="font-serif text-3xl font-bold mt-3">Seller Escrow Panel</h1>
            <p className="text-sm text-gray-300 mt-2 max-w-xl">
              Your orders are locked in escrow. To receive your payout, ask the buyer for their <strong className="text-[#A17A16]">4-digit OTP</strong> at the time of physical delivery, then enter it below to unlock.
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

      {/* How it works explanation */}
      <div className="bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl p-5 flex items-start space-x-3">
        <KeyRound className="w-6 h-6 text-[#A17A16] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-bold text-[#A17A16]">How to Release Your Escrow Payout</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Step 1:</strong> Physically deliver the furniture to the buyer. &nbsp;|&nbsp;
            <strong>Step 2:</strong> Ask the buyer for their secret 4-digit OTP code (they can see it in their Escrow Vault page). &nbsp;|&nbsp;
            <strong>Step 3:</strong> Enter that OTP in the box below. If it matches, your funds will be released immediately.
          </p>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-16 text-gray-400 text-sm">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-[#A17A16]" />
          Loading your escrow orders...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="flex items-center space-x-3 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && orders.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DEC9] text-gray-400 text-sm">
          <Lock className="w-10 h-10 mx-auto mb-3 text-gray-300" />
          No orders found. Complete a buyer checkout to see orders here.
        </div>
      )}

      {/* Order Cards */}
      {!loading && !error && orders.map((order) => {

        const input = otpInputs[order._id] || { otp: '', status: 'idle', message: '' };
        const isAlreadyReleased = order.escrowStatus === 'RELEASED_TO_SELLER';
        const isSuccess = input.status === 'success';

        return (
          <div key={order._id} className="bg-white rounded-2xl border border-[#E5DEC9] shadow-sm overflow-hidden">

            {/* Order Info Row */}
            <div className="p-5 space-y-1">
              <h3 className="font-serif font-bold text-gray-900">{order.productTitle}</h3>
              <p className="text-xs text-gray-400 font-mono">Buyer: {order.buyerEmail}</p>
              <p className="text-xs text-gray-400 font-mono">Stripe ID: {order.stripePaymentIntentId}</p>
            </div>

            {/* Money Breakdown Row */}
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
                  <p className="text-xs font-mono text-gray-400 uppercase">Your Payout (90%)</p>
                </div>
                {isAlreadyReleased || isSuccess ? (
                  <p className="font-serif font-bold text-emerald-600">${Number(order.sellerEarnings).toFixed(2)}</p>
                ) : (
                  <p className="font-serif font-bold text-rose-500 text-xs">${Number(order.sellerEarnings).toFixed(2)} — LOCKED</p>
                )}
              </div>
            </div>

            {/* OTP Section at the bottom */}
            <div className="p-5 border-t border-[#E5DEC9]">

              {/* Already released — show big green success */}
              {(isAlreadyReleased || isSuccess) ? (
                <div className="flex items-center space-x-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-emerald-700">Escrow Unlocked Successfully!</p>
                    <p className="text-xs text-emerald-600 mt-0.5">
                      ${Number(order.sellerEarnings).toFixed(2)} has been released to your seller account. Thank you for the delivery!
                    </p>
                  </div>
                </div>
              ) : (
                /* OTP Input Form */
                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    Enter Buyer's Delivery OTP to Release Funds
                  </p>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="e.g. 7291"
                      value={input.otp}
                      onChange={(e) => handleOtpChange(order._id, e.target.value)}
                      className="w-32 px-4 py-3 text-center font-mono text-xl font-bold border border-[#E5DEC9] rounded-xl focus:outline-none focus:border-[#A17A16] bg-gray-50 tracking-widest"
                    />
                    <button
                      onClick={() => handleVerifyOtp(order._id)}
                      className="gold-gradient-btn px-5 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 shadow-md"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>VERIFY & RELEASE</span>
                    </button>
                  </div>

                  {/* Error message if OTP was wrong */}
                  {input.status === 'error' && (
                    <div className="flex items-center space-x-2 text-xs text-rose-600">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{input.message}</span>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>
        );
      })}

    </div>
  );
}
