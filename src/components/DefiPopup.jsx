// src/components/DefiPopup.jsx
import React, { useState, useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { playSound } from "../utils/soundManager";

const DefiPopup = React.memo(({ place }) => {
  const { score, setScore, completedChallenges, addCompletedChallenge } = useContext(GameContext);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isChallengeDone = completedChallenges.includes(place.id);

  const handleDefiComplete = () => {
    playSound("buttonClick");
    if (!isChallengeDone) {
      // +2 points
      setScore(score + 2);
      addCompletedChallenge(place.id);
      setFeedbackMessage("✅ Challenge completed! +2 points");
      playSound("goodAnswer");
    } else {
      setFeedbackMessage("🔁 Challenge already completed.");
    }
  };

  return (
    <div className="popup-defi-container" style={{ marginTop: "10px" }}>
      <p className="popup-defi">
        <strong>🎯 Challenge:</strong> {place.defi}
      </p>

      <button
        className={`btn btn-turquoise ${isChallengeDone ? "validated" : ""}`}
        onClick={handleDefiComplete}
        disabled={isChallengeDone}
        style={{ marginRight: "8px", marginBottom: "8px" }}
      >
        {isChallengeDone ? "✅ Challenge completed!" : "🚀 I’ve completed the challenge"}
      </button>

      {feedbackMessage && (
        <p className="feedback-message" style={{ marginTop: "8px" }}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
});

export default DefiPopup;