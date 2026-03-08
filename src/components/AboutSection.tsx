import { motion } from "framer-motion";
import textureImage from "@/assets/texture-grey.jpg";
import packagingImage from "@/assets/product-packaging.jpg";

const brandValues = [
  { word: "Elegant", desc: "Premium finishes that elevate every space." },
  { word: "Safe", desc: "Certified systems with full health & safety compliance." },
  { word: "Adaptable", desc: "Solutions for every substrate, climate, and vision." },
  { word: "Innovative", desc: "Proprietary formulations made in Uganda for East Africa." },
];

const features = [
  {
    icon: "🪨",
    title: "Not paint. Not tiles. Something better.",
    desc: "INCISE coatings are cementitious — they bond to your substrate and become part of it. Ultra-thin (1–3mm), seamless, and waterproof.",
  },
  {
    icon: "🌍",
    title: "Formulated for East Africa",
    desc: "Made in Uganda for our climate — humidity, UV intensity, and temperature extremes that imported generics weren't designed for.",
  },
  {
    icon: "🏆",
    title: "One system, total accountability",
    desc: "We supply primers, coatings, sealers, tools, training, and aftercare. No third-party compatibility risks. We own the full system.",
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        {/* Brand Values Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0,0,.2,1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-[2px] mb-20"
        >
          {brandValues.map((v, i) => (
            <div key={i} className="bg-card p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2" style={{ fontWeight: 300 }}>
                {v.word}
              </h3>
              <p className="text-muted-foreground text-[0.82rem] font-body leading-[1.8]" style={{ fontWeight: 300 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0,0,.2,1] }}
            className="relative"
          >
            <img
              src={textureImage}
              alt="INCISE microtopping texture"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-4 py-2">
              <p className="label-text text-[10px]">MADE IN UGANDA</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0,0,.2,1] }}
          >
            <p className="label-text mb-4">WHAT IS INCISE?</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight" style={{ fontWeight: 300 }}>
              East Africa's leading microcement &amp; decorative{" "}
              <span className="italic text-gradient-gold">coatings manufacturer.</span>
            </h2>
            <p className="text-secondary-foreground leading-[1.95] mb-10 font-body" style={{ fontWeight: 300 }}>
              INCISE manufactures premium microcement, microtopping, and cement-based
              surface finishes — seamless wall and floor coatings engineered for East Africa's
              climate. Every surface we complete is an argument that premium decorative
              coatings can come from East Africa.
            </p>

            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="text-foreground font-body mb-1" style={{ fontWeight: 500 }}>
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.88rem] leading-[1.95] font-body" style={{ fontWeight: 300 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Packaging Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0,0,.2,1] }}
          className="mt-20 grid md:grid-cols-2 gap-[2px] items-center"
        >
          <div className="bg-card p-8 md:p-12">
            <p className="label-text mb-4">THE INCISE SYSTEM</p>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4" style={{ fontWeight: 300 }}>
              Complete coating systems, <span className="italic">manufactured in Uganda.</span>
            </h3>
            <p className="text-muted-foreground text-[0.88rem] font-body leading-[1.95] mb-6" style={{ fontWeight: 300 }}>
              Base coats, finish coats, polymers, sealers — every component engineered to work together.
              No third-party compatibility risks. One system, total accountability.
            </p>
            <a
              href="/products"
              className="inline-flex bg-foreground text-background px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-secondary-foreground transition-colors"
            >
              EXPLORE PRODUCTS →
            </a>
          </div>
          <div className="bg-card">
            <img
              src={packagingImage}
              alt="INCISE Microtopping product packaging — base coat, finish coat, and polymer buckets"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
