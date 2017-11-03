import { RECEIVE_FILTER, CLEAR_FILTER } from '../actions/ui_actions';


const UIReducer = (state = {filter: ""}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_VIDEOS: {
      return action.filter;
    }
    case CLEAR_FILTER: {
      return {filter: ""};
    }
    default: return state;
  }
};

export default UIReducer;
