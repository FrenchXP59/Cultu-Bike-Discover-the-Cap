// src/components/MyMarker.jsx
import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import PopupContent from "./PopupContent";

function MyMarker({ place }) {
  // État local pour savoir si la popup est ouverte ou fermée
  const [isOpen, setIsOpen] = useState(false);

  // Gère le clic sur le Marker (ouvre le popup)
  const handleMarkerClick = () => {
    setIsOpen(true);
  };

  // Gère la fermeture (appelée par Leaflet ou par notre bouton "Fermer")
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Marker
      position={[place.lat, place.lng]} // Suppose que place contient lat & lng
      eventHandlers={{
        click: handleMarkerClick, // ouvre la popup au clic sur le Marker
      }}
    >
      {isOpen && (
        <Popup
          maxWidth={350}         // Ajout
          autoPan={true}         // Ajout
          autoPanPadding={[50,50]}// Ajout
          closeButton={false}    // Désactive la croix par défaut
          closeOnClick={false}   // Évite la fermeture en cliquant sur la carte
          onClose={handleClose}  // Permet à Leaflet de fermer la popup (ex. ESC)
        >
          <PopupContent place={place} onClose={handleClose} />
        </Popup>
      )}
    </Marker>
  );
}

export default MyMarker;
