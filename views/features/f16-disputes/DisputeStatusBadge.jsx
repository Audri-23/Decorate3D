import React from 'react';
import { AlertOctagon, CheckCircle2, RefreshCw } from 'lucide-react';

export function DisputeStatusBadge({ order, dispute }) {
  const isDisputed = order?.escrowStatus === 'DISPUTED' || dispute?.status === 'OPEN' || dispute?.status === 'UNDER_REVIEW';
  const isResolved = order?.escrowStatus === 'REFUNDED' || order?.escrowStatus === 'SPLIT_RESOLVED' || dispute?.status === 'RESOLVED';

  if (isDisputed) {
    return (
      <span className="inline-flex items-center space-x-1 px-3 py-1 bg-rose-50 border border-rose-300 text-rose-700 rounded-lg text-xs font-mono font-bold">
        <AlertOctagon className="w-3.5 h-3.5 text-rose-600 animate-pulse shrink-0" />
        <span>DISPUTE UNDER REVIEW (ESCROW FROZEN)</span>
      </span>
    );
  }

  if (isResolved) {
    const outcome = dispute?.resolutionOutcome || order?.escrowStatus;
    return (
      <span className="inline-flex items-center space-x-1 px-3 py-1 bg-purple-50 border border-purple-300 text-purple-800 rounded-lg text-xs font-mono font-bold">
        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
        <span>DISPUTE RESOLVED — {outcome}</span>
      </span>
    );
  }

  return null;
}
