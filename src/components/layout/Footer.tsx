import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1115] px-6 pb-6 pt-10 md:px-8 md:pt-12 text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-14 md:mb-16">
          
          {/* Logo & Intro */}
          <div>
            <div className="mb-4 flex items-center">
              <Link href="/" className="bg-[#C85A17] rounded-full flex items-center justify-center h-[60px] w-[60px] md:h-[70px] md:w-[70px] p-0.5">
                <img 
                  alt="Luxe Screens Logo" 
                  src="/logo.svg"
                  className="h-full w-full object-contain rounded-full"
                />
              </Link>
            </div>
            <p className="leading-relaxed text-white/80 text-sm">
              Creating unforgettable cinematic experiences for your special moments. Where celebrations meet luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/waitlist">Join Waitlist</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/#spaces">Theatres</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/#why-choose-us">About Us</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white uppercase tracking-wider">Policies</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/terms-and-conditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link className="text-white/80 transition hover:text-[#C85A17] hover:underline" href="/cancellation-policy">Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white uppercase tracking-wider">Address</h4>
            <div className="flex items-start gap-3 text-white/85 text-sm">
              <MapPin size={20} className="text-gray-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                B-345678 ff  Pitampura, Delhi 567899
              </p>
            </div>
            
            <h4 className="mb-3 mt-6 text-lg font-bold text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-white/85 text-sm">
              <a href="tel:+919999999999" className="flex items-center gap-3 transition hover:text-[#C85A17]">
                <Phone size={16} />
                <span>+91 99999 99999</span>
              </a>
              <a href="mailto:hello@luxescreens.com" className="flex items-center gap-3 transition hover:text-[#C85A17]">
                <Mail size={16} />
                <span>hello@luxescreens.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright section */}
        <div className="border-t border-white/15 pt-6 text-center text-xs text-white/70">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Luxe Screens LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
