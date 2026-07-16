"use client";
import { useEffect, useMemo, useState } from "react";
import useQueryManager from "@/hooks/useQueryManager";
import { type Category } from "@/types/product";
import { filteredProducts } from "@/helpers/getFilteredProducts";
import { FilterBar, SortMode } from "./FilterBar";
import { SkeletonGrid } from "../ui/Skeleton";
import ProductCard from "./ProductCard";

// export const Route = createFileRoute("/shop")({
//   validateSearch: searchSchema,
//   head: () => ({
//     meta: [
//       { title: "Shop — ZARI" },
//       {
//         name: "description",
//         content:
//           "The full ZARI collection — hand-stitched Panjabi, Kurta, Sherwani and accessories.",
//       },
//       { property: "og:title", content: "Shop the ZARI Collection" },
//       {
//         property: "og:description",
//         content: "Hand-stitched menswear, curated for the modern sovereign.",
//       },
//     ],
//   }),
//   component: ShopPage,
// });

const Products = () => {
  const { getQuery, clearQuery } = useQueryManager();

  const search = getQuery("search") ?? "";
  const category = ((getQuery("category") as Category) ?? "All") as
    | "All"
    | Category;
  const sort = ((getQuery("sort") as SortMode) ?? "featured") as SortMode;
  const [loading, setLoading] = useState(true);

  // loading for skeleton
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    return filteredProducts({
      search,
      category,
      sort,
    });
  }, [search, category, sort]);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
          The Collection
        </p>
        <h1 className="font-display text-5xl italic text-primary-light lg:text-6xl">
          {category === "All" ? "All Pieces" : category}
        </h1>
      </div>

      <FilterBar search={search} category={category} sort={sort} />

      {loading ? (
        <SkeletonGrid n={9} />
      ) : filtered.length ? (
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="border border-primary/15 py-24 text-center">
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-primary">
            Nothing Found
          </p>
          <p className="font-display text-2xl italic text-primary-light">
            No pieces match this search.
          </p>
          <button
            onClick={() => clearQuery()}
            className="mt-6 text-[11px] uppercase tracking-[0.25em] text-primary hover:text-primary-light border-b border-primary/40 pb-1"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
