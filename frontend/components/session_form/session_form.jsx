import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username:'',password:''};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  field(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  render() {
    const buttonText = this.props.formType === '/login' ? "Login" : "Sign Up";
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username
            <input type="text" onChange={this.field("username")} value={this.state.username} />
          </label>
          <br />
          <label>Password
            <input type="password" onChange={this.field("password")} value={this.state.password} />
          </label>
          <br />
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
