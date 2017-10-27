import React from 'react';

import { uploadVideo } from '../../util/video_api_util';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videoUrl: ""};
  }

  componentDidMount() {
    // var preview = document.querySelector('video');
    // var file    = document.querySelector('input[type=file]').files[0];
    // $.ajax("/api/videos/1").then(video => {
    //   preview.src = video.videoUrl;
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[description]', this.state.description);
    formData.append('video[title]', this.state.title);
    formData.append('video[video]', this.state.videoUrl);
    uploadVideo(formData);
  }

  previewFile(e) {
    var preview = document.querySelector('video');
    var file    = e.currentTarget.files[0];
    var reader  = new FileReader();
    const videoUrl = window.URL.createObjectURL(file);
    this.setState({ videoUrl });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="file" onChange={(e) => this.previewFile(e)} />
          <input type="text" onChange={(e) => this.setState({["title"]: e.target.value})} />
          <input type="text" onChange={(e) => this.setState({["description"]: e.target.value})} />
          <button>Submit</button>
        </form>
        <br />
        <video src={this.state.videoUrl} height="200" width="200" controls />
      </div>
    );
  }
}


export default Video;
