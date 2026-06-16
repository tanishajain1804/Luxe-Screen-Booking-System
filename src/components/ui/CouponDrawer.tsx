"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Copy, Check, Ticket } from "lucide-react";

interface Coupon {
  code: string;
  description: string;
  type: string;
  terms: string;
}

const COUPONS: Coupon[] = [
  {
    code: "WELCOME400",
    description: "Get Rs.400 off on your first private theater booking.",
    type: "FLAT 400 OFF",
    terms: "Min. order value ₹1599. Applicable for new accounts.",
  },
  {
    code: "FREECAKE",
    description: "Enjoy a complimentary cake worth up to ₹550.",
    type: "FREE GIFT",
    terms: "Valid on all bookings. Limited time promotion.",
  },
  {
    code: "EXTRA25",
    description: "Get 25% off on decoration custom styling packages.",
    type: "25% OFF DECOR",
    terms: "Applicable on premium and luxury decoration upgrades.",
  },
];

export default function CouponDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("toggle-coupons", handleToggle);
    return () => {
      window.removeEventListener("toggle-coupons", handleToggle);
    };
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      {/* Overlay to click to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Drawer content */}
      <div className="relative h-full w-full max-w-[380px] border-l border-card-border bg-[#0e1017] p-6 shadow-2xl animate-slide-left flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between border-b border-card-border pb-4">
            <div>
              <h3 className="flex items-center gap-1.5 text-base font-bold text-white">
                <Sparkles size={16} className="text-primary animate-pulse" />
                Available Coupons
              </h3>
              <p className="text-xs text-gray-500">Copy code and apply at checkout</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Coupon List */}
          <div className="mt-6 space-y-4 overflow-y-auto max-h-[calc(100vh-160px)] pr-1">
            {COUPONS.map((coupon) => (
              <div
                key={coupon.code}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#131622]/85 p-0 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Top Portion */}
                <div className="p-4 pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-white bg-zinc-900/40 border border-zinc-700/50 px-2.5 py-0.5 rounded shadow-inner tracking-wider uppercase">
                        <Ticket size={11} className="text-primary" />
                        {coupon.code}
                      </span>
                      <p className="mt-2.5 text-sm font-semibold text-white leading-snug">
                        {coupon.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">
                      {coupon.type}
                    </span>
                  </div>
                </div>

                {/* Divider Line with Side Ticket Notches */}
                <div className="relative flex items-center justify-between my-1">
                  {/* Left Notch: matches the drawer bg-[#0e1017] */}
                  <div className="absolute left-0 -translate-x-[6px] w-3 h-3 rounded-full bg-[#0e1017] border border-zinc-800 z-10" />
                  
                  {/* Dashed line */}
                  <div className="w-full border-t border-dashed border-zinc-800/80 mx-3" />
                  
                  {/* Right Notch: matches the drawer bg-[#0e1017] */}
                  <div className="absolute right-0 translate-x-[6px] w-3 h-3 rounded-full bg-[#0e1017] border border-zinc-800 z-10" />
                </div>

                {/* Bottom Portion */}
                <div className="p-4 pt-2.5 flex items-center justify-between gap-3">
                  <span className="text-[10px] text-zinc-400 leading-normal max-w-[70%]">
                    {coupon.terms}
                  </span>
                  
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 active:scale-95 shrink-0 shadow-sm cursor-pointer ${
                      copiedCode === coupon.code
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                        : "bg-zinc-800/80 hover:bg-primary hover:text-white border border-zinc-700/50 hover:border-primary text-zinc-300"
                    }`}
                  >
                    {copiedCode === coupon.code ? (
                      <>
                        <Check size={12} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-card-border pt-4 text-[10px] text-gray-500 text-center">
          Coupons cannot be combined. Advance booking amount rules apply.
        </div>
      </div>
    </div>
  );
}
