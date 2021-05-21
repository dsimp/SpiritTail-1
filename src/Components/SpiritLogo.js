import React from "react";
import { Link } from "react-router-dom";
import "./SpiritLogo.css";

const SpiritLogo = () => {
  return (
    <Link to="/">
      <header className="headOne">
        <span className="one">S</span>
        <span className="two">p</span>
        <span className="three">i</span>
        <span className="four">r</span>
        <span className="five">i</span>
        <span className="six">t</span>
        <span className="seven">T</span>
        <span className="eight">a</span>
        <span className="nine">l</span>
        <span className="ten">e</span>
      </header>
    </Link>
  );
};
export default SpiritLogo;
