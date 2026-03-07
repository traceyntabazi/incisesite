const productLinks = [
  "Microtopping", "Metallic Finish", "Wallcrete", "Cemwash",
  "Patio", "Color Hardener", "Stamped Concrete", "Microtek",
];

const companyLinks = [
  "About INCISE", "All Projects", "INCISE Academy",
  "Insights & News", "Downloads", "Testimonials", "Partner Programme",
];

const contactLinks = [
  "Get in Touch", "Become a Partner", "Training Events",
  "info@incise.ug", "+256 — — — —", "Kampala, Uganda",
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display text-xl tracking-wider text-foreground mb-4">
              INCISE<span className="text-primary">®</span>
            </p>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Premium decorative wall and floor coatings, manufactured in Uganda
              for East Africa's most considered spaces.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-4">
              Products
            </p>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-secondary-foreground hover:text-primary font-body transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-4">
              Company
            </p>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-secondary-foreground hover:text-primary font-body transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-4">
              Contact
            </p>
            <ul className="space-y-2">
              {contactLinks.map((l) => (
                <li key={l}>
                  <span className="text-sm text-secondary-foreground font-body">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2025 INCISE Uganda. All rights reserved. Manufactured in Uganda.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary font-body transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary font-body transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary font-body transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
