import { CATEGORIES } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="border-y border-primary/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 text-[10px] uppercase tracking-[0.4em] text-primary">
          Shop by Category
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.label}
              href={`/products?category=${c.label}`}
              className="group relative aspect-[4/5] overflow-hidden bg-surface"
            >
              <Image
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 grid place-items-end bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                <span className="font-display text-2xl italic text-primary-light">
                  {c.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
