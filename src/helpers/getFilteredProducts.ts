import { IProduct } from "@/types/product";

export function filteredProducts(
  products: IProduct[],
  queries: Record<string, any>,
) {
  let list = [...products];

  // Category
  if (queries.category !== "All") {
    list = list.filter((p) => p.category === queries.category);
  }

  // Search
  if (queries.search.trim()) {
    const q = queries.search.trim().toLowerCase();

    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.eyebrow.toLowerCase().includes(q),
    );
  }

  // Sorting
  switch (queries.sort) {
    case "asc":
      list.sort((a, b) => a.price - b.price);
      break;

    case "desc":
      list.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return list;
}
