import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Site Assessment & Specification", desc: "We visit your site, assess the substrate condition, take measurements, and understand your design intent." },
  { num: "02", title: "Sample Review & Colour Selection", desc: "We provide physical samples so you can see the actual finish in your light conditions." },
  { num: "03", title: "Substrate Preparation", desc: "The most critical step. Surfaces are cleaned, repaired, and primed for lasting results." },
  { num: "04", title: "Application by Certified Applicators", desc: "Our trained applicators work in systematic layers — primer, base coat, finish coat, sealer." },
  { num: "05", title: "Curing & Final Seal", desc: "The product cures fully over 7–28 days. The final sealer determines sheen and protection." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="label-text mb-4">THE PROCESS</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
            From bare substrate to finished{" "}
            <span className="italic text-gradient-gold">masterpiece.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.85, ease: [0,0,.2,1] }}
              className="flex gap-6 md:gap-10 py-8 border-t border-border group"
            >
              <span className="text-3xl md:text-5xl font-display text-primary/30 group-hover:text-primary transition-colors flex-shrink-0" style={{ fontWeight: 300 }}>
                {step.num}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2" style={{ fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body leading-[1.95] text-[0.88rem]" style={{ fontWeight: 300 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
