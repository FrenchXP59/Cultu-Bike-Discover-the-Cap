// src/utils/scoreUtils.js

/**
 * Sauvegarde le score et le temps dans localStorage.
 * Chaque partie est enregistrée avec la date actuelle.
 */
export function saveScore(score, time) {
  // Récupère les scores enregistrés ou initialise un tableau vide
  const storedScores = JSON.parse(localStorage.getItem('gameScores')) || [];
  // Crée un nouvel objet score avec la date actuelle
  const newScore = {
    score,
    time,
    date: new Date().toISOString(),
  };
  // Ajoute le nouveau score au tableau
  storedScores.push(newScore);
  // Enregistre le tableau mis à jour dans localStorage
  localStorage.setItem('gameScores', JSON.stringify(storedScores));
}
