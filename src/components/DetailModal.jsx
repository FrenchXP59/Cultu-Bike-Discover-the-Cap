// Exemple dans DetailModal.jsx
import React from "react";
import { CSSTransition } from "react-transition-group";
import "./DetailModal.css";

const DetailModal = ({ place, onClose, show }) => {
  return (
    <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "90%",
            maxHeight: "90%",
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginTop: 0 }}>{place.lieu}</h2>

          {place.photo && (
            <img
              src={place.photo}
              alt={`Photo de ${place.lieu}`}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            />
          )}

          {place.infoLong && (
            <div>
              <h3 style={{ marginBottom: "4px", color: "#333" }}>À propos</h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                {place.infoLong}
              </p>
            </div>
          )}

          {place.infoPlus && (
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ marginBottom: "4px", color: "#333" }}>Plus d'infos</h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                {place.infoPlus}
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DetailModal;
