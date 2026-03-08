import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowRight, Building2, Users, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";

interface Location {
  id: string;
  type: "hq" | "office" | "distributor";
  name: string;
  address: string[];
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  description?: string;
  products?: string[];
}

const locations: Location[] = [
  {
    id: "kampala-hq",
    type: "hq",
    name: "Showroom & Head Offices",
    address: ["Plot 2490 YK Hameid Road", "Luzira Industrial Park"],
    city: "Kampala",
    country: "Uganda",
    countryCode: "UG",
    lat: 0.3076,
    lng: 32.6473,
    description: "Our manufacturing base and flagship showroom — where every INCISE system is formulated, tested, and perfected before it reaches your project.",
    products: ["Microtopping", "Metallic Finish", "Wallcrete", "Patio System"],
  },
  {
    id: "nairobi-office",
    type: "office",
    name: "Nairobi Office",
    address: ["7th Floor Purshotam Place", "Westlands Road"],
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    lat: -1.2672,
    lng: 36.8114,
    description: "Our East African expansion hub — supporting architects, contractors, and specifiers across Kenya with technical consultation and product sourcing.",
    products: ["Microtopping", "Metallic Finish", "Wallcrete"],
  },
  {
    id: "modern-spark",
    type: "distributor",
    name: "Modern Spark Lighting & Coatings",
    address: ["Abayita Ababiri"],
    city: "Entebbe",
    country: "Uganda",
    countryCode: "UG",
    lat: 0.0612,
    lng: 32.4633,
    description: "Authorised INCISE distributor serving the Greater Entebbe region — combining premium lighting solutions with our decorative coating systems.",
    products: ["Microtopping", "Wallcrete", "Patio System"],
  },
  {
    id: "spear-mode",
    type: "distributor",
    name: "Spear Mode Limited",
    address: ["Eastern Bypass", "Kamakis"],
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    lat: -1.2200,
    lng: 36.9060,
    description: "Certified INCISE partner providing product supply and on-ground technical support for projects across Nairobi's eastern corridor.",
    products: ["Microtopping", "Metallic Finish", "Wallcrete"],
  },
  {
    id: "thallo",
    type: "distributor",
    name: "Thallo Ventures Limited",
    address: ["9, Valleyfield Court", "Hendred Road, Lavington"],
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    lat: -1.2780,
    lng: 36.7730,
    description: "Premium INCISE distribution partner in Lavington — specialising in high-end residential and hospitality projects across Western Nairobi.",
    products: ["Microtopping", "Metallic Finish", "Wallcrete", "Patio System"],
  },
];

const filterOptions = ["All", "Uganda", "Kenya"] as const;
type FilterOption = (typeof filterOptions)[number];

const typeLabels: Record<Location["type"], { label: string; icon: React.ReactNode }> = {
  hq: { label: "Headquarters", icon: <Building2 className="w-4 h-4" /> },
  office: { label: "Regional Office", icon: <Globe className="w-4 h-4" /> },
  distributor: { label: "Authorised Distributor", icon: <Package className="w-4 h-4" /> },
};

const LocationCard = ({ location, index }: { location: Location; index: number }) => {
  const typeInfo = typeLabels[location.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`group relative border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.15)] ${
        location.type === "hq" ? "md:col-span-2 border-primary/30" : ""
      }`}
    >
      {/* Type badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="flex items-center gap-1.5 text-[0.6rem] tracking-[0.22em] uppercase font-body text-primary" style={{ fontWeight: 500 }}>
          {typeInfo.icon}
          {typeInfo.label}
        </span>
        <span className="ml-auto text-[0.6rem] tracking-[0.18em] uppercase font-body text-muted-foreground" style={{ fontWeight: 400 }}>
          {location.countryCode}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3" style={{ fontWeight: 300 }}>
        {location.name}
      </h3>

      {/* Address */}
      <div className="flex items-start gap-2 mb-4">
        <MapPin className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
        <div className="text-[0.88rem] font-body text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>
          {location.address.map((line, i) => (
            <span key={i}>
              {line}
              {i < location.address.length - 1 && <br />}
            </span>
          ))}
          <br />
          {location.city}, {location.country}
        </div>
      </div>

      {/* Description */}
      {location.description && (
        <p className="text-[0.82rem] font-body text-secondary-foreground/80 leading-[1.9] mb-6" style={{ fontWeight: 300 }}>
          {location.description}
        </p>
      )}

      {/* Products available */}
      {location.products && (
        <div className="flex flex-wrap gap-2">
          {location.products.map((product) => (
            <span
              key={product}
              className="text-[0.62rem] tracking-[0.14em] uppercase font-body px-3 py-1.5 border border-border bg-background text-muted-foreground"
              style={{ fontWeight: 400 }}
            >
              {product}
            </span>
          ))}
        </div>
      )}

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-[1px] h-8 bg-primary/40" />
        <div className="absolute top-0 right-0 h-[1px] w-8 bg-primary/40" />
      </div>
    </motion.div>
  );
};

const LocationsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filtered = activeFilter === "All"
    ? locations
    : locations.filter((l) => l.country === activeFilter);

  const officeCount = locations.filter((l) => l.type !== "distributor").length;
  const distributorCount = locations.filter((l) => l.type === "distributor").length;
  const countryCount = new Set(locations.map((l) => l.country)).size;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }} />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-text mb-5">FIND INCISE</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6" style={{ fontWeight: 300 }}>
              Where to find{" "}
              <span className="italic text-gradient-gold">our surfaces</span>
            </h1>
            <p className="text-white/60 font-body text-base md:text-lg max-w-2xl leading-[1.9]" style={{ fontWeight: 300 }}>
              From our manufacturing base in Kampala to authorised partners across East Africa —
              discover where to source INCISE systems, access technical support, and experience our finishes firsthand.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-12 md:gap-20 mt-14 pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { value: officeCount, label: "Offices" },
              { value: distributorCount, label: "Distributors" },
              { value: countryCount, label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-primary" style={{ fontWeight: 300 }}>
                  {stat.value}
                </p>
                <p className="text-[0.62rem] tracking-[0.2em] uppercase text-white/40 font-body mt-1" style={{ fontWeight: 400 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[76px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center gap-6">
          <span className="text-[0.6rem] tracking-[0.2em] uppercase font-body text-muted-foreground hidden md:block" style={{ fontWeight: 400 }}>
            Region
          </span>
          <div className="flex gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`text-[0.68rem] tracking-[0.14em] uppercase font-body px-5 py-2 transition-all duration-300 ${
                  activeFilter === option
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
                style={{ fontWeight: 400 }}
              >
                {option}
              </button>
            ))}
          </div>
          <span className="ml-auto text-[0.72rem] font-body text-muted-foreground" style={{ fontWeight: 300 }}>
            {filtered.length} location{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="border-b border-border">
        <div className="h-[420px] md:h-[520px] w-full">
          <LocationMap
            locations={filtered}
          />
        </div>
      </section>

      {/* Locations grid */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          {/* Offices & HQ */}
          <div className="mb-16">
            <p className="text-[0.6rem] tracking-[0.24em] uppercase font-body text-muted-foreground mb-8" style={{ fontWeight: 400 }}>
              Our Offices
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {filtered
                .filter((l) => l.type !== "distributor")
                .map((location, i) => (
                  <LocationCard key={location.id} location={location} index={i} />
                ))}
            </div>
          </div>

          {/* Distributors */}
          {filtered.filter((l) => l.type === "distributor").length > 0 && (
            <div>
              <p className="text-[0.6rem] tracking-[0.24em] uppercase font-body text-muted-foreground mb-8" style={{ fontWeight: 400 }}>
                Authorised Distributors
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered
                  .filter((l) => l.type === "distributor")
                  .map((location, i) => (
                    <LocationCard key={location.id} location={location} index={i} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Become a distributor CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-dark text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-text mb-5">EXPAND WITH US</p>
              <h2 className="font-display text-3xl md:text-5xl mb-6" style={{ fontWeight: 300 }}>
                Can't find us{" "}
                <span className="italic text-gradient-gold">in your region?</span>
              </h2>
              <p className="text-white/60 font-body text-[0.92rem] leading-[1.95] mb-8" style={{ fontWeight: 300 }}>
                We're actively expanding our distribution network across East Africa and beyond.
                Whether you're looking to source INCISE products for a project or interested in
                becoming an authorised distributor, we'd love to hear from you.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Exclusive territory rights for qualified partners",
                  "Full technical training and certification programme",
                  "Marketing support and co-branded materials",
                  "Priority access to new product launches",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full mt-2.5 shrink-0" />
                    <p className="text-white/50 font-body text-[0.84rem] leading-relaxed" style={{ fontWeight: 300 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-dark-mid p-10 md:p-12 border border-white/8"
            >
              <h3 className="font-display text-2xl text-white mb-2" style={{ fontWeight: 300 }}>
                Get in touch
              </h3>
              <p className="text-white/40 font-body text-[0.8rem] mb-8" style={{ fontWeight: 300 }}>
                Tell us about your interest and we'll respond within 24 hours.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase font-body text-white/40 mb-2 block" style={{ fontWeight: 400 }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-[0.88rem] py-3 focus:outline-none focus:border-primary transition-colors"
                    style={{ fontWeight: 300 }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase font-body text-white/40 mb-2 block" style={{ fontWeight: 400 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-[0.88rem] py-3 focus:outline-none focus:border-primary transition-colors"
                    style={{ fontWeight: 300 }}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase font-body text-white/40 mb-2 block" style={{ fontWeight: 400 }}>
                    I'm interested in
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-white/15 text-white/70 font-body text-[0.88rem] py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    style={{ fontWeight: 300 }}
                  >
                    <option value="" className="bg-[hsl(var(--dark-bg))]">Select an option</option>
                    <option value="source" className="bg-[hsl(var(--dark-bg))]">Sourcing products for a project</option>
                    <option value="distribute" className="bg-[hsl(var(--dark-bg))]">Becoming an authorised distributor</option>
                    <option value="specify" className="bg-[hsl(var(--dark-bg))]">Specifying INCISE for my practice</option>
                    <option value="other" className="bg-[hsl(var(--dark-bg))]">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase font-body text-white/40 mb-2 block" style={{ fontWeight: 400 }}>
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-[0.88rem] py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    style={{ fontWeight: 300 }}
                    placeholder="Tell us about your project or interest..."
                  />
                </div>

                <button className="w-full mt-4 bg-primary text-primary-foreground px-8 py-4 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-[hsl(var(--gold-light))] transition-colors flex items-center justify-center gap-2">
                  Send Enquiry <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-border section-padding">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <p className="label-text">WHY PARTNER WITH INCISE</p>
            </div>
            <h2 className="font-display text-2xl md:text-4xl text-foreground mb-12" style={{ fontWeight: 300 }}>
              Built for professionals who{" "}
              <span className="italic text-gradient-gold">demand more</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10 md:gap-16 text-left md:text-center">
              {[
                {
                  title: "Manufactured Locally",
                  desc: "Every INCISE system is formulated and produced in Kampala — ensuring faster lead times, consistent quality, and supply chain you can rely on.",
                },
                {
                  title: "Technical Backbone",
                  desc: "Our Academy programme certifies every distributor and applicator. Your team gets hands-on training, spec sheets, and ongoing support — not just product.",
                },
                {
                  title: "Growing Network",
                  desc: "We're building East Africa's premier surface coating ecosystem. Early distribution partners benefit from protected territories and first-mover positioning.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl text-foreground mb-3" style={{ fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="text-[0.84rem] font-body text-secondary-foreground leading-[1.95]" style={{ fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationsPage;
