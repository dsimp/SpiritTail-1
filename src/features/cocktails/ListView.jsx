import React, { Fragment } from "react";
import "./ListView.css";
// eslint-disable-next-line react/prop-types
const ListView = ({ strDrinkThumb, strDrink }) => {
  return (
    <Fragment>
      <img src={strDrinkThumb} alt="cocktail img" />
      <h2> {strDrink} </h2>
    </Fragment>
  );
};

export default ListView;
