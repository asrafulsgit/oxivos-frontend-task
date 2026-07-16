import { Category } from "@/types/product";
import { StaticImageData } from "next/image";
import p1 from "@/assets/p1.jpg";
import p3 from "@/assets/p3.jpg";
import p2 from "@/assets/p2.jpg";
import p10 from "@/assets/p10.jpg";
export const CATEGORIES: { label: Category; img: string | StaticImageData }[] =
  [
    { label: "Panjabi", img: p1 },
    { label: "Kurta", img: p3 },
    { label: "Sherwani", img: p2 },
    { label: "Accessories", img: p10 },
  ];
