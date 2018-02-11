import React from 'react';
import { insertCommas } from '../../../util/component_util';
import Subscribe from './subscribe_button';
import ChannelContent from './channel_content/channel_content';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: 'home' };
  }

  componentDidMount() {
    $('html,body').scrollTop(0);
    this.props.fetchUser(this.props.userId);
    this.props.resetSidebarState('channel');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userId && newProps.userId !== this.props.userId) {
      newProps.fetchUser(newProps.userId);
    }
  }

  render() {
    const { channel, videos } = this.props;
    return (
      <div className="channel-container">
        <div className="channel-banner-container">
          <div className="channel-banner">{ channel ? channel.username : null }</div>
        </div>
        <div className="channel-header">
          <div className="profile-image">
            <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
          </div>
          <div className="channel-channel-info">
            <div className="channel-channel-name">{ channel ? channel.username : null }</div>
            <div className="channel-subscriber-count">{ channel ? insertCommas(channel.subCount) : null } subscribers</div>
          </div>
          <div className="channel-subscribe-button-container">
            <Subscribe subCount={ channel ? channel.subCount : null }/>
          </div>
        </div>
        <ChannelContent />
      </div>
    );
  }
}

export default Channel;
