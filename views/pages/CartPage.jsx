import React from 'react';
import { ShoppingCart, ShieldCheck, ArrowRight, Trash2, CheckCircle } from 'lucide-react';

export const CartPage = ({ cart, onRemoveFromCart, onCheckout, isOpen, onClose }) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="bg-[#FBF9F5] w-full max-w-md h-full flex flex-col justify-between p-6 border-l border-[#E5DEC9] shadow-2xl relative">
        
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#E5DEC9]">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5 text-[#A17A16]" />
              <h2 className="font-serif text-xl font-bold text-gray-900">Your Escrow Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono font-bold text-gray-400 hover:text-gray-800"
            >
              CLOSE [✕]
            </button>
          </div>

          <div className="mt-4 p-3 bg-[#F9F4E9] border border-[#E9D3A4] rounded-xl text-xs text-[#A17A16] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Funds locked safely in escrow until physical delivery OTP scan.</span>
          </div>

          <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-gray-400 text-sm">
                Your cart is empty. Add a 3D furniture item to test escrow payment!
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-3 bg-white rounded-xl border border-[#E5DEC9]">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-bold text-gray-900 truncate">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.material}</p>
                    <span className="font-serif font-bold text-[#A17A16] text-sm">${item.price}</span>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(idx)}
                    className="p-1.5 text-gray-400 hover:text-rose-500 rounded-lg hover:bg-rose-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="pt-6 border-t border-[#E5DEC9] space-y-4">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Escrow Guarantee Fee:</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-sm pt-2 text-gray-900 border-t border-gray-200">
                <span>Total Escrow Charge:</span>
                <span className="text-[#A17A16] font-serif font-bold text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2"
            >
              <span>PROCEED TO ESCROW LOCK PAYMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
