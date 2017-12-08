import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments, createComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  if (!state.entities.videos[videoId] || !state.entities.videos[videoId].commentIds) {
    return { videoId, comments: null };
  }

  const comments = state.entities.videos[videoId].commentIds.map(commentId => (
    state.entities.comments[commentId]
  ));

  return {
    videoId,
    comments,
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComments: (videoId) => dispatch(fetchComments(videoId)),
    createComment: (videoId, comment) => dispatch(createComment(videoId, comment)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex));
