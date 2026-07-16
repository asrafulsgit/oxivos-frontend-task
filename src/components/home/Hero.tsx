"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import hero from "@/assets/hero.jpg";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const Hero = () => {
  return (
    <section className="relative grid min-h-[calc(100vh-64px)] grid-cols-1 overflow-hidden lg:grid-cols-2">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col justify-center px-8 py-24 lg:px-24 lg:py-0"
      >
        <motion.span
          variants={item}
          className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-primary"
        >
          Heritage / Handcrafted
        </motion.span>
        <motion.h1
          variants={item}
          className="mb-8 text-balance font-display text-6xl leading-[0.9] tracking-tighter text-primary-light lg:text-8xl"
        >
          A Legacy in
          <br />
          <i className="font-normal">Gold Thread</i>
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-10 max-w-md text-lg leading-relaxed text-primary-light/60"
        >
          The 2026 Collection explores the intersection of traditional zari
          embroidery and contemporary architectural tailoring — hand-stitched in
          our Old Dhaka atelier.
        </motion.p>
        <motion.div variants={item}>
          <Link href="/shop" className="group w-fit">
            <span className="text-sm uppercase tracking-widest text-primary-light">
              Explore the Collection
            </span>
            <div className="mt-1 h-px w-full origin-left bg-primary transition-transform duration-500 group-hover:scale-x-110" />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        className="relative min-h-[60vh] bg-surface lg:min-h-0"
      >
        <Image
          src={hero}
          alt="Model in a black velvet Panjabi with gold zari embroidery"
          width={1200}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
