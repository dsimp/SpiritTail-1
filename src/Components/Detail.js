import React, { Fragment } from "react";
import useFetchId from "./services/useFetchId.js";
import Pic from "./Pic.js";
import LogoNav from "./LogoNav";
import "./Detail.css";
// eslint-disable-next-line react/prop-types
const Detail = ({ match }) => {
  const { details } = useFetchId(match.params.id);
  const mix = [];

  for (let i = 1; i < 16; i++) {
    if (details[`strMeasure${i}`] == null || details[`strMeasure${i}`] == "") {
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
    <Fragment>
      <LogoNav />

      <div className="dt">
        <div className="containerBox">
          <div className="box box1">
            <h1>{cTail}</h1>
          </div>
          <div className="box box2">
            <h1>{cTail} </h1>
          </div>
        </div>
        <h1> {details.strGlass}</h1>

        <div className="mix">{mix}</div>
        <div>
          <h1>{details.strInstructions}</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Detail;
