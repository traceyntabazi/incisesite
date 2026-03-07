import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "Projects Completed" },
  { value: "12yrs", label: "In Surface Design" },
  { value: "8", label: "Distinct Product Lines" },
  { value: "EA", label: "East Africa Coverage" },
];

const StatsSection = () => {
  return (
    <section className="section-padding border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
