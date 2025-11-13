import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ only added this line
import "./CardPage.css";

export default function Envelope() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // ✅ and this line

  return (
    <div className="envelope-scene">
      <div
        className={`envelope ${open ? "open" : ""}`}
        onClick={() => setOpen(true)}
      >
        {/* Envelope label/text */}
<div className="envelope-text">
  To My Love, Ayyu 💞
</div>

        {/* Flap */}
        <div className="envelope-flap"></div>

        {/* Envelope main body */}
        <div className="envelope-body"></div>

        {/* Card inside */}
        <div className="card">
          <h2>🎉 Happy Birthday DUDU🎉</h2>
          <p>

<h4>Hey my love, it’s me — your forever troublemaker, Azzu 😘</h4>

This isn’t just a letter; it’s a tiny piece of my heart wrapped in words. I wanted to tell you (again, because I really, really can’t shut up about it) how insanely lucky I am to have you in my life. You make my world softer, my days brighter, and my life a whole lot funnier — mostly because of how adorably weird and perfectly imperfect we are together 😂💞

I love how you make me laugh when I least expect it, hold me when I need it most, and somehow always know how to make me feel special — even on my most dramatic days (you know, the really dramatic ones 😅). You’ve become my peace, my favorite distraction, and the reason my heart does that silly little dance every single day.

So here’s my little love note, sealed with all my feelings, a sprinkle of my drama, endless giggles, and a whole lot of love just for you, Ayyu. 💋 I hope that when you read this, you feel even a fraction of how deeply and completely I adore you.

Forever yours, in laughter, love, and a lifetime of silly moments,
Azzu 💫</p>
        </div>
      </div>

      {open && (
        <button className="surprise-btn" onClick={() => navigate("/gift")}style={{backgroundColor: 'black'}}>
          🎁 Gift 4U
        </button>
      )}
    </div>
  );
}
