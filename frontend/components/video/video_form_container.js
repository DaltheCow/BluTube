import { connect } from 'react-redux';
import { fetchVideo, uploadVideo, updateVideo, deleteVideo, clearErrors } from '../../actions/video_actions';
import VideoForm from './video_form';

//user needs access to all of their video ids
const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.params.videoId ? 'edit' : 'add';
  let video = {};
  if (formType === 'edit' && state.entities.videos[ownProps.match.params.videoId]) {
    video = state.entities.videos[ownProps.match.params.videoId];
  }

  return {
    video,
    formType,
    currentUser: state.session.currentUser,
    errors: state.errors.videos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submitAction = ownProps.match.params.videoId ? updateVideo : uploadVideo;
  return {
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    deleteVideo: (id) => dispatch(deleteVideo(id)),
    submitAction: (video, id) => dispatch(submitAction(video, id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm);
