import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {username:'',password:''};
  }

  handleSubmit() {

  }

  field(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  render() {
    const buttonText = this.props.formType === '/login' ? "Login" : "Sign Up";
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.field("username")} value={this.state.username} />
          <input type="password" onChange={this.field("password")} value={this.state.password} />
          <button>{buttonText}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
