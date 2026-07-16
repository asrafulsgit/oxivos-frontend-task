"use client";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { QuantityStepper } from "../ui/QuentityStepper";
import { formatBDT } from "@/helpers/formateBDT";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartSubtotal } from "@/redux/hooks";
import { clear, removeItem, updateQty } from "@/redux/slices/CartSlice";
import { CartSkeleton } from "../ui/Skeleton";
import useLoaing from "@/hooks/useLoading";


const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const loading = useLoaing();
  if (loading) {
    return <CartSkeleton />;
  }

  if (!items || items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-primary">
          Your Bag
        </p>
        <h1 className="mb-4 font-display text-5xl italic text-primary-light">
          Nothing here yet.
        </h1>
        <p className="mb-10 text-sm text-primary-light/60">
          The atelier is quiet. Wander the collection and find a piece worth
          keeping.
        </p>
        <Link
          href="/products"
          className="inline-block bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-background hover:bg-primary-light"
        >
          Explore the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
            Your Bag
          </p>
          <h1 className="font-display text-5xl italic text-primary-light">
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
            <li
              key={`${it.id}-${it.size}-${it.color}`}
              className="grid grid-cols-[96px_1fr_auto] items-start gap-6 py-6 sm:grid-cols-[120px_1fr_auto]"
            >
              <Link
                href="/products/$id"
                className="aspect-[3/4] overflow-hidden bg-surface"
              >
                <Image
                  src={it.image}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="min-w-0">
                <Link
                  href={`/products/${it.id}`}
                  className="mb-1 block font-display text-xl text-primary-light hover:text-primary"
                >
                  {it.name}
                </Link>
                <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-primary-light/50">
                  {it.color} · Size {it.size}
                </p>
                <QuantityStepper
                  value={it.qty}
                  onChange={(qty) =>
                    dispatch(
                      updateQty({
                        id: it.id,
                        size: it.size,
                        color: it.color,
                        qty,
                      }),
                    )
                  }
                />
              </div>
              <div className="flex flex-col items-end justify-between gap-6 self-stretch">
                <button
                  onClick={() =>
                    dispatch(
                      removeItem({
                        id: it.id,
                        size: it.size,
                        color: it.color,
                      }),
                    )
                  }
                  aria-label="Remove item"
                  className="text-primary-light/40 hover:text-primary"
                >
                  <X className="size-4" />
                </button>
                <span className="text-sm tabular-nums text-primary-light">
                  {formatBDT(it.price * it.qty)}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-primary/15 p-8">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-primary">
            Summary
          </p>
          <div className="space-y-3 text-sm text-primary-light/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="tabular-nums text-primary-light">
                {formatBDT(subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Courier</span>
              <span className="text-primary-light/50">Complimentary</span>
            </div>
          </div>
          <div className="my-6 h-px bg-primary/20" />
          <div className="mb-6 flex items-end justify-between">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-light/50">
              Total
            </span>
            <span className="font-display text-3xl text-primary">
              {formatBDT(subtotal)}
            </span>
          </div>
          <button
            onClick={() => alert("Checkout is not implemented in this demo.")}
            className="w-full bg-primary py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-background hover:bg-primary-light"
          >
            Proceed to Checkout
          </button>
          <Link
            href="/shop"
            className="mt-4 block text-center text-[11px] uppercase tracking-[0.25em] text-primary-light/60 hover:text-primary"
          >
            Continue Browsing
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
