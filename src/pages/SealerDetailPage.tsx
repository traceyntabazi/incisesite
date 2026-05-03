import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { getSealerBySlug, sealers } from "@/data/sealers";

const SealerDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const sealer = getSealerBySlug(slug || "");

  if (!sealer) return <Navigate to="/sealers" replace />;

  const currentIndex = sealers.findIndex((s) => s.slug === slug);
  const nextSealer = sealers[(currentIndex + 1) % sealers.length];
  const prevSealer = sealers[(currentIndex - 1 + sealers.length) % sealers.length];

  const specs = [
    { label: "Finish", value: sealer.finish },
    { label: "Packaging", value: sealer.packaging.join(" · ") },
    { label: "Coverage", value: sealer.coverage },
    { label: "Curing", value: sealer.curing.join(" · ") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`INCISE ${sealer.name} | ${sealer.badge} — Microcement Sealer`}
        description={sealer.description[0].slice(0, 155) + "…"}
        canonical={`https://incisesite.lovable.app/sealers/${sealer.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: `INCISE ${sealer.name}`,
          description: sealer.description[0],
          brand: { "@type": "Brand", name: "INCISE" },
          category: "Surface Protection Sealers",
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-[140px] pb-0 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Home</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Products</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <Link to="/sealers" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Sealers</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <span className="label-text text-[0.6rem]">{sealer.name}</span>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start pb-20">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0, 0, 0.2, 1] }}
            >
              <span className="label-text text-[10px] mb-1 block">{sealer.badge}</span>
              <p className="text-[0.6rem] text-muted-foreground font-body tracking-[0.24em] uppercase mb-4" style={{ fontWeight: 400 }}>
                {sealer.context}
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-3" style={{ fontWeight: 300 }}>
                {sealer.name}
              </h1>
              <p className="font-display italic text-lg text-muted-foreground mb-8" style={{ fontWeight: 300 }}>
                "{sealer.tagline}"
              </p>

              {sealer.description.map((para, i) => (
                <p key={i} className="text-secondary-foreground font-body leading-[1.95] mb-4 text-[0.88rem]" style={{ fontWeight: 300 }}>
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
                  REQUEST A QUOTE →
                </a>
                <Link to="/sealers" className="border border-secondary-foreground/30 text-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
                  ALL SEALERS →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.85, ease: [0, 0, 0.2, 1] }}
              className="sticky top-[140px]"
            >
              <div className="overflow-hidden">
                <img
                  src={sealer.img}
                  alt={`INCISE ${sealer.name} — ${sealer.tagline}`}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="label-text mb-4">TECHNICAL SPECIFICATIONS</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground" style={{ fontWeight: 300 }}>
              System <span className="italic text-gradient-gold">details.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] mb-12">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-card p-5">
                <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1" style={{ fontWeight: 400 }}>
                  {spec.label}
                </p>
                <p className="text-foreground font-body text-sm" style={{ fontWeight: 400 }}>{spec.value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="label-text mb-4 text-[10px]">APPLICATIONS</p>
            <div className="flex flex-wrap gap-[2px]">
              {sealer.applications.map((app) => (
                <span key={app} className="px-4 py-2 text-[0.6rem] tracking-[0.24em] uppercase font-body bg-card text-muted-foreground">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-3" style={{ fontWeight: 400 }}>
              Curing Notes
            </p>
            <ul className="space-y-2">
              {sealer.curing.map((c) => (
                <li key={c} className="text-secondary-foreground font-body text-[0.88rem]" style={{ fontWeight: 300 }}>
                  · {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nav */}
      <section className="section-padding border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Link to={`/sealers/${prevSealer.slug}`} className="group">
              <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1">← Previous</p>
              <p className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors" style={{ fontWeight: 300 }}>
                {prevSealer.name}
              </p>
            </Link>
            <Link to="/sealers" className="text-[0.68rem] tracking-[0.16em] uppercase font-body text-muted-foreground hover:text-foreground transition-colors">
              All Sealers
            </Link>
            <Link to={`/sealers/${nextSealer.slug}`} className="group text-right">
              <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1">Next →</p>
              <p className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors" style={{ fontWeight: 300 }}>
                {nextSealer.name}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SealerDetailPage;
