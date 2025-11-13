import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import "./DecoratePage.css";

export default function DecoratePage() {
  const [decorated, setDecorated] = useState(false);
  const [candlesPlaced, setCandlesPlaced] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [cardOpened, setCardOpened] = useState(false);

  const navigate = useNavigate(); // ✅ Added navigation hook

  const handlePlaceCandles = () => setCandlesPlaced(true);
  const handleLightCandles = () => setDecorated(true);
  const handleShowCard = () => setShowCard(true);

  useEffect(() => {
    if (decorated) {
      const flames = document.querySelectorAll(".flame");
      flames.forEach((f, i) => {
        setTimeout(() => f.classList.add("lit"), i * 200);
      });
    }
  }, [decorated]);

  useEffect(() => {
    if (showCard) {
      const timer = setTimeout(() => setCardOpened(true), 700);
      return () => clearTimeout(timer);
    }
  }, [showCard]);

  return (
    <div
      className={`decorate-page ${decorated ? "decorated" : ""}`}
      style={
        decorated
          ? {
              backgroundImage: "url('/frill.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background 1s ease-in-out",
            }
          : {}
      }
    >
      <h1 className="decorate-title">🎂 Let’s Decorate the Cake 🎉</h1>

      <div className="cake-container">
        <img src="/cake.jpg" alt="cake" className="cake-image" />

        {candlesPlaced && (
          <div className="candles">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="candle">
                <div className="wick"></div>
                <div className="flame"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button Sequence */}
      {!candlesPlaced ? (
        <button className="decorate-button" onClick={handlePlaceCandles}>
          🕯️ Put the Candles 🕯️
        </button>
      ) : !decorated ? (
        <button className="decorate-button" onClick={handleLightCandles}>
          🔥 Light Up the Candles 🔥
        </button>
      ) : !showCard ? (
        <button className="decorate-button" onClick={() => navigate("/message")}>
          💌 Message 4U 💌
        </button>
      ) : (
        <div className="card-container">
          <div className={`card ${cardOpened ? "open" : ""}`}>
            <div className="card-left">
              <h3>💝 With Love 💝</h3>
            </div>
            <div className="card-right">
              <h2>🎉 Happy Birthday! 🎂</h2>
              <p>
                You fill the world with smiles and light 🌸  
                Wishing you all the love, laughter, and magic your heart can hold 💖
              </p>
              <textarea
                className="editable-message"
                placeholder="💌 Write your own special message here..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
