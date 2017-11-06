import { connect } from 'react-redux';
import { fetchComment } from '../../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  // videoId
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComment: (id) => dispatch(fetchComment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
