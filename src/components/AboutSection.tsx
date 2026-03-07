import { motion } from "framer-motion";
import textureImage from "@/assets/texture-grey.jpg";

const features = [
  {
    icon: "🪨",
    title: "Not paint. Not tiles. Something better.",
    desc: "INCISE coatings are cementitious — they bond to your substrate and become part of it. Ultra-thin (1–3mm), seamless, and waterproof.",
  },
  {
    icon: "🌍",
    title: "Formulated for East Africa",
    desc: "Made in Uganda for our climate — humidity, UV intensity, and temperature extremes that imported generics weren't designed for.",
  },
  {
    icon: "🏆",
    title: "One system, total accountability",
    desc: "We supply primers, coatings, sealers, tools, training, and aftercare. No third-party compatibility risks. We own the full system.",
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={textureImage}
              alt="INCISE microtopping texture"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-4 py-2">
              <p className="label-text text-[10px]">MADE IN UGANDA</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-text mb-4">WHAT IS INCISE?</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              We don't coat surfaces. We give them{" "}
              <span className="italic text-gradient-gold">a voice.</span>
            </h2>
            <p className="text-secondary-foreground leading-relaxed mb-10 font-body">
              If you've ever walked into a space and felt something — a calm, a
              weight, an elegance you couldn't quite name — chances are the
              surface design was doing the work. INCISE creates that feeling.
            </p>

            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="text-foreground font-body font-semibold mb-1">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
