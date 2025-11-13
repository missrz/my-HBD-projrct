import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "./HomePage.css";

export default function HomePage() {
  const [count, setCount] = useState(5);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showCard, setShowCard] = useState(false); // New state for card
  const [buttonText, setButtonText] = useState("Touch Me 💖");
  const navigate = useNavigate();
  const messages = ["Touch Me 💖", "Click Me 🎂", "Tap Me 🎉"];
  let index = 0;

  // Countdown
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowBirthday(true), 500);
    }
  }, [count]);

  // Button text animation
  useEffect(() => {
    const change = setInterval(() => {
      index = (index + 1) % messages.length;
      setButtonText(messages[index]);
    }, 1500);
    return () => clearInterval(change);
  }, []);

  // Show confetti & reveal card
  const handleButtonClick = () => {
    // Small confetti burst
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70 + i * 10,
          origin: { y: 0.6 },
        });
      }, i * 300);
    }

    // Show the card after short delay
    setTimeout(() => setShowCard(true), 600);
  };

  // Navigate from card button
  const handleCardButton = () => {
    navigate("/video");  // Change this to desired route
  };

  // Render countdown
  if (!showBirthday) {
    return (
      <div className="countdown-page">
        <h1 className="count-text">{count}</h1>
      </div>
    );
  }

  return (
    <div className="birthday-page white-bg fade-in">
      {!showCard ? (
        <>
          <img src="/bunny.gif" alt="bunny" className="bunny-static" />
          <h1 className="birthday-message gradient-text">
            🎉 Happy Birthday, Handsome! 🎂
          </h1>
          <button className="cute-button" onClick={handleButtonClick}>
            {buttonText}
          </button>
        </>
      ) : (
        <div className="birthday-card">
          <h2>💌 A Special Message for You 💌</h2>
          <h2>--------------------------------------</h2>
          <p>Happy Birthday, My Love, Ayyu 💞
Today’s your special day, but honestly, every day feels special because of you. You’ve filled my world with laughter, love, and way too many butterflies (seriously, it’s getting hard to concentrate 😜). You deserve all the happiness in the universe — and I’ll spend forever trying to give it to you. Thank you for being my calm, my chaos, and my favorite person all at once. I hope your day is as amazing, funny, and beautiful as your heart. Here’s to more laughs, more memories, and more “us” — because loving you is the best thing I’ve ever done. 💋</p>
          <button className="cute-button2" onClick={handleCardButton}>
            Next Surprise 🎁
          </button>
        </div>
      )}
    </div>
  );
}
