"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/data";

export const FaqSection: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f5ef] border-t border-black/5">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-[#C85A17] mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = faqOpen === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-semibold text-black hover:text-[#A04000] transition-colors focus:outline-hidden"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 p-5 bg-gray-50/50">
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed whitespace-pre-line">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
