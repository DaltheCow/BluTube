import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => (
  <div className="navbar">
    <ul className="nav-list">
      <li className="side-bar-hamburger">
        <i className="fa fa-bars"></i>
      </li>
      <li className="nav-logo">
        <Link to="/">
          <img src="https://s3.amazonaws.com/blutube-dev/images/play_logo_small.png" />
        </Link>
      </li>
      <li className="nav-logo-text">
        <Link to="/">
          <span>Bl<div className="ut">uT</div>ube</span>
        </Link>
      </li>
      <li className="nav-search">
        <input type="text" placeholder="Search" className="nav-search-input"/><i className="fa fa-search"></i>
      </li>
      <li className="nav-upload" >
        <Link to="/upload"><i className="fa fa-upload"></i></Link>
      </li>
      <li className="nav-sign-in">
        {props.signedIn ? (<button className="nav-sign-out" onClick={() => props.logout()}>SIGN OUT</button>) : (<Link className="nav-sign-in-link" to='/login'>SIGN IN</Link>)}
      </li>
    </ul>
  </div>
);

export default NavBar;
