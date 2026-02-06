import React from "react";
import { Link } from "react-router-dom";
import SpiritRoulette from "./SpiritRoulette";
import "./LogoNav.css";

const LogoNav = () => {
  return (
    <nav className="logo-nav">
      <Link to="/" className="home-link">
        <header className="logohead">
          <h1 className="h1logo"> SpiritTail</h1>
        </header>
      </Link>
      <div className="nav-actions">
        <SpiritRoulette />
      </div>
    </nav>
  );
};

export default LogoNav;
