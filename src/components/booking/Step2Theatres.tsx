"use client";

import React from "react";
import { 
  ChevronLeft, MapPin, Users, Utensils, Sparkles, 
  ShieldCheck, Heart, User, Cake, Gift, Calendar 
} from "lucide-react";
import { useBooking } from "./BookingContext";
import { THEATERS } from "@/data";

export const Step2Theatres: React.FC = () => {
  const {
    date,
    setDate,
    selectedTheaterSlots,
    setSelectedTheaterSlots,
    setTheaterId,
    setSlotId,
    setStep,
    toast,
    triggerToast,
    location
  } = useBooking();

  return (
    <div className="space-y-6 relative text-left">
      <div className="flex justify-start">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3.5 py-1.5 text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <ChevronLeft size={14} />
          <span>Back</span>
        </button>
      </div>

      {/* Toast Banner */}
      {toast && (
        <div className="fixed left-1/2 -translate-x-1/2 top-[84px] sm:top-[92px] z-[60] animate-toast-fade w-[90%] max-w-[340px] transition-all">
          <div className="flex items-center gap-3 bg-emerald-50/95 backdrop-blur-xs border border-emerald-200 rounded-xl px-4 py-2.5 shadow-lg">
            <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-xs">
              <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs font-bold text-emerald-950 leading-tight">{toast.title}</p>
              <p className="text-[10px] text-emerald-800 font-semibold mt-0.5">{toast.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {THEATERS.map((t) => {
          const todayStr = new Date().toISOString().split("T")[0];
          const isToday = date === todayStr;
          const standardSlots = t.slots.filter((s: any) => !s.time.includes("Tomorrow"));
          const activeDateSlots = isToday 
            ? standardSlots
            : standardSlots.map((s: any) => ({
                ...s,
                status: "available"
              }));
          const availableCount = activeDateSlots.filter(s => s.status === 'available').length;
          const isLowAvailability = availableCount <= 2;

          const tomorrowSlot = {
            id: `${t.id}-tomorrow`,
            time: `Tomorrow ${standardSlots.length} Slot`,
            status: "available",
            isTomorrowSlot: true
          };
          const dynamicSlots = [...activeDateSlots, tomorrowSlot];

          return (
            <div 
              key={t.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-xs bg-white h-full"
            >
              {/* Image Header with Info Badges & Play Video overlay */}
              <div className="relative h-[200px] overflow-hidden bg-slate-100">
                <div className="absolute left-2.5 top-2.5 z-10 flex gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-0.5 text-[9px] font-semibold text-white">
                    {t.screen}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-0.5 text-[9px] font-semibold text-white">
                    {t.sound}
                  </span>
                </div>
                {/* Expand Button */}
                <button type="button" className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/75 transition border border-white/10 cursor-pointer shadow-sm">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
                  </svg>
                </button>
                <img 
                  alt={t.name} 
                  src={t.image} 
                  className="object-cover w-full h-full"
                />
                <button type="button" className="absolute left-2.5 bottom-2.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/55 hover:bg-black/75 transition px-2.5 py-1 text-[9px] font-bold text-white border border-white/10 cursor-pointer shadow-sm">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-white text-black text-[7px] font-extrabold">▶</span>
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Theatre Details */}
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight font-sans">{t.name}</h3>
                      <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                        isLowAvailability 
                          ? "bg-rose-50 text-rose-700 border-rose-200/50" 
                          : "bg-emerald-50 text-emerald-700 border-emerald-200/50"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${isLowAvailability ? "bg-rose-500" : "bg-emerald-500"}`}></span>
                        <span>{availableCount} Slots Available</span>
                      </div>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1 text-gray-500 text-xs font-semibold">
                      <MapPin size={12} className="text-[#C85A17]" />
                      <span>{location}</span>
                    </div>
                  </div>

                  {/* Navigation buttons: Map & Menu */}
                  <div className="flex gap-2 shrink-0">
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col items-center gap-0.5 text-gray-500 hover:text-black transition"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white shadow-xs group-hover:scale-105 transition">
                        <MapPin size={12} className="text-[#C85A17]" />
                      </div>
                      <span className="text-[9px] font-bold text-gray-500 group-hover:text-gray-700">Map</span>
                    </a>
                    <a 
                      href="#" 
                      className="group flex flex-col items-center gap-0.5 text-gray-500 hover:text-black transition"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white shadow-xs group-hover:scale-105 transition">
                        <span className="text-[10px]">📋</span>
                      </div>
                      <span className="text-[9px] font-bold text-gray-500 group-hover:text-gray-700">Menu</span>
                    </a>
                  </div>
                </div>

                {/* Attributes list */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-gray-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Users size={12} className="text-gray-400 shrink-0" />
                      <span>{t.limit}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils size={12} className="text-gray-400 shrink-0" />
                      <span>Food</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles size={12} className="text-gray-400 shrink-0" />
                      <span>Decor ₹750 Only</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={12} className="text-gray-400 shrink-0" />
                      <span>Free Cancellation*</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={12} className="text-gray-400 shrink-0" />
                      <span>Ideal for couple and family</span>
                    </div>
                  </div>
                </div>

                {/* Next steps preview */}
                <div className="border-t border-gray-100 pt-3 mb-4 text-[10px] text-gray-400 font-semibold flex items-center justify-between">
                  <span>Next Step:</span>
                  <div className="flex items-center gap-1.5 text-[8.5px] font-bold text-gray-400/80">
                    <span className="inline-flex items-center gap-0.5"><User size={10} /> Add Details</span>
                    <span>&gt;</span>
                    <span className="inline-flex items-center gap-0.5"><Cake size={10} /> Add Cake</span>
                    <span>&gt;</span>
                    <span className="inline-flex items-center gap-0.5"><Sparkles size={10} /> Fog Entry</span>
                    <span>&gt;</span>
                    <span className="inline-flex items-center gap-0.5"><Gift size={10} /> Gifts</span>
                  </div>
                </div>

                {/* Slots + Bottom Bar Container aligned to bottom */}
                <div className="mt-auto border-t border-gray-100 pt-3">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Choose Your Time Slot</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {dynamicSlots.map((s) => {
                      const isAvailable = s.status === "available";
                      const isSelected = selectedTheaterSlots[t.id] === s.id;
                      const isTomorrow = s.time.startsWith("Tomorrow");

                      if (!isAvailable) {
                        return (
                          <div 
                            key={s.id}
                            className="border-none bg-gray-100 text-gray-400 cursor-not-allowed text-[10px] py-2 px-1.5 rounded-xl text-center font-medium"
                          >
                            {s.time}
                          </div>
                        );
                      }

                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            if ((s as any).isTomorrowSlot) {
                              const currentDateObj = new Date(date);
                              currentDateObj.setDate(currentDateObj.getDate() + 1);
                              const nextDateStr = currentDateObj.toISOString().split("T")[0];
                              setDate(nextDateStr);

                              const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                              const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                              const dayOfWeek = daysOfWeek[currentDateObj.getDay()];
                              const dayOfMonth = currentDateObj.getDate();
                              const monthName = months[currentDateObj.getMonth()];
                              const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName}`;

                              triggerToast(
                                `Date changed to ${formattedDate}`,
                                `Showing ${standardSlots.length} slots for this theatre.`
                              );
                            } else {
                              setSelectedTheaterSlots(prev => ({
                                ...prev,
                                [t.id]: s.id
                              }));
                              setTheaterId(t.id);
                              setSlotId(s.id);
                            }
                          }}
                          className={`border text-[10px] py-2 px-1.5 rounded-xl text-center transition-all cursor-pointer font-bold flex items-center justify-center gap-1 ${
                            isSelected
                              ? "border-emerald-600 bg-emerald-600 text-white shadow-xs"
                              : "border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50/45"
                          }`}
                        >
                          {isTomorrow && <Calendar size={11} className="shrink-0" />}
                          <span>{s.time}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Price & Reserve Button Bar */}
                  <div className="border-t border-gray-100 pt-3.5 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xl font-extrabold text-gray-950">₹{t.basePrice.toLocaleString()}</span>
                      <span className="block text-[9px] text-gray-400 font-bold">For up to {t.id === "theatre-1" ? 2 : 4} Person</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const activeSlotId = selectedTheaterSlots[t.id];
                        setTheaterId(t.id);
                        setSlotId(activeSlotId);
                        setStep(3); // Go to customizations
                      }}
                      className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-extrabold py-2.5 px-4.5 rounded-full text-xs transition-all cursor-pointer shadow-xs hover:scale-102 active:scale-98"
                    >
                      Reserve This Slot
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
