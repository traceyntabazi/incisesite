import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

const createIcon = (type: MapLocation["type"]) => {
  const color = type === "hq" ? "#b8944f" : type === "office" ? "#b8944f" : "#8a7a5a";
  const size = type === "hq" ? 18 : 14;

  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: ${size}px; height: ${size}px;
      background: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ${type === "hq" ? "animation: pulse 2s infinite;" : ""}
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const FitBounds = ({ locations }: { locations: MapLocation[] }) => {
  const map = useMap();
  
  const boundsKey = useMemo(
    () => locations.map((l) => `${l.lat},${l.lng}`).join("|"),
    [locations]
  );

  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 8 });
  }, [boundsKey, map]);

  return null;
};

const LocationMap = ({
  locations,
  onMarkerClick,
}: {
  locations: MapLocation[];
  onMarkerClick?: (id: string) => void;
}) => {
  return (
    <>
      <style>{`
        .custom-marker { background: none !important; border: none !important; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .leaflet-popup-content-wrapper {
          background: hsl(30, 9%, 14%) !important;
          color: white !important;
          border-radius: 0 !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
          font-family: 'Jost', sans-serif !important;
        }
        .leaflet-popup-tip { background: hsl(30, 9%, 14%) !important; }
        .leaflet-popup-close-button { color: white !important; }
        .leaflet-popup-content { margin: 12px 16px !important; }
      `}</style>
      <MapContainer
        center={[-0.5, 34.5]}
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ background: "hsl(36, 33%, 97%)" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitBounds locations={locations} />
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createIcon(loc.type)}
            eventHandlers={
              onMarkerClick
                ? { click: () => onMarkerClick(loc.id) }
                : undefined
            }
          >
            <Popup>
              <div>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5, marginBottom: 4 }}>
                  {loc.type === "hq" ? "Headquarters" : loc.type === "office" ? "Regional Office" : "Distributor"}
                </p>
                <p style={{ fontSize: "0.95rem", fontFamily: "'Cormorant', serif", fontWeight: 400, marginBottom: 4 }}>
                  {loc.name}
                </p>
                <p style={{ fontSize: "0.75rem", opacity: 0.6, fontWeight: 300 }}>
                  {loc.address.join(", ")}
                  <br />
                  {loc.city}, {loc.country}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default LocationMap;
