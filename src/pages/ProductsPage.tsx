import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const productNav = [
  { key: "microtopping", label: "MICROTOPPING" },
  { key: "metallic", label: "METALLIC FINISH" },
  { key: "wallcrete", label: "WALLCRETE" },
  { key: "cemwash", label: "CEMWASH" },
  { key: "patio", label: "PATIO SYSTEM" },
  { key: "hardener", label: "COLOR HARDENER" },
  { key: "compare", label: "COMPARE ALL" },
];

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductData {
  id: string;
  badge: string;
  context: string;
  name: string;
  tagline: string;
  description: string[];
  specs: ProductSpec[];
  applications: string[];
  toneCount: number;
  img: string;
}

const products: ProductData[] = [
  {
    id: "microtopping",
    badge: "SIGNATURE PRODUCT",
    context: "WALLS & FLOORS · INDOOR & OUTDOOR · OUR MOST SPECIFIED PRODUCT",
    name: "Microtopping",
    tagline: "The finish that changed East African interiors.",
    description: [
      "An ultra-thin, seamless decorative coating applied at just 1–3mm directly over tiles, screed, or existing surfaces. No demolition. No joints. No grout lines. Just a clean, continuous surface that is also fully waterproof and hygienic.",
      "Available in over 80 standard tones — from bone white to deep charcoal — with matte, satin, or high-gloss sealer options. Microtopping is the most specified INCISE product because architects who know the difference, specify it by name.",
    ],
    specs: [
      { label: "Application Thickness", value: "1–3mm" },
      { label: "Finish Range", value: "Matte to High-Gloss" },
      { label: "Suitable Substrates", value: "Concrete, Tiles, Screed, Plaster" },
      { label: "Colour Range", value: "80+ standard tones" },
      { label: "Waterproof", value: "Yes — with correct sealer" },
      { label: "Lifespan", value: "20+ years correctly applied" },
      { label: "Application Method", value: "Trowel — certified applicators only" },
      { label: "Coverage Per Coat", value: "Approx. 1 kg/m² per coat" },
    ],
    applications: ["Residential Floors", "Bathroom Walls", "Kitchen Worktops", "Hotel Lobbies", "Retail Floors", "Feature Walls"],
    toneCount: 10,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "metallic",
    badge: "FEATURE SURFACES",
    context: "WALLS · INTERIOR · DECORATIVE FEATURE SURFACES",
    name: "Metallic Finish",
    tagline: "The finish that clients photograph. Every time.",
    description: [
      "Bring depth, drama, and changing light to interior walls. Lustrous metallic effects in copper, gold, silver, and bronze create a living surface that shifts as light conditions change throughout the day. No two applications are identical — which is precisely the point.",
      "Ideal for reception areas, restaurant feature walls, hotel corridors, and residential statement spaces where first impressions carry real weight.",
    ],
    specs: [
      { label: "Application", value: "Interior walls only" },
      { label: "Effect", value: "Dimensional metallic sheen" },
      { label: "Colour Tones", value: "Gold, Copper, Silver, Bronze, Midnight" },
      { label: "Light Response", value: "Shifts with natural & artificial light" },
      { label: "Substrate", value: "Prepared plaster or concrete" },
      { label: "Best For", value: "Feature walls, reception areas" },
    ],
    applications: ["Hotel Lobbies", "Restaurant Features", "Reception Walls", "Living Room Accents", "Office Entrances"],
    toneCount: 5,
    img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
  },
  {
    id: "wallcrete",
    badge: "CONCRETE CHARACTER",
    context: "WALLS · INDOOR & OUTDOOR · CONCRETE CHARACTER",
    name: "Wallcrete",
    tagline: "Real concrete character. Applied with precision.",
    description: [
      "The raw character of poured concrete — refined for modern walls. Wallcrete delivers authentic industrial texture with the workability and precision of a designed coating system.",
      "Suitable for both interior and exterior walls, and durable enough for commercial environments where visual character needs to survive daily use.",
    ],
    specs: [
      { label: "Texture", value: "Rough to smooth concrete finish" },
      { label: "Application", value: "Indoor & Outdoor walls" },
      { label: "Coverage", value: "3–4 m² per kg" },
      { label: "Colours", value: "25 standard tones" },
      { label: "Durability", value: "Impact and weather resistant" },
      { label: "Sealer Required", value: "Yes — waterproofing sealer" },
    ],
    applications: ["Office Walls", "Retail Interiors", "Exterior Facades", "Feature Walls", "Restaurant Walls"],
    toneCount: 5,
    img: "https://images.unsplash.com/photo-1600607687644-c7f34b5b6f4a?w=800&q=80",
  },
  {
    id: "cemwash",
    badge: "ORGANIC & NATURAL",
    context: "WALLS · ORGANIC & NATURAL · BREATHABLE MINERAL COATING",
    name: "Cemwash",
    tagline: "Walls that improve with age.",
    description: [
      "A breathable, mineral-based wall wash inspired by traditional lime finishes. Cemwash creates walls with organic depth and warmth that improves with age.",
      "The antidote to perfection. For clients who want their space to feel alive rather than sealed.",
    ],
    specs: [
      { label: "Character", value: "Natural, organic variation" },
      { label: "Breathable", value: "Yes — mineral base" },
      { label: "Maintenance", value: "Low — improves with age" },
      { label: "Best For", value: "Living areas, hospitality" },
      { label: "Palette", value: "Earth & warm neutral tones" },
      { label: "Substrate", value: "Plaster, masonry, concrete block" },
    ],
    applications: ["Living Rooms", "Boutique Hotels", "Dining Rooms", "Exterior Walls", "Wellness Spaces"],
    toneCount: 5,
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    id: "patio",
    badge: "OUTDOOR SYSTEM",
    context: "FLOORS · OUTDOOR COMPLETE SYSTEM · TROPICS-RATED",
    name: "Patio System",
    tagline: "Built to survive East Africa's climate. Beautifully.",
    description: [
      "A complete outdoor floor coating system engineered specifically for Uganda's tropical climate. UV-stable, non-slip, and designed to handle foot traffic, poolside exposure, and equatorial sun.",
      "Most imported patio systems were designed for temperate climates. INCISE Patio is formulated for ours.",
    ],
    specs: [
      { label: "UV Stability", value: "High — tropics-rated" },
      { label: "Slip Rating", value: "R11 anti-slip" },
      { label: "Best For", value: "Patios, pool decks, driveways" },
      { label: "Durability", value: "15+ year lifespan" },
      { label: "Waterproof", value: "Yes — sealer included in system" },
      { label: "Colour Range", value: "18 outdoor-rated tones" },
    ],
    applications: ["Swimming Pool Decks", "Driveways", "Garden Terraces", "Hotel Outdoor Areas", "Rooftop Floors"],
    toneCount: 5,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "hardener",
    badge: "INDUSTRIAL GRADE",
    context: "FLOORS · HIGH-TRAFFIC · INDUSTRIAL GRADE",
    name: "Color Hardener",
    tagline: "Industrial durability. Unexpected colour.",
    description: [
      "A dry-shake hardener pressed into fresh concrete to create a dense, coloured, abrasion-resistant surface.",
      "This floor will outlast everything built on it. And it will look deliberate and designed while it does.",
    ],
    specs: [
      { label: "Hardness", value: "Industrial-grade surface" },
      { label: "Application Method", value: "Dry-shake on fresh concrete" },
      { label: "Best For", value: "Retail, warehouses, garages" },
      { label: "Colours", value: "40+ shades available" },
      { label: "Traffic Rating", value: "Industrial heavy traffic" },
      { label: "Coverage", value: "5–6 kg/m² standard application" },
    ],
    applications: ["Retail Floors", "Warehouses", "Garages", "Factory Floors", "Commercial Kitchens"],
    toneCount: 5,
    img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
  },
];

const comparisonData = [
  { name: "Microtopping", walls: true, floors: true, outdoor: true, waterproof: true, thickness: "1–3mm", bestUse: "Premium residential & commercial", complexity: "High — certified only" },
  { name: "Metallic Finish", walls: true, floors: false, outdoor: false, waterproof: false, thickness: "1–2mm", bestUse: "Feature/statement walls", complexity: "Medium-High" },
  { name: "Wallcrete", walls: true, floors: false, outdoor: true, waterproof: false, thickness: "2–4mm", bestUse: "Concrete aesthetic — any scale", complexity: "Medium" },
  { name: "Cemwash", walls: true, floors: false, outdoor: true, waterproof: false, thickness: "Thin wash", bestUse: "Natural/organic character", complexity: "Low-Medium" },
  { name: "Patio System", walls: false, floors: true, outdoor: true, waterproof: true, thickness: "System", bestUse: "Pool decks, outdoor terraces", complexity: "Medium" },
  { name: "Color Hardener", walls: false, floors: true, outdoor: true, waterproof: false, thickness: "Integral", bestUse: "Industrial/commercial floors", complexity: "Medium" },
];

const toneColors = [
  "hsl(30, 5%, 85%)", "hsl(30, 8%, 70%)", "hsl(30, 10%, 55%)", "hsl(30, 12%, 40%)",
  "hsl(30, 8%, 30%)", "hsl(35, 15%, 75%)", "hsl(38, 20%, 60%)", "hsl(25, 10%, 50%)",
  "hsl(20, 5%, 35%)", "hsl(30, 3%, 20%)",
];

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
              {product.specs.map((spec) => (
                <div key={spec.label} className="bg-card p-4">
                  <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1" style={{ fontWeight: 400 }}>
                    {spec.label}
                  </p>
                  <p className="text-foreground font-body text-sm" style={{ fontWeight: 400 }}>{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-[2px] mb-8">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="px-3 py-1.5 text-[0.6rem] tracking-[0.24em] uppercase font-body bg-card text-muted-foreground"
                >
                  {app}
                </span>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-3" style={{ fontWeight: 400 }}>
                Available Tones — Select to Explore
              </p>
              <div className="flex gap-1.5">
                {toneColors.slice(0, product.toneCount).map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color, border: "1px solid rgba(63,63,62,.15)" }}
                    title={`Tone ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
                REQUEST A SAMPLE →
              </a>
              <a href="#" className="border border-secondary-foreground/30 text-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
                TECHNICAL DATA →
              </a>
              <a href="#" className="border border-secondary-foreground/30 text-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
                WATCH VIDEO →
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
            <div className="overflow-hidden">
              <img
                src={product.img}
                alt={`INCISE ${product.name}`}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
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
          <a href="#" className="border border-secondary-foreground/30 text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
            VIEW TECHNICAL DATA →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProductsPage = () => {
  const [activeNav, setActiveNav] = useState("microtopping");

  const scrollToProduct = (key: string) => {
    setActiveNav(key);
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-[140px] pb-16 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <span className="label-text text-[0.6rem]">Products</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-4"
            style={{ fontWeight: 300 }}
          >
            Complete Surface
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
            Every INCISE product is a complete, engineered system — not just a coating in a bag.
            Primer, application, sealing, and aftercare. One source. Full accountability.
          </motion.p>
        </div>
      </section>

      {/* Sticky product nav */}
      <div className="sticky top-[76px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex gap-[2px] overflow-x-auto py-3 scrollbar-hide">
            {productNav.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToProduct(item.key)}
                className={`px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase font-body whitespace-nowrap transition-all ${
                  activeNav === item.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}

      <ComparisonTable />

      <Footer />
    </div>
  );
};

export default ProductsPage;
