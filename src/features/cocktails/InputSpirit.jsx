import React from "react";
import "./InputSpirit.css";
import { FlapperSpinner } from "react-spinners-kit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SpiritLogo from "../../components/layout/SpiritLogo";

const InputSpirit = () => {
  const spirits = useSelector((state) => state.spirits);
  const loading = useSelector((state) => state.loading);
  document.title = "Spirit Tail | Future Bar";

  const mainMenu = spirits.map((name) => (
    <Link to={`list/${name}`} key={name} className="spirit-card-link">
      <div className="spirit-card">
        <h3>{name}</h3>
        <div className="card-glitch"></div>
      </div>
    </Link>
  ));

  return (
    <div className="home-container">
      <div className="hero-section">
        <SpiritLogo />
        <p className="subtitle">SELECT YOUR POISON</p>
      </div>
      
      {loading ? (
        <div className="spinner-container">
          <FlapperSpinner size={50} color="#00f3ff" loading={loading} />
        </div>
      ) : (
        <div className="spirit-grid">
          {mainMenu}
        </div>
      )}
    </div>
  );
};

export default InputSpirit;
