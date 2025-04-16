// src/components/MyMarker.jsx
import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import PopupContent from "./PopupContent";
import L from "leaflet";

// Définir vos icônes personnalisées en utilisant des URL absolues (les images sont dans public/images)
const myIcon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [20, 34],
  iconAnchor: [10, 34],
  popupAnchor: [1, -30],
});

const departIcon = L.icon({
  iconUrl: "/images/depart-icon.png",
  iconRetinaUrl: "/images/depart-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

function MyMarker({ place, selectedPlace, setSelectedPlace }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleMarkerClick = () => {
    setSelectedPlace(place);
  };

  const handleClose = () => {
    setSelectedPlace(null);
  };

  // Vérifier que les coordonnées existent
  if (!place.latitude || !place.longitude) return null;

  return (
    <Marker
      position={[place.latitude, place.longitude]}
      // Utiliser departIcon si le lieu a type "depart", sinon utiliser myIcon
      icon={place.type === "depart" ? departIcon : myIcon}
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      {!isSmallScreen && selectedPlace && selectedPlace.id === place.id && (
        <Popup
          maxWidth={350}
          autoPan={true}
          autoPanPadding={[80, 80]}
          keepInView={true}
          offset={[0, -10]}
          closeButton={false}
          closeOnClick={false}
          onClose={handleClose}
        >
          <PopupContent place={place} onClose={handleClose} />
        </Popup>
      )}
    </Marker>
  );
}

export default MyMarker;