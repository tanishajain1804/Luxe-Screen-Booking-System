"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Ticket, MessageSquare } from "lucide-react";

interface WaitlistReceiptProps {
  name: string;
  phone: string;
  location: string;
  occasion: string;
  preferredDate: string;
  preferredTime: string;
  requests: string;
  waitlistCode: string;
}

export const WaitlistReceipt: React.FC<WaitlistReceiptProps> = ({
  name,
  phone,
  location,
  occasion,
  preferredDate,
  preferredTime,
  requests,
  waitlistCode
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-10 text-center shadow-xl flex flex-col items-center justify-center space-y-6 animate-scale-up text-left">
      <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-xs">
        <CheckCircle2 size={36} className="text-emerald-500" />
      </div>

      <div className="space-y-2 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          You're on the Waitlist!
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-gray-800">{name}</span>. Your request has been logged. Our booking concierge will reach out to you shortly.
        </p>
      </div>

      {/* Glassmorphic Ticket Receipt */}
      <div className="bg-gradient-to-br from-stone-900 to-[#1e2230] text-white rounded-3xl p-6 w-full max-w-md relative overflow-hidden border border-white/10 shadow-lg text-left mx-auto">
        {/* Notches for ticket look */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-r-full -translate-x-2"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-white rounded-l-full translate-x-2"></div>
        
        <div className="flex justify-between items-center border-b border-dashed border-white/15 pb-4 mb-4">
          <span className="text-xs uppercase tracking-wider text-[#C85A17] font-bold flex items-center gap-1">
            <Ticket size={14} /> Waitlist Ticket
          </span>
          <span className="text-sm font-mono font-bold bg-[#C85A17]/20 border border-[#C85A17]/40 px-2.5 py-0.5 rounded text-[#C85A17]">
            {waitlistCode}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[9px]">Guest Name</span>
            <span className="font-bold text-white text-sm">{name}</span>
          </div>
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[9px]">Contact Phone</span>
            <span className="font-bold text-white text-sm">+91 {phone}</span>
          </div>
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[9px]">Requested Location</span>
            <span className="font-bold text-white text-sm">{location}</span>
          </div>
          <div>
            <span className="block text-zinc-400 uppercase tracking-widest text-[9px]">Occasion Theme</span>
            <span className="font-bold text-white text-sm">{occasion}</span>
          </div>
          {preferredDate && (
            <div>
              <span className="block text-zinc-400 uppercase tracking-widest text-[9px]">Preferred Date</span>
              <span className="font-bold text-white text-sm">{preferredDate}</span>
            </div>
          )}
          {preferredTime && (
            <div>
              <span className="block text-zinc-400 uppercase tracking-widest text-[9px]">Preferred Time</span>
              <span className="font-bold text-white text-sm">{preferredTime}</span>
            </div>
          )}
        </div>

        {requests && (
          <div className="mt-4 pt-4 border-t border-white/10 text-xs">
            <span className="block text-zinc-400 uppercase tracking-widest text-[9px] mb-0.5">Special Requests</span>
            <p className="italic text-zinc-300 font-light line-clamp-2">{requests}</p>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-gray-100 w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
        <Link 
          href="/"
          className="w-full sm:w-auto rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 text-xs font-bold transition-all text-center"
        >
          Back to Home
        </Link>
        <a 
          href={`https://wa.me/919999999999?text=Hi%20Luxe%20Screens%2C%20I%20have%20joined%20the%20Waitlist%20with%20Ticket%20${waitlistCode}.%20Could%20you%20please%20verify%20availability%20for%20me%3F`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white px-6 py-3 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageSquare size={14} className="text-emerald-400 fill-emerald-400" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};
