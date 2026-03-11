/* ── Microcement-specific colour data ── */

export type ColourRange = "Yellow" | "Orange" | "Red" | "Blue" | "Green";

export interface MicroColour {
  id: string;
  name: string;
  hex: string;
  range: ColourRange;
  intensity: "light" | "mid" | "dark" | "accent";
  products: string[];
  description: string;
}

/* 
  Natural microcement tones — inspired by mineral pigments, 
  not synthetic paint. Each range goes from light → dark → accent.
*/
export const microColours: MicroColour[] = [
  // ── Yellow range (warm sands, ivories, golden tones) ──
  { id: "y1", name: "Natural White", hex: "#F2EDE5", range: "Yellow", intensity: "light", products: ["Microtopping", "Wallcrete", "Cemwash"], description: "The lightest mineral base — warm ivory with a whisper of sand." },
  { id: "y2", name: "Bone", hex: "#E8E0D2", range: "Yellow", intensity: "light", products: ["Microtopping", "Wallcrete"], description: "Sun-bleached warmth. The most specified neutral across all INCISE systems." },
  { id: "y3", name: "Linen", hex: "#DDD3C1", range: "Yellow", intensity: "light", products: ["Microtopping", "Cemwash"], description: "A soft, living white that shifts golden in afternoon light." },
  { id: "y4", name: "Sandstone", hex: "#CFC2A8", range: "Yellow", intensity: "mid", products: ["Microtopping", "Patio"], description: "Warm sandstone mid-tone — the backbone of East African interiors." },
  { id: "y5", name: "Straw", hex: "#C4B48E", range: "Yellow", intensity: "mid", products: ["Microtopping", "Wallcrete"], description: "Dried grass and sun-baked earth. A grounded, golden neutral." },
  { id: "y6", name: "Ochre", hex: "#B8A06A", range: "Yellow", intensity: "mid", products: ["Cemwash", "Wallcrete"], description: "Natural ochre pigment — the oldest colour humans have used." },
  { id: "y7", name: "Amber Earth", hex: "#9E8855", range: "Yellow", intensity: "dark", products: ["Microtopping", "Color Hardener"], description: "Deep amber mineral. Rich warmth without heaviness." },
  { id: "y8", name: "Dark Sand", hex: "#7A6B48", range: "Yellow", intensity: "dark", products: ["Microtopping"], description: "Compressed earth tone — dense and architectural." },

  // ── Orange range (terracottas, clay, copper tones) ──
  { id: "o1", name: "Cream Clay", hex: "#EDE2D4", range: "Orange", intensity: "light", products: ["Microtopping", "Cemwash"], description: "A blushing neutral with the faintest terracotta warmth." },
  { id: "o2", name: "Shell Pink", hex: "#E2D0BD", range: "Orange", intensity: "light", products: ["Wallcrete", "Cemwash"], description: "Warm shell — where neutral meets blush." },
  { id: "o3", name: "Salmon Dust", hex: "#D4B9A0", range: "Orange", intensity: "mid", products: ["Microtopping", "Wallcrete"], description: "Soft terracotta dust. Evokes Moroccan rammed earth." },
  { id: "o4", name: "Terracotta", hex: "#C49A78", range: "Orange", intensity: "mid", products: ["Microtopping", "Cemwash"], description: "The defining colour of microcement — natural fired earth." },
  { id: "o5", name: "Copper Clay", hex: "#B07E5A", range: "Orange", intensity: "mid", products: ["Microtopping", "Patio"], description: "Warm copper mineral with organic variation." },
  { id: "o6", name: "Rust", hex: "#9A6842", range: "Orange", intensity: "dark", products: ["Color Hardener", "Patio"], description: "Iron oxide. Raw, authentic, industrial." },
  { id: "o7", name: "Burnt Umber", hex: "#7A5435", range: "Orange", intensity: "dark", products: ["Microtopping"], description: "Deep, rich clay. Grounding and architectural." },

  // ── Red range (oxide, burgundy, warm browns) ──
  { id: "r1", name: "Rose Chalk", hex: "#E0D0C8", range: "Red", intensity: "light", products: ["Wallcrete", "Cemwash"], description: "Chalky rose mineral — understated and elegant." },
  { id: "r2", name: "Blush Stone", hex: "#D4BAB0", range: "Red", intensity: "light", products: ["Microtopping", "Wallcrete"], description: "A warm stone with pink mineral undertones." },
  { id: "r3", name: "Sienna", hex: "#B0897A", range: "Red", intensity: "mid", products: ["Microtopping", "Cemwash"], description: "Classic burnt sienna — warm and timeless." },
  { id: "r4", name: "Red Oxide", hex: "#8E6258", range: "Red", intensity: "mid", products: ["Microtopping", "Color Hardener"], description: "Natural red oxide pigment. Distinctly mineral." },
  { id: "r5", name: "Mahogany Dust", hex: "#6E4A40", range: "Red", intensity: "dark", products: ["Microtopping"], description: "Deep earth red — commanding without being aggressive." },
  { id: "r6", name: "Cocoa", hex: "#5A3E35", range: "Red", intensity: "dark", products: ["Microtopping", "Wallcrete"], description: "Rich, dark brown with warm red undertones." },

  // ── Blue range (concrete greys, stone, slate) ──
  { id: "b1", name: "Cloud Grey", hex: "#E0DDD8", range: "Blue", intensity: "light", products: ["Microtopping", "Wallcrete"], description: "The coolest neutral — a whisper of blue in pale stone." },
  { id: "b2", name: "Ash", hex: "#CCC8C0", range: "Blue", intensity: "light", products: ["Microtopping", "Cemwash"], description: "Clean ash tone. Modern, minimal, architectural." },
  { id: "b3", name: "Concrete", hex: "#B0ACA5", range: "Blue", intensity: "mid", products: ["Microtopping", "Wallcrete", "Microtek"], description: "The definitive concrete grey. Industry standard." },
  { id: "b4", name: "Storm Grey", hex: "#8E8A82", range: "Blue", intensity: "mid", products: ["Microtopping", "Wallcrete"], description: "A mid-grey with subtle warmth — avoids cold sterility." },
  { id: "b5", name: "Slate", hex: "#6A6860", range: "Blue", intensity: "dark", products: ["Microtopping", "Color Hardener"], description: "Deep mineral slate — serious and grounding." },
  { id: "b6", name: "Graphite", hex: "#4A4842", range: "Blue", intensity: "dark", products: ["Microtopping", "Wallcrete"], description: "Near-black graphite. Maximum drama, zero pretension." },
  { id: "b7", name: "Charcoal", hex: "#353330", range: "Blue", intensity: "dark", products: ["Microtopping"], description: "Our darkest tone. Absorbs light, commands attention." },

  // ── Green range (sage, olive, moss, eucalyptus) ──
  { id: "g1", name: "Mineral White", hex: "#E4E2DA", range: "Green", intensity: "light", products: ["Microtopping", "Cemwash"], description: "The palest green — barely visible, subtly alive." },
  { id: "g2", name: "Sage Mist", hex: "#CCC9BA", range: "Green", intensity: "light", products: ["Wallcrete", "Cemwash"], description: "Soft sage with grey undertones — calming and organic." },
  { id: "g3", name: "Olive Grey", hex: "#A8A48E", range: "Green", intensity: "mid", products: ["Microtopping", "Wallcrete"], description: "Where green meets grey. Natural and uncontrived." },
  { id: "g4", name: "Moss", hex: "#8A8A6E", range: "Green", intensity: "mid", products: ["Wallcrete"], description: "Forest floor. Deep and grounding." },
  { id: "g5", name: "Eucalyptus", hex: "#7A8878", range: "Green", intensity: "mid", products: ["Wallcrete", "Cemwash"], description: "Cool botanical green — fresh without being decorative." },
  { id: "g6", name: "Dark Olive", hex: "#5A5E45", range: "Green", intensity: "dark", products: ["Microtopping", "Wallcrete"], description: "Deep olive mineral. Luxurious and uncommon." },
];

export const colourRanges: ColourRange[] = ["Yellow", "Orange", "Red", "Blue", "Green"];

export const rangeDescriptions: Record<ColourRange, { title: string; subtitle: string; description: string }> = {
  Yellow: {
    title: "Warm Sands",
    subtitle: "Ivory · Sand · Ochre · Amber",
    description: "From natural white to deep amber — the foundation tones of microcement. These are the colours of sunlit stone, dried earth, and woven linen.",
  },
  Orange: {
    title: "Earth & Clay",
    subtitle: "Clay · Terracotta · Copper · Umber",
    description: "Terracotta, copper, and burnt umber — drawn directly from the earth. These tones carry the warmth of fired clay and African soil.",
  },
  Red: {
    title: "Oxide & Mineral",
    subtitle: "Rose · Sienna · Oxide · Cocoa",
    description: "Red oxide, sienna, and deep cocoa — mineral pigments that have defined architecture for millennia. Rich, warm, and deeply grounded.",
  },
  Blue: {
    title: "Concrete & Slate",
    subtitle: "Cloud · Ash · Concrete · Charcoal",
    description: "The grey spectrum — from pale cloud to near-black charcoal. These are the colours of raw concrete, slate quarries, and urban architecture.",
  },
  Green: {
    title: "Botanical & Olive",
    subtitle: "Sage · Olive · Moss · Eucalyptus",
    description: "Greens that belong in architecture — not decorative, but deeply natural. Sage, olive, and eucalyptus tones that breathe life into mineral surfaces.",
  },
};
