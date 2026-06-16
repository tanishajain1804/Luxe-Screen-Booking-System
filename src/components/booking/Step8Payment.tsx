"use client";

import React from "react";
import { useBooking } from "./BookingContext";
import { ShieldCheck } from "lucide-react";

export const Step8Payment: React.FC = () => {
  const {
    name,
    phone,
    activeTheater,
    email,
    occasion,
    date,
    slotTime,
    paymentMethod,
    setPaymentMethod,
    setErrors,
    cardHolderName,
    setCardHolderName,
    cardNumber,
    setCardNumber,
    cardExpiry,
    setCardExpiry,
    cardCvv,
    setCardCvv,
    netbankBank,
    setNetbankBank,
    netbankAccountHolder,
    setNetbankAccountHolder,
    netbankAccountNumber,
    setNetbankAccountNumber,
    upiApp,
    setUpiApp,
    upiId,
    setUpiId,
    total,
    handleSaveAndContinue,
    errors
  } = useBooking();

  return (
    <div className="space-y-5 text-left">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#111827]">Secure Checkout</h2>
        <p className="text-xs text-gray-500">Select payment method and enter mock details to complete advance booking fee.</p>
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); handleSaveAndContinue(); }} noValidate className="space-y-5">
        {/* Billing Summary Details */}
        <div className="p-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 space-y-3 text-xs">
          <p className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">Billing Summary Details</p>
          <div className="grid grid-cols-2 gap-2 text-gray-600 font-medium">
            <span>Name: {name}</span>
            <span>Phone: +91 {phone}</span>
            <span>Room: {activeTheater.name}</span>
            <span>Email: {email}</span>
            <span>Occasion: {occasion}</span>
            <span>Slot: {date} ({slotTime})</span>
          </div>
        </div>

        {/* Payment Method Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl gap-1">
          <button
            type="button"
            onClick={() => {
              setPaymentMethod("card");
              setErrors({});
            }}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              paymentMethod === "card"
                ? "bg-white text-[#C85A17] shadow-sm"
                : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
            }`}
          >
            <span>Credit / Debit Card</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setPaymentMethod("netbanking");
              setErrors({});
            }}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              paymentMethod === "netbanking"
                ? "bg-white text-[#C85A17] shadow-sm"
                : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
            }`}
          >
            <span>Net Banking</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setPaymentMethod("upi");
              setErrors({});
            }}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              paymentMethod === "upi"
                ? "bg-white text-[#C85A17] shadow-sm"
                : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
            }`}
          >
            <span>UPI</span>
          </button>
        </div>

        {/* Conditional Fields based on Payment Method */}
        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Card Holder Name *</label>
              <input
                type="text"
                value={cardHolderName}
                onChange={(e) => {
                  setCardHolderName(e.target.value);
                  if (errors.cardHolderName) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.cardHolderName;
                      return next;
                    });
                  }
                }}
                placeholder="Name on card"
                className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                  errors.cardHolderName
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
              {errors.cardHolderName && (
                <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.cardHolderName}</p>
              )}
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Card Number *</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => {
                  const rawVal = e.target.value.replace(/\D/g, "");
                  const formattedVal = rawVal.replace(/(\d{4})(?=\d)/g, "$1 ").trim().slice(0, 19);
                  setCardNumber(formattedVal);
                  if (errors.cardNumber) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.cardNumber;
                      return next;
                    });
                  }
                }}
                maxLength={19}
                placeholder="4532 7182 9011 8844"
                className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                  errors.cardNumber
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Expiry Date *</label>
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => {
                    let rawVal = e.target.value.replace(/\D/g, "");
                    if (rawVal.length > 2) {
                      rawVal = rawVal.slice(0, 2) + "/" + rawVal.slice(2, 4);
                    }
                    setCardExpiry(rawVal.slice(0, 5));
                    if (errors.cardExpiry) {
                      setErrors(prev => {
                        const next = { ...prev };
                        delete next.cardExpiry;
                        return next;
                      });
                    }
                  }}
                  maxLength={5}
                  placeholder="MM/YY"
                  className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                    errors.cardExpiry
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:border-[#C85A17]"
                  }`}
                />
                {errors.cardExpiry && (
                  <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.cardExpiry}</p>
                )}
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">CVV *</label>
                <input
                  type="password"
                  value={cardCvv}
                  onChange={(e) => {
                    setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 3));
                    if (errors.cardCvv) {
                      setErrors(prev => {
                        const next = { ...prev };
                        delete next.cardCvv;
                        return next;
                      });
                    }
                  }}
                  maxLength={3}
                  placeholder="***"
                  className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                    errors.cardCvv
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:border-[#C85A17]"
                  }`}
                />
                {errors.cardCvv && (
                  <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.cardCvv}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "netbanking" && (
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Select Bank *</label>
              <select
                value={netbankBank}
                onChange={(e) => {
                  setNetbankBank(e.target.value);
                  if (errors.netbankBank) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.netbankBank;
                      return next;
                    });
                  }
                }}
                className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                  errors.netbankBank
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              >
                <option value="">Choose a bank</option>
                <option value="SBI">State Bank of India (SBI)</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="AXIS">Axis Bank</option>
                <option value="KOTAK">Kotak Mahindra Bank</option>
              </select>
              {errors.netbankBank && (
                <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.netbankBank}</p>
              )}
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Bank Account Number *</label>
              <input
                type="text"
                value={netbankAccountNumber}
                onChange={(e) => {
                  setNetbankAccountNumber(e.target.value.replace(/\D/g, ""));
                  if (errors.netbankAccountNumber) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.netbankAccountNumber;
                      return next;
                    });
                  }
                }}
                placeholder="Enter bank account number"
                className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                  errors.netbankAccountNumber
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
              {errors.netbankAccountNumber && (
                <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.netbankAccountNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Account Holder Name *</label>
              <input
                type="text"
                value={netbankAccountHolder}
                onChange={(e) => {
                  setNetbankAccountHolder(e.target.value);
                  if (errors.netbankAccountHolder) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.netbankAccountHolder;
                      return next;
                    });
                  }
                }}
                placeholder="Account holder name"
                className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                  errors.netbankAccountHolder
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
              {errors.netbankAccountHolder && (
                <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.netbankAccountHolder}</p>
              )}
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-2">Select UPI App *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "gpay", name: "Google Pay" },
                  { id: "phonepe", name: "PhonePe" },
                  { id: "paytm", name: "Paytm" },
                  { id: "other", name: "Other UPI" }
                ].map((app) => {
                  const isSelected = upiApp === app.id;
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => {
                        setUpiApp(app.id as any);
                      }}
                      className={`py-3 px-3 rounded-xl border font-bold text-xs transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer text-center ${
                        isSelected
                          ? "border-zinc-950 bg-zinc-50/50 text-[#C85A17] shadow-xs"
                          : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex w-full justify-between items-center px-1">
                        <span className="font-bold text-[10.5px] leading-tight text-gray-800">{app.name}</span>
                        <div className={`h-3 w-3 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-[#C85A17] bg-[#C85A17]" : "border-gray-300"
                        }`}>
                          {isSelected && <span className="block h-1 w-1 rounded-full bg-white" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                {upiApp === "other" ? "UPI ID *" : `${upiApp === "gpay" ? "Google Pay" : upiApp === "phonepe" ? "PhonePe" : "Paytm"} UPI ID *`}
              </label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  if (errors.upiId) {
                    setErrors(prev => {
                      const next = { ...prev };
                      delete next.upiId;
                      return next;
                    });
                  }
                }}
                placeholder={
                  upiApp === "gpay"
                    ? "example@okaxis"
                    : upiApp === "phonepe"
                      ? "mobile@ybl"
                      : upiApp === "paytm"
                        ? "mobile@paytm"
                        : "username@bank"
                }
                className={`w-full rounded-xl border bg-white py-2.5 px-4 text-sm text-[#111827] focus:outline-hidden transition-all ${
                  errors.upiId
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-300 focus:border-[#C85A17]"
                }`}
              />
              {errors.upiId && (
                <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wider">{errors.upiId}</p>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-[#C85A17] hover:bg-[#A04000] text-white py-3 px-6 text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
        >
          <ShieldCheck size={16} />
          <span>Confirm and Pay ₹{Math.min(750, total)}</span>
        </button>
      </form>
    </div>
  );
};
