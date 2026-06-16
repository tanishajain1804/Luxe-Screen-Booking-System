import { 
  Cake, Heart, Sparkles, Monitor, Gift as GiftIcon, Tv
} from "lucide-react";
import { Theater, Cake as CakeType, Decoration, Gift, GalleryItem, Review, Service, FaqItem } from "@/types";

export const LOCATIONS = ["Pitampura", "Noida Sector 51"];

export const THEATERS: Theater[] = [
  { 
    id: "theatre-1", 
    name: "Theatre 1", 
    basePrice: 1399, 
    limit: "Up to 2 People", 
    maxCapacity: 2,
    screen: "150\" HD", 
    sound: "600W Sony",
    slots: [
      { id: "t1-s1", time: "09:00 AM - 12:00 PM", status: "booked" },
      { id: "t1-s2", time: "12:30 PM - 03:30 PM", status: "booked" },
      { id: "t1-s3", time: "04:00 PM - 05:30 PM", status: "booked" },
      { id: "t1-s4", time: "06:00 PM - 09:00 PM", status: "booked" },
      { id: "t1-s5", time: "09:30 PM - 12:30 AM", status: "available" },
      { id: "t1-s6", time: "Tomorrow 5 Slot", status: "available" }
    ],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop"
  },
  { 
    id: "theatre-2", 
    name: "Theatre 2", 
    basePrice: 1599, 
    limit: "Up to 7 People", 
    maxCapacity: 7,
    screen: "150\" HD", 
    sound: "600W Sony",
    slots: [
      { id: "t2-s1", time: "09:30 AM - 12:30 PM", status: "booked" },
      { id: "t2-s2", time: "01:00 PM - 04:00 PM", status: "available" },
      { id: "t2-s3", time: "04:30 PM - 07:30 PM", status: "booked" },
      { id: "t2-s4", time: "08:00 PM - 09:30 PM", status: "booked" },
      { id: "t2-s5", time: "10:00 PM - 01:00 AM", status: "available" },
      { id: "t2-s6", time: "Tomorrow 3 Slot", status: "available" }
    ],
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
  },
  { 
    id: "theatre-3", 
    name: "Theatre 3", 
    basePrice: 1799, 
    limit: "Up to 15 People", 
    maxCapacity: 15,
    screen: "150\" HD", 
    sound: "600W Sony",
    slots: [
      { id: "t3-s1", time: "10:00 AM - 01:00 PM", status: "booked" },
      { id: "t3-s2", time: "01:30 PM - 04:30 PM", status: "available" },
      { id: "t3-s3", time: "05:00 PM - 08:00 PM", status: "available" },
      { id: "t3-s4", time: "08:30 PM - 11:30 PM", status: "booked" },
      { id: "t3-s5", time: "Tomorrow 3 Slot", status: "available" }
    ],
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=600&auto=format&fit=crop"
  }
];

export const CAKES: CakeType[] = [
  {
    id: "cake-bf",
    name: "Black Forest Cake",
    desc: "Rich chocolate layers with fresh cherries and whipped cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 550 },
      { name: "1kg", price: 1000 }
    ]
  },
  {
    id: "cake-sash",
    name: "Birthday Sash",
    desc: "Premium satin sash for the star of the celebration.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "Birthday Girl", price: 80 },
      { name: "Birthday Boy", price: 80 }
    ]
  },
  {
    id: "cake-cb",
    name: "Chocolate Brownie",
    desc: "Fudgy brownie cake topped with rich chocolate ganache.",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "350g", price: 650 },
      { name: "500g", price: 950 }
    ]
  },
  {
    id: "cake-pfc",
    name: "Pineapple Fresh Cream",
    desc: "Soft sponge cake loaded with pineapple chunks and cream.",
    image: "https://thfvnext.bing.com/th/id/OIP.4LzFe63vVaGtxxg4cJqTbAHaEJ?w=328&h=184&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.5&pid=1.7&rm=3",
    sizes: [
      { name: "500g", price: 400 },
      { name: "1kg", price: 750 }
    ]
  },
  {
    id: "cake-ct",
    name: "Chocolate Truffle",
    desc: "Classic eggless chocolate truffle cake.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 450 },
      { name: "1kg", price: 850 }
    ]
  },
  {
    id: "cake-rv",
    name: "Royal Red Velvet",
    desc: "Luxurious red velvet layers with cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=400&auto=format&fit=crop",
    sizes: [
      { name: "500g", price: 550 },
      { name: "1kg", price: 1000 }
    ]
  }
];

export const DECORATIONS_DB: Decoration[] = [
  {
    id: "dec-photo",
    name: "Photoshoot Session",
    desc: "Professional photographer captures your special moments.",
    image: "/images/service_photoshoot.jpg",
    options: [
      { name: "15 Min", price: 300 },
      { name: "30 Min", price: 500 }
    ]
  },
  {
    id: "dec-candle",
    name: "Candle Path Layout",
    desc: "Romantic candle light pathway from entrance to recliners.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 300 }
    ]
  },
  {
    id: "dec-led",
    name: "LED Numbers / Letters",
    desc: "Glowing LED marquee numbers representing age or anniversary year.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 100 }
    ]
  },
  {
    id: "dec-rh",
    name: "Romantic Rose Heart",
    desc: "Floor heart boundary of red roses with candle lighting.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 1200 }
    ]
  },
  {
    id: "dec-fog",
    name: "Heavy Fog Entry",
    desc: "Thick fog cloud entry effect on room entry.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 1000 }
    ]
  },
  {
    id: "dec-walk",
    name: "Rose Walkway Pathway",
    desc: "Rose petals scattered path along the candles.",
    image: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 500 }
    ]
  }
];

export const GIFTS_DB: Gift[] = [
  {
    id: "gift-rose",
    name: "Golden Foil Rose",
    desc: "Elegant 24k gold foil artificial rose flower.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 200 }
    ]
  },
  {
    id: "gift-teddy",
    name: "Teddy with Mystery Box",
    desc: "Cute purple teddy bear holding a surprise jewelry box.",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 449 }
    ]
  },
  {
    id: "gift-music",
    name: "Vintage Wind-Up Music Box",
    desc: "Mechanical wooden wind-up film projector music box.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop",
    options: [
      { name: "Standard", price: 1299 }
    ]
  },
  {
    id: "gift-choc",
    name: "Premium Chocolate Box",
    desc: "Assorted dairy milk silk and premium chocolates.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwYm94fGVufDB8fDB8fHww",
    options: [
      { name: "Standard", price: 150 }
    ]
  },
  {
    id: "gift-card",
    name: "Personalized Greeting Card",
    desc: "Custom printed greeting card with your message.",
    image: "https://www.bing.com/th/id/OIP.hfDK7Twd-4St9EzAu_TwOAHaD4?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    options: [
      { name: "Standard", price: 50 }
    ]
  }
];

export const HERO_IMAGES = [
  "/images/celebration_1.png",
  "/images/celebration_2.png",
  "/images/celebration_3.png",
  "/images/celebration_4.jpg",
  "/images/celebration_5.png"
];

export const SERVICES = [
  { id: "001", name: "Floral Styling", tag: "BOUQUET", img: "/images/service_bouquet.png" },
  { id: "002", name: "Private Screening", tag: "BIRTHDAY", img: "/images/service_balloons.png" },
  { id: "003", name: "Captured Memories", tag: "PHOTOSHOOT", img: "/images/service_photoshoot.jpg" },
  { id: "004", name: "Premium Styling", tag: "DECOR", img: "/images/service_decor.png" },
  { id: "005", name: "Sweet Celebrations", tag: "CAKE", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop" },
  { id: "006", name: "Thoughtful Memories", tag: "GIFTS", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop" }
];

export const SHORTS_VIDEO_IDS = [
  "9Fmt5SVEkzo",
  "8AKKxVp3smk",
  "WGSXSwanTRY",
  "q7cx19o4rSk",
  "nz4c8XTOYUY",
  "B1LMheoeRlM",
  "yzGh5wn6aiU",
  "5uo4osj4Zgo",
  "ZPRAv-WOiJA"
];

export const GALLERY_IMAGES = [
  { src: "/images/celebration_1.png", alt: "Glass of confetti and disco ball celebration" },
  { src: "/images/celebration_2.png", alt: "Group of friends celebrating with confetti" },
  { src: "/images/celebration_3.png", alt: "Pink balloon arch decoration setup" },
  { src: "/images/celebration_4.jpg", alt: "Farm themed custom birthday cake table setup" },
  { src: "/images/celebration_5.png", alt: "Birthday surprise party with cake presentation" },
  { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fb1769b41e-21ea08f4345a99ec52e4.png", alt: "Luxury private theatre interior" },
  { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2d9ab76e86-1092e8898d4aade8bdf4.png", alt: "Friends celebrating together" },
  { src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d78c5d06ee-0c085a0cf3a38debb90e.png", alt: "Premium seating setup" }
];

export const WHY_CHOOSE_US = [
  { title: "Perfect for Birthdays", desc: "Surprise your loved ones with a unique celebration in a private cinema setting.", icon: Cake },
  { title: "Romantic Anniversaries", desc: "Create unforgettable moments with your partner in an intimate theatre experience.", icon: Heart },
  { title: "Surprise Proposals", desc: "Craft the dream proposal setting with custom decors, fog entry, and rose pathways.", icon: Sparkles },
  { title: "Private Gaming & Movies", desc: "Stream your favorite Netflix shows, play games, or host private watch parties on massive screens.", icon: Monitor }
];

export const FAQS = [
  {
    q: "Is outside food or drinks allowed inside?",
    a: "No, outside food and beverages are strictly prohibited to maintain cleanliness. However, we have a fully equipped pantry with premium snacks, coolers, and main courses that you can order."
  },
  {
    q: "Can couples book this? Is it safe and privacy assured?",
    a: "Yes, our screening suites are 100% private for you and your partner. We have strict CCTV surveillance only in common entryways, ensuring complete privacy in your screening room. Note: ID verification (Aadhaar) is mandatory at check-in."
  },
  {
    q: "What is your refund/cancellation policy?",
    a: "The advance booking fee of ₹750 is fully refundable if you cancel at least 72 hours before your slot. Cancellations or rescheduling requests made within 72 hours are non-refundable."
  },
  {
    q: "Can we connect our own devices (Netflix, YouTube, etc.)?",
    a: "Absolutely! All private theaters are equipped with Smart TVs supporting Prime Video, Netflix, Disney+ Hotstar, YouTube, and screen mirroring."
  }
];

export const STRIP_ITEMS = [
  "Food & Drink", "Photography", "Birthday", "Anniversary", 
  "Date Night", "Proposal", "Bride To Be", "Farewell", 
  "Decoration", "Celebration"
];

export const GALLERY_ITEMS = [
  {
    src: "/images/celebration_6.png",
    alt: "A luxurious private theatre setup with gold balloons and Jagan marquee lights",
    categories: ["Birthday Party", "Romantic Date", "Anniversary", "Congratulations"]
  },
  {
    src: "/images/celebration_7.png",
    alt: "Group of friends celebrating together with colorful balloons and confetti",
    categories: ["Birthday Party", "Congratulations", "Farewell"]
  },
  {
    src: "/images/celebration_8.png",
    alt: "Beautiful birthday cake with candles on a decorated celebration table",
    categories: ["Birthday Party", "Baby Shower", "Congratulations"]
  },
  {
    src: "/images/celebration_9.png",
    alt: "A premium cinema red carpet entrance with movie reel balloons",
    categories: ["Movie Night", "Birthday Party", "Romantic Date", "Congratulations"]
  },
  {
    src: "/images/celebration_10.png",
    alt: "A grand private theatre stage and comfortable seating lounge",
    categories: ["Movie Night", "Family Celebration", "Farewell"]
  },
  {
    src: "/images/celebration_1.png",
    alt: "Glass of confetti and disco ball celebration",
    categories: ["Birthday Party", "Romantic Date", "Anniversary", "Congratulations"]
  },
  {
    src: "/images/celebration_2.png",
    alt: "Group of friends celebrating with confetti",
    categories: ["Birthday Party", "Congratulations"]
  },
  {
    src: "/images/celebration_3.png",
    alt: "Pink balloon arch decoration setup",
    categories: ["Birthday Party", "Baby Shower", "Anniversary", "Congratulations"]
  },
  {
    src: "/images/celebration_4.jpg",
    alt: "Farm themed custom birthday cake table setup",
    categories: ["Birthday Party", "Baby Shower"]
  },
  {
    src: "/images/celebration_5.png",
    alt: "Birthday surprise party with cake presentation",
    categories: ["Birthday Party", "Romantic Date", "Movie Night", "Congratulations"]
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop",
    alt: "A surprise that turned into tears of joy",
    categories: ["Birthday Party", "Romantic Date", "Anniversary", "Congratulations"]
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop",
    alt: "Celebrating memorable birthday with your bestie",
    categories: ["Birthday Party"]
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
    alt: "Create unforgettable birthday moments with us",
    categories: ["Birthday Party"]
  },
  {
    src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=600&auto=format&fit=crop",
    alt: "Customize birthday theme according to you",
    categories: ["Birthday Party", "Baby Shower"]
  },
  {
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
    alt: "Just two hearts and a private screen",
    categories: ["Romantic Date", "Anniversary"]
  },
  {
    src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600&auto=format&fit=crop",
    alt: "Just two hearts and a private screen",
    categories: ["Romantic Date", "Anniversary"]
  },
  
  {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop",
    alt: "Just two hearts and a private screen",
    categories: ["Romantic Date", "Anniversary"]
  },
  {
    src: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=600&auto=format&fit=crop",
    alt: "Friends, food, and a perfect movie night",
    categories: ["Movie Night", "Birthday Party", "Congratulations"]
  },
  {
    src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
    alt: "Friends, food, and a perfect movie night",
    categories: ["Movie Night", "Farewell"]
  },
  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
    alt: "Friends, food, and a perfect movie night",
    categories: ["Movie Night", "Congratulations"]
  },
  
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
    alt: "She said yes, right here",
    categories: ["Marriage Proposal", "Romantic Date"]
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop",
    alt: "She said yes, right here",
    categories: ["Marriage Proposal", "Romantic Date"]
  }
];

export const BANNER_IMAGES = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop"
];

export const THEATRE_FILTER_CATEGORIES = [
  "All",
  "Birthday",
  "Anniversary",
  "Proposal",
  "Movie Night",
  "Family Celebration"
];

export const MOMENT_CATEGORIES = [
  "All Moments",
  "Birthday Party",
  "Romantic Date",
  "Movie Night",
  "Marriage Proposal",
  "Anniversary",
  "Baby Shower",
  "Congratulations",
  "Farewell"
];

export interface GalleryTheater {

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

export const GALLERY_THEATERS: GalleryTheater[] = [
  {
    id: "theatre-1",
    name: "Theatre 1 (Cosy Lounge)",
    basePrice: 1399,
    limit: "Up to 2 People",
    maxCapacity: 2,
    screen: "150\" HD Screen",
    sound: "600W Sony Surround",
    location: "Pitampura, Delhi",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop",
    categories: ["Movie Night", "Birthday", "Anniversary"],
    isTrending: true,
    description: "Perfect cozy private theatre for couples. Celebrate intimate birthdays, romantic movie dates, or warm anniversaries with a 150\" HD screen and premium acoustic sound.",
    rating: 4.9,
    amenities: ["Recliner Seats", "Ambient Lighting", "Air Conditioned", "Gourmet Snacks Menu"]
  },
  {
    id: "theatre-2",
    name: "Theatre 2 (Vibrant Club)",
    basePrice: 1599,
    limit: "Up to 7 People",
    maxCapacity: 7,
    screen: "150\" HD Screen",
    sound: "600W Sony Surround",
    location: "Noida Sector 51",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
    categories: ["Birthday", "Family Celebration", "Movie Night"],
    isTrending: false,
    description: "Ideal mid-size theatre for family celebrations, group movie events, and warm birthday bashes. Features customizable RGB light styling and plush seating.",
    rating: 4.8,
    amenities: ["Plush Sofas", "RGB Custom Lights", "In-room Dining", "Wireless Mics"]
  },
  {
    id: "theatre-3",
    name: "Theatre 3 (Celebration Arena)",
    basePrice: 1799,
    limit: "Up to 15 People",
    maxCapacity: 15,
    screen: "150\" HD Screen",
    sound: "600W Sony Surround",
    location: "Pitampura, Delhi",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=600&auto=format&fit=crop",
    categories: ["Birthday", "Anniversary", "Family Celebration"],
    isTrending: true,
    description: "Spacious premium private theatre room designed for larger gatherings up to 15 people. Ideal for grand birthday setups, kids parties, and large family get-togethers.",
    rating: 4.9,
    amenities: ["Massive Lounge Seating", "Party Lighting", "Dedicated Host Service", "Karaoke System"]
  },
  {
    id: "theatre-4",
    name: "Luxe Proposal Suite",
    basePrice: 2499,
    limit: "Up to 4 People",
    maxCapacity: 4,
    screen: "180\" 4K UHD Screen",
    sound: "800W JBL Pro Cinema",
    location: "DLF Phase 3, Gurgaon",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600&auto=format&fit=crop",
    categories: ["Proposal", "Anniversary"],
    isTrending: true,
    description: "Our signature luxury suite optimized for magical proposal setups and romantic anniversary surprises. Comes with romantic candle path layout and flower decorations on demand.",
    rating: 5.0,
    amenities: ["Luxury Recliners", "Decor Packages", "Champagne Stand", "Bluetooth Music Sync"]
  },
  {
    id: "theatre-5",
    name: "Stellar Cinema Lounge",
    basePrice: 1299,
    limit: "Up to 6 People",
    maxCapacity: 6,
    screen: "160\" 4K UHD Screen",
    sound: "1000W Dolby Atmos",
    location: "Noida Sector 51",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop",
    categories: ["Movie Night", "Family Celebration"],
    isTrending: false,
    description: "A high-tech cinematic escape featuring immersive 1000W Dolby Atmos acoustics. Perfect for casual movie nights, console gaming setups, and friends hangout parties.",
    rating: 4.7,
    amenities: ["Ergonomic Seating", "Dolby Atmos Audio", "Popcorn Machine", "Gaming Console Hookup"]
  },
  {
    id: "theatre-6",
    name: "Royal Celebration Room",
    basePrice: 1999,
    limit: "Up to 10 People",
    maxCapacity: 10,
    screen: "180\" HD Screen",
    sound: "1200W Harman Kardon",
    location: "Pitampura, Delhi",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
    categories: ["Birthday", "Anniversary", "Family Celebration"],
    isTrending: false,
    description: "Host memorable milestones inside this grand, high-ceiling party theatre. Specially structured to allow large backdrop decoration frames and catering arrangements.",
    rating: 4.8,
    amenities: ["Grand Sofa Set", "Bespoke Lighting", "Cake Table Setup", "Dual Karaoke Mics"]
  }
];

export const HOMEPAGE_THEATERS = [
  {
    id: "theatre-1",
    name: "Theatre 1",
    type: "Premium",
    desc: "Perfect for intimate dates and cozy birthday surprises with stunning LED setups.",
    screen: "150\" HD",
    sound: "600W Sony",
    capacity: "Up to 2 People",
    price: "₹1,599",
    mapUrl: "https://maps.google.com/?q=B-299, Outer Ring Rd, Block B, Saraswati Vihar, Pitampura, Delhi, 110034",
    menuUrl: "#",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "theatre-2",
    name: "Theatre 2",
    type: "Premium",
    desc: "Spacious luxury room optimized for larger groups, family events, and anniversaries.",
    screen: "150\" HD",
    sound: "600W Sony",
    capacity: "Up to 6 People",
    price: "₹1,599",
    mapUrl: "https://maps.google.com/?q=B-299, Outer Ring Rd, Block B, Saraswati Vihar, Pitampura, Delhi, 110034",
    menuUrl: "#",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "theatre-3",
    name: "Theatre 3",
    type: "Premium",
    desc: "Specially styled with red carpets, candle pathways, and theatrical fog entry triggers.",
    screen: "150\" HD",
    sound: "600W Sony",
    capacity: "Up to 10 People",
    price: "₹1,799",
    mapUrl: "https://maps.google.com/?q=B-299, Outer Ring Rd, Block B, Saraswati Vihar, Pitampura, Delhi, 110034",
    menuUrl: "#",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=600&auto=format&fit=crop"
  }
];

export const VIBES = [
  { id: "vibe-romance", name: "Candlelight Romance", desc: "Perfect pathways, rose hearts, and romantic lighting.", icon: Heart, room: "theatre-1", roomName: "Theatre 1 (Cozy Suite)" },
  { id: "vibe-surprise", name: "Heavy Fog Surprise", desc: "A theatrical fog entry cloud and LED marquee lights.", icon: Sparkles, room: "theatre-3", roomName: "Theatre 3 (Grand Suite)" },
  { id: "vibe-celebration", name: "Party & Balloons", desc: "Festive balloon decorations and sweet surprises.", icon: GiftIcon, room: "theatre-2", roomName: "Theatre 2 (Spacious Suite)" },
  { id: "vibe-cozy", name: "Family Movie Night", desc: "Plush cushions, blanket warmth, and family screening.", icon: Tv, room: "theatre-2", roomName: "Theatre 2 (Spacious Suite)" },
];

export const WATCHLIST_DB: Record<string, Array<{ title: string; year: string; rating: string; desc: string }>> = {
  "Romantic": [
    { title: "About Time", year: "2013", rating: "7.8/10", desc: "A beautiful sci-fi romance about time travel, love, and making the most of ordinary life." },
    { title: "La La Land", year: "2016", rating: "8.0/10", desc: "A jazz pianist and an actress fall in love while pursuing their dreams in Los Angeles." },
    { title: "Before Sunrise", year: "1995", rating: "8.1/10", desc: "A young man and woman meet on a train in Europe and wind up spending one evening together in Vienna." },
  ],
  "Thriller/Mystery": [
    { title: "Knives Out", year: "2019", rating: "7.9/10", desc: "A detective investigates the death of the patriarch of an eccentric, combative family." },
    { title: "Inception", year: "2010", rating: "8.8/10", desc: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task." },
    { title: "Shutter Island", year: "2010", rating: "8.2/10", desc: "A U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane." },
  ],
  "Comedy": [
    { title: "The Grand Budapest Hotel", year: "2014", rating: "8.1/10", desc: "A writer relates his adventures at a renowned European resort between the first and second World Wars." },
    { title: "Superbad", year: "2007", rating: "7.6/10", desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after planning a party." },
    { title: "Crazy Rich Asians", year: "2018", rating: "6.9/10", desc: "A native New Yorker accompanies her longtime boyfriend to his best friend's wedding in Singapore." },
  ],
  "Action/Sci-Fi": [
    { title: "Dune: Part Two", year: "2024", rating: "8.6/10", desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators." },
    { title: "Interstellar", year: "2014", rating: "8.7/10", desc: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in search of a new home." },
    { title: "Spider-Man: Into the Spider-Verse", year: "2018", rating: "8.4/10", desc: "Teen Miles Morales becomes the new Spider-Man of his universe, joining others from alternate dimensions." },
  ]
};

export const GREETING_THEMES = [
  { id: "gold", name: "Golden Luxury", bg: "bg-[#0e1118]", border: "border-4 border-double border-[#C85A17]/70", text: "text-[#C85A17] font-serif tracking-wide drop-shadow-md" },
  { id: "rose", name: "Rose Garland", bg: "bg-pink-950/20", border: "border-2 border-dashed border-rose-400/40", text: "text-rose-400 font-serif italic drop-shadow-sm" },
  { id: "neon", name: "Midnight Neon", bg: "bg-black", border: "border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]", text: "text-cyan-400 font-mono tracking-widest uppercase drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]" },
  { id: "redcarpet", name: "Red Carpet", bg: "bg-[#58111A]", border: "border-4 border-[#C85A17]/50 shadow-inner", text: "text-white font-sans font-bold tracking-normal uppercase" }
];

export const KITCHEN_MENU = {
  veg: {
    Spicy: [
      { name: "Sizzling Paneer Tikka Pops", price: 280, desc: "Spiced paneer bites served with coriander chutney." },
      { name: "Masala Loaded Fries", price: 180, desc: "Golden fries tossed in signature peri-peri spices." }
    ],
    Cheesy: [
      { name: "Super Loaded Cheesy Garlic Bread", price: 220, desc: "Garlic baguette loaded with mozzarella and herbs." },
      { name: "Crispy Cheese Jalapeno Poppers", price: 190, desc: "Melty cheese pockets with a fiery jalapeno kick." }
    ],
    Sweets: [
      { name: "Hot Chocolate Fudge Brownie", price: 240, desc: "Warm brownie with chocolate syrup and vanilla ice cream." },
      { name: "Sizzling Caramel Lava Waffle", price: 210, desc: "Waffles topped with buttery caramel lava." }
    ]
  },
  nonveg: {
    Spicy: [
      { name: "Spiced Peri-Peri Chicken Nuggets", price: 290, desc: "Juicy chicken bites tossed in peri-peri seasonings." },
      { name: "Fiery Crispy Chicken Strips", price: 310, desc: "Crispy breaded chicken strips with hot salsa dip." }
    ],
    Cheesy: [
      { name: "Cheesy Chicken Melt Sliders", price: 280, desc: "Mini chicken sliders baked with extra cheddar." },
      { name: "Chicken & Cheese loaded fries", price: 240, desc: "Fries topped with grilled chicken chunks and cheese sauce." }
    ],
    Sweets: [
      { name: "Hot Chocolate Fudge Brownie", price: 240, desc: "Warm brownie with chocolate syrup and vanilla ice cream." },
      { name: "Sizzling Caramel Lava Waffle", price: 210, desc: "Waffles topped with buttery caramel lava." }
    ]
  }
};

