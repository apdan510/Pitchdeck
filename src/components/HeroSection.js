import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>FIL Grant Pitchdeck</h1>
      <p></p>
    </div>
  );
}

export default HeroSection;
