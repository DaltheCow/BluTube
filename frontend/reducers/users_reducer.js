import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMMENTS: {
      return Object.assign({}, action.users, state);
    }
    case RECEIVE_COMMENT: {
      return Object.assign({}, state, {[action.user.id]: action.user});
    }
    default: return state;
  }
};

export default UsersReducer;
