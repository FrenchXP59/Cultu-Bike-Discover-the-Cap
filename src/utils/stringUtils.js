// src/utils/stringUtils.js

/**
 * Normalise une chaîne : minuscules, sans accents, sans ponctuation,
 * sans articles courants (FR/EN) et sans espaces multiples
 */
export function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")           // supprime les accents
    .replace(/[^\w\s]/g, "")                   // supprime la ponctuation
    // supprime les articles français et anglais
    .replace(/\b(d'|le|la|les|l'|un|une|des|the|a|an)\b/g, "")
    .replace(/\s+/g, " ")                      // réduit les espaces multiples
    .trim();
}

/**
 * Vérifie si la réponse correspond à une réponse acceptée,
 * avec un mapping d’exceptions / synonymes
 *
 * @param {string} userAnswer     – la chaîne tapée par l’utilisateur
 * @param {string[]} validAnswers – tableau des réponses acceptables
 * @returns {boolean}
 */
export function isCorrectAnswer(userAnswer, validAnswers) {
  const normalizedUserAnswer = normalizeString(userAnswer);

  // mapping d’exceptions ou de synonymes
  const exceptionMapping = {
    "louis 18":    "louis xviii",
    "b pages":     "bernard pages",
    pages:         "bernard pages",
    // ajouter d’autres variantes si nécessaire
  };

  // applique l’exception si elle existe
  const finalAnswer = exceptionMapping[normalizedUserAnswer] || normalizedUserAnswer;

  // compare chaque réponse autorisée après normalisation
  return validAnswers.some(
    (answer) => normalizeString(answer) === finalAnswer
  );
}