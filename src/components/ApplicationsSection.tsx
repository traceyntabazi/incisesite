import { motion } from "framer-motion";

const apps = [
  { icon: "🏠", title: "Residential", sub: "Homes & Apartments" },
  { icon: "🏨", title: "Hospitality", sub: "Hotels & Lodges" },
  { icon: "🍽", title: "Food & Beverage", sub: "Restaurants & Bars" },
  { icon: "🏢", title: "Commercial", sub: "Offices & Retail" },
  { icon: "🌿", title: "Outdoor", sub: "Pools & Patios" },
  { icon: "⚕️", title: "Healthcare", sub: "Clinics & Hospitals" },
  { icon: "📚", title: "Education", sub: "Schools & Universities" },
  { icon: "🏭", title: "Industrial", sub: "Warehouses & Factories" },
];

const ApplicationsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-text mb-4">APPLICATIONS</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Every space <span className="italic text-gradient-gold">we serve.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-secondary border border-border p-6 text-center hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <span className="text-3xl mb-3 block">{app.icon}</span>
              <h3 className="text-foreground font-body font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {app.title}
              </h3>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                {app.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
