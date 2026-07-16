import type { Metadata } from "next";
import React, { Suspense } from "react";
import Products from "@/components/products/Products";
import { SkeletonGrid } from "@/components/ui/Skeleton";

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
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-24">
          <SkeletonGrid n={9} />
        </div>
      }
    >
      <Products />
    </Suspense>
  );
};

export default page;
