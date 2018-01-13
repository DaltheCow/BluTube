import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './side_bar';
import { fetchSubs } from '../../actions/subscription_actions';
import mapFilter from '../../util/mapFilter';

const mapStateToProps = (state, ownProps) => {
  const subIds = state.session.currentUser.subIds;
  const allSubs = state.entities.subscriptions.subs;
  const users = state.entities.users;
  let subs = mapFilter(subIds, id => allSubs[id]);
  subs = subs.map(sub => Object.assign({}, sub, users[sub.subscribeeId]));
  return {
    subs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSubs: () => dispatch(fetchSubs()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
