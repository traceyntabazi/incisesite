import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import textureImage from "@/assets/texture-grey.jpg";
import packagingImage from "@/assets/product-packaging.jpg";
import heroImage from "@/assets/hero-living.jpg";
import projectLobby from "@/assets/project-lobby.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectSafari from "@/assets/project-safari.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: [0, 0, 0.2, 1] as const },
};

const milestones = [
  { year: "2020", title: "Founded in Kampala", desc: "INCISE was born from a simple question — why does East Africa import every premium surface finish?" },
  { year: "2021", title: "First production run", desc: "Proprietary cementitious formulations developed and manufactured locally for the first time." },
  { year: "2022", title: "Academy launched", desc: "The INCISE Academy began training applicators across Uganda and Kenya, building a regional craft." },
  { year: "2023", title: "Kenya expansion", desc: "Nairobi office established. Distributor partnerships formed across the Kenyan market." },
  { year: "2024", title: "700+ applicators trained", desc: "The Academy surpassed seven hundred certified applicators — the largest decorative coatings network in East Africa." },
  { year: "2025", title: "Category leadership", desc: "Over 400 clients served. INCISE became the reference standard for architects specifying decorative coatings in the region." },
];

const stats = [
  { value: "400+", label: "Clients Served" },
  { value: "700+", label: "Applicators Trained" },
  { value: "2020", label: "Year Founded" },
  { value: "100yr", label: "Institution Vision" },
];

const principles = [
  {
    title: "Craft over convenience",
    desc: "Every INCISE surface is hand-applied by a trained artisan. There are no shortcuts, no spray-and-walk-away solutions. The process is the product.",
  },
  {
    title: "Systems, not products",
    desc: "We manufacture primers, base coats, finish coats, polymers, sealers, and tools — engineered to work as one integrated system. No third-party compatibility risks.",
  },
  {
    title: "Formulated here, for here",
    desc: "Our coatings are developed in Uganda for East Africa's climate — its humidity, UV intensity, and temperature cycles. Imported generics weren't designed for this.",
  },
  {
    title: "Train the ecosystem",
    desc: "A coating is only as good as the hand that applies it. The INCISE Academy exists because we believe the region's applicators deserve world-class skill development.",
  },
  {
    title: "Accountability at every layer",
    desc: "When we supply the full system, we own the outcome. One call, one team, one standard — from first primer to final sealer.",
  },
];

const BrandPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About INCISE — Microcement Manufacturer | Founded in Uganda 2020"
        description="INCISE is East Africa's authority on premium microcement and cement-based decorative coatings. Founded in Kampala in 2020, we've trained 700+ applicators and served 400+ clients across Uganda and Kenya."
        canonical="https://incisesite.lovable.app/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Organization",
            name: "INCISE Uganda Limited",
            description: "East Africa's leading manufacturer of microcement and cement-based decorative wall and floor coatings.",
            foundingDate: "2020",
            foundingLocation: { "@type": "Place", name: "Kampala, Uganda" },
            numberOfEmployees: { "@type": "QuantitativeValue", value: "700+", unitText: "trained applicators" },
          },
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="INCISE surface finish in a luxury interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, transparent 20%, rgba(26,24,22,.92) 100%)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-[60px] pb-20 md:pb-28 pt-32 w-full max-w-[1400px] mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="label-text mb-4" style={{ color: "hsl(35 38% 58%)" }}>Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6" style={{ fontWeight: 300 }}>
              We don't coat surfaces.{" "}
              <span className="italic text-gradient-gold">We give them a voice.</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-xl font-body leading-relaxed" style={{ fontWeight: 300 }}>
              INCISE is East Africa's authority on premium decorative coatings — 
              manufactured in Uganda, specified by the region's leading architects, 
              and applied by a trained network of over 700 artisans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
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

      {/* Origin Story */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="label-text mb-4">The Origin</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight" style={{ fontWeight: 300 }}>
              A question that became{" "}
              <span className="italic text-gradient-gold">a company.</span>
            </h2>
            <div className="space-y-5 text-secondary-foreground font-body leading-[1.95]" style={{ fontWeight: 300 }}>
              <p>
                In 2020, a conversation about imported surface finishes sparked a harder question: 
                why does East Africa depend on products that weren't formulated for its climate, 
                shipped from factories that have never seen its substrates?
              </p>
              <p>
                The answer wasn't to import better — it was to build from here. INCISE was 
                founded to create a complete coating system — primers, base coats, finish coats, 
                polymers, sealers — manufactured in Kampala, tested against equatorial UV, 
                humidity, and temperature extremes.
              </p>
              <p>
                But a product is only half the equation. The other half is craft. So we built 
                the INCISE Academy — training applicators across Uganda and Kenya to apply our 
                systems to an international standard. Today, that network exceeds 700 certified 
                artisans, and every surface they complete is an argument that premium can come 
                from East Africa.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0, 0, 0.2, 1] }}
            className="relative"
          >
            <img src={textureImage} alt="INCISE cementitious texture close-up" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-4 py-2">
              <p className="label-text text-[10px]">MANUFACTURED IN UGANDA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Principles */}
      <section className="section-padding bg-dark text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp} className="mb-16 max-w-xl">
            <p className="text-[0.6rem] tracking-[0.24em] uppercase font-body mb-4" style={{ color: "hsl(35 38% 58%)", fontWeight: 300 }}>
              What We Believe
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-6" style={{ fontWeight: 300 }}>
              Five principles that shape{" "}
              <span className="italic" style={{ color: "hsl(35 38% 58%)" }}>every decision.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 md:p-10"
                style={{ background: "hsl(26, 7%, 19%)" }}
              >
                <span className="text-[0.55rem] tracking-[0.24em] uppercase font-body mb-4 block" style={{ color: "hsl(35 38% 58%)", fontWeight: 300 }}>
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 300 }}>
                  {p.title}
                </h3>
                <p className="text-white/60 text-[0.88rem] font-body leading-[1.95]" style={{ fontWeight: 300 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 md:p-10 flex flex-col justify-center"
              style={{ background: "hsl(35, 38%, 58%)" }}
            >
              <h3 className="font-display text-xl md:text-2xl text-white mb-3" style={{ fontWeight: 300 }}>
                The 100-year vision.
              </h3>
              <p className="text-white/80 text-[0.88rem] font-body leading-[1.95] mb-6" style={{ fontWeight: 300 }}>
                INCISE is not built for a market cycle. It is built to become an institution — 
                the reference standard for surface coatings across the African continent.
              </p>
              <a
                href="/academy"
                className="inline-flex self-start bg-white text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-white/90 transition-colors"
              >
                EXPLORE THE ACADEMY →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp} className="mb-16 max-w-xl">
            <p className="label-text mb-4">Our Journey</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight" style={{ fontWeight: 300 }}>
              From question to{" "}
              <span className="italic text-gradient-gold">category leader.</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12 md:space-y-16">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <span className="font-display text-3xl md:text-4xl text-primary" style={{ fontWeight: 300 }}>
                      {m.year}
                    </span>
                  </div>
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <h3 className="font-body text-foreground mb-1" style={{ fontWeight: 500 }}>
                      {m.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.88rem] font-body leading-[1.8]" style={{ fontWeight: 300 }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 md:px-[60px] pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {[
            { src: projectLobby, alt: "INCISE finish in a hotel lobby" },
            { src: projectRestaurant, alt: "INCISE microtopping in a restaurant interior" },
            { src: projectSafari, alt: "INCISE coating at a safari lodge" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <blockquote className="font-display text-2xl md:text-4xl text-foreground leading-[1.3] mb-6" style={{ fontWeight: 300 }}>
              "We wanted to create a brand identity that was representative of the creative process — 
              a process that requires experimentation, trust, and design discipline."
            </blockquote>
            <p className="label-text">From the INCISE Operations Bible</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="label-text mb-4">Work With Us</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6" style={{ fontWeight: 300 }}>
              Specify INCISE for{" "}
              <span className="italic text-gradient-gold">your next project.</span>
            </h2>
            <p className="text-secondary-foreground font-body leading-[1.95] mb-10 max-w-lg mx-auto" style={{ fontWeight: 300 }}>
              Whether you're an architect, developer, interior designer, or contractor — 
              talk to our team about the right system for your space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors"
              >
                GET IN TOUCH →
              </a>
              <a
                href="/products"
                className="border border-secondary-foreground/30 text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors"
              >
                EXPLORE PRODUCTS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPage;
