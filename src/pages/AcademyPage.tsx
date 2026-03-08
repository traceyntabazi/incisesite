import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  { num: "01", tier: "TIER I", title: "Certified Applicator", desc: "Qualified to apply INCISE systems under supervision. Eligible for residential projects and supervised commercial work." },
  { num: "02", tier: "TIER II", title: "Senior Applicator", desc: "Independent project delivery on residential and mid-scale commercial projects. Eligible to supervise Certified Applicators." },
  { num: "03", tier: "TIER III", title: "Lead Applicator", desc: "Project leadership on all INCISE system types. Authorised to sign off QA gates and manage multi-team projects." },
  { num: "04", tier: "TIER IV", title: "Master Applicator", desc: "Full technical authority. Eligible for complex hospitality, institutional, and export market projects. INCISE-endorsed expert." },
  { num: "05", tier: "TIER V", title: "Certified Trainer", desc: "Authorised to deliver INCISE Academy curriculum. The highest level of certification — reserved for our most disciplined practitioners." },
];

const phases = [
  {
    weeks: "WEEKS 1–2", num: "01", title: "Foundation",
    desc: "Theory and system understanding. Before you touch a trowel, you must understand the chemistry, the philosophy, and the standard you are being asked to uphold.",
    items: ["INCISE Brand Philosophy & Standards", "Product System Overview", "Health & Safety Fundamentals", "Tools & Equipment Standards", "Surface Science & Chemistry", "ERP Documentation Basics", "Client Communication Principles"],
  },
  {
    weeks: "WEEKS 3–6", num: "02", title: "Technical Mastery",
    desc: "Controlled execution. The hard skills. This is where most people discover that applying Microtopping well is genuinely difficult — and genuinely learnable.",
    items: ["Substrate Analysis & Assessment", "Crack Repair Methodology", "Mesh Installation Protocol", "Primer System Application", "Basecoat Thickness Control", "Trowel Technique — All Products", "Sanding & Surface Refinement", "Sealing — Matte, Satin, Gloss", "Colour Mixing & Consistency"],
  },
  {
    weeks: "WEEKS 7–12", num: "03", title: "Field Deployment",
    desc: "Real project integration under supervision. This is where the standard is either owned or abandoned. INCISE only certifies those who own it.",
    items: ["Live Project Participation", "QA Gate Verification — All 3 Gates", "Client Interaction Standards", "Documentation Accuracy", "Productivity Benchmarking", "Problem-Solving Under Pressure", "Final Assessment & Graded Certification"],
  },
];

const curriculum = [
  { icon: "🧱", title: "Substrate Science", desc: "Understanding what you're applying onto — moisture, strength, bond conditions." },
  { icon: "🎨", title: "Microtopping Application", desc: "The flagship INCISE skill. Multi-coat trowel technique, thickness control, surface reading." },
  { icon: "✨", title: "Metallic Finishes", desc: "Dimensional decorative effects. Light response, layering technique, metallic pigment control." },
  { icon: "🏗️", title: "Wallcrete & Cemwash", desc: "Texture systems — float technique, texture grades, organic variation control." },
  { icon: "☀️", title: "Outdoor Systems", desc: "Patio System and Color Hardener — tropical climate application and durability requirements." },
  { icon: "🔍", title: "QA Gate System", desc: "INCISE's three-gate quality architecture. How to assess, document, and escalate correctly." },
  { icon: "💼", title: "Business Development", desc: "Quoting, client management, project scheduling, and building a certified applicator business." },
  { icon: "🛡️", title: "Health & Safety", desc: "Chemical handling, PPE standards, site safety, HIRA documentation." },
];

const intakes = [
  { day: "05", month: "MAY 2025", title: "Intake 12 — Full Certification Programme", details: "Duration: 12 weeks · Location: INCISE Training Centre, Kampala · Max class: 12 participants · Language: English", status: "OPEN — 4 PLACES REMAINING", cta: "APPLY FOR THIS INTAKE →" },
  { day: "14", month: "JULY 2025", title: "Intake 13 — Full Certification Programme", details: "Duration: 12 weeks · Location: INCISE Training Centre, Kampala · Max class: 12 participants · Language: English", status: "OPEN — ACCEPTING APPLICATIONS", cta: "APPLY FOR THIS INTAKE →" },
  { day: "08", month: "SEPTEMBER 2025", title: "Intake 14 — Full Certification Programme", details: "Duration: 12 weeks · Location: INCISE Training Centre, Kampala · Max class: 12 participants · Language: English", status: "COMING SOON — REGISTER INTEREST", cta: "REGISTER INTEREST →" },
];

const testimonials = [
  { quote: "Before the Academy I was doing general plastering. Now I run my own certified applicator business. The training didn't just teach me how to apply — it taught me how to build something.", name: "David Kasule", role: "Certified Applicator · Intake 7" },
  { quote: "The QA Gate system changed how I think about every project. I used to rush. Now I check. The difference in results — and in client satisfaction — is enormous.", name: "Sarah Nakayima", role: "Senior Applicator · Intake 5" },
  { quote: "I came in knowing nothing about microcement. 12 weeks later I was on live projects. The pace is demanding — and exactly right. Nothing was wasted.", name: "Michael Otieno", role: "Certified Applicator · Intake 9" },
];

const AcademyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[140px] pb-20 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-[0.6rem] tracking-[0.24em] uppercase font-body transition-colors">Home</Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <span className="label-text text-[0.6rem]">Academy</span>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase font-body mb-4" style={{ fontWeight: 400 }}>
            INCISE ACADEMY — EAST AFRICA'S SURFACE CRAFT SCHOOL
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6" style={{ fontWeight: 300 }}>
            Certify. Apply.
            <br />
            <span className="italic text-gradient-gold">Build.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-secondary-foreground font-body max-w-2xl leading-[1.95] mb-10" style={{ fontWeight: 300 }}>
            The INCISE Academy is not a training programme. It is the institution within the institution — the engine that carries our standard into every market, on every project, at every scale.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex flex-wrap gap-4 mb-14">
            <a href="#intakes" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">APPLY FOR CERTIFICATION →</a>
            <a href="#programme" className="border border-secondary-foreground/30 text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">EXPLORE THE PROGRAMME</a>
          </motion.div>

          <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="border-l-[3px] pl-6 max-w-2xl" style={{ borderColor: "hsl(35 38% 58%)" }}>
            <p className="font-display italic text-lg text-secondary-foreground leading-relaxed" style={{ fontWeight: 300 }}>
              "The Academy is not a cost centre. It is a risk-reduction engine and growth multiplier. Without it, scale fails. With it, scale compounds."
            </p>
            <cite className="text-[0.6rem] text-muted-foreground font-body tracking-[0.24em] uppercase mt-3 block not-italic" style={{ fontWeight: 400 }}>— INCISE OPERATIONS BIBLE</cite>
          </motion.blockquote>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease: [0,0,.2,1] }}>
            <p className="label-text mb-4">ABOUT THE ACADEMY</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6" style={{ fontWeight: 300 }}>
              The institution within the <span className="italic text-gradient-gold">institution.</span>
            </h2>
            <p className="text-secondary-foreground font-body leading-[1.95] mb-6 max-w-3xl" style={{ fontWeight: 300 }}>
              INCISE Academy was built to solve the most critical challenge in the East African surface design market: there is demand for premium surfaces, but almost no supply of trained people who can actually deliver them to the right standard.
            </p>
            <p className="text-secondary-foreground font-body leading-[1.95] mb-8 max-w-3xl" style={{ fontWeight: 300 }}>
              We did not outsource this problem. We built the school. We wrote the curriculum. We certified the instructors. And we continue to raise the bar with every intake.
            </p>
            <ul className="space-y-3 max-w-3xl">
              {["Formal 12-week certification structured across three phases", "Modules covering brand philosophy, technical application, QA systems, and business development", "Supervised live project deployment — real clients, real stakes", "Five progression tiers from Certified Applicator to Certified Trainer", "Annual recertification to maintain standards", "Graduates supported by INCISE's ongoing technical team"].map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.88rem] text-secondary-foreground font-body" style={{ fontWeight: 300 }}>
                  <span className="text-primary flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Certification Tiers */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="label-text mb-4">CERTIFICATION PATH</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
              Five tiers. One <span className="italic text-gradient-gold">standard.</span>
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto text-[0.88rem]" style={{ fontWeight: 300 }}>
              Each tier unlocks greater responsibility, higher project eligibility, and stronger earning potential.
            </p>
          </motion.div>

          <div className="space-y-0">
            {tiers.map((tier, i) => (
              <motion.div key={tier.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.85, ease: [0,0,.2,1] }} className="flex gap-6 md:gap-10 py-8 border-t border-border group">
                <span className="text-4xl md:text-5xl font-display text-primary/20 group-hover:text-primary transition-colors flex-shrink-0" style={{ fontWeight: 300 }}>{tier.num}</span>
                <div>
                  <p className="label-text text-[10px] mb-1">{tier.tier}</p>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2" style={{ fontWeight: 400 }}>{tier.title}</h3>
                  <p className="text-muted-foreground font-body text-[0.88rem] leading-[1.95]" style={{ fontWeight: 300 }}>{tier.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12-Week Programme */}
      <section id="programme" className="section-padding">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="label-text mb-4">12-WEEK PROGRAMME</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
              The three phases of <span className="italic text-gradient-gold">certification.</span>
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto text-[0.88rem]" style={{ fontWeight: 300 }}>
              Each phase builds on the last. No shortcuts. No skipped steps.
            </p>
          </motion.div>

          <div className="space-y-[3px]">
            {phases.map((phase, i) => (
              <motion.div key={phase.num} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.85, ease: [0,0,.2,1] }} className="bg-card p-8 md:p-10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-4xl font-display text-primary/30" style={{ fontWeight: 300 }}>{phase.num}</span>
                  <div>
                    <p className="label-text text-[10px] mb-1">{phase.weeks}</p>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground" style={{ fontWeight: 300 }}>{phase.title}</h3>
                  </div>
                </div>
                <p className="text-secondary-foreground font-body leading-[1.95] mb-6 text-[0.88rem]" style={{ fontWeight: 300 }}>{phase.desc}</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-[0.88rem] text-muted-foreground font-body" style={{ fontWeight: 300 }}>
                      <span className="text-primary flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="label-text mb-4">CURRICULUM OVERVIEW</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground" style={{ fontWeight: 300 }}>
              What you'll learn to <span className="italic text-gradient-gold">master.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            {curriculum.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.85, ease: [0,0,.2,1] }} className="bg-card p-6 hover:-translate-y-1 transition-transform duration-300 group">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-foreground font-body text-sm mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 500 }}>{c.title}</h3>
                <p className="text-muted-foreground text-[0.88rem] font-body leading-[1.95]" style={{ fontWeight: 300 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section id="intakes" className="section-padding">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
            <p className="label-text mb-4">UPCOMING INTAKES</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3" style={{ fontWeight: 300 }}>
              Select your <span className="italic text-gradient-gold">cohort.</span>
            </h2>
            <a href="#" className="text-[0.68rem] text-muted-foreground hover:text-primary font-body tracking-[0.16em] uppercase transition-colors border-b border-secondary-foreground/25 hover:border-foreground pb-0.5">CAN'T FIND A DATE? CONTACT US →</a>
          </motion.div>

          <div className="space-y-[3px] mt-12">
            {intakes.map((intake, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.85, ease: [0,0,.2,1] }} className="bg-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 text-center md:text-left">
                  <p className="font-display text-5xl text-primary leading-none" style={{ fontWeight: 300 }}>{intake.day}</p>
                  <p className="text-[0.6rem] text-muted-foreground tracking-[0.24em] uppercase font-body mt-1" style={{ fontWeight: 400 }}>{intake.month}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-2" style={{ fontWeight: 400 }}>{intake.title}</h3>
                  <p className="text-[0.88rem] text-muted-foreground font-body mb-3" style={{ fontWeight: 300 }}>{intake.details}</p>
                  <p className="label-text text-[10px] mb-4">{intake.status}</p>
                  <a href="#" className="inline-flex bg-primary text-primary-foreground px-6 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
                    {intake.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Voices */}
      <section className="section-padding bg-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="label-text mb-4">GRADUATE VOICES</p>
            <h2 className="font-display text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
              What our graduates <span className="italic" style={{ color: "hsl(35 38% 58%)" }}>say.</span>
            </h2>
          </motion.div>

          <div className="space-y-[3px]">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.85, ease: [0,0,.2,1] }} className="bg-dark-mid p-8">
                <p className="font-display text-4xl text-white/20 leading-none mb-4" style={{ fontWeight: 300 }}>"</p>
                <blockquote className="font-display text-lg text-white italic leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  {t.quote}
                </blockquote>
                <p className="text-white font-body text-sm" style={{ fontWeight: 400 }}>{t.name}</p>
                <p className="text-white/50 text-[0.65rem] font-body" style={{ fontWeight: 300 }}>{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4" style={{ fontWeight: 300 }}>
              Ready to build your career in <span className="italic text-gradient-gold">surface design?</span>
            </h2>
            <p className="text-muted-foreground font-body text-[0.88rem] mb-8 max-w-lg mx-auto" style={{ fontWeight: 300 }}>
              Applications for the next intake close 3 weeks before the programme start date. Limited to 12 participants per cohort. Apply early.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#intakes" className="bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">APPLY FOR CERTIFICATION →</a>
              <a href="#" className="border border-secondary-foreground/30 text-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">VIEW TECHNICAL LIBRARY →</a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademyPage;
