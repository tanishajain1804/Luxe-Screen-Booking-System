"use client";

import React from "react";
import { useBooking } from "./BookingContext";
import { CartItem } from "@/types";
import { GIFTS_DB } from "@/data";

export const Step7Gifts: React.FC = () => {
  const {
    setStep,
    activeOptions,
    setActiveOptions,
    cart,
    setCart,
    updateCartQuantity
  } = useBooking();

  return (
    <div className="space-y-4 text-left">
      <div className="flex justify-between items-center border-b pb-3.5">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#111827]">Add gifts</h2>
          <p className="text-xs text-gray-500">Add gifts to complete your surprise experience.</p>
        </div>
        <button
          type="button"
          onClick={() => setStep(8)}
          className="rounded-lg border border-gray-300 hover:border-gray-400 bg-white text-gray-600 px-4 py-1.5 text-xs font-bold transition cursor-pointer"
        >
          Skip
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {GIFTS_DB.map((gift) => {
          const selectedOption = activeOptions[gift.id] || gift.options[0].name;
          const optionPriceObj = gift.options.find(o => o.name === selectedOption) || gift.options[0];
          const price = optionPriceObj.price;
          const cartItemId = `${gift.id}-${selectedOption}`;
          const isAdded = cart.some(c => c.id === cartItemId);
          
          return (
            <div key={gift.id} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-xs flex flex-col justify-between">
              <div className="relative h-[130px] w-full bg-gray-50">
                <img alt={gift.name} src={gift.image} className="object-cover w-full h-full" />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 leading-tight">{gift.name}</h3>
                  <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-snug">{gift.desc}</p>
                </div>
                
                <div className="space-y-3">
                  {/* Option selection pills */}
                  <div className="flex gap-1.5 flex-wrap">
                    {gift.options.map((o) => (
                      <button
                        key={o.name}
                        type="button"
                        onClick={() => {
                          setActiveOptions(prev => ({ ...prev, [gift.id]: o.name }));
                        }}
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold border transition ${
                          selectedOption === o.name
                            ? "bg-gray-800 border-gray-800 text-white"
                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {o.name}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                    <div>
                      <p className="text-[9px] text-gray-400 font-bold uppercase leading-none">Price</p>
                      <p className="text-sm font-black text-gray-800 mt-0.5">₹{price}</p>
                    </div>
                    {isAdded ? (
                      <div className="flex items-center gap-2 bg-[#C85A17] text-white rounded-lg px-2.5 py-1 select-none">
                        <button
                          type="button"
                          onClick={() => {
                            const item = cart.find(c => c.id === cartItemId);
                            if (item) updateCartQuantity(cartItemId, item.quantity - 1);
                          }}
                          className="font-black text-xs hover:scale-110 active:scale-90 transition px-1 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-[10px] font-bold min-w-[12px] text-center">
                          {cart.find(c => c.id === cartItemId)?.quantity || 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const item = cart.find(c => c.id === cartItemId);
                            if (item) updateCartQuantity(cartItemId, item.quantity + 1);
                          }}
                          className="font-black text-xs hover:scale-110 active:scale-90 transition px-1 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const selectedOptionObj = gift.options.find(o => o.name === selectedOption) || gift.options[0];
                          const newItem: CartItem = {
                            id: cartItemId,
                            itemId: gift.id,
                            name: `${gift.name} (${selectedOption})`,
                            category: "gift",
                            option: selectedOption,
                            price: selectedOptionObj.price,
                            quantity: 1
                          };
                          setCart(prev => [...prev, newItem]);
                        }}
                        className="rounded-lg py-1.5 px-3 text-[10px] font-bold uppercase transition-all cursor-pointer bg-gray-800 text-white hover:bg-black"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
