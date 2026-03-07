import { motion } from "framer-motion";

const articles = [
  { tag: "TECHNICAL GUIDE", title: "Microtopping vs Polished Concrete: Which is Right for Your Project?", date: "March 2025", read: "6 min read" },
  { tag: "FOR ARCHITECTS", title: "How to Specify Decorative Coatings: A Practical Guide", date: "February 2025", read: "8 min read" },
  { tag: "PRODUCT KNOWLEDGE", title: "Outdoor Floor Coatings in East Africa: What the Climate Demands", date: "January 2025", read: "5 min read" },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label-text mb-4">INCISE INSIGHTS</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Ideas, knowledge, <span className="italic text-gradient-gold">inspiration.</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-primary transition-colors font-body tracking-wide">
            ALL ARTICLES →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted border border-border p-6 group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <p className="label-text text-[10px] mb-4">{article.tag}</p>
              <h3 className="font-display text-lg text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-xs font-body">
                {article.date} · {article.read}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
