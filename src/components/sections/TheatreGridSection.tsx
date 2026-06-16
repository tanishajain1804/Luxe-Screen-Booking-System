"use client";

import React from "react";
import Link from "next/link";
import { Monitor, Speaker, MapPin, Users, Utensils, PartyPopper, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { HOMEPAGE_THEATERS } from "@/data";

export const TheatreGridSection: React.FC = () => {
  return (
    <section id="spaces" className="bg-white py-14 sm:py-10 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Choose your private space</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Luxury private theatres designed for birthdays, proposals, anniversaries and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-10">
          {HOMEPAGE_THEATERS.map((theater) => (
            <div 
              key={theater.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg sm:rounded-2xl sm:shadow-xl bg-white"
            >
              {/* Image & Badges */}
              <div className="relative h-[190px] sm:h-[210px] md:h-[220px] lg:h-[260px] overflow-hidden">
                <div className="pointer-events-none absolute left-2 top-2 z-10 flex gap-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                    <Monitor size={11} />
                    {theater.screen}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                    <Speaker size={11} />
                    {theater.sound}
                  </span>
                </div>
                <img 
                  alt={theater.name} 
                  src={theater.image} 
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Card Content details */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-2.5 flex items-start justify-between gap-2">
                  <div className="min-w-0 flex items-center gap-2">
                    <h3 className="truncate text-lg font-bold text-black sm:text-xl md:text-[22px] lg:text-2xl">
                      {theater.name}
                    </h3>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#C85A17]/25 bg-[#C85A17]/8 px-2 py-0.5 text-[10px] font-semibold text-[#6E2C0C]">
                      {theater.type}
                    </span>
                  </div>

                  {/* Navigation Buttons: Map & Menu */}
                  <div className="flex gap-2">
                    <a 
                      href={theater.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col items-center gap-0.5 text-gray-700 transition-colors hover:text-black"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all group-hover:scale-105">
                        <MapPin size={13} />
                      </div>
                      <span className="text-[9px] font-medium">Map</span>
                    </a>
                    <a 
                      href={theater.menuUrl} 
                      className="group flex flex-col items-center gap-0.5 text-gray-700 transition-colors hover:text-black"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all group-hover:scale-105">
                        <Utensils size={13} />
                      </div>
                      <span className="text-[9px] font-medium">Menu</span>
                    </a>
                  </div>
                </div>

                {/* Icon details ribbon */}
                <div className="mb-4 space-y-1.5 text-[10px] sm:text-[11px] text-gray-600">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} className="text-gray-400" />
                      Pitampura, Delhi
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users size={12} className="text-gray-400" />
                      {theater.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Utensils size={12} className="text-gray-400" />
                      Food Included
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <PartyPopper size={12} className="text-gray-400" />
                      Decor ₹700 Only
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck size={12} className="text-emerald-600" />
                      Free Cancellation*
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Heart size={12} className="text-red-500" />
                      Ideal for couples & families
                    </span>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="mt-auto flex items-end justify-between gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xl font-bold leading-none text-black sm:text-2xl">{theater.price}</p>
                    <p className="mt-0.5 text-[10px] text-gray-500">For 3 Hours</p>
                  </div>

                  <Link 
                    href={`/booking?room=${theater.id}`}
                    className="group inline-flex items-center justify-center rounded-full border border-black bg-transparent font-semibold transition-all hover:bg-[#C85A17] hover:text-black hover:border-[#C85A17] px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    <span>Check Availability</span>
                    <ArrowRight size={14} className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-200 group-hover:ml-1 group-hover:w-[14px] group-hover:opacity-100" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
