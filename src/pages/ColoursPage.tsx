import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Eye, Layers, Palette, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

/* ── colour data ── */
type ColourFamily = "Neutrals" | "Earths" | "Stones" | "Metals" | "Botanicals" | "Oceans";

interface Colour {
  name: string;
  hex: string;
  family: ColourFamily;
  products: string[];
  mood: string;
}

const colours: Colour[] = [
  // Neutrals
  { name: "Ivory Veil", hex: "#F5F0E8", family: "Neutrals", products: ["Microtopping", "Wallcrete", "Cemwash"], mood: "Calm" },
  { name: "Bone Dust", hex: "#E8E0D4", family: "Neutrals", products: ["Microtopping", "Wallcrete"], mood: "Warm" },
  { name: "Linen Haze", hex: "#DDD5C8", family: "Neutrals", products: ["Microtopping", "Cemwash"], mood: "Soft" },
  { name: "Parchment", hex: "#D4C9B8", family: "Neutrals", products: ["Microtopping", "Wallcrete", "Patio"], mood: "Classic" },
  { name: "Sandrift", hex: "#C8B99A", family: "Neutrals", products: ["Microtopping", "Patio"], mood: "Warm" },
  { name: "Cloud Milk", hex: "#F0ECE4", family: "Neutrals", products: ["Wallcrete", "Cemwash"], mood: "Airy" },
  { name: "Cotton Stone", hex: "#E2D9CC", family: "Neutrals", products: ["Microtopping"], mood: "Gentle" },
  
  // Earths
  { name: "Savanna Clay", hex: "#B8845A", family: "Earths", products: ["Microtopping", "Patio", "Color Hardener"], mood: "Grounded" },
  { name: "Kilimanjaro Dust", hex: "#A67B5B", family: "Earths", products: ["Microtopping", "Patio"], mood: "Warm" },
  { name: "Burnt Sienna", hex: "#9E6B4A", family: "Earths", products: ["Wallcrete", "Cemwash"], mood: "Rich" },
  { name: "Terracotta Fade", hex: "#C4885A", family: "Earths", products: ["Microtopping", "Cemwash"], mood: "Earthy" },
  { name: "Amber Oxide", hex: "#B07840", family: "Earths", products: ["Color Hardener", "Patio"], mood: "Bold" },
  { name: "Rift Valley", hex: "#8B6842", family: "Earths", products: ["Microtopping", "Wallcrete"], mood: "Deep" },
  { name: "Ochre Blush", hex: "#D4A56A", family: "Earths", products: ["Cemwash", "Wallcrete"], mood: "Golden" },
  
  // Stones
  { name: "Limestone Pale", hex: "#D1C9BC", family: "Stones", products: ["Microtopping", "Patio"], mood: "Refined" },
  { name: "Pumice Grey", hex: "#B5AFA6", family: "Stones", products: ["Microtopping", "Color Hardener"], mood: "Cool" },
  { name: "Granite Mist", hex: "#9E9890", family: "Stones", products: ["Microtopping", "Wallcrete"], mood: "Urban" },
  { name: "Basalt Shadow", hex: "#6B6560", family: "Stones", products: ["Microtopping", "Color Hardener"], mood: "Dramatic" },
  { name: "Slate Whisper", hex: "#7A7570", family: "Stones", products: ["Wallcrete", "Microtopping"], mood: "Moody" },
  { name: "Quartzite", hex: "#C5BDB0", family: "Stones", products: ["Microtopping", "Patio"], mood: "Neutral" },
  { name: "Obsidian", hex: "#3A3632", family: "Stones", products: ["Microtopping", "Wallcrete"], mood: "Bold" },
  
  // Metals
  { name: "Aged Bronze", hex: "#8B7355", family: "Metals", products: ["Metallic"], mood: "Opulent" },
  { name: "Brushed Copper", hex: "#B87A56", family: "Metals", products: ["Metallic"], mood: "Warm" },
  { name: "Patina Green", hex: "#6B8E6B", family: "Metals", products: ["Metallic"], mood: "Heritage" },
  { name: "Liquid Silver", hex: "#A8A8A8", family: "Metals", products: ["Metallic"], mood: "Modern" },
  { name: "Champagne Foil", hex: "#C9B88C", family: "Metals", products: ["Metallic"], mood: "Luxe" },
  { name: "Iron Rust", hex: "#8B5E3C", family: "Metals", products: ["Metallic"], mood: "Raw" },
  
  // Botanicals
  { name: "Sage Dusk", hex: "#9CAF8B", family: "Botanicals", products: ["Wallcrete", "Cemwash"], mood: "Restful" },
  { name: "Moss Stone", hex: "#7A8B6A", family: "Botanicals", products: ["Wallcrete"], mood: "Organic" },
  { name: "Olive Mist", hex: "#A09A6A", family: "Botanicals", products: ["Cemwash", "Wallcrete"], mood: "Natural" },
  { name: "Eucalyptus", hex: "#8BA8A0", family: "Botanicals", products: ["Wallcrete", "Cemwash"], mood: "Fresh" },
  { name: "Dried Herb", hex: "#B5A888", family: "Botanicals", products: ["Cemwash"], mood: "Calm" },
  
  // Oceans
  { name: "Coastal Fog", hex: "#A0AAB0", family: "Oceans", products: ["Microtopping", "Wallcrete"], mood: "Serene" },
  { name: "Storm Blue", hex: "#6A7B88", family: "Oceans", products: ["Wallcrete"], mood: "Dramatic" },
  { name: "Pearl Bay", hex: "#B8C0C4", family: "Oceans", products: ["Microtopping", "Wallcrete"], mood: "Light" },
  { name: "Deep Current", hex: "#4A5B68", family: "Oceans", products: ["Wallcrete", "Microtopping"], mood: "Intense" },
  { name: "Tidal Sand", hex: "#C5BCA8", family: "Oceans", products: ["Microtopping", "Patio"], mood: "Coastal" },
];

const families: ColourFamily[] = ["Neutrals", "Earths", "Stones", "Metals", "Botanicals", "Oceans"];

const familyDescriptions: Record<ColourFamily, string> = {
  Neutrals: "The quiet foundation. Tones that let architecture speak, textures breathe, and light do the work.",
  Earths: "Born from the African landscape. Warm pigments that anchor a space and connect it to the ground beneath.",
  Stones: "Mineral-inspired depth. From pale limestone to volcanic basalt — surfaces that feel carved, not coated.",
  Metals: "Dimensional shimmer. Bronze, copper, and silver finishes that catch light and shift with perspective.",
  Botanicals: "Drawn from leaf and stem. Greens and olives that bring life to interior walls without overwhelming.",
  Oceans: "Coastal atmospherics. Blue-grey tones that evoke horizon lines and open water.",
};

const ColourCard = ({ colour, onClick }: { colour: Colour; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="group text-left"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    layout
  >
    <div
      className="aspect-[3/4] w-full mb-3 border border-border/40 transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]"
      style={{ backgroundColor: colour.hex }}
    />
    <p className="font-display text-base text-foreground" style={{ fontWeight: 400 }}>
      {colour.name}
    </p>
    <p className="text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground font-body mt-0.5">
      {colour.family} · {colour.mood}
    </p>
  </motion.button>
);

const ColourDetail = ({ colour, onClose }: { colour: Colour; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
    <motion.div
      className="relative bg-card max-w-[720px] w-full grid md:grid-cols-2 overflow-hidden border border-border"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
    >
      <div className="aspect-square md:aspect-auto" style={{ backgroundColor: colour.hex }} />
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>
        <p className="label-text text-[10px] mb-2">{colour.family}</p>
        <h3 className="font-display text-3xl md:text-4xl text-foreground mb-1" style={{ fontWeight: 300 }}>
          {colour.name}
        </h3>
        <p className="text-muted-foreground font-body text-sm mb-6">{colour.hex.toUpperCase()}</p>

        <div className="space-y-4">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-body mb-1.5">Mood</p>
            <p className="text-foreground font-body text-sm" style={{ fontWeight: 300 }}>{colour.mood}</p>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-body mb-1.5">Available in</p>
            <div className="flex flex-wrap gap-1.5">
              {colour.products.map((p) => (
                <span key={p} className="px-3 py-1 bg-secondary text-secondary-foreground text-[0.62rem] tracking-[0.1em] uppercase font-body">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-body mb-1.5">Pairs with</p>
            <p className="text-foreground font-body text-sm" style={{ fontWeight: 300 }}>
              {colours
                .filter((c) => c.family === colour.family && c.name !== colour.name)
                .slice(0, 3)
                .map((c) => c.name)
                .join(", ")}
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex bg-primary text-primary-foreground px-6 py-3 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors self-start"
        >
          Request sample →
        </a>
      </div>
    </motion.div>
  </motion.div>
);

/* ── main page ── */
const ColoursPage = () => {
  const [activeFamily, setActiveFamily] = useState<ColourFamily | "All">("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Colour | null>(null);

  const filtered = useMemo(() => {
    return colours.filter((c) => {
      const matchFamily = activeFamily === "All" || c.family === activeFamily;
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.mood.toLowerCase().includes(search.toLowerCase()) ||
        c.products.some((p) => p.toLowerCase().includes(search.toLowerCase()));
      return matchFamily && matchSearch;
    });
  }, [activeFamily, search]);

  return (
    <div className="min-h-screen bg-background">
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
              <p className="label-text mb-5">COLOUR STUDIO</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
                Colour shapes how a space <br className="hidden md:block" />
                <span className="italic text-gradient-gold">is felt.</span>
              </h1>
              <p className="font-body text-sm md:text-base max-w-[620px] leading-[1.95] opacity-70" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
                Before a hand touches a wall or a foot meets a floor, colour has already told the story.
                It sets the emotional register of a room — intimate or expansive, grounded or luminous.
                Our palette is crafted for the textures of cementitious surfaces, where pigment and mineral unite.
              </p>
            </motion.div>

            {/* Colour emotion strip */}
            <motion.div
              className="mt-12 flex gap-[2px] h-20 md:h-28 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {colours.filter((_, i) => i % 3 === 0).map((c) => (
                <div key={c.name} className="flex-1 transition-all duration-300 hover:flex-[3] cursor-pointer" style={{ backgroundColor: c.hex }} title={c.name} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy strip ── */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16">
          {[
            { icon: Eye, title: "Perception", text: "Colour changes how we perceive scale, warmth, and depth. A single shade can make a room feel twice its size — or half." },
            { icon: Layers, title: "Texture & Tone", text: "On cementitious surfaces, colour behaves differently. Pigments interact with mineral substrates, creating movement no paint can replicate." },
            { icon: Sparkles, title: "Bespoke Palettes", text: "Every project is unique. We develop custom colour formulations to match the architect's vision and the space's natural light." },
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

      {/* ── Colour Explorer ── */}
      <section id="explore" className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="label-text mb-4">EXPLORE THE PALETTE</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
              Find your <span className="italic text-gradient-gold">tone.</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-[2px]">
              <button
                onClick={() => setActiveFamily("All")}
                className={`px-4 py-2.5 text-[0.62rem] tracking-[0.16em] uppercase font-body transition-all ${
                  activeFamily === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {families.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFamily(f)}
                  className={`px-4 py-2.5 text-[0.62rem] tracking-[0.16em] uppercase font-body transition-all ${
                    activeFamily === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search colours, moods, products…"
                className="w-full pl-9 pr-4 py-2.5 bg-secondary border border-border text-foreground text-[0.75rem] font-body placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Family description */}
          <AnimatePresence mode="wait">
            {activeFamily !== "All" && (
              <motion.p
                key={activeFamily}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="font-body text-sm text-secondary-foreground mb-10 max-w-[600px] leading-[1.85]"
                style={{ fontWeight: 300 }}
              >
                {familyDescriptions[activeFamily]}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Count */}
          <p className="text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground font-body mb-6">
            {filtered.length} colour{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => (
                <ColourCard key={c.name} colour={c} onClick={() => setSelected(c)} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Palette size={40} className="text-muted-foreground mx-auto mb-4" strokeWidth={1} />
              <p className="font-body text-muted-foreground text-sm">No colours match your search. Try a different term.</p>
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
            <p className="label-text mb-4">THE SCIENCE OF COLOUR</p>
            <h2 className="font-display text-3xl md:text-5xl" style={{ fontWeight: 300, color: "hsl(var(--warm-white))" }}>
              Why colour <span className="italic text-gradient-gold">matters.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[2px]">
            {[
              { title: "Warm tones ground a space", body: "Earths, terracottas, and ambers create psychological warmth. In hospitality settings, they slow the pace — guests linger, conversations deepen. In African light, warm tones connect interiors to the landscape outside." },
              { title: "Cool tones expand perception", body: "Greys, blues, and soft greens push walls back visually. In compact urban apartments or commercial lobbies, they create the illusion of volume and calm. Paired with natural light, they shift beautifully through the day." },
              { title: "Neutrals are never neutral", body: "A cream is not just a cream. Ivory Veil leans warm and golden. Cloud Milk carries a cooler, almost silvery undertone. The right neutral doesn't disappear — it amplifies every other design decision in the room." },
              { title: "Metallics add a fourth dimension", body: "Surfaces that shimmer don't just reflect light — they respond to it. A bronze wall in morning sun looks entirely different at dusk. Metallic finishes add time as a design element, making spaces feel alive." },
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
              Share a reference — a fabric swatch, a Pantone code, a photograph of Kenyan soil at sunset — and we'll match it.
            </p>
            <a
              href="#contact"
              className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors"
            >
              Request a custom colour →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && <ColourDetail colour={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ColoursPage;
