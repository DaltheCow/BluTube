import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

  whenPosted(time) {
    const lapsed = Date.now() - time;
    const times = [60000, 60, 24, 7, 4, 12];
    const timeAmounts = [1,2,3,4,5,6].
      map(int => Math.floor(lapsed / times.slice(0,int).reduce((tot, time) => tot * time)));
    const index = [timeAmounts[0], timeAmounts[1], timeAmounts[2], timeAmounts[3], timeAmounts[4], timeAmounts[5]].indexOf(0);
    if (timeAmounts[5] > 0) {
      return timeAmounts[5] + ` year${timeAmounts[5] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[4] > 0) {
      return timeAmounts[4] + ` month${timeAmounts[4] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[3] > 0) {
      return timeAmounts[3] + ` week${timeAmounts[3] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[2] > 0) {
      return timeAmounts[2] + ` day${timeAmounts[2] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[1] > 0) {
      return timeAmounts[1] + ` hour${timeAmounts[1] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[0] > 0) {
      return timeAmounts[0] + ` minute${timeAmounts[0] === 1 ? '' : 's'} ago`;
    }
    return "less than 1 minute ago";
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
                    <div>{this.whenPosted(video.createdAtInt)}</div>
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
