"use client";

import React, { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { useBooking } from "./BookingContext";
import { LOCATIONS } from "@/data";
import { formatCustomDate } from "@/lib/utils";

export const Step1DateTime: React.FC = () => {
  const {
    location,
    setLocation,
    date,
    setDate,
    setStep
  } = useBooking();

  const dateInputRef = useRef<HTMLInputElement>(null);

  const getDates = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const list = [];
    for (let i = 0; i < 4; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      let label = weekdays[d.getDay()];
      if (i === 0) label = "Today";
      if (i === 1) label = "Tomorrow";
      const monthName = d.toLocaleString("en-US", { month: "short" });
      list.push({
        raw: d.toISOString().split("T")[0],
        label: label,
        displayDate: `${d.getDate()} ${monthName}`
      });
    }
    return list;
  };

  return (
    <div className="rounded-2xl border border-white/20 bg-black/60 p-6 sm:p-8 shadow-2xl backdrop-blur-md text-white text-center max-w-[580px] mx-auto relative z-10">
      <h2 className="font-serif text-3xl font-bold text-white mb-2 leading-tight">Select Location & Date</h2>
      <p className="text-xs text-white/85 mb-6">Choose where and when you want to celebrate</p>
      
      {/* Location Select (Capsule slider style) */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-2 bg-white/10 p-1.5 rounded-full w-full max-w-[420px] mx-auto border border-white/10">
          {LOCATIONS.map((loc) => {
            const isActive = location === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => setLocation(loc)}
                className={`flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <MapPin size={13} className={isActive ? "text-[#C85A17]" : "text-white/70"} />
                <span>{loc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Date selection grid (5 boxes) */}
      <div className="mb-6">
        <div className="grid grid-cols-5 gap-2.5">
          {getDates().map((d) => {
            const isActive = date === d.raw;
            return (
              <button
                key={d.raw}
                type="button"
                onClick={() => setDate(d.raw)}
                className={`flex flex-col items-center justify-center rounded-xl border py-2.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black border-white shadow-md"
                    : "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <span className={`text-[10px] font-bold tracking-wide ${isActive ? "text-gray-500" : "text-white/60"}`}>{d.label}</span>
                <span className="text-xs sm:text-sm font-bold mt-0.5">{d.displayDate}</span>
              </button>
            );
          })}
          
          {/* Choose More Date with Calendar Input */}
          {(() => {
            const isCustomDate = date && !getDates().some(d => d.raw === date);
            const formatted = isCustomDate ? formatCustomDate(date) : "";
            
            return (
              <div 
                onClick={() => {
                  if (dateInputRef.current) {
                    try {
                      dateInputRef.current.showPicker();
                    } catch (e) {
                      dateInputRef.current.click();
                    }
                  }
                }}
                className={`relative flex flex-col items-center justify-center rounded-xl border py-2.5 cursor-pointer transition-all ${
                  isCustomDate
                    ? "bg-white text-black border-white shadow-md font-bold"
                    : "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <input
                  ref={dateInputRef}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    if (e.target.value) setDate(e.target.value);
                  }}
                  className="absolute inset-0 opacity-0 w-full h-full pointer-events-none"
                />
                {isCustomDate ? (
                  <>
                    <span className="text-[10px] font-bold text-gray-500 pointer-events-none">Choose More</span>
                    <span className="text-xs sm:text-sm font-bold mt-0.5 flex items-center gap-1 pointer-events-none">
                      📅 {formatted}
                    </span>
                  </>
                ) : (
                  <>
                    <Calendar size={14} className="text-white/80 pointer-events-none" />
                    <span className="text-[9px] font-bold mt-1 pointer-events-none">Choose More</span>
                    <span className="text-[9px] font-bold pointer-events-none">Date</span>
                  </>
                )}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Bottom row: availability notice and view slots button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-5">
        <div className="flex items-center gap-2 text-left">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-white/95 font-medium">51 people are checking availability right now</span>
        </div>
        
        <button
          type="button"
          disabled={!date}
          onClick={() => setStep(2)}
          className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white font-bold px-6 py-2.5 text-xs uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md"
        >
          View Available Slots
        </button>
      </div>
    </div>
  );
};
