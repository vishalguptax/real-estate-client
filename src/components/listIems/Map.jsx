import { MapContainer, TileLayer } from "react-leaflet";

import { listData } from "../lib/dummy";
import MapLocation from "./MapLocation";

const Map = () => {
  const data = listData;
  const defaultCenter =
    data.length > 0 ? [data[0].latitude, data[0].longitude] : [28.6139, 77.209];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      className="h-[300px] w-[100%] md:h-[300px] md:w-[80%] md:p-2"
    >
      {/* OpenStreetMap Layer */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marker with Popup */}
      {data?.map((item) => (
        <MapLocation key={item.id} item={item}></MapLocation>
      ))}
    </MapContainer>
  );
};

export default Map;
