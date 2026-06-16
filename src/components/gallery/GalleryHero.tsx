"use client";

import React from "react";
import Link from "next/link";
import { BANNER_IMAGES } from "@/data";

interface GalleryHeroProps {
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
}

export const GalleryHero: React.FC<GalleryHeroProps> = ({
  activeSlide,
  setActiveSlide
}) => {
  return (
    <section className="relative overflow-hidden pb-12 pt-[150px] sm:pb-14 sm:pt-[170px] lg:pb-16 lg:pt-[190px]">
      <div className="absolute inset-0 pointer-events-none z-0">
        {BANNER_IMAGES.map((imgUrl, index) => (
          <img 
            key={index}
            alt={`Private theatre setup decoration ${index + 1}`} 
            src={imgUrl}
            className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.55)_100%)]"></div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/20 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/5">
        {BANNER_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === activeSlide 
                ? "w-4 h-1.5 bg-[#C85A17]" 
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#C85A17]/95 uppercase">
            Private Theatre Gallery
          </p>
          <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl font-semibold">
            Real Celebrations Inside
            <span className="block text-[#C85A17]">Your Private Theatre</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
            Explore birthday surprises, romantic date nights, proposals, and custom events hosted in our private cinema spaces with premium screen, sound, and decor.
          </p>
          <ul className="mt-5 sm:mt-6 space-y-2 text-sm sm:text-base text-white/95 flex flex-col items-center">
            <li className="flex items-center gap-2">
              <span className="text-[#C85A17] text-lg">•</span>
              <span>100% private screening experience</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C85A17] text-lg">•</span>
              <span>Decor, cakes, and add-ons available</span>
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link 
              className="rounded-full bg-[#C85A17] text-white px-6 py-3 text-sm font-semibold hover:bg-[#A04000] transition-colors shadow-md animate-pulse" 
              href="/booking"
            >
              Book Your Slot
            </Link>
            <Link 
              className="rounded-full border border-white/40 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors" 
              href="/#contact"
            >
              Plan Custom Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
