"use client";
import { useEffect, useMemo, useState } from "react";
import useQueryManager from "@/hooks/useQueryManager";
import { type Category } from "@/types/product";
import { filteredProducts } from "@/helpers/getFilteredProducts";
import { FilterBar, SortMode } from "./FilterBar";
import { SkeletonGrid } from "../ui/Skeleton";
import ProductCard from "./ProductCard";
import useLoading from "@/hooks/useLoading";
import Pagination from "../shared/Pagination";
import { products } from "@/data/products";

const DEFAULT_LIMIT = 6;

const Products = () => {
  const { getQuery, clearQuery } = useQueryManager();

  const search = getQuery("search") ?? "";
  const category = ((getQuery("category") as Category) ?? "All") as
    | "All"
    | Category;
  const sort = ((getQuery("sort") as SortMode) ?? "featured") as SortMode;
  const loading = useLoading();
  const page = Number(getQuery("page")) || 1;
  const limit = Number(getQuery("limit")) || DEFAULT_LIMIT;

  const filtered = useMemo(() => {
    return filteredProducts({
      search,
      category,
      sort,
    });
  }, [search, category, sort]);

  const paginated = useMemo(() => {
    const start = (page - 1) * limit;
    return filtered.slice(start, start + limit);
  }, [filtered, page, limit]);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-24">
      <div className="mb-6 sm:mb-12">
        <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
          The Collection
        </p>
        <h1 className="font-display text-4xl sm:text-5xl italic text-primary-light lg:text-6xl">
          {category === "All" ? "All Pieces" : category}
        </h1>
      </div>

      <FilterBar search={search} category={category} sort={sort} limit={limit}/>

      {loading ? (
        <SkeletonGrid n={9} />
      ) : filtered.length ? (
        <>
          <div
            className="grid gap-x-4 sm:gap-x-8 gap-y-9 sm:gap-y-16 
          grid-cols-2 lg:grid-cols-3"
          >
            {paginated.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="mt-10 sm:mt-20">
            <Pagination totalItems={filtered.length} />
          </div>
        </>
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
