import React, { useState } from "react";
import useFetchId from "../../services/useFetchId";
import LogoNav from "../../components/layout/LogoNav";
import { FlapperSpinner } from "react-spinners-kit";
import CocktailMixer from "../../components/visuals/CocktailMixer";
import "./Detail.css";

const Detail = ({ match }) => {
  const { id } = match.params;
  const { data, loading } = useFetchId(id);
  const drink = data ? data[0] : null;

  // Extract ingredients
  const ingredients = [];
  if (drink) {
    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredients.push({
          name: drink[`strIngredient${i}`],
          measure: drink[`strMeasure${i}`] || "",
          img: `https://www.thecocktaildb.com/images/ingredients/${drink[`strIngredient${i}`]}-Small.png`,
        });
      }
    }
  }

  const handleVideoSearch = () => {
    const query = `${drink.strDrink} cocktail recipe video`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_blank");
  };

  return (
    <div className="detail-page">
      <LogoNav />
      {loading || !drink ? (
        <div className="spinner-center">
          <FlapperSpinner size={50} color="#bc13fe" loading={loading} />
        </div>
      ) : (
        <div className="detail-container">
          <div className="detail-header">
            <h1 className="drink-title">{drink.strDrink}</h1>
            <div className="hologram-badge">PROTOCOL ACTIVE</div>
          </div>

          <div className="detail-grid">
            <div className="visual-module">
              <div className="main-image-frame">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="main-image" />
              </div>
              
              <div className="mixer-display">
                <CocktailMixer ingredients={ingredients} instructions={drink.strInstructions} />
              </div>

              <div className="action-buttons">
                <button className="video-btn" onClick={handleVideoSearch}>
                  WATCH PREPARATION
                </button>
              </div>
            </div>

            <div className="data-module">
              <div className="glass-panel">
                <h2>// INGREDIENTS</h2>
                <div className="ingredients-grid">
                  {ingredients.map((ing, index) => (
                    <div className="ingredient-chip" key={index}>
                      <img src={ing.img} alt={ing.name} />
                      <div className="ing-text">
                        <span className="measure">{ing.measure}</span>
                        <span className="name">{ing.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel instructions-panel">
                <h2>// EXECUTION</h2>
                <p className="instructions-text">{drink.strInstructions}</p>
                <div className="glass-type">
                  <span>VESSEL:</span> {drink.strGlass}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
