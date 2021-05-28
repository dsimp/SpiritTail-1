import React, { Fragment } from "react";

const Pic = (ingredient) => {
  const ingred = ingredient.ingredient;
  const measure = ingredient.measure;

  return (
    <Fragment>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${ingred}-Medium.png`}
        alt="picture of ingredient"
      />
      <h1>
        {" "}
        {measure} : {ingred}{" "}
      </h1>
    </Fragment>
  );
};

export default Pic;
