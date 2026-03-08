import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Plus, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── DATA SHEETS ── */
const datasheets = [
  { type: "TDS · Walls & Floors", name: "Microtopping — Technical Data Sheet", desc: "Full specification including coverage rates, application thickness, substrate requirements, mixing ratios, cure times, and system overview.", meta: "PDF · Version 3.2 · Updated Jan 2025" },
  { type: "TDS · Decorative Walls", name: "Metallic Finish — Technical Data Sheet", desc: "Application method, substrate preparation, metallic pigment ratios, sealing requirements, and maintenance guidance.", meta: "PDF · Version 2.1 · Updated Oct 2024" },
  { type: "TDS · Textured Walls", name: "Wallcrete — Technical Data Sheet", desc: "Texture grades, mixing water ratios, primer compatibility, coverage per m², and weathering resistance data.", meta: "PDF · Version 1.8 · Updated Nov 2024" },
  { type: "TDS · Natural Walls", name: "Cemwash — Technical Data Sheet", desc: "Mineral composition, dilution ratios, breathability ratings, UV performance data, and recommended maintenance schedules.", meta: "PDF · Version 1.5 · Updated Aug 2024" },
  { type: "TDS · Outdoor System", name: "Patio System — Technical Data Sheet", desc: "Complete outdoor system specification: UV resistance data, slip ratings, tropical climate test results, installation sequence.", meta: "PDF · Version 2.3 · Updated Jan 2025" },
  { type: "TDS · Industrial Floors", name: "Color Hardener — Technical Data Sheet", desc: "Dry-shake application method, broadcasting rates, concrete strength requirements, abrasion test results.", meta: "PDF · Version 1.9 · Updated Dec 2024" },
];

/* ── SPEC EXPLORER ── */
interface SpecRow { key: string; value: string }
interface ProductSpec {
  id: string;
  name: string;
  sub: string;
  tagline: string;
  desc: string;
  rows: SpecRow[];
  video: { title: string; duration: string };
}

const specProducts: ProductSpec[] = [
  {
    id: "micro", name: "Microtopping", sub: "Walls & Floors",
    tagline: "Ultra-thin seamless surface system for walls and floors",
    desc: "INCISE Microtopping is a polymer-modified cementitious coating system applied in 1–3mm layers. Compatible with most sound, stable substrates — provides a seamless, waterproof, and highly durable decorative finish.",
    rows: [
      { key: "Product Type", value: "Polymer-modified cementitious microcement" },
      { key: "Application Thickness", value: "1–3mm total system (2 coats minimum)" },
      { key: "Coverage Rate", value: "Approx. 0.8–1.2 kg/m² per coat" },
      { key: "Pot Life", value: "30–45 minutes at 25°C" },
      { key: "Recoat Time", value: "Minimum 6 hours between coats" },
      { key: "Full Cure", value: "28 days to full strength" },
      { key: "Compressive Strength", value: "> 25 MPa" },
      { key: "Bond Strength", value: "> 1.5 N/mm²" },
      { key: "Abrasion Class", value: "AR1 — highest class (with correct sealer)" },
      { key: "Slip Rating", value: "R10 standard · R11 with anti-slip sealer" },
      { key: "Suitable Substrates", value: "Concrete, cement screed, ceramic tiles (sound), existing microcement, gypsum board (with primer)" },
      { key: "Application Method", value: "Stainless steel trowel — certified applicators only" },
      { key: "Sealer System", value: "INCISE Microtek Sealer (matte, satin, or gloss). Mandatory for wet areas." },
      { key: "Temperature Range", value: "5°C – 35°C during application and curing" },
      { key: "Colour Range", value: "80+ standard tones · Custom tones on request" },
      { key: "Packaging", value: "5kg and 20kg bags" },
      { key: "Shelf Life", value: "12 months in original sealed packaging, stored dry" },
    ],
    video: { title: "How to Apply Microtopping — Step by Step", duration: "12:30" },
  },
  {
    id: "metallic", name: "Metallic Finish", sub: "Decorative Walls",
    tagline: "Dimensional metallic wall coating for feature surfaces",
    desc: "Decorative wall coating incorporating fine metallic pigments in a polymer-acrylic binder. Applied in multiple thin layers to create dimensional depth and a surface that responds dynamically to light conditions.",
    rows: [
      { key: "Product Type", value: "Metallic pigment in polymer-acrylic binder" },
      { key: "Application Thickness", value: "1–2mm total" },
      { key: "Coverage Rate", value: "Approx. 0.5–0.8 kg/m²" },
      { key: "Application Method", value: "Trowel and brush — decorative technique" },
      { key: "Suitable Surfaces", value: "Interior walls — prepared plaster or concrete" },
      { key: "Sealer Required", value: "Yes — INCISE clear wax or matte varnish sealer" },
      { key: "Dry Time Between Coats", value: "4–6 hours at 25°C" },
      { key: "Full Cure", value: "7 days" },
      { key: "Available Tones", value: "Champagne Gold, Antique Copper, Brushed Silver, Aged Bronze, Midnight Blue, Rose Copper" },
      { key: "Not Suitable For", value: "Wet areas, outdoor applications, floors" },
    ],
    video: { title: "Metallic Finish Application Guide", duration: "8:00" },
  },
  {
    id: "wallcrete", name: "Wallcrete", sub: "Textured Walls",
    tagline: "Textured cementitious wall coating — indoor and outdoor",
    desc: "Cementitious wall coating with texture aggregates available in fine, medium, and coarse grades for creating raw concrete aesthetics.",
    rows: [
      { key: "Product Type", value: "Cementitious wall coating with texture aggregates" },
      { key: "Texture Grades", value: "Fine (F), Medium (M), Coarse (C)" },
      { key: "Coverage Rate", value: "3–4 m²/kg depending on texture grade" },
      { key: "Application Method", value: "Trowel — float finish technique" },
      { key: "Application", value: "Indoor and outdoor walls" },
      { key: "Sealer Required", value: "Yes — for outdoor and wet areas" },
      { key: "Compressive Strength", value: "> 20 MPa" },
      { key: "Colours", value: "25 standard tones" },
      { key: "Recoat Time", value: "8 hours minimum" },
      { key: "Full Cure", value: "14 days" },
    ],
    video: { title: "Wallcrete Application Guide — Full Process", duration: "9:20" },
  },
  {
    id: "cemwash", name: "Cemwash", sub: "Natural Finish",
    tagline: "Breathable mineral wall wash — natural organic character",
    desc: "Mineral-based breathable wall wash producing warm, organic tones with natural variation.",
    rows: [
      { key: "Product Type", value: "Mineral-based breathable wall wash" },
      { key: "Application Method", value: "Brush or roller — wash technique" },
      { key: "Coverage Rate", value: "Approx. 6–8 m²/L" },
      { key: "Breathability", value: "Sd < 0.3m — highly breathable" },
      { key: "Application", value: "Interior and exterior walls" },
      { key: "Suitable Substrates", value: "Plaster, masonry, concrete block, existing painted surfaces" },
      { key: "Dry Time", value: "2–3 hours between coats" },
      { key: "Recommended Coats", value: "2–3 coats for full effect" },
      { key: "Colour Variation", value: "Natural organic variation expected — characteristic of product" },
    ],
    video: { title: "How to Apply Cemwash — Natural Wall Finish", duration: "6:00" },
  },
  {
    id: "patio", name: "Patio System", sub: "Outdoor Floors",
    tagline: "Complete outdoor floor system — tropics-rated",
    desc: "Full outdoor coating system engineered for East African climate conditions with UV stability and anti-slip properties.",
    rows: [
      { key: "System Components", value: "INCISE Patio Primer + Basecoat + Topcoat + Microtek Exterior Sealer" },
      { key: "UV Stability", value: "High — tested at equatorial UV intensity" },
      { key: "Slip Resistance", value: "R11 — anti-slip standard aggregate" },
      { key: "Waterproof", value: "Yes — full system" },
      { key: "Suitable For", value: "Pool decks, patios, garden terraces, driveways, rooftops" },
      { key: "Minimum Concrete Strength", value: "C25/30" },
      { key: "Temperature Range (Use)", value: "−5°C to 80°C" },
      { key: "Cure Time Before Use", value: "72 hours foot traffic · 7 days vehicle traffic" },
      { key: "Colour Range", value: "18 outdoor UV-stable tones" },
      { key: "Expected Lifespan", value: "15+ years with proper maintenance" },
    ],
    video: { title: "INCISE Patio System — Complete Application Guide", duration: "14:00" },
  },
  {
    id: "hardener", name: "Color Hardener", sub: "Industrial Floors",
    tagline: "Dry-shake colour hardener for industrial and commercial floors",
    desc: "High-performance dry-shake surface hardener with integrated pigment for commercial and industrial concrete floors.",
    rows: [
      { key: "Product Type", value: "Dry-shake surface hardener with pigment" },
      { key: "Application Method", value: "Broadcast onto fresh concrete — power-trowel finish" },
      { key: "Application Rate", value: "5–6 kg/m² standard · 4–5 kg/m² light duty" },
      { key: "Minimum Concrete Slab", value: "C25/30 minimum, 100mm minimum thickness" },
      { key: "Abrasion Resistance", value: "BCA Class 1 — heavy industrial" },
      { key: "Compressive Strength Increase", value: "20–40% improvement on slab surface" },
      { key: "Sealer Required", value: "Yes — INCISE Floor Sealer after 28-day cure" },
      { key: "Colours Available", value: "40+ including custom matching" },
    ],
    video: { title: "Color Hardener — Full Commercial Floor Process", duration: "10:30" },
  },
];

/* ── HOW-TO VIDEOS ── */
const videos = [
  { cat: "Full System · Master Guide", title: "Complete Microtopping System — Substrate to Final Seal", dur: "22:00", wide: true, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80" },
  { cat: "Step 1 · Foundation", title: "Surface Preparation — Why It Matters Most", dur: "8:15", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75" },
  { cat: "Step 2 · Priming", title: "Primer Application — Getting the Foundation Right", dur: "6:40", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=75" },
  { cat: "Step 3 · Basecoat", title: "Basecoat — Thickness Control & Trowel Technique", dur: "9:50", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=75" },
  { cat: "Step 4 · Sanding", title: "Sanding Between Coats — Perfect Finish", dur: "5:30", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=75" },
  { cat: "Step 5 · Sealing", title: "Sealing — Protecting Your Work", dur: "5:20", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&q=75" },
  { cat: "Troubleshooting", title: "Common Mistakes — What Not To Do", dur: "7:45", img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=500&q=75" },
  { cat: "Maintenance", title: "Surface Care — Long-Term Maintenance Guide", dur: "4:10", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=75" },
];

/* ── FAQ ── */
const faqs = [
  { q: "Can Microtopping be applied over existing tiles without removing them?", a: "Yes — this is one of the primary advantages of Microtopping. It can be applied directly over ceramic, porcelain, or natural stone tiles provided they are sound (no hollow or loose tiles), clean, and correctly primed. The total added thickness of 1–3mm is minimal and typically does not affect door clearances." },
  { q: "Is Microtopping suitable for wet areas like showers and bathrooms?", a: "Yes, with the correct sealer system. Microtopping itself is not inherently waterproof — waterproofing is achieved through the sealer coat. INCISE Microtek Sealer, applied in a minimum of 3 coats, creates a fully waterproof surface suitable for continuous water exposure." },
  { q: "How does Microtopping compare to polished concrete in terms of cost and process?", a: "Polished concrete requires a proper concrete slab and a grinding/polishing process. Microtopping can be applied to almost any substrate, including over existing finishes, making it faster and often more cost-effective for renovation projects." },
  { q: "What is the minimum substrate strength required before applying INCISE products?", a: "For Microtopping on concrete floors, we require a minimum C25/30 concrete compressive strength with no active cracking, moisture below 4% (measured with CM method), and a tensile bond strength exceeding 1.0 N/mm²." },
  { q: "Who can apply INCISE products? Can any contractor use them?", a: "Microtopping and most INCISE systems require application by an INCISE-Certified Applicator. This is not a restriction — it's how we protect quality. INCISE Academy runs regular certification programmes. Contact us to find a certified applicator." },
  { q: "What is the lead time from order to project start?", a: "Standard products are typically available within 3–5 working days. Custom colours require 7–14 working days. For large projects, we recommend lead times of at least 2–3 weeks for sample approval, quantity confirmation, and scheduling." },
];

const revealProps = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: [0, 0, 0.2, 1] as const },
};

const TechnicalPage = () => {
  const [activeSpec, setActiveSpec] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const spec = specProducts[activeSpec];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── DARK HERO ── */}
      <section className="bg-dark pt-[140px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div {...revealProps}>
            <div className="flex items-center gap-2.5 mb-5">
              <Link to="/" className="text-[0.6rem] tracking-[0.18em] uppercase text-white/30 hover:text-white/50 transition-colors font-body">Home</Link>
              <span className="text-white/20 text-xs">›</span>
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-primary font-body">Technical Hub</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.98] text-white mb-5" style={{ fontWeight: 300 }}>
              Technical<br /><em className="italic text-white/45">Resources.</em>
            </h1>
            <p className="text-white/45 text-[0.95rem] max-w-[560px] leading-[1.88] font-body" style={{ fontWeight: 300 }}>
              Data sheets, specification guides, how-to videos, and expert answers for architects, designers, and certified applicators. Everything you need to specify and apply INCISE correctly.
            </p>
            <div className="flex flex-wrap gap-[3px] mt-10">
              {[
                { label: "Data Sheets", href: "#datasheets" },
                { label: "Product Specs", href: "#specs" },
                { label: "How-To Videos", href: "#howto" },
                { label: "FAQ", href: "#faq" },
              ].map((j) => (
                <a
                  key={j.label}
                  href={j.href}
                  className="flex items-center gap-2 px-5 py-3 border border-white/10 text-[0.64rem] tracking-[0.14em] uppercase text-white/50 font-body hover:border-primary hover:text-primary transition-colors"
                >
                  ↓ {j.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DATA SHEETS ── */}
      <section id="datasheets" className="py-20 md:py-[88px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div {...revealProps}>
            <p className="label-text mb-3">Downloads</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] text-foreground mb-4" style={{ fontWeight: 300 }}>
              Technical Data <em className="italic text-muted-foreground">Sheets</em>
            </h2>
            <p className="text-muted-foreground text-[0.9rem] max-w-[560px] leading-[1.88] font-body mb-12" style={{ fontWeight: 300 }}>
              Full technical specifications for every INCISE product. Download for project documentation or specification scheduling.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="grid md:grid-cols-3 gap-[2px]">
            {datasheets.map((ds, i) => (
              <div
                key={i}
                className="bg-card p-8 flex flex-col gap-4 relative overflow-hidden group hover:-translate-y-[3px] transition-all duration-300 border-l-[3px] border-muted hover:border-primary hover:bg-secondary"
              >
                <p className="text-[0.58rem] tracking-[0.2em] uppercase text-primary font-body">{ds.type}</p>
                <h3 className="font-display text-[1.15rem] text-foreground leading-[1.15]" style={{ fontWeight: 400 }}>{ds.name}</h3>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] font-body" style={{ fontWeight: 300 }}>{ds.desc}</p>
                <p className="text-[0.65rem] tracking-[0.1em] text-muted-foreground/70 font-body">{ds.meta}</p>
                <a href="#" className="mt-auto inline-flex items-center gap-2 text-[0.64rem] tracking-[0.14em] uppercase text-secondary-foreground font-body border-b border-border pb-0.5 w-fit hover:border-foreground hover:gap-3.5 transition-all">
                  Download PDF <span>→</span>
                </a>
              </div>
            ))}
          </motion.div>

          <motion.div {...revealProps} className="mt-7">
            <a href="#" className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
              <Download size={14} /> Download Complete Technical Catalogue (2025)
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SPEC EXPLORER ── */}
      <section id="specs" className="py-20 md:py-[88px] bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div {...revealProps}>
            <p className="label-text mb-3">Specification Explorer</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] text-foreground mb-4" style={{ fontWeight: 300 }}>
              Full Product <em className="italic text-muted-foreground">Specifications</em>
            </h2>
            <p className="text-muted-foreground text-[0.9rem] max-w-[560px] leading-[1.88] font-body mb-12" style={{ fontWeight: 300 }}>
              Select a product to view its complete technical specification. Use these data for design documentation, specification schedules, and project BOQs.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="grid md:grid-cols-[220px_1fr] border border-border overflow-hidden">
            {/* Tabs */}
            <div className="bg-dark">
              {specProducts.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveSpec(i)}
                  className={`w-full flex items-center gap-3 px-6 py-4.5 border-b border-white/[0.04] transition-colors text-left ${
                    activeSpec === i ? "bg-white/[0.09]" : "hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity ${
                    activeSpec === i ? "bg-primary opacity-100" : "opacity-0"
                  }`} />
                  <div>
                    <p className={`font-display text-[0.95rem] transition-colors ${
                      activeSpec === i ? "text-white" : "text-white/60"
                    }`} style={{ fontWeight: 400 }}>{p.name}</p>
                    <p className="text-[0.56rem] tracking-[0.14em] uppercase text-white/25 mt-0.5 font-body">{p.sub}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={spec.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10"
              >
                <h3 className="font-display text-[1.8rem] text-foreground mb-2" style={{ fontWeight: 300 }}>{spec.name}</h3>
                <p className="font-display italic text-primary text-[0.92rem] mb-5">{spec.tagline}</p>
                <p className="text-secondary-foreground text-[0.85rem] leading-[1.9] mb-7 font-body" style={{ fontWeight: 300 }}>{spec.desc}</p>

                <div className="border-t border-border">
                  {spec.rows.map((row, i) => (
                    <div key={i} className="grid grid-cols-[180px_1fr] md:grid-cols-[200px_1fr] py-3.5 border-b border-border/50">
                      <span className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-foreground font-body" style={{ fontWeight: 400 }}>{row.key}</span>
                      <span className="text-[0.85rem] text-secondary-foreground font-body">{row.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setVideoModal(spec.video.title)}
                  className="mt-6 flex items-center gap-3 group"
                >
                  <span className="w-11 h-11 bg-primary rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:scale-[1.08] transition-all">
                    <Play size={12} className="text-primary-foreground ml-0.5" fill="currentColor" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] tracking-[0.1em] uppercase text-secondary-foreground font-body" style={{ fontWeight: 400 }}>Watch Application Video</span>
                    <span className="block text-[0.75rem] text-muted-foreground font-body">{spec.video.title} · {spec.video.duration}</span>
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── HOW-TO VIDEOS ── */}
      <section id="howto" className="py-20 md:py-[88px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div {...revealProps}>
            <p className="label-text mb-3">Video Library</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] text-foreground mb-4" style={{ fontWeight: 300 }}>
              Step-by-Step <em className="italic text-muted-foreground">How-To Videos</em>
            </h2>
            <p className="text-muted-foreground text-[0.9rem] max-w-[560px] leading-[1.88] font-body mb-12" style={{ fontWeight: 300 }}>
              Watch before you apply. Our technical video library covers every step — from surface preparation through to final sealing and maintenance.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
            {videos.map((v, i) => (
              <div
                key={i}
                onClick={() => setVideoModal(v.title)}
                className={`relative overflow-hidden cursor-pointer aspect-[4/3] bg-dark group ${v.wide ? "md:col-span-2" : ""}`}
              >
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover brightness-[0.72] group-hover:brightness-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 border border-white/55 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <Play size={14} className="text-white ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-foreground/90 to-transparent">
                  <p className="text-[0.54rem] tracking-[0.18em] uppercase text-primary font-body">{v.cat}</p>
                  <p className="font-display text-white text-[0.88rem] leading-[1.2]" style={{ fontWeight: 400 }}>{v.title}</p>
                  <p className="text-white/40 text-[0.6rem] font-body mt-0.5">⏱ {v.dur}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-[88px] bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-20 items-start">
            <motion.div {...revealProps}>
              <p className="label-text mb-3">Technical FAQ</p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] text-foreground leading-[1.04]" style={{ fontWeight: 300 }}>
                Questions<br />Architects<br /><em className="italic text-muted-foreground">Actually Ask</em>
              </h2>
              <p className="text-muted-foreground text-[0.88rem] leading-[1.9] font-body mt-5" style={{ fontWeight: 300 }}>
                Can't find your answer here? Our technical team responds within one business day to specification enquiries from architects and designers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body mt-8 hover:bg-gold-light transition-colors"
              >
                Ask a Technical Question →
              </a>
            </motion.div>

            <motion.div {...revealProps}>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex justify-between items-center py-5 gap-5 text-left"
                  >
                    <span className="text-[0.92rem] text-foreground font-body" style={{ fontWeight: 400 }}>{faq.q}</span>
                    <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                      openFaq === i ? "bg-primary text-primary-foreground rotate-45" : "bg-muted text-secondary-foreground"
                    }`}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground text-[0.84rem] leading-[1.9] font-body pb-5" style={{ fontWeight: 300 }}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPEC REQUEST CTA ── */}
      <section className="py-20 bg-muted text-center">
        <motion.div {...revealProps} className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] text-foreground mb-3" style={{ fontWeight: 300 }}>
            Need a <em className="italic text-muted-foreground">custom specification?</em>
          </h2>
          <p className="text-secondary-foreground text-[0.9rem] max-w-[440px] mx-auto leading-[1.85] font-body mb-9" style={{ fontWeight: 300 }}>
            Our technical team prepares specification documents for architects and project managers. Send us your project details and we'll return a complete specification schedule within 48 hours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2.5 bg-foreground text-background px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-secondary-foreground transition-colors">
              Request a Specification →
            </a>
            <a href="#" className="inline-flex items-center gap-2.5 border border-border text-secondary-foreground px-7 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
              ↓ Full Catalogue
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/93 z-[3000] flex items-center justify-center"
            onClick={() => setVideoModal(null)}
          >
            <div className="w-[min(960px,92vw)] relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setVideoModal(null)}
                className="absolute -top-11 right-0 text-white/50 hover:text-white text-[0.7rem] tracking-[0.12em] uppercase font-body transition-colors"
              >
                ✕ Close
              </button>
              <div className="w-full aspect-video bg-dark flex items-center justify-center p-12 text-center">
                <div>
                  <p className="font-display text-white/80 text-[1.3rem] mb-2" style={{ fontWeight: 300 }}>{videoModal}</p>
                  <p className="font-display italic text-white/40 text-[1.1rem] leading-[1.8]">
                    Video plays from your YouTube or Vimeo channel.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnicalPage;
