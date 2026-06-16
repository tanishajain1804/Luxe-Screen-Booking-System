"use client";

import { Tag, Camera, Play, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FloatingSidebarWidgets() {
  const pathname = usePathname();

  if (pathname !== "/") return null;
  const triggerDrawer = (eventName: string) => {
    // First close any open drawers to prevent overlaps
    window.dispatchEvent(new Event("close-all-drawers"));
    // Wait briefly for smooth closing transition before opening new one
    setTimeout(() => {
      window.dispatchEvent(new Event(eventName));
    }, 100);
  };

  const widgets = [
    {
      label: "Special Offers",
      icon: <Tag size={20} />,
      onClick: () => triggerDrawer("toggle-coupons"),
      color: "hover:bg-primary hover:text-black hover:border-primary"
    },
    {
      label: "Customer Photos",
      icon: <Camera size={20} />,
      onClick: () => triggerDrawer("toggle-photos-sidebar"),
      color: "hover:bg-primary hover:text-black hover:border-primary"
    },
    {
      label: "Celebration Videos",
      icon: <Play size={20} className="ml-0.5 fill-current" />,
      onClick: () => triggerDrawer("toggle-videos-sidebar"),
      color: "hover:bg-primary hover:text-black hover:border-primary"
    },
    {
      label: "Chat on WhatsApp",
      icon: <MessageSquare size={20} />,
      onClick: () => {
        window.open(
          "https://wa.me/919999999999?text=Hi%20Luxe%20Screens%20%0A%0AI%27m%20interested%20in%20booking%20a%20private%20theatre%20for%20a%20special%20occasion.%20Could%20you%20please%20guide%20me%20with%20availability%2C%20pricing%2C%20and%20options%3F%0A%0AThanks!",
          "_blank"
        );
      },
      color: "hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
    }
  ];

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {widgets.map((widget, idx) => (
        <div key={idx} className="group relative flex items-center justify-end">
          {/* Label Tooltip sliding out on left */}
          <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-150 origin-right whitespace-nowrap rounded-xl bg-black/90 px-3.5 py-2 text-xs font-bold text-white shadow-xl border border-white/10 pointer-events-none">
            {widget.label}
          </span>
          
          {/* Circular Button */}
          <button
            onClick={widget.onClick}
            className={`flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/10 bg-[#0e1017]/85 backdrop-blur-md text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.24)] transition-all hover:scale-105 active:scale-95 cursor-pointer ${widget.color}`}
            aria-label={widget.label}
          >
            {widget.icon}
          </button>
        </div>
      ))}
    </div>
  );
}
