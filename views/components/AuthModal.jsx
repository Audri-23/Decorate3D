import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, LogIn, UserPlus, KeyRound, ArrowLeft, RefreshCcw, ExternalLink } from 'lucide-react';
import { CenteredNotification } from './CenteredNotification.jsx';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess, initialRole = 'buyer' }) => {
  const [activeMode, setActiveMode] = useState('login'); // 'login' or 'signup'
  const [activeStep, setActiveStep] = useState('credentials'); // 'credentials' or 'otp_verification'
  
  // Credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState(initialRole);

  // Reset form inputs & credentials whenever modal opens or mode changes
  React.useEffect(() => {
    if (isOpen) {
      if (initialRole) {
        setRole(initialRole);
      }
      setEmail('');
      setPassword('');
      setName('');
      setOtpInput('');
      setActiveStep('credentials');
      setFormError(null);
      setEmailPreviewUrl(null);
    }
  }, [isOpen, initialRole, activeMode]);

  // 2FA OTP State
  const [otpInput, setOtpInput] = useState('');
  const [emailPreviewUrl, setEmailPreviewUrl] = useState(null);

  // Form Error State & Centered Notification Dialog State
  const [formError, setFormError] = useState(null);
  const [notification, setNotification] = useState(null);

  if (!isOpen) return null;

  const showNotification = (type, title, message) => {
    setNotification({ type, title, message });
  };

  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    const endpoint = activeMode === 'signup' ? '/api/auth/register' : '/api/auth/login';
    const payload = activeMode === 'signup' 
      ? { name, email, password, role }
      : { email, password, role };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!data.success) {
        setFormError(data.message);
        showNotification('error', 'Authentication Failed', data.message);
        return;
      }

      // If 2FA OTP required
      if (data.requiresOTP) {
        setEmailPreviewUrl(data.previewUrl || null);
        setActiveStep('otp_verification');
        showNotification(
          'info',
          '2FA Email Verification Sent',
          `A 6-Digit Verification OTP code has been dispatched to ${email}. Please check your email inbox.`
        );
      } else {
        // Direct success!
        showNotification('success', 'Authenticated Successfully', data.message || 'Access Granted');
        setTimeout(() => {
          onLoginSuccess(data.user);
          onClose();
        }, 800);
      }
    } catch (err) {
      showNotification('error', 'Network Error', 'Could not connect to authentication server.');
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();

    if (!otpInput || otpInput.trim().length < 6) {
      showNotification('error', 'Invalid OTP', 'Please enter the complete 6-digit OTP verification code.');
      return;
    }

    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otpCode: otpInput.trim(), role })
      });
      const data = await res.json();

      if (!data.success) {
        showNotification('error', 'Verification Failed', data.message);
        return;
      }

      // Success!
      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      showNotification('error', 'Verification Error', 'Failed to verify OTP code.');
    }
  };

  const handleResendOTP = async () => {
    try {
      const res = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role })
      });
      const data = await res.json();

      if (!data.success) {
        showNotification('error', 'Resend Failed', data.message);
        return;
      }

      showNotification('info', '2FA OTP Resent', `A new 6-digit verification code has been dispatched to ${email}. Please check your inbox.`);
    } catch (err) {
      showNotification('error', 'Network Error', 'Failed to request new OTP code.');
    }
  };

  return (
    <>
      {/* Centered Display Notification Dialog */}
      <CenteredNotification
        notification={notification}
        onClose={() => setNotification(null)}
      />

      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-[#FBF9F5] rounded-3xl max-w-md w-full p-8 border border-[#E5DEC9] shadow-2xl relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* STEP 1: CREDENTIALS FORM */}
          {activeStep === 'credentials' && (
            <>
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1E232A] text-[#A17A16] font-serif font-bold text-xl flex items-center justify-center mx-auto mb-3 border-2 border-[#A17A16]">
                  3D
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  {activeMode === 'signup' ? 'Create Account' : 'Sign In to Decorate3D'}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Database Verified • Nodemailer 2FA Email OTP
                </p>
              </div>

              {/* Mode Tabs */}
              <div className="flex bg-[#E5DEC9]/50 p-1 rounded-2xl mb-6 border border-[#E5DEC9]">
                <button
                  type="button"
                  onClick={() => setActiveMode('login')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                    activeMode === 'login' ? 'bg-white text-[#A17A16] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>LOG IN</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMode('signup')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
                    activeMode === 'signup' ? 'bg-white text-[#A17A16] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>CREATE ACCOUNT</span>
                </button>
              </div>

              {/* Form */}
              {formError && (
                <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center justify-between animate-fadeIn">
                  <span>{formError}</span>
                  {activeMode === 'login' && formError.toLowerCase().includes('register') && (
                    <button
                      type="button"
                      onClick={() => { setFormError(null); setActiveMode('signup'); }}
                      className="font-bold underline text-rose-800 ml-2 whitespace-nowrap"
                    >
                      Register Now
                    </button>
                  )}
                </div>
              )}

              <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                {activeMode === 'signup' && (
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Muhtasim Ahmed"
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1">
                    {activeMode === 'signup' ? 'Select Target Account Role' : 'Authenticate As Role'}
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border-2 border-[#A17A16]/50 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#A17A16]"
                  >
                    <option value="buyer">Buyer (Browse & Inspect 3D Models)</option>
                    <option value="seller">Seller (List Furniture & 3D Scanner)</option>
                    <option value="courier">Logistics Courier Driver</option>
                    <option value="admin">System Administrator</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md mt-2 tracking-wider flex items-center justify-center space-x-2"
                >
                  <span>{activeMode === 'signup' ? 'PROCEED TO EMAIL 2FA OTP' : 'VERIFY & SEND 2FA OTP'}</span>
                </button>
              </form>

              <div className="text-center mt-6 pt-4 border-t border-[#E5DEC9] text-xs text-gray-600">
                {activeMode === 'signup' ? 'Already have an account?' : "Don't have an account yet?"}{' '}
                <button
                  type="button"
                  onClick={() => setActiveMode(activeMode === 'signup' ? 'login' : 'signup')}
                  className="text-[#A17A16] font-bold hover:underline"
                >
                  {activeMode === 'signup' ? 'Sign In Here' : 'Create One Here'}
                </button>
              </div>
            </>
          )}

          {/* STEP 2: 2FA OTP VERIFICATION SCREEN */}
          {activeStep === 'otp_verification' && (
            <div className="space-y-6">
              <button
                type="button"
                onClick={() => setActiveStep('credentials')}
                className="flex items-center space-x-2 text-xs font-semibold text-gray-600 hover:text-[#A17A16]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to credentials</span>
              </button>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#F9F4E9] text-[#A17A16] flex items-center justify-center mx-auto border border-[#E9D3A4]">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Email 2FA Verification
                </h2>
                <p className="text-xs text-gray-500">
                  A 6-digit verification code was dispatched to your email inbox:
                  <span className="block font-bold text-gray-800 mt-0.5">{email}</span>
                </p>
              </div>

              {/* Secure 2FA Email Banner */}
              <div className="p-4 bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl text-center space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#A17A16] uppercase block">
                  CHECK YOUR EMAIL INBOX FOR OTP
                </span>
                <p className="text-xs text-gray-600">
                  Enter the 6-digit code sent to <strong className="text-gray-800">{email}</strong> below to verify your session.
                </p>
              </div>

              <form onSubmit={handleOTPSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1 text-center">
                    Enter 6-Digit OTP Pin
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="849201"
                    className="w-full px-4 py-3 bg-white border-2 border-[#A17A16] rounded-xl font-mono text-center text-2xl font-bold tracking-[0.3em] text-gray-900 focus:outline-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md tracking-wider flex items-center justify-center space-x-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>AUTHENTICATE & COMPLETE LOGIN</span>
                </button>
              </form>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="text-xs text-gray-500 hover:text-[#A17A16] flex items-center justify-center space-x-1 mx-auto"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Resend Email OTP Code</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
