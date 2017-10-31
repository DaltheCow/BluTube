import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const videos = this.props.videos;

    return(
      <div>
        <ul>
        {videos ? videos.map((video, i) => {
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
    );
  }
}

export default VideoIndex;
