import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { whenPosted } from '../../util/component_util';


const mapStateToProps = (state) => ({
  videos: state.search.Video.slice(0,50)
});

const mapDispatchToProps = (dispatch) => ({

});

class Results extends React.Component {


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
    return (
      <ul className="video-search">
        {this.props.videos.map((video, i) => {
          return (



            <li key={i} className="search-index-item">

              <Link to={`/videos/${video.id}`} className="index-link">

                <div className="index-img">
                  <img className="index-thumbnail search-thumbnail" src={video.thumbnailUrl} />
                  <div className="index-duration">
                    {this.duration(video.duration)}
                  </div>
                </div>

                <div className="search-info">
                  <div className="index-title search-title">{video.title}</div>
                  <div className="index-view-time search-info-minus-desc">
                    <div className="index-channel search-channel">{video.author.username}</div>
                    <div className="index-viewcount">{this.views(video.viewCount)} views</div><span className="before-target"></span>
                    <div>{whenPosted(video.createdAtInt)}</div>
                  </div>

                  <div className="search-video-description">
                    {video.description.length > 125 ? video.description.slice(0,125) + "..." : video.description}
                  </div>

                </div>
              </Link>

            </li>


          );
        })}
      </ul>
    );
  }
}

export default connect(mapStateToProps, null)(Results);
