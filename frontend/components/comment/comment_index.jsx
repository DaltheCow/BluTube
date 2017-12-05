import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {body: "", comments: []};
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.videoId !== newProps.match.params.videoId) {
      this.props.fetchComments(this.props.videoId);
    }
  }

  componentDidUpdate() {
    const props = this.props;
    if (props.comments !== null) {
      $("#comment").focus((e) => {

        if (!props.loggedIn) {
          props.history.push("/login");
        }
      });
    }
  }

  handleChange(e) {

    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = this.state.body;
    this.props.createComment(this.props.videoId, { body }).then(action => {
      this.setState({comments: [action.comment, ...this.state.comments]})
    });
  }

  render() {
    if (this.props.comments === null) {
      return (
        <div className="loader"></div>
      );
    }

    const sortedComments = this.props.comments.sort((a, b) => {
        if (a.createdAtInt === b.createdAtInt) return 0;
        if (a.createdAtInt < b.createdAtInt) return 1;
        return -1;
    });
    const comments = this.state.comments.concat(sortedComments);
    return (
      <div className="comments-container">
        {this.props.comments.length} Comments
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input id="comment" type="text" placeholder="Add a public comment..." value={this.state.body} onChange={(e) => this.handleChange(e)}/>
          <div className="comments-btn comment-cancel">CANCEL</div>
          <div className="comments-btn comment-submit">COMMENT</div>
        </form>
        {comments.map((comment, i) => {
          // return <div key={i}>{comment.body}</div>;
            return <CommentIndexItemContainer commentId={comment.id} />
        })}
      </div>
    );
  }
}

export default CommentIndex;
