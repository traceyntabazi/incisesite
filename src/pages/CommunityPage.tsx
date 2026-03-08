import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Play, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── ARTICLE DATA ── */
interface Article {
  id: string;
  category: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
  hasVideo?: boolean;
  videoTitle?: string;
  videoDuration?: string;
  img: string;
}

const categories = ["ALL", "SURFACE PREP", "APPLICATION", "TROUBLESHOOTING", "MAINTENANCE", "BUSINESS"];

const articles: Article[] = [
  {
    id: "surface-prep-guide",
    category: "SURFACE PREP",
    tag: "FOUNDATION · MUST READ",
    title: "The Complete Guide to Surface Preparation",
    excerpt: "Surface preparation is the most critical step in any microtopping project. Never skip it. Never rush it. This guide covers substrate assessment, moisture testing, priming protocols, and the QA gates every certified applicator must pass before trowel meets surface.",
    readTime: "12 min read",
    date: "Feb 2025",
    author: "INCISE Technical Team",
    featured: true,
    hasVideo: true,
    videoTitle: "Surface Preparation — Why It Matters Most",
    videoDuration: "8:15",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    id: "moisture-testing",
    category: "SURFACE PREP",
    tag: "TECHNICAL · SPECIFICATION",
    title: "Moisture Testing: The Step Most Applicators Skip",
    excerpt: "Substrate moisture above 4% will cause coating failure. Learn the CM method, understand relative humidity readings, and know when to walk away from a project that isn't ready.",
    readTime: "8 min read",
    date: "Jan 2025",
    author: "INCISE Technical Team",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=75",
  },
  {
    id: "trowel-technique",
    category: "APPLICATION",
    tag: "HOW-TO · SKILL BUILDING",
    title: "Trowel Technique: Controlling Thickness at 1–3mm",
    excerpt: "The difference between a good microtopping and a great one is trowel control. Blade angle, pressure distribution, and cross-hatch patterns — the techniques that separate Tier I from Tier III applicators.",
    readTime: "10 min read",
    date: "Jan 2025",
    author: "INCISE Academy",
    hasVideo: true,
    videoTitle: "Basecoat — Thickness Control & Trowel Technique",
    videoDuration: "9:50",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75",
  },
  {
    id: "sealer-selection",
    category: "APPLICATION",
    tag: "PRODUCT KNOWLEDGE",
    title: "Sealer Selection: Matte, Satin, or Gloss?",
    excerpt: "Choosing the right sealer isn't about aesthetics alone — it's about protection, maintenance, and end-use. Wet areas demand different sealers than high-traffic commercial floors. Here's how to specify correctly.",
    readTime: "6 min read",
    date: "Dec 2024",
    author: "INCISE Technical Team",
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=75",
  },
  {
    id: "common-failures",
    category: "TROUBLESHOOTING",
    tag: "LEARN FROM MISTAKES",
    title: "5 Coating Failures We've Seen — And How to Prevent Them",
    excerpt: "Delamination, cracking, discolouration, efflorescence, and sealer blooming. Real case studies from East African projects with root cause analysis and prevention protocols.",
    readTime: "14 min read",
    date: "Nov 2024",
    author: "INCISE Operations",
    featured: true,
    img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=900&q=80",
  },
  {
    id: "wet-room-protocol",
    category: "APPLICATION",
    tag: "WATERPROOFING · SPECIALIST",
    title: "Wet Room Protocol: Microtopping in Showers and Bathrooms",
    excerpt: "Grout-free bathrooms are our most requested residential application. The sealer system, joint treatment, and drainage integration that makes them work — and the shortcuts that make them fail.",
    readTime: "11 min read",
    date: "Nov 2024",
    author: "INCISE Technical Team",
    hasVideo: true,
    videoTitle: "Sealing — Protecting Your Work",
    videoDuration: "5:20",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=75",
  },
  {
    id: "maintenance-guide",
    category: "MAINTENANCE",
    tag: "CLIENT HANDOVER",
    title: "Surface Maintenance: The Guide You Give Your Client",
    excerpt: "What cleaning products are safe? How often should surfaces be re-sealed? What voids the warranty? A downloadable guide to hand over at project completion.",
    readTime: "7 min read",
    date: "Oct 2024",
    author: "INCISE Technical Team",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=75",
  },
  {
    id: "pricing-your-work",
    category: "BUSINESS",
    tag: "APPLICATOR BUSINESS",
    title: "Pricing Your Work: A Guide for Certified Applicators",
    excerpt: "How to price microtopping projects fairly — covering materials, labour, complexity factors, and the margin you need to build a sustainable business in East Africa.",
    readTime: "9 min read",
    date: "Oct 2024",
    author: "INCISE Academy",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
  },
];

const revealProps = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: [0, 0, 0.2, 1] as const },
};

const CommunityPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchesCat = activeCategory === "ALL" || a.category === activeCategory;
    const matchesSearch = searchQuery === "" || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = filtered.filter((a) => !a.featured || activeCategory !== "ALL");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-dark pt-[140px] pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <motion.div {...revealProps}>
            <div className="flex items-center gap-2.5 mb-5">
              <Link to="/" className="text-[0.6rem] tracking-[0.18em] uppercase text-white/30 hover:text-white/50 transition-colors font-body">Home</Link>
              <span className="text-white/20 text-xs">›</span>
              <Link to="/academy" className="text-[0.6rem] tracking-[0.18em] uppercase text-white/30 hover:text-white/50 transition-colors font-body">Academy</Link>
              <span className="text-white/20 text-xs">›</span>
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-primary font-body">Community</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.98] text-white mb-5" style={{ fontWeight: 300 }}>
              The Surface<br /><em className="italic text-white/45">Community.</em>
            </h1>
            <p className="text-white/45 text-[0.95rem] max-w-[560px] leading-[1.88] font-body" style={{ fontWeight: 300 }}>
              Technical articles, application guides, and expert knowledge for certified applicators, architects, and designers across East Africa. Built by practitioners, for practitioners.
            </p>

            {/* Search */}
            <div className="mt-10 max-w-md relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.06] border border-white/10 text-white placeholder:text-white/25 text-[0.85rem] font-body pl-11 pr-4 py-3.5 focus:border-primary focus:outline-none transition-colors"
                style={{ fontWeight: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES (only on ALL view) ── */}
      {activeCategory === "ALL" && searchQuery === "" && (
        <section className="py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
            <motion.div {...revealProps}>
              <p className="label-text mb-8">Featured Articles</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-[3px]">
              {featuredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  {...revealProps}
                  className="group relative overflow-hidden bg-dark cursor-pointer"
                >
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full aspect-[16/10] object-cover brightness-[0.55] group-hover:brightness-[0.4] group-hover:scale-105 transition-all duration-600"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <p className="text-[0.54rem] tracking-[0.2em] uppercase text-primary font-body mb-2">{article.tag}</p>
                    <h3 className="font-display text-white text-xl md:text-2xl leading-[1.1] mb-3" style={{ fontWeight: 400 }}>
                      {article.title}
                    </h3>
                    <p className="text-white/50 text-[0.82rem] leading-[1.7] font-body mb-4 line-clamp-2" style={{ fontWeight: 300 }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-white/30 text-[0.65rem] font-body">
                        <Clock size={12} /> {article.readTime}
                      </span>
                      <span className="text-white/20 text-[0.65rem] font-body">{article.date}</span>
                      {article.hasVideo && (
                        <span className="flex items-center gap-1.5 text-primary text-[0.65rem] font-body">
                          <Play size={10} fill="currentColor" /> Video included
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FILTER + ARTICLES ── */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          {/* Filters */}
          <motion.div {...revealProps} className="flex flex-wrap gap-[2px] mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-[0.64rem] tracking-[0.14em] uppercase font-body transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-3 gap-[3px]">
            {(activeCategory === "ALL" && searchQuery === "" ? regularArticles.filter(a => !a.featured) : filtered).map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card group cursor-pointer hover:-translate-y-[3px] transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500"
                  />
                  {article.hasVideo && (
                    <span className="absolute top-3 right-3 bg-dark/80 backdrop-blur text-primary text-[0.54rem] tracking-[0.14em] uppercase font-body px-2.5 py-1 flex items-center gap-1.5">
                      <Play size={10} fill="currentColor" /> {article.videoDuration}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[0.54rem] tracking-[0.2em] uppercase text-primary font-body mb-2">{article.tag}</p>
                  <h3 className="font-display text-foreground text-lg leading-[1.15] mb-3" style={{ fontWeight: 400 }}>
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.82rem] leading-[1.75] font-body line-clamp-3 mb-4 flex-1" style={{ fontWeight: 300 }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-muted-foreground text-[0.62rem] font-body">
                        <Clock size={11} /> {article.readTime}
                      </span>
                      <span className="text-muted-foreground/50 text-[0.62rem] font-body">{article.date}</span>
                    </div>
                    <span className="text-[0.64rem] tracking-[0.12em] uppercase text-secondary-foreground font-body flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted-foreground" style={{ fontWeight: 300 }}>No articles found.</p>
              <p className="text-muted-foreground/60 text-[0.85rem] font-body mt-2">Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTRIBUTE CTA ── */}
      <section className="py-20 bg-muted text-center">
        <motion.div {...revealProps} className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <h2 className="font-display text-[clamp(2rem,3.5vw,3.5rem)] text-foreground mb-3" style={{ fontWeight: 300 }}>
            Have knowledge to <em className="italic text-muted-foreground">share?</em>
          </h2>
          <p className="text-secondary-foreground text-[0.9rem] max-w-[480px] mx-auto leading-[1.85] font-body mb-9" style={{ fontWeight: 300 }}>
            We're building East Africa's most authoritative surface finishing knowledge base. If you're a certified applicator, architect, or designer with insights to share, we want to hear from you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:bg-gold-light transition-colors">
              Submit an Article →
            </a>
            <Link to="/academy" className="inline-flex items-center gap-2.5 border border-border text-secondary-foreground px-7 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body hover:border-foreground transition-colors">
              Join the Academy →
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
