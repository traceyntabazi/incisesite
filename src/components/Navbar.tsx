import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "@/assets/logo-dark.png";
import { wallProducts, floorProducts } from "@/data/products";
import { sealers } from "@/data/sealers";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Colours", href: "/colours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/#projects" },
  { label: "Technical", href: "/technical" },
  { label: "Academy", href: "/academy" },
  { label: "Locations", href: "/locations" },
];

const technicalSolutions = [
  { name: "Sealers & Protection", href: "/sealers" },
  { name: "Waterproofing", href: "/waterproofing" },
];

const ProductDropdown = ({ scrolled }: { scrolled: boolean }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        to="/products"
        className={`flex items-center gap-1 text-[0.68rem] tracking-[0.16em] uppercase font-body transition-colors ${
          scrolled
            ? "text-muted-foreground hover:text-foreground"
            : "text-white/70 hover:text-white"
        }`}
      >
        Products
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-card border border-border shadow-lg min-w-[620px] z-50"
          >
            <div className="grid grid-cols-3 gap-0">
              {/* Wall Products */}
              <div className="p-5 border-r border-border">
                <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-primary mb-3" style={{ fontWeight: 500 }}>
                  Wall Products
                </p>
                <div className="flex flex-col gap-1">
                  {wallProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/products/${p.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-[0.72rem] font-body text-muted-foreground hover:text-foreground hover:bg-secondary px-2 py-1.5 transition-colors"
                      style={{ fontWeight: 400 }}
                    >
                      INCISE {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Floor Products */}
              <div className="p-5 border-r border-border">
                <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-primary mb-3" style={{ fontWeight: 500 }}>
                  Floor Products
                </p>
                <div className="flex flex-col gap-1">
                  {floorProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/products/${p.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-[0.72rem] font-body text-muted-foreground hover:text-foreground hover:bg-secondary px-2 py-1.5 transition-colors"
                      style={{ fontWeight: 400 }}
                    >
                      INCISE {p.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Technical Solutions */}
              <div className="p-5">
                <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-primary mb-3" style={{ fontWeight: 500 }}>
                  Technical Solutions
                </p>
                <div className="flex flex-col gap-1">
                  {technicalSolutions.map((t) => (
                    <Link
                      key={t.href}
                      to={t.href}
                      onClick={() => setOpen(false)}
                      className="text-[0.72rem] font-body text-muted-foreground hover:text-foreground hover:bg-secondary px-2 py-1.5 transition-colors"
                      style={{ fontWeight: 400 }}
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer link */}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="block border-t border-border px-5 py-3 text-[0.6rem] tracking-[0.16em] uppercase font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-center"
            >
              View All Products & Compare →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
            : "bg-charcoal/80 backdrop-blur-sm border-b border-white/10"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ height: 76 }}
      >
        <div className="flex items-center justify-between px-6 md:px-[60px] h-full max-w-[1400px] mx-auto">
          <Link to="/">
            <img
              src={logoDark}
              alt="INCISE"
              className={`h-7 w-auto transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <ProductDropdown key={link.label} scrolled={scrolled} />
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[0.68rem] tracking-[0.16em] uppercase font-body transition-colors ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[0.68rem] tracking-[0.16em] uppercase font-body bg-primary text-primary-foreground px-8 py-3.5 hover:bg-gold-light transition-colors"
            >
              GET A QUOTE <span className="text-xs">→</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background flex flex-col overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 h-[76px] shrink-0">
              <img src={logoDark} alt="INCISE" className="h-7 w-auto" />
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6 py-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="flex flex-col items-center">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="font-display text-3xl text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      Products
                      <ChevronDown size={20} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 flex flex-col items-center gap-1">
                            <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-primary mb-1" style={{ fontWeight: 500 }}>Wall Products</p>
                            {wallProducts.map((p) => (
                              <Link
                                key={p.slug}
                                to={`/products/${p.slug}`}
                                onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                INCISE {p.name}
                              </Link>
                            ))}
                            <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-primary mb-1 mt-3" style={{ fontWeight: 500 }}>Floor Products</p>
                            {floorProducts.map((p) => (
                              <Link
                                key={p.slug}
                                to={`/products/${p.slug}`}
                                onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                INCISE {p.name}
                              </Link>
                            ))}
                            <p className="text-[0.55rem] tracking-[0.24em] uppercase font-body text-primary mb-1 mt-3" style={{ fontWeight: 500 }}>Technical Solutions</p>
                            {technicalSolutions.map((t) => (
                              <Link
                                key={t.href}
                                to={t.href}
                                onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {t.name}
                              </Link>
                            ))}
                            <Link
                              to="/products"
                              onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                              className="text-sm font-body text-primary hover:text-foreground transition-colors py-1 mt-2"
                            >
                              View All Products →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-primary text-primary-foreground px-8 py-3.5 text-[0.68rem] tracking-[0.16em] uppercase font-body"
              >
                GET A QUOTE →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
