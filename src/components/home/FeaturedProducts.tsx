import { featuredProducts } from "@/helpers/featuredProducts";
import Link from "next/link";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-32">
      <div className="mb-10 sm:mb-16 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            The Edit
          </p>
          <h2 className="font-display text-3xl sm:text-4xl italic text-primary-light lg:text-5xl">
            Featured Works
          </h2>
        </div>
        <Link
          href="/products"
          className="hidden sm:block border-b border-primary/30 pb-1 text-[11px] uppercase tracking-widest text-primary-light hover:border-primary hover:text-primary"
        >
          View All Items
        </Link>
      </div>

      <div className="grid  gap-x-4 sm:gap-x-8 gap-y-10  sm:gap-y-16 grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
