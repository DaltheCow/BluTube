import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SUB, REMOVE_SUB } from '../actions/subscription_actions';

const defaultState = {
  currentUser: null
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      return Object.assign({}, state, {currentUser: action.currentUser});
    }
    case RECEIVE_SUB: {
      const newState = Object.assign({}, state);
      newState.currentUser = Object.assign({}, newState.currentUser);
      newState.currentUser.subIds = newState.currentUser.subIds.concat(action.sub.id);
      return newState;
    }
    case REMOVE_SUB: {
      const newState = Object.assign({}, state);
      newState.currentUser = Object.assign({}, newState.currentUser);
      newState.currentUser.subIds = newState.currentUser.subIds.filter(id => id !== action.sub.id);
      return newState;
    }
    default: return state;
  }
};

export default SessionReducer;
