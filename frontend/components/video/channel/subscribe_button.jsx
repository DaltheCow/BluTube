import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSub, deleteSub } from '../../../actions/subscription_actions';

class Subscribe extends React.Component {

  handleSub(isSubbing) {
    if (!this.props.currentUser) {
      this.props.history.push(`/login`);
    }
    if (isSubbing) {
      this.props.createSub(this.props.channelId);
    } else {
      this.props.deleteSub(this.props.subId);
    }
  }

  render() {
    const { subCount, isCurrentUsersChannel, subId } = this.props;
    return (
      isCurrentUsersChannel ? null :
        parseInt(subId) ? (
          <button onClick={() => this.handleSub(false)} className="unsubscribe">
            <span className="sub">SUBSCRIBED</span>
            <span className="subcount">{subCount}</span>
          </button>
        ) : (
          <button onClick={() => this.handleSub(true)} className="subscribe">
            <span className="sub">SUBSCRIBE</span>
            <span className="subcount">{subCount}</span>
          </button>)
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.userId;
  // debugger
  const history = ownProps.history;
  const subCount = ownProps.subCount;
  const currentUser = state.session.currentUser;
  const isCurrentUsersChannel = (currentUser ? String(currentUser.id) === channelId : false);
  const allSubs = state.entities.subscriptions.subs;
  const subId = (allSubs && currentUser && !isCurrentUsersChannel) ?
    (currentUser.subIds.find(id => allSubs[id] && String(allSubs[id].subscribeeId) === channelId)) :
    null;

  return {
    channelId,
    subCount,
    history,
    isCurrentUsersChannel,
    currentUser,
    subId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSub: (userId) => dispatch(createSub(userId)),
    deleteSub: (subId) => dispatch(deleteSub(subId)),
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe));
