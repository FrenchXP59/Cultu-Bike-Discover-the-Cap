// src/utils/RecenterMap.jsx
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function RecenterMap({ lat, lng, trigger, onDone }) {
  const map = useMap();

  useEffect(() => {
    if (trigger) {
      map.flyTo([lat, lng], 15, {
        animate: true,
        duration: 1.5 // durée en secondes
      });
      if (onDone) onDone();
    }
  }, [trigger]);

  return null;
}