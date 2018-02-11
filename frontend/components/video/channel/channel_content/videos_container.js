import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Videos from './videos';
import { fetchChannelVideos } from '../../../../actions/video_actions';
import { mapFilter } from '../../../../util/component_util';

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.userId;
  const channel = state.entities.users[channelId];
  const videoIds = channel && channel.videoIds ? channel.videoIds : [];
  const allVids = state.entities.videos;
  const videos = mapFilter(videoIds, id => allVids[id], a => a !== undefined);

  return {
    videos,
    channelId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannelVideos: (channelId) => dispatch(fetchChannelVideos(channelId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos));
