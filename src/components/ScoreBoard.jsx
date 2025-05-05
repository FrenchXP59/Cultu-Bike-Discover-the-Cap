// src/components/ScoreBoard.jsx
import React, { useContext } from "react";
import { GameContext } from "../GameContext.jsx";
import { TimeContext } from "../TimeContext.jsx";
import { FaBicycle } from "react-icons/fa";

const ScoreBoard = () => {
  const { score, answeredQuestions } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="scoreboard-container">
      <h3>
        <FaBicycle style={{ marginRight: "8px", color: "#e67e22" }} />
        Score: {score} point{score !== 1 ? "s" : ""}
      </h3>
      <p>
        Time: {minutes}m {seconds}s
      </p>
      <p>
        Questions answered: {answeredQuestions.length}
      </p>
    </div>
  );
};

export default ScoreBoard;