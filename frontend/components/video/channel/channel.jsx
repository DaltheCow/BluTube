import React from 'react';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: 'home' };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidReceiveProps(newProps) {

  }

  render() {
    const { channel, videos } = this.props;
    return (
      <div className="channel-container">
        { channel ? channel.username : null }
      </div>
    );
  }
}

export default Channel;
