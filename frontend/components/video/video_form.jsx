import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);

    let video = props.video;
    video = jQuery.isEmptyObject(props.video) ? {videoFile: "", videoUrl: "", title: "", description: ""} : props.video;
    this.state = Object.assign({}, video, {loading: false});
  }

  componentDidMount() {
    $('html,body').scrollTop(0);
    this.props.resetSidebarState('video_form');
    if (this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }
    this.props.clearErrors();
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
    this.setState({loading: true});

    this.props.submitAction(formData, this.state.id).then((video) => {
      this.setState({loading: false});
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

  resetVideo() {
    this.setState({videoUrl: "", videoFile: "", loading: false});
    this.props.clearErrors();
  }

  render() {
    const isEdit = this.props.formType === 'edit';
    const editReady = this.state.videoUrl && isEdit;

    const videoInfo = editReady ? [[
      'Channel:', this.props.currentUser.username],[
      'Uploaded time:', this.props.video.createdAt],[
      'Duration:', this.props.video.duration],[
      'Views:', this.props.video.viewCount],[
      'Likes:', this.props.video.likes],[
      'Dislikes:', this.props.video.dislikes],[
      'Comments:', 0]
    ] : (null);

    return (
      <div className="video-upload">

          <div className="video-upload-title-buttons-bar">
            <h1>{this.state.title}</h1>

            <div className="upload-btns">
              { this.state.loading && this.props.errors.length === 0 ? <div className="loader"></div>: (null)}
              { isEdit ? <button onClick={() => this.props.history.push(this.props.location.pathname)} className="cancel-btn">Cancel</button> : (null)}
              { isEdit || this.state.videoUrl ? <button onClick={this.handleSubmit.bind(this)} className="upload-btn">{isEdit ? 'Save Changes' : 'Publish'}</button> : (null)}
            </div>

          </div>


        {(!this.state.videoFile && !this.state.videoUrl && !(isEdit)) ?

          (<form className="video-upload-form">

            <input type="file" onChange={(e) => this.previewFile(e)} multiple/>
            <img className="form-upload-image" src="https://s3.amazonaws.com/blutube-dev/images/upload2.png" />
            <p className="p1" >Select files to upload </p>
            <p className="p2">Or drag and drop video files.</p>

          </form>) : (null)}
        {this.state.videoFile || this.state.videoUrl ?
        <div className="video-upload-form-content">

          <div className="video-preview-information-row">
            <video src={this.state.videoUrl}  width="480" height="270" controls />
            {editReady ? (
              <div className="video-upload-form-information-container">

                <h4 className="video-upload-form-information">VIDEO INFORMATION</h4>
                <ul className="video-upload-form-information-list">
                  {videoInfo ? videoInfo.map((item, i) => {
                    return (
                      <li key={i} className="information-item">
                        <div className="information-item-name">{item[0]}</div>
                        <div className="information-item-col">{item[1]}</div>
                      </li>
                    );
                  }) : (null)}
                </ul>

              </div>
            ) : (null)}
          </div>

          <form onSubmit={this.handleSubmit.bind(this)}>

            <div className="video-upload-form-inputs">

              <input className="video-upload-form-input-title" type="text" placeholder="title" onChange={(e) => this.setState({["title"]: e.target.value})} value={this.state.title}/>

              <ul>
                {this.props.errors.map(error => (
                  <li className="video-errors">
                    { error }
                  </li>
                ))}
              </ul>

              { this.props.errors.some(error => error.toLowerCase().includes('video') || error.includes('folder')) ? (

                <div className="error-reset">
                  Was your file type invalid?
                  <button onClick={() => this.resetVideo()}>
                    Try again
                  </button>
                </div>

              ) : null }

              <textarea className="video-upload-form-input-description" type="text" placeholder="description" onChange={(e) => this.setState({["description"]: e.target.value})} value={this.state.description}/>

            </div>

          </form>

        </div>
        : (null)}
      </div>
    );
  }
}

export default withRouter(VideoForm);
