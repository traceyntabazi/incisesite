const productLinks = [
  "Microtopping", "Metallic Finish", "Wallcrete", "Patio System",
];

const exploreLinks = [
  "Gallery", "Projects", "Technical Hub", "Academy",
];

const contactLinks = [
  "Get a Quote", "info@incise.ug", "Kampala, Uganda",
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-[60px] py-16 bg-dark text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <p className="font-display text-xl tracking-wider mb-4">
              INCISE<span style={{ color: "hsl(35 38% 58%)" }}>®</span>
            </p>
            <p className="text-white/60 text-[0.88rem] font-body leading-[1.95]" style={{ fontWeight: 300 }}>
              Premium decorative wall and floor coatings, manufactured in Uganda
              for East Africa.
            </p>
            <p className="font-display italic text-white/40 text-sm mt-3">
              A Life Full of Design Secrets.
            </p>
          </div>

          <div>
            <p className="text-[0.6rem] tracking-[0.24em] text-white/40 uppercase font-body mb-4" style={{ fontWeight: 400 }}>
              Products
            </p>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[0.88rem] text-white/70 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.6rem] tracking-[0.24em] text-white/40 uppercase font-body mb-4" style={{ fontWeight: 400 }}>
              Explore
            </p>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[0.88rem] text-white/70 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.6rem] tracking-[0.24em] text-white/40 uppercase font-body mb-4" style={{ fontWeight: 400 }}>
              Contact
            </p>
            <ul className="space-y-2">
              {contactLinks.map((l) => (
                <li key={l}>
                  <span className="text-[0.88rem] text-white/70 font-body" style={{ fontWeight: 300 }}>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-body">
            © 2025 INCISE Uganda Limited
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 font-body transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 font-body transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
