import React, { useState } from 'react';
import { createPaymentIntentApi } from './checkoutApi.js';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  X,
  Building2,
  UserCheck,
  ShoppingBag
} from 'lucide-react';

export function CheckoutPage({ cart = [], isOpen, onClose, onPaymentSuccess, buyerUser }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('123');
  const [zipCode, setZipCode] = useState('10001');

  if (!isOpen || !cart || cart.length === 0) return null;

  const totalItemsPrice = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const platformCommissionRate = 0.10;
  const platformCommissionFee = Number((totalItemsPrice * platformCommissionRate).toFixed(2));
  const sellerEarnings = Number((totalItemsPrice - platformCommissionFee).toFixed(2));
  const combinedTitle = cart.map(i => i.title).join(', ');

  const handleAutoFillTestCard = () => {
    setCardNumber('4242 4242 4242 4242');
    setExpiry('12/28');
    setCvc('123');
    setZipCode('10001');
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await createPaymentIntentApi({
        amount: totalItemsPrice,
        productTitle: combinedTitle,
        productId: cart.map(i => i._id || i.id).join(','),
        buyerEmail: buyerUser?.email || 'buyer@decorate3d.com',
        sellerStripeAccountId: cart[0]?.sellerStripeAccountId || 'acct_1TestSellerAccount123'
      });

      if (response.success) {
        setOrderSummary({
          orderId: response.orderId,
          paymentIntentId: response.paymentIntentId,
          totalPaid: totalItemsPrice,
          platformFee: response.summary?.platformCommissionFee || platformCommissionFee,
          sellerPayout: response.summary?.sellerEarnings || sellerEarnings,
          itemCount: cart.length
        });
        setPaymentCompleted(true);
        setLoading(false);
        if (onPaymentSuccess) onPaymentSuccess(response);
      } else {
        throw new Error(response.error || 'Payment failed.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred while communicating with Stripe.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-[#E5DEC9] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col relative max-h-[90vh]">

        <div className="bg-[#1E232A] text-white p-6 border-b border-[#A17A16]/30 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#A17A16]/20 border border-[#A17A16] flex items-center justify-center text-[#A17A16]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#A17A16] uppercase font-bold">STRIPE TEST MODE</span>
              <h2 className="font-serif text-xl font-bold">Secure Escrow Checkout</h2>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {!paymentCompleted ? (
            <>
              <div className="border border-[#E5DEC9] rounded-2xl overflow-hidden">
                <div className="flex items-center space-x-2 px-4 py-3 bg-[#FBF9F5] border-b border-[#E5DEC9]">
                  <ShoppingBag className="w-4 h-4 text-[#A17A16]" />
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Escrow Cart ({cart.length} {cart.length === 1 ? 'Item' : 'Items'})
                  </span>
                </div>

                <div className="divide-y divide-[#E5DEC9]">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 px-4 py-3 bg-white">
                      <img
                        src={item.images?.[0] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200'}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover border border-[#E5DEC9] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-sm font-bold text-gray-900 truncate">{item.title}</p>
                        <p className="text-xs text-gray-400 truncate">{item.material || item.seller?.name || ''}</p>
                      </div>
                      <span className="font-serif font-bold text-[#A17A16] text-sm shrink-0">${Number(item.price).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-[#FBF9F5] border-t border-[#E5DEC9]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Cart Total</span>
                  <span className="font-serif font-bold text-gray-900 text-base">${totalItemsPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-[#A17A16]">
                  <span className="uppercase">STRIPE CONNECT AUTOMATED COMMISSION SPLIT</span>
                  <span>TEST MODE</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-[#E9D3A4]/60">
                  <div className="bg-white/80 p-2.5 rounded-xl border border-[#E9D3A4]/40">
                    <div className="flex items-center text-gray-600 space-x-1 font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-[#A17A16]" />
                      <span>Platform Fee (10%)</span>
                    </div>
                    <span className="font-serif font-bold text-gray-900 text-sm mt-1 block">${platformCommissionFee.toFixed(2)}</span>
                  </div>
                  <div className="bg-white/80 p-2.5 rounded-xl border border-[#E9D3A4]/40">
                    <div className="flex items-center text-gray-600 space-x-1 font-semibold">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Seller Net (90%)</span>
                    </div>
                    <span className="font-serif font-bold text-emerald-700 text-sm mt-1 block">${sellerEarnings.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-800">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Stripe Sandbox: Use test card <strong className="font-mono">4242 4242 4242 4242</strong></span>
                </div>
                <button
                  type="button"
                  onClick={handleAutoFillTestCard}
                  className="px-2.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-lg font-bold text-[11px] transition-colors"
                >
                  Auto-fill Test Card
                </button>
              </div>

              <form onSubmit={handleSubmitPayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm focus:outline-none focus:border-[#A17A16] focus:bg-white"
                    />
                    <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Expires</label>
                    <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" required
                      className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-center focus:outline-none focus:border-[#A17A16] focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">CVC</label>
                    <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" required
                      className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-center focus:outline-none focus:border-[#A17A16] focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Postal Code</label>
                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="10001" required
                      className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-center focus:outline-none focus:border-[#A17A16] focus:bg-white" />
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center space-x-2 tracking-wide disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing Stripe Escrow Payment...</span>
                  ) : (
                    <>
                      <span>PAY ${totalItemsPrice.toFixed(2)} VIA STRIPE ESCROW</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-gray-900">Stripe Payment Successful!</h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto">
                  <strong>{orderSummary?.itemCount} item{orderSummary?.itemCount > 1 ? 's' : ''}</strong> totalling{' '}
                  <strong>${orderSummary?.totalPaid?.toFixed(2)}</strong> are locked safely in Decorate3D Escrow.
                </p>
              </div>

              <div className="bg-[#FBF9F5] border border-[#E5DEC9] rounded-2xl p-4 text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between border-b border-[#E5DEC9] pb-2">
                  <span className="text-gray-500">STRIPE PAYMENT INTENT:</span>
                  <span className="font-bold text-gray-900 truncate max-w-[200px]">{orderSummary?.paymentIntentId}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DEC9] pb-2">
                  <span className="text-gray-500">ITEMS IN ORDER:</span>
                  <span className="font-bold text-gray-900">{orderSummary?.itemCount} furniture item{orderSummary?.itemCount > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DEC9] pb-2">
                  <span className="text-gray-500">PLATFORM FEE (10%):</span>
                  <span className="font-bold text-[#A17A16]">${orderSummary?.platformFee}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DEC9] pb-2">
                  <span className="text-gray-500">SELLER EARNINGS (90%):</span>
                  <span className="font-bold text-emerald-600">${orderSummary?.sellerPayout}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ESCROW STATUS:</span>
                  <span className="font-bold text-indigo-600">LOCKED_IN_ESCROW</span>
                </div>
              </div>

              <button onClick={onClose} className="w-full bg-[#1E232A] text-white hover:bg-gray-800 py-3.5 rounded-xl font-bold text-sm shadow-md">
                RETURN TO MARKETPLACE
              </button>
            </div>
          )}
        </div>

        <div className="bg-[#FBF9F5] px-6 py-3 border-t border-[#E5DEC9] text-[11px] text-gray-500 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-Bit SSL Encrypted Stripe Test Mode API</span>
          </div>
          <span className="font-mono">Decorate3D</span>
        </div>

      </div>
    </div>
  );
}
