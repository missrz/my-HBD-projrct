import React from "react";
import { useNavigate } from "react-router-dom";
import "./CakePage.css";

export default function CakePage() {
  const navigate = useNavigate();

  return (
    <div className="cake-page">
      <h1 className="cake-title">🎂 Here’s Your Birthday Cake! 🎉</h1>

      <div className="cake-container">
        <img src="/cake.jpg" alt="Cake" className="cake-image" />
      </div>

      <button className="cake-btn" onClick={() => navigate("/decorate")}>
        Lets decorate cake
      </button>
    </div>
  );
}
