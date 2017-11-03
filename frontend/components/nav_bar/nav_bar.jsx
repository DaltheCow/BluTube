import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {search: ""};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendSearch(this.state.search).then(() => {
      this.props.history.push("/results");
      this.setState({search: ""});
    });
  }

  handleInput(e) {
    this.setState({ search: e.currentTarget.value });
  }

  render() {
    return (
       <div className="navbar">
        <ul className="nav-list">
          <li className="side-bar-hamburger">
            <i className="fa fa-bars"></i>
          </li>
          <li className="nav-logo">
            <Link to="/" onClick={(e) => {
                e.preventDefault();
                this.props.clearFilter();
                this.props.history.push("/");}}>
              <img src="https://s3.amazonaws.com/blutube-dev/images/play_logo_small.png" />
            </Link>
          </li>
          <li className="nav-logo-text">
            <Link to="/" onClick={(e) => {
                e.preventDefault();
                this.props.clearFilter();
                this.props.history.push("/");}}>
              <span>Bl<div className="ut">uT</div>ube</span>
            </Link>
          </li>
          <form className="nav-search" onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" placeholder="Search" onChange={(e) => this.handleInput(e)} className="nav-search-input" value={this.state.search}/><i className="fa fa-search"></i>
          </form>
          <li className="nav-upload" >
            <Link to="/upload"><i className="fa fa-upload"></i></Link>
          </li>
          <li className="nav-sign-in">
            {this.props.signedIn ? (<button className="nav-sign-out" onClick={() => this.props.logout()}>SIGN OUT</button>) : (<Link className="nav-sign-in-link" to='/login'>SIGN IN</Link>)}
          </li>
        </ul>
      </div>
    );
  }
}


export default withRouter(NavBar);
