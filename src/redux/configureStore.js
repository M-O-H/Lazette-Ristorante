import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";

import { InitialFeedback } from "./forms";

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
      // Whats this?
      ...createForms({
        feedback: InitialFeedback, // To reset the
        // form to its original state after submitting it.
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  // Return the Created Store.
  return store;
};
