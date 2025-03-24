// src/components/QuestionPopup.jsx
import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "../GameContext.jsx";
import { isCorrectAnswer } from "../utils/stringUtils";
import { playSound } from "../utils/soundManager";  // Ajout de l'import

const QuestionPopup = ({ place, onQuestionDone }) => {
  const { score, setScore, answeredQuestions, addAnsweredQuestion } = useContext(GameContext);

  const [userAnswer, setUserAnswer] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [questionDone, setQuestionDone] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    setUserAnswer("");
    setErrorCount(0);
    setQuestionDone(false);
    setFeedbackMessage("");
  }, [place]);

  const question = place.questions?.[0];
  if (!question) return <p>Aucune question pour ce lieu.</p>;

  const uniqueQuestionId = `${place.id}-${question.id}`;
  const isAnswered = answeredQuestions.includes(uniqueQuestionId);

  const handleValidate = (providedAnswer) => {
    const answerToCheck = providedAnswer !== undefined ? providedAnswer : userAnswer;
    const correct = isCorrectAnswer(answerToCheck, question.reponses_acceptables);

    if (correct) {
      const pointsToAdd = errorCount === 0 ? 1 : 0.5;
      setScore(score + pointsToAdd);
      addAnsweredQuestion(uniqueQuestionId);
      setFeedbackMessage("Bonne réponse !");
      setQuestionDone(true);
      playSound("goodAnswer"); // Son de bonne réponse déjà présent
      if (onQuestionDone) onQuestionDone();
    } else {
      setErrorCount(errorCount + 1);
      if (errorCount === 0) {
        setFeedbackMessage("1ère erreur : un indice va s'afficher.");
      } else if (errorCount === 1) {
        setFeedbackMessage("2ème erreur : passage au QCM !");
      } else {
        setFeedbackMessage(`Mauvaise réponse. La bonne réponse était : ${question.bonne_reponse}`);
        addAnsweredQuestion(uniqueQuestionId);
        setQuestionDone(true);
        if (onQuestionDone) onQuestionDone();
      }
      playSound("wrongAnswer"); // Son de mauvaise réponse
    }
    setUserAnswer("");
  };

  return (
    <div>
      <p>{question.question}</p>

      {(questionDone || isAnswered) ? (
        <p style={{ color: "green" }}>Question déjà répondue.</p>
      ) : (
        <>
          {errorCount === 0 && (
            <>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button onClick={() => { playSound("buttonClick"); handleValidate(); }}>Valider</button>
            </>
          )}
          {errorCount === 1 && (
            <>
              <p>
                <strong>Indice : </strong>{question.indice}
              </p>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button onClick={() => { playSound("buttonClick"); handleValidate(); }}>Valider</button>
            </>
          )}
          {errorCount === 2 && (
            <>
              <p><strong>Dernière chance (QCM) :</strong></p>
              {question.qcm.map((option, idx) => (
                <button key={idx} onClick={() => { playSound("buttonClick"); handleValidate(option); }}>
                  {option}
                </button>
              ))}
            </>
          )}
        </>
      )}

      {feedbackMessage && (
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

export default React.memo(QuestionPopup, (prevProps, nextProps) => prevProps.place === nextProps.place);