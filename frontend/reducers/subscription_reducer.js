import { RECEIVE_SUBS, RECEIVE_SUB, REMOVE_SUB } from '../actions/subscription_actions';


const SubscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SUBS: {
      return Object.assign({}, action.subs, state);
    }
    case RECEIVE_SUB: {
      return Object.assign({}, state, {[action.sub.id]: action.sub});
    }
    case REMOVE_SUB: {
      let newState = Object.assign({}, state);
      delete newState[action.sub.id];
      return newState;
    }
    default: return state;
  }
};

export default SubscriptionsReducer;
