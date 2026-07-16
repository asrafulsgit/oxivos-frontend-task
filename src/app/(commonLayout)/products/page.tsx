import type { Metadata } from "next";
import Products from "@/components/products/Products";

export const metadata: Metadata = {
  title: "Shop the Collection",
  description:
    "Explore curated luxury fashion pieces, from embroidered panjabis to statement sherwanis and elegant accessories.",
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "shop luxury fashion",
    "designer panjabi",
    "sherwani collection",
    "ethnic wear online",
  ]
};

const page = () => {
  return <Products />;
};

export default page;
