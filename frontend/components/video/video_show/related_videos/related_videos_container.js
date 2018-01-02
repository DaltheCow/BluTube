import { connect } from 'react-redux';
import { fetchVideos, fetchVideo } from '../../../../actions/video_actions';
import RelatedVideos from './related_videos';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  if (!state.entities.videos) {
    return { videos: []};
  }
  const vidId = ownProps.match.params.videoId;
  const filteredVideos = Object.values(state.entities.videos).filter(video => video.id !== parseInt(vidId));
  const videos = filteredVideos
  .filter(video => {
    const videoIds = filteredVideos
      .map(video => video.id);
    return videoIds.indexOf(video.id) === videoIds.lastIndexOf(video.id);
  });

  return {
    videos,

  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideo: (id) => dispatch(fetchVideo(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedVideos));
