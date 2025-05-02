// src/components/DetailModal.jsx
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
// on garde seulement le CSS commun
import "../styles/responsive.css";

const DetailModal = ({ place, onClose, show }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="modal"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
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
          padding: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "600px",
            width: "90%",
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
                display: "block",
                margin: "0 auto 20px auto",
                borderRadius: "4px",
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

          {/* ici on applique ta classe de fermeture rouge */}
          <button
            onClick={onClose}
            className="button-close-modal"
          >
            Fermer
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DetailModal;