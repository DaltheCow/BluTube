import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './home';
import { fetchVideo, addView } from '../../../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  const channel = state.entities.users[ownProps.match.params.userId];
  const videoIds = channel && channel.videoIds ? channel.videoIds : [];
  const videoId = videoIds.sort((a,b) => b - a)[0];
  const video = state.entities.videos[videoId];
  return {
    video,
    videoId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addView: (videoId) => dispatch(addView(videoId)),
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
