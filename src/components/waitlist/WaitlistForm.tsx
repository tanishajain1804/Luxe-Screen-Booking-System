"use client";

import React from "react";
import { User, Phone, Mail, MapPin, Calendar, Clock, PartyPopper, ShieldCheck, ArrowRight } from "lucide-react";

interface WaitlistFormProps {
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  setEmail: (v: string) => void;
  preferredDate: string;
  setPreferredDate: (v: string) => void;
  preferredTime: string;
  setPreferredTime: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  occasion: string;
  setOccasion: (v: string) => void;
  requests: string;
  setRequests: (v: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  name,
  setName,
  phone,
  setPhone,
  handlePhoneChange,
  email,
  setEmail,
  preferredDate,
  setPreferredDate,
  preferredTime,
  setPreferredTime,
  location,
  setLocation,
  occasion,
  setOccasion,
  requests,
  setRequests,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-10 shadow-xl space-y-8 text-left">
      <div className="text-center pb-4 border-b border-gray-100">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Tell Us What You're Looking For
        </h2>
        <p className="text-sm text-gray-400 mt-1.5 font-light">
          We'll contact you as soon as something opens up.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Your Name */}
          <div className="space-y-1.5">
            <label htmlFor="name-input" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <User size={13} className="text-gray-400" /> Your Name
            </label>
            <input 
              id="name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="phone-input" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <Phone size={13} className="text-gray-400" /> Mobile Number
              </label>
              <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded">
                {phone.length}/10 digits
              </span>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-semibold select-none">
                +91
              </span>
              <input 
                id="phone-input"
                type="tel"
                required
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Enter 10-digit mobile number"
                className="w-full pl-14 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email address */}
          <div className="space-y-1.5">
            <label htmlFor="email-input" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <Mail size={13} className="text-gray-400" /> Email (optional)
            </label>
            <input 
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Preferred Location */}
          <div className="space-y-1.5">
            <label htmlFor="location-select" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <MapPin size={13} className="text-gray-400" /> Preferred Location
            </label>
            <select 
              id="location-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all cursor-pointer font-medium"
            >
              <option value="Pitampura">Pitampura, Delhi</option>
              <option value="Noida Sector 51">Noida Sector 51</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Preferred Date */}
          <div className="space-y-1.5">
            <label htmlFor="date-input" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <Calendar size={13} className="text-gray-400" /> Preferred Date
            </label>
            <input 
              id="date-input"
              type="date"
              required
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all cursor-pointer placeholder:text-gray-400"
            />
          </div>

          {/* Preferred Time */}
          <div className="space-y-1.5">
            <label htmlFor="time-input" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <Clock size={13} className="text-gray-400" /> Preferred Time
            </label>
            <input 
              id="time-input"
              type="time"
              required
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all cursor-pointer placeholder:text-gray-400"
            />
          </div>

          {/* Celebration Occasion */}
          <div className="space-y-1.5">
            <label htmlFor="occasion-select" className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <PartyPopper size={13} className="text-gray-400" /> Occasion Type
            </label>
            <select 
              id="occasion-select"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all cursor-pointer font-medium"
            >
              <option value="Birthday">Birthday Celebration</option>
              <option value="Anniversary">Anniversary Surprise</option>
              <option value="Proposal">Romantic Proposal</option>
              <option value="Movie Night">Movie Night Party</option>
              <option value="Family Celebration">Family Gathering</option>
            </select>
          </div>
        </div>

        {/* Special Custom Requests */}
        <div className="space-y-1.5">
          <label htmlFor="requests-input" className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
            Special Custom Requests (optional)
          </label>
          <textarea 
            id="requests-input"
            rows={3}
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            placeholder="Tell us about custom themes, balloon styles, specific cakes, or time extension requirements..."
            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 transition-all placeholder:text-gray-400 resize-none"
          />
        </div>

        <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500 font-medium">
          <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
          <span>Your private contact details are securely processed and never shared with third parties.</span>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white py-3.5 text-sm font-extrabold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer mt-4"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
              <span>Joining Waitlist...</span>
            </>
          ) : (
            <>
              <span>Submit Waitlist Request</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>

      </form>
    </div>
  );
};
