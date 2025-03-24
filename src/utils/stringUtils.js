// src/utils/stringUtils.js

/**
 * Normalise une chaîne : minuscules, sans accents, sans ponctuation, sans articles courants et sans espaces multiples
 */
export function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // Supprime les accents
    .replace(/[^\w\s]/g, "")          // Supprime la ponctuation
    .replace(/\bd'/g, "")             // Supprime les préfixes "d'" en début de mot
    .replace(/\b(le|la|les|l'|un|une|des)\b/g, "") // Supprime les articles courants
    .replace(/\s+/g, " ")             // Réduit les espaces multiples
    .trim();
}

/**
 * Vérifie si la réponse correspond à une réponse acceptée, avec un mapping d’exceptions
 */
export function isCorrectAnswer(userAnswer, validAnswers) {
  const normalizedUserAnswer = normalizeString(userAnswer);

  // Mapping d’exceptions ou de synonymes
  const exceptionMapping = {
    "louis 18": "louis xviii",
    "b pages": "bernard pages",
    "pages": "bernard pages"
    // Ajoutez d'autres variantes ici si besoin
  };

  const finalAnswer = exceptionMapping[normalizedUserAnswer] || normalizedUserAnswer;

  return validAnswers.some(answer => normalizeString(answer) === finalAnswer);
}