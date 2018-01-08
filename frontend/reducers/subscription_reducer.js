import { RECEIVE_SUBS, RECEIVE_SUB, REMOVE_SUB } from '../actions/subscription_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

const SubscriptionsReducer = (state = { subs: {}, subCount: null }, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SUBS: {
      return { subs: action.subs, subCount: null };
    }
    case RECEIVE_SUB: {
      const subs = Object.assign({}, state.subs, { [action.sub.id]: action.sub });
      return { subs, subCount: action.subCount };
    }
    case REMOVE_SUB: {
      let newState = Object.assign({}, state);
      delete newState.subs[action.sub.id];
      newState.subCount = action.subCount;
      return newState;
    }
    case RECEIVE_VIDEO: {
      if (action.video.sub) {
        const subs = Object.assign({}, state.subs, { [action.video.sub.id]: action.video.sub });
        return { subs, subCount: action.video.subCount };
      } else {
        return state;
      }
    }
    default: return state;
  }
};

export default SubscriptionsReducer;
