"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RefundPolicy() {
  return (
    <div className="bg-[#f8f5ef] min-h-screen text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 mb-6 border-b border-black/10 pb-4">
          Refund Policy
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-medium">
          <p>
            Please review our refund parameters details carefully before booking your private cinema slot.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">1. Eligibility for Refunds</h2>
            <p>
              To receive a 100% refund of your ₹750 advance reservation fee, you must cancel your booking at least 72 hours before the scheduled start time of your slot.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">2. Processing Time</h2>
            <p>
              Once approved, refunds are processed back to the original payment source (credit card, debit card, or UPI account) within 5 to 7 business days depending on banking channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">3. Non-Refundable Scenarios</h2>
            <p>
              Cancellations or changes requested within 72 hours of the reserved slot time are strictly non-refundable. Additionally, failure to check in due to missing photo verification cards is not eligible for a refund.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
