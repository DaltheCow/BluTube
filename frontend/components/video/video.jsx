import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // var preview = document.querySelector('video');
    // var file    = document.querySelector('input[type=file]').files[0];
    // $.ajax("/api/videos/1").then(video => {
    //   preview.src = video.videoUrl;
    // });
  }

  previewFile() {
    const that = this;
    var preview = document.querySelector('video');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = () => {
      that.setState({ videoUrl: reader.result, imageFile: file});
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    // debugger
  }

  render() {
    return (
      <div>
        <input type="file" onChange={() => this.previewFile()} />
        <br />
        <video src={this.state.videoUrl} height="200" width="200" alt="Image preview..." controls>
          <source src={this.state.videoUrl} type="video/mp4" />
          <source src={this.state.videoUrl} type="video/ogg" />
        </video>
      </div>
    );
  }
}


export default Video;
