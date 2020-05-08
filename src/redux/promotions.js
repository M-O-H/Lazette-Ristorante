import { PROMOTIONS } from "../shared/promotions";
import * as ActionTypes from "./ActionTypes";

// Reducer function
export const Promotions = (
  state = { isLoading: true, errMess: null, promotions: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };
    // new state = old + changes
    // isLoading is true so go ti the SPINNER (Loading component)

    case ActionTypes.PROMOS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
