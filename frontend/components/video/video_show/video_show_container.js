import { connect } from 'react-redux';
import { fetchVideo, fetchVideos, addView, createLike, updateLike, deleteLike } from '../../../actions/video_actions';
import { createSub, deleteSub } from '../../../actions/subscription_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
  const newVideo = state.entities.videos[ownProps.match.params.videoId];

  const filteredVideos = Object.values(state.entities.videos).filter(video => video.id !== parseInt(ownProps.match.params.videoId));
  const videos = filteredVideos
  .filter(video => {
    const videoIds = filteredVideos
      .map(video => video.id);
    return videoIds.indexOf(video.id) === videoIds.lastIndexOf(video.id);
  });

  const currentUser = state.session.currentUser;
  const subs = state.entities.subscriptions.subs;
  let subId;
  if (Boolean(currentUser) && Boolean(newVideo) && Boolean(subs)) {
    subId = Object.keys(subs).filter(subId => Number(subs[subId].subscribeeId) === Number(newVideo.author.id))[0];
  }
  const sub = subs[subId];
  const subCount = state.entities.subscriptions.subCount;

  return {
    video: newVideo,
    currentUser,
    videos,
    sub,
    subCount
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: () => dispatch(fetchVideos()),
    addView: (id) => dispatch(addView(id)),
    createLike: (videoId, like) => dispatch(createLike(videoId, like)),
    updateLike: (videoId, userId, like) => dispatch(updateLike(videoId, userId, like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    createSub: (sub) => dispatch(createSub(sub)),
    deleteSub: (subId) => dispatch(deleteSub(subId)),
  };
};

//this line of code is super important!! ;) hehe
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);

//this line of code is a little less important that the last line that said it was super important. but it's still key to the success of the program
//this algorithm - if a > b, addView (sim - 7xt) - is super important, but less important than the last line that was less important than the line before it
