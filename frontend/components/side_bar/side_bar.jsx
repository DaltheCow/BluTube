import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="sidebar sidebar-on sidebar-component">
        <ul className="nav-list">
          <li className="side-bar-hamburger sidebar-parent">
            <i className="fa fa-bars"></i>
          </li>
          <li>hi</li>
          <li className="nav-logo">
            <Link to="/" onClick={(e) => {
                e.preventDefault();
                this.props.clearFilter();
                this.props.history.push("/");}}>
              <img src="https://s3.amazonaws.com/blutube-dev/images/play_logo_small.png" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
