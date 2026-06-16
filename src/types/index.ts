export interface Slot {
  id: string;
  time: string;
  status: "available" | "booked";
}

export interface Theater {
  id: string;
  name: string;
  basePrice: number;
  limit: string;
  maxCapacity: number;
  screen: string;
  sound: string;
  slots: Slot[];
  image: string;
}

export interface CartItem {
  id: string;      // Unique (e.g. cake-bf-500g)
  itemId: string;  // Database ID (e.g. cake-bf)
  name: string;
  category: "cake" | "decor" | "gift" | "food";
  option: string;
  price: number;
  quantity: number;
}

export interface CakeSize {
  name: string;
  price: number;
}

export interface Cake {
  id: string;
  name: string;
  desc: string;
  image: string;
  sizes: CakeSize[];
}

export interface DecorationOption {
  name: string;
  price: number;
}

export interface Decoration {
  id: string;
  name: string;
  desc: string;
  image: string;
  options: DecorationOption[];
}

export interface GiftOption {
  name: string;
  price: number;
}

export interface Gift {
  id: string;
  name: string;
  desc: string;
  image: string;
  options: GiftOption[];
}

export interface GalleryItem {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  maxCapacity: number;
  screen: string;
  sound: string;
  description: string;
  specifications: string[];
  amenities: string[];
  suitableFor: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  occasion: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  image: string;
  hash: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Theatre {
  id: string;
  name: string;
  basePrice: number;
  limit: string;
  maxCapacity: number;
  screen: string;
  sound: string;
  location: string;
  image: string;
  categories: string[];
  isTrending: boolean;
  description: string;
  rating: number;
  amenities: string[];
}

