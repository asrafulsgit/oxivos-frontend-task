import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";
import { IProduct } from "@/types/product";

export const products: IProduct[] = [
  {
    id: "midnight-zari-silk",
    name: "Midnight Zari Silk",
    category: "Panjabi",
    price: 18500,
    image: p1,
    images: [p1, p9, p12],
    rating: 4.8,
    colors: ["Noir", "Ink"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
    eyebrow: "Classic Panjabi",
    description:
      "Hand-loomed pure silk in deep noir, finished with a gold zari collar hand-stitched by our master artisans in Old Dhaka. A quiet showstopper for the evening host.",
  },
  {
    id: "imperial-sherwani",
    name: "The Imperial Sherwani",
    category: "Sherwani",
    price: 42000,
    image: p2,
    images: [p2, p8, p6],
    rating: 4.9,
    colors: ["Emerald"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    featured: true,
    eyebrow: "Ceremonial",
    description:
      "A ceremonial sherwani in deep emerald with heirloom gold thread work along the placket and hem. Cut for the modern sovereign — tailored, unhurried.",
  },
  {
    id: "charcoal-tussar-bloom",
    name: "Charcoal Tussar Bloom",
    category: "Kurta",
    price: 12500,
    image: p3,
    images: [p3, p5, p9],
    rating: 4.6,
    colors: ["Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
    eyebrow: "Signature Kurta",
    description:
      "Slow-woven tussar silk in graphite, patterned with a whispered self-motif. Reads black in shadow, umber in light.",
  },
  {
    id: "ivory-chikankari",
    name: "Ivory Chikankari",
    category: "Panjabi",
    price: 9800,
    image: p4,
    images: [p4, p12, p9],
    rating: 4.7,
    colors: ["Ivory"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    featured: true,
    eyebrow: "Handwork",
    description:
      "Airy cotton cambric with restrained silver chikankari at the placket. An everyday heirloom.",
  },
  {
    id: "midnight-linen",
    name: "Midnight Linen",
    category: "Kurta",
    price: 7200,
    image: p5,
    images: [p5, p3, p7],
    rating: 4.4,
    colors: ["Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
    eyebrow: "Essential",
    description:
      "Slub linen in midnight navy with hand-turned wooden buttons. Cut long, worn easy.",
  },
  {
    id: "crimson-jamdani",
    name: "Crimson Jamdani",
    category: "Panjabi",
    price: 15200,
    image: p6,
    images: [p6, p1, p8],
    rating: 4.8,
    colors: ["Maroon", "Ruby"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    featured: true,
    eyebrow: "Heritage Collection",
    description:
      "Fine jamdani in deep crimson silk, weighted with an antique gold neckline. A piece for the beginning of an evening.",
  },
  {
    id: "sandstone-kurta",
    name: "Sandstone Cotton Kurta",
    category: "Kurta",
    price: 6400,
    image: p7,
    images: [p7, p9, p4],
    rating: 4.3,
    colors: ["Sand", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
    eyebrow: "Daily",
    description:
      "Warm cream cotton with a whispered burgundy thread at the placket. Weekend armor.",
  },
  {
    id: "royal-velvet-sherwani",
    name: "Royal Velvet Sherwani",
    category: "Sherwani",
    price: 55000,
    image: p8,
    images: [p8, p2, p6],
    rating: 5.0,
    colors: ["Royal Blue"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    featured: false,
    eyebrow: "Ceremonial",
    description:
      "Cotton velvet in electric blue with silver zardozi. Six weeks in the atelier. Made only to order.",
  },
  {
    id: "dove-raw-silk",
    name: "Dove Raw Silk Panjabi",
    category: "Panjabi",
    price: 11800,
    image: p9,
    images: [p9, p12, p4],
    rating: 4.5,
    colors: ["Dove Grey"],
    sizes: ["M", "L", "XL"],
    inStock: false,
    featured: false,
    eyebrow: "Minimalist",
    description:
      "Softest raw silk in a mineral grey, finished with mother-of-pearl buttons. Cut clean, worn quiet.",
  },
  {
    id: "zari-gold-stole",
    name: "Zari Gold Stole",
    category: "Accessories",
    price: 4800,
    image: p10,
    images: [p10, p1, p6],
    rating: 4.9,
    colors: ["Gold"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
    eyebrow: "Accessory",
    description:
      "Woven mulberry silk with a heavy zari border. Draped, folded, kept for a lifetime.",
  },
  {
    id: "black-velvet-mojari",
    name: "Black Velvet Mojari",
    category: "Accessories",
    price: 6500,
    image: p11,
    images: [p11, p1, p2],
    rating: 4.6,
    colors: ["Noir"],
    sizes: ["8", "9", "10", "11"],
    inStock: true,
    featured: false,
    eyebrow: "Footwear",
    description:
      "Hand-embroidered mojari in black velvet with dense gold thread. Leather-soled, resoleable.",
  },
  {
    id: "off-white-pintuck",
    name: "Off-White Pintuck",
    category: "Panjabi",
    price: 8600,
    image: p12,
    images: [p12, p4, p9],
    rating: 4.5,
    colors: ["Off White"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    featured: false,
    eyebrow: "Understated",
    description:
      "Fine pintuck detailing on a bright ivory cambric. The most quietly luxurious thing you own.",
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
