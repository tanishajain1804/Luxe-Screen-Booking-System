"use client";

import React from "react";
import { User, Mail } from "lucide-react";
import { useBooking } from "./BookingContext";

export const Step3Contact: React.FC = () => {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    guests,
    setGuests,
    kids,
    setKids,
    theaterId,
    setTheaterId,
    hasDecoration,
    setHasDecoration,
    notes,
    setNotes,
    errors,
    setErrors,
    activeTheater,
    baseIncluded
  } = useBooking();

  return (
    <div className="space-y-5 text-left">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#111827]">Contact Information</h2>
        <p className="text-xs text-gray-500">Please enter your checkout details to lock your booking.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Full Name *</label>
          <div className="relative">
            <User className="absolute top-3.5 left-4 text-gray-400" size={16} />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) {
                  setErrors(prev => {
                    const next = { ...prev };
                    delete next.name;
                    return next;
                  });
                }
              }}
              placeholder="Enter full name"
              className={`w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-sm text-[#111827] placeholder-gray-400 focus:outline-hidden transition-all ${
                errors.name 
                  ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  : "border-gray-300 focus:border-[#C85A17]"
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider text-left">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-left">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider">Mobile Number *</label>
              <span className={`text-[9px] font-bold ${phone.length === 10 ? "text-emerald-600" : "text-gray-400"}`}>
                {phone.length === 10 ? "10/10 digits" : "Enter 10 digit number"}
              </span>
            </div>
            <div className="relative flex">
              <span className={`inline-flex items-center px-3 rounded-l-xl border border-r-0 bg-gray-50 text-gray-500 text-sm font-semibold transition-all ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}>
                +91
              </span>
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, ""));
                  if (errors.phone) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.phone;
                      return next;
                    });
                  }
                }}
                placeholder="8905678768"
                className={`w-full rounded-r-xl border bg-white py-3 px-4 text-sm text-[#111827] placeholder-gray-400 focus:outline-hidden transition-all ${
                  errors.phone 
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.phone}</p>
            )}
          </div>
          
          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Email Address *</label>
            <div className="relative">
              <Mail className="absolute top-3.5 left-4 text-gray-400" size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.email;
                      return next;
                    });
                  }
                }}
                placeholder="Enter email address"
                className={`w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-sm text-[#111827] placeholder-gray-400 focus:outline-hidden transition-all ${
                  errors.email 
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Guests Counters */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
          {/* Adults count */}
          <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#111827]">Adults</p>
              <p className="text-[9px] text-gray-500">
                {baseIncluded} included · Max Capacity {activeTheater.maxCapacity}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={guests <= 1}
                onClick={() => setGuests(guests - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:border-gray-500 bg-white text-gray-600 disabled:opacity-30 cursor-pointer font-bold transition"
              >
                -
              </button>
              <span className="text-sm font-bold text-[#111827]">{guests}</span>
              <button
                type="button"
                disabled={guests >= activeTheater.maxCapacity}
                onClick={() => setGuests(guests + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:border-gray-500 bg-white text-gray-600 disabled:opacity-30 cursor-pointer font-bold transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Kids count */}
          <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#111827]">Kids (3-10 years)</p>
              <p className="text-[9px] text-gray-500">Charged separately at ₹200 per kid</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={kids <= 0}
                onClick={() => setKids(kids - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:border-gray-500 bg-white text-gray-600 disabled:opacity-30 cursor-pointer font-bold transition"
              >
                -
              </button>
              <span className="text-sm font-bold text-[#111827]">{kids}</span>
              <button
                type="button"
                disabled={kids >= 10}
                onClick={() => setKids(kids + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:border-gray-500 bg-white text-gray-600 disabled:opacity-30 cursor-pointer font-bold transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Up-Sell larger suite capsule */}
        {theaterId !== "theatre-3" && (
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-gray-800">Need more space?</p>
              <p className="text-[10px] text-gray-500 font-medium">Upgrade to a larger suite for your celebration.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const nextTheater = theaterId === "theatre-1" ? "theatre-2" : "theatre-3";
                setTheaterId(nextTheater);
              }}
              className="rounded-full border border-[#C85A17] text-[#C85A17] hover:bg-[#C85A17]/5 px-5 py-1.5 text-xs font-bold transition cursor-pointer"
            >
              {theaterId === "theatre-1" ? "Theatre 2 Up to 7" : "Theatre 3 Up to 15"}
            </button>
          </div>
        )}

        {/* Decoration Switch toggle */}
        <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-[#111827]">Decoration (Just ₹750)</p>
            <p className="text-[9px] text-gray-500">Make your experience more special.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-200/60 rounded-full w-full sm:max-w-[280px]">
            <button
              type="button"
              onClick={() => setHasDecoration(true)}
              className={`py-1.5 px-4 rounded-full text-xs font-bold transition-all cursor-pointer text-center ${
                hasDecoration
                  ? "bg-white text-black shadow-xs"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Yes, add decoration
            </button>
            <button
              type="button"
              onClick={() => setHasDecoration(false)}
              className={`py-1.5 px-4 rounded-full text-xs font-bold transition-all cursor-pointer text-center ${
                !hasDecoration
                  ? "bg-white text-black shadow-xs"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              No, thanks
            </button>
          </div>
        </div>

        {/* Notes text block */}
        <div>
          <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Special Instructions</label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="E.g., Balloon color preferences, entry timing constraints, cake delivery specifics..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-xs text-[#111827] placeholder-gray-400 focus:border-[#C85A17] focus:outline-hidden resize-none"
          />
        </div>
      </div>
    </div>
  );
};
