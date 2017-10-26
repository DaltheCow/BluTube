import React from 'react';

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

  previewFile(e) {
    var preview = document.querySelector('video');
    var file    = e.currentTarget.files[0];
    var reader  = new FileReader();
    this.setState({videoUrl: window.URL.createObjectURL(file)});
  }

  render() {
    return (
      <div>
        <input type="file" onChange={(e) => this.previewFile(e)} />
        <br />
        <video src={this.state.videoUrl} height="200" width="200" controls />
      </div>
    );
  }
}


export default Video;
