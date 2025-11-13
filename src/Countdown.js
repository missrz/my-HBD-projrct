// src/Countdown.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Countdown() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      const timer = setTimeout(() => navigate("/birthday"), 1000);
      return () => clearTimeout(timer);
    }
    const interval = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(interval);
  }, [count, navigate]);

  return (
    <div className="countdown-page">
      <h1 className="count-text">{count}</h1>
    </div>
  );
}
