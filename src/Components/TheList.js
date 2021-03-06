/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SwitchView from "./SwitchView";
import { fetchDrinks } from "./redux/drinkActions.js";
import { connect } from "react-redux";
import LogoNav from "./LogoNav";

const TheList = ({ match, drink, fetchDrinks }) => {
  const jig = match.params.id;

  useEffect(() => {
    document.title = `${jig} Cocktail List Page`;
    fetchDrinks(jig);
  }, [fetchDrinks, jig]);

  const liquor = drink.drinks;

  const liquorList = liquor.map((drin) => (
    <Link to={`/detail/${drin.idDrink}`} key={drin.idDrink} id={drin.strDrink}>
      <SwitchView {...drin} />
    </Link>
  ));

  const placement = {
    position: "absolute",
    left: "100px",
    top: "100px",
  };

  return (
    <div>
      <div>
        <LogoNav />
      </div>
      <div style={placement}>
        <ul>{liquorList}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    drink: state,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrinks: (word) => dispatch(fetchDrinks(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheList);
