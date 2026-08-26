# Feature F15: Official PDF Payment & Escrow Release Invoice System

**Member:** Shouvik Banik (Member 4)  
**Course:** CSE471 Project — Decorate3D C2C Marketplace  
**Feature Code:** F15  

---

## 📌 Feature Objective & Overview

**Feature F15** provides an automated, official **PDF Payment & Escrow Release Invoice** for all completed furniture transactions on the Decorate3D C2C marketplace.

When an escrow order is unlocked (either via buyer-to-seller delivery OTP verification or administrative dispute mediation), the system automatically triggers the PDF generation engine (`pdfkit`). It computes the full financial breakdown:
1. **Total Transaction Price** (100%)
2. **Platform Commission Fee** (10% retained by Decorate3D)
3. **Seller Net Payout** (90% released to seller)

The generated PDF is stored securely on the server under `/uploads/invoices/invoice_<orderId>.pdf`, its permanent URL path is attached to the order document (`order.invoiceUrl`), and **"DOWNLOAD PDF INVOICE"** buttons become available in real time on both the **Buyer's Escrow Vault Page** and the **Seller's Escrow Release Panel**.

---

## 📁 Folder Structure

```
f15 my work/
│
├── f15-dedicated-files/          ← Core logic created specifically for F15
│   ├── invoice.controller.js     ← PDF invoice builder (pdfkit & HTML fallback) & file streamer
│   ├── invoice.routes.js         ← Express router mapping GET /api/escrow/invoice/:orderId
│   └── escrowRelease.service.js  ← Shared release engine that triggers automatic invoice generation
│
├── shared-files-edited-for-f15/  ← Existing files edited to integrate F15 invoice functionality
│   ├── order.model.js            ← Added invoiceUrl field to f13OrderSchema
│   ├── server.js                 ← Mounted invoiceRoutes under /api/escrow & static uploads serving
│   ├── EscrowVaultPage.jsx       ← Added "DOWNLOAD PDF INVOICE" button for buyer
│   ├── SellerEscrowPanel.jsx     ← Added "PDF INVOICE" button for seller
│   └── escrow.controller.js      ← OTP verification handler that triggers releaseEscrow
│
└── README.md                     ← This comprehensive documentation
```

---

## 📄 F15 Dedicated Files — Detailed Breakdown

---

### 1. `invoice.controller.js`
**Location:** `features/f15-invoice/invoice.controller.js`  
**Purpose:** Handles programmatic vector PDF document construction, file system storage, and streaming to client browsers.

#### Function: `generateInvoice(order)`
- **PDF Engine:** Uses `pdfkit` with a clean, luxury dark-and-gold marketplace aesthetic (`#1E232A` and `#A17A16`).
- **Directory Setup:** Checks if directory `uploads/invoices/` exists; if not, creates it recursively (`fs.mkdirSync`).
- **Document Layout:**
  - **Header Banner:** Solid dark `#1E232A` block with gold `'Decorate3D Marketplace'` branding and sub-header.
  - **Metadata Section:** Unique `INVOICE ID: INV-<orderId>`, issue timestamp, verification method (`OTP Delivery Handover`), and completion date.
  - **Buyer & Seller Details:** Displays buyer email and seller email in a 2-column layout.
  - **Itemized Financial Table:** Item description, Gross Amount ($), Platform Commission (10%), and Seller Net Payout (90%).
  - **Grand Total & Status Box:** Visual border highlighting Grand Total Paid and green `RELEASED_TO_SELLER` badge.
  - **Legal/Audit Note:** Security note verifying funds were securely held in escrow prior to physical delivery.
- **HTML Fallback:** If `pdfkit` is unavailable in offline demo mode, generates a styled HTML invoice document.
- **Database Link:** Saves `/uploads/invoices/invoice_<orderId>.pdf` into `order.invoiceUrl` in MongoDB.

#### Function: `downloadInvoice(req, res)` — `GET /api/escrow/invoice/:orderId`
- Looks up the order by ID from MongoDB or in-memory fallback.
- If the invoice file does not yet exist on disk, generates it on-the-fly via `generateInvoice(order)`.
- Sets response header `res.setHeader('Content-Type', 'application/pdf')`.
- Streams the file directly to the client browser (`res.sendFile(filePath)`).

---

### 2. `invoice.routes.js`
**Location:** `features/f15-invoice/invoice.routes.js`  
**Purpose:** Defines the REST API route for invoice downloads.

```javascript
import express from 'express';
import { downloadInvoice } from './invoice.controller.js';

const router = express.Router();

// Mounted under /api/escrow/invoice/:orderId
router.get('/invoice/:orderId', downloadInvoice);

export default router;
```

---

### 3. `escrowRelease.service.js`
**Location:** `features/f15-invoice/escrowRelease.service.js`  
**Purpose:** Centralized release state machine.

- **Role:** Single source of truth called whenever funds are unlocked (e.g. OTP verification or Admin dispute resolution).
- **Invoice Trigger:** Once the order state transitions to `RELEASED_TO_SELLER`, it immediately calls `generateInvoice(order)` to produce the PDF.
- **Fault-Tolerance:** Wraps invoice generation in a `try/catch` block so that any disk/PDF warning will never abort the core escrow financial release.

```javascript
// Update order fields
order.escrowStatus = 'RELEASED_TO_SELLER';
order.deliveryMethod = deliveryMethod;
order.deliveredAt = new Date();

if (isMongoConnected) {
  await order.save();
}

// Generate PDF invoice
try {
  await generateInvoice(order);
} catch (invErr) {
  console.warn('[EscrowReleaseService] PDF invoice generation warning:', invErr.message);
}
```

---

## 🔗 Shared Files — F15-Specific Edits

---

### 1. `order.model.js` (`features/f13-stripe-checkout/order.model.js`)
**What was edited for F15:** Added the `invoiceUrl` property to track the PDF file path.

```javascript
const f13OrderSchema = new mongoose.Schema({
  // ... other fields
  deliveredAt: {
    type: Date,
    default: null
  },
  invoiceUrl: {
    type: String,
    default: null  // ← F15: Stores path like "/uploads/invoices/invoice_6a85ce1f6c433ef0851e8945.pdf"
  },
  // ...
});
```

---

### 2. `server.js` (`server.js`)
**What was edited for F15:**
1. Imported `invoiceRoutes`.
2. Mounted `invoiceRoutes` under `/api/escrow`.
3. Configured Express static serving for `/uploads` directory so PDF invoices and assets can be accessed by the browser.

```javascript
import invoiceRoutes from './features/f15-invoice/invoice.routes.js';

// Serve local uploaded files statically (/uploads/invoices, /uploads/images)
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

// Mount API routes
app.use('/api/escrow', escrowRoutes);
app.use('/api/escrow', invoiceRoutes); // ← F15 invoice route
```

---

### 3. `EscrowVaultPage.jsx` (`views/features/f14-escrow-holding/EscrowVaultPage.jsx`)
**What was edited for F15:**
Added the **"DOWNLOAD PDF INVOICE"** button on the Buyer's order card when `order.escrowStatus === 'RELEASED_TO_SELLER'`.

```jsx
{/* F15 PDF Invoice Download Button */}
{order.escrowStatus === 'RELEASED_TO_SELLER' && (
  <a
    href={`/api/escrow/invoice/${order._id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold font-mono flex items-center space-x-1.5 shadow-sm shrink-0 min-h-[44px]"
  >
    <FileText className="w-4 h-4" />
    <span>DOWNLOAD PDF INVOICE</span>
  </a>
)}
```

---

### 4. `SellerEscrowPanel.jsx` (`views/features/f14-escrow-holding/SellerEscrowPanel.jsx`)
**What was edited for F15:**
Added the green **"PDF INVOICE"** download button inside the unlocked escrow banner on the Seller's order card.

```jsx
{/* Already released — show big green success and PDF invoice button */}
{(isAlreadyReleased || isSuccess) ? (
  <div className="flex items-center justify-between space-x-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
      <div>
        <p className="text-sm font-bold text-emerald-700">Escrow Unlocked Successfully!</p>
        <p className="text-xs text-emerald-600 mt-0.5">
          ${Number(order.sellerEarnings).toFixed(2)} has been released to your seller account.
        </p>
      </div>
    </div>
    <a
      href={`/api/escrow/invoice/${order._id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 bg-white text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold font-mono shrink-0"
    >
      PDF INVOICE
    </a>
  </div>
) : ( ... )}
```

---

### 5. `escrow.controller.js` (`features/f14-escrow-holding/escrow.controller.js`)
**What was edited for F15:**
Updated `verifyOtpAndRelease` to delegate unlocking to `releaseEscrow`, which automatically generates the invoice and returns the updated order.

```javascript
// Call shared release service (handles dispute check, status update, and invoice creation)
const { releaseEscrow } = await import('../f15-invoice/escrowRelease.service.js');
const result = await releaseEscrow(orderId, 'OTP');

if (!result.success) {
  return res.status(result.status || 400).json(result);
}

return res.status(200).json({
  success: true,
  message: 'OTP verified! Escrow unlocked. Seller payout has been released.',
  order: result.order
});
```

---

## 🔄 Complete Feature Flow (Step-by-Step Simulation)

```
1. PHYSICAL DELIVERY & HANDSHAKE:
   └── Buyer gives their secret 4-digit OTP to the Seller upon physical inspection.

2. SELLER UNLOCKS ESCROW:
   └── Seller inputs OTP on SellerEscrowPanel.jsx → clicks "VERIFY & RELEASE"
   └── Frontend sends POST /api/escrow/verify-otp { orderId, enteredOtp }

3. BACKEND VALIDATION & RELEASE:
   └── escrow.controller.js validates OTP against database
   └── Calls releaseEscrow(orderId, 'OTP') in escrowRelease.service.js
   └── order.escrowStatus updated to "RELEASED_TO_SELLER"

4. AUTOMATIC PDF GENERATION (F15):
   └── releaseEscrow invokes generateInvoice(order) from invoice.controller.js
   └── pdfkit creates a vector PDF at /uploads/invoices/invoice_<orderId>.pdf
   └── order.invoiceUrl is set to "/uploads/invoices/invoice_<orderId>.pdf" and saved in MongoDB

5. INSTANT UI UPDATE:
   └── Both Buyer (EscrowVaultPage.jsx) and Seller (SellerEscrowPanel.jsx) UI update
   └── Green "DOWNLOAD PDF INVOICE" / "PDF INVOICE" buttons appear on the order card

6. INVOICE VIEWING & DOWNLOAD:
   └── User clicks "DOWNLOAD PDF INVOICE"
   └── Browser opens GET /api/escrow/invoice/:orderId in a new tab
   └── invoice.controller.js serves the PDF with Content-Type: application/pdf
   └── Browser displays/prints the official Decorate3D transaction invoice
```

---

## 🧮 Invoice Financial Breakdown Math

For any furniture order ($P$):
$$\text{Total Paid (Gross)} = P$$
$$\text{Platform Commission Fee (10\%)} = 0.10 \times P$$
$$\text{Seller Net Payout (90\%)} = 0.90 \times P$$

**Example Scenario ($450.00 Lounge Chair):**
- **Total Paid:** `$450.00`
- **Platform Fee (10%):** `$45.00`
- **Seller Net (90%):** `$405.00`
- **Escrow Verification:** `OTP Delivery Handover`
- **Status:** `RELEASED_TO_SELLER`

---

## 🛠️ API Endpoints Summary

| Method | Endpoint | Handler | Purpose |
|--------|----------|---------|---------|
| `GET` | `/api/escrow/invoice/:orderId` | `downloadInvoice` | Serves official PDF invoice for browser viewing/download |
| `POST` | `/api/escrow/verify-otp` | `verifyOtpAndRelease` | Verifies OTP and triggers `generateInvoice` via release service |

---

## 📦 Dependencies Used

| Package | Purpose | Category |
|---------|---------|----------|
| `pdfkit` | Programmatic vector PDF creation (header, tables, fonts, layout) | npm package |
| `fs` | File system read/write operations for PDF files | Node.js Built-in |
| `path` | Cross-platform file path resolution | Node.js Built-in |
| `express` | HTTP routing and static file streaming (`res.sendFile`) | npm package |
| `mongoose` | Order persistence and `invoiceUrl` updates | npm package |
| `lucide-react` | `FileText` icon for invoice download button | npm package |
