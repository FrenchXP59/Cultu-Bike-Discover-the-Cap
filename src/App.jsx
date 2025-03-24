// src/App.jsx
import React, { useState, useContext } from "react";
import { TimeProvider, TimeContext } from "./TimeContext.jsx";
import { GameProvider, GameContext } from "./GameContext.jsx";
import MapComponent from "./components/MapComponent";
import ScoreBoard from "./components/ScoreBoard";
import ScoreRanking from "./components/ScoreRanking";
import IntroVideo from "./components/IntroVideo";
import { saveScore } from "./utils/scoreUtils";
import "./styles/responsive.css";

function MainApp() {
  const { score } = useContext(GameContext);
  const { time } = useContext(TimeContext);

  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);    // true => vidéo en sourdine par défaut
  const [introKey, setIntroKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Quitte l'intro et lance le jeu
  const handleEnterGame = () => {
    // Incrémente la clé pour recharger potentiellement la vidéo si besoin
    setIntroKey((prev) => prev + 1);
    setShowIntro(false);
  };

  // Termine la partie, enregistre le score, puis affiche le classement
  const handleEndGame = () => {
    saveScore(score, time);
    setGameOver(true);
  };

  // Fusionne l'activation du son et la géolocalisation
  const handleEnableSoundAndGeo = () => {
    // 1) Retirer le mute pour la vidéo
    setIsMuted(false);

    // 2) Demander l’autorisation de géolocalisation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Géolocalisation autorisée :", position.coords);
          // Stocker éventuellement la position en context si besoin
        },
        (error) => {
          console.log("Géolocalisation refusée ou indisponible :", error);
        }
      );
    } else {
      console.log("La géolocalisation n’est pas supportée sur ce navigateur.");
    }
  };

  // Écran d’intro (vidéo + boutons)
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
        {/* La vidéo, sourdine si isMuted = true */}
        <IntroVideo key={introKey} isMuted={isMuted} />

        {/* Bouton "Activer le son + Géo" */}
        <button
          onClick={handleEnableSoundAndGeo}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "10px 20px",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            zIndex: 1001,
          }}
        >
          Activer le son + Géolocalisation
        </button>

        {/* Bouton "Accéder au jeu" */}
        <button
          onClick={handleEnterGame}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            zIndex: 1001,
          }}
        >
          Accéder au jeu
        </button>
      </div>
    );
  }

  // Écran de classement (après gameOver)
  if (gameOver) {
    return <ScoreRanking />;
  }

  // Écran principal du jeu
  return (
    <>
      <ScoreBoard />
      <button onClick={handleEndGame} className="endgame-button">
        Terminer la partie
      </button>
      <MapComponent />
    </>
  );
}

function App() {
  return (
    <TimeProvider>
      <GameProvider>
        <MainApp />
      </GameProvider>
    </TimeProvider>
  );
}

export default App;
