import { Link } from "react-router-dom";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* ── Main footer grid ── */}
      <div className="px-6 md:px-[60px] pt-20 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 pr-8">
              <img
                src={logoDark}
                alt="INCISE — Microcement and decorative coatings manufacturer"
                className="h-7 w-auto brightness-0 invert mb-5"
              />
              <p className="text-white/50 text-[0.84rem] font-body leading-[1.95] mb-4" style={{ fontWeight: 300 }}>
                East Africa's leading manufacturer of microcement, microtopping,
                and premium cement-based wall and floor finishes. Manufactured in
                Uganda for architects, designers, and developers.
              </p>
              <p className="font-display italic text-white/30 text-sm">
                A Life Full of Design Secrets.
              </p>
            </div>

            {/* Products */}
            <div>
              <p className="text-[0.58rem] tracking-[0.24em] text-white/30 uppercase font-body mb-5" style={{ fontWeight: 500 }}>
                Products
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Microtopping", href: "/products#microtopping" },
                  { label: "Metallic Finish", href: "/products#metallic" },
                  { label: "Wallcrete", href: "/products#wallcrete" },
                  { label: "Cemwash", href: "/products#cemwash" },
                  { label: "Patio System", href: "/products#patio" },
                  { label: "Color Hardener", href: "/products#hardener" },
                  { label: "Compare All Products", href: "/products#compare" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-[0.82rem] text-white/55 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <p className="text-[0.58rem] tracking-[0.24em] text-white/30 uppercase font-body mb-5" style={{ fontWeight: 500 }}>
                Applications
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Residential Floors", href: "/gallery" },
                  { label: "Commercial Spaces", href: "/gallery" },
                  { label: "Hospitality & Hotels", href: "/gallery" },
                  { label: "Bathroom & Wet Areas", href: "/gallery" },
                  { label: "Pool Decks & Patios", href: "/gallery" },
                  { label: "Feature Walls", href: "/gallery" },
                  { label: "Renovations", href: "/gallery" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-[0.82rem] text-white/55 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Company */}
            <div>
              <p className="text-[0.58rem] tracking-[0.24em] text-white/30 uppercase font-body mb-5" style={{ fontWeight: 500 }}>
                Resources
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Technical Data Sheets", href: "/technical" },
                  { label: "How-To Videos", href: "/technical" },
                  { label: "Colour Studio", href: "/colours" },
                  { label: "Project Gallery", href: "/gallery" },
                  { label: "Specification Guides", href: "/technical" },
                  { label: "FAQs", href: "/technical" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-[0.82rem] text-white/55 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="text-[0.58rem] tracking-[0.24em] text-white/30 uppercase font-body mb-5 mt-10" style={{ fontWeight: 500 }}>
                Company
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Our Story", href: "/about" },
                  { label: "INCISE Academy", href: "/academy" },
                  { label: "Locations & Distributors", href: "/locations" },
                  { label: "Become a Distributor", href: "/locations" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-[0.82rem] text-white/55 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact strip ── */}
      <div className="border-t border-white/8 px-6 md:px-[60px] py-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kampala */}
          <div>
            <p className="text-[0.58rem] tracking-[0.24em] text-primary uppercase font-body mb-3" style={{ fontWeight: 500 }}>
              Head Office — Kampala
            </p>
            <p className="text-[0.82rem] text-white/50 font-body leading-relaxed" style={{ fontWeight: 300 }}>
              Plot 2490 YK Hameid Road<br />
              Luzira Industrial Park<br />
              Kampala, Uganda
            </p>
          </div>
          {/* Nairobi */}
          <div>
            <p className="text-[0.58rem] tracking-[0.24em] text-primary uppercase font-body mb-3" style={{ fontWeight: 500 }}>
              Nairobi Office
            </p>
            <p className="text-[0.82rem] text-white/50 font-body leading-relaxed" style={{ fontWeight: 300 }}>
              7th Floor Purshotam Place<br />
              Westlands Road<br />
              Nairobi, Kenya
            </p>
          </div>
          {/* Contact */}
          <div>
            <p className="text-[0.58rem] tracking-[0.24em] text-primary uppercase font-body mb-3" style={{ fontWeight: 500 }}>
              Get In Touch
            </p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@incise.ug" className="text-[0.82rem] text-white/50 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                  info@incise.ug
                </a>
              </li>
              <li>
                <Link to="/locations" className="text-[0.82rem] text-white/50 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                  Find a distributor →
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-[0.82rem] text-white/50 hover:text-white font-body transition-colors" style={{ fontWeight: 300 }}>
                  Apply for Academy →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8 px-6 md:px-[60px] py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.7rem] text-white/25 font-body" style={{ fontWeight: 300 }}>
            © {new Date().getFullYear()} INCISE Uganda Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.7rem] text-white/25 hover:text-white/50 font-body transition-colors" style={{ fontWeight: 300 }}>
              Privacy Policy
            </a>
            <a href="#" className="text-[0.7rem] text-white/25 hover:text-white/50 font-body transition-colors" style={{ fontWeight: 300 }}>
              Terms of Use
            </a>
            <a href="#" className="text-[0.7rem] text-white/25 hover:text-white/50 font-body transition-colors" style={{ fontWeight: 300 }}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
