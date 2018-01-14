import { SIDEBAR_TOGGLED, WINDOW_RESIZE } from '../actions/side_bar_actions';

const sidebarState = window.innerWidth >= 1277;

const defaultState = {
  sidebarState,
  sidebarResponse: true,
  sidebarType: 'flex',
};

const SideBarReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SIDEBAR_TOGGLED: {
      if (!state.sidebarState) {
        if (action.windowWidth === 'overlay') {
          const newState = { sidebarState: true, sidebarType: 'overlay' };
          return Object.assign({}, state, newState);
        } else {
          return { sidebarState: true, sidebarType: 'flex', sidebarResponse: true };
        }
      } else {
        if (action.windowWidth === 'overlay') {
          const newState = { sidebarState: false, sidebarType: 'flex' };
          return Object.assign({}, state, newState);
        } else {
          const newState = { sidebarState: false, sidebarResponse: false };
          return Object.assign({}, state, newState);
        }
      }
    }
    case WINDOW_RESIZE: {
      if (action.windowDirection === 'widen') {
        if (state.sidebarType === 'overlay') {
          return Object.assign({}, state, { sidebarType: 'flex', sidebarResponse: true });
        }
        else if (state.sidebarResponse) {
          return Object.assign({}, state, { sidebarState: true });
        }
      } else if (state.sidebarType === 'flex') {
        return Object.assign({}, state, { sidebarState: false });
      }
      return state;
    }
    default: return state;
  }
};

export default SideBarReducer;
