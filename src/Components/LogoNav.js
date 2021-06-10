import React from "react";
import { Link } from "react-router-dom";
import "./LogoNav.css";

const LogoNav = () => {
  return (
    <Link to="/">
      <header className="logohead">
        <h1 className="h1logo"> SpiritTail</h1>
      </header>
    </Link>
  );
};

export default LogoNav;
