import mongoose from 'mongoose';
import { DispatchJobModel, inMemoryDispatchJobs } from './dispatch.model.js';

// ─── Helper: haversine distance ───────────────────────────────────────────────
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Helper: resolve working job store ───────────────────────────────────────
function isDbConnected() {
  return mongoose.connection && mongoose.connection.readyState === 1;
}

// ─── GET /api/dispatch ────────────────────────────────────────────────────────
// Query params: status, category, maxDistanceKm, courierLat, courierLng
export const getDispatchJobs = async (req, res) => {
  try {
    const { status, category, maxDistanceKm, courierLat, courierLng } = req.query;

    let jobs = [];

    if (isDbConnected()) {
      try {
        const dbJobs = await DispatchJobModel.find().lean();
        if (dbJobs && dbJobs.length > 0) {
          // Use DB jobs and supplement any missing in-memory seed jobs
          const dbJobIds = new Set(dbJobs.map(j => String(j._id)));
          const missingSeedJobs = inMemoryDispatchJobs.filter(j => !dbJobIds.has(j._id));
          jobs = [...dbJobs, ...missingSeedJobs];
        } else {
          jobs = [...inMemoryDispatchJobs];
        }
      } catch {
        jobs = [...inMemoryDispatchJobs];
      }
    } else {
      jobs = [...inMemoryDispatchJobs];
    }

    // ── Filter by status ──
    if (status && status !== 'ALL') {
      if (status === 'OPEN') {
        jobs = jobs.filter(j => j.status === 'OPEN' || j.status === 'BIDDING');
      } else {
        jobs = jobs.filter(j => j.status === status);
      }
    }

    // ── Filter by category ──
    if (category && category !== 'All') {
      jobs = jobs.filter(j => j.category?.toLowerCase() === category.toLowerCase());
    }

    // ── Filter by distance from courier (if GPS provided) ──
    if (courierLat && courierLng) {
      const cLat = parseFloat(courierLat);
      const cLng = parseFloat(courierLng);
      const maxKm = parseFloat(maxDistanceKm) || 30;

      if (!isNaN(cLat) && !isNaN(cLng)) {
        // Compute haversine once per job — used for both filter and annotation
        jobs = jobs.reduce((acc, j) => {
          const dist = haversineKm(cLat, cLng, j.pickupLat, j.pickupLng);
          if (dist <= maxKm) {
            acc.push({ ...j, courierDistanceToPickupKm: Math.round(dist * 10) / 10 });
          }
          return acc;
        }, []);
      }
    }

    // ── Sort: OPEN first, then BIDDING, then LOCKED, then COMPLETED ──
    const statusOrder = { OPEN: 0, BIDDING: 1, LOCKED: 2, COMPLETED: 3 };
    jobs.sort((a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99));

    return res.status(200).json({
      success: true,
      feature: 'F11 — Courier Dispatch Board',
      totalJobs: jobs.length,
      jobs
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to fetch dispatch jobs.' });
  }
};

// ─── GET /api/dispatch/:id ────────────────────────────────────────────────────
export const getDispatchJobById = async (req, res) => {
  try {
    const { id } = req.params;
    let job = null;

    if (isDbConnected()) {
      try {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
          job = await DispatchJobModel.findById(id).lean();
        }
      } catch {}
    }

    if (!job) {
      job = inMemoryDispatchJobs.find(j => j._id === id);
    }

    if (!job) {
      return res.status(404).json({ success: false, message: `Dispatch job not found: ${id}` });
    }

    return res.status(200).json({ success: true, job });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── POST /api/dispatch ───────────────────────────────────────────────────────
// Create a new dispatch job (called when a product is sold)
export const createDispatchJob = async (req, res) => {
  try {
    const {
      productId, productTitle, productImage, category, conditionGrade,
      dimensions, pickupAddress, pickupLat, pickupLng,
      dropoffAddress, dropoffLat, dropoffLng,
      sellerName, buyerName
    } = req.body;

    if (!productId || !productTitle || !pickupAddress || !dropoffAddress) {
      return res.status(400).json({
        success: false,
        message: 'Required: productId, productTitle, pickupAddress, dropoffAddress'
      });
    }

    const pLat = parseFloat(pickupLat) || 23.8103;
    const pLng = parseFloat(pickupLng) || 90.4125;
    const dLat = parseFloat(dropoffLat) || 23.7800;
    const dLng = parseFloat(dropoffLng) || 90.4200;

    // Calculate straight-line distance with 1.3x road factor
    const straightKm = haversineKm(pLat, pLng, dLat, dLng);
    const distanceKm = Math.round(straightKm * 1.3 * 10) / 10;
    const RATE_PER_KM = 8;
    const MIN_BASE_FEE = 120;
    const baseFee = Math.max(Math.round(distanceKm * RATE_PER_KM), MIN_BASE_FEE);

    // Volume tier & surcharge
    let itemVolumeTier = 'MEDIUM';
    let volumeSurcharge = 80;
    if (dimensions) {
      const parseIn = (s) => { const n = parseFloat(s); return isNaN(n) ? 12 : n; };
      const vol = parseIn(dimensions.width) * parseIn(dimensions.depth) * parseIn(dimensions.height);
      if (vol < 10000) { itemVolumeTier = 'SMALL'; volumeSurcharge = 0; }
      else if (vol >= 25000) { itemVolumeTier = 'LARGE'; volumeSurcharge = 180; }
    }

    const suggestedFeeBDT = baseFee + volumeSurcharge;

    const newJob = {
      _id: 'job_' + Date.now(),
      productId,
      productTitle,
      productImage: productImage || '',
      category: category || 'Furniture',
      conditionGrade: conditionGrade || 'GOOD',
      dimensions: dimensions || { width: '', depth: '', height: '' },
      itemVolumeTier,
      pickupAddress,
      pickupLat: pLat,
      pickupLng: pLng,
      dropoffAddress,
      dropoffLat: dLat,
      dropoffLng: dLng,
      distanceKm,
      suggestedFeeBDT,
      status: 'OPEN',
      bids: [],
      lockedByCourierId: null,
      lockedByCourierName: null,
      sellerName: sellerName || '',
      buyerName: buyerName || '',
      createdAt: new Date()
    };

    let savedJob = newJob;
    if (isDbConnected()) {
      try {
        const dbJob = await DispatchJobModel.create(newJob);
        savedJob = dbJob.toObject();
      } catch {
        inMemoryDispatchJobs.unshift(newJob);
      }
    } else {
      inMemoryDispatchJobs.unshift(newJob);
    }

    return res.status(201).json({ success: true, job: savedJob });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── POST /api/dispatch/:id/bid ───────────────────────────────────────────────
// Verified courier places a bid on an open/bidding job
export const placeBid = async (req, res) => {
  try {
    const { id } = req.params;
    const { courierId, courierName, bidAmountBDT, note } = req.body;

    if (!courierId || !courierName || !bidAmountBDT) {
      return res.status(400).json({
        success: false,
        message: 'Required: courierId, courierName, bidAmountBDT'
      });
    }

    const bidAmount = parseFloat(bidAmountBDT);
    if (isNaN(bidAmount) || bidAmount <= 0) {
      return res.status(400).json({ success: false, message: 'bidAmountBDT must be a positive number.' });
    }

    // ── Find job in memory ──
    const jobIndex = inMemoryDispatchJobs.findIndex(j => j._id === id);
    if (jobIndex === -1) {
      // Try DB
      if (isDbConnected() && id.match(/^[0-9a-fA-F]{24}$/)) {
        try {
          const dbJob = await DispatchJobModel.findById(id);
          if (!dbJob) return res.status(404).json({ success: false, message: 'Job not found.' });
          if (dbJob.status === 'LOCKED' || dbJob.status === 'COMPLETED') {
            return res.status(400).json({ success: false, message: `Cannot bid on a ${dbJob.status} job.` });
          }
          const existingBid = dbJob.bids.find(b => b.courierId === courierId);
          if (existingBid) {
            existingBid.bidAmountBDT = bidAmount;
            existingBid.note = note || '';
            existingBid.placedAt = new Date();
          } else {
            dbJob.bids.push({ courierId, courierName, bidAmountBDT: bidAmount, note: note || '', placedAt: new Date() });
          }
          dbJob.status = 'BIDDING';
          await dbJob.save();
          return res.status(200).json({ success: true, message: 'Bid placed successfully.', job: dbJob.toObject() });
        } catch (dbErr) {
          return res.status(500).json({ success: false, message: dbErr.message });
        }
      }
      return res.status(404).json({ success: false, message: 'Dispatch job not found.' });
    }

    const job = inMemoryDispatchJobs[jobIndex];

    if (job.status === 'LOCKED' || job.status === 'COMPLETED') {
      return res.status(400).json({ success: false, message: `Cannot bid on a ${job.status} job.` });
    }

    // Update or insert bid
    const existingBidIdx = job.bids.findIndex(b => b.courierId === courierId);
    const newBid = { courierId, courierName, bidAmountBDT: bidAmount, note: note || '', placedAt: new Date() };

    if (existingBidIdx >= 0) {
      job.bids[existingBidIdx] = newBid;
    } else {
      job.bids.push(newBid);
    }
    job.status = 'BIDDING';
    inMemoryDispatchJobs[jobIndex] = job;

    return res.status(200).json({ success: true, message: 'Bid placed successfully.', job });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── POST /api/dispatch/:id/lock ──────────────────────────────────────────────
// Courier locks/accepts a job (commits to delivery)
export const lockJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { courierId, courierName } = req.body;

    if (!courierId || !courierName) {
      return res.status(400).json({ success: false, message: 'Required: courierId, courierName' });
    }

    const jobIndex = inMemoryDispatchJobs.findIndex(j => j._id === id);

    // ── Try DB if not found in memory ──
    if (jobIndex === -1) {
      if (isDbConnected() && id.match(/^[0-9a-fA-F]{24}$/)) {
        try {
          const dbJob = await DispatchJobModel.findById(id);
          if (!dbJob) return res.status(404).json({ success: false, message: 'Dispatch job not found.' });

          if (dbJob.status === 'LOCKED') {
            return res.status(400).json({
              success: false,
              message: `This job is already locked by ${dbJob.lockedByCourierName}.`
            });
          }
          if (dbJob.status === 'COMPLETED') {
            return res.status(400).json({ success: false, message: 'This job has already been completed.' });
          }

          dbJob.status = 'LOCKED';
          dbJob.lockedByCourierId = courierId;
          dbJob.lockedByCourierName = courierName;
          await dbJob.save();

          return res.status(200).json({
            success: true,
            message: `Job successfully locked by ${courierName}. You are committed to this delivery.`,
            job: dbJob.toObject()
          });
        } catch (dbErr) {
          return res.status(500).json({ success: false, message: dbErr.message });
        }
      }
      return res.status(404).json({ success: false, message: 'Dispatch job not found.' });
    }

    const job = inMemoryDispatchJobs[jobIndex];

    if (job.status === 'LOCKED') {
      return res.status(400).json({
        success: false,
        message: `This job is already locked by ${job.lockedByCourierName}.`
      });
    }

    if (job.status === 'COMPLETED') {
      return res.status(400).json({ success: false, message: 'This job has already been completed.' });
    }

    job.status = 'LOCKED';
    job.lockedByCourierId = courierId;
    job.lockedByCourierName = courierName;
    inMemoryDispatchJobs[jobIndex] = job;

    // Mirror in DB if connected
    if (isDbConnected() && id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        await DispatchJobModel.findByIdAndUpdate(id, {
          status: 'LOCKED',
          lockedByCourierId: courierId,
          lockedByCourierName: courierName
        });
      } catch {}
    }

    return res.status(200).json({
      success: true,
      message: `Job successfully locked by ${courierName}. You are committed to this delivery.`,
      job
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ─── PATCH /api/dispatch/:id/complete ─────────────────────────────────────────
// Mark a job as completed
export const completeJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { courierId } = req.body;

    const jobIndex = inMemoryDispatchJobs.findIndex(j => j._id === id);
    if (jobIndex === -1) {
      return res.status(404).json({ success: false, message: 'Dispatch job not found.' });
    }

    const job = inMemoryDispatchJobs[jobIndex];

    if (job.status !== 'LOCKED') {
      return res.status(400).json({ success: false, message: 'Only LOCKED jobs can be marked as COMPLETED.' });
    }

    if (job.lockedByCourierId && job.lockedByCourierId !== courierId) {
      return res.status(403).json({ success: false, message: 'Only the assigned courier can complete this job.' });
    }

    job.status = 'COMPLETED';
    inMemoryDispatchJobs[jobIndex] = job;

    return res.status(200).json({ success: true, message: 'Job marked as COMPLETED.', job });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
