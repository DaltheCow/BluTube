import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';

const VideosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_VIDEOS: {
      const copy = Object.assign({}, state);
      return Object.assign({}, action.videos, copy);
    }
    case RECEIVE_VIDEO: {
      return Object.assign({}, state, { [action.video.id]: Object.assign({}, state[action.video.id], action.video) });
    }
    case REMOVE_VIDEO: {
      const newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;
    }
    default: return state;
  }
};

export default VideosReducer;
