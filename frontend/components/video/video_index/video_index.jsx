import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {videos: []};
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.filter.length > 0 && newProps.videos.length === 0) {
      newProps.clearFilter();
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

  handleFilter(filter) {
    this.props.receiveFilter(filter);
  }

  render() {
    const videos = this.props.videos;

    return(
      <div className="video-and-filter">

        <div className="video-filter">
          <button onClick={() => this.handleFilter("viewCount")}>Most Viewed</button><span className="none">|</span>
          <button onClick={() => this.handleFilter("duration")}>Longest</button><span className="none">|</span>
          <button onClick={() => this.handleFilter("likes")}>likes</button><span className="none">|</span>
          <button onClick={() => this.handleFilter("createdAtInt")}>newest</button>
        </div>

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
                    <div>{this.whenPosted(video.createdAtInt)}</div>
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
