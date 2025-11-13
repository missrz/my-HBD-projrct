import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Birthday.css";

export default function BirthdayPage() {
  const navigate = useNavigate();

  // existing button logic
  const [buttonText, setButtonText] = useState("Touch Me 💖");
  const messages = ["Touch Me 💖", "Click Me 🎂", "Tap Me 🎉"];
  let index = 0;

  useEffect(() => {
    const change = setInterval(() => {
      index = (index + 1) % messages.length;
      setButtonText(messages[index]);
    }, 1500);
    return () => clearInterval(change);
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  // 🎈 added balloon logic
  const [popped, setPopped] = useState(0);

  const popBalloon = () => {
    if (popped < 3) setPopped(popped + 1);
    else navigate("/cake"); // go to next page
  };

  return (
    <div className="birthday-page white-bg">
      {/* bunny and message */}
      <img src="/bunny.gif" alt="bunny" className="bunny-static" />
      <h1 className="birthday-message gradient-text">
        🎉 Happy Birthday, Cutie! 🎂
      </h1>

      {/* 🎈 balloons section */}
      <div className="balloon-section">
        <h2>🎈 Pop all 4 balloons 🎈</h2>
        <div className="balloons">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`balloon ${i < popped ? "popped" : ""}`}
              onClick={popBalloon}
            ></div>
          ))}
        </div>
      </div>

      {/* confetti button */}
      <button className="cute-button" onClick={handleConfetti}>
        {buttonText}
      </button>
    </div>
  );
}
