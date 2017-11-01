import { RECEIVE_ERRORS, RECEIVE_VIDEO } from '../actions/session_actions';


const VideoErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS: {
      return action.errors;
    }
    case RECEIVE_VIDEO: {
      return [];
    }
    default: return state;
  }
};

export default VideoErrorsReducer;
