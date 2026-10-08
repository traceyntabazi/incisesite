import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MicroTextureCanvas } from "./MicroTexture";
import type { MicroColour } from "./ColourData";
import { microColours } from "./ColourData";

interface ColourPreviewProps {
  colour: MicroColour;
  onClose: () => void;
  onSelect: (c: MicroColour) => void;
}

const ColourPreview = ({ colour, onClose, onSelect }: ColourPreviewProps) => {
  const pairings = microColours.filter(c => c.range === colour.range && c.id !== colour.id).slice(0, 4);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", escape); };
  }, [onClose]);

  return (
    <motion.div role="dialog" aria-modal="true" aria-labelledby="colour-title"
      className="fixed inset-0 z-[70] overflow-y-auto bg-card"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Button variant="secondary" size="icon" autoFocus onClick={onClose} aria-label="Close colour preview"
        className="fixed top-5 right-5 z-20"><X size={18} /></Button>
      <div className="min-h-full flex flex-col lg:flex-row">
        <div className="relative w-full lg:flex-1 h-[38vh] min-h-[240px] lg:h-screen lg:sticky lg:top-0 overflow-hidden">
          <MicroTextureCanvas hex={colour.hex} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-[420px] bg-card p-6 lg:p-10 lg:pt-20">
          <p className="label-text mb-3">{colour.range} · {colour.intensity}</p>
          <h2 id="colour-title" className="font-display text-4xl text-foreground mb-2">{colour.name}</h2>
          <p className="font-body text-xs text-muted-foreground mb-6">{colour.hex.toUpperCase()}</p>
          <p className="font-body text-sm text-secondary-foreground leading-relaxed mb-8">{colour.description}</p>
          <div className="relative aspect-[339/162] overflow-hidden mb-4">
            <MicroTextureCanvas hex={colour.hex} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <p className="font-body text-xs text-muted-foreground leading-relaxed mb-8">
            Finish reference adapted from the INCISE colour chart. Screen colour is indicative; confirm with a physical sample.
          </p>
          <p className="label-text mb-3">Available in</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {colour.products.map(p => <span key={p} className="border border-border px-3 py-2 text-xs font-body text-secondary-foreground">{p}</span>)}
          </div>
          <p className="label-text mb-3">Pairs with</p>
          <div className="grid grid-cols-2 gap-x-[3px] gap-y-4 mb-8">
            {pairings.map(p => (
              <Button key={p.id} variant="ghost" onClick={() => onSelect(p)}
                aria-label={`View ${p.name}`} className="block h-auto p-0 whitespace-normal text-left hover:bg-transparent">
                <div className="relative aspect-[339/162] overflow-hidden mb-2">
                  <MicroTextureCanvas hex={p.hex} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <span className="font-body text-xs text-foreground">{p.name}</span>
              </Button>
            ))}
          </div>
          <Button asChild className="w-full"><a href="/locations">Request a sample <ArrowRight size={14} /></a></Button>
        </div>
      </div>
    </motion.div>
  );
};
export default ColourPreview;
