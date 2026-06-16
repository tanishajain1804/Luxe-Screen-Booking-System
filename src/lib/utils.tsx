import React from "react";

export const formatDateLabel = (rawDate: string) => {
  if (!rawDate) return "";
  const parts = rawDate.split("-");
  if (parts.length !== 3) return rawDate;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = parseInt(parts[2], 10);
  const month = months[parseInt(parts[1], 10) - 1];
  const year = parts[0];
  return `${day} ${month} ${year}`;
};

export const formatCustomDate = (rawDate: string) => {
  if (!rawDate) return "";
  const parts = rawDate.split("-");
  if (parts.length !== 3) return rawDate;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = parseInt(parts[2], 10);
  const month = months[parseInt(parts[1], 10) - 1];
  return `${day} ${month}`;
};

export const renderOccasionIcon = (id: string) => {
  switch (id) {
    case "Birthday":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M4 10h16v10H4zM4 14h16" />
          <path d="M8 6v4M12 6v4M16 6v4" />
          <path d="M8 3v1M12 3v1M16 3v1" />
        </svg>
      );
    case "Anniversary":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
        </svg>
      );
    case "Romantic Date":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M6 22h12M12 15v7M12 15a4 4 0 0 0 4-4V3H8v8a4 4 0 0 0 4 4z" />
          <path d="M9 7h6M12 3v4" />
        </svg>
      );
    case "Proposal":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <circle cx="12" cy="14" r="5" />
          <path d="M12 9V5M9 6h6" />
          <path d="m10 3 2 2 2-2z" />
        </svg>
      );
    case "Bride to Be":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
          <path d="M6 14v1a6 6 0 0 0 12 0v-1" />
          <path d="M12 2v2" />
        </svg>
      );
    case "Farewell":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "Congratulations":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.2 1.3 4 3 5h8c1.7-1 3-2.8 3-7a7 7 0 0 0-7-7z" />
        </svg>
      );
    case "Baby Shower":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
          <path d="M10 2h4v2h-4z" />
          <path d="M9 8h6v12a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z" />
          <path d="M9 12h6" />
          <path d="M12 4v4" />
        </svg>
      );
    default:
      return null;
  }
};
