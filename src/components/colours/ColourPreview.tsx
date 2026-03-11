import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { MicroTextureCanvas } from "./MicroTexture";
import type { MicroColour } from "./ColourData";
import { microColours } from "./ColourData";

interface ColourPreviewProps {
  colour: MicroColour;
  onClose: () => void;
  onSelect: (c: MicroColour) => void;
}

const ColourPreview = ({ colour, onClose, onSelect }: ColourPreviewProps) => {
  const pairings = microColours
    .filter((c) => c.range === colour.range && c.id !== colour.id)
    .slice(0, 4);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col lg:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" onClick={onClose} />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col lg:flex-row overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* ── Large texture preview (left) ── */}
        <div className="relative flex-1 min-h-[40vh] lg:min-h-0 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: colour.hex }}
        >
          <MicroTextureCanvas
            hex={colour.hex}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Architectural shape overlay — large arch */}
          <div className="relative z-10 w-[60%] max-w-[400px] aspect-[3/4]">
            <div
              className="w-full h-full overflow-hidden"
              style={{
                borderRadius: "50% 50% 0 0 / 35% 35% 0 0",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15), inset 0 0 80px rgba(0,0,0,0.05)",
              }}
            >
              <MicroTextureCanvas hex={colour.hex} className="w-full h-full" />
            </div>
            {/* Inner shadow for depth */}
            <div
              className="absolute inset-0"
              style={{
                borderRadius: "50% 50% 0 0 / 35% 35% 0 0",
                boxShadow: "inset 0 4px 30px rgba(0,0,0,0.08), inset 0 -4px 20px rgba(255,255,255,0.05)",
              }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-foreground/20 backdrop-blur-sm text-background hover:bg-foreground/40 transition-colors"
          >
            <X size={18} />
          </button>

          {/* Color name overlay */}
          <div className="absolute bottom-8 left-8 z-20">
            <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body mb-1"
              style={{ color: isLightColor(colour.hex) ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.5)" }}
            >
              {colour.range} Range
            </p>
            <p className="font-display text-3xl md:text-4xl"
              style={{ fontWeight: 300, color: isLightColor(colour.hex) ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.85)" }}
            >
              {colour.name}
            </p>
          </div>
        </div>

        {/* ── Info panel (right) ── */}
        <div className="relative z-10 w-full lg:w-[380px] bg-card flex flex-col overflow-y-auto">
          <div className="p-8 lg:p-10 flex-1">
            {/* Swatch strip */}
            <div className="w-full h-16 mb-8 relative overflow-hidden" style={{ backgroundColor: colour.hex }}>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <p className="label-text text-[10px] mb-2">{colour.range} · {colour.intensity}</p>
            <h3 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 300 }}>
              {colour.name}
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-6 font-mono">{colour.hex.toUpperCase()}</p>

            <p className="font-body text-sm text-secondary-foreground leading-[1.85] mb-8" style={{ fontWeight: 300 }}>
              {colour.description}
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-body mb-2">Available in</p>
                <div className="flex flex-wrap gap-1.5">
                  {colour.products.map((p) => (
                    <span key={p} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-[0.62rem] tracking-[0.1em] uppercase font-body">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-body mb-2">Pairs with</p>
                <div className="flex gap-[2px]">
                  {pairings.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onSelect(p)}
                      className="flex-1 h-10 transition-transform hover:scale-105 relative overflow-hidden"
                      style={{ backgroundColor: p.hex }}
                      title={p.name}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </button>
                  ))}
                </div>
                <div className="flex gap-[2px] mt-0.5">
                  {pairings.map((p) => (
                    <p key={p.id} className="flex-1 text-[0.5rem] text-muted-foreground font-body text-center">
                      {p.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-[hsl(var(--gold-light))] transition-colors w-fit"
            >
              Request sample <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

export default ColourPreview;
