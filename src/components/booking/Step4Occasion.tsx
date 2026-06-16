"use client";

import React from "react";
import { X } from "lucide-react";
import { useBooking } from "./BookingContext";
import { renderOccasionIcon } from "@/lib/utils";

export const Step4Occasion: React.FC = () => {
  const {
    occasion,
    setOccasion,
    showOccasionDetailsCard,
    setShowOccasionDetailsCard,
    partner1Name,
    setPartner1Name,
    partner2Name,
    setPartner2Name,
    celebrantName,
    setCelebrantName,
    occasionMessage,
    setOccasionMessage,
    errors,
    setErrors
  } = useBooking();

  const occasionsList = [
    { id: "Birthday", name: "Birthday", desc: "Celebrate a memorable birthday" },
    { id: "Anniversary", name: "Anniversary", desc: "Celebrate years of togetherness" },
    { id: "Romantic Date", name: "Romantic Date", desc: "A private and romantic experience" },
    { id: "Proposal", name: "Marriage Proposal", desc: "Plan the perfect proposal" },
    { id: "Bride to Be", name: "Bride to Be", desc: "Celebrate the bride-to-be" },
    { id: "Farewell", name: "Farewell", desc: "A warm farewell celebration" },
    { id: "Congratulations", name: "Congratulations", desc: "Celebrate a special achievement" },
    { id: "Baby Shower", name: "Baby Shower", desc: "Celebrate the upcoming arrival" }
  ];

  return (
    <div className="space-y-4 text-left">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#111827]">Select an occasion</h2>
        <p className="text-xs text-gray-500">Pick one option and fill the details inline.</p>
        {errors.occasion && (
          <p className="text-red-500 text-xs font-bold mt-1.5 uppercase tracking-wider text-left">{errors.occasion}</p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {occasionsList.map((occ) => {
          const isActive = occasion === occ.id;
          return (
            <div key={occ.id} className="relative">
              <div
                onClick={() => {
                  if (isActive) {
                    setOccasion("");
                    setShowOccasionDetailsCard(false);
                    setCelebrantName("");
                    setPartner1Name("");
                    setPartner2Name("");
                    setOccasionMessage("");
                  } else {
                    setOccasion(occ.id);
                    setShowOccasionDetailsCard(true);
                    if (errors.occasion) {
                      setErrors(prev => {
                        const next = { ...prev };
                        delete next.occasion;
                        return next;
                      });
                    }
                    if (occ.id === "Anniversary") {
                      setOccasionMessage("Happy Anniversary");
                    } else if (occ.id === "Romantic Date") {
                      setOccasionMessage("I Love You");
                    } else if (occ.id === "Proposal") {
                      setOccasionMessage("Will You Marry Me?");
                    } else {
                      setOccasionMessage(occ.name);
                    }
                  }
                }}
                className={`rounded-2xl border p-4 flex flex-col justify-between items-center text-center cursor-pointer transition-all h-[155px] relative ${
                  isActive
                    ? "border-zinc-950 bg-white ring-1 ring-zinc-950"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <div className="absolute top-3 right-3">
                  <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-colors ${
                    isActive ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-white"
                  }`}>
                    {isActive && <span className="text-[9px]">✓</span>}
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-center h-8">
                  {renderOccasionIcon(occ.id)}
                </div>
                <div className="flex-1 flex flex-col justify-center my-1.5">
                  <p className="text-xs font-bold text-zinc-900">{occ.name}</p>
                  <p className="text-[9px] text-zinc-400 mt-0.5 line-clamp-2 leading-tight">{occ.desc}</p>
                </div>
                <span className="text-[9.5px] font-bold text-zinc-400">
                  Select
                </span>
              </div>

              {/* Floating Details Popover Card */}
              {isActive && showOccasionDetailsCard && (
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-[106%] left-1/2 -translate-x-1/2 z-40 w-[290px] xs:w-[325px] bg-white border border-zinc-200 rounded-2xl p-5 shadow-2xl text-left animate-scale-up"
                >
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-zinc-200 rotate-45 z-10" />
                  
                  <button 
                    type="button"
                    onClick={() => setShowOccasionDetailsCard(false)}
                    className="absolute top-3.5 right-3.5 text-zinc-400 hover:text-zinc-600 cursor-pointer h-6 w-6 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors"
                  >
                    <X size={14} />
                  </button>
                  
                  <div className="flex items-center gap-1.5 border-b border-zinc-100 pb-2.5 mb-3.5">
                    <span className="text-xs font-bold text-zinc-800 flex items-center gap-1">
                      {occ.id === "Anniversary" && "💍"}
                      {occ.id === "Birthday" && "🎂"}
                      {occ.id === "Romantic Date" && "💖"}
                      {occ.id === "Proposal" && "✨"}
                      {occ.id === "Bride to Be" && "👰"}
                      {occ.id === "Farewell" && "👋"}
                      {occ.id === "Congratulations" && "🏆"}
                      {occ.id === "Baby Shower" && "🍼"}
                      <span>{occ.name} Details</span>
                    </span>
                  </div>

                  <div className="space-y-3.5 text-left">
                    {(occ.id === "Anniversary" || occ.id === "Romantic Date" || occ.id === "Proposal") ? (
                      <>
                        <div>
                          <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Partner 1 Name *
                          </label>
                          <input 
                            type="text"
                            value={partner1Name}
                            onChange={(e) => {
                              setPartner1Name(e.target.value);
                              if (errors.partner1Name) {
                                setErrors(prev => {
                                  const next = { ...prev };
                                  delete next.partner1Name;
                                  return next;
                                });
                              }
                            }}
                            placeholder="Enter name"
                            className={`w-full px-4 py-2 border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white ${
                              errors.partner1Name 
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" 
                                : "border-zinc-300 focus:border-zinc-950"
                            }`}
                          />
                          {errors.partner1Name && (
                            <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-wider">{errors.partner1Name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                            Partner 2 Name *
                          </label>
                          <input 
                            type="text"
                            value={partner2Name}
                            onChange={(e) => {
                              setPartner2Name(e.target.value);
                              if (errors.partner2Name) {
                                setErrors(prev => {
                                  const next = { ...prev };
                                  delete next.partner2Name;
                                  return next;
                                });
                              }
                            }}
                            placeholder="Enter name"
                            className={`w-full px-4 py-2 border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white ${
                              errors.partner2Name 
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" 
                                : "border-zinc-300 focus:border-zinc-950"
                            }`}
                          />
                          {errors.partner2Name && (
                            <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-wider">{errors.partner2Name}</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <div>
                        <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                          Person Name *
                        </label>
                        <input 
                          type="text"
                          value={celebrantName}
                          onChange={(e) => {
                            setCelebrantName(e.target.value);
                            if (errors.celebrantName) {
                              setErrors(prev => {
                                  const next = { ...prev };
                                  delete next.celebrantName;
                                  return next;
                              });
                            }
                          }}
                          placeholder="Enter name"
                          className={`w-full px-4 py-2 border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white ${
                            errors.celebrantName 
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" 
                              : "border-zinc-300 focus:border-zinc-950"
                          }`}
                        />
                        {errors.celebrantName && (
                          <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-wider">{errors.celebrantName}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        Message on Decoration (Optional)
                      </label>
                      <input 
                        type="text"
                        value={occasionMessage}
                        onChange={(e) => setOccasionMessage(e.target.value)}
                        placeholder={`E.g., ${occ.name}`}
                        className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 text-xs text-zinc-800 placeholder-zinc-400 transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        const isCouple = occ.id === "Anniversary" || occ.id === "Romantic Date" || occ.id === "Proposal";
                        const newErrors: Record<string, string> = {};
                        if (isCouple) {
                          if (!partner1Name.trim()) {
                            newErrors.partner1Name = "This field is required";
                          }
                          if (!partner2Name.trim()) {
                            newErrors.partner2Name = "This field is required";
                          }
                        } else {
                          if (!celebrantName.trim()) {
                            newErrors.celebrantName = "This field is required";
                          }
                        }

                        if (Object.keys(newErrors).length > 0) {
                          setErrors(prev => ({ ...prev, ...newErrors }));
                          return;
                        }
                        
                        setErrors(prev => {
                          const next = { ...prev };
                          delete next.partner1Name;
                          delete next.partner2Name;
                          delete next.celebrantName;
                          return next;
                        });
                        setShowOccasionDetailsCard(false);
                      }}
                      className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-bold px-4 py-1.5 rounded-lg text-[11px] transition-colors shadow-xs cursor-pointer"
                    >
                      Save Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
