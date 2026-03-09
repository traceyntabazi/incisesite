import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { getProductBySlug, products, toneColors } from "@/data/products";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) return <Navigate to="/products" replace />;

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const nextProduct = products[(currentIndex + 1) % products.length];
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`INCISE ${product.name} | ${product.badge} — Microcement & Decorative Coatings`}
        description={product.description[0].slice(0, 155) + "…"}
        canonical={`https://incisesite.lovable.app/products/${product.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: `INCISE ${product.name}`,
          description: product.description[0],
          brand: { "@type": "Brand", name: "INCISE" },
          category: product.category.includes("wall") ? "Wall Finishes" : "Floor Finishes",
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-[140px] pb-0 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Home</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Products</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <span className="label-text text-[0.6rem]">{product.name}</span>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start pb-20">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0, 0, 0.2, 1] }}
            >
              <span className="label-text text-[10px] mb-1 block">{product.badge}</span>
              <p className="text-[0.6rem] text-muted-foreground font-body tracking-[0.24em] uppercase mb-4" style={{ fontWeight: 400 }}>
                {product.context}
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-3" style={{ fontWeight: 300 }}>
                {product.name}
              </h1>
              <p className="font-display italic text-lg text-muted-foreground mb-8" style={{ fontWeight: 300 }}>
                "{product.tagline}"
              </p>

              {product.description.map((para, i) => (
                <p key={i} className="text-secondary-foreground font-body leading-[1.95] mb-4 text-[0.88rem]" style={{ fontWeight: 300 }}>
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
                  REQUEST A SAMPLE →
                </a>
                <Link to="/technical" className="border border-secondary-foreground/30 text-foreground px-6 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
                  TECHNICAL DATA →
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
                  src={product.img}
                  alt={`INCISE ${product.name} — ${product.tagline}`}
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
            {product.specs.map((spec) => (
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
              {product.applications.map((app) => (
                <span key={app} className="px-4 py-2 text-[0.6rem] tracking-[0.24em] uppercase font-body bg-card text-muted-foreground">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-3" style={{ fontWeight: 400 }}>
              Available Tones
            </p>
            <div className="flex gap-1.5">
              {toneColors.slice(0, product.toneCount).map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: color, border: "1px solid rgba(63,63,62,.15)" }}
                  title={`Tone ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nav to other products */}
      <section className="section-padding border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between">
            <Link
              to={`/products/${prevProduct.slug}`}
              className="group"
            >
              <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1">← Previous</p>
              <p className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors" style={{ fontWeight: 300 }}>
                {prevProduct.name}
              </p>
            </Link>
            <Link to="/products" className="text-[0.68rem] tracking-[0.16em] uppercase font-body text-muted-foreground hover:text-foreground transition-colors">
              All Products
            </Link>
            <Link
              to={`/products/${nextProduct.slug}`}
              className="group text-right"
            >
              <p className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.24em] font-body mb-1">Next →</p>
              <p className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors" style={{ fontWeight: 300 }}>
                {nextProduct.name}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
