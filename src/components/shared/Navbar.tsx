"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Category } from "@/types/product";
import { useSelector } from "react-redux";
import { selectCartCount } from "@/redux/hooks";

const links: {
  category: Category | undefined;
  label: string;
}[] = [
  { category: undefined, label: "Shop All" },
  { category: "Panjabi", label: "Panjabi" },
  { category: "Kurta", label: "Kurta" },
  { category: "Sherwani", label: "Sherwani" },
];
const Navbar = () => {
  const count = useSelector(selectCartCount);
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left side*/}
        <div className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={
                l.category ? `/products?category=${l.category}` : "/products"
              }
              className="text-primary-light/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-primary-light"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Logo />

        {/* Right side*/}
        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/products"
            className="hidden text-primary-light/80 transition-colors hover:text-primary sm:inline-flex"
            aria-label="Search"
          >
            <Search className="size-4" />
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-primary-light/80 transition-colors hover:text-primary"
          >
            <ShoppingBag className="size-4" />
            <span className="text-[11px] uppercase tracking-[0.2em] hidden sm:inline">
              Bag
            </span>
            {count > 0 && (
              <span className="ml-0.5 grid size-4 place-items-center rounded-full bg-primary text-[9px] font-medium text-background">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="border-t border-primary/10 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={
                  l.category ? `/products?category=${l.category}` : "/products"
                }
                onClick={() => setOpen(false)}
                className="py-3 text-[11px] uppercase tracking-[0.25em] text-primary-light/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
