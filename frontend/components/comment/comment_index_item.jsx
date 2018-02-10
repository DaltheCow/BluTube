import React from 'react';

import { Link } from 'react-router-dom';
import CommentForm from './comment_form';
import { whenPosted } from '../../util/component_util';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {edit: false, menu: false, listenerReady: false};

    this.modalClick = this.modalClick.bind(this);

  }

  modalClick() {
    if (this.state.menu && this.state.listenerReady) {
      this.setState({menu: false});
      $('body').removeClass("block-scroll");

    }
    this.setState({listenerReady: true});
  }

  componentDidMount() {
    document.addEventListener("click", this.modalClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.modalClick);
  }

  handleMenuClick() {
    $('body').toggleClass("block-scroll");
    this.setState({ menu: !this.state.menu });
    this.setState({ listenerReady: false });
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  cancelEdit() {
    this.setState({edit: false});
  }

  render() {

    const comment = this.props.comment;
    return (
      <div className="comment-item">
        <Link className="profile-image" to={`/channel/${comment.authorId}`}>
          <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
        </Link>
        {this.state.edit ?
          (
            <CommentForm comment={comment} updateComment={this.props.updateComment} loggedIn={this.props.loggedIn} cancelEdit={() => this.cancelEdit()} videoId={this.props.videoId}/>
          ) :
          (
            <div className="comment-info-and-menu">
              <div className="comment-info">
                <div className="comment-username-line">
                  <div className="comment-username">{comment.username}</div>
                  <div className="comment-post-time">{whenPosted(comment.createdAtInt)}</div>
                </div>
                <div className="comment-body">{comment.body}</div>
              </div>
              <div className="comment-menu">
                <div onClick={() => this.handleMenuClick()} className="comment-menu-button">
                  {this.props.isCurrentUsers ? <i className={"fa fa-ellipsis-v " + (this.state.menu ? "reveal-menu2" : "")}></i> : null}
                </div>
                {this.state.menu ? (
                  <div className="comment-menu-options">
                    <div className="comment-menu-option-btn" onClick={ () => this.handleEdit() }>Edit</div>
                    <div className="comment-menu-option-btn" onClick={ () => this.props.deleteComment(comment.id) }>Delete</div>
                  </div>
                ) : null}
              </div>
            </div>
          )
        }
        <div></div>
      </div>
    );
  }
}

export default CommentIndexItem;
