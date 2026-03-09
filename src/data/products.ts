export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductData {
  id: string;
  slug: string;
  badge: string;
  context: string;
  name: string;
  tagline: string;
  description: string[];
  specs: ProductSpec[];
  applications: string[];
  toneCount: number;
  img: string;
  category: ("wall" | "floor")[];
}

export const products: ProductData[] = [
  {
    id: "microtopping",
    slug: "microtopping",
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
    category: ["wall", "floor"],
  },
  {
    id: "metallic",
    slug: "metallic",
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
    category: ["wall"],
  },
  {
    id: "wallcrete",
    slug: "wallcrete",
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
    category: ["wall"],
  },
  {
    id: "cemwash",
    slug: "cemwash",
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
    category: ["wall"],
  },
  {
    id: "patio",
    slug: "patio",
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
    category: ["floor"],
  },
  {
    id: "microtek",
    slug: "microtek",
    badge: "HIGH-PERFORMANCE",
    context: "FLOORS · HIGH-PERFORMANCE · ENGINEERED FOR TRAFFIC",
    name: "Microtek",
    tagline: "Where beauty meets industrial resilience.",
    description: [
      "Microtek is a high-performance, seamless floor coating engineered for spaces that demand both visual refinement and heavy-duty durability. Thicker than standard microtopping, it bridges the gap between decorative finishes and industrial floor systems.",
      "Ideal for commercial environments, showrooms, and high-traffic residential spaces where a polished concrete aesthetic must withstand daily punishment without compromise.",
    ],
    specs: [
      { label: "Application Thickness", value: "2–5mm" },
      { label: "Finish Range", value: "Matte to Satin" },
      { label: "Suitable Substrates", value: "Concrete, Screed" },
      { label: "Colour Range", value: "40+ standard tones" },
      { label: "Traffic Rating", value: "Heavy commercial traffic" },
      { label: "Abrasion Resistance", value: "Industrial grade" },
      { label: "Application Method", value: "Trowel — certified applicators only" },
      { label: "Coverage", value: "Approx. 2 kg/m² per coat" },
    ],
    applications: ["Showrooms", "Commercial Floors", "Retail Spaces", "Warehouses", "High-Traffic Residential"],
    toneCount: 8,
    img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    category: ["floor"],
  },
  {
    id: "terrace",
    slug: "terrace",
    badge: "EXTERIOR ELEGANCE",
    context: "FLOORS · OUTDOOR · ARCHITECTURAL TERRACES",
    name: "Terrace",
    tagline: "Outdoor living, elevated.",
    description: [
      "A textured, UV-stable floor system designed specifically for elevated terraces, balconies, and rooftop areas. INCISE Terrace combines a slip-resistant profile with architectural finesse — giving outdoor spaces the same design intentionality as interior rooms.",
      "Formulated to resist ponding water, thermal cycling, and the unique demands of rooftop environments across East Africa's diverse altitudes and climates.",
    ],
    specs: [
      { label: "Application Thickness", value: "3–6mm" },
      { label: "UV Stability", value: "High — tropics-rated" },
      { label: "Slip Rating", value: "R12 anti-slip" },
      { label: "Water Resistance", value: "Anti-ponding, fully sealed" },
      { label: "Thermal Cycling", value: "Rated for altitude variation" },
      { label: "Colour Range", value: "22 outdoor-rated tones" },
    ],
    applications: ["Rooftop Terraces", "Balconies", "Elevated Walkways", "Hotel Terraces", "Penthouse Exteriors"],
    toneCount: 6,
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: ["floor"],
  },
  {
    id: "color-hardener",
    slug: "color-hardener",
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
    category: ["floor"],
  },
  {
    id: "stamped-concrete",
    slug: "stamped-concrete",
    badge: "DECORATIVE CONCRETE",
    context: "FLOORS · OUTDOOR & INDOOR · PATTERN-IMPRINTED",
    name: "Stamped Concrete",
    tagline: "The character of stone. The strength of concrete.",
    description: [
      "Pattern-imprinted concrete that replicates the look of natural stone, brick, slate, or wood — with the structural integrity of a monolithic concrete slab. Applied on-site using precision moulds and INCISE Color Hardener for permanent, UV-stable colour.",
      "Ideal for driveways, walkways, courtyards, and large commercial floor areas where natural stone would be cost-prohibitive or structurally impractical.",
    ],
    specs: [
      { label: "Pattern Options", value: "Stone, Brick, Slate, Wood, Cobble" },
      { label: "Application", value: "Fresh concrete — on-site stamping" },
      { label: "Colour System", value: "Color Hardener + Release Agent" },
      { label: "Durability", value: "25+ year lifespan" },
      { label: "Best For", value: "Driveways, walkways, courtyards" },
      { label: "Sealer", value: "UV-stable acrylic sealer" },
    ],
    applications: ["Driveways", "Walkways", "Courtyards", "Hotel Entrances", "Commercial Plazas", "Garden Paths"],
    toneCount: 8,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    category: ["floor"],
  },
];

export const wallProducts = products.filter((p) => p.category.includes("wall"));
export const floorProducts = products.filter((p) => p.category.includes("floor"));

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const toneColors = [
  "hsl(30, 5%, 85%)", "hsl(30, 8%, 70%)", "hsl(30, 10%, 55%)", "hsl(30, 12%, 40%)",
  "hsl(30, 8%, 30%)", "hsl(35, 15%, 75%)", "hsl(38, 20%, 60%)", "hsl(25, 10%, 50%)",
  "hsl(20, 5%, 35%)", "hsl(30, 3%, 20%)",
];

export const comparisonData = [
  { name: "Microtopping", walls: true, floors: true, outdoor: true, waterproof: true, thickness: "1–3mm", bestUse: "Premium residential & commercial", complexity: "High — certified only" },
  { name: "Metallic Finish", walls: true, floors: false, outdoor: false, waterproof: false, thickness: "1–2mm", bestUse: "Feature/statement walls", complexity: "Medium-High" },
  { name: "Wallcrete", walls: true, floors: false, outdoor: true, waterproof: false, thickness: "2–4mm", bestUse: "Concrete aesthetic — any scale", complexity: "Medium" },
  { name: "Cemwash", walls: true, floors: false, outdoor: true, waterproof: false, thickness: "Thin wash", bestUse: "Natural/organic character", complexity: "Low-Medium" },
  { name: "Patio System", walls: false, floors: true, outdoor: true, waterproof: true, thickness: "System", bestUse: "Pool decks, outdoor terraces", complexity: "Medium" },
  { name: "Microtek", walls: false, floors: true, outdoor: false, waterproof: false, thickness: "2–5mm", bestUse: "High-traffic commercial floors", complexity: "Medium-High" },
  { name: "Terrace", walls: false, floors: true, outdoor: true, waterproof: true, thickness: "3–6mm", bestUse: "Rooftop terraces, balconies", complexity: "Medium" },
  { name: "Color Hardener", walls: false, floors: true, outdoor: true, waterproof: false, thickness: "Integral", bestUse: "Industrial/commercial floors", complexity: "Medium" },
  { name: "Stamped Concrete", walls: false, floors: true, outdoor: true, waterproof: false, thickness: "Slab", bestUse: "Driveways, walkways, courtyards", complexity: "Medium" },
];
