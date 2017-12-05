import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchReplies, createReply, deleteReply, updateReply } from '../../actions/reply_actions';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.commentId;
  let comment = state.entities.comments[commentId];
  // debugger
  comment = Object.assign({}, comment, {username: state.entities.users[comment.authorId].username})
  return {
    comment,
    isCurrentUsers: state.session.currentUser.id === comment.authorId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComments: (videoId) => dispatch(fetchComments(videoId)),
    createComment: (videoId, comment) => dispatch(createComment(videoId, comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (videoId, comment) => dispatch(updateComment(videoId, comment)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(CommentIndexItem));
