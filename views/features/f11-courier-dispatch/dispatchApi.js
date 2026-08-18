const BASE = '/api/dispatch';

/**
 * Fetch all dispatch jobs.
 * @param {object} filters - { status, category, maxDistanceKm, courierLat, courierLng }
 */
export async function fetchDispatchJobs(filters = {}) {
  const params = new URLSearchParams();
  if (filters.status)         params.append('status', filters.status);
  if (filters.category)       params.append('category', filters.category);
  if (filters.maxDistanceKm)  params.append('maxDistanceKm', filters.maxDistanceKm);
  if (filters.courierLat)     params.append('courierLat', filters.courierLat);
  if (filters.courierLng)     params.append('courierLng', filters.courierLng);

  const url = params.toString() ? `${BASE}?${params}` : BASE;
  const res = await fetch(url);
  return res.json();
}

/**
 * Place a bid on a dispatch job.
 */
export async function placeBidOnJob(jobId, { courierId, courierName, bidAmountBDT, note }) {
  const res = await fetch(`${BASE}/${jobId}/bid`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courierId, courierName, bidAmountBDT, note })
  });
  return res.json();
}

/**
 * Lock / accept a dispatch job.
 */
export async function lockDispatchJob(jobId, { courierId, courierName }) {
  const res = await fetch(`${BASE}/${jobId}/lock`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courierId, courierName })
  });
  return res.json();
}

/**
 * Mark a job as completed.
 */
export async function completeDispatchJob(jobId, { courierId }) {
  const res = await fetch(`${BASE}/${jobId}/complete`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courierId })
  });
  return res.json();
}

/**
 * Create a new dispatch job (admin/seller action).
 */
export async function createDispatchJob(payload) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}
