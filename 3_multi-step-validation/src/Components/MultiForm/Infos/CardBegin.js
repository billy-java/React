import React from "react";
import "./Card.css";

export default function CardBegin(props) {
  return (
    <div>
      <div className="card">
        <h1>🍣 Hilf uns, deinen Gaumen zu verwöhnen 🌶️</h1>
        <button onClick={() => props.modifyIndex(2)}>STARTEN</button>
      </div>
    </div>
  );
}
