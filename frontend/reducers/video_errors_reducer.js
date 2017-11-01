import { RECEIVE_ERRORS, RECEIVE_VIDEO, CLEAR_ERRORS } from '../actions/video_actions';


const VideoErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_ERRORS: {
      return action.errors;
    }
    case CLEAR_ERRORS:
    case RECEIVE_VIDEO: {
      return [];
    }
    default: return state;
  }
};

export default VideoErrorsReducer;
