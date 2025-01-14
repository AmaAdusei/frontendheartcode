import React from "react";
import heartIcon from "./heart-icon.png"; // Replace with the correct path to the asset
import "gamecprpage/style.css"; // Import the corresponding styles

// Component definition
const GameCPR = () => {
  return (
    <div className="game-cpr-page">
      <header className="game-cpr-header">
        <h1>MEDTech Future</h1>
        <h2>Practice your CPR</h2>
      </header>
      <div className="game-cpr-feedback">
        <p className="feedback-text too-fast">Too Fast!</p>
        <img src={heartIcon} alt="Heart" className="heart-icon" />
      </div>
    </div>
  );
};

// Export the component
export default GameCPR;
