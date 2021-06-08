import React from "react";
import "./Pic.css";

const Pic = (ingredient) => {
  const ingred = ingredient.ingredient;
  const measure = ingredient.measure;

  return (
    <div className="pic">
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${ingred}-Medium.png`}
        alt="picture of ingredient"
        className="picture"
      />
      <h2 className="measurement">
        {" "}
        {measure} : {ingred}{" "}
      </h2>{" "}
    </div>
  );
};

export default Pic;
