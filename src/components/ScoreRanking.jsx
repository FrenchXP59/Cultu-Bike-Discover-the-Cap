// src/components/ScoreRanking.jsx
import React, { useEffect, useState } from "react";

const ScoreRanking = ({ onRestart, onReturnToGame }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("gameScores")) || [];
    storedScores.sort((a, b) => b.score - a.score);
    setScores(storedScores);
  }, []);

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#FAE3D9",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <h2>🏆 Score Ranking</h2>
      {scores.length === 0 ? (
        <p>Aucun score enregistré pour le moment.</p>
      ) : (
        <ol>
          {scores.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <strong>{item.score}</strong> points – {item.time} secondes – {" "}
              {new Date(item.date).toLocaleString()}
            </li>
          ))}
        </ol>
      )}

      <div style={{ marginTop: "24px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={onReturnToGame}
          style={{
            padding: "10px 20px",
            backgroundColor: "#95a5a6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🗺️ Return to Map
        </button>

        <button
          onClick={onRestart}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🔄 Play Again
        </button>
      </div>
    </div>
  );
};

export default ScoreRanking;
