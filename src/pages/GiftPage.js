import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ add this
import "./GiftPage.css";

export default function GiftPage() {
  const words = ["I", "Love", "You", "Khaduss"];
const colors = ["#ff66b2", "#00f5d4", "#9d4edd", "#ffd166"];  const [popped, setPopped] = useState([false, false, false, false]);
  const [showSurprise, setShowSurprise] = useState(false); // ✅ new state
  const navigate = useNavigate(); // ✅ to navigate to Surprise page

  const handlePop = (index) => {
    setPopped((prev) => {
      const newPopped = [...prev];
      newPopped[index] = true;
      return newPopped;
    });
  };

  // ✅ Check when all balloons are popped
  useEffect(() => {
    if (popped.every(Boolean)) {
      setTimeout(() => setShowSurprise(true), 1000); // wait 1s before showing button
    }
  }, [popped]);

  // ✅ Navigate when surprise is clicked
  const handleSurpriseClick = () => {
    navigate("/Surprise");
  };

  return (
    <div className="gift-page">
      <h1 className="gift-title">🎁 Pop the Balloons 🎈</h1>

      <div className="balloon-group">
        {words.map((word, i) => (
          <div
            key={i}
            className={`balloon-wrapper ${popped[i] ? "popped" : ""}`}
            onClick={() => handlePop(i)}
            style={{ "--balloon-color": colors[i] }}
          >
            {!popped[i] ? (
              <div className="balloon">
                <div className="shine"></div>
              </div>
            ) : (
              <div className="message-text">{word}</div>
            )}
          </div>
        ))}

        {/* SVG Strings and Bow */}
        <svg className="strings" width="400" height="240" viewBox="0 0 300 200">
          <path
            d="M-10 50 C20 100, 120 110, 150 200"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M110 -0 C100 170, 140 130, 150 200"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M210 0 C190 190, 160 130, 150 200"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M320 0 C200 190, 160 130, 150 200"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="150" cy="200" r="4" fill="#ff4d6d" />
        </svg>
        <div className="bow"></div>
      </div>

      {/* ✅ Surprise Button (appears after all popped) */}
      {showSurprise && (
        <button className="surprise-btn" onClick={handleSurpriseClick}>
          🎉 Open Your Surprise 🎉
        </button>
      )}
    </div>
  );
}
