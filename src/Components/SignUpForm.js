import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user_type: 'CUSTOMER'
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputName = this._handleInputName.bind(this);
    this._handleInputEmail = this._handleInputEmail.bind(this);
    this._handleInputPassword = this._handleInputPassword.bind(this);
  }
  _handleSubmit(event) {
    event.preventDefault();
    axios.post(SERVER_URL, { 
      email: this.state.email, 
      password: this.state.password, 
      user_type: this.state.user_type }).then((result) => {
        console.log(result);
    });
  }

  _handleInputName (event) {
    this.setState({Name: event.target.value})
  }
  _handleInputEmail (event) {
    this.setState({email: event.target.value})
  }
  _handleInputPassword (event) {
    this.setState({password: event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this._handleSubmit}>
        <label>
            Name:
            <input name="name" type="text" placeholder="type your name" required onInput={ this._handleInputName } defaultValue=""/>
          </label>
          <label>
            Email:
            <input name="email" type="text" placeholder="type your email" required onInput={ this._handleInputEmail } defaultValue=""/>
          </label>
          <label>
            Password:
            <input name="password" type="password" placeholder="type your password" required onInput={ this._handleInputPassword } defaultValue=""/>
          </label>
          <label>
            Confirm your password:
            <input name="password" type="password" placeholder="type your password" required onInput={ this._handleInputPassword } defaultValue=""/>
          </label>
          <input type="submit" value="Sign up" />
          <br />
        </form>
      </div>
    );
  }
}

export default SignUp;
