import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/#projects" },
  { label: "Technical", href: "/technical" },
  { label: "Academy", href: "/academy" },
  { label: "Community", href: "/academy/community" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
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
            {navLinks.map((link) => (
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
            ))}
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
            className="fixed inset-0 z-[60] bg-background flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 h-[76px]">
              <img src={logoDark} alt="INCISE" className="h-7 w-auto" />
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
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
