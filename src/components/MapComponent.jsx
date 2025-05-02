// src/components/MapComponent.jsx
import React, { useState, useEffect, memo, useContext } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ==== Point Leaflet par défaut vers /public/ =========================
// Supprime l’ancien getter pour éviter le warning
delete L.Icon.Default.prototype._getIconUrl;
// Indique simplement le chemin public/marker-icon*.png
L.Icon.Default.mergeOptions({
  iconUrl:   "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
});
// =====================================================================

// Icône perso pour la position utilisateur
const userIcon = L.icon({
  iconUrl:       "/images/myLocIcon.png",
  iconRetinaUrl: "/images/myLocIconx2.png",
  shadowUrl:     "/marker-shadow.png",
  iconSize:      [25, 25],
  iconAnchor:    [12, 25],
  popupAnchor:   [1, -24],
  shadowSize:    [25, 25],
});

import { PLACES_DATA } from "../data/placesData";
import MyMarker        from "./MyMarker.jsx";
import BottomSheet     from "./BottomSheet.jsx";
import RecenterMap     from "../utils/RecenterMap.jsx";
import { GameContext } from "../GameContext.jsx";

const DEFAULT_COORDS = { lat: 43.5670, lng: 7.1200 };

function MapComponent({ onPopupToggle }) {
  const [selectedPlace, setSelectedPlace]   = useState(null);
  const [userLocation, setUserLocation]     = useState(null);
  const [isSmallScreen, setIsSmallScreen]   = useState(false);
  const { shouldRecenter, setShouldRecenter } = useContext(GameContext);

  // 1) informer App du state “popup ouvert”
  useEffect(() => onPopupToggle?.(!!selectedPlace), [selectedPlace, onPopupToggle]);

  // 2) responsive (<500px)
  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth < 500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 3) géoloc watchPosition
  useEffect(() => {
    if (!navigator.geolocation) return;
    const id = navigator.geolocation.watchPosition(
      ({ coords }) => setUserLocation({ lat: coords.latitude, lng: coords.longitude }),
      () => setUserLocation(null),
      { enableHighAccuracy: false, maximumAge: 30000, timeout: 20000 }
    );
    return () => navigator.geolocation.clearWatch(id);
  }, []);

  // 4) reset “shouldRecenter” dès qu’on a une position
  useEffect(() => {
    if (shouldRecenter && userLocation) {
      setShouldRecenter(false);
    }
  }, [shouldRecenter, userLocation, setShouldRecenter]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <MapContainer
        center={
          userLocation
            ? [userLocation.lat, userLocation.lng]
            : [DEFAULT_COORDS.lat, DEFAULT_COORDS.lng]
        }
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {PLACES_DATA.map((place) => (
          <MyMarker
            key={place.id}
            place={place}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        ))}

        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={userIcon}
            zIndexOffset={-1000}
          />
        )}

        {shouldRecenter && userLocation && (
          <RecenterMap
            lat={userLocation.lat}
            lng={userLocation.lng}
            trigger
            onDone={() => setShouldRecenter(false)}
          />
        )}
      </MapContainer>

      {/* Sur mobile, bascule en BottomSheet */}
      {isSmallScreen && selectedPlace && (
        <BottomSheet
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
          userLocation={userLocation}
        />
      )}
    </div>
  );
}

export default memo(MapComponent);