import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: '', verified: false };
  }

  defaultState() {
    this.setState({username: '', password: ''});
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
      this.defaultState();
    }
    this.setInputBorder(false);
  }

  makeHandleSubmit() {
    if (this.state.username === '') return;
    if (this.state.verified) {
      if (this.state.password === '') return;
      return (e) => {
        e.preventDefault();
        this.props.submitAction(this.state);
        const input = this.setInputBorder(false);
      };
    } else {
      return (e) => {
        e.preventDefault();
        this.props.verifyUsername({ username: this.state.username, path: this.props.formType }).then(
          username => {
            this.setState({verified: true});
            this.props.clearErrors();
            const input = this.setInputBorder(false);
          },
          errors => {
            const input = this.setInputBorder(true);
            this.props.sendErrors(errors.responseJSON);
          }
        );
      };
    }

    this.props.submitAction(this.state);
  }

  setInputBorder(inErrors) {
    const border = inErrors ? "2px solid #d50000" : "1px solid #ccc";
    const input = document.getElementsByClassName("session-input")[0];
    input.setAttribute('style', 'border-bottom: ' + border + ';');
  }

  field(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  logo() {
    return (
      <div>
        <span className="b-1">B</span>
        <span className="b-2">l</span>
        <span className="b-3">u</span>
        <span className="b-4">T</span>
        <span className="b-5">u</span>
        <span className="b-6">b</span>
        <span className="b-7">e</span>
      </div>
    );
  }

  render() {
    const labelText = this.state.verified ? 'password' : 'username';
    const welcomeMsg = this.state.verified ? "Welcome" : (this.props.formType === "/login" ? "Sign in" : "Sign up");
    return (
      <div className="session">
        <div className="session-container">
          <div>
            <div className="session-logo">{this.logo()}</div>
            <form className="session-form" onSubmit={this.makeHandleSubmit()}>
              <div className="session-welcome">
                <h2 className="session-welcome-msg">
                  {welcomeMsg}
                </h2>
                {this.state.verified ? (<div className="session-username">
                  {this.state.username}
                </div>) : (<div className="session-under-welcome">{'to continue to BluTube'}</div>)}
              </div>
              <label>
                <input placeholder={labelText} className="session-input" type="text" onChange={this.field(labelText)} value={this.state[labelText]} />
              </label>
              <ul className="session-errors">
<<<<<<< HEAD
                {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
              </ul>
              <br />
              <div className="session-buttons">
                { this.props.formType === '/login' ? (<Link className="navbar-signup" to='/signup'>SIGN UP</Link>) : (<div></div>)}
=======
                {this.props.errors.map((error, i) => {
                  const input = this.setInputBorder(true);
                  return <li key={i}>{error}</li>;
                  })
                }
              </ul>
              <br />
              <div className="session-buttons">
                { this.props.formType === '/login' ? (<Link className="session-signup" to='/signup'>SIGN UP</Link>) : (<div></div>)}
>>>>>>> userauth
                <button className="session-next">NEXT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

export default SessionForm;
