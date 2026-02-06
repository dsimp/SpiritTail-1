import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import soundService from "../../services/SoundService";
import "./SpiritRoulette.css";

const SpiritRoulette = () => {
  const [spinning, setSpinning] = useState(false);
  const history = useHistory();

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    soundService.playHover(); // Initial blip

    // Simulate "Slot Machine" effect visually or just audio + delay
    // Audio: fast blips
    let blips = 0;
    const interval = setInterval(() => {
        soundService.playTone(400 + Math.random() * 200, 'square', 0.05, 0.05);
        blips++;
        if (blips > 10) clearInterval(interval);
    }, 100);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        const id = data.drinks[0].idDrink;
        
        // Delay for dramatic effect
        setTimeout(() => {
          soundService.playSuccess();
          setSpinning(false);
          history.push(`/detail/${id}`);
        }, 1500);
      })
      .catch((err) => {
        console.error("Roulette failed", err);
        setSpinning(false);
      });
  };

  return (
    <button 
      className={`roulette-btn ${spinning ? "spinning" : ""}`} 
      onClick={handleSpin}
      disabled={spinning}
      title="I'm Feeling Lucky"
    >
      <span className="roulette-icon">🎲</span>
      <span className="roulette-text">{spinning ? "SCANNING..." : "ROULETTE"}</span>
    </button>
  );
};

export default SpiritRoulette;
