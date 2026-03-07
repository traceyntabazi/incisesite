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
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label-text mb-4">OUR WORK</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Where INCISE comes to <span className="italic text-gradient-gold">life.</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-primary transition-colors font-body tracking-wide">
            ALL PROJECTS →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[16/10] mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-muted-foreground font-body mb-1">
                {p.year} · {p.location}
              </p>
              <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
