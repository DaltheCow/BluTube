import React from 'react';
import { withRouter } from 'react-router-dom';

const togglePlay = (video) => {
  return video.paused ? video.play() : video.pause();
};

class VideoElement extends React.Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.setVideoListeners();
  }

  setVideoListeners() {
    const { video, videoContainer } = this;

    $(video).on('click', () => togglePlay(video));
    $(videoContainer).bind('keydown', e => {
      switch(e.which) {
        case 32:
        case 75:
        togglePlay(video);
        e.preventDefault();
        break;
        case 74:
        video.currentTime = video.currentTime - 10;
        e.preventDefault();
        break;
        case 76:
        video.currentTime = video.currentTime + 10;
        e.preventDefault();
        break;
        case 37:
        video.currentTime = video.currentTime - 5;
        e.preventDefault();
        break;
        case 39:
        video.currentTime = video.currentTime + 5;
        e.preventDefault();
        break;
      }
    });
  }

  componentWillUnmount() {
    $(this.videoContainer).off('keydown');
    $(this.video).off('click');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.video && this.props.video && newProps.video.videoUrl && newProps.video.id !== this.props.video.id){
      $(this.video).attr("src", newProps.video.videoUrl);
    }
  }

  render() {
    const vid = this.props.video;

    return (
      <div ref={videoContainer => (this.videoContainer = videoContainer)} className="video-video-container" tabIndex="1">
        <video ref={video => (this.video = video)} width="596" height="360" src={vid ? vid.videoUrl : ""} autoPlay controls/>
      </div>
    );
  }
}

export default withRouter(VideoElement);
