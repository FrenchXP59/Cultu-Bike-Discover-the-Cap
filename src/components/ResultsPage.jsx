// src/components/ResultsPage.jsx
import React, { useContext } from "react";
import { GameContext } from "../GameContext.jsx";
const ResultsPage = () => {
  const { score, time, resetGame } = useContext(GameContext);

  return (
    <div>
      <h2>Résultats du Jeu</h2>
      <p>Score final : {score}</p>
      <p>Temps total : {time} secondes</p>
      <button onClick={resetGame}>Rejouer</button>
    </div>
  );
};

export default ResultsPage;
