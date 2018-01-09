import { SIDEBAR_TOGGLED } from '../actions/side_bar_actions';

const SideBarReducer = (state = false, action) => {
  switch(action.type) {
    case SIDEBAR_TOGGLED: {
      return !action.sidebarState;
    }
    default: return state;
  }
};

export default SideBarReducer;
