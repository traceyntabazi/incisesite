import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-text mb-4">LET'S BUILD SOMETHING</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Ready to define{" "}
            <span className="italic text-gradient-gold">your space?</span>
          </h2>
          <p className="text-secondary-foreground font-body leading-relaxed mb-10 max-w-lg mx-auto">
            Talk to our team about your project. We'll recommend the right
            system, provide samples, and support you from first question to
            final coat — at no cost for consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-wider font-body hover:bg-gold-light transition-colors"
            >
              START A PROJECT ↗
            </a>
            <a
              href="#"
              className="border border-border text-foreground px-8 py-3.5 text-sm tracking-wider font-body hover:border-primary hover:text-primary transition-colors"
            >
              DOWNLOAD CATALOGUE
            </a>
            <a
              href="#"
              className="border border-border text-foreground px-8 py-3.5 text-sm tracking-wider font-body hover:border-primary hover:text-primary transition-colors"
            >
              CALL US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
