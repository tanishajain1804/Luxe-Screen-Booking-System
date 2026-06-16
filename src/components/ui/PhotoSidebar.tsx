"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Camera, Sparkles, Maximize2 } from "lucide-react";
import { usePathname } from "next/navigation";

const PHOTOS = [
  { src: "/images/celebration_1.png", alt: "Glass of confetti and disco ball celebration" },
  { src: "/images/celebration_2.png", alt: "Group of friends celebrating with confetti" },
  { src: "/images/celebration_3.png", alt: "Pink balloon arch decoration setup" },
  { src: "/images/celebration_4.jpg", alt: "Farm themed custom birthday cake table setup" },
  { src: "/images/celebration_5.png", alt: "Birthday surprise party with cake presentation" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop", alt: "Surprise tears of joy" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop", alt: "Birthday celebration" },
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop", alt: "Unforgettable moments" },
  { src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=600&auto=format&fit=crop", alt: "Custom birthday theme" },
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop", alt: "Intimate private screen date" },
  { src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600&auto=format&fit=crop", alt: "Romantic anniversary" },
  { src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop", alt: "Red carpet setup" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop", alt: "Candlelight pathway" },
  { src: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=600&auto=format&fit=crop", alt: "Friends watch party" },
  { src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop", alt: "Movie night celebration" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop", alt: "She said yes!" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop", alt: "Surprise proposal" }
];

export default function PhotoSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
    const handleClose = () => {
      setIsOpen(false);
    };

    window.addEventListener("toggle-photos-sidebar", handleToggle);
    window.addEventListener("close-all-drawers", handleClose);

    return () => {
      window.removeEventListener("toggle-photos-sidebar", handleToggle);
      window.removeEventListener("close-all-drawers", handleClose);
    };
  }, []);

  const pathname = usePathname();

  if (pathname !== "/") return null;
  if (!isOpen) return null;

  return (
    <>
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
                  <Camera size={16} className="text-primary" />
                  Celebration Gallery
                </h3>
                <p className="text-xs text-gray-500">Real guest memories inside our suites</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Photo Grid */}
            <div className="flex-1 overflow-y-auto mt-6 pr-1 no-scrollbar">
              <div className="grid grid-cols-2 gap-3 pb-6">
                {PHOTOS.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => setZoomImg(photo.src)}
                    className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-[#171923] hover:border-primary/30 transition-all duration-300"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Maximize2 size={18} className="text-white drop-shadow-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky bottom CTA */}
            <div className="border-t border-card-border pt-4 shrink-0 mt-auto">
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-primary-hover text-black font-bold py-3 text-sm transition-colors cursor-pointer"
              >
                <Sparkles size={14} />
                <span>Explore Full Gallery</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded Photo Zoom Modal */}
      {zoomImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xs">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setZoomImg(null)} />
          <div className="relative max-w-[90vw] max-h-[85vh] z-10 flex flex-col items-center">
            <button
              onClick={() => setZoomImg(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white p-2"
            >
              <X size={28} />
            </button>
            <img
              src={zoomImg}
              alt="Zoomed memory"
              className="object-contain max-w-full max-h-[80vh] rounded-lg shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      )}
    </>
  );
}
