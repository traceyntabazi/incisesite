import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface MapLocation {
  id: string;
  type: "hq" | "office" | "distributor";
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  address: string[];
}

// Simple visual map replacement — styled pins on a decorative background
const LocationMap = ({
  locations,
  onMarkerClick,
}: {
  locations: MapLocation[];
  onMarkerClick?: (id: string) => void;
}) => {
  // Normalize lat/lng to percentage positions on the container
  const lats = locations.map((l) => l.lat);
  const lngs = locations.map((l) => l.lng);
  const minLat = Math.min(...lats) - 1.5;
  const maxLat = Math.max(...lats) + 1.5;
  const minLng = Math.min(...lngs) - 2;
  const maxLng = Math.max(...lngs) + 2;

  const toPosition = (lat: number, lng: number) => ({
    top: `${((maxLat - lat) / (maxLat - minLat)) * 100}%`,
    left: `${((lng - minLng) / (maxLng - minLng)) * 100}%`,
  });

  return (
    <div className="relative w-full h-full bg-muted/30 overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Label */}
      <div className="absolute top-6 left-6 z-10">
        <p className="text-[0.58rem] tracking-[0.22em] uppercase font-body text-muted-foreground" style={{ fontWeight: 400 }}>
          East Africa
        </p>
      </div>

      {/* Location pins */}
      {locations.map((loc, i) => {
        const pos = toPosition(loc.lat, loc.lng);
        const isHQ = loc.type === "hq";

        return (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
            style={{ top: pos.top, left: pos.left }}
            onClick={() => onMarkerClick?.(loc.id)}
          >
            {/* Pulse ring for HQ */}
            {isHQ && (
              <span className="absolute inset-0 w-10 h-10 -translate-x-[25%] -translate-y-[25%] rounded-full bg-primary/20 animate-ping" />
            )}

            {/* Pin */}
            <div
              className={`relative flex items-center justify-center rounded-full border-2 border-background shadow-lg transition-transform duration-300 group-hover:scale-125 ${
                isHQ ? "w-10 h-10 bg-primary" : "w-7 h-7 bg-primary/80"
              }`}
            >
              <MapPin className={`text-primary-foreground ${isHQ ? "w-4 h-4" : "w-3 h-3"}`} />
            </div>

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              <div className="bg-card border border-border px-4 py-2.5 shadow-xl">
                <p className="text-[0.6rem] tracking-[0.18em] uppercase font-body text-primary" style={{ fontWeight: 500 }}>
                  {loc.type === "hq" ? "HQ" : loc.type === "office" ? "Office" : "Distributor"}
                </p>
                <p className="font-display text-sm text-foreground" style={{ fontWeight: 400 }}>
                  {loc.name}
                </p>
                <p className="text-[0.7rem] font-body text-muted-foreground" style={{ fontWeight: 300 }}>
                  {loc.city}, {loc.country}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default LocationMap;
