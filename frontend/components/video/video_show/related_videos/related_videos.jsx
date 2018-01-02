import React from 'react';
import shuffle from '../../../../util/shuffle';


class RelatedVideos extends React.Component {
  constructor(props) {
    super(props);

    this.videos = [];
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  componentWillReceiveProps(newProps) {
    if (this.videos.length < 1) {
      this.videos = shuffle(newProps.videos).slice(0,20);
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
    this.videos = [];
    this.props.history.push(`/videos/${id}`);
    $('html,body').scrollTop(0);
  }

  render() {

    const hasVideos = this.props.videos.length > 0;


    return (
      <div className="video-show-related-videos">
        <ul>

          {hasVideos ? this.videos.map((video, i) => {
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

export default RelatedVideos;
