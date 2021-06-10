/* eslint-disable react/prop-types */
import React from "react";
import "./CubeView.css";

const CubeView = ({ strDrinkThumb }) => {
  const mystyle = {
    position: "absolute",
    width: "400px",
    height: "400px",
  };

  return (
    <div className="wrapper">
      <div className="area">
        <div className="front" style={mystyle}>
          <img src={strDrinkThumb} className="drinkpic" alt="front cube img" />
        </div>
        <div className="back" style={mystyle}>
          <img src={strDrinkThumb} className="drinkpic" alt="back cube img" />
        </div>
        <div className="right" style={mystyle}>
          <img src={strDrinkThumb} className="drinkpic" alt="right cube img" />
        </div>
        <div className="left" style={mystyle}>
          <img src={strDrinkThumb} className="drinkpic" alt="left cube img" />
        </div>
        <div className="top" style={mystyle}>
          <img src={strDrinkThumb} className="drinkpic" alt="top cube img" />
        </div>
        <div className="bottom" style={mystyle}>
          <img src={strDrinkThumb} className="drinkpic" alt="bottom cube img" />
        </div>
      </div>
    </div>
  );
};

export default CubeView;
