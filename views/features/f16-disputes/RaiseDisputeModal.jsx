import React, { useState } from 'react';
import { AlertOctagon, X, Upload, Loader2, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';

export function RaiseDisputeModal({ order, userRole, userEmail, isOpen, onClose, onDisputeCreated }) {
  const [reason, setReason] = useState('ITEM_DAMAGED');
  const [description, setDescription] = useState('');
  const [evidenceUrl, setEvidenceUrl] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen || !order) return null;

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setError('');

    const formData = new FormData();
    formData.append('files', file);

    try {
      const res = await fetch('/api/disputes/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success && data.url) {
        setEvidenceUrl(data.url);
      } else {
        setError(data.error || 'Failed to upload image.');
      }
    } catch (err) {
      setError('Network error uploading evidence image.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      setError('Please enter a description of the issue.');
      return;
    }

    setSubmitting(true);
    setError('');
    setSuccessMsg('');

    try {
      const res = await fetch('/api/disputes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: order._id,
          raisedBy: userRole || 'buyer',
          raisedByEmail: userEmail || 'buyer@decorate3d.com',
          reason,
          description,
          evidenceImageUrls: evidenceUrl ? [evidenceUrl] : []
        })
      });

      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Dispute submitted successfully. Escrow funds are now frozen pending admin review.');
        if (onDisputeCreated) {
          onDisputeCreated(data.dispute, data.order);
        }
        setTimeout(() => {
          onClose();
        }, 1800);
      } else {
        setError(data.error || 'Failed to submit dispute.');
      }
    } catch (err) {
      setError('Network error submitting dispute.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-[#E5DEC9] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden p-6 space-y-5 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
            <AlertOctagon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-rose-600">SAFETY & MEDIATION</span>
            <h3 className="font-serif text-lg font-bold text-gray-900">Raise Order Dispute</h3>
          </div>
        </div>

        {successMsg ? (
          <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
            <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-emerald-800">Dispute Filed</h4>
            <p className="text-xs text-emerald-700">{successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
              <strong>Notice:</strong> Raising a dispute freezes any pending Escrow payout until reviewed by an administrator.
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Order Item</label>
              <input
                type="text"
                disabled
                value={order.productTitle}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-gray-50 text-gray-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Dispute Reason</label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-[#E5DEC9] rounded-xl bg-white focus:outline-none focus:border-[#A17A16] min-h-[44px]"
              >
                <option value="ITEM_DAMAGED">Furniture Item Damaged on Arrival</option>
                <option value="NOT_DELIVERED">Item Not Delivered / Courier No-Show</option>
                <option value="WRONG_ITEM">Wrong Item or Specification Mismatch</option>
                <option value="OTHER">Other Escalation Issue</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Detailed Description</label>
              <textarea
                rows={3}
                required
                placeholder="Explain the damage or delivery problem in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-[#E5DEC9] rounded-xl bg-white focus:outline-none focus:border-[#A17A16]"
              />
            </div>

            {/* Direct Image File Upload & Preview */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-700 uppercase">
                Damage / Evidence Photo (Direct Upload)
              </label>
              
              <div className="flex items-center space-x-3">
                <label className="flex-1 cursor-pointer border-2 border-dashed border-[#A17A16]/40 hover:border-[#A17A16] bg-[#FBF9F5] p-3 rounded-2xl flex items-center justify-center space-x-2 text-xs font-bold text-[#A17A16] transition-all min-h-[44px]">
                  {uploadingImage ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Upload className="w-4 h-4" />
                  )}
                  <span>{uploadingImage ? 'Uploading Image...' : '📷 Choose & Upload Photo File'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                    disabled={uploadingImage}
                  />
                </label>
              </div>

              {/* Uploaded Thumbnail Preview */}
              {evidenceUrl && (
                <div className="relative rounded-2xl overflow-hidden border border-[#E5DEC9] bg-gray-50 p-2 flex items-center space-x-3">
                  <img
                    src={evidenceUrl}
                    alt="Uploaded Evidence Preview"
                    className="w-16 h-16 object-cover rounded-xl border border-gray-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-800 truncate">Evidence Photo Attached</p>
                    <p className="text-[10px] text-gray-500 font-mono truncate">{evidenceUrl}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEvidenceUrl('')}
                    className="p-1 text-rose-500 hover:text-rose-700"
                    title="Remove Photo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Fallback URL input */}
              <input
                type="text"
                placeholder="Or paste image URL (https://...)"
                value={evidenceUrl}
                onChange={(e) => setEvidenceUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#A17A16] font-mono text-[11px]"
              />
            </div>

            {error && (
              <div className="flex items-center space-x-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 min-h-[44px]"
              >
                CANCEL
              </button>
              <button
                type="submit"
                disabled={submitting || uploadingImage}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md min-h-[44px]"
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <AlertOctagon className="w-4 h-4" />
                )}
                <span>FREEZE & SUBMIT DISPUTE</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
