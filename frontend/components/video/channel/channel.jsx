import React from 'react';

import insertCommas from '../../../util/insertCommas';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: 'home' };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidReceiveProps(newProps) {
    //compare userIds
  }

  render() {
    const { channel, videos } = this.props;
    // debugger
    return (
      <div className="channel-container">
        <div className="channel-banner-container">
          <div className="channel-banner">{ channel ? channel.username : null }</div>
        </div>
        <div className="channel-header">
          <div className="profile-image">
            <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
          </div>
          <div>
            <div>{ channel ? channel.username : null }</div>
            <div>{ channel ? insertCommas(channel.subCount) : null }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Channel;
