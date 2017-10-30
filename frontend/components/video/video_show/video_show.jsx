import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.fetchVideos();
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(newProps) {
    if (newProps.video && newProps.video.videoUrl && newProps.video !== this.props.video){
      $("video").attr("src", newProps.video.videoUrl);
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

  duration(time) {
    const secs = time % 60;
    const mins = Math.floor(time / 60) % 60;
    const hrs = Math.floor(time / 3600);
    const seconds = `:${secs < 10 ? '0' : ''}${secs}`;
    const hours = `${hrs > 0 ? hrs : ''}${hrs > 0 ? ':' : ''}`;
    const minutes = `${hrs > 0 && mins < 10 ? '0' : ''}${mins}`;
    return hours + minutes + seconds;
  }

  handleRedirect(id) {
    this.props.fetchVideo(id);
    this.props.fetchVideos();
    this.props.history.push(`/videos/${id}`);
  }

  render() {
    const hasVideo = Boolean(this.props.video);
    const hasVideos = Boolean(this.props.videos);
    return (
      <div className="video-show">
        <div className="video-show-container">
          <div className="video-show-content">
            <video width="596" height="360" src={hasVideo ? this.props.video.videoUrl : ""} autoPlay controls/>
            <div>Description</div>
            <div>Comments</div>
          </div>
          <div className="video-show-related-videos">
            <ul>
              {hasVideos ? this.props.videos.map((video, i) => {
                return (
                  <li key={i} className="related-vid-index-item">
                    <button className="related-vid-container" onClick={() => this.handleRedirect(video.id)}>
                      <div className="related-vid-img">
                        <img className="related-vid-thumbnail" src={video.thumbnailUrl} />
                        <div className="related-vid-duration">
                          {this.duration(video.duration)}
                        </div>
                      </div>
                      <div className="related-vid-info">
                        <div className="related-vid-title">{video.title}</div>
                        <div className="related-vid-channel">{video.author.username}</div>
                        <div className="related-vid-viewcount">{this.views(video.viewCount)} views</div>
                      </div>
                    </button>
                  </li>
                );
              }) : (null)}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
export default withRouter(VideoShow);
