import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import VideoPage from "./pages/VideoPage";
import CakePage from "./pages/CakePage";
import DecoratePage from "./pages/DecoratePage";
import MessagePage from "./pages/MessagePage";
import CardPage from "./pages/CardPage";
import GiftPage from "./pages/GiftPage";
import SurprisePage from "./pages/SurprisePage";
import HomePage from "./pages/HomePage"; // ✅ separated HomePage

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Home Page - Protected */}
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />}
        />

        {/* Other pages */}
        <Route path="/video" element={isLoggedIn ? <VideoPage /> : <Navigate to="/login" replace />} />
        <Route path="/decorate" element={isLoggedIn ? <DecoratePage /> : <Navigate to="/login" replace />} />
        <Route path="/cake" element={isLoggedIn ? <CakePage /> : <Navigate to="/login" replace />} />
        <Route path="/message" element={isLoggedIn ? <MessagePage /> : <Navigate to="/login" replace />} />
        <Route path="/card" element={isLoggedIn ? <CardPage /> : <Navigate to="/login" replace />} />
        <Route path="/gift" element={isLoggedIn ? <GiftPage /> : <Navigate to="/login" replace />} />
        <Route path="/surprise" element={isLoggedIn ? <SurprisePage /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
