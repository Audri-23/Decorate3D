const BASE = '/api/tracking';

/** Start (or restart) a tracking session for a locked dispatch job. */
export async function startTrackingSession(jobId) {
  const res = await fetch(`${BASE}/${jobId}/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}

/** Poll for the current courier position, route, ETA. */
export async function pollTrackingState(jobId) {
  const res = await fetch(`${BASE}/${jobId}`);
  return res.json();
}

/** Courier manually updates their GPS position. */
export async function updateCourierGPS(jobId, { lat, lng, courierId }) {
  const res = await fetch(`${BASE}/${jobId}/location`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lat, lng, courierId })
  });
  return res.json();
}

/** Fetch the OSRM route geometry only. */
export async function fetchRouteGeometry(jobId) {
  const res = await fetch(`${BASE}/${jobId}/route`);
  return res.json();
}

/** Reset the simulation (restart from pickup). */
export async function resetTrackingSession(jobId) {
  const res = await fetch(`${BASE}/${jobId}/reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}
