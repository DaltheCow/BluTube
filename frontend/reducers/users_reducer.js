import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_SUBS } from '../actions/subscription_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMMENTS: {
      return Object.assign({}, action.users, state);
    }
    case RECEIVE_SUBS: {
      // debugger
      return Object.assign({}, action.subs.users, state);
    }
    default: return state;
  }
};

export default UsersReducer;
