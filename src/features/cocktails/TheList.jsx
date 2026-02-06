import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDrinks } from "../../store/drinkSlice";
import { useDispatch, useSelector } from "react-redux";
import LogoNav from "../../components/layout/LogoNav";
import Cube3D from "../../components/visuals/Cube3D";
import { FlapperSpinner } from "react-spinners-kit";
import soundService from "../../services/SoundService";
import "./TheList.css";

const TheList = () => {
  const { id: spiritName } = useParams();
  const dispatch = useDispatch();
  const { drinks, loading } = useSelector((state) => state);
  const [hoveredDrink, setHoveredDrink] = useState(null);

  useEffect(() => {
    dispatch(fetchDrinks(spiritName));
  }, [dispatch, spiritName]);

  const handleMouseEnter = (img) => {
    soundService.playHover();
    setHoveredDrink(img);
  };

  const handleMouseLeave = () => {
    setHoveredDrink(null);
  };

  const cocktailList = drinks.map((drink) => (
    <div 
      className="cocktail-card" 
      key={drink.idDrink}
      onMouseEnter={() => handleMouseEnter(drink.strDrinkThumb)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} loading="lazy" />
        <div className="card-overlay">
          <Link to={`/detail/${drink.idDrink}`} className="view-btn">
            View Recipe
          </Link>
        </div>
      </div>
      <div className="card-info">
        <h3>{drink.strDrink}</h3>
      </div>
    </div>
  ));

  return (
    <div className="list-page">
      <LogoNav />
      {hoveredDrink && <Cube3D image={hoveredDrink} visible={true} />}
      <div className="list-container">
        <h2 className="spirit-title">{spiritName} PROTOCOLS</h2>
        
        {loading ? (
          <div className="spinner-center">
            <FlapperSpinner size={50} color="#bc13fe" loading={loading} />
          </div>
        ) : (
          <div className="cocktail-grid">
            {cocktailList}
          </div>
        )}
      </div>
    </div>
  );
};

export default TheList;
