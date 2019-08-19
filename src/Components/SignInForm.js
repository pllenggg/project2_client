import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";
import User from './User'
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';
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
    _handleChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    _handleSubmit(event) {
        event.preventDefault();
        axios.get(SERVER_URL).then((results) => {
            const userslist = results.data
            console.log(userslist);
            let urlstr  = "";
            const loginUser = userslist.find((user) => {
                if (user.email === this.state.email && user.password === this.state.password)
                return user.email === this.state.email;
            });
            console.log('user log in:', loginUser);
            
            if (loginUser) {
                // found user in database
                User.setEmail(loginUser.email);
                User.setUserType(loginUser.user_type);
                User.setUserId(loginUser.id);
                urlstr = window.location.href;

                //http://localhost:3000/#/home
                if (urlstr.includes("#")) {
                    urlstr = urlstr.split("#")[0] + "#/"
                    //return (<Home />)
                }
            } else {
                // not found user in database, render sign up page
                urlstr = window.location.href;
                if (urlstr.includes("#")) {
                    urlstr = urlstr.split("#")[0] + "#/Signup"
                }
            }
            window.location.replace(urlstr);
        });
    }
    render() {
        return(
            <div>
                <h1>Sign in</h1>
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
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
                </form>
            </div>
        );
    }
}
export default Signin;