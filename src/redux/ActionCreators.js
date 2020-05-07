import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

// This function exports just an Object which is 'payload'.
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// THUNK (returning the function dispatch)
export const fetchDishes = () => (dispatch) => {
  // First Dispatch
  dispatch(dishesLoading(true));

  // 2nd Dispatch after 2 secs
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

// return an Action of type DISHES_LOADING
// Dishes are to be loaded
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

// errmess = error message
// This funciton returns a Action type and payload
// called errpr message
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// ACTIONS ARE DEFINED IN DISHES.JS FILE
