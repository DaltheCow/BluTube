export const SIDEBAR_TOGGLED = 'SIDEBAR_TOGGLED';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';
export const RESET_SIDEBAR_STATE = 'RESET_SIDEBAR_STATE';

export const sidebarToggle = (windowWidth) => ({
  type: SIDEBAR_TOGGLED,
  windowWidth,
});

export const windowResize = (direction) => ({
  type: WINDOW_RESIZE,
  windowDirection: direction,
});

export const resetSidebarState = (component) => ({
  type: RESET_SIDEBAR_STATE,
  component,
});
