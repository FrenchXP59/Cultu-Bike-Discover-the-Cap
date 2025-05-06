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
        <p>No scores recorded yet.</p>
      ) : (
        <ol>
          {scores.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <strong>{item.score}</strong> points – {item.time} seconds –{" "}
              {new Date(item.date).toLocaleString()}
            </li>
          ))}
        </ol>
      )}

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onReturnToGame}
          style={{
            padding: "10px 20px",
            backgroundColor: "#95a5a6",
            color: "#fff",
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
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🔄 Play Again
        </button>
      </div>

      {/* ----- Buy Me a Coffee ----- */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          href="https://buymeacoffee.com/lescarnetsduo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#f1c40f",
            padding: "10px 20px",
            color: "#333",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f39c12")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f1c40f")}
        >
          ☕ Support this project on Buy Me a Coffee
        </a>
      </div>
    </div>
  );
};

export default ScoreRanking;
