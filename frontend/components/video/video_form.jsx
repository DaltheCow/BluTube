import React from 'react';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);

    let video = props.video;
    video = jQuery.isEmptyObject(props.video) ? {videoFile: "", videoUrl: "", title: "", description: ""} : props.video;
    this.state = video;
  }

  componentDidMount() {
    // if (this.props.match.params.videoId) {
    //   this.props.fetchVideo(this.props.match.params.videoId).then(() => {
    //     const preview = document.querySelector('video');
    //     const file    = document.querySelector('input[type=file]').files[0];
    //     preview.src = this.state.videoUrl;
    //   });
    // }
    $(document).ready(function(){
      $('.video-upload-form').change(function () {
        console.log(this.files);
        $('form p').text(this.files.length + " file(s) selected");
      });
    });

    $(document).ready(function(){
      var dragTimer;
      $('.video-upload-form').on("dragover",function (e) {
        // if (this.files.length > 0) {
        //   this.addClass("video-form-file-hover-change")
        // }
        if (e.originalEvent.dataTransfer.types.indexOf('Files') >= 0) {
          console.log(this)
          console.log(e);
        }

        // console.log(this.files);
        // $('form p').text(this.files.length + " file(s) selected");
      });

      $(document).on('dragleave', function(e) {
        dragTimer = window.setTimeout(function() {

        }, 25);
      });

    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "" || this.state.videoFile === "") return;
    const formData = new FormData();
    formData.append('video[description]', this.state.description);
    formData.append('video[title]', this.state.title);
    if (this.formType === 'add') {
      formData.append('video[video]', this.state.videoFile);
    }
    this.props.submitAction(formData).then(() => {
      this.props.history.push("/");
    });
  }

  previewFile(e) {
    var preview = document.querySelector('video');
    var file    = e.currentTarget.files[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
      this.setState({ videoFile: reader.result });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    }

    this.setState({ videoUrl: window.URL.createObjectURL(file)});
  }

  render() {

    return (
      <div className="video-upload">
        {!this.state.videoFile && !this.state.videoUrl ?
          (<form className="video-upload-form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="test-form-input" type="file" onChange={(e) => this.previewFile(e)} multiple/>
            <img className="form-upload-image" src="https://s3.amazonaws.com/blutube-dev/images/upload2.png" />
            <p className="p1" >Select files to upload </p>
            <p className="p2">Or drag and drop video files.</p>
          </form>) : (null)}
        {this.state.videoFile || this.state.videoUrl ?
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input className="video-input-title" type="text" placeholder="title" onChange={(e) => this.setState({["title"]: e.target.value})} />
              <textarea className="video-input-title"type="text" placeholder="description" onChange={(e) => this.setState({["description"]: e.target.value})} />
              <button>Upload</button>
            </div>
          </form>

          <video src={this.state.videoUrl} height="200" width="200" controls />
        </div>
        : (null)}
      </div>
    );
  }
}

export default VideoForm;
