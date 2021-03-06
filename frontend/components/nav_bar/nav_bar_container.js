import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { sendSearch } from '../../actions/video_actions';
import { clearFilter } from '../../actions/ui_actions';
import { sidebarToggle } from '../../actions/side_bar_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: !!state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    sendSearch: (query) => dispatch(sendSearch(query)),
    clearFilter: () => dispatch(clearFilter()),
    sidebarToggle: (windowWidth) => dispatch(sidebarToggle(windowWidth)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
);
