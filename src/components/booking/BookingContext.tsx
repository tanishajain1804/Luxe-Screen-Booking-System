"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { THEATERS, LOCATIONS, CAKES, DECORATIONS_DB, GIFTS_DB } from "@/data";
import { CartItem, Theater, Slot } from "@/types";

interface BookingContextProps {
  mounted: boolean;
  hasParsedParams: boolean;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  theaterId: string;
  setTheaterId: React.Dispatch<React.SetStateAction<string>>;
  selectedTheaterSlots: Record<string, string>;
  setSelectedTheaterSlots: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  slotId: string;
  setSlotId: React.Dispatch<React.SetStateAction<string>>;
  toast: { title: string; subtitle: string } | null;
  triggerToast: (title: string, subtitle: string) => void;
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  kids: number;
  setKids: React.Dispatch<React.SetStateAction<number>>;
  hasDecoration: boolean;
  setHasDecoration: React.Dispatch<React.SetStateAction<boolean>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  updateCartQuantity: (id: string, newQty: number) => void;
  removeFromCart: (id: string) => void;
  activeOptions: Record<string, string>;
  setActiveOptions: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  timerActive: boolean;
  setTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  
  // Checkout inputs
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  occasion: string;
  setOccasion: React.Dispatch<React.SetStateAction<string>>;
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  celebrantName: string;
  setCelebrantName: React.Dispatch<React.SetStateAction<string>>;
  partner1Name: string;
  setPartner1Name: React.Dispatch<React.SetStateAction<string>>;
  partner2Name: string;
  setPartner2Name: React.Dispatch<React.SetStateAction<string>>;
  occasionMessage: string;
  setOccasionMessage: React.Dispatch<React.SetStateAction<string>>;
  showOccasionDetailsCard: boolean;
  setShowOccasionDetailsCard: React.Dispatch<React.SetStateAction<boolean>>;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  
  // Payment states
  paymentMethod: "card" | "netbanking" | "upi";
  setPaymentMethod: React.Dispatch<React.SetStateAction<"card" | "netbanking" | "upi">>;
  cardHolderName: string;
  setCardHolderName: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  cardExpiry: string;
  setCardExpiry: React.Dispatch<React.SetStateAction<string>>;
  cardCvv: string;
  setCardCvv: React.Dispatch<React.SetStateAction<string>>;
  netbankBank: string;
  setNetbankBank: React.Dispatch<React.SetStateAction<string>>;
  netbankAccountHolder: string;
  setNetbankAccountHolder: React.Dispatch<React.SetStateAction<string>>;
  netbankAccountNumber: string;
  setNetbankAccountNumber: React.Dispatch<React.SetStateAction<string>>;
  upiApp: "gpay" | "phonepe" | "paytm" | "other";
  setUpiApp: React.Dispatch<React.SetStateAction<"gpay" | "phonepe" | "paytm" | "other">>;
  upiId: string;
  setUpiId: React.Dispatch<React.SetStateAction<string>>;
  
  // Coupons & Pricing
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  appliedDiscount: number;
  setAppliedDiscount: React.Dispatch<React.SetStateAction<number>>;
  couponError: string;
  setCouponError: React.Dispatch<React.SetStateAction<string>>;
  couponSuccessMsg: string;
  setCouponSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
  applyCoupon: () => void;
  
  // Final details
  bookingId: string;
  setBookingId: React.Dispatch<React.SetStateAction<string>>;
  isPaid: boolean;
  setIsPaid: React.Dispatch<React.SetStateAction<boolean>>;
  
  // Computed values
  activeTheater: Theater;
  basePrice: number;
  baseIncluded: number;
  extraGuestsCount: number;
  extraGuestsPrice: number;
  kidsPrice: number;
  decorPrice: number;
  cartPrice: number;
  subtotal: number;
  total: number;
  slotTime: string;
  handleSaveAndContinue: () => void;
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [hasParsedParams, setHasParsedParams] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const searchParams = useSearchParams();
  const initialRoom = searchParams.get("room") || "theatre-1";

  // State machine
  const [step, setStep] = useState(1);

  // Booking inputs
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [theaterId, setTheaterId] = useState(initialRoom);
  
  const [selectedTheaterSlots, setSelectedTheaterSlots] = useState<Record<string, string>>({
    "theatre-1": "t1-s5",
    "theatre-2": "t2-s2",
    "theatre-3": "t3-s2",
  });

  const [slotId, setSlotId] = useState(
    initialRoom === "theatre-2" ? "t2-s2" : initialRoom === "theatre-3" ? "t3-s2" : "t1-s5"
  );
  
  // Toast notification state
  const [toast, setToast] = useState<{ title: string; subtitle: string } | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const triggerToast = (title: string, subtitle: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ title, subtitle });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // Customizations
  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);
  const [hasDecoration, setHasDecoration] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCartQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Active options selected for each item card (defaults)
  const [activeOptions, setActiveOptions] = useState<Record<string, string>>({
    "cake-bf": "500g",
    "cake-sash": "Birthday Girl",
    "cake-cb": "350g",
    "cake-pfc": "500g",
    "cake-ct": "500g",
    "cake-rv": "500g",
    "dec-photo": "15 Min",
    "dec-candle": "Standard",
    "dec-led": "Standard",
    "dec-rh": "Standard",
    "dec-fog": "Standard",
    "dec-walk": "Standard",
    "gift-rose": "Standard",
    "gift-teddy": "Standard",
    "gift-music": "Standard",
    "gift-choc": "Standard",
    "gift-card": "Standard",
  });

  // Countdown timer (10 mins)
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerActive, setTimerActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Ref to hold current step to avoid stale closures in event listeners
  const stepRef = useRef(step);
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  // Sync state step to URL query parameter to support browser history
  useEffect(() => {
    if (!mounted || !hasParsedParams) return;
    const params = new URLSearchParams(window.location.search);
    const currentStepParam = params.get("step");
    if (currentStepParam !== step.toString()) {
      params.set("step", step.toString());
      window.history.pushState(null, "", `?${params.toString()}`);
    }
  }, [step, mounted, hasParsedParams]);

  // Listen to popstate event (browser back/forward button clicks)
  useEffect(() => {
    if (!mounted || !hasParsedParams) return;

    const handlePopState = () => {
      // If user clicks back from the completed booking success page (step 9), redirect to home page
      if (stepRef.current === 9) {
        window.location.href = "/";
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const stepParam = params.get("step");
      if (stepParam) {
        const parsedStep = parseInt(stepParam, 10);
        if (!isNaN(parsedStep)) {
          setStep(parsedStep);
        }
      } else {
        setStep(1);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [mounted, hasParsedParams]);

  useEffect(() => {
    if (step >= 3 && step <= 8) {
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
  }, [step]);

  useEffect(() => {
    if (!timerActive) return;
    if (timeLeft <= 0) {
      alert("Time expired! Your slot reservation has released. Please select a slot again.");
      setStep(2);
      setTimeLeft(600);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  // Sync default guests counter based on room capacity
  useEffect(() => {
    if (theaterId === "theatre-1") setGuests(2);
    if (theaterId === "theatre-2") setGuests(4);
    if (theaterId === "theatre-3") setGuests(8);
  }, [theaterId]);

  // Parse AI Event Planner recommendations from URL query params
  useEffect(() => {
    if (!mounted) return;

    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");
    const occasionParam = params.get("occasion");
    const guestsParam = params.get("guests");
    const kidsParam = params.get("kids");
    const decorParam = params.get("decor");
    const cakeParam = params.get("cake");
    const decorItemsParam = params.get("decorItems");
    const giftsParam = params.get("gifts");
    const stepParam = params.get("step");
    const dateParam = params.get("date");
    const foodParam = params.get("food");

    if (room || occasionParam || cakeParam || decorItemsParam || giftsParam || stepParam || dateParam || foodParam) {
      if (room && THEATERS.some(t => t.id === room)) {
        setTheaterId(room);
        if (room === "theatre-1") setGuests(2);
        if (room === "theatre-2") setGuests(4);
        if (room === "theatre-3") setGuests(8);
      }
      
      if (dateParam) {
        setDate(dateParam);
      }

      if (occasionParam) {
        setOccasion(occasionParam);
      }
      
      if (guestsParam) {
        setGuests(parseInt(guestsParam, 10));
      }
      if (kidsParam) {
        setKids(parseInt(kidsParam, 10));
      }

      if (decorParam) {
        setHasDecoration(decorParam === "true");
      }

      // Pre-load recommended cake/decorations/gifts/food directly into the booking cart
      const newCart: CartItem[] = [];

      if (cakeParam && cakeParam !== "none") {
        const matchingCake = CAKES.find(c => c.id === cakeParam);
        if (matchingCake) {
          const defaultSize = matchingCake.sizes[0];
          newCart.push({
            id: `${matchingCake.id}-${defaultSize.name}`,
            itemId: matchingCake.id,
            name: `${matchingCake.name} (${defaultSize.name})`,
            category: "cake",
            option: defaultSize.name,
            price: defaultSize.price,
            quantity: 1
          });
        }
      }

      if (decorItemsParam) {
        const itemIds = decorItemsParam.split(",");
        itemIds.forEach(itemId => {
          const matchingDecor = DECORATIONS_DB.find(d => d.id === itemId);
          if (matchingDecor) {
            const defaultOpt = matchingDecor.options[0];
            newCart.push({
              id: `${matchingDecor.id}-${defaultOpt.name}`,
              itemId: matchingDecor.id,
              name: `${matchingDecor.name} (${defaultOpt.name})`,
              category: "decor",
              option: defaultOpt.name,
              price: defaultOpt.price,
              quantity: 1
            });
          }
        });
      }

      if (giftsParam) {
        const itemIds = giftsParam.split(",");
        itemIds.forEach(itemId => {
          const matchingGift = GIFTS_DB.find(g => g.id === itemId);
          if (matchingGift) {
            const defaultOpt = matchingGift.options[0];
            newCart.push({
              id: `${matchingGift.id}-${defaultOpt.name}`,
              itemId: matchingGift.id,
              name: `${matchingGift.name} (${defaultOpt.name})`,
              category: "gift",
              option: defaultOpt.name,
              price: defaultOpt.price,
              quantity: 1
            });
          }
        });
      }

      if (foodParam) {
        const items = foodParam.split(",");
        items.forEach(itemStr => {
          const parts = itemStr.split(":");
          if (parts.length >= 2) {
            const name = decodeURIComponent(parts[0]);
            const price = parseFloat(parts[1]) || 0;
            if (name && price > 0) {
              newCart.push({
                id: `food-${name.toLowerCase().replace(/\s+/g, "-")}`,
                itemId: `food-${name.toLowerCase().replace(/\s+/g, "-")}`,
                name: name,
                category: "food",
                option: "Standard",
                price: price,
                quantity: 1
              });
            }
          }
        });
      }

      if (newCart.length > 0) {
        setCart(newCart);
      }

      if (stepParam) {
        setStep(parseInt(stepParam, 10));
      } else {
        setStep(1); // Default to Step 1 (Location & Date selection)
      }
    }

    setHasParsedParams(true);
  }, [mounted]);

  // Checkout inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [notes, setNotes] = useState("");
  const [celebrantName, setCelebrantName] = useState("");
  const [partner1Name, setPartner1Name] = useState("");
  const [partner2Name, setPartner2Name] = useState("");
  const [occasionMessage, setOccasionMessage] = useState("");
  const [showOccasionDetailsCard, setShowOccasionDetailsCard] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Payment states
  const [paymentMethod, setPaymentMethod] = useState<"card" | "netbanking" | "upi">("card");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [netbankBank, setNetbankBank] = useState("");
  const [netbankAccountHolder, setNetbankAccountHolder] = useState("");
  const [netbankAccountNumber, setNetbankAccountNumber] = useState("");
  const [upiApp, setUpiApp] = useState<"gpay" | "phonepe" | "paytm" | "other">("gpay");
  const [upiId, setUpiId] = useState("");

  useEffect(() => {
    if (step === 8) {
      if (!cardHolderName) setCardHolderName(name);
      if (!netbankAccountHolder) setNetbankAccountHolder(name);
    }
  }, [step, name]);

  // Coupons & Pricing
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccessMsg, setCouponSuccessMsg] = useState("");

  // Final confirmation details
  const [bookingId, setBookingId] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  // Price calculations
  const activeTheater = THEATERS.find((t) => t.id === theaterId) || THEATERS[0];
  const basePrice = activeTheater.basePrice;
  const baseIncluded = activeTheater.id === "theatre-1" ? 2 : 4;
  const extraGuestsCount = Math.max(0, guests - baseIncluded);
  const extraGuestsPrice = extraGuestsCount * 200;
  const kidsPrice = kids * 200;
  const decorPrice = hasDecoration ? 750 : 0;
  const cartPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const subtotal = basePrice + extraGuestsPrice + kidsPrice + decorPrice + cartPrice;
  const total = Math.max(0, subtotal - appliedDiscount);

  // Retrieve selected slot text dynamically
  const activeSlot = activeTheater.slots.find((s) => s.id === slotId);
  const slotTime = activeSlot ? activeSlot.time : "";

  // Apply Coupon Action
  const applyCoupon = () => {
    setCouponError("");
    setCouponSuccessMsg("");
    
    const code = couponCode.toUpperCase().trim();
    
    if (code === "WELCOME400") {
      if (subtotal >= 1599) {
        setAppliedDiscount(400);
        setCouponSuccessMsg("WELCOME400 applied! Flat ₹400 discount added.");
      } else {
        setCouponError("Minimum order value to use WELCOME400 is ₹1,599.");
      }
    } else if (code === "FREECAKE") {
      const cakeInCart = cart.find(item => item.category === "cake");
      if (cakeInCart) {
        const discountAmount = Math.min(cakeInCart.price, 550);
        setAppliedDiscount(discountAmount);
        setCouponSuccessMsg(`FREECAKE applied! Saved ₹${discountAmount} on cake.`);
      } else {
        setCouponError("Please select a cake first to apply this coupon.");
      }
    } else if (code === "EXTRA25") {
      const decorCartTotal = cart.filter(item => item.category === "decor").reduce((acc, item) => acc + item.price * item.quantity, 0);
      const totalDecorPrice = decorCartTotal + (hasDecoration ? 750 : 0);
      if (totalDecorPrice > 0) {
        const discountAmount = Math.round(totalDecorPrice * 0.25);
        setAppliedDiscount(discountAmount);
        setCouponSuccessMsg(`EXTRA25 applied! Saved ₹${discountAmount} on decorations.`);
      } else {
        setCouponError("Please select a decoration package to apply this coupon.");
      }
    } else {
      setCouponError("Invalid coupon code. Try WELCOME400, FREECAKE or EXTRA25.");
    }
  };

  // Save and continue steps progression
  const handleSaveAndContinue = () => {
    if (step === 3) {
      const newErrors: Record<string, string> = {};
      if (!name.trim()) {
        newErrors.name = "This field is required";
      }
      if (!phone.trim()) {
        newErrors.phone = "This field is required";
      } else if (phone.length !== 10) {
        newErrors.phone = "Please enter a valid 10-digit mobile number.";
      }
      if (!email.trim()) {
        newErrors.email = "This field is required";
      } else if (!email.includes("@")) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      setStep(4);
    } else if (step === 4) {
      const newErrors: Record<string, string> = {};
      if (!occasion) {
        newErrors.occasion = "Please select an occasion card first.";
        setErrors(newErrors);
        return;
      }
      const isCoupleOccasion = occasion === "Anniversary" || occasion === "Romantic Date" || occasion === "Proposal";
      if (isCoupleOccasion) {
        if (!partner1Name.trim()) {
          newErrors.partner1Name = "This field is required";
        }
        if (!partner2Name.trim()) {
          newErrors.partner2Name = "This field is required";
        }
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          setShowOccasionDetailsCard(true);
          return;
        }
      } else {
        if (!celebrantName.trim()) {
          newErrors.celebrantName = "This field is required";
          setErrors(newErrors);
          setShowOccasionDetailsCard(true);
          return;
        }
      }
      setErrors({});
      setStep(5);
    } else if (step === 5) {
      setStep(6);
    } else if (step === 6) {
      setStep(7);
    } else if (step === 7) {
      setStep(8);
    } else if (step === 8) {
      const newErrors: Record<string, string> = {};
      if (!name.trim()) newErrors.name = "This field is required";
      if (!phone.trim()) newErrors.phone = "This field is required";
      if (!email.trim()) newErrors.email = "This field is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setStep(3); // Go back to Step 3 so they can fill them
        return;
      }

      if (paymentMethod === "card") {
        if (!cardHolderName.trim()) {
          newErrors.cardHolderName = "This field is required";
        }
        if (!cardNumber.trim()) {
          newErrors.cardNumber = "This field is required";
        } else if (cardNumber.replace(/\s/g, "").length < 16) {
          newErrors.cardNumber = "Please enter a valid 16-digit card number.";
        }
        if (!cardExpiry.trim()) {
          newErrors.cardExpiry = "This field is required";
        } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
          newErrors.cardExpiry = "Please enter expiry date in MM/YY format.";
        }
        if (!cardCvv.trim()) {
          newErrors.cardCvv = "This field is required";
        } else if (cardCvv.length < 3) {
          newErrors.cardCvv = "Please enter a valid 3-digit CVV.";
        }
      } else if (paymentMethod === "netbanking") {
        if (!netbankBank) {
          newErrors.netbankBank = "Please select your bank.";
        }
        if (!netbankAccountHolder.trim()) {
          newErrors.netbankAccountHolder = "This field is required";
        }
        if (!netbankAccountNumber.trim()) {
          newErrors.netbankAccountNumber = "This field is required";
        } else if (netbankAccountNumber.length < 9 || netbankAccountNumber.length > 18 || !/^\d+$/.test(netbankAccountNumber)) {
          newErrors.netbankAccountNumber = "Please enter a valid bank account number (9 to 18 digits).";
        }
      } else if (paymentMethod === "upi") {
        if (!upiId.trim()) {
          newErrors.upiId = "This field is required";
        } else if (!upiId.includes("@")) {
          newErrors.upiId = "Please enter a valid UPI ID (e.g., username@bank).";
        }
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors({});
      const randomId = "DS" + Math.floor(100000 + Math.random() * 900000);
      setBookingId(randomId);
      setIsPaid(true);
      setStep(9);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        mounted,
        hasParsedParams,
        step,
        setStep,
        location,
        setLocation,
        date,
        setDate,
        theaterId,
        setTheaterId,
        selectedTheaterSlots,
        setSelectedTheaterSlots,
        slotId,
        setSlotId,
        toast,
        triggerToast,
        guests,
        setGuests,
        kids,
        setKids,
        hasDecoration,
        setHasDecoration,
        cart,
        setCart,
        updateCartQuantity,
        removeFromCart,
        activeOptions,
        setActiveOptions,
        timeLeft,
        setTimeLeft,
        timerActive,
        setTimerActive,
        activeSlide,
        setActiveSlide,
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        occasion,
        setOccasion,
        notes,
        setNotes,
        celebrantName,
        setCelebrantName,
        partner1Name,
        setPartner1Name,
        partner2Name,
        setPartner2Name,
        occasionMessage,
        setOccasionMessage,
        showOccasionDetailsCard,
        setShowOccasionDetailsCard,
        errors,
        setErrors,
        paymentMethod,
        setPaymentMethod,
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
        couponCode,
        setCouponCode,
        appliedDiscount,
        setAppliedDiscount,
        couponError,
        setCouponError,
        couponSuccessMsg,
        setCouponSuccessMsg,
        applyCoupon,
        bookingId,
        setBookingId,
        isPaid,
        setIsPaid,
        activeTheater,
        basePrice,
        baseIncluded,
        extraGuestsCount,
        extraGuestsPrice,
        kidsPrice,
        decorPrice,
        cartPrice,
        subtotal,
        total,
        slotTime,
        handleSaveAndContinue,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
