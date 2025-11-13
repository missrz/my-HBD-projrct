import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handLRef = useRef(null);
  const handRRef = useRef(null);

  const USERNAME = "4uchuzzii"; // permanent username
  const PASSWORD = "143motuu"; // permanent password

  // ✅ Only hand animation (eyes won’t move)
  const handlePasswordFocus = () => {
    if (handLRef.current && handRRef.current) {
      handLRef.current.style.height = "6.56em";
      handLRef.current.style.top = "3.87em";
      handLRef.current.style.left = "11.75em";
      handLRef.current.style.transform = "rotate(-155deg)";

      handRRef.current.style.height = "6.56em";
      handRRef.current.style.top = "3.87em";
      handRRef.current.style.right = "11.75em";
      handRRef.current.style.transform = "rotate(155deg)";
    }
  };

  const normalHandStyle = () => {
    if (handLRef.current && handRRef.current) {
      handLRef.current.style.height = "2.81em";
      handLRef.current.style.top = "8.4em";
      handLRef.current.style.left = "7.5em";
      handLRef.current.style.transform = "rotate(0deg)";

      handRRef.current.style.height = "2.81em";
      handRRef.current.style.top = "8.4em";
      handRRef.current.style.right = "7.5em";
      handRRef.current.style.transform = "rotate(0deg)";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username === USERNAME && password === PASSWORD) {
      setIsLoggedIn(true);
      navigate("/"); // redirect to home/countdown page
    } else {
      alert("Incorrect username or password!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username here..."
          ref={usernameRef}
          onBlur={normalHandStyle}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password here..."
          ref={passwordRef}
          onFocus={handlePasswordFocus}
          onBlur={normalHandStyle}
        />

        <button type="submit">Login</button>
      </form>

      <div className="ear-l"></div>
      <div className="ear-r"></div>

      <div className="panda-face">
        <div className="blush-l"></div>
        <div className="blush-r"></div>

        {/* ✅ Eyes now stay fixed */}
        <div className="eye-l">
          <div className="eyeball-l"></div>
        </div>
        <div className="eye-r">
          <div className="eyeball-r"></div>
        </div>

        <div className="nose"></div>
        <div className="mouth"></div>
      </div>

      <div className="hand-l" ref={handLRef}></div>
      <div className="hand-r" ref={handRRef}></div>
      <div className="paw-l"></div>
      <div className="paw-r"></div>
    </div>
  );
}
