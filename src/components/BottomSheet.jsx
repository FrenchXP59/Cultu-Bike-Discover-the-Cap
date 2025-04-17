import React from "react";
import PopupContent from "./PopupContent";

function BottomSheet({ place, onClose, userLocation }) {
  if (!place) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        maxHeight: "80vh",
        overflowY: "auto",
        background: "#FDF3E7",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.2)",
        borderTopLeftRadius: "14px",
        borderTopRightRadius: "14px",
        padding: "20px",
        zIndex: 10000,
      }}
    >
      <PopupContent
        place={place}
        onClose={onClose}
        
        userLocation={userLocation} // 🆕 Ajout de la prop
      />
    </div>
  );
}

export default BottomSheet;

