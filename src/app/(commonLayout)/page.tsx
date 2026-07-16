import type { Metadata } from "next";
import BrandStory from "@/components/home/BrandStory";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Luxury Heritagewear",
  description:
    "Browse signature panjabis, sherwanis, and artisan accessories designed for unforgettable occasions.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <BrandStory />
    </>
  );
}
