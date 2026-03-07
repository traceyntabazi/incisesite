const items = [
  "MICROTOPPING", "WALLCRETE", "METALLIC FINISH", "PATIO SYSTEMS",
  "COLOR HARDENER", "CEMWASH", "STAMPED CONCRETE", "MICROTEK",
  "MANUFACTURED IN UGANDA", "12+ YEARS EXPERIENCE", "300+ PROJECTS", "CERTIFIED APPLICATORS",
];

const ProductTicker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-4 bg-secondary">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm tracking-[0.15em] text-muted-foreground font-body flex items-center gap-8"
          >
            {item}
            <span className="text-primary text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTicker;
