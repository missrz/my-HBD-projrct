import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 for navigation
import "./MessagePage.css";

export default function MessagePage() {
  const canvasRef = useRef(null);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 600;

    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Heart formula
    const heartA = (k) => 15 * Math.sin(k) ** 3;
    const heartB = (k) =>
      12 * Math.cos(k) -
      5 * Math.cos(2 * k) -
      2 * Math.cos(3 * k) -
      Math.cos(4 * k);

    let i = 0;
    const total = 1000;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.beginPath();

    function draw() {
      if (i < total) {
        const k = (Math.PI * 2 * i) / total;
        const x = heartA(k) * 20 + canvas.width / 2;
        const y = -heartB(k) * 20 + canvas.height / 2;
        ctx.lineTo(x, y);
        ctx.stroke();
        i++;
        requestAnimationFrame(draw);
      } else {
        // Show text and button after heart completes
        setTimeout(() => {
          setShowText(true);
          setTimeout(() => setShowButton(true), 1500);
        }, 700);
      }
    }

    draw();
  }, []);

  // Navigate to next page
  const goToNextPage = () => {
    navigate("/card"); // 👈 change this path to your actual next page route
  };

  return (
    <div className="message-container">
      <canvas ref={canvasRef} className="heart-canvas" />

      {showText && <div className="heart-text">I ❤️ You</div>}

      {showButton && (
        <button onClick={goToNextPage} className="next-btn inside-heart">
          Next 💌
        </button>
      )}
    </div>
  );
}
