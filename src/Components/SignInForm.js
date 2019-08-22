import React, { Component } from 'react';
import { Button, Form, Container, Row } from "react-bootstrap";
import User from './User'
import axios from 'axios';
import '../Css/User.css';

const SERVER_URL = 'https://bookbeauty.herokuapp.com/users.json';
class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            user_type: ""
        };
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }
    _handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    _handleSubmit(event) {
        event.preventDefault();
        axios.get(SERVER_URL).then((results) => {
            const userslist = results.data
            const loginUser = userslist.find((user) => {
                return user.email === this.state.email;
            });
            console.log('user log in:', loginUser);

            if (loginUser) {
                // found user in database
                User.setEmail(loginUser.email);
                User.setUserType(loginUser.user_type);
                User.setUserId(loginUser.id);
                this.props.history.push("/");
                window.location.reload();
            } else {
                // not found user in database, render sign up page
                this.props.history.push("/signup");
            }
        });
    }
    render() {
        return(
            <Container>
                <div className="wrapper">
                    <Row className="justify-content-md-center">
                        <h1>Sign in</h1>
                    </Row>
                    <Row className="justify-content-md-center">
                        <form onSubmit={this._handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                placeholder="type your email" 
                                onChange={this._handleChange} 
                                value={this.state.email}
                                required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password:</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password" 
                                placeholder="type your password" 
                                onChange={this._handleChange} 
                                value={this.state.password}
                                required />
                        </Form.Group>
                            <Row className="justify-content-md-center">
                            <Button variant="info" type="submit">Sign in</Button>
                            </Row>
                        </form>
                    </Row>
                </div>
            </Container>
        );
    }
}
export default Signin;