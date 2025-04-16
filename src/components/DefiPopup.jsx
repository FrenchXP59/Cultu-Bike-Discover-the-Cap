// src/components/DefiPopup.jsx
import React, { useState, useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { playSound } from "../utils/soundManager";

const DefiPopup = ({ place }) => {
  const { score, setScore, completedChallenges, addCompletedChallenge } = useContext(GameContext);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isChallengeDone = completedChallenges.includes(place.id);

  const handleDefiComplete = () => {
    if (!isChallengeDone) {
      setScore(score + 2);
      addCompletedChallenge(place.id);
      setFeedbackMessage("✅ Défi complété, +2 points !");
      playSound("goodAnswer");
    } else {
      setFeedbackMessage("🔁 Défi déjà validé.");
      playSound("buttonClick");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <p className="popup-defi"><strong>🎯 Défi :</strong> {place.defi}</p>

      <button
        className={`button-orange ${isChallengeDone ? "validated" : ""}`}
        onClick={() => { playSound("buttonClick"); handleDefiComplete(); }}
        disabled={isChallengeDone}
      >
        {isChallengeDone ? "✅ Défi validé !" : "🚀 J'ai fait le défi"}
      </button>

      {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
    </div>
  );
};

export default DefiPopup;
