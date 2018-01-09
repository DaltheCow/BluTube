import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) => {
  const subs = state.entities.subscriptions.subs;
  return {
    subs,
  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(SideBar));
