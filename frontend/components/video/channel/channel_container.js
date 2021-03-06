import { connect } from 'react-redux';
import Channel from './channel';
import { mapFilter } from '../../../util/component_util';
import { fetchVideo, fetchChannelVideos } from '../../../actions/video_actions';
import { fetchUser } from '../../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { resetSidebarState } from '../../../actions/side_bar_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const channel = state.entities.users[userId];
  if (!channel || !channel.videoIds) {
    return { channel: null, userId };
  }

  const videos = mapFilter(channel.videoIds, id => state.entities.videos[id], a => a !== undefined);

  return {
    channel,
    videos,
    userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    resetSidebarState: (component) => dispatch(resetSidebarState(component)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel));
