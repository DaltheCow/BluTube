export const SIDEBAR_TOGGLED = 'SIDEBAR_TOGGLED';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';

export const sidebarToggle = (windowWidth) => ({
  type: SIDEBAR_TOGGLED,
  windowWidth,
});

export const windowResize = (direction) => ({
  type: WINDOW_RESIZE,
  windowDirection: direction,
});
