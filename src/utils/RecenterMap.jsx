// src/utils/RecenterMap.jsx
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function RecenterMap({ lat, lng, trigger, onDone }) {
  const map = useMap();

  useEffect(() => {
    // on ne fait rien tant que trigger est false ou que map n'est pas encore initialisée
    if (!map || !trigger) return;

    // attend que la carte soit prête avant de voler à la position
    map.whenReady(() => {
      map.flyTo([lat, lng], map.getZoom(), {
        animate: true,
        duration: 1.5, // durée en secondes
      });
      onDone?.();
    });
  }, [map, trigger, lat, lng, onDone]);

  return null;
}