"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const heroMain =
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80";
  const inlineImgs = [
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=200&q=80",
  ];
  return (
    <header className="relative min-h-[92vh] flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(197,160,89,0.22),_transparent_32%),linear-gradient(135deg,_#120f0a_0%,_#1b1712_48%,_#0d0c09_100%)] text-white">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.06)_0%,_transparent_45%,_rgba(197,160,89,0.12)_100%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-24">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-3 text-[#e8cea0] font-medium tracking-[0.3em] uppercase text-xs mb-6">
            <span className="h-px w-8 bg-[#e8cea0]" />
            New Tradition · SS26
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif leading-[1.02] mb-8 text-[#fdf7eb]">
            <span className="inline-flex items-center gap-3 flex-wrap">
              Crafted
              <motion.span
                className="inline-block align-middle h-[0.85em] w-[1.1em] rounded-full overflow-hidden ring-1 ring-brand-accent/50 shadow-lg shadow-brand-accent/20"
                animate={{ rotate: [0, 6, -6, 0], y: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={inlineImgs[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.span>
              for
            </span>
            <br />
            <span className="italic text-[#d8b56b]">Significant</span>{" "}
            <span className="inline-flex items-center gap-3 flex-wrap">
              Moments
              <motion.span
                className="inline-block align-middle h-[0.7em] w-[0.9em] rounded-md overflow-hidden ring-1 ring-white/20"
                animate={{ y: [0, -6, 0], rotate: [0, -4, 4, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <img
                  src={inlineImgs[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.span>
              <motion.span
                className="hidden sm:inline-block align-middle h-[0.55em] w-[0.7em] rounded-full overflow-hidden ring-1 ring-white/20"
                animate={{ y: [0, 6, 0], rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <img
                  src={inlineImgs[2]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.span>
            </span>
          </h1>
          <p className="text-[#efe0c4]/80 max-w-md mb-10 leading-relaxed">
            Heirloom silks, sculpted linens and quiet gold — a wardrobe made for
            the moments that stay.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-10 py-5 bg-[#d8b56b] text-[#181512] text-xs uppercase tracking-widest hover:bg-[#f2d498] transition-all shadow-xl shadow-[#d8b56b]/20"
            >
              Shop Collection
            </Link>
            <Link
              href="/products"
              className="px-10 py-5 border border-[#e8cea0]/40 text-[#f7efe2] text-xs uppercase tracking-widest hover:bg-[#f7efe2] hover:text-[#181512] transition-all"
            >
              The Panjabi Edit
            </Link>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
            <div className="absolute -inset-4 border border-[#d8b56b]/40" />
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={heroMain}
                alt="Lumen SS26 signature look"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b]/85 via-[#0e0d0b]/20 to-transparent" />
            </div>
            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="absolute -left-6 bottom-10 bg-[#f8efe1] text-[#181512] border border-[#d8b56b]/30 px-5 py-4 shadow-2xl max-w-[180px]"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#b78b3f] mb-1">
                Signature
              </div>
              <div className="font-serif text-lg leading-tight">
                Midnight Silk Panjabi
              </div>
              <div className="text-xs text-[#6b5843] mt-1">$1,490</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.3em] text-white/40">
        Scroll
      </div>
    </header>
  );
};

export default Hero;
