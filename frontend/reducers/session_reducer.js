import RECEIVE_CURRENT_USER from '../actions/session_actions';

const defaultState = {
  currentUser: null
};

const SessionReducer = (state = defaultState, action) => {
  console.log();
  console.log("inside session");
  console.log(state, action)
  console.log();
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      return Object.assign({}, state, {currentUser: action.currentUser});
    }
    default: return state;
  }
};

export default SessionReducer;
