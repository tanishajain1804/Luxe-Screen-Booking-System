"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsAndConditions() {
  return (
    <div className="bg-[#f8f5ef] min-h-screen text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 mb-6 border-b border-black/10 pb-4">
          Terms &amp; Conditions
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-medium">
          <p>
            Welcome to Luxe Screens. By accessing our website and booking our private cinema experiences, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">1. Booking and Reserving Slots</h2>
            <p>
              To confirm any theatre reservation slot, an advance payment of ₹750 is required. The remaining balance must be paid directly at the theatre venue before your screening starts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">2. Verification and Check-In</h2>
            <p>
              All guests are required to carry a valid government-issued photo ID card (such as Aadhaar card, PAN card, or driving license) for verification at check-in. Entry will be denied without proper verification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">3. Outside Food and Drinks</h2>
            <p>
              Outside food, snacks, and beverages are strictly prohibited inside the screening suites to maintain hygiene and safety. A pantry service is available at the venue to order snacks and main courses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">4. Damages and Behavior</h2>
            <p>
              Guests are responsible for maintaining the decor and equipment within the private suites. Any damage caused to screens, seating, sound systems, or decorative assets will be charged to the booking contact person. Improper behavior or illegal activities will result in immediate termination of slot without refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">5. Updates and Jurisdiction</h2>
            <p>
              Luxe Screens LLP reserves the right to modify these terms at any time. All bookings and disputes are subject to the exclusive jurisdiction of Delhi courts.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
