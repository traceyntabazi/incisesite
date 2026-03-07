import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import VideoGallery from "@/components/gallery/VideoGallery";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-28 md:pt-36 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase font-body transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground/40 text-xs">›</span>
            <span className="label-text text-xs">Gallery</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-4"
          >
            The Work.
            <br />
            <span className="italic text-muted-foreground/40">In full detail.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-body max-w-xl leading-relaxed mb-8"
          >
            Browse 300+ completed INCISE surfaces across Uganda and East Africa. Photos and
            videos from residential, commercial, and hospitality projects.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-10 md:gap-12"
          >
            {[
              { value: "300+", label: "Photos" },
              { value: "40+", label: "Videos" },
              { value: "6", label: "Product lines shown" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary pl-4">
                <p className="font-display text-3xl text-foreground leading-none">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-body mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tab Nav */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-6">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-3 text-xs tracking-widest uppercase font-body transition-all ${
                activeTab === "photos"
                  ? "bg-card text-foreground border border-border border-b-transparent -mb-px relative z-10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📷 Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-3 text-xs tracking-widest uppercase font-body transition-all ${
                activeTab === "videos"
                  ? "bg-card text-foreground border border-border border-b-transparent -mb-px relative z-10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ▶ Videos
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {activeTab === "photos" ? <PhotoGallery /> : <VideoGallery />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
