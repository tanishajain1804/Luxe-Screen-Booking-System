"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Tag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleCoupons = () => {
    window.dispatchEvent(new Event("toggle-coupons"));
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    }

    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Handle active section tracking for homepage
      if (pathname === "/") {
        const scrollPosition = currentScrollY + 160;
        const spacesEl = document.getElementById("spaces");
        const whyChooseUsEl = document.getElementById("why-choose-us");
        const spacesOffset = spacesEl ? spacesEl.offsetTop : 0;
        const whyChooseUsOffset = whyChooseUsEl ? whyChooseUsEl.offsetTop : 0;

        if (whyChooseUsOffset && scrollPosition >= whyChooseUsOffset) {
          setActiveSection("about");
        } else if (spacesOffset && scrollPosition >= spacesOffset) {
          setActiveSection("theatres");
        } else {
          setActiveSection("home");
        }
      }

      // 2. Handle scrolled styling check
      setIsScrolled(currentScrollY > 20);

      // 3. Handle dynamic visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastY && currentScrollY > 120) {
        setVisible(false);
        setIsOpen(false); // close mobile menu on scroll down
      } else {
        setVisible(true);
      }

      lastY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isBookingPage = pathname === "/booking";

  if (isBookingPage) {
    return (
      <header className={`w-full bg-white border-b border-gray-300 sticky top-0 z-50 flex items-center transition-all duration-300 transform ${visible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "h-[64px] sm:h-[72px] shadow-md bg-white/95 backdrop-blur-md border-b border-gray-200/80" : "h-[72px] sm:h-[80px]"}`}>
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 cursor-pointer group">
              <div className={`bg-[#C85A17] rounded-full flex items-center justify-center shadow-sm overflow-hidden p-0.5 transition-all duration-300 group-hover:scale-103 ${isScrolled ? "h-[40px] w-[40px] sm:h-[44px] sm:w-[44px]" : "h-[48px] w-[48px] sm:h-[50px] sm:w-[50px]"}`}>
                <img 
                  alt="Luxe Screens" 
                  src="/logo.svg"
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`w-full bg-white border-b border-gray-300 sticky top-0 z-50 flex items-center transition-all duration-300 transform ${visible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "h-[64px] sm:h-[72px] shadow-md bg-white/95 backdrop-blur-md border-b border-gray-200/80" : "h-[72px] sm:h-[80px]"}`}>
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Container (Left) */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className={`bg-[#C85A17] rounded-full flex items-center justify-center shadow-sm overflow-hidden p-0.5 transition-all duration-300 group-hover:scale-103 ${isScrolled ? "h-[40px] w-[40px] sm:h-[44px] sm:w-[44px]" : "h-[48px] w-[48px] sm:h-[50px] sm:w-[50px]"}`}>
                <img 
                  alt="Luxe Screens" 
                  src="/logo.svg"
                  className="h-full w-full object-contain rounded-full"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Middle / Center) */}
          <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-5 xl:gap-7 flex-1">
            <Link 
              href="/" 
              className={`relative text-sm py-1 transition-all duration-200 whitespace-nowrap ${
                pathname === "/" && activeSection === "home"
                  ? "text-[#C85A17] font-bold pb-1 border-b-2 border-[#C85A17]"
                  : "font-semibold text-zinc-700 hover:text-[#C85A17]"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className={`relative text-sm py-1 transition-all duration-200 whitespace-nowrap ${
                pathname === "/gallery"
                  ? "text-[#C85A17] font-bold pb-1 border-b-2 border-[#C85A17]"
                  : "font-semibold text-zinc-700 hover:text-[#C85A17]"
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/ai-planner" 
              className={`relative text-sm py-1 transition-all duration-200 whitespace-nowrap ${
                pathname === "/ai-planner"
                  ? "text-[#C85A17] font-bold pb-1 border-b-2 border-[#C85A17]"
                  : "font-semibold text-zinc-700 hover:text-[#C85A17]"
              }`}
            >
              <span className="flex items-center gap-1">
                AI Planner
                <span className="rounded bg-[#C85A17]/10 px-1 py-0.2 text-[8px] font-bold text-[#C85A17] animate-pulse">
                  AI
                </span>
              </span>
            </Link>
            <Link 
              href="/waitlist" 
              className={`relative text-sm py-1 transition-all duration-200 whitespace-nowrap ${
                pathname === "/waitlist"
                  ? "text-[#C85A17] font-bold pb-1 border-b-2 border-[#C85A17]"
                  : "font-semibold text-zinc-700 hover:text-[#C85A17]"
              }`}
            >
              Join Waitlist
            </Link>
            <Link 
              href="/#spaces" 
              className={`relative text-sm py-1 transition-all duration-200 whitespace-nowrap ${
                pathname === "/" && activeSection === "theatres"
                  ? "text-[#C85A17] font-bold pb-1 border-b-2 border-[#C85A17]"
                  : "font-semibold text-zinc-700 hover:text-[#C85A17]"
              }`}
            >
              Theatres
            </Link>
            <Link 
              href="/#why-choose-us" 
              className={`relative text-sm py-1 transition-all duration-200 whitespace-nowrap ${
                pathname === "/" && activeSection === "about"
                  ? "text-[#C85A17] font-bold pb-1 border-b-2 border-[#C85A17]"
                  : "font-semibold text-zinc-700 hover:text-[#C85A17]"
              }`}
            >
              About Us
            </Link>
            
            <button
              onClick={toggleCoupons}
              className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <Tag size={13} />
              Coupons
            </button>
          </nav>

          {/* Action Items (Right) */}
          <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6 flex-1">
            <a
              href="tel:9999999999"
              className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700 hover:text-[#C85A17] transition-colors whitespace-nowrap"
            >
              <Phone size={14} className="text-[#C85A17]" />
              <span>9999999999</span>
            </a>

            <Link
              href="/booking"
              className="rounded-full bg-[#C85A17] text-white px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#C85A17]/25 transition-all hover:scale-102 whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={toggleCoupons}
              className="rounded-full border border-gray-300 p-2 text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
            >
              <Tag size={15} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute left-0 w-full border-b border-gray-300 bg-white px-4 pt-2 pb-6 space-y-2.5 shadow-lg z-50 transition-all duration-300 ${isScrolled ? "top-[64px] sm:top-[72px]" : "top-[72px] sm:top-[80px]"}`}>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/" && activeSection === "home"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/gallery"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/ai-planner"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/ai-planner"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            <span className="flex items-center gap-1.5 justify-between w-full">
              <span>AI Planner</span>
              <span className="rounded bg-[#C85A17]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#C85A17] animate-pulse">
                AI
              </span>
            </span>
          </Link>
          <Link
            href="/waitlist"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/waitlist"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Join Waitlist
          </Link>
          <Link
            href="/#spaces"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/" && activeSection === "theatres"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            Theatres
          </Link>
          <Link
            href="/#why-choose-us"
            onClick={() => setIsOpen(false)}
            className={`block rounded-lg px-3 py-2 text-base ${
              pathname === "/" && activeSection === "about"
                ? "font-bold text-[#C85A17] bg-[#C85A17]/5"
                : "font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#A04000]"
            }`}
          >
            About Us
          </Link>
          
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-150 mt-2">
            <a
              href="tel:9999999999"
              className="flex items-center gap-2 text-base font-semibold text-gray-800 px-3"
            >
              <Phone size={16} className="text-[#A04000]" />
              <span>9999999999</span>
            </a>
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-full bg-[#C85A17] py-3 text-base font-bold text-white hover:bg-[#A04000] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
