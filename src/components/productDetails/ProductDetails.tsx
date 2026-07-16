"use client";
import { useState } from "react"; 
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "@/helpers/getFilteredProducts";
import Image from "next/image"; 
import RelatedProducts from "./RelatedProducts"; 
import { ProductDetailsSkeleton } from "../ui/Skeleton";
import useLoading from "@/hooks/useLoading";
import Details from "./Details";

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();

  const product = getProductById(params.id as string);
  const [activeImg, setActiveImg] = useState(product?.images[0]);
  const loading = useLoading();

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
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-12 px-6 
      py-10 sm:py-16 lg:grid-cols-2 lg:py-24"
      >
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
        <Details product={product} />
      </div>

      <RelatedProducts category={product.category} productId={product.id} />
    </div>
  );
};

export default ProductDetails;
