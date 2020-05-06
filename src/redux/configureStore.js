import { createStore } from "redux";
// createStore allows us to creater the Store
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(
    Reducer, // reducer
    initialState // our initialState are the input parameters to createStore() function
  );

  return store;
  // Return the Created Store.
};
