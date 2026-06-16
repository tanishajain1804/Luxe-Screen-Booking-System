"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InsideLookSection } from "@/components/sections/InsideLookSection";
import { TheatreGridSection } from "@/components/sections/TheatreGridSection";
import { ExperienceGallerySection } from "@/components/sections/ExperienceGallerySection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HERO_IMAGES } from "@/data";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Background slideshow transition loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Navbar />
      <HeroSection activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <ServicesSection />
      <InsideLookSection />
      <TheatreGridSection />
      <ExperienceGallerySection />
      <WhyChooseUsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
