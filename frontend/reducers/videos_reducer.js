import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';


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
    case RECEIVE_COMMENT: {
      // debugger
      if (state[action.comment.videoId].commentIds.includes(action.comment.id)) {
        return state;
      } else {
        const newState = Object.assign({}, state);
        newState[action.comment.videoId] = Object.assign({}, newState[action.comment.videoId]);
        newState[action.comment.videoId].commentIds = newState[action.comment.videoId].commentIds.concat(action.comment.id);
        return newState;
      }
    }
    case REMOVE_COMMENT: {
      const newState = Object.assign({}, state);
      newState[action.comment.videoId] = Object.assign({}, newState[action.comment.videoId]);
      newState[action.comment.videoId].commentIds = newState[action.comment.videoId].commentIds.filter(id => id !== action.comment.id);
      return newState;
    }
    default: return state;
  }
};

export default VideosReducer;
