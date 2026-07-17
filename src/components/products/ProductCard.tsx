"use client";
import { formatBDT } from "@/helpers/formateBDT";
import { IProduct } from "@/types/product";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductCard = ({
  product,
  index = 0,
}: {
  product: IProduct;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: [0.19, 1, 0.22, 1] as const,
      }}
    >
      <Link
        href={`/products/${product.id}`}
        className="group block"
      >
        <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-surface">
          <motion.img
            src={typeof product.image === "string" ? product.image : product.image.src}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] as const }}
          />
          {!product.inStock && (
            <span className="absolute left-3 top-3 bg-background/80 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary-light/70">
              Sold Out
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-primary py-3 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-background transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
            View Piece
          </div>
        </div>
        <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-primary">
          {product.eyebrow}
        </p>
        <h3 className="mb-1 font-display text-base sm:text-xl text-primary-light">
          {product.name}
        </h3>
        <p className="text-xs font-light text-primary-light/60">
          {formatBDT(product.price)}
        </p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
