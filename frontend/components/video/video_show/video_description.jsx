import React from 'react';

const Description = (props) => {
  const vid =
return (
  <div className="video-show-vid-description">

    <div className="video-show-vid-title">
      {vid.title}
    </div>

    <div className="video-show-views-likes">

      <div className="views">
        {vid.viewCount} views
      </div>

      <div className="likes-dislikes">

        <div className="likes">
          <i onClick={() => this.handleLike(true)} className={`fa fa-thumbs-up ${vid && vid.currentUsersLike && vid.currentUsersLike.like_value === true ? 'selected-thumb' : ''}`}></i>
            <span>{this.views(vid.likes)}</span>
        </div>

        <div className="dislikes">
          <i onClick={() => this.handleLike(false)} className={`fa fa-thumbs-down ${vid && vid.currentUsersLike && vid.currentUsersLike.like_value === false ? 'selected-thumb' : ''}`}></i>
          <span>{this.views(vid.dislikes)}</span>
        </div>

      </div>
    </div>
    <div className="channel-info">

      <div className="above-description">

        <div className="logo-side-flex">

          <Link className="profile-image" to={`/channel/${vid.author.id}`}>
            <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
          </Link>

          <div className="channel-name-vid-upload-date">
            <Link className="channel-name" to={`/channel/${vid.author.id}`}>{vid.author.username}</Link>
            <div className="upload-date">Published on {vid.createdAt}</div>
          </div>

        </div>
        { !this.props.currentUser.videoIds.includes(vid.id) ?
          (
            <button className="subscribe">
              <span className="sub">SUBSCRIBE </span>
              <span className="subcount"> 0</span>
            </button>
          ) : (
            <Link to={`/upload/${vid.id}/edit`} className="edit">
              EDIT VIDEO
            </Link>
          )}

      </div>

      <div className="description">
        { console.log(vid) || vid.description}
      </div>

    </div>

  </div>
  );

};
