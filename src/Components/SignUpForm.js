import React, { Component } from 'react';
import { Button, Form, Row } from "react-bootstrap";
import axios from 'axios';
import User from './User'

const SERVER_URL = 'https://bookbeauty.herokuapp.com/users.json';

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
    this._handleChange = this._handleChange.bind(this);
  }
  _handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.password_confirmation) {
      axios.post(SERVER_URL, { 
        email: this.state.email, 
        password: this.state.password, 
        user_type: this.state.user_type }).then((result) => {
          if (result.data){
            const data = result.data;
            User.setEmail(data.email);
            User.setUserType(data.user_type);
            User.setUserId(data.id);
            this.props.history.push("/newcustomer");
          }
      });
    } else {
      console.log('password doese not match');
    }

  }

  _handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
        <h1>Sign up</h1>
        </Row>
        <Row className="justify-content-md-center">
        <form onSubmit={this._handleSubmit}>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
            <Form.Control 
            type="email" 
            name="email"  
            placeholder="type your email"
            value={this.state.email}
            onChange= {this._handleChange}
            required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
            <Form.Control
            type="password" 
            name="password"  
            placeholder="type your password"
            value={this.state.password}
            onChange= {this._handleChange}
            required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password confirmation:</Form.Label>
            <Form.Control 
            type="password" 
            name="password_confirmation"  
            placeholder="confirm your password"
            value={this.state.password_confirmation}
            onChange= {this._handleChange}
            required />
          </Form.Group>
          <Row className="justify-content-md-center">
          <Button variant="primary" type="submit">
            Sign up
          </Button>
          </Row>
        </form>
        </Row>
      </div>
    );
  }
}

export default SignUp;
