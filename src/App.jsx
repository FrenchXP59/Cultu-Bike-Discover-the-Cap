// src/App.jsx
import React, { useState, useContext } from "react";
import { TimeProvider, TimeContext } from "./TimeContext.jsx";
import { GameProvider, GameContext } from "./GameContext.jsx";
import { LocationProvider } from "./LocationContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import MapComponent from "./components/MapComponent.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import ScoreRanking from "./components/ScoreRanking.jsx";
import IntroVideo from "./components/IntroVideo.jsx";
import { saveScore } from "./utils/scoreUtils.js";
import "./styles/responsive.css";

function MainApp() {
  const { score, resetGame } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleEnableSoundAndGeo = () => {
    setIsMuted(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => console.log("Géo autorisée"),
        () => console.warn("Géo refusée")
      );
    }
  };

  const handleEnterGame = () => {
    setIntroKey((k) => k + 1);
    setShowIntro(false);
  };

  const handleEndGame = () => {
    saveScore(score, time);
    setGameOver(true);
  };

  if (showIntro) {
    return (
      <IntroVideo
        key={introKey}
        isMuted={isMuted}
        onEnableSoundAndGeo={handleEnableSoundAndGeo}
        onEnterGame={handleEnterGame}
      />
    );
  }

  if (gameOver) {
    return (
      <ScoreRanking
        onRestart={() => {
          resetGame();
          setShowIntro(true);
          setGameOver(false);
        }}
        onReturnToGame={() => setGameOver(false)}
      />
    );
  }

  return (
    <>
      {/* On masque ScoreBoard et bouton “Terminer” si popupOpen=true */}
      {!popupOpen && <ScoreBoard />}
      {!popupOpen && (
        <button onClick={handleEndGame} className="endgame-button">
          End tour
        </button>
      )}

      {/* onPopupToggle passe la valeur popupOpen à MainApp */}
      <MapComponent onPopupToggle={setPopupOpen} />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <TimeProvider>
        <GameProvider>
          <LocationProvider>
            <MainApp />
          </LocationProvider>
        </GameProvider>
      </TimeProvider>
    </ErrorBoundary>
  );
}
