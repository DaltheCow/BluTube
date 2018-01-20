import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './side_bar';
import { fetchSubs } from '../../actions/subscription_actions';
import { receiveFilter, clearFilter } from '../../actions/ui_actions';

import mapFilter from '../../util/mapFilter';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;

  const filter = state.ui.filter;
  const location = ownProps.location.pathname;
  const history = ownProps.history;

  if (!currentUser) {
    return {
      subs: [],
      currentUser,
      filter,
      location,
      history,
    };
  }
  const subIds = currentUser.subIds;
  const allSubs = state.entities.subscriptions.subs;
  const users = state.entities.users;
  let subs = mapFilter(subIds, id => allSubs[id]);
  subs = subs.map(sub => Object.assign({}, sub, users[Number(sub.subscribeeId)]));
  const needsSubRequest = subIds.length !== subs;

  return {
    subs,
    currentUser,
    needsSubRequest,
    filter,
    location,
    history,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSubs: () => dispatch(fetchSubs()),
  receiveFilter: (filter) => dispatch(receiveFilter(filter)),
  clearFilter: () => dispatch(clearFilter()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
