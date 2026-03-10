import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    label: "Residential Interiors",
    alt: "Seamless microcement walls and floors in a luxury minimalist living space by INCISE Uganda",
  },
  {
    image: heroSlide2,
    label: "Wet Areas & Bathrooms",
    alt: "Premium microcement bathroom with freestanding bathtub and brass fixtures by INCISE",
  },
  {
    image: heroSlide3,
    label: "Hospitality & Metallic Finishes",
    alt: "Dramatic copper metallic microcement feature wall in a luxury restaurant interior",
  },
  {
    image: heroSlide4,
    label: "Outdoor & Patio Systems",
    alt: "Seamless microcement patio with infinity pool overlooking East African landscape",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, transparent 30%, rgba(26,24,22,.88) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-[60px] pb-20 md:pb-32 pt-32 w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p
            className="label-text mb-4"
            style={{ color: "hsl(35 38% 58%)" }}
          >
            East Africa's Microcement & Surface Authority
          </p>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6"
            style={{ fontWeight: 300 }}
          >
            Premium microcement &amp; decorative{" "}
            <span className="italic text-gradient-gold">coatings.</span>
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            Seamless cement-based wall and floor finishes — manufactured in
            Uganda for architects, designers, and developers across East Africa
            who refuse to settle for ordinary surfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors"
            >
              EXPLORE OUR PRODUCTS →
            </a>
            <a
              href="#showroom"
              className="border border-white/30 text-white px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-white/80 transition-colors"
            >
              VIRTUAL SHOWROOM
            </a>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex items-center gap-6 mt-14">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="flex items-center gap-3 group"
            >
              <div
                className={`h-[2px] transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-primary"
                    : "w-5 bg-white/25 group-hover:bg-white/50"
                }`}
              />
              <span
                className={`text-[0.58rem] tracking-[0.14em] uppercase font-body transition-colors duration-300 hidden md:block ${
                  i === current
                    ? "text-white/90"
                    : "text-white/30 group-hover:text-white/50"
                }`}
              >
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-xs tracking-[0.3em] text-white/50 font-body">
          SCROLL
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
