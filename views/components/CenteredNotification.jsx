import React from 'react';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';

export const CenteredNotification = ({ notification, onClose }) => {
  if (!notification || !notification.message) return null;

  const { type = 'info', title, message } = notification;

  const typeConfig = {
    error: {
      icon: <AlertCircle className="w-8 h-8 text-rose-600" />,
      border: 'border-rose-300',
      bg: 'bg-rose-50',
      badgeBg: 'bg-rose-100 text-rose-800',
      buttonBg: 'bg-rose-600 hover:bg-rose-700 text-white',
      defaultTitle: 'Authentication Warning'
    },
    success: {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
      border: 'border-emerald-300',
      bg: 'bg-emerald-50',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      buttonBg: 'gold-gradient-btn',
      defaultTitle: 'Success'
    },
    info: {
      icon: <Info className="w-8 h-8 text-[#A17A16]" />,
      border: 'border-[#E9D3A4]',
      bg: 'bg-[#F9F4E9]',
      badgeBg: 'bg-[#F3E6CD] text-[#A17A16]',
      buttonBg: 'gold-gradient-btn',
      defaultTitle: '2FA Verification OTP Sent'
    }
  };

  const config = typeConfig[type] || typeConfig.info;

  return (
    <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className={`bg-white rounded-3xl max-w-md w-full p-6 border ${config.border} shadow-2xl relative text-center space-y-4`}>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center pt-2">
          <div className={`p-3 rounded-2xl ${config.bg}`}>
            {config.icon}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold text-gray-900">
            {title || config.defaultTitle}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mt-2">
            {message}
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-xl font-bold text-xs tracking-wider shadow-md ${config.buttonBg}`}
          >
            CONTINUE
          </button>
        </div>

      </div>
    </div>
  );
};
