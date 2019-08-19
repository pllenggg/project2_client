import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      user_type: 'CUSTOMER'
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }
  _handleSubmit(event) {
    event.preventDefault();
    axios.post(SERVER_URL, { 
      email: this.state.email, 
      password: this.state.password, 
      password_confirmation: this.state.password_confirmation,
      user_type: this.state.user_type }).then((result) => {
        console.log(result);
    });
  }

  _handleInput (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this._handleSubmit}>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
            <Form.Control 
            type="email" 
            name="email"  
            placeholder="type your email"
            value={this.state.email}
            onChange= {this._handleInput}
            required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
            <Form.Control
            type="password" 
            name="password"  
            placeholder="type your password"
            value={this.state.password}
            onChange= {this._handleInput}
            required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password confirmation:</Form.Label>
            <Form.Control 
            type="password" 
            name="password_confirmation"  
            placeholder="confirm your password"
            value={this.state.password_confirmation}
            onChange= {this._handleInput}
            required />
          </Form.Group>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
