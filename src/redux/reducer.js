// Import the Dishes
import { DISHES } from "../shared/dishes";
// Comments
import { COMMENTS } from "../shared/comments";
// Promotions
import { PROMOTIONS } from "../shared/promotions";
// Leaders
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

//Export the Reducer
// state, action are the input parameters to the reducer function
// initialState in the default parameter else the state would be undifined.
export const Reducer = (state = initialState, action) => {
  return state;
};
