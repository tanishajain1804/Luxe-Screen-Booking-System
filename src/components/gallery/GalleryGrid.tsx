"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Star, MapPin, Users, Tv, Volume2, ArrowRight, X, Flame, Sparkles } from "lucide-react";
import { Theatre } from "@/types";

interface GalleryGridProps {
  filteredTheatres: Theatre[];
  popularTheatres: Theatre[];
  recentlyViewedTheatres: Theatre[];
  isMounted: boolean;
  addToRecentlyViewed: (id: string) => void;
  removeFromRecentlyViewed: (id: string, e: React.MouseEvent) => void;
  selectedTheatre: Theatre | null;
  setSelectedTheatre: (t: Theatre | null) => void;
  setSearchQuery: (q: string) => void;
  setSelectedCategory: (c: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  filteredTheatres,
  popularTheatres,
  recentlyViewedTheatres,
  isMounted,
  addToRecentlyViewed,
  removeFromRecentlyViewed,
  selectedTheatre,
  setSelectedTheatre,
  setSearchQuery,
  setSelectedCategory
}) => {
  return (
    <div>
      {/* Popular This Week Subsection */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="text-[#C85A17] fill-[#C85A17] animate-pulse" size={24} />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Popular This Week</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularTheatres.map((theatre) => (
            <div 
              key={`popular-${theatre.id}`}
              onClick={() => {
                setSelectedTheatre(theatre);
                addToRecentlyViewed(theatre.id);
              }}
              className="group relative bg-white rounded-3xl border border-orange-200/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Glowing Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Flame size={12} className="fill-white" />
                Trending
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
                <img 
                  src={theatre.image} 
                  alt={theatre.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1">
                    <Eye size={14} /> Quick View Details
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#C85A17] transition-colors leading-snug">
                      {theatre.name}
                    </h4>
                    <span className="shrink-0 text-xs bg-amber-50 text-[#C85A17] px-2 py-0.5 rounded-md flex items-center gap-0.5 font-bold border border-amber-100">
                      ★ {theatre.rating}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <MapPin size={13} className="text-gray-400" />
                    {theatre.location}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-4 py-3 border-y border-gray-50 text-center text-gray-600">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Limit</span>
                      <span className="text-xs font-bold text-gray-700">{theatre.maxCapacity} Guests</span>
                    </div>
                    <div className="border-x border-gray-100">
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Screen</span>
                      <span className="text-xs font-bold text-gray-700">{theatre.screen.split(" ")[0]}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Audio</span>
                      <span className="text-xs font-bold text-gray-700">600W</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="block text-[10px] text-gray-400">Starts from</span>
                    <span className="text-base font-extrabold text-gray-900">₹{theatre.basePrice}</span>
                  </div>
                  <Link 
                    href={`/booking?room=${theatre.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white text-xs font-bold px-4 py-2.5 transition-colors flex items-center gap-1 shadow-sm"
                  >
                    Book Slot <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Theatres Directory List Grid */}
      <div className="relative min-h-[300px]">
        {filteredTheatres.length > 0 ? (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTheatres.map((theatre) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  key={theatre.id}
                  onClick={() => {
                    setSelectedTheatre(theatre);
                    addToRecentlyViewed(theatre.id);
                  }}
                  className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 shrink-0">
                    <img 
                      src={theatre.image} 
                      alt={theatre.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    {theatre.isTrending && (
                      <div className="absolute top-4 left-4 z-10 bg-orange-600 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">
                        🔥 Popular
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs bg-black/60 px-3 py-1.5 rounded-full font-bold backdrop-blur-xs flex items-center gap-1 shadow-md">
                        <Eye size={14} /> View Details
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-base font-bold text-gray-800 group-hover:text-[#C85A17] transition-colors leading-tight">
                          {theatre.name}
                        </h4>
                        <span className="shrink-0 text-xs bg-amber-50 text-[#C85A17] px-2 py-0.5 rounded-md flex items-center gap-0.5 font-bold">
                          ★ {theatre.rating}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                        <MapPin size={12} className="text-gray-400" />
                        {theatre.location}
                      </p>

                      <div className="grid grid-cols-3 gap-1 mt-4 py-3 border-y border-gray-50 text-center text-gray-600">
                        <div>
                          <span className="block text-[8px] uppercase tracking-wider text-gray-400 font-semibold">Limit</span>
                          <span className="text-xs font-bold text-gray-700">{theatre.maxCapacity} Guests</span>
                        </div>
                        <div className="border-x border-gray-100">
                          <span className="block text-[8px] uppercase tracking-wider text-gray-400 font-semibold">Screen</span>
                          <span className="text-xs font-bold text-gray-700">{theatre.screen.split(" ")[0]}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] uppercase tracking-wider text-gray-400 font-semibold">Audio</span>
                          <span className="text-xs font-bold text-gray-700">Dolby</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                      <div>
                        <span className="block text-[9px] text-gray-400">Base Price</span>
                        <span className="text-base font-extrabold text-gray-900">₹{theatre.basePrice}</span>
                      </div>
                      <Link 
                        href={`/booking?room=${theatre.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white text-xs font-bold px-4 py-2.5 transition-colors flex items-center gap-1 shadow-sm"
                      >
                        Book Slot <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-xs">
            <Sparkles className="mx-auto text-gray-300 mb-3" size={36} />
            <p className="text-gray-500 font-semibold">No theatres match your query.</p>
            <p className="text-gray-400 text-xs mt-1">Try resetting the filters or typing a different keyword.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white text-xs font-bold px-5 py-2.5 transition-colors shadow-sm"
            >
              Reset Directory
            </button>
          </div>
        )}
      </div>

      {/* Recently Viewed Subsection */}
      {isMounted && recentlyViewedTheatres.length > 0 && (
        <div className="mt-16 border-t border-gray-200/60 pt-10">
          <div className="flex items-center gap-2 mb-6">
            <Eye className="text-gray-500" size={22} />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Recently Viewed Rooms</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {recentlyViewedTheatres.map((theatre) => (
              <div 
                key={`recent-${theatre.id}`}
                onClick={() => {
                  setSelectedTheatre(theatre);
                  addToRecentlyViewed(theatre.id);
                }}
                className="shrink-0 w-[240px] sm:w-[280px] bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                  <img 
                    src={theatre.image} 
                    alt={theatre.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform"
                  />
                  <button 
                    onClick={(e) => removeFromRecentlyViewed(theatre.id, e)}
                    className="absolute top-2.5 right-2.5 z-10 bg-black/50 hover:bg-black/80 text-white hover:text-red-400 p-1.5 rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center border border-white/10"
                    title="Remove from recently viewed"
                    aria-label={`Remove ${theatre.name} from recently viewed`}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sm text-gray-800 line-clamp-1">{theatre.name}</h4>
                  <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin size={11} className="text-gray-400" />
                    {theatre.location}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                    <span className="text-xs font-extrabold text-[#C85A17]">₹{theatre.basePrice}</span>
                    <span className="text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">Max {theatre.maxCapacity} guests</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Details Modal */}
      <AnimatePresence>
        {selectedTheatre && (
          <div 
            onClick={() => setSelectedTheatre(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col justify-between relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Fixed at top-right of modal) */}
              <button 
                onClick={() => setSelectedTheatre(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors cursor-pointer z-50 animate-fade-in"
              >
                <X size={18} />
              </button>

              {/* Modal Content Scrollable Area */}
              <div className="overflow-y-auto flex-1 min-h-0">
                
                {/* Modal Image Header */}
                <div className="relative aspect-[16/9] w-full shrink-0">
                  <img 
                    src={selectedTheatre.image} 
                    alt={selectedTheatre.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white pr-6">
                    <div className="flex items-center gap-2">
                      {selectedTheatre.isTrending && (
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                          Trending
                        </span>
                      )}
                      <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-0.5 rounded flex items-center gap-0.5 font-bold">
                        ⭐ {selectedTheatre.rating}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold mt-2 tracking-tight">{selectedTheatre.name}</h2>
                    <p className="text-xs sm:text-sm text-white/80 flex items-center gap-1 mt-0.5">
                      <MapPin size={12} className="text-orange-400" />
                      {selectedTheatre.location}
                    </p>
                  </div>
                </div>

                {/* Specs & Details */}
                <div className="p-5 sm:p-6 space-y-5 text-gray-700 text-left">
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1.5">About the Room</h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600">{selectedTheatre.description}</p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 bg-gray-50 p-4 rounded-2xl">
                    <div className="text-center">
                      <Users size={16} className="mx-auto text-[#C85A17] mb-1" />
                      <span className="block text-[8px] text-gray-400 uppercase font-bold tracking-wider">Capacity</span>
                      <span className="text-xs font-extrabold text-gray-800 mt-0.5 block">{selectedTheatre.limit}</span>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <Tv size={16} className="mx-auto text-[#C85A17] mb-1" />
                      <span className="block text-[8px] text-gray-400 uppercase font-bold tracking-wider">Screen</span>
                      <span className="text-xs font-extrabold text-gray-800 mt-0.5 block">{selectedTheatre.screen}</span>
                    </div>
                    <div className="text-center">
                      <Volume2 size={16} className="mx-auto text-[#C85A17] mb-1" />
                      <span className="block text-[8px] text-gray-400 uppercase font-bold tracking-wider">Acoustics</span>
                      <span className="text-xs font-extrabold text-gray-800 mt-0.5 block">{selectedTheatre.sound.split(" ")[0]}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2.5">Room Amenities</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTheatre.amenities.map((item, idx) => (
                        <span key={idx} className="text-xs bg-orange-50 text-[#C85A17] px-3 py-1 rounded-xl font-bold border border-orange-100/40">
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Occasions / Tag vibes */}
                  <div>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2.5">Suitable Occasions</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTheatre.categories.map((item, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium">
                          #{item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer (Booking CTA) */}
              <div className="p-5 sm:p-6 border-t border-gray-100 flex items-center justify-between shrink-0 bg-white">
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Pricing Starts at</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-gray-900">₹{selectedTheatre.basePrice}</span>
                    <span className="text-xs text-gray-400">/ 3 hrs slot</span>
                  </div>
                </div>
                <Link 
                  href={`/booking?room=${selectedTheatre.id}`}
                  onClick={() => setSelectedTheatre(null)}
                  className="rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white px-5 py-3 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg"
                >
                  Book Room <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
