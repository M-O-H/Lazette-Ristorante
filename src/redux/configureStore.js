import { createStore, combineReducers, applyMiddleware } from "redux";

// createStore allows us to creater the Store
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";

// Middleware
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );

  // Return the Created Store.
  return store;
};
