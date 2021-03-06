import React from 'react';
import { Link } from 'react-router-dom';


class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { body: props.comment.body, btnsOn: false };
  }

  componentDidMount() {
    $(this.textInput).focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = this.state.body;
    this.props.updateComment(this.props.videoId, { body }, this.props.comment.id).then(action => {
      this.setState({ body: ""});
      this.props.cancelEdit();
    });
  }

  setBtns(value) {
    const update = { btnsOn: value };
    if (!value) {
      update.body = this.props.comment.body;
      this.props.cancelEdit();
    }
    this.setState(update);
  }

  handleFocus() {
    const props = this.props;
    if (!props.loggedIn) {
      props.history.push("/login");
    }
    this.setBtns(true);
    const comment = this.props.comment;
    const underline = document.getElementById("comment-underline-" + comment.id);
    underline.classList.add("underline-transition");
  }

  handleBlur() {
    const comment = this.props.comment;
    const underline = document.getElementById("comment-underline-" + comment.id);
    underline.classList.remove("underline-transition");
  }

  handleChange(e) {

    this.setState({body: e.target.value});
  }

  render() {

    const comment = this.props.comment;

    return (
      <form className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="comment-line">
          <div className="comment-input-container">
            <textarea ref={(input) => { this.textInput = input; }} className="comment-input" placeholder="Add a public comment..." onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()} value={this.state.body} onChange={(e) => this.handleChange(e)}/>
            <div id={"comment-underline-" + comment.id} className="comment-underline-edit"></div>
          </div>
          {this.state.btnsOn ?
          <div className="comments-buttons">
            <div className="comments-btn comment-cancel" onClick={() => this.setBtns(false)}>CANCEL</div>
            <div onClick={(e) => this.handleSubmit(e)} className={ "comments-btn comment-save " + (this.state.body !== this.props.comment.body ? "comment-save-revealed" : "")}>SAVE</div>
          </div> : null}
        </div>
      </form>
    );
  }

}

export default CommentForm;
