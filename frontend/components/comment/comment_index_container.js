import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  return {
    videoId,
    comments: state.entities.videos[videoId].commentIds.map(commentId => (
      state.entities.comments[commentId]
    ))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComments: (videoId) => dispatch(fetchComments(videoId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex));
