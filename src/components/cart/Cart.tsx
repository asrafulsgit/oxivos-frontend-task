"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "@/redux/hooks";
import { clear } from "@/redux/slices/CartSlice";
import { CartSkeleton } from "../ui/Skeleton";
import useLoaing from "@/hooks/useLoading";
import CartItemCard from "./CartItemCard";
import CartSummary from "./CartSummary";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const loading = useLoaing();
  if (loading) {
    return <CartSkeleton />;
  }

  if (!items || items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-6 py-10 sm:py-24 md:py-32 text-center">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-primary">
          Your Bag
        </p>
        <h1 className="mb-4 font-display text-3xl sm:text-4xl md:text-5xl italic text-primary-light">
          Nothing here yet.
        </h1>
        <p className="mb-10 text-sm text-primary-light/60">
          The atelier is quiet. Wander the collection and find a piece worth
          keeping.
        </p>
        <Link
          href="/products"
          className="inline-block bg-primary px-4 sm:px-8 py-2 sm:py-4 text-[11px] 
          font-bold uppercase sm:tracking-[0.25em] text-background hover:bg-primary-light"
        >
          Explore the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <div className=" mb-6 sm:mb-8 md:mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            Your Bag
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl italic text-primary-light">
            {items.length} {items.length === 1 ? "Piece" : "Pieces"}
          </h1>
        </div>
        <button
          onClick={() => dispatch(clear())}
          className="text-[10px] uppercase tracking-[0.25em] text-primary-light/50 hover:text-primary"
        >
          Empty bag
        </button>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-primary/10 border-y border-primary/10">
          {items.map((it) => (
            <CartItemCard it={it} key={it.id} />
          ))}
        </ul>

        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
