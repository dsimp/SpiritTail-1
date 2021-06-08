import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_FAILURE,
} from "./drinkActionTypes.js";

export const fetchDrinksRequest = () => {
  return {
    type: FETCH_DRINKS_REQUEST,
  };
};

const fetchDrinksSuccess = (drinks) => {
  return {
    type: FETCH_DRINKS_SUCCESS,
    payload: drinks,
  };
};

const fetchDrinksFailure = (error) => {
  return {
    type: FETCH_DRINKS_FAILURE,
    payload: error,
  };
};
export const fetchDrinks = (word) => {
  return (dispatch) => {
    dispatch(fetchDrinksRequest);
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${word}`
    ).then((resp) => {
      resp
        .json()
        .then((data) => {
          const drink = data.drinks;
          dispatch(fetchDrinksSuccess(drink));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchDrinksFailure(errorMsg));
        });
    });
  };
};
