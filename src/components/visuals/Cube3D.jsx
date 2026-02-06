import React from "react";
import "./Cube3D.css";

const Cube3D = ({ image, visible }) => {
  if (!visible || !image) return null;

  return (
    <div className="cube-overlay-container">
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front">
            <img src={image} alt="" />
          </div>
          <div className="cube__face cube__face--back">
            <img src={image} alt="" />
          </div>
          <div className="cube__face cube__face--right">
            <img src={image} alt="" />
          </div>
          <div className="cube__face cube__face--left">
            <img src={image} alt="" />
          </div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Cube3D;
