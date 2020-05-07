import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      console.log("Comment: ", comment);
      return state.concat(comment); // New State = Old State + Changed
    // Like Memory (appending i.e. concatenation)
    // Thus, the state is not changed (it is immutable)
    // but its copy is made and appended.
    default:
      return state;
  }
};
