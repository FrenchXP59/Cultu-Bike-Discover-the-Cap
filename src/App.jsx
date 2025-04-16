import React, { useState, useContext } from "react";
import { TimeProvider, TimeContext } from "./TimeContext.jsx";
import { GameProvider, GameContext } from "./GameContext.jsx";
import MapComponent from "./components/MapComponent";
import ScoreBoard from "./components/ScoreBoard";
import ScoreRanking from "./components/ScoreRanking";
import IntroVideo from "./components/IntroVideo";
import { saveScore } from "./utils/scoreUtils";
import "./styles/responsive.css";
import TestMarkerIcon from "./components/TestMarkerIcon";

function MainApp() {
  const { score, resetGame } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Lance le jeu après l'intro
  const handleEnterGame = () => {
    setIntroKey(prev => prev + 1);
    setShowIntro(false);
  };

  // Enregistre le score et bascule vers le classement
  const handleEndGame = () => {
    saveScore(score, time);
    setGameOver(true);
  };

  // Active son + géoloc
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

  // Écran d’intro
  if (showIntro) {
    return (
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "black", zIndex: 1000, overflow: "hidden"
        }}
      >
        <IntroVideo key={introKey} isMuted={isMuted} />
        <button
          onClick={handleEnableSoundAndGeo}
          style={{
            position: "fixed", bottom: "20px", left: "20px",
            padding: "10px 20px", backgroundColor: "rgba(255,255,255,0.8)",
            border: "none", cursor: "pointer", fontSize: "16px", zIndex: 1001
          }}
        >
          Activer le son + Géolocalisation
        </button>
        <button
          onClick={handleEnterGame}
          style={{
            position: "fixed", bottom: "20px", right: "20px",
            padding: "10px 20px", backgroundColor: "rgba(255,255,255,0.8)",
            border: "none", cursor: "pointer", fontSize: "16px", zIndex: 1001
          }}
        >
          Accéder au jeu
        </button>
      </div>
    );
  }

  // Écran de classement avec options
  if (gameOver) {
    return (
      <ScoreRanking
        onRestart={() => {
          resetGame();          // Réinitialise score + questions
          setShowIntro(true);   // Retour à l’intro
          setGameOver(false);
        }}
        onReturnToGame={() => {
          setGameOver(false);   // Reprend là où on s’est arrêté
        }}
      />
    );
  }

  // Écran principal
  return (
    <>
      <ScoreBoard />
      {!selectedPlace && (
        <button onClick={handleEndGame} className="endgame-button">
          Terminer la partie
        </button>
      )}
      <MapComponent
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
    </>
  );
}

function App() {
  const [testMode] = useState(false);
  if (testMode) {
    return <TestMarkerIcon />;
  }
  return (
    <TimeProvider>
      <GameProvider>
        <MainApp />
      </GameProvider>
    </TimeProvider>
  );
}

export default App;