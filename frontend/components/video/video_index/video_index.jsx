import React from 'react';
import { Link } from 'react-router-dom';
import { shuffle, views, duration } from '../../../util/component_util';
import { whenPosted } from '../../../util/component_util';


class VideoIndex extends React.Component {

  constructor(props) {
    super(props);

    this.videos = [];
    this.state = { loading: true };
  }

  componentDidMount() {
    $('html,body').scrollTop(0);
    const { fetchVideos, videos, resetSidebarState } = this.props;

    fetchVideos().then((action) => {
      this.setState({ loading: false });
    });
    resetSidebarState('video_index');
  }

  componentWillReceiveProps(newProps) {
    const { filter, videos } = newProps;

    if (filter.length > 0 && videos.length === 0) {
      newProps.clearFilter();
    }
    if (filter !== this.props.filter) {
      this.videos = videos;
      this.forceUpdate();
    }
    if (!this.state.loading && (videos.length <= 40 && videos.length > this.videos.length) || (videos.length > 40 && this.videos.length < 40)) {
      this.videos = shuffle(videos).slice(0, 40);
      this.forceUpdate();
    }
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
                      {duration(video.duration)}
                    </div>
                  </div>

                  <div className="index-title">{video.title}</div>
                  <div className="index-channel">{video.author.username}</div>

                  <div className="index-view-time">
                    <div className="index-viewcount">{views(video.viewCount)} views</div><span className="before-target"></span>
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
