import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Working with INCISE for the past four years has been fantastic. Their materials are always high quality and give me the exact natural aesthetic I envision for my clients' spaces.",
    name: "Eva Balungi",
    role: "Interior Designer, Balungi Uganda",
  },
  {
    quote: "On behalf of our parish, we are deeply grateful. The team spent days and sleepless nights to make a perfect product. What they did to our Sanctuary is beyond what we imagined.",
    name: "Rev. Fr. Edward Muwanga",
    role: "Parish Priest, St Charles Lwanga Parish",
  },
  {
    quote: "INCISE is the only local supplier I trust to consistently match what I specify on paper. They understand architecture, not just product — that makes all the difference on a real project.",
    name: "Granius",
    role: "CEO, Graite Interiors",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="label-text mb-4">CLIENT STORIES</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-16">
          Those who chose <span className="italic text-gradient-gold">INCISE.</span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic mb-8">
              "{testimonials[active].quote}"
            </blockquote>
            <p className="text-foreground font-body font-semibold">
              {testimonials[active].name}
            </p>
            <p className="text-muted-foreground text-sm font-body">
              {testimonials[active].role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                active === i ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
