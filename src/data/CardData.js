import img10 from "../assets/Frame 570 (3).png";
import img11 from "../assets/Frame 570 (4).png";

// Cardlist data - "Wishlist" items displayed on home page
export const cardlistData = [
  {
    id: 1,
    brand: "Gucci",
    model: "duffle bag",
    img: img10,
    price: "960",
    originalPrice: "1160",
    discount: "-35%",
    color: "Brown",
    rating: 4.5,
    reviews: 88,
    description: "Luxury designer duffle bag with premium materials."
  },
  {
    id: 2,
    brand: "RGB",
    model: "liquid CPU Cooler",
    img: img11,
    price: "1960",
    originalPrice: "2200",
    color: "Black",
    rating: 4.8,
    reviews: 65,
    description: "High-performance RGB liquid CPU cooler with LED lighting."
  },
  {
    id: 3,
    brand: "GP11",
    model: "Shooter USB Gamepad",
    img: img10,
    price: "550",
    originalPrice: "700",
    color: "Black",
    rating: 4.6,
    reviews: 95,
    description: "Pro-grade USB gamepad designed for competitive gaming."
  },
  {
    id: 4,
    brand: "Jacket",
    model: "Quilted Satin Jacket",
    img: img11,
    price: "750",
    originalPrice: "880",
    color: "Green",
    rating: 4.7,
    reviews: 85,
    description: "Premium quilted satin jacket with comfort fit."
  }
];

// "Just For You" items - recommended products
export const recommendedCardData = [
  {
    id: 5,
    brand: "ASUS",
    model: "FHD Gaming Laptop",
    img: img10,
    price: "960",
    originalPrice: "1160",
    discount: "-35%",
    color: "Black",
    rating: 4.5,
    reviews: 68,
    description: "High-performance laptop perfect for gaming and content creation."
  },
  {
    id: 6,
    brand: "IPS",
    model: "LCD Gaming Monitor",
    img: img11,
    price: "1160",
    originalPrice: "1400",
    color: "Black",
    rating: 4.8,
    reviews: 45,
    description: "27-inch IPS LCD gaming monitor with 144Hz refresh rate."
  },
  {
    id: 7,
    brand: "HAVIT",
    model: "HV-G92 Gamepad",
    img: img10,
    price: "560",
    originalPrice: "680",
    isNew: true,
    color: "Red",
    rating: 4.6,
    reviews: 95,
    description: "Budget-friendly wired gamepad for casual gaming."
  },
  {
    id: 8,
    brand: "AK",
    model: "AK-900 Wired Keyboard",
    img: img11,
    price: "200",
    originalPrice: "240",
    color: "Black",
    rating: 4.7,
    reviews: 85,
    description: "Mechanical keyboard with RGB backlighting and high actuation."
  },
  {
    id: 9,
    brand: "Samsung",
    model: "32-inch LCD Monitor",
    img: img10,
    price: "1400",
    originalPrice: "1800",
    discount: "-22%",
    color: "Black",
    rating: 4.9,
    reviews: 120,
    description: "Ultra-wide 32-inch monitor perfect for gaming and content creation."
  },
  {
    id: 10,
    brand: "Corsair",
    model: "RGB Gaming Mouse",
    img: img11,
    price: "1200",
    originalPrice: "1500",
    discount: "-20%",
    color: "Black",
    rating: 4.8,
    reviews: 210,
    description: "High-precision gaming mouse with customizable RGB lighting."
  }
];

export default { cardlistData, recommendedCardData };
