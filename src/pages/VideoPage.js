import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [showNextButton, setShowNextButton] = useState(false);

  const handleVideoEnd = () => setShowNextButton(true);
  const handleNextClick = () => navigate("/cake");

  // Create random floating hearts
  const hearts = Array.from({ length: 40 }, (_, i) => ({
    key: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${8 + Math.random() * 8}s`,
    scale: `${0.3 + Math.random() * 0.8}`,
    direction: Math.random() > 0.5 ? "up" : "down",
  }));

  return (
    <div className="video-page">
      {/* ❤️ Floating Hearts Background */}
      <div className="hearts-background">
        {hearts.map((heart) => (
          <div
            key={heart.key}
            className={`floating-heart ${heart.direction}`}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              transform: `scale(${heart.scale})`,
            }}
          ></div>
        ))}
      </div>

      {/* 🎬 Video Container */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="birthday-video"
          src="/4u.mp4"
          autoPlay
          muted={false}
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>

      {/* 💖 Next Button */}
      {showNextButton && (
        <button className="next-button" onClick={handleNextClick}>
          Next 🎂
        </button>
      )}
    </div>
  );
}
