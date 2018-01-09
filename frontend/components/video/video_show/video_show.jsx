import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import shuffle from '../../../util/shuffle';
import CommentIndexContainer from '../../comment/comment_index_container';
import RelatedVideosContainer from './related_videos/related_videos_container';
import VideoElement from './video_element';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.updateWindowSize = () =>  this.updateWindowSize();
    this.state = { isColumnView: window.innerWidth <= 1000 };
  }

  componentDidMount() {
    this.props.addView(this.props.match.params.videoId);
    window.addEventListener("resize", this.updateWindowSize);
  }

  updateWindowSize() {
    this.setState({isColumnView: window.innerWidth <= 1000});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.addView(newProps.video.id);
    }
  }

  handleLike(isLike) {
    if (!this.props.currentUser || !this.props.video) {
      return;
    }

    if (this.props.video.currentUsersLike.like_value === 'N/A') {
      this.props.createLike(this.props.video.id, {like_value: isLike});
    } else if (isLike === this.props.video.currentUsersLike.like_value) {
      const likeId = this.props.video.currentUsersLike.id;
      this.props.deleteLike(likeId);
    } else {
      this.props.updateLike(this.props.video.id, this.props.currentUser.id, {like_value: isLike});
    }
  }

  views(count) {
    return (
      count < 1000 ? count : (
        count < 999999 ? Math.floor((count/1000)).toString() + "K" : (
          Math.floor((count/1000000)).toString() + "M"
        )
      )
    );
  }

  handleSub(isSubbing) {
    if (!this.props.currentUser) {
      this.props.history.push(`/login`);
    }
    if (isSubbing) {
      this.props.createSub(this.props.video.author.id);
    } else {
      this.props.deleteSub(this.props.sub.id);
    }
  }

  render() {
    const hasVideo = Boolean(this.props.video);
    const vid = this.props.video;
    const subCount = this.props.subCount;

    return (
      <div className="video-show">
        <div className="video-show-container">
          <div className="video-show-content">

            <VideoElement addView={ this.props.addView } fetchVideo={ this.props.fetchVideo } video={ this.props.video } />

            { vid ? (<div className="video-show-vid-description">

              <div className="video-show-vid-title">
                {vid.title}
              </div>

              <div className="video-show-views-likes">

                <div className="views">
                  {vid.viewCount} views
                </div>

                <div className="likes-dislikes">

                  <div className="likes">
                    <i onClick={() => this.handleLike(true)} className={`fa fa-thumbs-up ${vid && vid.currentUsersLike && vid.currentUsersLike.like_value === true ? 'selected-thumb' : ''}`}></i>
                      <span>{this.views(vid.likes ? vid.likes : 0)}</span>
                  </div>

                  <div className="dislikes">
                    <i onClick={() => this.handleLike(false)} className={`fa fa-thumbs-down ${vid && vid.currentUsersLike && vid.currentUsersLike.like_value === false ? 'selected-thumb' : ''}`}></i>
                    <span>{this.views(vid.dislikes ? vid.dislikes : 0)}</span>
                  </div>

                </div>
              </div>
              <div className="channel-info">

                <div className="above-description">

                  <div className="logo-side-flex">

                    <Link className="profile-image" to={`/channel/${vid.author.id}`}>
                      <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
                    </Link>

                    <div className="channel-name-vid-upload-date">
                      <Link className="channel-name" to={`/channel/${vid.author.id}`}>{vid.author.username}</Link>
                      <div className="upload-date">Published on {vid.createdAt}</div>
                    </div>

                  </div>
                  { !this.props.currentUser || !this.props.currentUser.videoIds.includes(vid.id) ?

                      this.props.sub ? (
                        <button onClick={() => this.handleSub(false)} className="unsubscribe">
                          <span className="sub">SUBSCRIBED</span>
                          <span className="subcount">{subCount}</span>
                        </button>
                      ) : (
                        <button onClick={() => this.handleSub(true)} className="subscribe">
                          <span className="sub">SUBSCRIBE</span>
                          <span className="subcount">{subCount}</span>
                        </button>)
                     : (
                      <Link to={`/upload/${vid.id}/edit`} className="edit">
                        EDIT VIDEO
                      </Link>
                    )}

                </div>

                <div className="description">
                  { vid.description && vid.description.split("\r").map((row, i) => (
                    <div key={i} style={{display: 'flex', flexDirection: 'column'}}>{ row }</div>
                  )) }
                </div>

              </div>

            </div>) : (null)}

            {!this.state.isColumnView ? (<div className="comments">
              <CommentIndexContainer />
            </div>) : null}

          </div>
          <RelatedVideosContainer />

          {this.state.isColumnView ? (<div className="comments">
            < CommentIndexContainer />
          </div>) : null}

        </div>
      </div>
    );
  }
}
export default withRouter(VideoShow);
