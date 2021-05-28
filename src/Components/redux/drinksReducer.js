import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_FAILURE,
} from "./drinkActionTypes.js";

const intialState = {
  loading: false,
  drinks: [],
  error: "",
  spirits: [
    "Absinthe",
    "Ale",
    "Beer",
    "Brandy",
    "Champagne",
    "Cognac",
    "Gin",
    "Port",
    "Rum",
    "Scotch",
    "Sherry",
    "Tequila",
    "Vermouth",
    "Vodka",
    "Whiskey",
    "Wine",
  ],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        loading: false,
        drinks: action.payload,
        error: "",
      };
    case FETCH_DRINKS_FAILURE:
      return {
        ...state,
        loading: false,
        drinks: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
