import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS: {
      return action.errors;
    }
    case RECEIVE_CURRENT_USER: {
      return [];
    }
    default: return state;
  }
};

export default SessionErrorsReducer;
