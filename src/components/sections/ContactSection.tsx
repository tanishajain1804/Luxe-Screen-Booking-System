"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">Plan a Custom Event / Contact Us</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Want to organize a custom movie screening, kids party, corporate event, or a special proposal setup? Tell us your plans and we'll make it happen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black font-serif">Reach out directly</h3>
            <p className="text-sm text-gray-500 font-medium">
              Our support team is active 24/7 to resolve booking queries, custom requests, and cancellation refunds.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C85A17]/10 text-[#C85A17]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Call or WhatsApp</p>
                  <a href="tel:+919999999999" className="text-sm font-bold text-gray-800 hover:text-[#C85A17] transition">+91 99999 99999</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C85A17]/10 text-[#C85A17]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</p>
                  <a href="mailto:hello@luxescreens.com" className="text-sm font-bold text-gray-800 hover:text-[#C85A17] transition">hello@luxescreens.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C85A17]/10 text-[#C85A17]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Main Office Address</p>
                  <p className="text-sm font-bold text-gray-800">B-299, Outer Ring Rd, Block B, Saraswati Vihar, Pitampura, Delhi, 110034</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Form */}
          <div className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-6 sm:p-8 shadow-sm">
            {contactSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-lg font-bold text-black">Inquiry Submitted!</h4>
                <p className="text-xs text-gray-500 font-medium max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Our custom events planning manager will contact you on your phone number within 24 hours to align on options and pricing.
                </p>
                <button 
                  type="button" 
                  onClick={() => setContactSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#C85A17] hover:underline hover:text-[#A04000]"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your full name" 
                    className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs text-gray-800 placeholder-gray-400 focus:border-[#C85A17] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number" 
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs text-gray-800 placeholder-gray-400 focus:border-[#C85A17] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter email address" 
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs text-gray-800 placeholder-gray-400 focus:border-[#C85A17] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Occasion / Event Type</label>
                    <select className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs text-gray-800 focus:border-[#C85A17] focus:outline-hidden">
                      <option>Birthday Celebration</option>
                      <option>Anniversary Surprise</option>
                      <option>Romantic Proposal Setup</option>
                      <option>Intimate Date Night</option>
                      <option>Kids Party</option>
                      <option>Corporate Watch Party</option>
                      <option>Other Event</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      min={mounted ? new Date().toISOString().split("T")[0] : undefined}
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs text-gray-800 focus:border-[#C85A17] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Event details &amp; requests</label>
                  <textarea 
                    rows={3} 
                    placeholder="Balloon colors, fog entry preference, number of guests, catering details..." 
                    className="w-full rounded-xl border border-gray-300 bg-white py-2.5 px-4 text-xs text-gray-800 placeholder-gray-400 focus:border-[#C85A17] focus:outline-hidden resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white py-3 px-6 text-xs font-bold uppercase tracking-wider shadow-md hover:scale-102 transition cursor-pointer"
                >
                  Submit Custom Plan Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
