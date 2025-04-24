import React, { useState, useContext } from "react";
import { TimeProvider, TimeContext } from "./TimeContext.jsx";
import { GameProvider, GameContext } from "./GameContext.jsx";
import { LocationProvider } from "./LocationContext.jsx";
import MapComponent from "./components/MapComponent";
import ScoreBoard from "./components/ScoreBoard";
import ScoreRanking from "./components/ScoreRanking";
import IntroVideo from "./components/IntroVideo";
import { saveScore } from "./utils/scoreUtils";
import "./styles/responsive.css";
import { FaGift } from "react-icons/fa";

function MainApp() {
  const { score, resetGame } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleEnterGame = () => {
    setIntroKey((prev) => prev + 1);
    setShowIntro(false);
  };

  const handleEndGame = () => {
    saveScore(score, time);
    setGameOver(true);
  };

  const handleEnableSoundAndGeo = () => {
    setIsMuted(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => console.log("Géolocalisation autorisée :", position.coords),
        (error) => console.log("Géolocalisation refusée ou indisponible :", error)
      );
    } else {
      console.log("La géolocalisation n’est pas supportée sur ce navigateur.");
    }
  };

  if (showIntro) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        <IntroVideo key={introKey} isMuted={isMuted} />
        <button
          onClick={handleEnableSoundAndGeo}
          className="button-intro button-intro-sound"
          style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 1001 }}
        >
          🎧 Activer le son + Géolocalisation
        </button>
        <button
          onClick={handleEnterGame}
          className="button-intro button-intro-play"
          style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1001 }}
        >
          <FaGift style={{ marginRight: "6px" }} /> Accéder au jeu
        </button>
      </div>
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
        onReturnToGame={() => {
          setGameOver(false);
        }}
      />
    );
  }

  return (
    <>
      <ScoreBoard />
      {!selectedPlace && (
        <button onClick={handleEndGame} className="endgame-button">
          Terminer la partie
        </button>
      )}
      <MapComponent selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
    </>
  );
}

function App() {
  return (
    <TimeProvider>
      <GameProvider>
        <LocationProvider>
          <MainApp />
        </LocationProvider>
      </GameProvider>
    </TimeProvider>
  );
}

export default App;