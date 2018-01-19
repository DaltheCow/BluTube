import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchSubs().then(() => this.setState({ loading: false }));
    } else {
      this.setState({ loading: false });
    }
  }



  render() {
    const { subs, currentUser } = this.props;
    const { loading } = this.state;
    const loader = <div className="loader"></div>;

    return (
      <div className="sidebar sidebar-on sidebar-component">
        { currentUser ? <div className="sidebar-subs-header">SUBSCRIPTIONS</div> : null }
        { loading ? loader : (
          subs.map((sub, i) => (
            <div key={i} className="sidebar-sub">
              <Link className="profile-image" to={`/channel/${sub.id}`}>
                <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
              </Link>
              <div className="sidebar-channel-name">{ sub.username }</div>
            </div>
          ))
        ) }
      </div>
    );
  }
}

export default SideBar;
