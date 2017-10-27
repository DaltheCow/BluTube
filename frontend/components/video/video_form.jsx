import React from 'react';

class VideoForm extends React.component {
  constructor(props) {
    super(props);

    let video = props.video;
    video = jQuery.isEmptyObject(props.video) ? {videoFile: "", videoUrl: "", title: "", description: ""} : props.video;
    this.state = video;
  }
  componentDidMount() {
    // var preview = document.querySelector('video');
    // var file    = document.querySelector('input[type=file]').files[0];
    // $.ajax("/api/videos/1").then(video => {
    //   preview.src = video.videoUrl;
    // });

  }
}

export default VideoForm;

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
    reader.onloadend = function () {
      this.setState({ videoUrl: reader.result });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    }

    // const videoUrl = window.URL.createObjectURL(file);
    // this.setState({ videoUrl });
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
        <img src="" />

      </div>
    );
  }
}


export default Video;
