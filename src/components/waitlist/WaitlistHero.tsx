"use client";

import React from "react";
import { BANNER_IMAGES } from "@/data";

interface WaitlistHeroProps {
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
}

export const WaitlistHero: React.FC<WaitlistHeroProps> = ({
  activeSlide,
  setActiveSlide
}) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#0e1017] text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        {BANNER_IMAGES.map((imgUrl, index) => (
          <img 
            key={index}
            alt={`Private theatre setup decoration ${index + 1}`} 
            src={imgUrl}
            className={`object-cover object-center w-full h-full absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === activeSlide ? "opacity-70" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55"></div>
        
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

        {/* Visual representations of recliners flanking the bottom sides */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* White Projection Screen Container representation */}
        <div className="mx-auto max-w-2xl bg-[#1a1c24] border-4 border-double border-[#C85A17]/70 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#C85A17]/95 uppercase">
            Slot Request Portal
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
            Join the Waitlist
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-light">
            If your preferred slot is unavailable or you have a special request, leave your details here. Our team will reach out as soon as we can accommodate you.
          </p>
        </div>
      </div>
    </section>
  );
};
