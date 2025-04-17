import React, { useState, useEffect, memo, useContext } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PLACES_DATA } from "../data/placesData";
import MyMarker from "./MyMarker";
import BottomSheet from "./BottomSheet";
import RecenterMap from "../utils/RecenterMap";
import { GameContext } from "../GameContext";

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

const userIcon = L.icon({
  iconUrl: "/images/myLocIcon.png",
  iconRetinaUrl: "/images/myLocIconx2.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [1, -24],
  shadowSize: [25, 25],
});

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { shouldRecenter, setShouldRecenter } = useContext(GameContext);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("⚠️ La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("📍 Position reçue :", latitude, longitude);
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("❌ Erreur géolocalisation :", error);
        setUserLocation({ lat: 50.632, lng: 3.059 }); // fallback Lille
      },
      {
        enableHighAccuracy: false,
        maximumAge: 30000,
        timeout: 20000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <MapContainer center={[43.5670, 7.1200]} zoom={14} style={{ height: "100%", width: "100%" }}>
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

        {shouldRecenter && (
          <RecenterMap
            lat={43.550}
            lng={7.130}
            trigger={true}
            onDone={() => setShouldRecenter(false)}
          />
        )}
      </MapContainer>

      {isSmallScreen && selectedPlace && (
        <BottomSheet
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
          userLocation={userLocation}
        />
      )}
    </div>
  );
};

export default memo(MapComponent);