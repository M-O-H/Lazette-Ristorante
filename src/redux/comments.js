import { COMMENTS } from "../shared/comments";

import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    // New State = Old State + Changed
    // Like Memory (appending i.e. concatenation)
    // Thus, the state is not changed (it is immutable)
    // but its copy is made and appended.
    default:
      return state;
  }
};
