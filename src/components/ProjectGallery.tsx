import { useState } from "react";
import { motion } from "framer-motion";
import projectLobby from "@/assets/project-lobby.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectPool from "@/assets/project-pool.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";
import projectSafari from "@/assets/project-safari.jpg";

const filters = ["ALL", "MICROTOPPING", "WALLS", "FLOORS", "OUTDOOR", "HOSPITALITY"];

const projects = [
  { img: projectShowroom, tag: "MICROTOPPING", name: "Beleza by Santina", cat: ["ALL", "MICROTOPPING"] },
  { img: projectBathroom, tag: "WALLCRETE", name: "Private Residence", cat: ["ALL", "WALLS"] },
  { img: projectSafari, tag: "MICROTOPPING · WALLS", name: "Nile Safari Lodge", cat: ["ALL", "MICROTOPPING", "HOSPITALITY"] },
  { img: projectPool, tag: "PATIO", name: "Residential Pool Deck", cat: ["ALL", "OUTDOOR"] },
  { img: projectRestaurant, tag: "MICROTOPPING · FLOOR", name: "Strat Bridals Showroom", cat: ["ALL", "MICROTOPPING", "FLOORS"] },
  { img: projectLobby, tag: "METALLIC", name: "Corporate HQ Lobby", cat: ["ALL", "WALLS", "HOSPITALITY"] },
];

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = projects.filter((p) => p.cat.includes(activeFilter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="label-text mb-4">PROJECT GALLERY</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground" style={{ fontWeight: 300 }}>
            Every finish, <span className="italic text-gradient-gold">photographed.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-[2px] mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase font-body transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.85, ease: [0,0,.2,1] }}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="label-text text-[10px] mb-1">{p.tag}</p>
                <h3 className="font-display text-xl text-white" style={{ fontWeight: 400 }}>{p.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
