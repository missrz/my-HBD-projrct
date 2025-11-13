import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import "./SurprisePage.css";

export default function SurprisePage() {
  const images = [
    "/mem6.jpg",
    "/mem1.jpg",
    "/mem2.jpg",
    "/mem3.jpg",
    "/mem4.jpg",
    "/mem5.jpg",
    "/mem7.jpg",
    "/mem8.jpg",
    "/mem9.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimate(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setAnimate(false);
    }, 700); // float-away duration
  };

  const goHome = () => {
    navigate("/"); // 👈 your countdown or main page route
  };

  return (
    <div className="surprise-page">
      <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />

      <h1 className="surprise-title">💌 Memories 💖</h1>

      <div className="card-grid">
        <div
          className={`card ${animate ? "float-away" : "visible"}`}
          onClick={handleClick}
        >
          <img src={images[index]} alt="memory" />
        </div>
      </div>

      {/* 👇 Back button added */}
      <button className="home-btn" onClick={goHome}>
        ⬅ Back to Home
      </button>
    </div>
  );
}
