
class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    const body = props.body ? props.body : "";
    this.state = { body };
  }

  render() {
    (
      <form className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
        <Link className="profile-image" to={`/channel/${this.props.currentUser.id}`}>
          <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
        </Link>
        <div className="comment-line">
          <div className="comment-input-container">
            <textarea id="comment-input" placeholder="Add a public comment..." onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()} value={this.state.body} onChange={(e) => this.handleChange(e)}/>
            <div className="comment-underline"></div>
          </div>
          {this.state.btnsOn ?
          <div className="comments-buttons">
            <div className="comments-btn comment-cancel" onClick={() => this.setBtns(false)}>CANCEL</div>
            <div onClick={(e) => this.handleSubmit(e)} className={ "comments-btn comment-submit " + (this.state.body.length > 0 ? "comment-revealed" : "")}>COMMENT</div>
          </div> : null}
        </div>
      </form>
    );
  }

}
