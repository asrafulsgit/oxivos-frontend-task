"use client";
import { formatBDT } from "@/helpers/formateBDT";
import { selectCartSubtotal } from "@/redux/hooks";
import Link from "next/link";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const subtotal = useSelector(selectCartSubtotal);
  return (
    <aside className="h-fit border border-primary/15 p-6 sm:p-8">
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
        <span className="font-display text-xl sm:text-3xl text-primary">
          {formatBDT(subtotal)}
        </span>
      </div>
      <button
        onClick={() => alert("Checkout is not implemented in this demo.")}
        className="w-full bg-primary py-3 sm:py-4 text-[11px] font-bold uppercase 
            tracking-[0.25em] text-background hover:bg-primary-light"
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
  );
};

export default CartSummary;
