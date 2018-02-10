import React from 'react';
import { Link } from 'react-router-dom';
import { shuffle } from '../../../util/component_util';
import { whenPosted } from '../../../util/component_util';


class VideoIndex extends React.Component {

  constructor(props) {
    super(props);

    this.videos = [];
  }

  componentDidMount() {
    $('html,body').scrollTop(0);
    this.props.fetchVideos();
    this.props.componentMount('video_index');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.filter.length > 0 && newProps.videos.length === 0) {
      newProps.clearFilter();
    }
    if (newProps.filter !== this.props.filter) {
      this.videos = newProps.videos;
      this.forceUpdate();
    }
    if (this.videos.length < 1 && newProps.videos.length > 1) {
      this.videos = shuffle(newProps.videos).slice(0, 40);
      this.forceUpdate();
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

  render() {
    const videos = this.videos;

    return(
      <div className="video-index-container">

        <div className="video-index">

          <div className="video-index-header">Look at All of These Videos!</div>
          <ul className="video-index-list">

          {videos ? videos.map((video, i) => {
            return (
              <li key={i} className="index-index-item">

                <Link to={`/videos/${video.id}`} className="index-link">

                  <div className="index-img">
                    <img className="index-thumbnail" src={video.thumbnailUrl} />
                    <div className="index-duration">
                      {this.duration(video.duration)}
                    </div>
                  </div>

                  <div className="index-title">{video.title}</div>
                  <div className="index-channel">{video.author.username}</div>

                  <div className="index-view-time">
                    <div className="index-viewcount">{this.views(video.viewCount)} views</div><span className="before-target"></span>
                    <div>{whenPosted(video.createdAtInt)}</div>
                  </div>

                </Link>

              </li>
            );
          }) : (null)}
          </ul>
        </div>
      </div>
    );
  }
}

export default VideoIndex;
