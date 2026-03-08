import { motion } from "framer-motion";
import projectLobby from "@/assets/project-lobby.jpg";
import projectSafari from "@/assets/project-safari.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const featured = [
  { img: projectShowroom, year: "2024", location: "KAMPALA, UGANDA", title: "Beleza by Santina", desc: "Microtopping · Walls & Floors · 380 sqm" },
  { img: projectSafari, year: "2024", location: "UGANDA", title: "Nile Safari Lodge", desc: "Microtopping · Patio · 920 sqm" },
  { img: projectRestaurant, year: "2025", location: "KAMPALA, UGANDA", title: "Strat Bridals", desc: "Color Hardener · 640 sqm" },
  { img: projectLobby, year: "2023", location: "UGANDA", title: "Khwezi Beauty Secrets", desc: "Microtopping · Interior" },
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label-text mb-4">OUR WORK</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground" style={{ fontWeight: 300 }}>
              Where INCISE comes to <span className="italic text-gradient-gold">life.</span>
            </h2>
          </div>
          <a href="/gallery" className="hidden md:inline-flex text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground hover:text-primary transition-colors font-body border-b border-secondary-foreground/25 hover:border-foreground pb-0.5">
            ALL PROJECTS →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-[3px]">
          {featured.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.85, ease: [0,0,.2,1] }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[16/10] mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] group-hover:scale-[1.06]"
                />
              </div>
              <p className="text-[0.65rem] text-muted-foreground font-body mb-1" style={{ fontWeight: 300 }}>
                {p.year} · {p.location}
              </p>
              <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors" style={{ fontWeight: 400 }}>
                {p.title}
              </h3>
              <p className="text-[0.88rem] text-muted-foreground font-body" style={{ fontWeight: 300 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
