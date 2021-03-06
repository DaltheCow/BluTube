import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_SUBS } from '../actions/subscription_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMMENTS: {
      return Object.assign({}, action.users, state);
    }
    case RECEIVE_SUBS: {
      return Object.assign({}, action.subs.users, state);
    }
    case RECEIVE_VIDEO: {
      const author = action.video.author;
      return Object.assign({}, { [author.id]: author }, state);
    }
    case RECEIVE_USER: {
      return Object.assign({}, state, { [action.user.id]: action.user });
    }
    default: return state;
  }
};

export default UsersReducer;
