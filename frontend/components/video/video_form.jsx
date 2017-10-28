import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);

    let video = props.video;
    video = jQuery.isEmptyObject(props.video) ? {videoFile: "", videoUrl: "", title: "", description: ""} : props.video;
    this.state = video;
  }

  componentDidMount() {
    if (this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }

      var dragTimer;
      $('.video-upload-form').on("dragover",function (e) {
        const dt = e.originalEvent.dataTransfer;
        if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files'))) {
          $('.video-upload-form .p2').addClass("video-form-file-hover-change");
        }
      });

      $(document).on('dragleave', function(e) {
        dragTimer = window.setTimeout(function() {
          $('.p2').removeClass("video-form-file-hover-change");
        }, 25);
      });

  }

  componentWillUnmount() {
    $('.video-upload-form').off("dragover");
    $(document).off('dragleave');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.video.id) {
      // const preview = document.querySelector('video');
      // const file    = document.querySelector('input[type=file]').files[0];
      // preview.src = newProps.;
      this.setState({videoUrl: newProps.video.videoUrl, title: newProps.video.title, description: newProps.video.description, id: newProps.video.id});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "") return;
    const formData = new FormData();
    formData.append('video[description]', this.state.description);
    formData.append('video[title]', this.state.title);
    if (this.props.formType === 'add') {
      if (this.state.videoFile == "") return;
      formData.append('video[video]', this.state.videoFile);
    }
    debugger
    this.props.submitAction(formData, this.state.id).then((video) => {
      this.props.history.push(`/videos/${video.video.id}`);
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
        {(!this.state.videoFile && !this.state.videoUrl && !(this.props.formType === 'edit')) ?

          (<form className="video-upload-form">

            <input type="file" onChange={(e) => this.previewFile(e)} multiple/>
            <img className="form-upload-image" src="https://s3.amazonaws.com/blutube-dev/images/upload2.png" />
            <p className="p1" >Select files to upload </p>
            <p className="p2">Or drag and drop video files.</p>

          </form>) : (null)}
        {this.state.videoFile || this.state.videoUrl ?
        <div>

          <video src={this.state.videoUrl}  width="480" height="270" />

          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>

              <input className="video-upload-form-input-title" type="text" placeholder="title" onChange={(e) => this.setState({["title"]: e.target.value})} value={this.state.title}/>
              <textarea className="video-upload-form-input-description" type="text" placeholder="description" onChange={(e) => this.setState({["description"]: e.target.value})} value={this.state.description}/>
              <button>Upload</button>

            </div>

          </form>

        </div>
        : (null)}
      </div>
    );
  }
}

export default withRouter(VideoForm);
