// src/components/DefiPopup.jsx
import React, { useState, useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { playSound } from "../utils/soundManager";  // Import

const DefiPopup = ({ place }) => {
  const { score, setScore, completedChallenges, addCompletedChallenge } = useContext(GameContext);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isChallengeDone = completedChallenges.includes(place.id);

  const handleDefiComplete = () => {
    if (!isChallengeDone) {
      setScore(score + 2);
      addCompletedChallenge(place.id);
      setFeedbackMessage("Défi complété, +2 points !");
      playSound("goodAnswer");  // Vous pouvez choisir un son spécifique ici si vous voulez
    } else {
      setFeedbackMessage("Défi déjà validé.");
      playSound("buttonClick");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <p><strong>Défi :</strong> {place.defi}</p>
      {isChallengeDone ? (
        <p style={{ color: "green" }}>Défi déjà validé.</p>
      ) : (
        <button onClick={() => { playSound("buttonClick"); handleDefiComplete(); }}>
          J'ai fait le défi
        </button>
      )}
      {feedbackMessage && (
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

export default DefiPopup;