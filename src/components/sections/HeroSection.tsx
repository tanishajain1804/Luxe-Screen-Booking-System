"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_IMAGES, STRIP_ITEMS } from "@/data";

interface HeroSectionProps {
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeSlide,
  setActiveSlide
}) => {
  return (
    <section className="relative min-h-[88svh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-[72px] sm:pt-[80px]">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((imgUrl, index) => (
          <img
            key={index}
            alt={`Private Theatre Celebration ${index + 1}`}
            src={imgUrl}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Top and Ambient Dark Overlays */}
        <div className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-black/60 via-black/28 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Manual Slideshow Controls removed as requested */}

      {/* Pagination Dots Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/5">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
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

      {/* Center Floating Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 md:px-8">
        <div className="relative mx-auto max-w-[480px] overflow-hidden rounded-2xl border border-white/30 bg-white/12 text-center shadow-[0_18px_48px_rgba(0,0,0,0.38)] backdrop-blur-sm px-3 py-4 pb-6 md:pb-8 sm:px-4 sm:py-5 md:max-w-[600px] md:px-6 md:py-6 lg:max-w-[760px]">
          {/* Inner Dark Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/30"></div>
          
          <div className="relative">
            <h1 className="hero-big-title mb-2 font-bold leading-tight text-[1.7rem] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] sm:text-4xl md:text-5xl text-white">
              Celebrate in Your Private Theatre
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-sm text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:mb-5 sm:text-base md:text-lg">
              Luxury private cinema moments, crafted for celebrations.
              <span className="block mt-0.5">Birthdays, anniversaries, proposals and date nights in a premium private screening room.</span>
            </p>
            
            <div className="flex items-center justify-center">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center rounded-full bg-[#C85A17] text-white font-semibold transition-all hover:shadow-xl hover:shadow-[#C85A17]/35 w-[240px] sm:w-[270px] px-5 py-3 md:py-2.5 lg:py-3 text-md whitespace-nowrap"
              >
                <span>Book Your Private Theatre</span>
                <ArrowRight size={18} className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-200 group-hover:ml-2 group-hover:w-[18px] group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ribbon Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none bg-black/40 backdrop-blur-xs py-3.5 border-t border-white/10 overflow-hidden">
        <div className="flex select-none whitespace-nowrap overflow-hidden">
          <div className="animate-marquee flex gap-12 text-xs font-bold uppercase tracking-wider text-white/85">
            {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{item}</span>
                <span className="text-[#C85A17] text-[10px]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
