"use client";

import React from "react";
import Link from "next/link";
import { Tv, Star, Sparkles, Utensils, Shirt, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";

interface Movie {
  title: string;
  year: string;
  rating: string;
  desc: string;
}

interface Theme {
  name: string;
  bg: string;
  border: string;
  text: string;
}

interface FoodItem {
  name: string;
  price: number;
  desc: string;
}

interface Experience {
  activeVibe: {
    room: string;
    roomName: string;
  };
  movies: Movie[];
  themeObj: Theme;
  foodItems: FoodItem[];
  revealGuide: string[];
  outfitTips: string;
  bookingUrl: string;
}

interface PlannerResultProps {
  genre: string;
  greetingText: string;
  dressCode: string;
  taste: string;
  experience: Experience;
  resetPlanner: () => void;
}

export const PlannerResult: React.FC<PlannerResultProps> = ({
  genre,
  greetingText,
  dressCode,
  taste,
  experience,
  resetPlanner
}) => {
  return (
    <div className="space-y-6 text-left">
      
      {/* Top Row: Screen Mockup & Watchlist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Screen Mockup preview */}
        <div className="rounded-2xl border border-gray-150 bg-white p-5 shadow-xs flex flex-col justify-between min-h-[300px]">
          <div className="border-b pb-3 mb-4">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              <Tv size={16} className="text-[#C85A17]" />
              Custom Screen Welcome Slide
            </h3>
            <p className="text-[10px] text-gray-400">Preview of the slideshow layout that will display on your 150&quot; HD screen</p>
          </div>

          {/* CSS Screen representation */}
          <div className={`flex-1 rounded-xl flex items-center justify-center p-6 text-center ${experience.themeObj.bg} ${experience.themeObj.border} min-h-[160px] relative overflow-hidden transition-all duration-300`}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_80%)]" />
            <p className={`text-base sm:text-xl font-bold uppercase select-none relative z-10 ${experience.themeObj.text}`}>
              {greetingText || "Happy Celebration"}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">
            <span>Theme: <strong>{experience.themeObj.name}</strong></span>
            <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-emerald-500" /> Preloaded on screen</span>
          </div>
        </div>

        {/* Watchlist match */}
        <div className="rounded-2xl border border-gray-150 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div className="border-b pb-3 mb-4">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              <Tv size={16} className="text-[#C85A17]" />
              Curated {genre} Watchlist
            </h3>
            <p className="text-[10px] text-gray-400">Suggested titles to stream during your theater booking</p>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-center">
            {experience.movies.map((m, idx) => (
              <div key={idx} className="p-3 bg-zinc-50 border rounded-lg hover:border-[#C85A17]/30 transition">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-gray-800">{m.title}</h4>
                  <div className="flex items-center gap-2 text-[9px] font-mono font-bold text-gray-400">
                    <span>{m.year}</span>
                    <span>·</span>
                    <span className="text-amber-500 flex items-center gap-0.5"><Star size={10} fill="currentColor" /> {m.rating}</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 leading-snug line-clamp-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Reveal Guide, Food menu & dress code */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Surprise Reveal Steps */}
        <div className="rounded-2xl border border-gray-150 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b pb-2.5 mb-3 flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#C85A17]" />
              Surprise Reveal Guide
            </h4>
            <ol className="space-y-3 text-[11px] text-gray-500 leading-normal pl-1.5">
              {experience.revealGuide.map((stepText, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C85A17]/10 text-[9px] font-bold text-[#C85A17]">
                    {idx + 1}
                  </span>
                  <span>{stepText}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Kitchen Food pairing recommendations */}
        <div className="rounded-2xl border border-gray-150 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b pb-2.5 mb-3 flex items-center gap-1.5">
              <Utensils size={14} className="text-[#C85A17]" />
              Kitchen Pairings ({taste})
            </h4>
            <div className="space-y-3">
              {experience.foodItems.map((f: any, idx: number) => (
                <div key={idx} className="flex justify-between items-start text-[11px]">
                  <div>
                    <p className="font-bold text-gray-800 leading-tight">{f.name}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5 leading-snug line-clamp-1">{f.desc}</p>
                  </div>
                  <span className="font-bold text-[#C85A17] shrink-0">₹{f.price}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[9px] text-gray-400 mt-4 border-t pt-2 leading-relaxed">Ordered in-house and served fresh from our pantry during interval.</p>
        </div>

        {/* Dress Code Recommendation */}
        <div className="rounded-2xl border border-gray-150 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b pb-2.5 mb-3 flex items-center gap-1.5">
              <Shirt size={14} className="text-[#C85A17]" />
              Outfit Dress Code
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 border px-3 py-1 text-[10px] font-bold text-gray-700 w-fit">
                Style: <strong>{dressCode}</strong>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mt-2">
                {experience.outfitTips}
              </p>
            </div>
          </div>
          <p className="text-[9px] text-gray-400 border-t pt-2 mt-4">Ensures your pictures look cohesive against the suite backgrounds.</p>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 mt-8">
        <div>
          <h3 className="text-sm font-bold text-gray-800">Ready to book this experience?</h3>
          <p className="text-[11px] text-gray-500">Auto-prefills the recommended room and date in the checkout pipeline.</p>
        </div>
        
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={resetPlanner}
            className="rounded-full border border-gray-300 hover:bg-gray-50 text-gray-600 px-6 py-2.5 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer justify-center flex-1 sm:flex-none"
          >
            <RefreshCw size={12} />
            <span>Reset Designer</span>
          </button>
          <Link
            href={experience.bookingUrl}
            className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white px-7 py-2.5 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer justify-center uppercase tracking-wider flex-1 sm:flex-none"
          >
            <span>Proceed to Booking</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

    </div>
  );
};
