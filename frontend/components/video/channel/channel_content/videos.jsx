import React from 'react';
import { Link } from 'react-router-dom';
import { views, duration, whenPosted } from '../../../../util/component_util';


class Videos extends React.Component {

  constructor(props) {
    super(props);

    this.videos = [];
  }

  componentDidMount() {
    $('html,body').scrollTop(0);
    const { fetchChannelVideos, channelId, videos } = this.props;
    fetchChannelVideos(channelId);
  }

  componentWillReceiveProps(newProps) {
      const { videos } = newProps;
      if ((videos.length <= 40 && videos.length > this.videos.length) || (videos.length > 40 && this.videos.length < 40)) {
        this.videos = videos.slice(0, 40).sort((a,b) => b.createdAtInt - a.createdAtInt);
        this.forceUpdate();
      }
    }

  render() {
    const videos = this.videos;

    return (
      <div className="channel-videos-container">
        <div className="video-index-container">

          <div className="video-index">

            <ul className="video-index-list">

              {videos.map((video, i) => {
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
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
