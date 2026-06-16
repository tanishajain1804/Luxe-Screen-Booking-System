"use client";

import React from "react";
import Link from "next/link";
import { Clock, MapPin, Calendar } from "lucide-react";
import { useBooking } from "./BookingContext";
import { formatDateLabel } from "@/lib/utils";

export const BookingHeader: React.FC = () => {
  const { step, setStep, location, date, timeLeft } = useBooking();
  const isDarkBg = step <= 2;

  return (
    <header
      className={`sticky top-0 z-50 w-full py-4 transition-all duration-300 border-b ${
        isDarkBg
          ? "bg-black/35 backdrop-blur-md border-white/10 text-white"
          : "bg-white border-gray-300 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-[#C85A17] rounded-full flex items-center justify-center h-[48px] w-[48px] sm:h-[50px] sm:w-[50px] shadow-sm overflow-hidden p-0.5 transition-transform duration-200 group-hover:scale-103">
              <img
                alt="Luxe Screens"
                src="/logo.svg"
                className="h-full w-full object-contain rounded-full"
              />
            </div>
          </Link>

          {/* Selection indicators on header */}
          <div className="flex items-center gap-2.5">
            {date && (
              <button
                onClick={() => setStep(1)}
                title="Click to edit location or date"
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-xs hover:border-[#C85A17] hover:text-[#C85A17] hover:shadow-md transition duration-200 cursor-pointer ${
                  isDarkBg
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <Calendar size={13} className="text-[#C85A17]" />
                <span>{formatDateLabel(date)}</span>
              </button>
            )}
            {location && (
              <button
                onClick={() => setStep(1)}
                title="Click to edit location or date"
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-xs hover:border-[#C85A17] hover:text-[#C85A17] hover:shadow-md transition duration-200 cursor-pointer ${
                  isDarkBg
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                <MapPin size={13} className="text-[#C85A17]" />
                <span>{location}</span>
              </button>
            )}
            {step >= 3 && step <= 8 && (
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 text-xs font-bold shadow-xs">
                <Clock size={14} className="text-emerald-600 animate-pulse" />
                <span>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60) < 10 ? "0" : ""}
                  {timeLeft % 60}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
