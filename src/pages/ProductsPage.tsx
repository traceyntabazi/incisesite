import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { products, wallProducts, floorProducts, toneColors, comparisonData, type ProductData } from "@/data/products";

const ProductCard = ({ product, index }: { product: ProductData; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <section id={product.id} className="section-padding border-b border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-start ${!isEven ? "md:[direction:rtl]" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0,0,.2,1] }}
            className={!isEven ? "md:[direction:ltr]" : ""}
          >
            <span className="label-text text-[10px] mb-1 block">{product.badge}</span>
            <p className="text-[0.6rem] text-muted-foreground font-body tracking-[0.24em] uppercase mb-4" style={{ fontWeight: 400 }}>
              {product.context}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3" style={{ fontWeight: 300 }}>{product.name}</h2>
            <p className="font-display italic text-lg text-muted-foreground mb-6" style={{ fontWeight: 300 }}>"{product.tagline}"</p>

            {product.description.map((para, i) => (
              <p key={i} className="text-secondary-foreground font-body leading-[1.95] mb-4 text-[0.88rem]" style={{ fontWeight: 300 }}>
                {para}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-[2px] mt-8 mb-8">
              {product.specs.slice(0, 6).map((spec) => (
                <div key={spec.label} className="bg-card p-4">
                  <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1" style={{ fontWeight: 400 }}>
                    {spec.label}
                  </p>
                  <p className="text-foreground font-body text-sm" style={{ fontWeight: 400 }}>{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to={`/products/${product.slug}`} className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
                FULL DETAILS →
              </Link>
              <a href="#contact" className="border border-secondary-foreground/30 text-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
                REQUEST A SAMPLE →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.85, ease: [0,0,.2,1] }}
            className={`sticky top-[140px] ${!isEven ? "md:[direction:ltr]" : ""}`}
          >
            <Link to={`/products/${product.slug}`}>
              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={`INCISE ${product.name} — ${product.tagline}`}
                  className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => (
  <section id="compare" className="section-padding bg-secondary">
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="label-text mb-4">COMPARE PRODUCTS</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground" style={{ fontWeight: 300 }}>
          Find the right system for <span className="italic text-gradient-gold">your project.</span>
        </h2>
      </motion.div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="border-b border-border">
              {["Product", "Walls", "Floors", "Outdoor", "Waterproof", "Thickness", "Best Use", "Complexity"].map((h) => (
                <th key={h} className="text-left py-4 px-3 text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground" style={{ fontWeight: 400 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.name} className="border-b border-border hover:bg-card transition-colors">
                <td className="py-4 px-3 text-foreground" style={{ fontWeight: 500 }}>{row.name}</td>
                <td className="py-4 px-3">{row.walls ? <span className="text-primary">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                <td className="py-4 px-3">{row.floors ? <span className="text-primary">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                <td className="py-4 px-3">{row.outdoor ? <span className="text-primary">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                <td className="py-4 px-3">{row.waterproof ? <span className="text-primary">✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                <td className="py-4 px-3 text-muted-foreground">{row.thickness}</td>
                <td className="py-4 px-3 text-muted-foreground">{row.bestUse}</td>
                <td className="py-4 px-3 text-muted-foreground">{row.complexity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-14 border-t border-border pt-12"
      >
        <h3 className="font-display text-xl text-foreground mb-3" style={{ fontWeight: 400 }}>
          Not sure which product is right for you?
        </h3>
        <p className="text-muted-foreground font-body text-[0.88rem] max-w-lg mx-auto mb-8" style={{ fontWeight: 300 }}>
          Our technical team consults on every project. Tell us your substrate, application,
          and design goal — we'll recommend the right system and send physical samples.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
            START A CONVERSATION →
          </a>
          <Link to="/technical" className="border border-secondary-foreground/30 text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
            VIEW TECHNICAL DATA →
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const faqs = [
  { q: "What is microcement and how is it different from regular cement?", a: "Microcement is an ultra-thin, polymer-modified cement-based coating applied at just 1–3mm thickness over existing surfaces. Unlike regular cement or screed, it creates a seamless, jointless finish that is both decorative and functional — available in 80+ colours with matte to high-gloss options." },
  { q: "Can microcement be applied over existing tiles?", a: "Yes. One of the biggest advantages of microcement is that it can be applied directly over existing tiles, screed, concrete, or plaster — eliminating the need for costly and time-consuming demolition." },
  { q: "Is microcement waterproof? Can it be used in bathrooms and wet areas?", a: "Yes — when correctly sealed with the INCISE polyurethane sealer system, microcement is fully waterproof and suitable for bathrooms, showers, wet rooms, swimming pool surrounds, and kitchen splashbacks." },
  { q: "How long does a microcement floor or wall last?", a: "A correctly applied and sealed INCISE microcement surface has a lifespan of 20+ years. Durability depends on proper substrate preparation, application by a certified applicator, correct sealer application, and appropriate maintenance." },
  { q: "Do I need a certified applicator to install INCISE products?", a: "Yes. All INCISE microcement and decorative coating products must be applied by an INCISE-certified applicator who has completed training at the INCISE Academy." },
  { q: "How much does microcement cost compared to tiles or natural stone?", a: "Microcement is competitively priced with premium tiles and natural stone, but offers significant savings on labour, demolition, grouting, and waste disposal." },
  { q: "What colours and finishes are available?", a: "INCISE offers over 80 standard tones across its product range — from warm whites and sandy neutrals to deep charcoals and bold earth tones. Finishes range from matte through satin to high-gloss." },
  { q: "Can INCISE products be used outdoors in Uganda's climate?", a: "Yes. The INCISE Patio System, Terrace, and Color Hardener are specifically engineered for East Africa's tropical climate — UV-stable, non-slip, and rated for equatorial sun exposure." },
  { q: "How do I maintain a microcement surface?", a: "Microcement surfaces are low-maintenance. Regular cleaning with a pH-neutral cleaner and periodic re-waxing (every 6–12 months for floors) is all that's needed." },
  { q: "Where can I see INCISE products in person or request samples?", a: "Visit our showrooms in Kampala (Luzira Industrial Park) or Nairobi (Purshotam Place, Westlands). You can also request physical colour samples delivered to your location." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="label-text mb-4">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground" style={{ fontWeight: 300 }}>
            Everything architects and clients <span className="italic text-gradient-gold">ask us.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="border-b border-border">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
                <h3 className="font-body text-[0.92rem] text-foreground group-hover:text-primary transition-colors" style={{ fontWeight: 400 }}>{faq.q}</h3>
                <ChevronDown size={18} className={`shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }} className="overflow-hidden">
                    <p className="text-muted-foreground font-body text-[0.86rem] leading-[1.95] pb-5 pr-10" style={{ fontWeight: 300 }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-14">
          <p className="text-muted-foreground font-body text-[0.88rem] mb-4" style={{ fontWeight: 300 }}>Have a question we haven't answered?</p>
          <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors inline-block">ASK OUR TEAM →</a>
        </motion.div>
      </div>
    </section>
  );
};

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "wall" | "floor">("all");

  const filteredProducts = activeFilter === "all"
    ? products
    : activeFilter === "wall"
    ? wallProducts
    : floorProducts;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Microcement & Decorative Coating Products | INCISE East Africa"
        description="Explore INCISE's complete range of microcement, microtopping, metallic finishes, Wallcrete, Cemwash, patio systems, and color hardener. Premium cement-based wall and floor finishes manufactured in Uganda."
        canonical="https://incisesite.lovable.app/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "INCISE Microcement & Decorative Coating Products",
          description: "Complete range of microcement and cement-based decorative wall and floor finishes by INCISE.",
          numberOfItems: products.length,
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `INCISE ${p.name}`,
            url: `https://incisesite.lovable.app/products/${p.slug}`,
          })),
        }}
      />
      <Navbar />

      {/* Page Hero */}
      <section className="pt-[140px] pb-16 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Home</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <span className="label-text text-[0.6rem]">Products</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-4"
            style={{ fontWeight: 300 }}
          >
            Complete Microcement &amp; Cement-Based Surface
            <br />
            <span className="italic text-muted-foreground">Systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-secondary-foreground font-body max-w-xl leading-[1.95]"
            style={{ fontWeight: 300 }}
          >
            Every INCISE microcement and decorative coating is a complete, engineered system — not just a coating in a bag.
            Primer, application, sealing, and aftercare. One source. Full accountability.
          </motion.p>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-[76px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex gap-[2px] overflow-x-auto py-3 scrollbar-hide">
            {([
              { key: "all", label: "ALL PRODUCTS" },
              { key: "wall", label: "WALL PRODUCTS" },
              { key: "floor", label: "FLOOR PRODUCTS" },
            ] as const).map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveFilter(item.key)}
                className={`px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase font-body whitespace-nowrap transition-all ${
                  activeFilter === item.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                const el = document.getElementById("compare");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase font-body whitespace-nowrap text-muted-foreground hover:text-foreground transition-all"
            >
              COMPARE ALL
            </button>
          </div>
        </div>
      </div>

      {filteredProducts.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}

      <ComparisonTable />
      <FAQSection />

      <Footer />
    </div>
  );
};

export default ProductsPage;
