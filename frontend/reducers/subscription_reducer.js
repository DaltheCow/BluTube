import { RECEIVE_SUBS, RECEIVE_SUB, REMOVE_SUB } from '../actions/subscription_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

const SubscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SUBS: {
      return action.subs;
    }
    case RECEIVE_SUB: {
      return Object.assign({}, state, { [action.sub.id]: action.sub });
    }
    case REMOVE_SUB: {
      let newState = Object.assign({}, state);
      delete newState[action.sub.id];
      return newState;
    }
    case RECEIVE_VIDEO: {
      if (action.video.sub) {
        return Object.assign({}, state, { [action.video.sub.id]: action.video.sub });
      } else {
        return state;
      }
    }
    default: return state;
  }
};

export default SubscriptionsReducer;
