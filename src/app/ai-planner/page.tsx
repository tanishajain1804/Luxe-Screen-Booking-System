"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PlannerWizard } from "@/components/planner/PlannerWizard";
import { PlannerResult } from "@/components/planner/PlannerResult";
import { Sparkles } from "lucide-react";
import { VIBES, WATCHLIST_DB, GREETING_THEMES, KITCHEN_MENU } from "@/data";

export default function AIPlanner() {
  const [plannerStep, setPlannerStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [vibe, setVibe] = useState("vibe-romance");
  const [genre, setGenre] = useState("Romantic");
  const [greetingText, setGreetingText] = useState("Happy Celebration!");
  const [greetingTheme, setGreetingTheme] = useState("gold");
  const [diet, setDiet] = useState("veg");
  const [taste, setTaste] = useState("Cheesy");
  const [dressCode, setDressCode] = useState("All Black");

  const handleNext = () => {
    if (plannerStep < 5) {
      setPlannerStep(prev => prev + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowResult(true);
      }, 1500);
    }
  };

  const handleBack = () => {
    if (plannerStep > 1) {
      setPlannerStep(prev => prev - 1);
    }
  };

  const resetPlanner = () => {
    setPlannerStep(1);
    setShowResult(false);
    setVibe("vibe-romance");
    setGenre("Romantic");
    setGreetingText("Happy Celebration!");
    setGreetingTheme("gold");
    setDiet("veg");
    setTaste("Cheesy");
    setDressCode("All Black");
  };

  const getExperienceCuration = () => {
    const activeVibe = VIBES.find(v => v.id === vibe) || VIBES[0];
    const movies = WATCHLIST_DB[genre] || WATCHLIST_DB["Romantic"];
    const themeObj = GREETING_THEMES.find(t => t.id === greetingTheme) || GREETING_THEMES[0];
    const menuSection = diet === "nonveg" ? KITCHEN_MENU.nonveg : KITCHEN_MENU.veg;
    const foodItems = (menuSection as any)[taste] || menuSection.Cheesy;

    let revealGuide = [];
    if (vibe === "vibe-romance") {
      revealGuide = [
        "Blindfold your partner at the entrance lobby.",
        "Lead them down the candle light walkway slowly.",
        "Once in front of the recliners, remove the blindfold to reveal the custom screen greeting and heart flower decorations."
      ];
    } else if (vibe === "vibe-surprise") {
      revealGuide = [
        "Escort your guest into the room while keeping the screen blank and lights dimmed.",
        "Trigger the heavy fog entry cloud as they sit down.",
        "Simultaneously trigger the custom screen greeting message to fade in at 100% brightness."
      ];
    } else if (vibe === "vibe-celebration") {
      revealGuide = [
        "Ask the pantry staff to prepare the balloon pop trigger.",
        "Enter the room casually for a standard movie screening.",
        "10 minutes in, pause the media to display the custom greeting card on screen as staff enters with balloons and music."
      ];
    } else {
      revealGuide = [
        "Invite the family in for a cozy movie night.",
        "Once seated, play a secret 2-minute family photo slideshow first.",
        "End the slideshow with the custom screen greeting card overlay to surprise them."
      ];
    }

    let outfitTips = "";
    if (dressCode === "All Black") {
      outfitTips = "Coordinates in deep black with subtle gold accents look incredibly high-end against the warm ambient theatre lighting.";
    } else if (dressCode === "All White") {
      outfitTips = "Crisp white attire coordinates create stunning contrasts, reflecting the glow of the screen and neon light setups.";
    } else if (dressCode === "Semi-Formal") {
      outfitTips = " Blazers or cocktail dresses in jewel tones (emerald, burgundy, navy) elevate the premium luxury theatre experience.";
    } else {
      outfitTips = "Comfy knitwear or casual coordinate loungewear in pastel tones matches the cozy family screening vibe.";
    }

    const foodParam = foodItems.map((f: any) => `${encodeURIComponent(f.name)}:${f.price}`).join(",");
    const bookingUrl = `/booking?room=${activeVibe.room}&decor=true&occasion=${encodeURIComponent(vibe === "vibe-romance" ? "Romantic Date" : vibe === "vibe-surprise" ? "Proposal" : "Birthday")}&food=${foodParam}`;

    return { activeVibe, movies, themeObj, foodItems, revealGuide, outfitTips, bookingUrl };
  };

  const experience = getExperienceCuration();

  return (
    <div className="bg-[#f8f5ef] min-h-screen text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0e1017] py-14 md:py-16 text-white flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 z-0"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-25 z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop')` }}></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A17]/25 border border-[#C85A17]/40 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C85A17]">
            <Sparkles size={11} className="animate-pulse" />
            AI Experience Planner
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif leading-tight">Design Your Custom Screening Experience</h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-300 leading-relaxed">Create screen messages, match content lists, pair kitchen snacks, and get creative surprise reveal plans curated specifically for your booking.</p>
        </div>
      </section>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-12">
        {loading ? (
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-gray-150 p-10 text-center shadow-md flex flex-col items-center justify-center space-y-5 animate-pulse min-h-[320px]">
            <div className="h-10 w-10 rounded-full border-4 border-t-[#C85A17] border-gray-200 animate-spin"></div>
            <div>
              <h3 className="text-md font-bold text-gray-800">AI Experience Designer</h3>
              <p className="text-[11px] text-gray-500 mt-1">Generating screen previews, pulling movie catalogs, and pairing kitchen menu items...</p>
            </div>
          </div>
        ) : showResult ? (
          <PlannerResult 
            genre={genre} greetingText={greetingText} dressCode={dressCode} taste={taste}
            experience={experience} resetPlanner={resetPlanner}
          />
        ) : (
          <PlannerWizard 
            plannerStep={plannerStep}
            vibe={vibe} setVibe={setVibe}
            genre={genre} setGenre={setGenre}
            greetingText={greetingText} setGreetingText={setGreetingText}
            greetingTheme={greetingTheme} setGreetingTheme={setGreetingTheme}
            diet={diet} setDiet={setDiet}
            taste={taste} setTaste={setTaste}
            dressCode={dressCode} setDressCode={setDressCode}
            handleBack={handleBack} handleNext={handleNext}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
