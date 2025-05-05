// src/components/PopupContent.jsx
import React, { useState } from "react";
import { FaMapMarkerAlt, FaGift } from "react-icons/fa";
import QuestionPopup from "./QuestionPopup";
import DefiPopup from "./DefiPopup";
import DetailModal from "./DetailModal.jsx";
import GeoValidation from "./GeoValidation";
import { playSound } from "../utils/soundManager";
import "../styles/responsive.css";
import "./DetailModal.css";

const PopupContent = React.memo(
  ({ place, onClose, userLocation }) => {
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
      <div className="popup-content">
        <h4 className="popup-title">
          <FaMapMarkerAlt style={{ color: "#e74c3c", marginRight: 8 }} />
          {place.lieu}
        </h4>

        {place.infoShort && (
          <p className="geo-message">{place.infoShort}</p>
        )}

        <QuestionPopup
          place={place}
          onQuestionDone={() => setQuestionDone(true)}
        />

        <div className="challenge-buttons">
          {place.defi && <DefiPopup place={place} />}
          <GeoValidation
            targetLatitude={place.latitude}
            targetLongitude={place.longitude}
            userLocation={userLocation}
            pointReward={1}
          />
        </div>

        {questionDone && (place.infoLong || place.photo) && (
          <button
            onClick={handleOpenModal}
            className="btn btn-turquoise"
            style={{ marginBottom: "8px" }}
          >
            <FaGift style={{ marginRight: 6 }} />
            Learn more
          </button>
        )}

        <DetailModal
          place={place}
          onClose={handleCloseModal}
          show={showModal}
        />

        <button
          onClick={() => {
            playSound("buttonClick");
            onClose && onClose();
          }}
          className="btn btn-orange"
          style={{ display: "block", margin: "24px auto 0", width: "auto" }}
        >
          🔙 Back to the map
        </button>
      </div>
    );
  },
  (prev, next) => prev.place === next.place
);

export default PopupContent;