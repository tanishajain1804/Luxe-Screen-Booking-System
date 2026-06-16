"use client";

import React from "react";
import { Search, ArrowUpDown } from "lucide-react";
import { THEATRE_FILTER_CATEGORIES } from "@/data";

interface GallerySearchSortProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
}

export const GallerySearchSort: React.FC<GallerySearchSortProps> = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-6 shadow-xs mb-8">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search theatres by name or location (e.g. Pitampura, Noida)..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C85A17]/20 focus:border-[#C85A17] text-sm text-gray-800 placeholder-gray-400 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sorting options */}
        <div className="relative min-w-[200px] shrink-0">
          <div className="flex items-center gap-2 bg-gray-50/50 border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700">
            <ArrowUpDown size={15} className="text-gray-400" />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-transparent border-none focus:outline-none text-gray-700 cursor-pointer font-medium"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="capacity-asc">Capacity: Small to Large</option>
              <option value="capacity-desc">Capacity: Large to Small</option>
            </select>
          </div>
        </div>

      </div>

      {/* Filter buttons */}
      <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
        {THEATRE_FILTER_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isActive 
                  ? "bg-[#C85A17] text-white shadow-sm" 
                  : "bg-gray-50 text-gray-500 hover:text-gray-800 border border-gray-100 hover:border-gray-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
