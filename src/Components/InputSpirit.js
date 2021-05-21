import React, { useState } from "react";
import "./InputSpirit.css";
import { FlapperSpinner } from "react-spinners-kit";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SpiritLogo from "./SpiritLogo";

// eslint-disable-next-line react/prop-types
const InputSpirit = ({ drink }) => {
  const [search] = useState(drink.spirits);
  document.title = "Spirit Tail Home Page";

  const mainMenu = search.map((name) => (
    <Link to={`list/${name}`} key={name} id={name} search>
      <li> {name} </li>
    </Link>
  ));

  const spin = drink.loading;

  return (
    <div className="container">
      <SpiritLogo />
      <div className="cocktail1"></div>
      <div className="cocktail2"></div>
      <FlapperSpinner loading={spin} />
      <div className="menuMake">
        <button className="menu" id="Menu Button">
          Spirit Menu
        </button>

        <menu className="linkCon">
          <ul>{mainMenu}</ul>
        </menu>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    drink: state,
  };
};

export default connect(mapStateToProps)(InputSpirit);
