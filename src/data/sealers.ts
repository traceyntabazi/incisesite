export interface SealerSpec {
  label: string;
  value: string | string[];
}

export interface SealerData {
  id: string;
  slug: string;
  badge: string;
  context: string;
  name: string;
  tagline: string;
  description: string[];
  finish: string;
  packaging: string[];
  coverage: string;
  curing: string[];
  applications: string[];
  img: string;
}

export const sealers: SealerData[] = [
  {
    id: "silicon",
    slug: "silicon-sealer",
    badge: "PENETRATING",
    context: "SURFACE PROTECTION · PENETRATING SILICON-BASED SEALER",
    name: "Silicon Sealer",
    tagline: "Penetrating protection. Invisible performance.",
    description: [
      "A clear, penetrating silicon-based sealer that repels water and stains while preserving the natural appearance of your microcement surface. Ideal as a first-seal coat on porous substrates.",
      "Used as a primer or stand-alone protective treatment, it locks moisture out without altering the colour, texture, or breathability of the finish below.",
    ],
    finish: "Clear liquid",
    packaging: ["5L containers", "20L containers"],
    coverage: "4–8 m² per litre (depending on porosity)",
    curing: [
      "Touch dry: 1–2 hours",
      "Water repellency develops within 24–48 hours",
      "Protect from rain during curing",
    ],
    applications: ["Microcement Walls", "Microcement Floors", "Porous Substrates", "First-Seal Coat", "Exterior Surfaces"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "wb",
    slug: "wb-sealer",
    badge: "WATER-BASED",
    context: "SURFACE PROTECTION · WATER-BASED INTERIOR & EXTERIOR SEALER",
    name: "WB Sealer",
    tagline: "Water-based. Tough as it needs to be.",
    description: [
      "A versatile water-based sealer available in matte or satin finish. Designed for both interior and exterior microcement surfaces, offering reliable protection with easy application and low odour.",
      "An excellent everyday choice for residential walls, floors, and feature surfaces where a balance of protection, breathability, and aesthetics is required.",
    ],
    finish: "Matte / Satin (as specified)",
    packaging: ["5L containers", "20L containers"],
    coverage: "5–7 m² per litre per coat",
    curing: ["Full cure: 5–7 days"],
    applications: ["Residential Walls", "Residential Floors", "Feature Walls", "Interior Surfaces", "Exterior Surfaces"],
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "2khr",
    slug: "2k-hr-sealant",
    badge: "2-COMPONENT",
    context: "SURFACE PROTECTION · TWO-COMPONENT HIGH-RESISTANCE SEALANT",
    name: "2K HR Sealant",
    tagline: "High-resistance. Two-component. Uncompromising.",
    description: [
      "A high-performance two-component sealant engineered for surfaces that demand maximum durability. The 2K HR system delivers superior chemical and abrasion resistance — the go-to choice for commercial floors, wet areas, and high-traffic zones.",
      "Specified where the cost of failure is high: hospitality kitchens, retail floors, showrooms, and bathrooms exposed to constant water and cleaning agents.",
    ],
    finish: "Matte / Satin (as specified)",
    packaging: ["4L Resin + 2L Hardener (6L Kit)"],
    coverage: "8–12 m² per litre per coat (depending on substrate)",
    curing: ["Full cure: 5–7 days"],
    applications: ["Commercial Floors", "Wet Areas", "Hotel Bathrooms", "Retail Spaces", "High-Traffic Zones"],
    img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
  },
  {
    id: "puwb",
    slug: "pu-wb-sealant",
    badge: "POLYURETHANE",
    context: "SURFACE PROTECTION · POLYURETHANE WATER-BASED SEALANT",
    name: "PU WB Sealant",
    tagline: "Polyurethane strength. Water-based ease.",
    description: [
      "A polyurethane water-based sealant that combines the hardness of PU chemistry with the convenience of a water-borne system. Delivers a hard-wearing, flexible film that resists impact, scratches, and everyday wear.",
      "The right specification when you need PU-grade resilience without solvent odour or complex application — premium residential floors, boutique commercial environments, and demanding wall surfaces.",
    ],
    finish: "Matte / Satin (as specified)",
    packaging: ["5L", "10L"],
    coverage: "Per coat: 60–80 g/m² · Total system: 120–200 g/m²",
    curing: ["Full cure: 5–7 days"],
    applications: ["Premium Residential Floors", "Boutique Retail", "Hotel Interiors", "Showroom Floors", "Demanding Wall Surfaces"],
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "rapid-seal",
    slug: "rapid-seal",
    badge: "RAPID CURE",
    context: "SURFACE PROTECTION · 2K POLYURETHANE PROTECTIVE SEALER",
    name: "Rapid Seal",
    tagline: "Fast cure. High durability. Uncompromising protection.",
    description: [
      "INCISE Rapid Seal is a high-performance two-component polyurethane protective sealer engineered for surfaces that need to be back in service quickly without compromising on long-term durability. Rapid curing technology delivers a tough, clear protective finish with excellent abrasion, UV, and chemical resistance.",
      "Suitable for both interior and exterior use across floors, walls, decorative concrete, microcement, and outdoor surfaces — wherever high mechanical strength and a refined satin or gloss finish are required.",
    ],
    finish: "Satin / Gloss (as specified)",
    packaging: ["Component A – Resin: 5L", "Component B – Hardener: 2.5L"],
    coverage: "8–12 m² per litre per coat (depending on substrate)",
    curing: [
      "Rapid curing technology — back in service faster",
      "Full cure: 5–7 days",
      "Protect from water during initial cure",
    ],
    applications: ["Floors", "Walls", "Decorative Concrete", "Microcement", "Outdoor Surfaces", "High-Traffic Zones"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
];

export const getSealerBySlug = (slug: string) => sealers.find((s) => s.slug === slug);
