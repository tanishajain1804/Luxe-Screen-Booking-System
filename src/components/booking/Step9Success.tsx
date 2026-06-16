"use client";

import React from "react";
import Link from "next/link";
import { useBooking } from "./BookingContext";
import { CheckCircle2, ShieldCheck, Download } from "lucide-react";

export const Step9Success: React.FC = () => {
  const {
    bookingId,
    activeTheater,
    date,
    slotTime,
    guests,
    kids,
    location,
    cart,
    phone,
    total,
    basePrice,
    extraGuestsPrice,
    kidsPrice,
    decorPrice,
    appliedDiscount
  } = useBooking();

  const handleDownloadInvoice = () => {
    // Compile items list
    let itemizedRows = `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">Room Base Price (${activeTheater.name})</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">1</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${basePrice}</td>
      </tr>
    `;

    if (extraGuestsPrice > 0) {
      itemizedRows += `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Extra Adults Charge</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">-</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${extraGuestsPrice}</td>
        </tr>
      `;
    }

    if (kidsPrice > 0) {
      itemizedRows += `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Kids Charge (${kids} Kids)</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${kids}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${kidsPrice}</td>
        </tr>
      `;
    }

    if (decorPrice > 0) {
      itemizedRows += `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Decoration Setup</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">1</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${decorPrice}</td>
        </tr>
      `;
    }

    cart.forEach((item) => {
      itemizedRows += `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price * item.quantity}</td>
        </tr>
      `;
    });

    if (appliedDiscount > 0) {
      itemizedRows += `
        <tr style="color: #16a34a; font-weight: bold;">
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Coupon Discount</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">-</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">-₹${appliedDiscount}</td>
        </tr>
      `;
    }

    const remainingAmount = Math.max(0, total - 750);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice - ${bookingId}</title>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #333;
            line-height: 1.5;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #C85A17;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .brand {
            font-size: 28px;
            font-weight: bold;
            color: #C85A17;
          }
          .invoice-details {
            text-align: right;
            font-size: 14px;
          }
          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
            font-size: 14px;
          }
          .details-block h4 {
            margin: 0 0 8px 0;
            color: #111827;
            font-size: 16px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            font-size: 14px;
          }
          th {
            background-color: #f8f9fa;
            font-weight: bold;
            padding: 12px 10px;
            border-bottom: 2px solid #ddd;
            text-align: left;
          }
          .summary-table {
            width: 50%;
            margin-left: auto;
            margin-bottom: 40px;
          }
          .summary-table td {
            padding: 6px 10px;
          }
          .summary-table tr.total {
            font-weight: bold;
            font-size: 16px;
            border-top: 1px solid #ddd;
          }
          .footer {
            border-top: 1px solid #eee;
            padding-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #777;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">Luxe Screens</div>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Premium Private Cinema Experience</div>
          </div>
          <div class="invoice-details">
            <div style="font-size: 20px; font-weight: bold; color: #111827;">INVOICE</div>
            <div>Invoice No: <strong>INV-${bookingId}</strong></div>
            <div>Date: ${new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })}</div>
          </div>
        </div>

        <div class="details-grid">
          <div class="details-block">
            <h4>Venue Location</h4>
            <div style="color: #555;">
              <strong>Luxe Screens</strong><br>
              ${location}<br>
              Delhi NCR, India
            </div>
          </div>
          <div class="details-block" style="text-align: right;">
            <h4>Booking Summary</h4>
            <div style="color: #555;">
              Date of Event: <strong>${date}</strong><br>
              Time Slot: <strong>${slotTime}</strong><br>
              Guests count: <strong>${guests} Adults, ${kids} Kids</strong>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 60%;">Description</th>
              <th style="width: 15%; text-align: center;">Qty</th>
              <th style="width: 25%; text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${itemizedRows}
          </tbody>
        </table>

        <table class="summary-table">
          <tr>
            <td>Total Booking Amount:</td>
            <td style="text-align: right;">₹${total}</td>
          </tr>
          <tr style="color: #16a34a; font-weight: bold;">
            <td>Prepaid Advance Paid:</td>
            <td style="text-align: right;">-₹750</td>
          </tr>
          <tr class="total" style="color: #C85A17;">
            <td>Remaining Balance (Pay at Venue):</td>
            <td style="text-align: right; font-size: 18px;">₹${remainingAmount}</td>
          </tr>
        </table>

        <div class="footer">
          <p>Thank you for celebrating your special occasion with Luxe Screens!</p>
          <p>For any cancellations, rescheduling, or customization requests, please contact us at <strong>hello@luxescreens.com</strong> or call/WhatsApp <strong>+91 99999 99999</strong>.</p>
        </div>

        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    // Download as HTML file directly
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Invoice-${bookingId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md animate-fade-in text-gray-800">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mb-6">
        <CheckCircle2 size={36} />
      </div>

      <h2 className="font-serif text-3xl font-bold text-[#111827] mb-2 leading-tight">Booking Confirmed!</h2>
      <p className="text-xs text-gray-500 font-medium">Your private cinema suite is locked and reserved.</p>

      <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-left space-y-2.5">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500">Booking ID</span>
          <span className="font-mono font-bold text-[#C85A17]">{bookingId}</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500">Theater</span>
          <span className="font-semibold text-gray-800">{activeTheater.name}</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500">Date & Slot</span>
          <span className="font-semibold text-gray-800">{date} ({slotTime})</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500">Guests</span>
          <span className="font-semibold text-gray-800">{guests} Adults, {kids} Kids</span>
        </div>
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500">Location</span>
          <span className="font-semibold text-gray-800">{location}</span>
        </div>
        {/* Price Breakdown */}
        <div className="border-t border-gray-200 pt-2.5 space-y-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Price Breakdown</p>
          
          <div className="flex justify-between text-xs font-semibold text-gray-600">
            <span>Room Base Price ({activeTheater.name})</span>
            <span>₹{basePrice}</span>
          </div>

          {extraGuestsPrice > 0 && (
            <div className="flex justify-between text-xs font-semibold text-gray-600">
              <span>Extra Adults Charge</span>
              <span>₹{extraGuestsPrice}</span>
            </div>
          )}

          {kidsPrice > 0 && (
            <div className="flex justify-between text-xs font-semibold text-gray-600">
              <span>Kids Charge ({kids} Kids)</span>
              <span>₹{kidsPrice}</span>
            </div>
          )}

          {decorPrice > 0 && (
            <div className="flex justify-between text-xs font-semibold text-gray-600">
              <span>Decoration Setup</span>
              <span>₹{decorPrice}</span>
            </div>
          )}

          {cart.length > 0 && (
            <div className="space-y-1.5 border-t border-dashed border-gray-200 pt-1.5">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Cart Add-ons</p>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-[11px] font-semibold text-gray-600">
                  <span>
                    {item.name} <span className="text-gray-400 font-medium">x{item.quantity}</span>
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          )}

          {appliedDiscount > 0 && (
            <div className="flex justify-between text-xs font-bold text-emerald-600 border-t border-dashed border-gray-200 pt-1.5">
              <span>Coupon Discount</span>
              <span>-₹{appliedDiscount}</span>
            </div>
          )}
        </div>

        {/* Payment Summary */}
        <div className="border-t border-gray-200 pt-2.5 space-y-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Payment Summary</p>
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-gray-500">Total Booking Amount</span>
            <span className="text-gray-800">₹{total}</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-emerald-600">
            <span>Prepaid Advance Paid (Online)</span>
            <span>₹750</span>
          </div>
          <div className="flex justify-between border-t border-dashed border-gray-200 pt-2 text-xs font-black text-gray-900">
            <span>Remaining Amount (Pay at Venue)</span>
            <span className="text-[#C85A17]">₹{Math.max(0, total - 750)}</span>
          </div>
        </div>
      </div>

      <div className="text-[11px] text-[#4b5563] leading-normal flex gap-2 items-start justify-center p-3 rounded-lg bg-[#C85A17]/5 border border-[#C85A17]/10 mb-8">
        <ShieldCheck size={16} className="text-[#A04000] shrink-0 mt-0.5" />
        <p className="text-left leading-normal">
          A confirmation text has been triggered to your phone number **{phone}**. Please carry your Aadhaar Card at the check-in time.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={handleDownloadInvoice}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border-2 border-[#C85A17] text-[#C85A17] hover:bg-[#C85A17]/5 px-8 py-3 text-sm font-bold shadow-xs hover:scale-103 transition-all cursor-pointer"
        >
          <Download size={16} />
          Download Invoice
        </button>
        <Link
          href="/"
          className="w-full sm:w-auto inline-block rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white px-8 py-3 text-sm font-bold shadow-md hover:scale-103 transition-all text-center"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};
