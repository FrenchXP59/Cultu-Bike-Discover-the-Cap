// src/components/GeoValidation.jsx
import React, { useContext, useState } from "react";
import { GameContext } from "../GameContext.jsx";
import { playSound } from "../utils/soundManager";

const GeoValidation = ({ targetLatitude, targetLongitude, pointReward = 1 }) => {
  const { score, setScore } = useContext(GameContext);
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371000;
    const toRad = (x) => (x * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const checkProximity = () => {
    if (validated) return;

    playSound("buttonClick");

    if (!navigator.geolocation) {
      setMessage("🚫 La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const distance = getDistanceFromLatLonInMeters(
          latitude,
          longitude,
          targetLatitude,
          targetLongitude
        );
        console.log("📍 Distance mesurée :", distance, "m");

        if (distance <= 300) {
          setScore((prevScore) => prevScore + pointReward);
          setMessage(`✅ Bonus point ! C'est gagné : vous êtes proche ! (${Math.round(distance)}m)`);
          setValidated(true);
        } else {
          setMessage(`📏 Vous êtes à ${Math.round(distance)}m du point. Approchez-vous pour obtenir des points.`);
        }
      },
      (error) => {
        console.error("Erreur géolocalisation :", error);
        setMessage("❌ Erreur lors de la récupération de votre position.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 5000,    // ← 🔁 Position récente
        timeout: 10000       // ← ⏱️ Réagit vite en cas de souci
      }
    );
  };

  return (
    <div>
      <button 
        onClick={checkProximity} 
        disabled={validated}
        className={`button-blue ${validated ? "validated" : ""}`}
      >
        {validated ? "✅ Position validée !" : "📍 Valider ma position"}
      </button>

      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default GeoValidation;
