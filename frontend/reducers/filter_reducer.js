import { RECEIVE_FILTER, CLEAR_FILTER } from '../actions/ui_actions';


const FilterReducer = (state = "", action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FILTER: {
      return action.filter;
    }
    case CLEAR_FILTER: {
      return "";
    }
    default: return state;
  }
};

export default FilterReducer;
