"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { VIBES, GREETING_THEMES } from "@/data";

interface PlannerWizardProps {
  plannerStep: number;
  vibe: string;
  setVibe: (v: string) => void;
  genre: string;
  setGenre: (g: string) => void;
  greetingText: string;
  setGreetingText: (t: string) => void;
  greetingTheme: string;
  setGreetingTheme: (t: string) => void;
  diet: string;
  setDiet: (d: string) => void;
  taste: string;
  setTaste: (t: string) => void;
  dressCode: string;
  setDressCode: (d: string) => void;
  handleBack: () => void;
  handleNext: () => void;
}

export const PlannerWizard: React.FC<PlannerWizardProps> = ({
  plannerStep,
  vibe,
  setVibe,
  genre,
  setGenre,
  greetingText,
  setGreetingText,
  greetingTheme,
  setGreetingTheme,
  diet,
  setDiet,
  taste,
  setTaste,
  dressCode,
  setDressCode,
  handleBack,
  handleNext
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-sm text-left">
      
      {/* Step indicator */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A17]">Step {plannerStep} of 5</span>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">
            {plannerStep === 1 && "What's the surprise vibe goal?"}
            {plannerStep === 2 && "What are you planning to watch?"}
            {plannerStep === 3 && "Design your custom Screen Welcome Slide"}
            {plannerStep === 4 && "Kitchen Menu preferences"}
            {plannerStep === 5 && "Choose an outfit style code"}
          </h2>
        </div>
        
        <div className="flex gap-1 shrink-0">
          {[1, 2, 3, 4, 5].map((s) => (
            <span 
              key={s} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s === plannerStep 
                  ? "w-6 bg-[#C85A17]" 
                  : s < plannerStep 
                    ? "w-2 bg-[#C85A17]/40" 
                    : "w-2 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Questions body */}
      <div className="min-h-[200px] py-2">
        
        {/* Step 1: Vibe */}
        {plannerStep === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VIBES.map((v) => {
              const isActive = vibe === v.id;
              const VibeIcon = v.icon;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVibe(v.id)}
                  className={`rounded-xl border p-4 flex items-start gap-4 text-left cursor-pointer transition-all ${
                    isActive
                      ? "border-[#C85A17] bg-[#C85A17]/5 ring-1 ring-[#C85A17]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${isActive ? "bg-[#C85A17] text-white" : "bg-gray-100 text-gray-500"}`}>
                    <VibeIcon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{v.name}</h4>
                    <p className="text-[10px] text-gray-400 mt-1 leading-snug">{v.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Step 2: Content Watchlist */}
        {plannerStep === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Movie/Content Genre</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Romantic", "Thriller/Mystery", "Comedy", "Action/Sci-Fi"].map((g) => {
                  const isActive = genre === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGenre(g)}
                      className={`py-2 px-3 rounded-lg border text-xs font-bold transition cursor-pointer text-center ${
                        isActive
                          ? "bg-gray-800 border-gray-800 text-white"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-[10px] text-gray-400 leading-relaxed bg-zinc-50 rounded-xl p-3 border">
                <strong>Note:</strong> Luxe Screens provides high-speed Wi-Fi and smart TV setups to mirror personal devices or stream from Netflix, Prime Video, Hotstar, and YouTube.
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Screen greeting designer */}
        {plannerStep === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Enter your custom text message</label>
              <input
                type="text"
                maxLength={40}
                value={greetingText}
                onChange={(e) => setGreetingText(e.target.value)}
                placeholder="E.g., Happy Anniversary Priya! OR Will You Marry Me?"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs text-gray-800 focus:border-[#C85A17] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Select Visual Screen Theme</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {GREETING_THEMES.map((t) => {
                  const isActive = greetingTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setGreetingTheme(t.id)}
                      className={`py-2 px-3 rounded-lg border text-[11px] font-bold transition cursor-pointer text-center ${
                        isActive
                          ? "bg-gray-800 border-gray-800 text-white"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {t.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Food menu preferences */}
        {plannerStep === 4 && (
          <div className="space-y-4 max-w-md mx-auto pt-2">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold text-gray-800">Diet Type</span>
              <div className="flex gap-2">
                {["veg", "nonveg"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDiet(d)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold border capitalize transition cursor-pointer ${
                      diet === d
                        ? "bg-gray-800 border-gray-800 text-white"
                        : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {d === "veg" ? "Pure Veg" : "Non-Veg"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold text-gray-800">Preferred Taste Vibe</span>
              <div className="flex gap-2">
                {["Cheesy", "Spicy", "Sweets"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTaste(t)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold border transition cursor-pointer ${
                      taste === t
                        ? "bg-gray-800 border-gray-800 text-white"
                        : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Outfit / Dress Code */}
        {plannerStep === 5 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2">
            {[
              { id: "All Black", label: "Midnight Black", desc: "Coordinates in deep classy black outfits." },
              { id: "All White", label: "Crisp White", desc: "Coordinates in pure elegant white attire." },
              { id: "Semi-Formal", label: "Smart Casual / Semi-Formal", desc: "Blazers, cocktail dresses, or neat collars." },
              { id: "Cozy Lounge", label: "Lounge Cozy", desc: "Comfortable warm knits or soft lounge coordinates." },
            ].map((s) => {
              const isActive = dressCode === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSetOutfit(s.id)}
                  className={`rounded-xl border p-4 flex flex-col justify-between text-left cursor-pointer transition-all h-[95px] ${
                    isActive
                      ? "border-[#C85A17] bg-[#C85A17]/5 ring-1 ring-[#C85A17]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="text-[11px] font-bold text-gray-850">{s.label}</span>
                  <p className="text-[9px] text-gray-400 mt-1 leading-snug">{s.desc}</p>
                </button>
              );
            })}
          </div>
        )}

      </div>

      {/* Bottom buttons */}
      <div className="flex justify-between items-center border-t pt-5 mt-6">
        <button
          type="button"
          onClick={handleBack}
          disabled={plannerStep === 1}
          className="rounded-full border border-gray-300 hover:bg-gray-50 text-gray-600 px-6 py-2.5 text-xs font-bold transition disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white px-7 py-2.5 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
        >
          <span>{plannerStep === 5 ? "Generate Experience Plan" : "Continue"}</span>
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );

  function setSetOutfit(val: string) {
    setDressCode(val);
  }
};
