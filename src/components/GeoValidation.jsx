// src/components/GeoValidation.jsx
import React, { useContext, useState } from "react";
import { GameContext } from "../GameContext.jsx";
import { playSound } from "../utils/soundManager"; // <-- Import de la fonction playSound

const GeoValidation = ({ targetLatitude, targetLongitude, pointReward = 1 }) => {
  const { score, setScore } = useContext(GameContext);
  const [message, setMessage] = useState("");

  // Fonction de calcul de la distance en mètres (formule de Haversine)
  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371000; // Rayon de la Terre en mètres
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
    // On joue le son de clic au moment du clic sur le bouton
    playSound("buttonClick");

    if (!navigator.geolocation) {
      setMessage("La géolocalisation n'est pas supportée par votre navigateur.");
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
        console.log("Distance:", distance, "m");

        if (distance <= 200) {
          setScore((prevScore) => prevScore + pointReward);
          setMessage(
            `Bonus point : vous êtes proche ! (${Math.round(distance)}m)`
          );
        } else {
          setMessage(
            `Vous êtes à ${Math.round(distance)}m du point. Approchez-vous pour obtenir des points.`
          );
        }
      },
      (error) => {
        setMessage("Erreur lors de la récupération de votre position.");
      }
    );
  };

  return (
    <div>
      <button onClick={checkProximity}>Valider ma position</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GeoValidation;
