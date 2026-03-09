import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const displayProducts = products.slice(0, 6);

const ProductLines = () => {
  const [active, setActive] = useState(0);
  const p = displayProducts[active];

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
          {displayProducts.map((prod, i) => (
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
            <span className="label-text text-[10px]">{p.badge}</span>
            <h3 className="font-display text-4xl md:text-5xl text-foreground mt-2 mb-4" style={{ fontWeight: 300 }}>
              {p.name}
            </h3>
            <p className="text-secondary-foreground font-body leading-[1.95] mb-8" style={{ fontWeight: 300 }}>
              {p.description[0]}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/products/${p.slug}`}
                className="inline-flex bg-foreground text-background px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-secondary-foreground transition-colors"
              >
                FULL PRODUCT DETAILS →
              </Link>
              <Link
                to="/products"
                className="inline-flex border border-secondary-foreground/30 text-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors"
              >
                ALL PRODUCTS →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[2px]">
            {p.specs.slice(0, 3).map((spec) => (
              <div key={spec.label} className="bg-card p-5">
                <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1" style={{ fontWeight: 400 }}>
                  {spec.label}
                </p>
                <p className="text-foreground font-body text-sm" style={{ fontWeight: 400 }}>{spec.value}</p>
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
