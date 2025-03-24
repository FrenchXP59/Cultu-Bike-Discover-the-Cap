// src/components/ScoreRanking.jsx
import React, { useEffect, useState } from "react";

const ScoreRanking = ({ onClose }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("gameScores")) || [];
    // Tri du plus grand au plus petit
    storedScores.sort((a, b) => b.score - a.score);
    setScores(storedScores);
  }, []);

  return (
    <div
      style={{
        padding: "16px",
        // Si vous avez un design system avec var(--color-bg), var(--color-text)
        // sinon utilisez vos couleurs pastel direct.
        backgroundColor: "#FAE3D9", // #FAE3D9 par ex.
        color: "#333",         // #333
        minHeight: "100vh",                 // occupe tout l'écran
      }}
    >
      <h2>Classement des Scores</h2>
      {scores.length === 0 ? (
        <p>Aucun score enregistré pour le moment.</p>
      ) : (
        <ol>
          {scores.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <strong>{item.score}</strong> points – {item.time} secondes –{" "}
              {new Date(item.date).toLocaleString()}
            </li>
          ))}
        </ol>
      )}

      {/* Bouton Fermer / Retour */}
      <button
        onClick={onClose}
        style={{
          marginTop: "16px",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: "#FFB6B9", // par ex. #FFB6B9
          color: "#fff",
        }}
      >
        Fermer
      </button>
    </div>
  );
};

export default ScoreRanking;
