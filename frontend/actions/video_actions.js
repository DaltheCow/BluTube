import * as VideoApiUtil from '../util/video_api_util';
import * as LikeApiUtil from '../util/like_api_util';
import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_SEARCH_VIDEOS = "RECEIVE_SEARCH_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos
});

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
});

const receiveSearchVideos = (video) => ({
  type: RECEIVE_SEARCH_VIDEOS,
  video
});

const removeVideo = (videoId) => ({
  type: REMOVE_VIDEO,
  videoId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchVideos = () => dispatch => {
  return VideoApiUtil.fetchVideos().then(videos => dispatch(receiveVideos(videos)));
};

export const fetchVideo = (id) => dispatch => {
  return VideoApiUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)));
};

export const uploadVideo = (video) => dispatch => {
  return VideoApiUtil.uploadVideo(video).then(
    video => dispatch(receiveVideo(video)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateVideo = (video, id) => dispatch => {
  return VideoApiUtil.updateVideo(video, id).then(
    video => dispatch(receiveVideo(video)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteVideo = (id) => dispatch => {
  return VideoApiUtil.deleteVideo(id).then(id => dispatch(removeVideo(id)));
};

export const addView = (id) => dispatch => {
  return VideoApiUtil.addView(id).then(video => dispatch(receiveVideo(video)));
};

export const createLike = (videoId, like) => dispatch => {
  return LikeApiUtil.createLike(videoId, like).then(video => dispatch(receiveVideo(video)));
};

export const updateLike = (videoId, userId, like) => dispatch => {
  return LikeApiUtil.updateLike(videoId, userId, like).then(video => dispatch(receiveVideo(video)));
};

export const deleteLike = (id) => dispatch => {
  return LikeApiUtil.deleteLike(id).then(video => dispatch(receiveVideo(video)));
};

export const sendSearch = (query) => dispatch => {
  return SearchApiUtil.sendSearch(query).then(videos => {
    return dispatch(receiveSearchVideos(videos));
  });
};
