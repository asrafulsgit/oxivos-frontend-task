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
  const inlineImgs = [
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=200&q=80",
  ];
  return (
    <section
      className="relative mx-auto grid min-h-100 sm:min-h-120   md:min-h-150 
    w-full max-w-7xl grid-cols-1 overflow-hidden px-4 py-10 
    sm:px-6 sm:py-10 md:py-14 sm:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-0 xl:px-12"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col justify-center px-2 py-6 sm:py-8 lg:py-0"
      >
        <motion.span
          variants={item}
          className=" text-center sm:text-left text-sm sm:text-[10px] 
          font-medium uppercase tracking-[0.4em] text-primary mb-6"
        >
          Heritage / Handcrafted
        </motion.span>
        <motion.h1
          variants={item}
          className="max-w-xl text-balance  font-display
          leading-[0.9] tracking-tighter text-primary-light mb-4 md:mb-8
          text-center sm:text-left text-5xl md:text-7xl lg:text-8xl"
        >
          A Legacy{" "}
          <motion.span
            className="inline-block sm:hidden align-middle h-[0.85em] w-[1.1em] rounded-full overflow-hidden ring-1 ring-brand-accent/50 shadow-lg shadow-brand-accent/20"
            animate={{ rotate: [0, 6, -6, 0], y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={inlineImgs[0]}
              alt="hero-image"
              width={200}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.span>{" "}
          in
          <br />
          <i className="font-normal">
            Gold{" "}
            <motion.span
              className="ml-2 inline-block sm:hidden align-middle h-[0.7em] w-[0.9em] 
              rounded-md overflow-hidden ring-1 ring-white/20"
              animate={{ y: [0, -6, 0], rotate: [0, -4, 4, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Image
                src={inlineImgs[1]}
                alt="hero-image"
                width={200}
                height={100}
                className="w-full h-full object-cover"
              />
            </motion.span>{" "}
            Thread
          </i>
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-4 sm:max-w-md text-center sm:text-left leading-relaxed text-primary-light/60 
          md:mb-10 text-sm md:text-lg"
        >
          The 2026 Collection explores the intersection of traditional zari
          embroidery and contemporary architectural tailoring — hand-stitched in
          our Old Dhaka atelier.
        </motion.p>
        <motion.div variants={item} className="text-center sm:self-start">
          <Link href="/products" className="group inline-block">
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
        className="hidden sm:block relative min-h-[45vh] overflow-hidden rounded-[1.5rem] 
        bg-surface sm:min-h-[55vh] lg:min-h-0 lg:rounded-none"
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
