import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = (commentInfo) => ({
  type: RECEIVE_COMMENTS,
  comments: commentInfo.comments,
  users: commentInfo.users
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = (videoId) => dispatch => {
  return CommentApiUtil.fetchComments(videoId).then(comments => dispatch(receiveComments(comments)));
};

export const fetchComment = (videoId, id) => dispatch => {
  return CommentApiUtil.fetchComment(videoId, id).then(comment => dispatch(receiveComment(comment)));
};

export const createComment = (videoId, comment) => dispatch => {
  return CommentApiUtil.createComment(videoId, comment).then(
    comment => dispatch(receiveComment(comment))/*,
    errors => dispatch(receiveErrors(errors.responseJSON))*/
  );
};

export const updateComment = (videoId, comment) => dispatch => {
  return CommentApiUtil.updateComment(videoId, comment).then(
    comment => dispatch(receiveComment(comment))/*,
    errors => dispatch(receiveErrors(errors.responseJSON))*/
  );
};

export const deleteComment = (id) => dispatch => {
  return CommentApiUtil.deleteComment(id).then(id => dispatch(removeComment(id)));
};
