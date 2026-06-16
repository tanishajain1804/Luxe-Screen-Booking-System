"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/data";

export const ServicesSection: React.FC = () => {
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftServices, setShowLeftServices] = useState(false);
  const [showRightServices, setShowRightServices] = useState(true);

  const updateScrollButtons = () => {
    if (servicesScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = servicesScrollRef.current;
      setShowLeftServices(scrollLeft > 10);
      setShowRightServices(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (servicesScrollRef.current) {
      const scrollAmount = servicesScrollRef.current.clientWidth * 0.75;
      servicesScrollRef.current.scrollBy({
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
    <section className="bg-[#f8f5ef] px-3 py-10 sm:px-6 sm:py-12 lg:py-14">
      <div className="relative max-w-[1680px] mx-auto">
        <div className="mb-5 text-center sm:mb-6">
          <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">Our Services</h2>
        </div>
        
        <div className="relative overflow-hidden rounded-[5px] border-y border-black/10 bg-[#ffffff] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          {/* Custom Perforations representing vintage ticket edges */}
          <div aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-8 bg-[#f8f5ef] rounded-r-full border-r border-y border-black/10"></div>
          <div aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-8 bg-[#f8f5ef] rounded-l-full border-l border-y border-black/10"></div>

          <div className="relative group/carousel">
            {/* Left Arrow Button */}
            <button 
              onClick={() => scroll('left')}
              className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 bg-white/75 backdrop-blur-xs hover:bg-white border border-black/10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
                showLeftServices ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>

            <div 
              ref={servicesScrollRef}
              onScroll={updateScrollButtons}
              className="flex gap-5 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory scroll-smooth"
            >
              {SERVICES.map((s) => (
                <article key={s.id} className="flex flex-col min-w-[200px] sm:min-w-[240px] snap-start">
                  <header className="mb-2 flex items-center justify-between gap-3 text-[12px] tracking-[0.03em] text-black/75 sm:text-[14px]">
                    <span className="font-mono">[{s.id}</span>
                    <span className="truncate text-right font-mono">{s.name}]</span>
                  </header>
                  <div className="relative aspect-square overflow-hidden bg-black rounded-lg">
                    <img 
                      alt={s.name} 
                      src={s.img}
                      className="object-cover w-full h-full hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-center">
                    <h3 className="text-center font-sans text-[18px] font-semibold leading-none tracking-[0.04em] text-black sm:text-[22px]">
                      {s.tag}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button 
              onClick={() => scroll('right')}
              className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 bg-white/75 backdrop-blur-xs hover:bg-white border border-black/10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
                showRightServices ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
