// src/components/PopupContent.jsx
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import QuestionPopup from "./QuestionPopup";
import DefiPopup from "./DefiPopup";
import DetailModal from "./DetailModal.jsx";
import { playSound } from "../utils/soundManager";
import "./DetailModal.css";
import GeoValidation from "./GeoValidation";  // Composant de géolocalisation

const PopupContent = React.memo(({ place, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [questionDone, setQuestionDone] = useState(false);

  const handleOpenModal = () => {
    playSound("buttonClick");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    playSound("buttonClick");
    setShowModal(false);
  };

  const handleQuestionDone = () => {
    setQuestionDone(true);
  };

  return (
    <div
      className="popup-content"
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "12px",
        pointerEvents: "auto" // Assure que les clics sont bien transmis
      }}
    >
      <h4 style={{ display: "flex", alignItems: "center", marginTop: 0 }}>
        <FaMapMarkerAlt style={{ color: "#e74c3c", marginRight: "8px" }} />
        {place.lieu}
      </h4>

      {place.infoShort && (
        <p style={{ fontStyle: "italic", color: "#555", marginBottom: "8px" }}>
          {place.infoShort}
        </p>
      )}

      {/* Questions (avec indice/QCM) */}
      <QuestionPopup place={place} onQuestionDone={handleQuestionDone} />

      {/* Défis éventuels */}
      {place.defi && <DefiPopup place={place} />}

      {/* Bouton de validation de la géolocalisation */}
      <GeoValidation
        targetLatitude={place.latitude}
        targetLongitude={place.longitude}
        pointReward={1}
      />

      {/* Bouton “En savoir plus” (si question terminée + infoLong/photo) */}
      {(place.infoLong || place.photo) && questionDone && (
        <button
          onClick={handleOpenModal}
          style={{
            padding: "8px 12px",
            backgroundColor: "#f1c40f",
            color: "#333",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.9rem",
            marginBottom: "8px",
          }}
        >
          En savoir plus
        </button>
      )}
      <DetailModal place={place} onClose={handleCloseModal} show={showModal} />

      {/* Bouton “Fermer” pour replier la popup */}
      <button
        onClick={onClose}
        style={{
          display: "inline-block",
          marginTop: "12px",
          background: "transparent",
          border: "none",
          fontSize: "0.9rem",
          cursor: "pointer",
          color: "#333",
        }}
      >
        Fermer
      </button>
    </div>
  );
}, (prevProps, nextProps) => prevProps.place === nextProps.place);

export default PopupContent;
