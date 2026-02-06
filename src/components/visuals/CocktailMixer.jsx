import React, { useEffect, useState } from "react";
import "./CocktailMixer.css";
import { getColorForIngredient } from "../../utils/colorMapper";
import soundService from "../../services/SoundService";

const CocktailMixer = ({ ingredients, instructions }) => {
  const [layers, setLayers] = useState([]);
  const [action, setAction] = useState(""); 
  const [message, setMessage] = useState("Initializing Bartender...");
  const [currentPour, setCurrentPour] = useState(null); // { img, name, color }

  useEffect(() => {
    let timeoutIds = [];
    setLayers([]);
    setAction("");
    setCurrentPour(null);
    setMessage("Analyzing Recipe...");

    let totalDelay = 1000;
    const pourDuration = 2000; // Time to pour one ingredient

    // 1. Pour Sequence
    ingredients.forEach((ing, index) => {
      // Start Pour
      timeoutIds.push(
        setTimeout(() => {
          soundService.playPour();
          const color = getColorForIngredient(ing.name);
          setCurrentPour({ img: ing.img, name: ing.name, color });
          setMessage(`Pouring ${ing.name}...`);
        }, totalDelay)
      );

      // Add Layer 
      timeoutIds.push(
        setTimeout(() => {
          const color = getColorForIngredient(ing.name);
          setLayers((prev) => [...prev, { name: ing.name, color }]);
          setCurrentPour(null);
        }, totalDelay + pourDuration - 200) 
      );

      totalDelay += pourDuration;
    });

    // 2. Mix Action
    timeoutIds.push(
      setTimeout(() => {
        soundService.playShake();
        const instr = instructions.toLowerCase();
        if (instr.includes("shake")) {
          setAction("shaking");
          setMessage("Shaking Mixture...");
        } else if (instr.includes("stir")) {
          setAction("stirring");
          setMessage("Stirring Gently...");
        } else {
          setAction("building");
          setMessage("Finishing Build...");
        }
      }, totalDelay)
    );

    // 3. Serve
    totalDelay += 3000; 
    timeoutIds.push(
      setTimeout(() => {
        soundService.playSuccess();
        setAction("serving");
        setMessage("Cocktail Served.");
      }, totalDelay)
    );

    return () => timeoutIds.forEach(clearTimeout);
  }, [ingredients, instructions]);

  return (
    <div className={`mixer-container ${action}`}>
      <div className="mixer-stage">
        {/* The Pouring Source (Floating Bottle/Ingredient) */}
        {currentPour && (
          <div className="pouring-source-container">
            <img src={currentPour.img} alt={currentPour.name} className="pouring-source-img" />
            <div className="liquid-stream" style={{ backgroundColor: currentPour.color }}></div>
          </div>
        )}

        <div className="glass">
          <div className="glass-reflection"></div>
          <div className="liquid-stack">
            {layers.map((layer, i) => (
              <div
                key={i}
                className="liquid-layer"
                style={{
                  backgroundColor: layer.color,
                  height: `${100 / ingredients.length}%`,
                }}
              >
                <div className="bubbles"></div>
              </div>
            ))}
            {/* Animate current layer rising if pouring? 
                For V2 simplicity, we add the layer after pour. 
                Or we could animate a "filling" layer. 
                Let's stick to adding layers for stability. */}
          </div>
        </div>
      </div>

      <div className="status-readout">
        {message}
        <div className="progress-bar">
           <div className="progress-fill" style={{width: action === 'serving' ? '100%' : '10%'}}></div>
        </div>
      </div>
    </div>
  );
};

export default CocktailMixer;
