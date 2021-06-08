import React, { useState } from "react";
import CubeView from "./CubeView.js";
import ListView from "./ListView.js";

// eslint-disable-next-line react/prop-types
const SwitchView = ({ strDrink, strDrinkThumb }) => {
  const [show, setShow] = useState(false);

  const listStyle = {
    backgroundColor: "silver",
    borderStyle: "outset",
    borderColor: "gold",
    marginTop: "50px",
    listStyleType: "none",
    width: "3in",
  };

  const fixedStyle = {
    position: "fixed",
    right: "100px",
    top: "700px",
  };

  return (
    <li
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={listStyle}
      id={strDrink}
    >
      <ListView strDrink={strDrink} strDrinkThumb={strDrinkThumb} />
      {show ? (
        <CubeView
          strDrink={strDrink}
          strDrinkThumb={strDrinkThumb}
          style={fixedStyle}
        />
      ) : null}
    </li>
  );
};

export default SwitchView;
