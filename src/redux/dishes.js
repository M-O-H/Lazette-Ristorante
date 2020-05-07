// Imports
//import { DISHES } from "../shared/dishes";
import * as ActionTypes from "./ActionTypes";

// The Reducer Function
export const Dishes = (
  state = { isLoading: true, errMess: null, dishes: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };
    // new state = old + changes
    // isLoading is true so go ti the SPINNER (Loading component)

    case ActionTypes.DISHES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
