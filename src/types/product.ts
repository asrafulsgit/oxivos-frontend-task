import { StaticImageData } from "next/image";

export type Category = "Panjabi" | "Kurta" | "Sherwani" | "Accessories";

export interface IProduct {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string | StaticImageData;
  images: string[] | StaticImageData[];
  rating: number;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  featured: boolean;
  eyebrow: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  "Panjabi",
  "Kurta",
  "Sherwani",
  "Accessories",
];