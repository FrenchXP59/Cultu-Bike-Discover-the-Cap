// src/components/IntroVideo.jsx
import React from "react";

const IntroVideo = ({ isMuted }) => {
  // Construire l'URL selon isMuted
  const baseUrl = "https://www.youtube.com/embed/tzLJgC_D1Po";

  // Paramètres communs : controls=1, playsinline=1
  // Si isMuted => on ajoute autoplay=1 &mute=1 (et éventuellement &modestbranding=1)
  const url = isMuted
    ? `${baseUrl}?autoplay=1&controls=1&playsinline=1&mute=1&modestbranding=1`
    : `${baseUrl}?autoplay=1&controls=1&playsinline=1&modestbranding=1`;

  return (
    <iframe
      src={url}
      title="Vidéo d'introduction"
      frameBorder="0"
      allowFullScreen
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
        backgroundColor: "black"
      }}
    />
  );
};

export default IntroVideo;
