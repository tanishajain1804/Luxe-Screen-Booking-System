"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/data";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="bg-white px-3 py-14 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">Why Choose a Private Theatre?</h2>
          <p className="text-sm sm:text-base text-gray-600">Turn ordinary moments into unforgettable experiences</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition bg-white">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 text-black rounded-full flex items-center justify-center mb-4">
                  <IconComp size={20} />
                </div>
                <h3 className="text-md sm:text-lg font-bold text-black mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
