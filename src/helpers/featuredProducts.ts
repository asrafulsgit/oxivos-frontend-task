import { products } from "@/data/products";

export const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
