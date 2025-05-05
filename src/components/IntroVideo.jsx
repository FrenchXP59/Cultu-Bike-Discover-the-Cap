import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./IntroVideo.css";

const IntroVideo = ({ isMuted, onEnableSoundAndGeo, onEnterGame }) => {
  // Si offline, on saute l’intro
  useEffect(() => {
    if (!navigator.onLine) {
      onEnableSoundAndGeo();
      onEnterGame();
    }
  }, [onEnableSoundAndGeo, onEnterGame]);

  const baseUrl = "https://www.youtube.com/embed/tzLJgC_D1Po";
  const params = [
    "autoplay=1",
    "controls=1",
    "playsinline=1",
    "modestbranding=1",
    "rel=0",
    isMuted ? "mute=1" : ""
  ].filter(Boolean).join("&");

  return (
    <div className="intro-video-wrapper">
      <iframe
        src={`${baseUrl}?${params}`}
        title="Vidéo d'intro"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="intro-video-iframe"
      />
      <div className="intro-buttons-container">
        <button
          onClick={onEnableSoundAndGeo}
          className="btn btn-turquoise button-intro button-intro-sound"
        >
          🎧 Enable sound + geolocation
        </button>
        <button
          onClick={onEnterGame}
          className="btn btn-orange button-intro button-intro-play"
        >
          🎁 Start the game
        </button>
      </div>
    </div>
  );
};

IntroVideo.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  onEnableSoundAndGeo: PropTypes.func.isRequired,
  onEnterGame: PropTypes.func.isRequired,
};

export default IntroVideo;