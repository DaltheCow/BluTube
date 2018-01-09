import { connect } from 'react-redux';
import { sidebarToggle } from '../actions/side_bar_actions';
import { withRouter } from 'react-router-dom';
import App from './app';

const mapStateToProps = (state) => ({
  sidebar: state.ui.sidebar,
});

const mapDispatchToProps = (dispatch) => ({
  sidebarToggle: () => dispatch(sidebarToggle()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
