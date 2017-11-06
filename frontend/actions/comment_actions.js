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

export const fetchComments = () => dispatch => {
  return CommentApiUtil.fetchComments().then(comments => dispatch(receiveComments(comments)));
};

export const fetchComment = (id) => dispatch => {
  return CommentApiUtil.fetchComment(id).then(comment => dispatch(receiveComment(comment)));
};

export const createComment = (comment) => dispatch => {
  return CommentApiUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateComment = (comment, id) => dispatch => {
  return CommentApiUtil.updateComment(comment, id).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteComment = (id) => dispatch => {
  return CommentApiUtil.deleteComment(id).then(id => dispatch(removeComment(id)));
};
