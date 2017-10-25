import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: '', verified: false };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
    }
  }

  makeHandleSubmit() {
    if (this.state.username === '') return;
    if (this.state.verified) {
      if (this.state.password === '') return;
      return (e) => {
        e.preventDefault();
        this.props.submitAction(this.state);
      };
    } else {
      return (e) => {
        e.preventDefault();
        this.props.verifyUsername({ username: this.state.username, path: this.props.formType }).then(
          username => this.setState({verified: true}),
          errors => this.props.sendErrors(errors.responseJSON)
        );
      };
    }

    this.props.submitAction(this.state);
  }

  field(type) {
    return (e) => this.setState({[type]: e.target.value});
  }



  render() {
    const labelText = this.state.verified ? 'password' : 'username';
    const welcomeMsg = this.state.verified ? "Welcome" : (this.props.formType === "/login" ? "Sign In" : "Sign Up");
    return (
      <div className="session">
        <form className="session-form" onSubmit={this.makeHandleSubmit()}>
          <ul className="session-errors">
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
          <div>
            <h2 className="session-welcome-msg">
              {welcomeMsg}
            </h2>
            {this.state.verified ? (<div className="session-username">
              {this.state.username}
            </div>) : (<div className="session-under-welcome">{'to continue to BluTube'}</div>)}
          </div>
          <label>{capitalize(labelText)}
            <input className="session-input" type="text" onChange={this.field(labelText)} value={this.state[labelText]} />
          </label>
          <br />
          <div>
            { this.props.formType === '/login' ? (<Link className="navbar-signup" to='/signup'>SIGN UP</Link>) : (null)}
            <button className="session-next">NEXT</button>
          </div>
        </form>
      </div>
    );
  }
}

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

export default SessionForm;
