"use client";
import { formatBDT } from "@/helpers/formateBDT";
import { addItem } from "@/redux/slices/CartSlice";
import { IProduct } from "@/types/product";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { QuantityStepper } from "../ui/QuentityStepper";

const Details = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    if (!product || !product?.inStock) return;
    if (!size || !color) return toast.error("Size or Color is missing");
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color,
        qty,
      }),
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <div className="lg:pt-4">
      <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
        {product.eyebrow}
      </p>
      <h1 className="mb-4 font-display text-3xl sm:text-5xl leading-tight text-primary-light lg:text-6xl">
        {product.name}
      </h1>

      <div className="mb-4 sm:mb-6 flex items-center gap-4">
        <span className="text-xl text-primary-light">
          {formatBDT(product.price)}
        </span>
        <span className="flex items-center gap-1 text-xs text-primary-light/50">
          <Star className="size-3 fill-primary text-primary" />
          {product.rating.toFixed(1)}
        </span>
      </div>

      <p className="mb-6 sm:mb-10 max-w-md text-sm leading-relaxed text-primary-light/70">
        {product.description}
      </p>

      {/* Colors */}
      <div className="mb-4 sm:mb-6">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-primary-light/60">
          Color <span className="text-primary-light">— {color}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={
                "px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors " +
                (color === c
                  ? "bg-primary text-background"
                  : "border border-primary/25 text-primary-light/70 hover:border-primary")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-4 sm:mb-6">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-primary-light/60">
          Size <span className="text-primary-light">— {size}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={
                "min-w-12 px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors " +
                (size === s
                  ? "bg-primary text-background"
                  : "border border-primary/25 text-primary-light/70 hover:border-primary")
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Qty + Add */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <QuantityStepper value={qty} onChange={setQty} />
        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          className="flex-1 min-w-56 bg-primary py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-background transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:bg-primary/30 disabled:text-background/60"
        >
          {product.inStock ? "Add to Bag" : "Sold Out"}
        </button>
      </div>

      {added && (
        <p className="animate-fade-in flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
          <Check className="size-3.5" /> Added to your bag
        </p>
      )}

      <div className="mt-10 space-y-2 border-t border-primary/10 pt-6 text-xs text-primary-light/50">
        <p>Free courier shipping across Bangladesh</p>
        <p>Hand-stitched in Old Dhaka · Ships in 3–5 days</p>
      </div>
    </div>
  );
};

export default Details;
