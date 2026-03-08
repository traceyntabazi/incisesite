import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectShowroom from "@/assets/project-showroom.jpg";
import projectLobby from "@/assets/project-lobby.jpg";
import projectSafari from "@/assets/project-safari.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectPool from "@/assets/project-pool.jpg";

const sectors = ["ALL", "RESIDENTIAL", "COMMERCIAL", "HOSPITALITY", "INSTITUTIONAL"];
const productFilters = ["MICROTOPPING", "METALLIC", "WALLCRETE", "PATIO", "CEMWASH", "COLOR HARDENER", "STAMPED"];

interface Project {
  img: string;
  product: string;
  sector: string;
  name: string;
  tags: string[];
  location: string;
  year: string;
  productFilter: string[];
  sectorFilter: string[];
}

const projects: Project[] = [
  {
    img: projectShowroom,
    product: "MICROTOPPING · COMMERCIAL",
    sector: "COMMERCIAL",
    name: "Beleza by Santina",
    tags: ["FLOORS", "WALLS", "FULL SYSTEM"],
    location: "Kampala",
    year: "2024",
    productFilter: ["MICROTOPPING"],
    sectorFilter: ["ALL", "COMMERCIAL"],
  },
  {
    img: projectBathroom,
    product: "METALLIC FINISH · RESIDENTIAL",
    sector: "RESIDENTIAL",
    name: "Private Residence",
    tags: ["FEATURE WALLS", "GOLD METALLIC"],
    location: "Munyonyo, Kampala",
    year: "2024",
    productFilter: ["METALLIC"],
    sectorFilter: ["ALL", "RESIDENTIAL"],
  },
  {
    img: projectPool,
    product: "PATIO SYSTEM · HOSPITALITY",
    sector: "HOSPITALITY",
    name: "Nile Safari Lodge",
    tags: ["POOL DECK", "OUTDOOR"],
    location: "Jinja, Uganda",
    year: "2024",
    productFilter: ["PATIO"],
    sectorFilter: ["ALL", "HOSPITALITY"],
  },
  {
    img: projectRestaurant,
    product: "COLOR HARDENER · COMMERCIAL",
    sector: "COMMERCIAL",
    name: "Ranchers Finest",
    tags: ["COMMERCIAL FLOOR", "HIGH-TRAFFIC"],
    location: "Kampala",
    year: "2025",
    productFilter: ["COLOR HARDENER"],
    sectorFilter: ["ALL", "COMMERCIAL"],
  },
  {
    img: projectLobby,
    product: "WALLCRETE · COMMERCIAL",
    sector: "COMMERCIAL",
    name: "Office Headquarters",
    tags: ["WALLCRETE", "FULL OFFICE"],
    location: "Kololo, Kampala",
    year: "2023",
    productFilter: ["WALLCRETE"],
    sectorFilter: ["ALL", "COMMERCIAL"],
  },
  {
    img: projectSafari,
    product: "MICROTOPPING · COMMERCIAL SPA",
    sector: "COMMERCIAL",
    name: "Khwezi Beauty Secrets",
    tags: ["SPA INTERIOR", "WALLS & FLOORS"],
    location: "Kampala",
    year: "2023",
    productFilter: ["MICROTOPPING"],
    sectorFilter: ["ALL", "COMMERCIAL"],
  },
  {
    img: projectShowroom,
    product: "MICROTOPPING · INSTITUTIONAL",
    sector: "INSTITUTIONAL",
    name: "St Charles Lwanga Parish",
    tags: ["SANCTUARY FLOOR", "LARGE SCALE"],
    location: "Ntinda, Kampala",
    year: "2024",
    productFilter: ["MICROTOPPING"],
    sectorFilter: ["ALL", "INSTITUTIONAL"],
  },
  {
    img: projectPool,
    product: "STAMPED CONCRETE · RESIDENTIAL",
    sector: "RESIDENTIAL",
    name: "Residential Terrace",
    tags: ["OUTDOOR", "STAMPED CONCRETE"],
    location: "Muyenga, Kampala",
    year: "2025",
    productFilter: ["STAMPED"],
    sectorFilter: ["ALL", "RESIDENTIAL"],
  },
  {
    img: projectRestaurant,
    product: "MICROTOPPING · COMMERCIAL",
    sector: "COMMERCIAL",
    name: "Strat Bridals",
    tags: ["FULL SYSTEM", "WALLS + FLOORS"],
    location: "Kampala",
    year: "2025",
    productFilter: ["MICROTOPPING"],
    sectorFilter: ["ALL", "COMMERCIAL"],
  },
  {
    img: projectLobby,
    product: "METALLIC FINISH · HOSPITALITY",
    sector: "HOSPITALITY",
    name: "Luxury Restaurant",
    tags: ["FEATURE WALL", "GOLD METALLIC"],
    location: "Kisementi, Kampala",
    year: "2025",
    productFilter: ["METALLIC"],
    sectorFilter: ["ALL", "HOSPITALITY"],
  },
  {
    img: projectBathroom,
    product: "MICROTOPPING · RESIDENTIAL",
    sector: "RESIDENTIAL",
    name: "Luxury Wet Room",
    tags: ["BATHROOM", "WATERPROOF"],
    location: "Kampala",
    year: "2024",
    productFilter: ["MICROTOPPING"],
    sectorFilter: ["ALL", "RESIDENTIAL"],
  },
  {
    img: projectSafari,
    product: "CEMWASH · RESIDENTIAL",
    sector: "RESIDENTIAL",
    name: "Private Villa",
    tags: ["EXTERIOR WALLS", "NATURAL FINISH"],
    location: "Entebbe, Uganda",
    year: "2024",
    productFilter: ["CEMWASH"],
    sectorFilter: ["ALL", "RESIDENTIAL"],
  },
];

const GalleryPage = () => {
  const [activeSector, setActiveSector] = useState("ALL");
  const [activeProducts, setActiveProducts] = useState<string[]>([]);

  const toggleProduct = (product: string) => {
    setActiveProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  const filtered = projects.filter((p) => {
    const sectorMatch = p.sectorFilter.includes(activeSector);
    const productMatch =
      activeProducts.length === 0 || activeProducts.some((f) => p.productFilter.includes(f));
    return sectorMatch && productMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Featured Project Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={projectShowroom}
          alt="Featured project — Beleza by Santina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-text text-[10px] mb-3">FEATURED PROJECT · 2024</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-3">
              Beleza by Santina
            </h1>
            <div className="flex flex-wrap gap-3 mb-2">
              <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                MICROTOPPING · FULL SYSTEM
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground font-body mb-5">
              <span>KAMPALA, UGANDA</span>
              <span>COMMERCIAL · BEAUTY SALON</span>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm tracking-wider font-body text-primary hover:text-foreground transition-colors"
            >
              VIEW FULL PROJECT →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            {/* Sector filters */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest text-muted-foreground font-body uppercase">
                SECTOR:
              </span>
              <div className="flex flex-wrap gap-1">
                {sectors.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSector(s)}
                    className={`px-3 py-1.5 text-[10px] tracking-widest font-body transition-all ${
                      activeSector === s
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            {/* Product filters */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest text-muted-foreground font-body uppercase">
                PRODUCT:
              </span>
              <div className="flex flex-wrap gap-1">
                {productFilters.map((p) => (
                  <button
                    key={p}
                    onClick={() => toggleProduct(p)}
                    className={`px-3 py-1.5 text-[10px] tracking-widest font-body transition-all ${
                      activeProducts.includes(p)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSector + activeProducts.join(",")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden aspect-[4/3] mb-4 relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="text-[10px] tracking-widest text-muted-foreground font-body uppercase mb-1">
                    {p.product}
                  </p>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9px] tracking-widest uppercase font-body border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-body">
                    {p.location} · {p.year}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Count + CTA */}
          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground font-body mb-6">
              Showing {filtered.length} of 300+ completed projects
            </p>
            <a
              href="#contact"
              className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-wider font-body hover:bg-accent/80 transition-colors"
            >
              START YOUR PROJECT →
            </a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-4"
          >
            "A project site is not just a workspace. It is a live brand showroom. Every surface we
            complete is an argument that premium can come from East Africa."
          </motion.blockquote>
          <p className="text-xs tracking-widest text-muted-foreground font-body uppercase">
            — INCISE OPERATIONS BIBLE
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
