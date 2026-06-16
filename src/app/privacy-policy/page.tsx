"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f8f5ef] min-h-screen text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 mb-6 border-b border-black/10 pb-4">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-medium">
          <p>
            At Luxe Screens, we respect your privacy and are committed to protecting any personal data you share with us during the booking and checkout process.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">1. Information We Collect</h2>
            <p>
              We collect basic contact information including your full name, mobile number, and email address when you create a theatre booking or submit an inquiry. This data is strictly used to lock slot reservations and trigger SMS updates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">2. Security and Surveillance</h2>
            <p>
              For security, entry check-in areas and common walkways are monitored via CCTV. No cameras or surveillance equipment are present inside the private screening suites to guarantee full privacy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">3. Payment Information</h2>
            <p>
              All online advance transactions are securely processed through third-party encrypted payment gateway partners. We do not store your credit card digits or raw banking details on our local servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-950">4. Sharing Information</h2>
            <p>
              We do not sell, rent, or lease your personal information to third-party advertising networks. Information is only shared when legally requested by government authorities for security or identity check purposes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
