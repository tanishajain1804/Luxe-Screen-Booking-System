"use client";

import React, { Suspense } from "react";
import { BookingProvider, useBooking } from "@/components/booking/BookingContext";
import { BookingHeader } from "@/components/booking/BookingHeader";
import { BookingSummarySidebar } from "@/components/booking/BookingSummarySidebar";
import { Step1DateTime } from "@/components/booking/Step1DateTime";
import { Step2Theatres } from "@/components/booking/Step2Theatres";
import { Step3Contact } from "@/components/booking/Step3Contact";
import { Step4Occasion } from "@/components/booking/Step4Occasion";
import { Step5Cakes } from "@/components/booking/Step5Cakes";
import { Step6Decorations } from "@/components/booking/Step6Decorations";
import { Step7Gifts } from "@/components/booking/Step7Gifts";
import { Step8Payment } from "@/components/booking/Step8Payment";
import { Step9Success } from "@/components/booking/Step9Success";
import { HERO_IMAGES } from "@/data";

function BookingContent() {
  const {
    mounted,
    step,
    activeSlide,
    setActiveSlide,
    isPaid
  } = useBooking();

  const isDarkBg = step <= 2;

  // Background slideshow transition loop
  React.useEffect(() => {
    if (!isDarkBg) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isDarkBg, setActiveSlide]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] text-[#6b7280]">
        Loading booking parameters...
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between relative transition-colors duration-500 ${
        isDarkBg 
          ? "text-white" 
          : "bg-[#f8f5ef] text-gray-900"
      }`}
    >
      {/* Fullscreen Functional Background Slideshow for Step 1 & 2 */}
      {isDarkBg && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {HERO_IMAGES.map((imgUrl, index) => (
            <img
              key={index}
              alt={`Theatre Background Slide ${index + 1}`}
              src={imgUrl}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Vignette & Contrast Overlays */}
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.55)_100%)]"></div>
        </div>
      )}

      {/* Pagination Dots */}
      {isDarkBg && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/5">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === activeSlide 
                  ? "w-6 h-2 bg-[#C85A17]" 
                  : "w-2 h-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Sticky Custom Header */}
      <BookingHeader />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className={`w-full ${step === 1 || step === 5 ? "max-w-4xl" : "max-w-7xl"} mx-auto`}>
          
          {/* Step 1 & 2: Full Width, No Sidebar */}
          {step === 1 && <Step1DateTime />}
          {step === 2 && <Step2Theatres />}

          {/* Step 3 to 8: Split Checkout Flow */}
          {step >= 3 && step < 9 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form/Steps */}
              <div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm relative z-10 min-h-[420px] flex flex-col justify-between">
                {step === 3 && <Step3Contact />}
                {step === 4 && <Step4Occasion />}
                {step === 5 && <Step5Cakes />}
                {step === 6 && <Step6Decorations />}
                {step === 7 && <Step7Gifts />}
                {step === 8 && <Step8Payment />}
              </div>

              {/* Right Column: Booking Summary Sidebar */}
              <BookingSummarySidebar />
            </div>
          ) : null}

          {/* Step 9: Confirmed Page */}
          {step === 9 && isPaid && <Step9Success />}

        </div>
      </main>

      {/* Minimal Footer */}
      <footer 
        className={`w-full border-t py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 z-10 relative transition-all duration-300 ${
          isDarkBg 
            ? "bg-black/45 border-white/10 text-white/50" 
            : "bg-[#0d0e12] border-white/10 text-white/50"
        }`}
      >
        <div className="mx-auto max-w-7xl w-full flex items-center justify-between">
          <span className="text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} Luxe Screens. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] text-[#6b7280]">Loading booking parameters...</div>}>
      <BookingProvider>
        <BookingContent />
      </BookingProvider>
    </Suspense>
  );
}
