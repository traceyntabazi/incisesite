import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Eye, Layers, Sparkles, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import ColourPreview from "@/components/colours/ColourPreview";
import {
  microColours,
  colourRanges,
  rangeDescriptions,
  type ColourRange,
  type MicroColour,
} from "@/components/colours/ColourData";

/* ── Textured swatch card ── */
const ColourCard = ({ colour, onClick }: { colour: MicroColour; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="group text-left"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    layout
  >
    <div
      className="aspect-square w-full mb-3 border border-border/30 transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02] relative overflow-hidden"
      style={{ backgroundColor: colour.hex }}
    >
      {/* SVG noise overlay for microcement texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.09'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
      {/* Subtle trowel-mark overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.012 0.04' numOctaves='2' seed='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />
      {/* Hover eye icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: isLightColor(colour.hex) ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)",
          }}
        >
          <Eye size={16} style={{ color: isLightColor(colour.hex) ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.7)" }} />
        </div>
      </div>
    </div>
    <p className="font-display text-base text-foreground" style={{ fontWeight: 400 }}>
      {colour.name}
    </p>
    <p className="text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground font-body mt-0.5">
      {colour.hex.toUpperCase()}
    </p>
  </motion.button>
);

/* ── Range section with its colours ── */
const RangeSection = ({
  range,
  colours,
  onSelect,
}: {
  range: ColourRange;
  colours: MicroColour[];
  onSelect: (c: MicroColour) => void;
}) => {
  const info = rangeDescriptions[range];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-8 h-[1px] mt-3" style={{ backgroundColor: "hsl(var(--caramel))" }} />
        <div>
          <p className="label-text text-[10px] mb-1">{info.subtitle}</p>
          <h3 className="font-display text-2xl md:text-3xl text-foreground" style={{ fontWeight: 300 }}>
            {info.title}
          </h3>
          <p className="font-body text-sm text-secondary-foreground leading-[1.85] mt-2 max-w-[500px]" style={{ fontWeight: 300 }}>
            {info.description}
          </p>
        </div>
      </div>

      {/* Colour strip — full width preview */}
      <div className="flex gap-[2px] h-3 mb-6">
        {colours.map((c) => (
          <div
            key={c.id}
            className="flex-1 relative overflow-hidden cursor-pointer hover:flex-[2] transition-all duration-300"
            style={{ backgroundColor: c.hex }}
            onClick={() => onSelect(c)}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-3 gap-y-6">
        {colours.map((c) => (
          <ColourCard key={c.id} colour={c} onClick={() => onSelect(c)} />
        ))}
      </div>
    </motion.div>
  );
};

/* ── Main page ── */
const ColoursPage = () => {
  const [selected, setSelected] = useState<MicroColour | null>(null);
  const [search, setSearch] = useState("");
  const [activeRange, setActiveRange] = useState<ColourRange | "All">("All");

  const filteredByRange = useMemo(() => {
    let base = microColours;
    if (search) {
      const q = search.toLowerCase();
      base = base.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.products.some((p) => p.toLowerCase().includes(q))
      );
    }
    return base;
  }, [search]);

  const showRanges = activeRange === "All";

  const flatFiltered = useMemo(() => {
    if (activeRange === "All") return filteredByRange;
    return filteredByRange.filter((c) => c.range === activeRange);
  }, [filteredByRange, activeRange]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Microcement Colour Palette — Natural Tones | INCISE East Africa"
        description="Explore INCISE's microcement colour system — natural mineral tones across five ranges: warm sands, earth & clay, oxide, concrete, and botanical greens."
        canonical="https://incisesite.lovable.app/colours"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-[76px]">
        <div className="bg-dark text-background section-padding pb-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="label-text mb-5">THE ART OF HARMONY</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
                Material, texture <br className="hidden md:block" />
                <span className="italic text-gradient-gold">& colour.</span>
              </h1>
              <p className="font-body text-sm md:text-base max-w-[640px] leading-[1.95] opacity-70" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
                Microcement colours are not like paint. They are mineral pigments bound in cement — 
                creating surfaces with natural depth, subtle variation, and tactile character 
                that shifts with light and touch. Each tone is designed to be combined 
                within its range or across ranges for perfect harmony.
              </p>
            </motion.div>

            {/* Colour emotion strip — all ranges */}
            <motion.div
              className="mt-12 flex gap-[2px] h-20 md:h-28 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {microColours.filter((_, i) => i % 2 === 0).map((c) => (
                <div
                  key={c.id}
                  className="flex-1 transition-all duration-500 hover:flex-[3] cursor-pointer relative overflow-hidden"
                  style={{ backgroundColor: c.hex }}
                  onClick={() => setSelected(c)}
                  title={c.name}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E")`,
                      backgroundSize: "256px 256px",
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy strip ── */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16">
          {[
            { icon: Eye, title: "Perception", text: "Microcement is not flat colour. Natural mineral pigments create depth, variation, and organic movement across every surface — no two square metres are identical." },
            { icon: Layers, title: "Texture & Tone", text: "Colour behaves differently on cementitious surfaces. Pigments bond with mineral substrates, creating tonal shifts that paint systems simply cannot replicate." },
            { icon: Sparkles, title: "Five Ranges", text: "Our colour system is organized into five harmonious ranges — Yellow, Orange, Red, Blue, Green — designed for perfect tone-on-tone combinations in any direction." },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <item.icon size={28} className="text-primary mb-4" strokeWidth={1.2} />
              <h3 className="font-display text-xl text-foreground mb-2" style={{ fontWeight: 400 }}>{item.title}</h3>
              <p className="font-body text-sm text-secondary-foreground leading-[1.85]" style={{ fontWeight: 300 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How to read the colour system ── */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text mb-4">THE COLOUR SYSTEM</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4" style={{ fontWeight: 300 }}>
              Five ranges. <span className="italic text-gradient-gold">Perfect harmony.</span>
            </h2>
            <p className="font-body text-sm text-secondary-foreground max-w-[620px] mx-auto leading-[1.85]" style={{ fontWeight: 300 }}>
              Within each range, colours move from light to dark. Combine horizontally for tone-on-tone harmony, 
              or vertically across ranges for colours of the same intensity. Either direction — 
              you always achieve balance.
            </p>
          </motion.div>
        </div>

        {/* Matrix preview — 5 ranges as rows */}
        <div className="max-w-[1400px] mx-auto mb-20">
          <div className="space-y-[2px]">
            {colourRanges.map((range) => {
              const rangeColours = microColours.filter((c) => c.range === range);
              return (
                <motion.div
                  key={range}
                  className="flex gap-[2px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {rangeColours.map((c) => (
                    <button
                      key={c.id}
                      className="flex-1 h-16 md:h-20 relative overflow-hidden transition-all duration-300 hover:flex-[2] group"
                      style={{ backgroundColor: c.hex }}
                      onClick={() => setSelected(c)}
                      title={`${c.name} — ${c.hex}`}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
                        }}
                      />
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[0.45rem] font-body opacity-0 group-hover:opacity-70 transition-opacity whitespace-nowrap"
                        style={{ color: isLightColor(c.hex) ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)" }}
                      >
                        {c.name}
                      </span>
                    </button>
                  ))}
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-[0.5rem] tracking-[0.2em] uppercase text-muted-foreground font-body">← Light</p>
            <p className="text-[0.5rem] tracking-[0.2em] uppercase text-muted-foreground font-body">Dark →</p>
          </div>
        </div>
      </section>

      {/* ── Colour Explorer ── */}
      <section id="explore" className="section-padding pt-0">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="label-text mb-4">EXPLORE THE PALETTE</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
              Click any colour to <span className="italic text-gradient-gold">feel the surface.</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-[2px]">
              <button
                onClick={() => setActiveRange("All")}
                className={`px-4 py-2.5 text-[0.62rem] tracking-[0.16em] uppercase font-body transition-all ${
                  activeRange === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                All Ranges
              </button>
              {colourRanges.map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRange(r)}
                  className={`px-4 py-2.5 text-[0.62rem] tracking-[0.16em] uppercase font-body transition-all flex items-center gap-2 ${
                    activeRange === r ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Range colour dot */}
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: microColours.find((c) => c.range === r && c.intensity === "mid")?.hex }}
                  />
                  {rangeDescriptions[r].title}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search colours, products…"
                className="w-full pl-9 pr-4 py-2.5 bg-secondary border border-border text-foreground text-[0.75rem] font-body placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Count */}
          <p className="text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground font-body mb-8">
            {flatFiltered.length} colour{flatFiltered.length !== 1 ? "s" : ""}
          </p>

          {/* Render by range or flat */}
          {showRanges && !search ? (
            colourRanges.map((range) => {
              const rangeColours = filteredByRange.filter((c) => c.range === range);
              if (rangeColours.length === 0) return null;
              return (
                <RangeSection
                  key={range}
                  range={range}
                  colours={rangeColours}
                  onSelect={setSelected}
                />
              );
            })
          ) : (
            <>
              {activeRange !== "All" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <p className="font-body text-sm text-secondary-foreground leading-[1.85] max-w-[600px]" style={{ fontWeight: 300 }}>
                    {rangeDescriptions[activeRange as ColourRange].description}
                  </p>
                </motion.div>
              )}
              <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-3 gap-y-6" layout>
                <AnimatePresence mode="popLayout">
                  {flatFiltered.map((c) => (
                    <ColourCard key={c.id} colour={c} onClick={() => setSelected(c)} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}

          {flatFiltered.length === 0 && (
            <div className="text-center py-20">
              <Palette size={40} className="text-muted-foreground mx-auto mb-4" strokeWidth={1} />
              <p className="font-body text-muted-foreground text-sm">No colours match your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Colour Psychology ── */}
      <section className="bg-dark text-background section-padding">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="label-text mb-4">MATERIAL & COLOUR</p>
            <h2 className="font-display text-3xl md:text-5xl" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
              Why microcement colour <span className="italic text-gradient-gold">is different.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[2px]">
            {[
              { title: "Not a paint. A mineral surface.", body: "Microcement colours come from oxide pigments mixed into a cementitious binder. The result is a surface with natural variation — subtle tonal shifts, soft mottling, and depth that flat paint cannot achieve." },
              { title: "Light changes everything", body: "The same microcement tone looks different in morning sun, artificial light, and at dusk. This is not a defect — it's the defining quality of a living mineral surface. Every specification should consider the light conditions of the space." },
              { title: "Texture amplifies tone", body: "A smooth trowel finish reads lighter and more refined. A textured application appears darker and more rustic. The same pigment can produce remarkably different atmospheres depending on the applicator's technique." },
              { title: "Natural variation is the point", body: "Unlike factory-consistent paint, microcement embraces controlled variation. Trowel marks, mineral aggregates, and overlapping layers create a surface that feels handmade, alive, and connected to craft." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-mid p-8 md:p-10"
              >
                <h3 className="font-display text-xl md:text-2xl mb-3" style={{ fontWeight: 400, color: "hsl(var(--warm-white))" }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-[1.85] opacity-70" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Colour CTA ── */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text mb-4">BESPOKE FORMULATION</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4" style={{ fontWeight: 300 }}>
              Don't see your <span className="italic text-gradient-gold">shade?</span>
            </h2>
            <p className="font-body text-sm text-secondary-foreground max-w-[520px] mx-auto leading-[1.85] mb-8" style={{ fontWeight: 300 }}>
              We develop custom colour formulations for architects and designers.
              Share a reference — a fabric swatch, a Pantone code, a photograph — and we'll match it.
            </p>
            <a
              href="#contact"
              className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-[hsl(var(--gold-light))] transition-colors"
            >
              Request a custom colour →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Immersive preview modal */}
      <AnimatePresence>
        {selected && (
          <ColourPreview
            colour={selected}
            onClose={() => setSelected(null)}
            onSelect={(c) => setSelected(c)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

export default ColoursPage;
