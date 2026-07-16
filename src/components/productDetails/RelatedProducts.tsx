import React from "react";
import ProductCard from "../products/ProductCard";
import { Category } from "@/types/product";
import { products } from "@/data/products";

const RelatedProducts = ({
  productId,
  category,
}: {
  productId?: string;
  category: Category;
}) => {
  const related = products
    .filter((p) => p.category === category && p.id !== productId)
    .slice(0, 3);
  return (
    related.length > 0 && (
      <section className="border-t border-primary/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            You Might Also Consider
          </p>
          <h2 className="mb-12 font-display text-3xl italic text-primary-light">
            More from {category}
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default RelatedProducts;
