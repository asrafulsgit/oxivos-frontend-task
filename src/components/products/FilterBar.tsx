import { CATEGORIEITEMS } from "@/data/categories";
import useQueryManager from "@/hooks/useQueryManager";
import { Category } from "@/types/product";
import { Search } from "lucide-react";

export type SortMode = "featured" | "asc" | "desc";

export function FilterBar({
  search,
  category,
  sort,
  limit = 6
}: {
  search: string;
  category: Category | "All";
  sort: SortMode;
  limit : number
}) {
  const { setQuery, clearQuery } = useQueryManager();
  const cats: (Category | "All")[] = ["All", ...CATEGORIEITEMS];

  const handleSearch = (value: string) => {
    setQuery("search", value);
  };

  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-0 top-1/2 size-4 -translate-y-1/2 text-primary-light/40" />
        <input
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search the atelier..."
          className="w-full border-b border-primary/20 bg-transparent py-3 pl-7 text-sm text-primary-light outline-none placeholder:text-primary-light/30 focus:border-primary"
        />
      </div>

      {/* Category chips + Sort */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="hidden lg:flex flex-wrap gap-2">
          {cats.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                onClick={() => setQuery("category", c as string)}
                className={
                  "px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors " +
                  (active
                    ? "bg-primary text-background"
                    : "border border-primary/25 text-primary-light/70 hover:border-primary hover:text-primary")
                }
              >
                {c}
              </button>
            );
          })}
        </div>
        <select
          value={category}
          onChange={(e) => setQuery("category", e.target.value as SortMode)}
          className="block lg:hidden border border-primary/25 bg-background p 
            p-2 text-[11px] uppercase tracking-[0.2em] 
            text-primary-light outline-none focus:border-primary"
        >

          {cats.map((c) => {
            return (
              <option value={c} key={c}>{c}</option>
            );
          })}
        </select>
        <div className="flex items-center gap-2">
          <select
            value={sort}
            onChange={(e) => setQuery("sort", e.target.value as SortMode)}
            className="max-w-35 border border-primary/25 bg-background  
            p-2 text-[11px] uppercase tracking-[0.2em] 
            text-primary-light outline-none focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="asc">Price · Low to High</option>
            <option value="desc">Price · High to Low</option>
          </select>
          <select
            value={limit}
            onChange={(e) => setQuery("limit", e.target.value as string)}
            className="min-w-15 border border-primary/25 bg-background   
            p-2 text-[11px] uppercase tracking-[0.2em] 
            text-primary-light outline-none focus:border-primary"
          >
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
          <button
            onClick={() => {
              clearQuery();
            }}
            className="cursor-pointer px-3 py-2 text-[11px] uppercase tracking-[0.2em] bg-transparent border border-primary/20 text-primary-light hover:bg-primary/5"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
