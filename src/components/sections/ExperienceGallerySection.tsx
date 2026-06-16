"use client";

import React from "react";
import { GALLERY_IMAGES } from "@/data";

export const ExperienceGallerySection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#f8f5ef] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Experience Gallery</h2>
          <p className="mt-2 text-sm text-gray-500">A glimpse into unforgettable private theatre moments</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                alt={img.alt} 
                src={img.src}
                className="h-32 sm:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-103"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
