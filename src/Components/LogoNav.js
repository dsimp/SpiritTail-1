import React from "react";
import { Link } from "react-router-dom";
import "./LogoNav.css";

const LogoNav = () => {
  return (
    <Link to="/">
      <header>
        <h1> SpiritTail</h1>
      </header>
    </Link>
  );
};

export default LogoNav;
