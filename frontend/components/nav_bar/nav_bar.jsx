import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) => (
  <div className="navbar">
    <ul className="nav-list">
      <li>Sidebar Menu Click</li>
      <li>
        <Link to="/" className="header-link">
          <h1>BluTube</h1>
        </Link>
      </li>
      <li>
        <div>Search Barrrrrrrrrrrrrrrrrr</div>
      </li>
      <li>
        <Link className="nav-upload" to="/upload">Upload</Link>
      </li>
      <li>
        Settings
      </li>
      <li>
        {props.signedIn ? (<button className="navbar-signout" onClick={() => props.logout()}>SIGN OUT</button>) : (<Link className="navbar-signin" to='/login'>SIGN IN</Link>)}
      </li>
    </ul>
  </div>
);

export default NavBar;
