// src/components/ResultsPage.jsx
import React, { useContext } from "react";
import { GameContext } from "../GameContext.jsx";
const ResultsPage = () => {
  const { score, time, resetGame } = useContext(GameContext);

  return (
    <div>
      <h2>Game Results</h2>
      <p>Final score: {score}</p>
      <p>Total time: {time} seconds</p>
      <button onClick={resetGame}>Rejouer</button>
    </div>
  );
};

export default ResultsPage;
