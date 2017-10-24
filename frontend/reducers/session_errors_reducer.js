import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const SessionErrorsReducer = (state = [], action) => {
  console.log();
  console.log("inside session errors");
  console.log(state, action)
  console.log();
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
