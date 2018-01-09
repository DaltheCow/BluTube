export const SIDEBAR_TOGGLED = 'SIDEBAR_TOGGLED';

export const sidebarToggle = (newState) => ({
  type: SIDEBAR_TOGGLED,
  sidebarState: newState,
});
