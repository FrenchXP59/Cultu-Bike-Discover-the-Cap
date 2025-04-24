import React, { useState } from "react";
import { FaMapMarkerAlt, FaGift } from "react-icons/fa";
import QuestionPopup from "./QuestionPopup";
import DefiPopup from "./DefiPopup";
import DetailModal from "./DetailModal.jsx";
import { playSound } from "../utils/soundManager";
import "./DetailModal.css";
import "../styles/responsive.css";
import GeoValidation from "./GeoValidation";

const PopupContent = React.memo(({ place, onClose, userLocation }) => {
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

  return (
    <div
      className="popup-content"
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "12px",
        pointerEvents: "auto"
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

      <QuestionPopup place={place} onQuestionDone={() => setQuestionDone(true)} />

      <div className="challenge-buttons">
        {place.defi && <DefiPopup place={place} />}
        <GeoValidation
          targetLatitude={place.latitude}
          targetLongitude={place.longitude}
          userLocation={userLocation}
          pointReward={1}
        />
      </div>

      {(place.infoLong || place.photo) && questionDone && (
        <button
          onClick={handleOpenModal}
          className="button-en-savoir-plus"
        >
          <FaGift /> En savoir plus
        </button>
      )}

      <DetailModal place={place} onClose={handleCloseModal} show={showModal} />

      <button onClick={onClose} className="popup-close-button" style={{ display: "block", margin: "24px auto 0 auto" }}>
        🔙 Retour à la carte
      </button>
    </div>
  );
}, (prevProps, nextProps) => prevProps.place === nextProps.place);

export default PopupContent;