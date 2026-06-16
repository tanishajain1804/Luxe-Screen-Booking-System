"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Play, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { SHORTS_VIDEO_IDS } from "@/data";

export default function VideoSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
    const handleClose = () => {
      setIsOpen(false);
    };

    window.addEventListener("toggle-videos-sidebar", handleToggle);
    window.addEventListener("close-all-drawers", handleClose);

    return () => {
      window.removeEventListener("toggle-videos-sidebar", handleToggle);
      window.removeEventListener("close-all-drawers", handleClose);
    };
  }, []);

  const pathname = usePathname();

  if (pathname !== "/") return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      {/* Click overlay to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Drawer contents */}
      <div className="relative h-full w-full max-w-[400px] border-l border-card-border bg-[#0e1017] p-6 shadow-2xl animate-slide-left flex flex-col justify-between">
        <div className="flex flex-col h-full overflow-hidden">
          
          {/* Header */}
          <div className="flex items-start justify-between border-b border-card-border pb-4 shrink-0">
            <div>
              <h3 className="flex items-center gap-1.5 text-base font-bold text-white">
                <Play size={16} className="text-primary fill-primary" />
                Watch Celebrations
              </h3>
              <p className="text-xs text-gray-500">Real video reviews & surprise moments</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Video Feed */}
          <div className="flex-1 overflow-y-auto mt-6 pr-1 no-scrollbar space-y-5 pb-6">
            {SHORTS_VIDEO_IDS.map((videoId, index) => (
              <div
                key={index}
                className="relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-slate-700 bg-black shadow-md"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&modestbranding=1&controls=1&mute=1`}
                  title={`Celebration video highlight ${index + 1}`}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Sticky bottom CTA */}
          <div className="border-t border-card-border pt-4 shrink-0 mt-auto">
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white font-bold py-3 text-sm transition-colors cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Book Your Private Theatre</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
