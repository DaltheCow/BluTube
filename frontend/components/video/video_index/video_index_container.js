import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import VideoIndex from './video_index';
import shuffle from '../../../util/shuffle';

//user needs access to all of their video ids
const mapStateToProps = (state, ownProps) => {
  // if (state.ui.filter)k
  debugger
  const videos = shuffle(Object.values(state.entities.videos)).slice(0, 40);
  return {
    videos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
