import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The team spent days and sleepless nights in the church to deliver a perfect product. It exceeds all expectations. A truly professional team.",
    name: "Rev. Fr. Edward Muwanga",
    role: "Parish Priest · St Charles Lwanga",
  },
  {
    quote: "INCISE is leading the decorative surface space in Uganda. My clients now specify microtopping by name. That's what market authority looks like.",
    name: "Eva Balungi",
    role: "Interior Designer · Kampala",
  },
  {
    quote: "Working with INCISE is straightforward. They have a system. They follow it. And the results speak for themselves every time.",
    name: "Granius",
    role: "CEO · Graite Interiors",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <p className="label-text mb-4">CLIENT STORIES</p>
        <h2 className="font-display text-3xl md:text-4xl text-white mb-16" style={{ fontWeight: 300 }}>
          Those who chose <span className="italic" style={{ color: "hsl(35 38% 58%)" }}>INCISE.</span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-4xl text-white/20 leading-none mb-4">"</p>
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic mb-8" style={{ fontWeight: 300 }}>
              {testimonials[active].quote}
            </blockquote>
            <p className="text-white font-body" style={{ fontWeight: 400 }}>
              {testimonials[active].name}
            </p>
            <p className="text-white/50 text-sm font-body" style={{ fontWeight: 300 }}>
              {testimonials[active].role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 transition-all ${
                active === i ? "bg-primary w-6" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
