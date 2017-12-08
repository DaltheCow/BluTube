import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';


const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMMENTS: {
      return Object.assign({}, action.comments, state);
    }
    case RECEIVE_COMMENT: {
      return Object.assign({}, state, {[action.comment.id]: action.comment});
    }
    case REMOVE_COMMENT: {
      let newState = Object.assign({}, state);
      delete newState[action.comment.id];
      return newState;
    }
    default: return state;
  }
};

export default CommentsReducer;
