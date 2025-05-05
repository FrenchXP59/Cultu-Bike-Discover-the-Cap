// src/components/QuestionPopup.jsx
import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { isCorrectAnswer } from "../utils/stringUtils.js";
import { playSound } from "../utils/soundManager.js";

const QuestionPopup = ({ place, onQuestionDone }) => {
  const { score, setScore, answeredQuestions, addAnsweredQuestion } =
    useContext(GameContext);

  const [userAnswer, setUserAnswer] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [questionDone, setQuestionDone] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [validatedAnswer, setValidatedAnswer] = useState("");

  // reset on place change
  useEffect(() => {
    setUserAnswer("");
    setErrorCount(0);
    setQuestionDone(false);
    setFeedbackMessage("");
    setValidatedAnswer("");
  }, [place]);

  const question = place.questions?.[0];
  if (!question) return <p>No question for this location.</p>;

  const uid = `${place.id}-${question.id}`;
  const isAnswered = answeredQuestions.includes(uid);

  const handleValidate = (provided) => {
    playSound("buttonClick");
    const answerToCheck = provided ?? userAnswer;
    const correct = isCorrectAnswer(
      answerToCheck,
      question.reponses_acceptables
    );

    if (correct) {
      const pts = errorCount === 0 ? 1 : 0.5;
      setScore(score + pts);
      addAnsweredQuestion(uid);
      setFeedbackMessage("✅ Correct answer!");
      setQuestionDone(true);
      setValidatedAnswer(answerToCheck);
      playSound("goodAnswer");
      onQuestionDone?.();
    } else {
      playSound("wrongAnswer");
      setErrorCount((c) => c + 1);

      if (errorCount === 0) {
        setFeedbackMessage(
          "😅 First mistake – a hint will now be shown."
        );
      } else if (errorCount === 1) {
        setFeedbackMessage(
          "⚠️ Second mistake – switching to multiple choice."
        );
      } else {
        setFeedbackMessage(
          `❌ Wrong. The right answer was: ${question.bonne_reponse}`
        );
        addAnsweredQuestion(uid);
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
          <p className="feedback-message" style={{ color: "green" }}>
            Question already answered.
          </p>
          {validatedAnswer && (
            <p className="bold-answer">Your answer: {validatedAnswer}</p>
          )}
        </>
      ) : (
        <>
          {/* free input until 2nd error */}
          {errorCount < 2 && (
            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer"
                className="bold-input"
                style={{ flex: 1 }}
              />
              <button
                className="btn btn-blue"
                onClick={() => handleValidate()}
              >
                ✅ Submit
              </button>
            </div>
          )}

          {/* show hint after first error */}
          {errorCount >= 1 && (
            <p className="hint">💡 {question.indice}</p>
          )}

          {/* MCQ on 3rd attempt */}
          {errorCount === 2 && (
            <>
              <p>
                <strong>🎓 Last chance (MCQ):</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                {question.qcm.map((opt, i) => (
                  <button
                    key={i}
                    className="btn btn-purple button-qcm"
                    onClick={() => handleValidate(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}

      {/* feedback message */}
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