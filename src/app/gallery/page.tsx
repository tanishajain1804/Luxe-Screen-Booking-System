"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GallerySearchSort } from "@/components/gallery/GallerySearchSort";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { LightboxModal } from "@/components/gallery/LightboxModal";
import { Theatre } from "@/types";
import { 
  MOMENT_CATEGORIES, 
  GALLERY_ITEMS, 
  BANNER_IMAGES, 
  GALLERY_THEATERS 
} from "@/data";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Moments");
  const [filteredItems, setFilteredItems] = useState(GALLERY_ITEMS);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("price-asc");
  const [selectedTheatre, setSelectedTheatre] = useState<Theatre | null>(null);
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 5000);
    const cached = localStorage.getItem("recently_viewed_theatres");
    if (cached) setRecentlyViewedIds(JSON.parse(cached));
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === "All Moments") {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      const filtered = GALLERY_ITEMS.filter(item => item.categories.includes(activeCategory));
      setFilteredItems(filtered);
    }
  }, [activeCategory]);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const addToRecentlyViewed = (id: string) => {
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((item) => item !== id);
      const updated = [id, ...filtered].slice(0, 5);
      localStorage.setItem("recently_viewed_theatres", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromRecentlyViewed = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentlyViewedIds((prev) => {
      const updated = prev.filter((item) => item !== id);
      localStorage.setItem("recently_viewed_theatres", JSON.stringify(updated));
      return updated;
    });
  };

  const filteredTheatres = GALLERY_THEATERS.filter((theatre) => {
    const matchesSearch = theatre.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          theatre.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || theatre.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.basePrice - b.basePrice;
    if (sortBy === "price-desc") return b.basePrice - a.basePrice;
    if (sortBy === "capacity-asc") return a.maxCapacity - b.maxCapacity;
    if (sortBy === "capacity-desc") return b.maxCapacity - a.maxCapacity;
    return 0;
  });

  const popularTheatres = GALLERY_THEATERS.filter(t => t.isTrending);
  const recentlyViewedTheatres = recentlyViewedIds
    .map(id => GALLERY_THEATERS.find(t => t.id === id))
    .filter((t): t is Theatre => !!t);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans flex flex-col">
      <Navbar />
      <GalleryHero activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

      {/* Directory Section */}
      <section className="bg-[#FAF8F5] py-14 px-4 sm:px-6 md:py-18 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A17] bg-[#C85A17]/10 px-3 py-1 rounded-full">Explore Spaces</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">Our Luxury Private Theatres</h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">Browse and discover the ultimate celebration rooms equipped with top-tier AV systems, comfy recliners, and themed decor.</p>
          </div>

          <GallerySearchSort 
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            sortBy={sortBy} setSortBy={setSortBy}
            selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
          />

          <GalleryGrid 
            filteredTheatres={filteredTheatres}
            popularTheatres={popularTheatres}
            recentlyViewedTheatres={recentlyViewedTheatres}
            isMounted={isMounted}
            addToRecentlyViewed={addToRecentlyViewed}
            removeFromRecentlyViewed={removeFromRecentlyViewed}
            selectedTheatre={selectedTheatre}
            setSelectedTheatre={setSelectedTheatre}
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Guest Celebration Moments Section */}
      <section className="bg-gradient-to-b from-[#f8f8f6] to-[#eef2f7] px-3 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 md:pt-18 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-white/70 px-3 py-1 rounded-full border border-gray-100">Celebration Gallery</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">Unforgettable Guest Moments</h2>
            <p className="text-gray-500 text-sm mt-2">Browse photo moments captured during birthdays, proposals, anniversaries, and family celebrations in our theatres.</p>
          </div>

          {/* Category Tabs */}
          <div className="mb-10 sm:mb-12">
            <div className="overflow-x-auto pb-3 no-scrollbar">
              <div className="mx-auto flex w-max items-center gap-2 rounded-2xl border border-black/10 bg-white/70 p-2 backdrop-blur-sm">
                {MOMENT_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`relative whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                        isActive ? "text-black shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white font-semibold" : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Gallery Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-black/5 bg-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <img alt={item.alt} src={item.src} className="object-cover object-center w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold drop-shadow-sm line-clamp-2">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/40 rounded-2xl border border-black/5 backdrop-blur-xs">
              <Sparkles className="mx-auto text-gray-300 mb-3" size={40} />
              <p className="text-gray-500 font-medium">No moments in this category yet.</p>
              <button onClick={() => setActiveCategory("All Moments")} className="mt-3 text-sm font-bold text-[#A04000] hover:underline cursor-pointer">View All Moments</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none bg-fixed bg-cover bg-center z-0">
          <img alt="Ready to Celebrate background" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Celebrate?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">Book your private theatre experience in just a few clicks. Our team is always available if you need help with setups, styling, or food customization.</p>
          <div className="mb-8 mx-auto flex w-full max-w-[340px] flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row lg:gap-4">
            <Link className="group inline-flex items-center justify-center rounded-full bg-[#C85A17] text-white font-bold transition-all hover:bg-[#A04000] hover:shadow-lg hover:shadow-[#C85A17]/30 w-full max-w-[250px] sm:w-auto px-8 py-3.5 text-sm" href="/booking">
              <span>Start Booking</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center rounded-full border border-white/60 bg-white/5 font-semibold transition-all hover:bg-white/10 hover:border-white w-full max-w-[250px] sm:w-auto px-8 py-3.5 text-sm text-white" href="https://wa.me/919999999999?text=Hi%20Luxe%20Screens%20%0A%0AI%27m%20interested%20in%20booking%20a%20private%20theatre%20for%20a%20special%20occasion.%20Could%20you%20please%20guide%20me%20with%20availability%2C%20pricing%2C%20and%20options%3F%0A%0AThanks!">
              <MessageSquare size={16} className="mr-2 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-xs text-white/75 sm:flex-row sm:gap-6 sm:text-sm border-t border-white/10 pt-8">
            <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-[#C85A17] transition-colors"><Phone size={15} /><span>+91 99999 99999</span></a>
            <span className="hidden sm:block text-white/30">•</span>
            <a href="mailto:hello@luxescreens.com" className="flex items-center gap-2 hover:text-[#C85A17] transition-colors"><Mail size={15} /><span>hello@luxescreens.com</span></a>
            <span className="hidden sm:block text-white/30">•</span>
            <span className="flex items-center gap-2"><MapPin size={15} /><span>Pitampura, Ring Road, Delhi</span></span>
          </div>
        </div>
      </section>

      <LightboxModal 
        lightboxIndex={lightboxIndex} setLightboxIndex={setLightboxIndex}
        filteredItems={filteredItems}
        handlePrev={handlePrev} handleNext={handleNext}
      />

      <Footer />
    </div>
  );
}
