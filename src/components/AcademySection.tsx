import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const levels = [
  { icon: "🎓", title: "Foundation Certificate", desc: "2-day hands-on programme. Surface preparation, mixing, and basic application techniques." },
  { icon: "⚒️", title: "Advanced Application", desc: "3-day programme. Complex substrates, multi-product systems, and decorative techniques." },
  { icon: "📋", title: "Master Applicator", desc: "Full certification with site assessment, client consultation, and project management." },
  { icon: "🤝", title: "Partner Programme", desc: "Business support, leads, and exclusive supply pricing for certified INCISE partners." },
];

const AcademySection = () => {
  return (
    <section id="academy" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0,0,.2,1] }}
          >
            <p className="label-text mb-4">INCISE ACADEMY</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6" style={{ fontWeight: 300 }}>
              We build expertise, not just{" "}
              <span className="italic text-gradient-gold">surfaces.</span>
            </h2>

            <div className="grid grid-cols-2 gap-[2px] mb-8">
              {[
                { val: "200+", label: "Trained Applicators" },
                { val: "12+", label: "Training Events/Year" },
                { val: "5", label: "Certification Tiers" },
                { val: "EA", label: "Regional Reach" },
              ].map((s) => (
                <div key={s.label} className="bg-card p-4 border-l-[3px]" style={{ borderColor: "hsl(35 38% 58%)" }}>
                  <p className="font-display text-2xl text-primary" style={{ fontWeight: 300 }}>{s.val}</p>
                  <p className="text-[0.6rem] text-muted-foreground font-body tracking-[0.24em] uppercase" style={{ fontWeight: 300 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link to="/academy" className="bg-foreground text-background px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-secondary-foreground transition-colors">
                LEARN ABOUT THE ACADEMY →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0,0,.2,1] }}
            className="space-y-[2px]"
          >
            {levels.map((level, i) => (
              <div key={i} className="bg-card p-5 flex gap-4 hover:-translate-y-1 transition-transform duration-300 group">
                <span className="text-2xl flex-shrink-0">{level.icon}</span>
                <div>
                  <h3 className="text-foreground font-body mb-1 group-hover:text-primary transition-colors" style={{ fontWeight: 500 }}>{level.title}</h3>
                  <p className="text-muted-foreground text-[0.88rem] font-body leading-[1.95]" style={{ fontWeight: 300 }}>{level.desc}</p>
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
