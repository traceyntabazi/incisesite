import { motion } from "framer-motion";

const levels = [
  { icon: "🎓", title: "Foundation Certificate", desc: "2-day hands-on programme. Surface preparation, mixing, and basic application techniques." },
  { icon: "⚒️", title: "Advanced Application", desc: "3-day programme. Complex substrates, multi-product systems, and decorative techniques." },
  { icon: "📋", title: "Master Applicator", desc: "Full certification with site assessment, client consultation, and project management." },
  { icon: "🤝", title: "Partner Programme", desc: "Business support, leads, and exclusive supply pricing for certified INCISE partners." },
];

const AcademySection = () => {
  return (
    <section id="academy" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text mb-4">INCISE ACADEMY</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              We build expertise, not just{" "}
              <span className="italic text-gradient-gold">surfaces.</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { val: "200+", label: "Trained Applicators" },
                { val: "12+", label: "Training Events/Year" },
                { val: "3", label: "Certification Levels" },
                { val: "EA", label: "Regional Reach" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary p-4 border border-border">
                  <p className="font-display text-2xl text-primary">{s.val}</p>
                  <p className="text-xs text-muted-foreground font-body">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="#" className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wider font-body hover:bg-gold-light transition-colors">
                LEARN ABOUT THE ACADEMY
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {levels.map((level, i) => (
              <div key={i} className="bg-secondary border border-border p-5 flex gap-4 hover:border-primary/30 transition-colors">
                <span className="text-2xl flex-shrink-0">{level.icon}</span>
                <div>
                  <h3 className="text-foreground font-body font-semibold mb-1">{level.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{level.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
