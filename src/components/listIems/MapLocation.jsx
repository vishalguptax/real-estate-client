import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon issue in Leaflet + React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [30, 45], // Slightly larger for better visibility
  iconAnchor: [15, 45],
});

const MapLocation = ({ item }) => {
  if (!item.latitude || !item.longitude) return null; // Prevent errors if location is missing

  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup className="text-center">
        <div className="p-2 text-gray-800">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            📍 {item.address}
          </p>
          <p className="text-sm text-green-600 font-semibold mt-1">
            💰 ${item.price}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapLocation;
