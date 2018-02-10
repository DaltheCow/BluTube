import React from 'react';
import VideoElement from '../../video_show/video_element';
import { whenPosted, insertCommas } from '../../../../util/component_util';
import { Link } from 'react-router-dom';


class Home extends React.Component {



  render() {
    const { video, videoId, addView } = this.props;
    return (
      <div className="home-container">
        <div className="home-video-container">
          { isNaN(videoId) ? "No video available" : <VideoElement addView={ () => addView(videoId) } fetchVideo={ () => this.props.fetchVideo(videoId) } video={ video } /> }
        </div>
        { !video ? null : (
          <div className="home-video-description">
            <div className="home-title">
              <Link to={`/videos/${video.id}`}>{ video.title }</Link>
            </div>
            <div className="home-views-post-time">
              <div className="home-viewCount">{ insertCommas(video.viewCount) + " views" }</div>
              <span className="before-target"></span>
              <div className="home-post-time">{ whenPosted(video.createdAtInt) }</div>
            </div>
            <div className="home-description-container">
              <div className="description">
                { video.description && video.description.split("\r").map((row, i) => (
                  <div key={i} style={{display: 'flex', flexDirection: 'column'}}>{ row }</div>
                )) }
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
