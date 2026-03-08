import { motion } from "framer-motion";
import heroImage from "@/assets/hero-living.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium microcement and decorative cement-based wall and floor finishes in a luxury interior by INCISE Uganda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, transparent 30%, rgba(26,24,22,.88) 100%)" }} />
      </div>

      <div className="relative z-10 px-6 md:px-[60px] pb-20 md:pb-32 pt-32 w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="label-text mb-4" style={{ color: "hsl(35 38% 58%)" }}>East Africa's Microcement & Surface Authority</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6" style={{ fontWeight: 300 }}>
            Premium microcement &amp; decorative{" "}
            <span className="italic text-gradient-gold">coatings.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed" style={{ fontWeight: 300 }}>
            Seamless cement-based wall and floor finishes — manufactured in Uganda
            for architects, designers, and developers across East Africa who refuse to
            settle for ordinary surfaces.
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
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-xs tracking-[0.3em] text-white/50 font-body">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
