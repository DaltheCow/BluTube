import * as ApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos
});

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
});

const removeVideo = (videoId) => ({
  type: REMOVE_VIDEO,
  videoId
});

export const fetchVideos = () => dispatch => {
  return ApiUtil.fetchVideos().then(videos => dispatch(receiveVideos(videos)));
};

export const fetchVideo = (id) => dispatch => {
  return ApiUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)));
};

export const uploadVideo = (video) => dispatch => {
  return ApiUtil.uploadVideo(video).then(video => dispatch(receiveVideo(video)));
};

export const updateVideo = (video, id) => dispatch => {
  return ApiUtil.updateVideo(video, id).then(video => dispatch(receiveVideo(video)));
};

export const deleteVideo = (id) => dispatch => {
  return ApiUtil.deleteVideo(id).then(id => dispatch(removeVideo(id)));
};

export const addView = (id) => dispatch => {
  return ApiUtil.addView(id).then(video => dispatch(receiveVideo(video)));
};
