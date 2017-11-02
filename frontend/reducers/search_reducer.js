import { RECEIVE_SEARCH_VIDEOS } from '../actions/video_actions';


const SearchReducer = (state = {Video: []}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_VIDEOS: {
      return action.video;
    }
    default: return state;
  }
};

export default SearchReducer;
