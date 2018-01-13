import { connect } from 'react-redux';
import { sidebarToggle, windowResize } from '../actions/side_bar_actions';
import { withRouter } from 'react-router-dom';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  const { sidebarState, sidebarType } = state.ui.sidebar;
  return {
    location: ownProps.location,
    sidebarState,
    sidebarType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  sidebarToggle: () => dispatch(sidebarToggle()),
  windowResize: (direction) => dispatch(windowResize(direction)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
