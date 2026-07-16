"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
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
      
      <div className="relative">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Left */}
          <div className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] lg:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={
                  l.category
                    ? `/products?category=${l.category}`
                    : "/products"
                }
                className="text-primary-light/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="text-primary-light lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="size-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="size-5 transition-transform duration-300" />
            )}
          </button>

          <Logo />

          {/* Right */}
          <div className="flex items-center gap-5 text-sm">
            <Link
              href="/products"
              className="hidden text-primary-light/80 transition-colors hover:text-primary sm:inline-flex"
            >
              <Search className="size-4" />
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-primary-light/80 transition-colors hover:text-primary"
            >
              <ShoppingBag className="size-4" />
              <span className="hidden text-[11px] uppercase tracking-[0.2em] sm:inline">
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

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full origin-top border-t border-primary/10 bg-background backdrop-blur-xl shadow-xl transition-all duration-300 ease-out lg:hidden ${
            open
              ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none -translate-y-3 scale-y-95 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={
                  l.category
                    ? `/products?category=${l.category}`
                    : "/products"
                }
                onClick={() => setOpen(false)}
                className="translate-y-0 border-b border-primary/5 py-4 text-[11px] uppercase tracking-[0.25em] text-primary-light/80 transition-all duration-300 hover:pl-2 hover:text-primary"
                style={{
                  transitionDelay: open ? `${i * 70}ms` : "0ms",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;