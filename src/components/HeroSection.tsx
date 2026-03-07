import { motion } from "framer-motion";
import heroImage from "@/assets/hero-living.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury interior with INCISE microtopping finish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 md:pb-32 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="label-text mb-4">East Africa's Surface Authority</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
            The finish that defines{" "}
            <span className="italic text-gradient-gold">a space.</span>
          </h1>
          <p className="text-secondary-foreground text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed">
            Premium decorative coatings for walls and floors — crafted for
            architects, designers, and developers who refuse to settle for
            ordinary surfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-wider font-body hover:bg-gold-light transition-colors"
            >
              EXPLORE OUR PRODUCTS
            </a>
            <a
              href="#showroom"
              className="border border-foreground/30 text-foreground px-8 py-3.5 text-sm tracking-wider font-body hover:border-primary hover:text-primary transition-colors"
            >
              VIRTUAL SHOWROOM
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-xs tracking-[0.3em] text-muted-foreground font-body">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
