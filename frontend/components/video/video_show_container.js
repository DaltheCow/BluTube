import { connect } from 'react-redux';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import VideoShow from './video_show';
import shuffle from '../../util/shuffle';

//user needs access to all of their video ids
const mapStateToProps = (state, ownProps) => {
  const video = state.entities.videos[ownProps.match.params.videoId];
  const videos = shuffle(Object.values(state.entities.videos)).slice(20);
  return {
    video,
    currentUser: state.session.currentUser,
    videos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
