import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <div className="navbar">
    <div>Sidebar Menu Click</div>
    <Link to="/" className="header-link">
      <h1>BluTube</h1>
    </Link>
    <div>Search Barrrrrrrrrrrrrrrrrr</div>
    <div>Upload</div>
    <div>Settings</div>
    {props.signedIn ? (<button className="navbar-signout" onClick={() => props.logout()}>SIGN OUT</button>) : (<Link className="navbar-signin" to='/login'>SIGN IN</Link>)}
  </div>
);

export default NavBar;
