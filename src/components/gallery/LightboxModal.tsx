"use client";

import React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxModalProps {
  lightboxIndex: number | null;
  setLightboxIndex: (idx: number | null) => void;
  filteredItems: Array<{ src: string; alt: string }>;
  handlePrev: () => void;
  handleNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  lightboxIndex,
  setLightboxIndex,
  filteredItems,
  handlePrev,
  handleNext
}) => {
  if (lightboxIndex === null) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-xs select-none p-4 sm:p-6">
      
      {/* Top Bar: Close Button */}
      <div className="flex justify-end shrink-0">
        <button 
          onClick={() => setLightboxIndex(null)}
          className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-50"
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>
      </div>

      {/* Center Wrapper: Main Photo + Left/Right Navigation */}
      <div className="flex-1 flex items-center justify-between relative max-w-7xl mx-auto w-full px-12 md:px-16 min-h-0">
        {/* Left Navigation Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Main Image Container */}
        <div className="mx-auto max-w-full max-h-full flex items-center justify-center p-2">
          <img 
            src={filteredItems[lightboxIndex].src} 
            alt={filteredItems[lightboxIndex].alt} 
            className="object-contain max-w-[80vw] max-h-[50vh] rounded-md shadow-2xl animate-fade-in"
          />
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Bottom Bar: Title, Slide Indicator, and filmstrip of Thumbnails */}
      <div className="w-full text-center space-y-3 pb-2 shrink-0">
        <p className="text-white/95 text-xs sm:text-sm md:text-base font-semibold px-4 max-w-2xl mx-auto leading-tight">
          {filteredItems[lightboxIndex].alt}
        </p>
        
        <div className="text-white/60 text-xs font-bold">
          {lightboxIndex + 1} / {filteredItems.length}
        </div>

        {/* Horizontal Filmstrip of Thumbnails */}
        <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto overflow-x-auto py-2 px-6 scrollbar-thin scrollbar-thumb-white/20">
          {filteredItems.map((item, idx) => {
            const isSelected = idx === lightboxIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`relative shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  isSelected 
                    ? "border-[#C85A17] opacity-100 scale-105 ring-2 ring-[#C85A17]/30 shadow-lg" 
                    : "border-transparent opacity-40 hover:opacity-75 hover:scale-102"
                }`}
                aria-label={`Switch to image ${idx + 1}`}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
