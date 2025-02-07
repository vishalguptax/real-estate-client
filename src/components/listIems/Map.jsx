import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon issue in Leaflet + React

import { listData } from "../lib/dummy";
import MapLocation from "./MapLocation";



const Map = () => {
  const data = listData;
  const defaultCenter = data.length > 0 ? [data[0].latitude, data[0].longitude] : [28.6139, 77.2090];

  return (
    <MapContainer center={defaultCenter} zoom={13} style={{ height: "500px", width: "100%" }}>
      {/* OpenStreetMap Layer */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marker with Popup */}
         {data?.map((item) => (
            <MapLocation key = {item.id} item={item}></MapLocation>
         ))}
 
    </MapContainer>
  );
};

export default Map;


