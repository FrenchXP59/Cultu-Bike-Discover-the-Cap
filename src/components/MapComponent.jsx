// src/components/MapComponent.jsx
import React, { useState, useEffect, memo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PLACES_DATA } from "../data/placesData";
import PopupContent from "./PopupContent";

// Icônes standard
import markerIcon from "../Images/marker-icon.png";
import markerIcon2x from "../Images/marker-icon-2x.png";
import markerShadow from "../Images/marker-shadow.png";

// Icône standard pour les lieux classiques
const myIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [20, 34],
  iconAnchor: [10, 34],
  popupAnchor: [1, -30],
});

// Icône pour le point de départ
import departIconImg from "../Images/depart-icon.png";
import departIcon2xImg from "../Images/depart-icon-2x.png";

const departIcon = L.icon({
  iconUrl: departIconImg,
  iconRetinaUrl: departIcon2xImg,
  shadowUrl: markerShadow,
  iconSize: [40, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

// Icône pour la position de l'utilisateur
const userIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Composant pour les marqueurs statiques (lieux) et la popup
const StaticMarkers = memo(({ selectedPlace, setSelectedPlace }) => (
  <>
    {PLACES_DATA.map((place) => {
      const iconToUse = place.type === "depart" ? departIcon : myIcon;
      return (
        <Marker
          key={place.id}
          position={[place.latitude, place.longitude]}
          icon={iconToUse}
          eventHandlers={{
            click: () => setSelectedPlace(place),
          }}
        />
      );
    })}

    {selectedPlace && (
      <Popup
        position={[selectedPlace.latitude, selectedPlace.longitude]}
        maxWidth={350}
        autoPan={true}
        autoPanPadding={[20, 20]}
        autoClose={false}
        closeOnClick={false}
        closeButton={false}
        onClose={() => setSelectedPlace(null)}
      >
        <PopupContent
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      </Popup>
    )}
  </>
));

// Composant pour la position utilisateur (mis à jour en temps réel)
const UserLocationMarker = memo(({ userLocation }) => {
  if (!userLocation) return null;

  // Variante sans popup (pour éviter tout recouvrement)
  return (
    <Marker
      position={[userLocation.lat, userLocation.lng]}
      icon={userIcon}
      zIndexOffset={-1000} // On place ce marker en dessous des marqueurs fixes
    />
  );
});

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Position utilisateur :", latitude, longitude);
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.log("Erreur geoloc :", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 30000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <MapContainer
        center={[43.5670, 7.1200]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Marqueurs statiques + popup */}
        <StaticMarkers
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
        />

        {/* Marqueur position utilisateur */}
        <UserLocationMarker userLocation={userLocation} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
