import React from "react";
import useFetchId from "./services/useFetchId.js";
import Pic from "./Pic.js";

// eslint-disable-next-line react/prop-types
const Detail = ({ match }) => {
  const { details } = useFetchId(match.params.id);
  const mix = [];

  for (let i = 1; i < 16; i++) {
    if (details[`strMeasure${i}`] == null) {
      break;
    }
    mix.push(
      <Pic
        key={details[`strIngredient${i}`]}
        ingredient={details[`strIngredient${i}`]}
        measure={details[`strMeasure${i}`]}
      />
    );
  }

  let cTail = details.strDrink;
  document.title = `${cTail} Detail Page`;

  return (
    <div>
      <div>
        <h1> {details.strDrink} </h1>
        <h1> {details.strGlass}</h1>
      </div>
      <div>{mix}</div>
      <div>
        <h1>{details.strInstructions}</h1>
      </div>
    </div>
  );
};

export default Detail;
