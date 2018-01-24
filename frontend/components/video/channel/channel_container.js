import { connect } from 'react-redux';
import Channel from './channel';
import mapFilter from '../../../util/mapFilter';
import { fetchVideo, fetchChannelVideos } from '../../../actions/video_actions';
import { fetchUser } from '../../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const channel = state.entities.users[userId];
  if (!channel || !channel.videoIds) {
    return { channel: null, userId };
  }
  const videos = mapFilter(channel.videoIds, id => state.entities.videos[id]);

  return {
    channel,
    videos,
    userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel));
