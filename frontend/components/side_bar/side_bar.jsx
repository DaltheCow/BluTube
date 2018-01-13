import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchSubs().then(() => this.setState({ loading: false }));
  }

  render() {
    const { subs } = this.props;
    const { loading } = this.state;
    const loader = <div className="loader"></div>;
    return (
      <div className="sidebar sidebar-on sidebar-component">
        <div className="sidebar-subs-header">SUBSCRIPTIONS</div>
        { loading ? loader : (
          subs.map(sub => (
            <div className="sidebar-sub">
              <div className="sidebar-sub-channel-name"></div>
              <div className="sidebar-sub-channel-name"></div>
            </div>
          ))
        ) }
      </div>
    );
  }
}

export default SideBar;
