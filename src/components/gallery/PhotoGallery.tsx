import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gallery data
const galleryItems = [
  { id: 1, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", full: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85", tag: "Microtopping · Floors", name: "Beleza by Santina", loc: "Kampala · 2024", cat: ["all", "microtopping", "residential"] },
  { id: 2, img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&q=80", full: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1400&q=85", tag: "Metallic · Walls", name: "Private Residence", loc: "Munyonyo · 2024", cat: ["all", "metallic", "residential"] },
  { id: 3, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", full: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85", tag: "Patio System · Outdoor", name: "Nile Safari Lodge", loc: "Jinja · 2024", cat: ["all", "patio", "hospitality"] },
  { id: 4, img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=600&q=80", full: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=1400&q=85", tag: "Microtopping · Hospitality", name: "Boutique Hotel Lobby", loc: "Kampala · 2023", cat: ["all", "microtopping", "hospitality", "commercial"] },
  { id: 5, img: "https://images.unsplash.com/photo-1600607687644-c7f34b5b6f4a?w=600&q=80", full: "https://images.unsplash.com/photo-1600607687644-c7f34b5b6f4a?w=1400&q=85", tag: "Wallcrete · Commercial", name: "Office Headquarters", loc: "Kololo · 2023", cat: ["all", "wallcrete", "commercial"] },
  { id: 6, img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80", full: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1400&q=85", tag: "Microtopping · Spa", name: "Khwezi Beauty Secrets", loc: "Kampala · 2023", cat: ["all", "microtopping", "commercial"] },
  { id: 7, img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80", full: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=85", tag: "Cemwash · Exterior", name: "Private Villa", loc: "Entebbe · 2024", cat: ["all", "cemwash", "residential"] },
  { id: 8, img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80", full: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400&q=85", tag: "Color Hardener · Commercial", name: "Ranchers Finest", loc: "Kampala · 2025", cat: ["all", "microtopping", "commercial"] },
  { id: 9, img: "https://images.unsplash.com/photo-1600047508788-786f3865b233?w=600&q=80", full: "https://images.unsplash.com/photo-1600047508788-786f3865b233?w=1400&q=85", tag: "Stamped Concrete", name: "Residential Terrace", loc: "Muyenga · 2025", cat: ["all", "patio", "residential"] },
  { id: 10, img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", full: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85", tag: "Microtopping · Full System", name: "Strat Bridals", loc: "Kampala · 2025", cat: ["all", "microtopping", "commercial"] },
  { id: 11, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", full: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85", tag: "Metallic · Hospitality", name: "Luxury Restaurant", loc: "Kisementi · 2025", cat: ["all", "metallic", "hospitality"] },
  { id: 12, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", full: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85", tag: "Microtopping · Kitchen", name: "Contemporary Home", loc: "Naguru · 2024", cat: ["all", "microtopping", "residential"] },
  { id: 13, img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80", full: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1400&q=85", tag: "Microtopping · Institutional", name: "St Charles Lwanga Parish", loc: "Ntinda · 2024", cat: ["all", "microtopping", "commercial"] },
  { id: 14, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", full: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=85", tag: "Wallcrete · Residential", name: "Contemporary Bedroom", loc: "Kampala · 2024", cat: ["all", "wallcrete", "residential"] },
  { id: 15, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", full: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85", tag: "Patio · Commercial", name: "Commercial Courtyard", loc: "Kampala · 2025", cat: ["all", "patio", "commercial"] },
  { id: 16, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", full: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85", tag: "Microtopping · Bathroom", name: "Luxury Wet Room", loc: "Kampala · 2024", cat: ["all", "microtopping", "residential"] },
];

const photoFilters = [
  { key: "all", label: "All (48)" },
  { key: "microtopping", label: "Microtopping" },
  { key: "metallic", label: "Metallic" },
  { key: "wallcrete", label: "Wallcrete" },
  { key: "patio", label: "Patio & Outdoor" },
  { key: "cemwash", label: "Cemwash" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "hospitality", label: "Hospitality" },
];

interface LightboxProps {
  images: typeof galleryItems;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onPrev, onNext, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;
  const item = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="relative max-w-[94vw]" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase font-body"
          >
            ✕ Close
          </button>
          <span className="absolute -top-10 left-0 text-xs text-muted-foreground/50 font-body tracking-wider">
            {currentIndex + 1} / {images.length}
          </span>

          <img
            src={item.full}
            alt={item.name}
            className="max-w-full max-h-[86vh] object-contain block"
          />

          <button
            onClick={onPrev}
            className="absolute top-1/2 -translate-y-1/2 -left-14 w-11 h-11 bg-background/50 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute top-1/2 -translate-y-1/2 -right-14 w-11 h-11 bg-background/50 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            ›
          </button>

          <p className="absolute -bottom-8 left-0 right-0 text-center text-xs text-muted-foreground/50 tracking-wider uppercase font-body">
            {item.tag} · {item.name} · {item.loc}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const PhotoGallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filtered = galleryItems.filter((item) => item.cat.includes(filter));

  const openLightbox = useCallback((idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIdx((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIdx((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 pb-6 mb-8 border-b border-border items-center">
        <span className="label-text text-[10px] mr-2">Filter by:</span>
        {photoFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key); setLightboxIdx(0); }}
            className={`px-4 py-2 text-xs tracking-widest font-body transition-all ${
              filter === f.key
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-1">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.03 }}
            className="break-inside-avoid mb-1 relative overflow-hidden group cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto block brightness-[0.88] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
              <p className="label-text text-[9px] mb-1">{item.tag}</p>
              <p className="font-display text-sm text-foreground">{item.name}</p>
              <p className="text-[11px] text-muted-foreground/60 font-body">{item.loc}</p>
            </div>
            <div className="absolute top-3 right-3 w-7 h-7 bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              ⊕
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      <div className="text-center mt-14">
        <p className="text-sm text-muted-foreground font-body mb-5">
          Showing {filtered.length} of 300+ projects
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 border border-border text-foreground px-10 py-3.5 text-xs tracking-widest uppercase font-body hover:border-primary hover:text-primary transition-colors"
        >
          Browse All Projects →
        </a>
      </div>

      <Lightbox
        images={filtered}
        currentIndex={lightboxIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
};

export default PhotoGallery;
