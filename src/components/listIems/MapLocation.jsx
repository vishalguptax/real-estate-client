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
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapLocation = ({ item }) => {
  if (!item.latitude || !item.longitude) return null; // Prevent errors if location is missing

  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <strong>{item.name}</strong> <br />
        📍 Lat: {item.latitude}, Lng: {item.longitude}
      </Popup>
    </Marker>
  );
};

export default MapLocation;




