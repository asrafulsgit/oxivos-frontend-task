import Image from "next/image";
import craft from "@/assets/craft.jpg";

const BrandStory = () => {
  return (
    <section className="bg-surface py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="mb-8 block text-[10px] uppercase tracking-[0.4em] text-primary">
            The Craft
          </span>
          <blockquote className="mb-8 font-display text-3xl leading-tight text-primary lg:text-5xl">
            "We do not just stitch garments; we weave history. Every spool of
            gold zari represents a lineage of craftsmanship that refuses to be
            forgotten."
          </blockquote>
          <p className="max-w-lg text-sm leading-relaxed text-primary-light/60">
            Our atelier in Old Dhaka remains committed to the preservation of
            heritage techniques. Every stitch is a testament to the patient
            hands that guide the needle through hand-spun muslins and heavy
            silks.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-square overflow-hidden">
            <Image
              src={craft}
              alt="Hand embroidery in progress"
              loading="lazy"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
