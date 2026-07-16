"use client";
import { useState } from "react";
import { Check, Star } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "@/helpers/getFilteredProducts";
import Image from "next/image";
import { formatBDT } from "@/helpers/formateBDT";
import { QuantityStepper } from "../ui/QuentityStepper";
import RelatedProducts from "./RelatedProducts";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/CartSlice";
import { toast } from "react-toastify";
import { ProductDetailsSkeleton } from "../ui/Skeleton";
import useLoading from "@/hooks/useLoading";

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const product = getProductById(params.id as string);
  const [size, setSize] = useState(product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(product?.images[0]);
  const [added, setAdded] = useState(false);
  const loading = useLoading();
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

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p className="font-display text-xl italic text-primary-light">
          Product Not Found
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 cursor-pointer px-3 py-2 text-[11px] uppercase tracking-[0.2em] bg-transparent border border-primary/20 text-primary-light hover:bg-primary/5"
        >
          Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-12 px-6 
      py-10 sm:py-16 lg:grid-cols-2 lg:py-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden bg-surface">
            {activeImg && (
              <Image
                src={activeImg}
                alt={product.name}
                width={800}
                height={1067}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(img)}
                className={
                  "aspect-square overflow-hidden bg-surface transition-opacity " +
                  (activeImg === img
                    ? "ring-1 ring-primary opacity-100"
                    : "opacity-60 hover:opacity-100")
                }
              >
                <Image
                  src={img}
                  alt={`${product.name} — view ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
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
      </div>

      <RelatedProducts category={product.category} productId={product.id} />
    </div>
  );
};

export default ProductDetails;
