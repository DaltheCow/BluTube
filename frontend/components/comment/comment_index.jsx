import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {body: "", comments: [], btnsOn: false};
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.videoId !== newProps.match.params.videoId) {
      this.props.fetchComments(this.props.videoId);
    }
  }

  setBtns(value) {
    this.setState({btnsOn : value});
  }

  handleFocus() {
    const props = this.props;
    if (!props.loggedIn) {
      props.history.push("/login");
    }
    this.setBtns(true);
    const underline = document.getElementById("comment-underline");
    $("#comment").focusin(() => {
      underline.classList.add("underline-transition");
    });
    $("#comment").focusout(() => {
      underline.classList.remove("underline-transition");
    });
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
          <div className="comment-input-container">
            <textarea id="comment" placeholder="Add a public comment..." onFocus={() => this.handleFocus()} value={this.state.body} onChange={(e) => this.handleChange(e)}/>
            <div id="comment-underline"></div>
          </div>
          {this.state.btnsOn ?
            <div>
              <div className="comments-btn comment-cancel" onClick={() => this.setBtns(false)}>CANCEL</div>
              <div className="comments-btn comment-submit">COMMENT</div>
            </div> : null}

        </form>
        {comments.map((comment, i) => (
            <CommentIndexItemContainer commentId={comment.id} />
        ))}
      </div>
    );
  }
}

export default CommentIndex;
