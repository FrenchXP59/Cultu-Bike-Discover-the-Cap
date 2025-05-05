import React, { useContext, useState, useEffect } from "react";

import { GameContext } from "../GameContext.jsx";
import { LocationContext } from "../LocationContext.jsx";

import { playSound } from "../utils/soundManager";

const GeoValidation = ({ targetLatitude, targetLongitude, pointReward = 1 }) => {
  const { score, setScore } = useContext(GameContext);
  const { userLocation } = useContext(LocationContext);
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [loadingLoc, setLoadingLoc] = useState(true);

  useEffect(() => {
    if (userLocation) setLoadingLoc(false);
  }, [userLocation]);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371000;
    const toRad = x => x * Math.PI/180;
    const dLat = toRad(lat2-lat1), dLon = toRad(lon2-lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  };

  const checkProximity = () => {
    if (validated || loadingLoc) return;
    playSound("buttonClick");

    // 1️⃣ UserLocation dispo → on calcule direct
    const { lat, lng } = userLocation;
    const dist = getDistance(lat, lng, targetLatitude, targetLongitude);
    console.log("Distance watch:", dist, "m");

    if (dist <= 300) {
      setScore(s => s + pointReward);
      setMessage(`✅ Bonus ! À ${Math.round(dist)} m du point.`);
      setValidated(true);
    } else {
      setMessage(`📏 À ${Math.round(dist)} m.🔍 Move closer to the spot to confirm your location`);
    }
  };

  return (
    <div>
      <button
        onClick={checkProximity}
        disabled={validated || loadingLoc}
        className={`button-blue ${validated ? "validated" : ""}`}
      >
        {validated
          ? "✅ Location confirmed!"
          : loadingLoc
            ? "📍 Fetching location…"
            : "📍 Confirm my location"}
      </button>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default GeoValidation;
