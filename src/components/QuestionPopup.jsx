// src/components/QuestionPopup.jsx
import React, { useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    setUserAnswer("");
    setErrorCount(0);
    setQuestionDone(false);
    setFeedbackMessage("");
    setValidatedAnswer("");
  }, [place]);

  const question = place.questions?.[0];
  if (!question) {
    return <p>Aucune question pour ce lieu.</p>;
  }

  const uniqueQuestionId = `${place.id}-${question.id}`;
  const isAnswered = answeredQuestions.includes(uniqueQuestionId);

  const handleValidate = (providedAnswer) => {
    const answerToCheck = providedAnswer !== undefined ? providedAnswer : userAnswer;
    const correct = isCorrectAnswer(answerToCheck, question.reponses_acceptables);

    if (correct) {
      const pointsToAdd = errorCount === 0 ? 1 : 0.5;
      setScore(score + pointsToAdd);
      addAnsweredQuestion(uniqueQuestionId);
      setFeedbackMessage("✅ Bonne réponse !");
      setQuestionDone(true);
      setValidatedAnswer(answerToCheck);
      playSound("goodAnswer");
      if (onQuestionDone) {
        onQuestionDone();
      }
    } else {
      setErrorCount(errorCount + 1);
      playSound("wrongAnswer");

      if (errorCount === 0) {
        setFeedbackMessage("😅 1ère erreur : un indice va s'afficher.");
      } else if (errorCount === 1) {
        setFeedbackMessage("⚠️ 2ème erreur : passage au QCM !");
      } else {
        setFeedbackMessage(
          `❌ Mauvaise réponse. La bonne réponse était : ${question.bonne_reponse}`
        );
        addAnsweredQuestion(uniqueQuestionId);
        setQuestionDone(true);
        if (onQuestionDone) {
          onQuestionDone();
        }
      }
    }

    setUserAnswer("");
  };

  return (
    <div>
      <p className="popup-question">❓ {question.question}</p>

      {questionDone || isAnswered ? (
        <>
          <p style={{ color: "green" }}>Question déjà répondue.</p>
          {validatedAnswer && (
            <p className="bold-answer">Votre réponse : {validatedAnswer}</p>
          )}
        </>
      ) : (
        <>
          {errorCount === 0 && (
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Votre réponse"
                style={{ flex: "1" }}
                className="bold-input"
              />
              <button
                onClick={() => {
                  playSound("buttonClick");
                  handleValidate();
                }}
                className="button-blue"
              >
                ✅ Valider la réponse
              </button>
            </div>
          )}

          {errorCount === 1 && (
            <>
              <p>
                <strong>💡 Indice :</strong> {question.indice}
              </p>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Votre réponse"
                  style={{ flex: "1" }}
                  className="bold-input"
                />
                <button
                  onClick={() => {
                    playSound("buttonClick");
                    handleValidate();
                  }}
                  className="button-blue"
                >
                  ✅ Valider la réponse
                </button>
              </div>
            </>
          )}

          {errorCount === 2 && (
            <>
              <p>
                <strong>🎓 Dernière chance (QCM) :</strong>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {question.qcm.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playSound("buttonClick");
                      handleValidate(option);
                    }}
                    className="button-qcm"
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
  (prevProps, nextProps) => prevProps.place === nextProps.place
);
