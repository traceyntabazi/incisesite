import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Droplets, Sun, Sparkles, Wrench, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

/* ── SEALER DATA ── */
interface SealerProduct {
  type: string;
  name: string;
  tagline: string;
  desc: string;
  bestFor: string[];
  benefits: string[];
  badges: string[];
  featured?: boolean;
}

const waterBasedSealers: SealerProduct[] = [
  {
    type: "Water-Based · Single Component",
    name: "INCISE WB Sealer",
    tagline: "Multi-Purpose Water-Based Sealer",
    desc: "A single-component water-based protective coating designed for decorative mineral surfaces requiring breathable protection and a natural appearance. Ideal for interior walls, feature surfaces and low-traffic decorative floors.",
    bestFor: ["Interior walls", "Decorative plasters", "Low-traffic floors", "Feature surfaces", "DIY decorative concrete"],
    benefits: ["Single component", "Easy roller application", "Breathable coating", "Low VOC", "Matte or satin finish"],
    badges: ["Low VOC", "Interior"],
  },
  {
    type: "Polyurethane · Water-Based",
    name: "INCISE PU WB Sealer",
    tagline: "Professional Water-Based Polyurethane Sealer",
    desc: "A high-performance water-based polyurethane protective coating designed for microcement and decorative floors requiring enhanced durability. Formulated with advanced additives for abrasion and chemical resistance — the preferred choice for residential microcement floors.",
    bestFor: ["Microcement floors", "Kitchens & bathrooms", "Hospitality interiors", "Residential living areas", "Commercial interiors"],
    benefits: ["High abrasion resistance", "Water & stain resistant", "Non-yellowing", "Low VOC", "Smooth satin finish"],
    badges: ["Recommended", "UV Stable"],
    featured: true,
  },
];

const highPerfSealers: SealerProduct[] = [
  {
    type: "Acrylic · Two Component · Solvent-Based",
    name: "INCISE 2K HR Sealer",
    tagline: "High-Resistance Acrylic Sealer",
    desc: "A two-component solvent-based acrylic protective coating developed for decorative concrete and microcement systems requiring strong chemical resistance and enhanced depth of colour. Suitable for both interior and exterior applications.",
    bestFor: ["Decorative concrete floors", "Microcement floors", "Exterior surfaces", "Commercial spaces"],
    benefits: ["Excellent chemical resistance", "High clarity", "Enhances colour depth", "Durable finish", "Interior & exterior use"],
    badges: ["Exterior", "2-Component"],
  },
  {
    type: "Polyaspartic · Aliphatic · Two Component",
    name: "INCISE RapidShield",
    tagline: "Ultra-Fast Polyaspartic Protection",
    desc: "A two-component aliphatic polyaspartic sealer designed for maximum durability and extremely fast curing times. RapidShield delivers industrial-grade protection for demanding commercial and high-traffic environments where downtime must be minimised.",
    bestFor: ["Retail & showroom floors", "Restaurants", "Garages", "High-traffic commercial"],
    benefits: ["Ultra-fast curing", "Exceptional abrasion resistance", "Chemical resistant", "UV stable", "Industrial-grade durability"],
    badges: ["Fast Cure", "Commercial"],
    featured: true,
  },
];

const primers = [
  {
    type: "Water-Based · Acrylic",
    name: "INCISE WB Acrylic Primer",
    desc: "A high-performance water-based acrylic primer designed to improve adhesion between mineral substrates and decorative coatings. Low VOC formulation suitable for interior applications.",
    suitableFor: ["Microcement systems", "Decorative plasters", "Cement walls and floors", "Concrete surfaces"],
  },
  {
    type: "Solvent-Based · Penetrating",
    name: "INCISE Concrete Primer",
    desc: "A penetrating solvent-based primer designed for dense concrete and low-absorbency substrates where water-based primers may not achieve adequate penetration and adhesion.",
    suitableFor: ["Improves adhesion on dense substrates", "Reduces substrate absorption", "Enhances long-term sealer performance"],
  },
];

const systemLayers = [
  { step: "01", phase: "Foundation", title: "Substrate Preparation", desc: "Surface cleaning, levelling and moisture assessment to ensure a stable, contaminant-free base for the system." },
  { step: "02", phase: "Adhesion", title: "Primer Application", desc: "INCISE WB Acrylic Primer or Concrete Primer applied to improve bonding between substrate and decorative coating." },
  { step: "03", phase: "Surface", title: "Decorative Coating", desc: "INCISE Microtopping or decorative concrete system applied and cured to achieve the specified finish." },
  { step: "04", phase: "Protection", title: "Sealer System", desc: "INCISE sealer selected to match the application environment — residential, commercial or high-traffic — applied over the cured decorative surface." },
];

const selectionGuide = [
  { application: "Decorative walls & feature surfaces", sealer: "WB Sealer", system: "Water-Based", env: "Interior" },
  { application: "Residential microcement floors", sealer: "PU WB Sealer", system: "Polyurethane", env: "Interior" },
  { application: "Kitchens & bathrooms", sealer: "PU WB Sealer", system: "Polyurethane", env: "Wet Areas" },
  { application: "Commercial decorative floors", sealer: "2K HR Sealer", system: "Acrylic 2-Component", env: "Interior / Exterior" },
  { application: "Exterior decorative concrete", sealer: "2K HR Sealer", system: "Acrylic 2-Component", env: "Exterior" },
  { application: "High-traffic commercial floors", sealer: "RapidShield", system: "Polyaspartic", env: "Commercial", recommended: true },
  { application: "Fast-turnaround projects", sealer: "RapidShield", system: "Polyaspartic", env: "Any" },
];

const faqs = [
  { q: "What is the best sealer for microcement floors?", a: "Polyurethane sealers such as INCISE PU WB Sealer provide excellent abrasion resistance and water protection, making them the preferred specification for residential microcement floors in kitchens, bathrooms and living areas. For higher-traffic applications, INCISE RapidShield offers superior mechanical resistance." },
  { q: "Can microcement be sealed with water-based sealers?", a: "Yes. Water-based sealers are widely used for microcement, particularly for interior spaces where low VOC emissions and natural matte finishes are specified. Both INCISE WB Sealer and INCISE PU WB Sealer are water-based systems suitable for microcement surfaces." },
  { q: "What is the difference between polyurethane and acrylic sealers?", a: "Polyurethane sealers deliver higher abrasion resistance and long-term durability, making them ideal for residential and light commercial floors under regular foot traffic. Acrylic sealers such as INCISE 2K HR enhance colour depth and provide a durable protective film suitable for both interior and exterior decorative concrete applications." },
  { q: "What is a polyaspartic sealer?", a: "Polyaspartic coatings are advanced two-component protective sealers known for extremely fast curing times and high mechanical and chemical resistance. INCISE RapidShield is an aliphatic polyaspartic system delivering industrial-grade protection, making it ideal for commercial floors, restaurants, retail spaces and garages where rapid return to service is required." },
  { q: "Do microcement floors need to be sealed?", a: "Yes. Microcement is a porous mineral finish that requires sealing to achieve water resistance, stain resistance and long-term durability. Unsealed microcement will absorb moisture and contaminants, leading to staining and surface deterioration. Sealing is not optional — it is an integral part of every INCISE microcement system." },
  { q: "Which sealer is best for commercial floors in Uganda and Kenya?", a: "For commercial and high-traffic floors in East Africa, INCISE RapidShield polyaspartic sealer is the recommended specification. It provides industrial-grade protection with ultra-fast curing, UV stability and chemical resistance — proven performance for retail spaces, hospitality floors and showrooms across Uganda and Kenya." },
];

const benefitItems = [
  { icon: Shield, title: "Abrasion Resistance", desc: "Protects against foot traffic wear and surface degradation." },
  { icon: Droplets, title: "Water Protection", desc: "Prevents moisture penetration in wet areas and outdoor surfaces." },
  { icon: Sparkles, title: "Stain Resistance", desc: "Creates a barrier against oils, food and chemical stains." },
  { icon: Sun, title: "UV Stability", desc: "Maintains clarity and colour without yellowing under sunlight." },
  { icon: Wrench, title: "Easy Maintenance", desc: "Sealed surfaces are simple to clean and maintain long-term." },
  { icon: Palette, title: "Aesthetic Preservation", desc: "Enhances and locks in the natural beauty of mineral finishes." },
];

const whyIncisePoints = [
  "Designed for compatibility with INCISE microcement and decorative coating systems",
  "Tested across residential, commercial and hospitality projects in Uganda and Kenya",
  "Specified by professional applicators trained in the INCISE system",
  "Full technical data sheets and application guidance available",
  "Supported by INCISE technical team for project specification",
  "Manufacturer direct — consistent quality and supply assurance",
];

/* ── COMPONENTS ── */

const SealerCard = ({ product, delay = 0 }: { product: SealerProduct; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.75, delay }}
    className={`relative overflow-hidden ${product.featured ? "bg-charcoal text-white" : "bg-accent"}`}
  >
    {/* accent triangle */}
    <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-primary opacity-[0.08]" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

    <div className="p-8 md:p-10 flex flex-col h-full">
      <p className="text-[0.68rem] font-body tracking-[0.18em] uppercase text-primary mb-2" style={{ fontWeight: 500 }}>{product.type}</p>
      <h3 className="font-display text-2xl md:text-3xl mb-1" style={{ fontWeight: 400 }}>{product.name}</h3>
      <p className={`font-display italic text-sm mb-5 ${product.featured ? "text-sand" : "text-muted-foreground"}`}>{product.tagline}</p>
      <p className={`font-body text-[0.92rem] leading-[1.75] mb-7 ${product.featured ? "text-sand" : "text-secondary-foreground"}`} style={{ fontWeight: 300 }}>{product.desc}</p>

      <div className="grid grid-cols-2 gap-6 mb-7">
        <div>
          <p className="text-[0.68rem] font-body tracking-[0.15em] uppercase text-primary mb-2.5" style={{ fontWeight: 600 }}>Best For</p>
          <ul className="flex flex-col gap-1">
            {product.bestFor.map((item) => (
              <li key={item} className={`text-[0.85rem] font-body pl-3.5 relative ${product.featured ? "text-sand" : "text-secondary-foreground"}`} style={{ fontWeight: 300 }}>
                <span className="absolute left-0 text-primary text-xs">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] font-body tracking-[0.15em] uppercase text-primary mb-2.5" style={{ fontWeight: 600 }}>Key Benefits</p>
          <ul className="flex flex-col gap-1">
            {product.benefits.map((item) => (
              <li key={item} className={`text-[0.85rem] font-body pl-3.5 relative ${product.featured ? "text-sand" : "text-secondary-foreground"}`} style={{ fontWeight: 300 }}>
                <span className="absolute left-0 text-primary text-xs">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {product.badges.map((badge) => (
          <span key={badge} className={`text-[0.7rem] font-body tracking-[0.1em] uppercase px-3.5 py-1.5 ${product.featured ? "bg-white/[0.08] text-sand" : "bg-secondary text-secondary-foreground"}`} style={{ fontWeight: 500 }}>{badge}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const SealersPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "INCISE Sealer Systems",
      description: "Professional microcement and decorative concrete sealers including polyurethane, acrylic and polyaspartic systems by INCISE Uganda Limited.",
      numberOfItems: 4,
      itemListElement: [
        { "@type": "Product", position: 1, name: "INCISE WB Sealer", description: "Single component water-based sealer for decorative mineral coatings.", brand: { "@type": "Brand", name: "INCISE" }, category: "Water-Based Decorative Sealers" },
        { "@type": "Product", position: 2, name: "INCISE PU WB Sealer", description: "High-performance water-based polyurethane sealer for microcement floors.", brand: { "@type": "Brand", name: "INCISE" }, category: "Polyurethane Sealers" },
        { "@type": "Product", position: 3, name: "INCISE 2K HR Sealer", description: "Two-component solvent-based acrylic sealer for decorative concrete.", brand: { "@type": "Brand", name: "INCISE" }, category: "Acrylic Sealers" },
        { "@type": "Product", position: 4, name: "INCISE RapidShield", description: "Two-component aliphatic polyaspartic sealer with ultra-fast curing.", brand: { "@type": "Brand", name: "INCISE" }, category: "Polyaspartic Sealers" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Microcement & Concrete Sealers | INCISE Protection Systems"
        description="High-performance microcement and decorative concrete sealers from INCISE Uganda. Water-based polyurethane, acrylic and polyaspartic systems for residential and commercial floors across East Africa."
        canonical="https://incisesite.lovable.app/sealers"
        jsonLd={jsonLd as unknown as Record<string, unknown>}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-[76px] min-h-[100vh] bg-charcoal grid md:grid-cols-2 relative overflow-hidden">
        {/* Visual side */}
        <div className="relative bg-secondary-foreground/80 min-h-[300px] md:min-h-0 overflow-hidden">
          {/* Tile pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent calc(33.33% - 1.5px), rgba(26,24,22,0.6) calc(33.33% - 1.5px), rgba(26,24,22,0.6) 33.33%),
                repeating-linear-gradient(90deg, transparent, transparent calc(33.33% - 1.5px), rgba(26,24,22,0.6) calc(33.33% - 1.5px), rgba(26,24,22,0.6) 33.33%)
              `,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.12] via-transparent to-secondary-foreground/40" />
          <div className="absolute bottom-12 right-12 text-right z-10">
            <span className="block font-display italic text-[0.9rem] text-primary tracking-[0.04em]">Microcement Protection</span>
            <span className="block font-display italic text-[0.9rem] text-primary tracking-[0.04em]">East Africa</span>
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="flex items-center gap-3.5 mb-7"
          >
            <div className="w-9 h-px bg-primary" />
            <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Sealers & Protection Systems</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            style={{ fontWeight: 300 }}
          >
            Microcement &<br />
            <span className="italic text-gradient-gold">Decorative Concrete</span><br />
            Sealers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-white/50 font-body text-[1.05rem] leading-[1.8] mb-12 max-w-[440px]"
            style={{ fontWeight: 300 }}
          >
            Protect and enhance decorative mineral surfaces with INCISE professional sealers —
            engineered for microcement, decorative concrete and architectural coatings
            across residential and commercial environments in East Africa.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="grid grid-cols-3 gap-[3px] mb-12"
          >
            {[
              { num: "4", label: "Sealer Systems" },
              { num: "2", label: "Primer Types" },
              { num: "3", label: "Layer System" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/[0.04] border border-white/[0.06] px-4 py-5 text-center">
                <span className="block font-display text-3xl text-primary leading-none mb-1.5">{stat.num}</span>
                <span className="text-[0.7rem] font-body tracking-[0.12em] uppercase text-white/50">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 text-[0.78rem] font-body tracking-[0.14em] uppercase hover:bg-gold-light transition-colors" style={{ fontWeight: 500 }}>
              Request Consultation
            </a>
            <Link to="/technical" className="border border-white/20 text-white px-8 py-4 text-[0.78rem] font-body tracking-[0.14em] uppercase hover:border-primary hover:text-primary transition-colors" style={{ fontWeight: 500 }}>
              Technical Data Sheets
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY SEAL ── */}
      <section className="section-padding bg-accent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-px bg-primary" />
                <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Surface Protection</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5" style={{ fontWeight: 400 }}>
                Why Microcement and Decorative Concrete Must Be Sealed
              </h2>
              <div className="space-y-4">
                <p className="font-body text-secondary-foreground leading-[1.8]" style={{ fontWeight: 300 }}>
                  Microcement is a high-performance mineral finish. Like all cementitious surfaces, it is porous by nature. Without a protective sealer, microcement will absorb water, stains and contaminants — significantly reducing surface life and appearance.
                </p>
                <p className="font-body text-secondary-foreground leading-[1.8]" style={{ fontWeight: 300 }}>
                  A professional sealer transforms a decorative mineral surface into a durable, high-performance finish suitable for residential floors, wet areas and commercial environments.
                </p>
                <p className="font-body text-secondary-foreground leading-[1.8]" style={{ fontWeight: 300 }}>
                  INCISE sealers are formulated specifically for decorative mineral systems, preserving surface aesthetics while delivering long-term protection.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="grid grid-cols-2 gap-[3px]"
            >
              {benefitItems.map((b) => (
                <div key={b.title} className="bg-secondary p-6 relative">
                  <div className="absolute left-0 top-0 w-[3px] h-full bg-primary" />
                  <b.icon className="w-5 h-5 text-primary mb-3" />
                  <h4 className="text-[0.75rem] font-body tracking-[0.05em] uppercase text-secondary-foreground mb-1.5" style={{ fontWeight: 500 }}>{b.title}</h4>
                  <p className="text-[0.88rem] font-body text-muted-foreground leading-[1.5]" style={{ fontWeight: 300 }}>{b.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEALER SYSTEMS ── */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-primary" />
              <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Sealer Systems</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4" style={{ fontWeight: 400 }}>
              INCISE Protective Sealer Range
            </h2>
            <p className="font-body text-secondary-foreground max-w-[560px]" style={{ fontWeight: 300 }}>
              Four professional sealer systems covering every application — from interior decorative walls to high-traffic commercial floors.
            </p>
          </motion.div>

          {/* Water-Based */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="inline-block text-[0.7rem] font-body tracking-[0.18em] uppercase text-primary border border-primary px-3.5 py-1.5 mb-10" style={{ fontWeight: 500 }}>
              Water-Based Sealers
            </span>
            <div className="grid md:grid-cols-2 gap-[3px]">
              {waterBasedSealers.map((p, i) => (
                <SealerCard key={p.name} product={p} delay={i * 0.2} />
              ))}
            </div>
          </motion.div>

          {/* High Performance */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="inline-block text-[0.7rem] font-body tracking-[0.18em] uppercase text-primary border border-primary px-3.5 py-1.5 mb-10" style={{ fontWeight: 500 }}>
              Solvent-Based & High-Performance Sealers
            </span>
            <div className="grid md:grid-cols-2 gap-[3px]">
              {highPerfSealers.map((p, i) => (
                <SealerCard key={p.name} product={p} delay={i * 0.2} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRIMERS ── */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-primary" />
            <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Foundation Layer</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 400 }}>
            Primers for Decorative Concrete and Microcement
          </h2>
          <p className="font-body text-white/50 max-w-[600px] mb-14" style={{ fontWeight: 300 }}>
            Proper priming is the critical first step in every INCISE protective system. The right primer ensures maximum adhesion between the substrate and the decorative or protective coating above it.
          </p>

          <div className="grid md:grid-cols-2 gap-[3px]">
            {primers.map((primer, i) => (
              <motion.div
                key={primer.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.2 }}
                className="bg-white/[0.04] border border-white/[0.07] p-8 md:p-10 relative"
              >
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
                <p className="text-[0.68rem] font-body tracking-[0.18em] uppercase text-primary mb-3.5" style={{ fontWeight: 500 }}>{primer.type}</p>
                <h3 className="font-display text-xl md:text-2xl text-white mb-1.5" style={{ fontWeight: 400 }}>{primer.name}</h3>
                <p className="font-body text-white/50 text-[0.9rem] leading-[1.75] mb-5" style={{ fontWeight: 300 }}>{primer.desc}</p>
                <p className="text-[0.68rem] font-body tracking-[0.15em] uppercase text-primary mb-2" style={{ fontWeight: 600 }}>Suitable For</p>
                <ul className="flex flex-col">
                  {primer.suitableFor.map((item) => (
                    <li key={item} className="text-[0.85rem] font-body text-sand py-1.5 pl-4 relative border-t border-white/[0.05]" style={{ fontWeight: 300 }}>
                      <span className="absolute left-0 text-primary">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM LAYERS ── */}
      <section className="section-padding bg-accent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-primary" />
            <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Application System</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3" style={{ fontWeight: 400 }}>
            The INCISE Three-Layer Protection System
          </h2>
          <p className="font-body text-secondary-foreground max-w-[600px] mb-14" style={{ fontWeight: 300 }}>
            Every INCISE protective system follows a structured multi-layer approach to ensure maximum adhesion, durability and performance across the full service life of the surface.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
            {systemLayers.map((layer, i) => (
              <motion.div
                key={layer.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.1 }}
                className="bg-secondary p-7 relative"
              >
                <span className="absolute top-5 right-5 font-display text-5xl text-sand/30 leading-none">{layer.step}</span>
                <p className="text-[0.72rem] font-body tracking-[0.16em] uppercase text-primary mb-2" style={{ fontWeight: 500 }}>{layer.phase}</p>
                <h3 className="font-display text-lg text-foreground mb-2.5" style={{ fontWeight: 400 }}>{layer.title}</h3>
                <p className="font-body text-muted-foreground text-[0.85rem] leading-[1.6]" style={{ fontWeight: 300 }}>{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTION GUIDE ── */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-primary" />
            <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Selection Guide</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3" style={{ fontWeight: 400 }}>
            Choosing the Right INCISE Sealer
          </h2>
          <p className="font-body text-secondary-foreground max-w-[560px] mb-12" style={{ fontWeight: 300 }}>
            Use the guide below to specify the correct sealer system for your project application. Contact INCISE technical support for complex or specialist environments.
          </p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto">
            <table className="w-full text-[0.9rem] border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-6 py-4.5 text-left text-[0.72rem] font-body tracking-[0.15em] uppercase" style={{ fontWeight: 500 }}>Application</th>
                  <th className="px-6 py-4.5 text-left text-[0.72rem] font-body tracking-[0.15em] uppercase" style={{ fontWeight: 500 }}>Recommended Sealer</th>
                  <th className="px-6 py-4.5 text-left text-[0.72rem] font-body tracking-[0.15em] uppercase" style={{ fontWeight: 500 }}>System Type</th>
                  <th className="px-6 py-4.5 text-left text-[0.72rem] font-body tracking-[0.15em] uppercase" style={{ fontWeight: 500 }}>Environment</th>
                </tr>
              </thead>
              <tbody>
                {selectionGuide.map((row, i) => (
                  <tr key={i} className="border-b border-sand/30 hover:bg-accent transition-colors">
                    <td className="px-6 py-4.5 font-body text-secondary-foreground" style={{ fontWeight: 400 }}>{row.application}</td>
                    <td className="px-6 py-4.5">
                      <span className="inline-block bg-primary text-primary-foreground text-[0.72rem] font-body tracking-[0.08em] px-3 py-1" style={{ fontWeight: 500 }}>{row.sealer}</span>
                      {row.recommended && (
                        <span className="inline-block text-[0.68rem] font-body tracking-[0.1em] uppercase text-muted-foreground border border-muted-foreground px-2 py-0.5 ml-1.5">Recommended</span>
                      )}
                    </td>
                    <td className="px-6 py-4.5 font-body text-secondary-foreground" style={{ fontWeight: 300 }}>{row.system}</td>
                    <td className="px-6 py-4.5 font-body text-secondary-foreground" style={{ fontWeight: 300 }}>{row.env}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-accent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-primary" />
            <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Technical Questions</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3" style={{ fontWeight: 400 }}>
            Frequently Asked Questions
          </h2>
          <p className="font-body text-secondary-foreground max-w-[560px] mb-14" style={{ fontWeight: 300 }}>
            Common questions from architects, contractors and clients specifying microcement and decorative concrete sealer systems.
          </p>

          <div className="grid md:grid-cols-2 gap-[3px]">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: (i % 2) * 0.1 }}
                className="bg-secondary p-8 border-l-[3px] border-l-primary"
              >
                <h3 className="font-body text-[0.95rem] text-foreground mb-3.5 leading-[1.5]" style={{ fontWeight: 500 }}>{faq.q}</h3>
                <p className="font-body text-[0.88rem] text-secondary-foreground leading-[1.75]" style={{ fontWeight: 300 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INCISE ── */}
      <section className="section-padding bg-secondary-foreground/90">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-px bg-primary" />
                <span className="text-[0.72rem] font-body tracking-[0.2em] uppercase text-primary" style={{ fontWeight: 500 }}>Why INCISE</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 400 }}>
                Engineered for East African Construction
              </h2>
              <p className="font-body text-sand leading-[1.8] mb-8" style={{ fontWeight: 300 }}>
                INCISE sealers are not generic imported products. They are specified and developed for the decorative coating systems, climate conditions and construction environments of East Africa.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {whyIncisePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3.5 font-body text-[0.92rem] text-sand leading-[1.6]" style={{ fontWeight: 300 }}>
                    <span className="text-primary font-semibold shrink-0 mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <p className="text-[0.72rem] font-body tracking-[0.18em] uppercase text-primary mb-3.5" style={{ fontWeight: 500 }}>Related INCISE Systems</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Microcement Systems", href: "/products" },
                    { label: "Decorative Concrete", href: "/products" },
                    { label: "Wallcrete Plaster", href: "/products/wallcrete" },
                    { label: "Applicator Training", href: "/academy" },
                    { label: "Technical Data Sheets", href: "/technical" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-[0.75rem] font-body tracking-[0.08em] text-sand border border-white/15 px-3.5 py-1.5 hover:border-primary hover:text-primary transition-colors"
                      style={{ fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="bg-black/25 p-8 md:p-10 border-t-2 border-t-primary"
            >
              <h4 className="text-[0.72rem] font-body tracking-[0.18em] uppercase text-primary mb-3.5" style={{ fontWeight: 500 }}>About INCISE Uganda Limited</h4>
              <p className="font-body text-sand text-[0.9rem] leading-[1.75] mb-3.5" style={{ fontWeight: 300 }}>
                INCISE Uganda Limited is a manufacturer of decorative microcement coatings and protective sealers used in architectural and commercial construction projects across East Africa.
              </p>
              <p className="font-body text-sand text-[0.9rem] leading-[1.75]" style={{ fontWeight: 300 }}>
                Our product systems include microcement coatings, decorative wall finishes, floor hardeners and advanced protective sealers designed for modern architectural surfaces in Uganda, Kenya and the wider East African market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-3" style={{ fontWeight: 400 }}>
                Need Help Specifying the <span className="italic text-gradient-gold">Right Sealer</span>?
              </h2>
              <p className="font-body text-white/50 max-w-[480px]" style={{ fontWeight: 300 }}>
                Our trained applicators and technical team can help specify the correct sealer for your project environment, substrate and performance requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 text-[0.78rem] font-body tracking-[0.14em] uppercase hover:bg-gold-light transition-colors" style={{ fontWeight: 500 }}>
                Contact Technical Support
              </a>
              <Link to="/academy" className="border border-white/20 text-white px-8 py-4 text-[0.78rem] font-body tracking-[0.14em] uppercase hover:border-primary hover:text-primary transition-colors" style={{ fontWeight: 500 }}>
                Find an Applicator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SealersPage;
