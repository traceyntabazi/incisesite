import { motion } from "framer-motion";

const stats = [
  { value: "400+", label: "Clients Served" },
  { value: "700+", label: "Applicators Trained" },
  { value: "2020", label: "Year Founded" },
  { value: "100yr", label: "Institution Vision" },
];

const StatsSection = () => {
  return (
    <section className="section-padding border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-[3px] pl-4"
              style={{ borderColor: "hsl(35 38% 58%)" }}
            >
              <p className="font-display text-4xl md:text-5xl text-foreground mb-2" style={{ fontWeight: 300 }}>
                {stat.value}
              </p>
              <p className="text-muted-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body" style={{ fontWeight: 300 }}>
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
