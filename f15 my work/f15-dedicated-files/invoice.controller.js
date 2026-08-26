import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { F13OrderModel } from '../f13-stripe-checkout/order.model.js';

/**
 * Generates an official PDF invoice for an escrow order (Released, Refunded, or Split).
 * Saves to /uploads/invoices/invoice_<orderId>.pdf
 *
 * @param {Object} order
 */
export async function generateInvoice(order) {
  try {
    const invoicesDir = path.join(process.cwd(), 'uploads', 'invoices');
    if (!fs.existsSync(invoicesDir)) {
      fs.mkdirSync(invoicesDir, { recursive: true });
    }

    const orderIdStr = String(order._id || 'demo_order');
    const fileName = `invoice_${orderIdStr}.pdf`;
    const filePath = path.join(invoicesDir, fileName);
    const invoiceUrl = `/uploads/invoices/${fileName}`;

    let PDFDocument = null;
    try {
      PDFDocument = (await import('pdfkit')).default;
    } catch (e) {
      PDFDocument = null;
    }

    const isRefunded = order.escrowStatus === 'REFUNDED';
    const isSplit = order.escrowStatus === 'SPLIT_RESOLVED';
    const isReleased = order.escrowStatus === 'RELEASED_TO_SELLER';

    let verificationLabel = 'OTP Delivery Handover';
    if (order.deliveryMethod === 'DISPUTE_RESOLUTION') {
      if (isRefunded) verificationLabel = 'Admin Dispute Resolution (100% Buyer Refund)';
      else if (isSplit) verificationLabel = 'Admin Dispute Resolution (Partial Split Settlement)';
      else verificationLabel = 'Admin Dispute Resolution (Released to Seller)';
    }

    let invoiceSubtitle = 'Official C2C Escrow Payment & Delivery Invoice';
    if (isRefunded) invoiceSubtitle = 'Official C2C Escrow Dispute Refund & Settlement Invoice';
    if (isSplit) invoiceSubtitle = 'Official C2C Escrow Dispute Partial Split Invoice';

    if (PDFDocument) {
      const doc = new PDFDocument({ margin: 50 });
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      // Header Banner
      doc.rect(0, 0, doc.page.width, 100).fill('#1E232A');
      doc.fillColor('#A17A16').fontSize(22).font('Helvetica-Bold').text('Decorate3D Marketplace', 50, 30);
      doc.fillColor('#FFFFFF').fontSize(12).font('Helvetica').text(invoiceSubtitle, 50, 60);

      // Invoice Meta Details
      doc.fillColor('#1E232A').fontSize(10).font('Helvetica-Bold').text(`INVOICE ID: INV-${orderIdStr.toUpperCase()}`, 50, 120);
      doc.font('Helvetica').text(`Issued Date: ${new Date().toLocaleString()}`, 50, 135);
      doc.text(`Resolution / Verification: ${verificationLabel}`, 50, 150);
      doc.text(`Completion Date: ${order.deliveredAt ? new Date(order.deliveredAt).toLocaleString() : new Date().toLocaleString()}`, 50, 165);

      // Horizontal Line
      doc.moveTo(50, 185).lineTo(550, 185).strokeColor('#E5DEC9').stroke();

      // Buyer & Seller Details
      doc.fontSize(11).font('Helvetica-Bold').text('Buyer Details:', 50, 200);
      doc.font('Helvetica').fontSize(10).text(`Email: ${order.buyerEmail || 'N/A'}`, 50, 215);

      doc.fontSize(11).font('Helvetica-Bold').text('Seller Details:', 300, 200);
      doc.font('Helvetica').fontSize(10).text(`Email: ${order.sellerEmail || 'N/A'}`, 300, 215);

      // Table Header
      doc.rect(50, 250, 500, 25).fill('#F9F4E9');
      doc.fillColor('#A17A16').fontSize(10).font('Helvetica-Bold');
      doc.text('Item Description', 60, 258);
      doc.text('Total Amount', 240, 258);
      doc.text(isRefunded ? 'Buyer Refund' : 'Platform Fee (10%)', 340, 258);
      doc.text(isRefunded ? 'Seller Net' : 'Seller Net (90%)', 460, 258);

      // Table Content Row
      doc.fillColor('#1E232A').font('Helvetica').fontSize(9);
      const title = order.productTitle || 'Used Furniture Item';
      doc.text(title.length > 25 ? title.substring(0, 23) + '...' : title, 60, 285);
      doc.text(`$${Number(order.amount).toFixed(2)}`, 240, 285);

      if (isRefunded) {
        doc.text(`$${Number(order.amount).toFixed(2)} (100%)`, 340, 285);
        doc.text(`$0.00`, 460, 285);
      } else if (isSplit) {
        const total = Number(order.amount);
        const commission = Number(order.platformCommissionFee || (total * 0.1));
        const sellerNet = Number(order.sellerEarnings || 0);
        const buyerRefund = Math.max(0, total - commission - sellerNet);
        doc.text(`$${commission.toFixed(2)} (Fee)`, 340, 285);
        doc.text(`$${sellerNet.toFixed(2)} (Net)`, 460, 285);
      } else {
        doc.text(`$${Number(order.platformCommissionFee || (order.amount * 0.1)).toFixed(2)}`, 340, 285);
        doc.text(`$${Number(order.sellerEarnings || (order.amount * 0.9)).toFixed(2)}`, 460, 285);
      }

      // Total Breakdown Box
      doc.rect(320, 320, 230, 80).strokeColor('#E9D3A4').stroke();
      doc.fillColor('#1E232A').font('Helvetica-Bold').fontSize(10);
      doc.text('Total Transaction:', 330, 335);
      doc.text(`$${Number(order.amount).toFixed(2)}`, 470, 335);
      doc.text('Final Escrow Status:', 330, 355);

      if (isRefunded) {
        doc.fillColor('#6B21A8').text('REFUNDED', 450, 355);
      } else if (isSplit) {
        doc.fillColor('#3730A3').text('SPLIT_RESOLVED', 435, 355);
      } else {
        doc.fillColor('#166534').text('RELEASED_TO_SELLER', 430, 355);
      }

      // Footer Security Note
      const footerMsg = isRefunded
        ? 'This invoice confirms that funds locked in Decorate3D Escrow have been 100% refunded to the buyer following dispute mediation.'
        : isSplit
        ? 'This invoice confirms that funds locked in Decorate3D Escrow have been settled and split between buyer and seller.'
        : 'This invoice confirms that funds locked in Decorate3D Escrow have been released following physical handover verification.';

      doc.fillColor('#6B7280').fontSize(8).font('Helvetica').text(
        footerMsg,
        50, 440, { align: 'center', width: 500 }
      );

      doc.end();
      await new Promise((resolve) => stream.on('finish', resolve));
    } else {
      // HTML Invoice Fallback
      const htmlInvoice = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Invoice - ${orderIdStr}</title>
  <style>
    body { font-family: sans-serif; padding: 40px; background: #fbf9f5; color: #1e232a; }
    .header { background: #1e232a; color: #fff; padding: 20px; border-radius: 12px; }
    .gold { color: #a17a16; }
    .box { background: #fff; border: 1px solid #e5dec9; padding: 20px; border-radius: 12px; margin-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e5dec9; }
    th { background: #f9f4e9; color: #a17a16; }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="gold">Decorate3D Marketplace</h1>
    <p>${invoiceSubtitle}</p>
  </div>
  <div class="box">
    <p><strong>INVOICE ID:</strong> INV-${orderIdStr.toUpperCase()}</p>
    <p><strong>Issued Date:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>Resolution:</strong> ${verificationLabel}</p>
    <p><strong>Buyer Email:</strong> ${order.buyerEmail}</p>
    <p><strong>Seller Email:</strong> ${order.sellerEmail}</p>
    <table>
      <thead>
        <tr>
          <th>Item Description</th>
          <th>Total Paid</th>
          <th>${isRefunded ? 'Buyer Refund' : 'Platform Fee (10%)'}</th>
          <th>${isRefunded ? 'Seller Net' : 'Seller Payout (90%)'}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${order.productTitle}</td>
          <td>$${Number(order.amount).toFixed(2)}</td>
          <td>${isRefunded ? '$' + Number(order.amount).toFixed(2) + ' (100%)' : '$' + Number(order.platformCommissionFee || (order.amount * 0.1)).toFixed(2)}</td>
          <td>${isRefunded ? '$0.00' : '$' + Number(order.sellerEarnings || (order.amount * 0.9)).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="gold" style="margin-top: 20px;">Status: ${order.escrowStatus}</h3>
  </div>
</body>
</html>
      `;
      fs.writeFileSync(filePath, htmlInvoice, 'utf-8');
    }

    order.invoiceUrl = invoiceUrl;

    if (mongoose.connection && mongoose.connection.readyState === 1 && typeof order.save === 'function') {
      await order.save();
    }

    return invoiceUrl;
  } catch (err) {
    console.error('[InvoiceController] Failed to generate invoice:', err);
    return null;
  }
}

/**
 * GET /api/escrow/invoice/:orderId
 * Serves the PDF invoice for viewing / download in browser
 */
export async function downloadInvoice(req, res) {
  try {
    const { orderId } = req.params;
    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    let order = null;
    if (isMongoConnected) {
      order = await F13OrderModel.findById(orderId);
    } else {
      order = global.demoEscrowOrders?.find(o => String(o._id) === String(orderId)) || null;
    }

    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found.' });
    }

    if (!order.invoiceUrl || !fs.existsSync(path.join(process.cwd(), order.invoiceUrl))) {
      await generateInvoice(order);
    }

    const filePath = path.join(process.cwd(), order.invoiceUrl || `/uploads/invoices/invoice_${orderId}.pdf`);

    if (fs.existsSync(filePath)) {
      if (filePath.endsWith('.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
      } else if (filePath.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html');
      }
      return res.sendFile(filePath);
    } else {
      return res.status(404).json({ success: false, error: 'Invoice file not found.' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
