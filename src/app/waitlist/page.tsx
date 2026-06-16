"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WaitlistHero } from "@/components/waitlist/WaitlistHero";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { WaitlistReceipt } from "@/components/waitlist/WaitlistReceipt";
import { BANNER_IMAGES } from "@/data";

export default function WaitlistPage() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [location, setLocation] = useState("Pitampura");
  const [occasion, setOccasion] = useState("Birthday");
  const [requests, setRequests] = useState("");
  const [waitlistCode, setWaitlistCode] = useState("");

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) return alert("Please enter a valid 10-digit mobile number.");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setWaitlistCode(`WL-${Math.floor(10000 + Math.random() * 90000)}`);
      setSubmitted(true);
    }, 1200);
  };

  if (!mounted) return <div className="bg-[#f8f5ef] min-h-screen flex items-center justify-center"><div className="h-8 w-8 rounded-full border-2 border-t-[#C85A17] border-gray-200 animate-spin"></div></div>;

  return (
    <div className="bg-[#f8f5ef] min-h-screen text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />
      <WaitlistHero activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-10 sm:py-14">
        {submitted ? (
          <WaitlistReceipt name={name} phone={phone} location={location} occasion={occasion} preferredDate={preferredDate} preferredTime={preferredTime} requests={requests} waitlistCode={waitlistCode} />
        ) : (
          <WaitlistForm name={name} setName={setName} phone={phone} setPhone={setPhone} handlePhoneChange={handlePhoneChange} email={email} setEmail={setEmail} preferredDate={preferredDate} setPreferredDate={setPreferredDate} preferredTime={preferredTime} setPreferredTime={setPreferredTime} location={location} setLocation={setLocation} occasion={occasion} setOccasion={setOccasion} requests={requests} setRequests={setRequests} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
        )}
      </main>
      <Footer />
    </div>
  );
}
