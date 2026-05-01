import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Shield, Building2, Home, Layers, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

interface WPProduct {
  type: string;
  name: string;
  tagline: string;
  desc: string;
  bestFor: string[];
  benefits: string[];
  badges: string[];
  featured?: boolean;
}

const cementitiousSystems: WPProduct[] = [
  {
    type: "Cementitious · Two Component · Flexible",
    name: "INCISE FlexiSeal 2K",
    tagline: "Flexible Cementitious Waterproofing Membrane",
    desc: "A two-component flexible cementitious waterproofing system designed for wet areas, terraces and substrates subject to thermal movement. Bridges hairline cracks and creates a continuous seamless membrane bonded directly to the substrate.",
    bestFor: ["Bathrooms & wet rooms", "Balconies & terraces", "Swimming pool shells", "Water tanks", "Planter boxes"],
    benefits: ["Crack bridging", "Excellent adhesion", "Vapour permeable", "Potable water safe", "Tile-over compatible"],
    badges: ["Recommended", "Tile-Over"],
    featured: true,
  },
  {
    type: "Cementitious · Single Component · Rigid",
    name: "INCISE CrystalSeal",
    tagline: "Crystalline Capillary Waterproofing",
    desc: "A single-component crystalline waterproofing slurry that penetrates concrete and reacts with free lime to form insoluble crystals within the capillary network — sealing the substrate against water under positive and negative pressure.",
    bestFor: ["Basements", "Lift pits", "Retaining walls", "Foundation slabs", "Below-grade structures"],
    benefits: ["Negative-side waterproofing", "Self-healing micro-cracks", "Permanent integral seal", "No membrane required"],
    badges: ["Negative Side", "Below Grade"],
  },
];

const liquidMembranes: WPProduct[] = [
  {
    type: "Polyurethane · Liquid Applied",
    name: "INCISE PU LiquidMembrane",
    tagline: "Seamless Polyurethane Waterproof Membrane",
    desc: "A high-elastomeric, single-component polyurethane liquid membrane that cures to form a fully bonded, seamless waterproof layer with outstanding elongation and weather resistance — ideal for exposed roofs and complex geometries.",
    bestFor: ["Flat roofs", "Roof terraces", "Gutters & flashings", "Complex detailing", "Green roof underlays"],
    benefits: ["Up to 600% elongation", "UV stable", "Seamless application", "Cold-applied", "Excellent weathering"],
    badges: ["UV Stable", "Exposed"],
    featured: true,
  },
  {
    type: "Acrylic · Water-Based · Reinforced",
    name: "INCISE AcryShield",
    tagline: "Reinforced Acrylic Roof Coating",
    desc: "A water-based, fibre-reinforced acrylic waterproofing coating designed for refurbishment and protection of existing roofs, parapets and external walls. Reflective white finish reduces surface temperature.",
    bestFor: ["Roof refurbishment", "Parapets", "External walls", "Light-traffic terraces"],
    benefits: ["Reflective white finish", "Fibre reinforced", "Easy roller application", "Low VOC", "Cost effective"],
    badges: ["Low VOC", "Reflective"],
  },
];

const bituminous: { type: string; name: string; desc: string; suitableFor: string[] }[] = [
  {
    type: "Bituminous · Liquid Applied",
    name: "INCISE BituShield",
    desc: "A solvent-free bituminous emulsion for damp-proofing foundations, retaining walls and structural elements in contact with soil. Brush, roller or spray applied.",
    suitableFor: ["Foundation tanking", "Retaining walls", "DPC barriers", "Buried structures"],
  },
  {
    type: "Self-Adhesive · Membrane Sheet",
    name: "INCISE SBS Membrane",
    desc: "An SBS-modified self-adhesive bituminous membrane sheet for high-performance waterproofing of roofs, podiums and below-grade structures where mechanical protection is required.",
    suitableFor: ["Podium decks", "Tanking", "Industrial roofs", "Tunnel structures"],
  },
];

const applications = [
  { icon: Home, title: "Wet Areas", desc: "Bathrooms, kitchens, laundries — bonded membranes ready for tile or microcement overlay." },
  { icon: Building2, title: "Roofs & Terraces", desc: "Exposed and trafficable roof systems with UV-stable seamless membranes." },
  { icon: Layers, title: "Below Grade", desc: "Basements, lift pits and foundations protected with crystalline and bituminous tanking." },
  { icon: Droplets, title: "Water Retention", desc: "Pools, tanks and planters — potable-water-safe systems with full chemical compliance." },
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`section-padding ${className}`}>
    <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">{children}</div>
  </section>
);

const ProductCard = ({ p }: { p: WPProduct }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-card border ${p.featured ? "border-primary" : "border-border"} p-8 md:p-10 relative`}
  >
    {p.featured && (
      <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-[0.55rem] tracking-[0.24em] uppercase px-3 py-1 font-body" style={{ fontWeight: 500 }}>
        Featured System
      </span>
    )}
    <p className="text-[0.6rem] tracking-[0.24em] uppercase font-body text-primary mb-3" style={{ fontWeight: 500 }}>{p.type}</p>
    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2" style={{ fontWeight: 300 }}>{p.name}</h3>
    <p className="font-body text-sm text-muted-foreground italic mb-5">{p.tagline}</p>
    <p className="font-body text-sm text-secondary-foreground leading-[1.85] mb-6" style={{ fontWeight: 300 }}>{p.desc}</p>

    <div className="grid sm:grid-cols-2 gap-6 mb-6">
      <div>
        <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-muted-foreground mb-3" style={{ fontWeight: 500 }}>Best For</p>
        <ul className="space-y-1.5">
          {p.bestFor.map((b) => (
            <li key={b} className="font-body text-xs text-secondary-foreground flex gap-2"><span className="text-primary">·</span>{b}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-muted-foreground mb-3" style={{ fontWeight: 500 }}>Key Benefits</p>
        <ul className="space-y-1.5">
          {p.benefits.map((b) => (
            <li key={b} className="font-body text-xs text-secondary-foreground flex gap-2"><CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />{b}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {p.badges.map((b) => (
        <span key={b} className="text-[0.55rem] tracking-[0.2em] uppercase font-body bg-secondary text-secondary-foreground px-2.5 py-1" style={{ fontWeight: 500 }}>{b}</span>
      ))}
    </div>
  </motion.div>
);

const WaterproofingPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "INCISE Waterproofing Systems",
    "itemListElement": [...cementitiousSystems, ...liquidMembranes].map((p, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": p.name,
      "description": p.desc,
      "brand": { "@type": "Brand", "name": "INCISE" },
    })),
  };

  return (
    <>
      <SEOHead
        title="Waterproofing Systems | INCISE Technical Solutions"
        description="Professional waterproofing systems — cementitious membranes, liquid-applied PU, crystalline and bituminous. For wet areas, roofs, basements and water-retaining structures."
        canonical="/waterproofing"
        jsonLd={jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-[140px] pb-24 md:pt-[180px] md:pb-32 bg-charcoal text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 30%, hsl(var(--primary)/0.4), transparent 50%), radial-gradient(circle at 75% 70%, hsl(var(--primary)/0.25), transparent 50%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase font-body text-primary mb-6" style={{ fontWeight: 500 }}>
            Technical Solutions · Waterproofing
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl" style={{ fontWeight: 300 }}>
            Waterproofing systems built for <span className="italic text-gradient-gold">East Africa.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 max-w-3xl leading-[1.7]" style={{ fontWeight: 300 }}>
            From bathrooms to basements, terraces to tanks — a complete range of cementitious membranes,
            liquid-applied polyurethanes and crystalline waterproofing engineered for tropical climates and
            specified by professionals.
          </p>
        </div>
      </section>

      {/* Why Waterproof */}
      <Section className="bg-background">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="label-text mb-4">WHY IT MATTERS</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6" style={{ fontWeight: 300 }}>
              Water is the single biggest cause of building failure.
            </h2>
            <p className="font-body text-secondary-foreground leading-[1.95] mb-4" style={{ fontWeight: 300 }}>
              In East Africa's tropical climate — heavy rainfall, high humidity, thermal cycling at altitude —
              waterproofing isn't an upgrade. It's the foundation of everything that comes after.
            </p>
            <p className="font-body text-secondary-foreground leading-[1.95]" style={{ fontWeight: 300 }}>
              The wrong system, or the right system poorly applied, leads to efflorescence, debonding, mould,
              structural damage, and costly remedial work. INCISE waterproofing systems are specified by
              membrane type, substrate, and exposure — never as a one-size-fits-all afterthought.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[2px]">
            {applications.map((a) => (
              <div key={a.title} className="bg-card p-6">
                <a.icon size={22} className="text-primary mb-3" />
                <p className="font-display text-lg text-foreground mb-2" style={{ fontWeight: 400 }}>{a.title}</p>
                <p className="font-body text-xs text-muted-foreground leading-[1.7]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cementitious Systems */}
      <Section className="bg-secondary">
        <div className="text-center mb-14">
          <p className="label-text mb-4">CEMENTITIOUS WATERPROOFING</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
            Bonded membranes for wet areas <span className="italic text-gradient-gold">& below grade.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cementitiousSystems.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </Section>

      {/* Liquid Membranes */}
      <Section className="bg-background">
        <div className="text-center mb-14">
          <p className="label-text mb-4">LIQUID-APPLIED MEMBRANES</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
            Seamless protection for <span className="italic text-gradient-gold">roofs & terraces.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {liquidMembranes.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </Section>

      {/* Bituminous & Sheet */}
      <Section className="bg-secondary">
        <div className="mb-12">
          <p className="label-text mb-4">BITUMINOUS & SHEET SYSTEMS</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground" style={{ fontWeight: 300 }}>
            Heavy-duty tanking <span className="italic text-gradient-gold">& sheet membranes.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-[2px]">
          {bituminous.map((p) => (
            <div key={p.name} className="bg-card p-8">
              <p className="text-[0.6rem] tracking-[0.24em] uppercase font-body text-primary mb-3" style={{ fontWeight: 500 }}>{p.type}</p>
              <h3 className="font-display text-2xl text-foreground mb-3" style={{ fontWeight: 300 }}>{p.name}</h3>
              <p className="font-body text-sm text-secondary-foreground leading-[1.85] mb-5" style={{ fontWeight: 300 }}>{p.desc}</p>
              <ul className="space-y-1.5">
                {p.suitableFor.map((s) => (
                  <li key={s} className="font-body text-xs text-secondary-foreground flex gap-2"><CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-charcoal text-white">
        <div className="text-center max-w-3xl mx-auto">
          <Shield size={32} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6" style={{ fontWeight: 300 }}>
            Specifying waterproofing for a project?
          </h2>
          <p className="font-body text-white/70 leading-[1.85] mb-8" style={{ fontWeight: 300 }}>
            Talk to our technical team about substrate compatibility, system selection,
            and certified application across Uganda, Kenya and the wider region.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
              Request a specification →
            </a>
            <Link to="/sealers" className="border border-white/30 text-white px-8 py-4 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-white transition-colors">
              View Sealers & Protection →
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default WaterproofingPage;
