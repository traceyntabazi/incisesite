import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { applicators, type Applicator } from "@/data/applicators";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const availabilityStyles: Record<Applicator["availability"], string> = {
  "Available": "text-primary border-primary/40",
  "Limited Availability": "text-foreground border-secondary-foreground/40",
  "Booked — Waitlist": "text-muted-foreground border-secondary-foreground/25",
};

const BookingDialog = ({
  applicator,
  onClose,
}: {
  applicator: Applicator | null;
  onClose: () => void;
}) => {
  const [form, setForm] = useState({ name: "", contact: "", location: "", details: "" });

  if (!applicator) return null;

  const body = encodeURIComponent(
    `Applicator requested: ${applicator.name} (${applicator.company}) — ${applicator.tier}\n\n` +
      `Client name: ${form.name}\nPhone / email: ${form.contact}\nProject location: ${form.location}\n\nProject details:\n${form.details}\n`
  );
  const subject = encodeURIComponent(`Booking request — ${applicator.name}`);
  const mailto = `mailto:${applicator.email}?subject=${subject}&body=${body}`;
  const whatsapp = `https://wa.me/${applicator.phone.replace(/[^0-9]/g, "")}?text=${body}`;

  return (
    <Dialog open={!!applicator} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg rounded-none bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground" style={{ fontWeight: 300 }}>
            Book {applicator.name}
          </DialogTitle>
          <DialogDescription className="text-[0.82rem] font-body text-muted-foreground" style={{ fontWeight: 300 }}>
            {applicator.company} · {applicator.city}, {applicator.country} · {applicator.tier}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          {[
            { key: "name", label: "YOUR NAME", placeholder: "Full name" },
            { key: "contact", label: "PHONE OR EMAIL", placeholder: "How we reach you" },
            { key: "location", label: "PROJECT LOCATION", placeholder: "City / area" },
          ].map((f) => (
            <div key={f.key}>
              <label className="label-text text-[10px] block mb-1.5">{f.label}</label>
              <input
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                placeholder={f.placeholder}
                className="w-full bg-secondary border border-border px-3 py-2.5 text-[0.85rem] font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                style={{ fontWeight: 300 }}
              />
            </div>
          ))}
          <div>
            <label className="label-text text-[10px] block mb-1.5">PROJECT DETAILS</label>
            <textarea
              rows={3}
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              placeholder="Surface type, approximate area, timeline"
              className="w-full bg-secondary border border-border px-3 py-2.5 text-[0.85rem] font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
              style={{ fontWeight: 300 }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={mailto}
            className="bg-primary text-primary-foreground px-6 py-3 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors"
          >
            SEND BOOKING REQUEST →
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border border-secondary-foreground/30 text-foreground px-6 py-3 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors"
          >
            SEND VIA WHATSAPP
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ApplicatorsPage = () => {
  const [country, setCountry] = useState("All");
  const [specialty, setSpecialty] = useState("All");
  const [booking, setBooking] = useState<Applicator | null>(null);

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(applicators.map((a) => a.country)))],
    []
  );
  const specialties = useMemo(
    () => ["All", ...Array.from(new Set(applicators.flatMap((a) => a.specialties)))],
    []
  );

  const filtered = applicators.filter(
    (a) =>
      (country === "All" || a.country === country) &&
      (specialty === "All" || a.specialties.includes(specialty))
  );

  const voices = applicators.filter((a) => a.testimonial);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Licensed INCISE Applicators — Find & Book a Certified Installer | East Africa"
        description="Browse INCISE-certified and licensed microcement applicators across Uganda and Kenya. Filter by location and specialty, review completed projects, and book a trained installer directly."
        canonical="https://incisesite.lovable.app/academy/applicators"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-[140px] pb-16 px-6 md:px-[60px] border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/academy" className="label-text text-[10px] hover:text-primary transition-colors">
              ← INCISE ACADEMY
            </Link>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mt-6 mb-5 leading-[1.05]" style={{ fontWeight: 300 }}>
              Licensed <span className="italic text-gradient-gold">applicators.</span>
            </h1>
            <p className="text-muted-foreground font-body text-[0.95rem] max-w-2xl leading-[1.95]" style={{ fontWeight: 300 }}>
              Every applicator listed here was trained through the INCISE Academy, certified against our three QA gates,
              and has delivered live projects for us across East Africa. Filter by location or specialty, review their
              work, and book them directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-[60px] py-8 border-b border-border sticky top-[76px] bg-background/95 backdrop-blur-md z-40">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-text text-[10px] mr-2">LOCATION</span>
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={`px-4 py-2 text-[0.68rem] tracking-[0.14em] uppercase font-body border transition-colors ${
                  country === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-text text-[10px] mr-2">SPECIALTY</span>
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className={`px-4 py-2 text-[0.68rem] tracking-[0.14em] uppercase font-body border transition-colors ${
                  specialty === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Roster */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <p className="label-text mb-8">{filtered.length} LICENSED APPLICATOR{filtered.length === 1 ? "" : "S"}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
            {filtered.map((a, i) => (
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.8, ease: [0, 0, 0.2, 1] }}
                className="bg-card p-8 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 bg-secondary flex items-center justify-center font-display text-xl text-primary" style={{ fontWeight: 300 }}>
                    {a.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className={`text-[0.58rem] tracking-[0.18em] uppercase font-body border px-2.5 py-1 ${availabilityStyles[a.availability]}`}>
                    {a.availability}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-foreground mb-1" style={{ fontWeight: 400 }}>{a.name}</h3>
                <p className="text-[0.78rem] font-body text-muted-foreground mb-3" style={{ fontWeight: 300 }}>
                  {a.company} · {a.city}, {a.country}
                </p>
                <p className="label-text text-[10px] mb-5">{a.tier} · {a.intake}</p>

                <div className="grid grid-cols-2 gap-[2px] mb-5">
                  <div className="bg-secondary p-3">
                    <p className="font-display text-2xl text-foreground leading-none" style={{ fontWeight: 300 }}>{a.projectsCompleted}</p>
                    <p className="text-[0.58rem] tracking-[0.2em] uppercase font-body text-muted-foreground mt-1">Projects</p>
                  </div>
                  <div className="bg-secondary p-3">
                    <p className="font-display text-2xl text-foreground leading-none" style={{ fontWeight: 300 }}>{a.yearsCertified}</p>
                    <p className="text-[0.58rem] tracking-[0.2em] uppercase font-body text-muted-foreground mt-1">Years licensed</p>
                  </div>
                </div>

                <p className="text-[0.85rem] font-body text-muted-foreground leading-[1.9] mb-5" style={{ fontWeight: 300 }}>{a.bio}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {a.specialties.map((s) => (
                    <span key={s} className="text-[0.62rem] tracking-[0.12em] uppercase font-body text-muted-foreground border border-border px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="label-text text-[10px] mb-3">SELECTED PROJECTS</p>
                  <ul className="space-y-2">
                    {a.notableProjects.map((p) => (
                      <li key={p.name} className="text-[0.82rem] font-body text-muted-foreground leading-[1.7]" style={{ fontWeight: 300 }}>
                        <span className="text-foreground">{p.name}</span> — {p.scope}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setBooking(a)}
                  className="mt-auto bg-primary text-primary-foreground px-6 py-3 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors text-center"
                >
                  BOOK {a.name.split(" ")[0].toUpperCase()} →
                </button>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-muted-foreground font-body text-[0.9rem]" style={{ fontWeight: 300 }}>
              No licensed applicator matches that combination yet. Try another location or specialty.
            </p>
          )}
        </div>
      </section>

      {/* Applicator voices */}
      <section className="section-padding bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="label-text mb-4">APPLICATOR VOICES</p>
            <h2 className="font-display text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
              Life after the <span className="italic" style={{ color: "hsl(35 38% 58%)" }}>licence.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[3px]">
            {voices.map((a, i) => (
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.85, ease: [0, 0, 0.2, 1] }}
                className="bg-dark-mid p-8"
              >
                <p className="font-display text-4xl text-white/20 leading-none mb-4" style={{ fontWeight: 300 }}>"</p>
                <blockquote className="font-display text-lg text-white italic leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  {a.testimonial}
                </blockquote>
                <p className="text-white font-body text-sm" style={{ fontWeight: 400 }}>{a.name}</p>
                <p className="text-white/50 text-[0.65rem] font-body mb-4" style={{ fontWeight: 300 }}>
                  {a.tier} · {a.intake} · {a.city}
                </p>
                <p className="text-white/40 text-[0.72rem] font-body" style={{ fontWeight: 300 }}>
                  Recent work: {a.notableProjects.map((p) => p.name).join(" · ")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4" style={{ fontWeight: 300 }}>
            Not sure who fits your <span className="italic text-gradient-gold">project?</span>
          </h2>
          <p className="text-muted-foreground font-body text-[0.88rem] mb-8 max-w-lg mx-auto" style={{ fontWeight: 300 }}>
            Tell us the surface, the area and the timeline. We will match you with a licensed applicator near you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">REQUEST A MATCH →</a>
            <Link to="/academy" className="border border-secondary-foreground/30 text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">BECOME AN APPLICATOR →</Link>
          </div>
        </div>
      </section>

      <BookingDialog applicator={booking} onClose={() => setBooking(null)} />
      <Footer />
    </div>
  );
};

export default ApplicatorsPage;
