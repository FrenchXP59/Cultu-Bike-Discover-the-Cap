// src/components/QuestionPopup.jsx
import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { isCorrectAnswer } from "../utils/stringUtils";
import { playSound } from "../utils/soundManager";

const QuestionPopup = ({ place, onQuestionDone }) => {
  const { score, setScore, answeredQuestions, addAnsweredQuestion } = useContext(GameContext);

  const [userAnswer, setUserAnswer] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [questionDone, setQuestionDone] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [validatedAnswer, setValidatedAnswer] = useState("");

  // Réinitialisation à chaque nouveau lieu
  useEffect(() => {
    setUserAnswer("");
    setErrorCount(0);
    setQuestionDone(false);
    setFeedbackMessage("");
    setValidatedAnswer("");
  }, [place]);

  // On prend toujours la première (et unique) question
  const question = place.questions?.[0];
  if (!question) return <p>Aucune question pour ce lieu.</p>;

  const uniqueQuestionId = `${place.id}-${question.id}`;
  const isAnswered = answeredQuestions.includes(uniqueQuestionId);

  const handleValidate = (providedAnswer) => {
    playSound("buttonClick");
    const answerToCheck = providedAnswer ?? userAnswer;
    const correct = isCorrectAnswer(answerToCheck, question.reponses_acceptables);

    if (correct) {
      const pointsToAdd = errorCount === 0 ? 1 : 0.5;
      setScore(score + pointsToAdd);
      addAnsweredQuestion(uniqueQuestionId);
      setFeedbackMessage("✅ Bonne réponse !");
      setQuestionDone(true);
      setValidatedAnswer(answerToCheck);
      playSound("goodAnswer");
      onQuestionDone?.();
    } else {
      playSound("wrongAnswer");
      setErrorCount((c) => c + 1);

      if (errorCount === 0) {
        setFeedbackMessage("😅 1ʳᵉ erreur : un indice va s'afficher.");
      } else if (errorCount === 1) {
        setFeedbackMessage("⚠️ 2ᵉ erreur : passage au QCM !");
      } else {
        setFeedbackMessage(`❌ Mauvaise réponse. La bonne réponse était : ${question.bonne_reponse}`);
        addAnsweredQuestion(uniqueQuestionId);
        setQuestionDone(true);
        onQuestionDone?.();
      }
    }

    setUserAnswer("");
  };

  return (
    <div className="question-container">
      <p className="popup-question">❓ {question.question}</p>

      {(questionDone || isAnswered) ? (
        <>
          <p className="feedback-message" style={{ color: "green" }}>Question déjà répondue.</p>
          {validatedAnswer && (
            <p className="bold-answer">Votre réponse : {validatedAnswer}</p>
          )}
        </>
      ) : (
        <>
          {errorCount < 2 && (
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Votre réponse"
                className="bold-input"
                style={{ flex: 1 }}
              />
              <button
                className="btn btn-blue"
                onClick={() => handleValidate()}
              >
                ✅ Valider
              </button>
            </div>
          )}

          {errorCount === 2 && (
            <>
              <p><strong>🎓 Dernière chance (QCM) :</strong></p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                {question.qcm.map((option, idx) => (
                  <button
                    key={idx}
                    className="btn btn-purple button-qcm"
                    onClick={() => handleValidate(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}

      {feedbackMessage && (
        <p className="feedback-message">{feedbackMessage}</p>
      )}
    </div>
  );
};

export default React.memo(
  QuestionPopup,
  (prev, next) => prev.place === next.place
);