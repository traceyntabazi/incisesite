const items = [
  "MICROTOPPING", "METALLIC FINISH", "WALLCRETE", "CEMWASH",
  "PATIO SYSTEM", "COLOR HARDENER", "UGANDA MANUFACTURED", "EAST AFRICA",
];

const ProductTicker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4 bg-dark">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-[0.68rem] tracking-[0.16em] text-white/50 font-body flex items-center gap-8 uppercase"
          >
            {item}
            <span style={{ color: "hsl(35 38% 58%)" }} className="text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTicker;
