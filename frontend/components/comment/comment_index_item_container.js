import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchReplies, createReply, deleteReply, updateReply } from '../../actions/reply_actions';
import { deleteComment, updateComment } from '../../actions/comment_actions';

import CommentIndexItem from './comment_index_item';

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.commentId;
  let comment = state.entities.comments[commentId];
  // debugger
  comment = Object.assign({}, comment, {username: state.entities.users[comment.authorId].username});
  const videoId = ownProps.match.params.videoId;
  return {
    comment,
    isCurrentUsers: state.session.currentUser && (state.session.currentUser.id === comment.authorId),
    loggedIn: Boolean(state.session.currentUser),
    videoId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (videoId, comment, id) => dispatch(updateComment(videoId, comment, id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem));
