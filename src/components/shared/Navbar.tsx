"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, Search, ShoppingBag } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/products" },
  { name: "The Panjabi Edit", href: "/products" },
];

const Navbar = () => {
  const count = 0;
  const [open, setOpen] = useState(false);
  const mobileNavItems = [
    ...navItems,
    { name: `Cart (${count})`, href: "/cart" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-10 text-[13px] uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-brand-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 text-brand-text/50 hover:text-brand-text transition-colors"
          >
            <Search className="size-4" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest">Search</span>
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 hover:text-brand-accent transition-colors"
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 size-4 bg-brand-accent text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-brand-text/5 px-6 py-4 flex flex-col gap-4 text-sm uppercase tracking-widest bg-brand-bg">
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
