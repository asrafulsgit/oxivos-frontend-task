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
    <section className="relative mx-auto grid min-h-150 w-full max-w-7xl grid-cols-1 overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-0 xl:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col justify-center px-1 py-6 sm:py-8 lg:py-0"
      >
        <motion.span
          variants={item}
          className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-primary sm:mb-6"
        >
          Heritage / Handcrafted
        </motion.span>
        <motion.h1
          variants={item}
          className="mb-6 max-w-xl text-balance text-center font-display text-5xl leading-[0.9] tracking-tighter text-primary-light sm:mb-8 sm:text-left sm:text-6xl md:text-7xl lg:text-8xl"
        >
          A Legacy in
          <br />
          <i className="font-normal">Gold Thread</i>
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-8 max-w-md text-base leading-relaxed text-primary-light/60 sm:mb-10 sm:text-lg"
        >
          The 2026 Collection explores the intersection of traditional zari
          embroidery and contemporary architectural tailoring — hand-stitched in
          our Old Dhaka atelier.
        </motion.p>
        <motion.div variants={item} className="self-center sm:self-start">
          <Link href="/products" className="group w-fit">
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
        className="relative min-h-[45vh] overflow-hidden rounded-[1.5rem] bg-surface sm:min-h-[55vh] lg:min-h-0 lg:rounded-none"
      >
        <Image
          src={hero}
          alt="Model in a black velvet Panjabi with gold zari embroidery"
          width={1200}
          height={1600}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
