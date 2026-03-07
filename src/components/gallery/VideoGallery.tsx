import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Video {
  title: string;
  img: string;
  cat: string;
  tag: string;
  duration: string;
}

const videoCategories = [
  { key: "all", label: "All Videos (40+)" },
  { key: "overview", label: "Product Overviews" },
  { key: "application", label: "Application Guides" },
  { key: "project", label: "Project Tours" },
  { key: "howto", label: "How-To" },
];

const videos: Record<string, Video[]> = {
  overview: [
    { title: "What is Microtopping?", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75", cat: "overview", tag: "Product Overview", duration: "4:30" },
    { title: "Metallic Finish — What You Need to Know", img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&q=75", cat: "overview", tag: "Product Overview", duration: "3:20" },
    { title: "Wallcrete — Concrete Character for Any Wall", img: "https://images.unsplash.com/photo-1600607687644-c7f34b5b6f4a?w=600&q=75", cat: "overview", tag: "Product Overview", duration: "3:45" },
    { title: "Patio System — Built for East Africa", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75", cat: "overview", tag: "Product Overview", duration: "5:00" },
    { title: "Cemwash — Walls That Breathe", img: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=600&q=75", cat: "overview", tag: "Product Overview", duration: "2:55" },
    { title: "Color Hardener — Industrial Floors", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca4e32?w=600&q=75", cat: "overview", tag: "Product Overview", duration: "3:10" },
  ],
  application: [
    { title: "How to Apply Microtopping — Full Process", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75", cat: "application", tag: "Application Guide", duration: "12:30" },
    { title: "Surface Preparation — Why It Matters Most", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75", cat: "application", tag: "Application Guide", duration: "8:15" },
    { title: "Primer Application — Getting the Base Right", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=75", cat: "application", tag: "Application Guide", duration: "6:40" },
    { title: "Sealing — Protecting Your Microtopping", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=75", cat: "application", tag: "Application Guide", duration: "5:20" },
  ],
  howto: [
    { title: "Which Finish is Right for Your Space?", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75", cat: "howto", tag: "Decision Guide", duration: "4:00" },
    { title: "Microtopping vs Polished Concrete", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=75", cat: "howto", tag: "Comparison Guide", duration: "5:45" },
    { title: "How to Maintain Your Microtopping", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75", cat: "howto", tag: "Maintenance Guide", duration: "3:30" },
    { title: "Colour Selection — Finding Your Tone", img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=600&q=75", cat: "howto", tag: "Design Guide", duration: "4:15" },
  ],
  project: [
    { title: "Beleza by Santina — Full Walkthrough", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75", cat: "project", tag: "Project Tour", duration: "3:20" },
    { title: "Nile Safari Lodge — Pool Deck", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75", cat: "project", tag: "Project Tour", duration: "4:10" },
    { title: "Ranchers Finest — Commercial Floor", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=75", cat: "project", tag: "Project Tour", duration: "2:45" },
    { title: "Khwezi Beauty Secrets", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=75", cat: "project", tag: "Project Tour", duration: "3:05" },
  ],
};

const VideoCard = ({ video, onClick }: { video: Video; onClick: () => void }) => (
  <div
    className="relative overflow-hidden cursor-pointer bg-muted aspect-video group"
    onClick={onClick}
  >
    <img
      src={video.img}
      alt={video.title}
      className="w-full h-full object-cover brightness-[0.72] group-hover:brightness-50 group-hover:scale-105 transition-all duration-500"
    />
    <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
      <div className="w-12 h-12 border border-foreground/50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all group-hover:scale-110">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-foreground ml-0.5">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
      <p className="label-text text-[9px] mb-1">{video.tag}</p>
      <p className="font-display text-sm text-foreground leading-tight">{video.title}</p>
      <p className="text-[11px] text-muted-foreground/50 font-body mt-1">⏱ {video.duration}</p>
    </div>
  </div>
);

const VideoModal = ({ title, isOpen, onClose }: { title: string; isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center"
          onClick={onClose}
        >
          <div className="w-[min(960px,92vw)] relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase font-body"
            >
              ✕ Close
            </button>
            <div className="w-full aspect-video bg-muted flex items-center justify-center flex-col gap-4 p-12 text-center border border-border">
              <p className="font-display text-xl text-foreground italic">{title}</p>
              <p className="text-muted-foreground/50 font-body text-sm">
                Your video plays here from YouTube or Vimeo.
              </p>
              <p className="text-muted-foreground/30 font-body text-xs tracking-wider">
                Connect your video hosting to display here
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const VideoGallery = () => {
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openVideo = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const visibleCategories = filter === "all"
    ? Object.keys(videos)
    : [filter];

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 pb-6 mb-8 border-b border-border items-center">
        <span className="label-text text-[10px] mr-2">Category:</span>
        {videoCategories.map((vc) => (
          <button
            key={vc.key}
            onClick={() => setFilter(vc.key)}
            className={`px-4 py-2 text-xs tracking-widest font-body transition-all ${
              filter === vc.key
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {vc.label}
          </button>
        ))}
      </div>

      {/* Featured video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div
          className="relative overflow-hidden cursor-pointer bg-muted aspect-[21/9] group"
          onClick={() => openVideo("What is Microtopping? The Complete INCISE Guide")}
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80"
            alt="INCISE Microtopping complete guide"
            className="w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
            <div className="w-20 h-20 border-2 border-foreground/70 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-foreground ml-1">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="text-xs tracking-widest text-muted-foreground/60 uppercase font-body">
              Watch Featured Video
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-background/95 to-transparent">
            <p className="label-text text-[10px] mb-2">Product Overview · 4:30</p>
            <h3 className="font-display text-2xl md:text-4xl text-foreground">
              What is Microtopping?
              <br />
              <span className="italic text-muted-foreground/60">The Complete INCISE Guide</span>
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Video sections */}
      {visibleCategories.map((catKey) => (
        <div key={catKey} className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <div className="w-5 h-px bg-primary" />
            <h3 className="text-xs tracking-widest uppercase text-foreground font-body">
              {catKey === "overview" && "Product Overviews"}
              {catKey === "application" && "Application Guides"}
              {catKey === "howto" && "How-To & Decision Guides"}
              {catKey === "project" && "Project Tours"}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {videos[catKey].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <VideoCard video={video} onClick={() => openVideo(video.title)} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <VideoModal title={modalTitle} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default VideoGallery;
