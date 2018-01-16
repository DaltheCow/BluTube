import React from 'react';
import { connect } from 'react-redux';
import { clearFilter } from '../actions/ui_actions';
import { sidebarToggle } from '../actions/side_bar_actions';
import { withRouter, Link } from 'react-router-dom';

const sidebarClick = (props) => {
  const windowWidth = window.innerWidth < 1277 ? 'overlay' : 'flex';
  props.sidebarToggle(windowWidth);
};

const Header = (props) => {

  return (
    <div className="header-main">
      <li className="side-bar-hamburger">
        <i className="fa fa-bars" onClick={() => sidebarClick(props)}></i>
      </li>
      <li className="nav-logo">
        <Link to="/" onClick={(e) => {
            e.preventDefault();
            props.clearFilter();
            props.history.push("/");}}>
          <img src="https://s3.amazonaws.com/blutube-dev/images/play_logo_small.png" />
        </Link>
      </li>
      <li className="nav-logo-text">
        <Link to="/" onClick={(e) => {
            e.preventDefault();
            props.clearFilter();
            props.history.push("/");}}>
          <span>Bl<div className="ut">uT</div>ube</span>
        </Link>
      </li>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
});

const mapDispatchToProps = (dispatch) => ({
  clearFilter: () => dispatch(clearFilter()),
  sidebarToggle: (windowWidth) => dispatch(sidebarToggle(windowWidth)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
