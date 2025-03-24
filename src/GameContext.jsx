// src/GameContext.jsx
import React, { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);

  // Pour mémoriser les questions déjà terminées
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Pour mémoriser les défis déjà validés
  const [completedChallenges, setCompletedChallenges] = useState([]);

  // Fonction pour ajouter une question répondue
  const addAnsweredQuestion = (questionId) => {
    setAnsweredQuestions((prev) => [...prev, questionId]);
  };

  // Fonction pour ajouter un défi validé
  const addCompletedChallenge = (placeId) => {
    setCompletedChallenges((prev) => [...prev, placeId]);
  };

  // Remise à zéro du jeu (pour recommencer)
  const resetGame = () => {
    setScore(0);
    setAnsweredQuestions([]);
    setCompletedChallenges([]);
  };

  // Vous pouvez également intégrer finishGame ici si besoin (via saveScore, etc.)

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        answeredQuestions,
        addAnsweredQuestion,
        completedChallenges,
        addCompletedChallenge,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
