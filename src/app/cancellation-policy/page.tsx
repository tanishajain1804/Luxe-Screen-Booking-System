"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CancellationPolicy() {
  return (
    <div className="bg-[#f8f5ef] min-h-screen text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 mb-6 border-b border-black/10 pb-4">
          Cancellation &amp; Rescheduling Policy
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-medium">
          <p>
            We understand that plans can change. Here is how you can cancel or reschedule your private screening booking.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">1. How to Cancel</h2>
            <p>
              To cancel your booking, please call or WhatsApp our official contact number at **+91 99999 99999** with your Booking ID and name. 
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">2. Rescheduling Policy</h2>
            <p>
              Rescheduling requests are treated similarly to cancellations. You can reschedule your slot free of charge if requested at least 72 hours before the start time. Rescheduling requests inside 72 hours are subject to slot availability and a penalty fee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">3. Emergency Cancellations</h2>
            <p>
              In rare situations of extreme weather conditions or technical maintenance failures on our side, Luxe Screens reserves the right to cancel bookings. Under such circumstances, you will be offered a full refund or free rescheduling options immediately.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
