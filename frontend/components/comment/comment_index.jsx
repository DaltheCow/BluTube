import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {body: "", btnsOn: false};
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.videoId !== newProps.match.params.videoId) {
      this.setState({btsnOn: false, body: ""});
      this.props.fetchComments(this.props.videoId);
    }
  }

  setBtns(value) {
    const update = { btnsOn: value };
    if (!value) {
      update.body = "";
    }
    this.setState(update);
  }

  handleFocus() {
    const props = this.props;
    if (!props.loggedIn) {
      props.history.push("/login");
    }
    this.setBtns(true);
    const underline = document.querySelector(".comment-underline");
    underline.classList.add("underline-transition");
  }

  handleBlur() {
    const underline = document.querySelector(".comment-underline");
    underline.classList.remove("underline-transition");
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = this.state.body;
    this.props.createComment(this.props.videoId, { body }).then(action => {
      // this.setState({comments: [action.comment, ...this.state.comments]});
      this.setState({body: ""});
    });
  }

  render() {
    if (this.props.comments === null) {
      return (
        <div className="loader"></div>
      );
    }

    const comments = this.props.comments.slice().sort((a, b) => {
      if (a.createdAtInt === b.createdAtInt) return 0;
      if (a.createdAtInt < b.createdAtInt) return 1;
      return -1;
    });

    // const comments = this.state.comments.concat(sortedComments);
    const len = this.props.comments.length;
    return (
      <div className="comments-container">
        <div className="comment-form-container">
          <div className="comments-length">{len} Comment{len === 1 ? "" : "s"}</div>
          <div className="comment-form-image-and-form">
            <Link className="profile-image" to={this.props.currentUser ? `/channel/${this.props.currentUser.id}` : '/login'}>
              <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
            </Link>
            <form className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="comment-line">
                  <div className="comment-input-container">
                    <textarea className="comment-input" placeholder="Add a public comment..." onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()} value={this.state.body} onChange={(e) => this.handleChange(e)}/>
                    <div className="comment-underline"></div>
                  </div>
                  {this.state.btnsOn ?
                  <div className="comments-buttons">
                    <div className="comments-btn comment-cancel" onClick={() => this.setBtns(false)}>CANCEL</div>
                    <div onClick={(e) => this.handleSubmit(e)} className={ "comments-btn comment-submit " + (this.state.body.length > 0 ? "comment-revealed" : "")}>COMMENT</div>
                  </div> : null}
              </div>

            </form>
          </div>
        </div>
        {comments.map((comment, i) => (
            <CommentIndexItemContainer key={i} commentId={comment.id} />
        ))}
      </div>
    );
  }
}

export default CommentIndex;
