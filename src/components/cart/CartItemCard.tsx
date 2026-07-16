"use client";
import { CartItem, removeItem, updateQty } from "@/redux/slices/CartSlice";
import Image from "next/image";
import Link from "next/link";
import { QuantityStepper } from "../ui/QuentityStepper";
import { useDispatch } from "react-redux";
import { formatBDT } from "@/helpers/formateBDT";
import { X } from "lucide-react";

const CartItemCard = ({ it }: { it: CartItem }) => {
  const dispatch = useDispatch();
  return (
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
          className="mb-1 block font-display text-base sm:text-xl text-primary-light hover:text-primary"
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
  );
};

export default CartItemCard;
