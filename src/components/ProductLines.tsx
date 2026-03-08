import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { name: "MICROTOPPING", tag: "SIGNATURE", desc: "Seamless, ultra-thin cementitious coating. Polished concrete aesthetic for walls, floors, and wet areas.", specs: { thickness: "1–3mm", finish: "Matte / Satin / Gloss", suitable: "Wet areas, floors, walls" } },
  { name: "METALLIC", tag: "PREMIUM", desc: "Dimensional metallic coatings with bronze, copper, and silver finishes for dramatic feature surfaces.", specs: { thickness: "1–2mm", finish: "Shimmer / Brushed", suitable: "Feature walls, columns" } },
  { name: "WALLCRETE", tag: "WALLS", desc: "Raw concrete aesthetic for walls. Industrial edge with controlled texture and depth.", specs: { thickness: "2–4mm", finish: "Natural / Textured", suitable: "Interior walls" } },
  { name: "PATIO", tag: "OUTDOOR", desc: "UV-stable, slip-rated outdoor floor coatings designed for East African sun and rain.", specs: { thickness: "3–5mm", finish: "Brushed / Textured", suitable: "Pools, patios, driveways" } },
  { name: "CEMWASH", tag: "ARTISAN", desc: "Hand-applied artisan wash for walls. Warm, organic tones with natural variation.", specs: { thickness: "1–2mm", finish: "Flat / Matte", suitable: "Interior walls" } },
  { name: "COLOR HARDENER", tag: "COMMERCIAL", desc: "High-traffic coloured concrete hardener. Dense, durable, and UV-stable.", specs: { thickness: "2–3mm", finish: "Dense / Matte", suitable: "Commercial floors, driveways" } },
];

const ProductLines = () => {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">PRODUCT LINES</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
            Every surface. Every <span className="italic text-gradient-gold">vision.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-[2px] mb-12">
          {products.map((prod, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase font-body transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <span className="label-text text-[10px]">{p.tag}</span>
            <h3 className="font-display text-4xl md:text-5xl text-foreground mt-2 mb-4" style={{ fontWeight: 300 }}>
              {p.name}
            </h3>
            <p className="text-secondary-foreground font-body leading-[1.95] mb-8" style={{ fontWeight: 300 }}>
              {p.desc}
            </p>
            <a
              href="/products"
              className="inline-flex bg-foreground text-background px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-secondary-foreground transition-colors"
            >
              FULL PRODUCT DETAILS →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-[2px]">
            {Object.entries(p.specs).map(([key, val]) => (
              <div key={key} className="bg-card p-5">
                <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1" style={{ fontWeight: 400 }}>
                  {key}
                </p>
                <p className="text-foreground font-body text-sm" style={{ fontWeight: 400 }}>{val}</p>
              </div>
            ))}
            <div className="bg-card p-5">
              <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1" style={{ fontWeight: 400 }}>
                Colours
              </p>
              <p className="text-foreground font-body text-sm" style={{ fontWeight: 400 }}>Custom palette</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductLines;
