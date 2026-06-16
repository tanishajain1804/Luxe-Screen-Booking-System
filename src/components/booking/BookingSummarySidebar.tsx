"use client";

import React from "react";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { useBooking } from "./BookingContext";

export const BookingSummarySidebar: React.FC = () => {
  const {
    step,
    setStep,
    date,
    activeTheater,
    slotTime,
    basePrice,
    hasDecoration,
    occasion,
    partner1Name,
    partner2Name,
    celebrantName,
    occasionMessage,
    name,
    cart,
    updateCartQuantity,
    removeFromCart,
    appliedDiscount,
    setAppliedDiscount,
    couponCode,
    setCouponCode,
    applyCoupon,
    couponError,
    setCouponError,
    couponSuccessMsg,
    setCouponSuccessMsg,
    total,
    handleSaveAndContinue
  } = useBooking();

  return (
    <div className="lg:col-span-4 lg:sticky lg:top-24 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm space-y-5">
      <h3 className="font-serif text-lg font-bold text-[#111827] border-b border-gray-100 pb-2">
        Your Booking Summary
      </h3>

      {/* Progress timeline tracker */}
      <div>
        <div className="absolute left-0 right-0 top-3.5 h-0.5 bg-gray-100 -z-1" />
        <div className="flex items-center justify-between relative">
          {[
            { key: "theatre", label: "Theatre", targetStep: 2 },
            { key: "contact", label: "Contact", targetStep: 3 },
            { key: "occasion", label: "Occasion", targetStep: 4 },
            { key: "extras", label: "Extras", targetStep: 5 },
            { key: "payment", label: "Payment", targetStep: 8 }
          ].map((s, idx) => {
            let activeIndex = 0;
            if (step === 3) activeIndex = 1;
            if (step === 4) activeIndex = 2;
            if (step >= 5 && step <= 7) activeIndex = 3;
            if (step === 8) activeIndex = 4;

            const isCompleted = idx < activeIndex;
            const isActive = idx === activeIndex;

            return (
              <div key={s.key} className="flex flex-col items-center flex-1 text-center relative z-10">
                <button
                  type="button"
                  disabled={!isCompleted}
                  onClick={() => setStep(s.targetStep)}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[9px] font-bold transition-all ${
                    isCompleted 
                      ? "bg-gray-800 border-gray-800 text-white cursor-pointer" 
                      : isActive 
                        ? "bg-white border-[#C85A17] text-[#C85A17] ring-2 ring-[#C85A17]/20" 
                        : "bg-gray-100 border-gray-300 text-gray-400 disabled:cursor-default"
                  }`}
                >
                  {isCompleted ? "✓" : s.key === "extras" && isActive ? `${step - 4}/3` : idx + 1}
                </button>
                <span className={`mt-0.5 text-[8.5px] font-bold ${isActive ? "text-[#C85A17]" : "text-gray-400"}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Booking Details List */}
      <div className="space-y-2.5 text-xs border-t border-gray-100 pt-4">
        <div className="flex justify-between items-start">
          <span className="text-gray-400 font-medium">🏨 Theatre</span>
          <span className="font-bold text-gray-800 text-right">{activeTheater.name}</span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-gray-400 font-medium">🕒 Slot</span>
          <span className="font-bold text-gray-800 text-right max-w-[150px] truncate" title={`${date}, ${slotTime}`}>
            {date}, {slotTime}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 font-medium">💰 Price</span>
          <span className="font-bold text-gray-800">₹{basePrice}</span>
        </div>

        {hasDecoration && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium">🎈 Decoration</span>
            <span className="font-bold text-[#C85A17]">₹750</span>
          </div>
        )}

        {step >= 4 && occasion && (
          <div className="space-y-1.5 bg-orange-50/20 p-2.5 rounded-xl border border-orange-100/50 mt-1">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium">✨ Occasion</span>
              <span className="font-bold text-gray-800">{occasion}</span>
            </div>
            {(occasion === "Anniversary" || occasion === "Romantic Date" || occasion === "Proposal") ? (
              <>
                {partner1Name && (
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-gray-400 font-medium">👤 Partner 1</span>
                    <span className="font-bold text-gray-700">{partner1Name}</span>
                  </div>
                )}
                {partner2Name && (
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="text-gray-400 font-medium">👤 Partner 2</span>
                    <span className="font-bold text-gray-700">{partner2Name}</span>
                  </div>
                )}
              </>
            ) : (
              celebrantName && (
                <div className="flex justify-between items-center text-[10.5px]">
                  <span className="text-gray-400 font-medium">👤 For</span>
                  <span className="font-bold text-gray-700">{celebrantName}</span>
                </div>
              )
            )}
            {occasionMessage && (
              <div className="flex justify-between items-center text-[10.5px]">
                <span className="text-gray-400 font-medium">💬 Message</span>
                <span className="font-bold text-gray-700 max-w-[125px] truncate" title={occasionMessage}>
                  {occasionMessage}
                </span>
              </div>
            )}
          </div>
        )}

        {name && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400 font-medium">👤 Person Name</span>
            <span className="font-bold text-gray-800 max-w-[120px] truncate">{name}</span>
          </div>
        )}

        {/* Extras/Add-ons list inside sidebar */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 pt-3.5 space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Add-Ons</p>
            <ul className="space-y-1.5">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center text-[11px] text-gray-600 font-semibold bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                  <span className="truncate max-w-[120px]" title={item.name}>{item.name}</span>
                  <div className="flex items-center gap-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md px-1 py-0.5 select-none">
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="text-[10px] font-black hover:bg-gray-100 text-gray-600 h-3.5 w-3.5 flex items-center justify-center rounded transition cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-[10.5px] font-bold text-gray-800 min-w-[10px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="text-[10px] font-black hover:bg-gray-100 text-gray-600 h-3.5 w-3.5 flex items-center justify-center rounded transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span className="min-w-[42px] text-right">₹{item.price * item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                      className="text-red-500 hover:text-red-700 font-bold text-sm cursor-pointer h-4 w-4 flex items-center justify-center rounded-full hover:bg-red-50"
                    >
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Promo Coupon Section */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-400 font-medium">Coupon</span>
          {appliedDiscount > 0 ? (
            <span className="font-bold text-emerald-600">Saved ₹{appliedDiscount}</span>
          ) : (
            <button
              type="button"
              onClick={() => {
                const code = prompt("Enter Promo Code:") || "";
                if (code) {
                  setCouponCode(code);
                  setTimeout(() => applyCoupon(), 100);
                }
              }}
              className="text-gray-500 hover:text-black hover:underline font-bold cursor-pointer"
            >
              Do you have a coupon?
            </button>
          )}
        </div>
        {appliedDiscount > 0 && (
          <div className="mt-1.5 flex justify-between items-center text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg px-2.5 py-1 font-semibold">
            <span>Applied Coupon discount</span>
            <button
              type="button"
              onClick={() => {
                setAppliedDiscount(0);
                setCouponCode("");
                setCouponSuccessMsg("");
                setCouponError("");
              }}
              className="text-red-500 font-bold hover:text-red-700 ml-1.5"
            >
              Remove
            </button>
          </div>
        )}
        {couponError && <p className="mt-1.5 text-[9px] text-red-500 font-bold">{couponError}</p>}
        {couponSuccessMsg && <p className="mt-1.5 text-[9px] text-emerald-600 font-bold">{couponSuccessMsg}</p>}
      </div>

      {/* Green Advance pay banner box */}
      <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-3 text-center space-y-0.5 shadow-2xs">
        <p className="text-xs font-extrabold text-emerald-800">
          Pay ₹750 only to confirm
        </p>
        <p className="text-[9px] text-emerald-600/90 font-bold">
          Remaining at theatre: ₹{Math.max(0, total - 750)}
        </p>
      </div>

      {/* Total amount pricing row */}
      <div className="border-t border-gray-100 pt-4 flex justify-between items-baseline">
        <span className="text-xs font-bold text-gray-500">Total Amount</span>
        <span className="text-xl font-black text-gray-800">₹{total}</span>
      </div>

      {/* Save & Continue main action CTA */}
      <button
        type="button"
        onClick={handleSaveAndContinue}
        className="w-full rounded-xl bg-[#C85A17] hover:bg-[#A04000] text-white py-3 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-all hover:scale-102 flex items-center justify-center gap-1.5"
      >
        <span>Save & Continue</span>
        <ChevronRight size={14} />
      </button>
    </div>
  );
};
