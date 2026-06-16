"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SHORTS_VIDEO_IDS } from "@/data";

export const InsideLookSection: React.FC = () => {
  const shortsScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftShorts, setShowLeftShorts] = useState(false);
  const [showRightShorts, setShowRightShorts] = useState(true);

  const updateScrollButtons = () => {
    if (shortsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = shortsScrollRef.current;
      setShowLeftShorts(scrollLeft > 10);
      setShowRightShorts(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (shortsScrollRef.current) {
      const scrollAmount = shortsScrollRef.current.clientWidth * 0.75;
      shortsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => {
      updateScrollButtons();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#f8f5ef] px-3 py-10 sm:px-6 sm:py-12 border-t border-black/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">A Look Inside Luxe Screens</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">Watch quick highlights from real celebrations in our private theatres.</p>
        </div>

        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-2 sm:left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 bg-white/75 backdrop-blur-xs hover:bg-white border border-black/10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
              showLeftShorts ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>

          {/* Horizontal Scrolling Video Container */}
          <div 
            ref={shortsScrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {SHORTS_VIDEO_IDS.map((videoId, idx) => (
              <article 
                key={idx} 
                className="min-w-[220px] max-w-[220px] sm:min-w-[260px] sm:max-w-[260px] rounded-2xl border-2 border-slate-700 bg-white overflow-hidden snap-start shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-slate-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&modestbranding=1&controls=1&mute=1`}
                    title={`Luxe Screens Celebration Short ${idx + 1}`}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={() => scroll('right')}
            className={`absolute right-2 sm:right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 bg-white/75 backdrop-blur-xs hover:bg-white border border-black/10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
              showRightShorts ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};
