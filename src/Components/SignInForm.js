import React, { Component } from 'react';
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
        this._handleInputEmail = this._handleInputEmail.bind(this);
        this._handleInputPassword = this._handleInputPassword.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleInputEmail(event) {
        this.setState({email: event.target.value})
    }
    _handleInputPassword(event) {
        this.setState({password: event.target.value})
    }
    _handleSubmit(event) {
        event.preventDefault();
        let user_id = 0;
        let userDetail = null;
        axios.get(SERVER_URL).then((results) => {
            const userslist = results.data
            console.log(userslist);
            for (let i=0; i<userslist.length; i++) {
                if (userslist[i].name === this.state.name) {
                  user_id = userslist[i].id;
                  userDetail = userslist[i];
                  break;
                } 
                else {
                  console.log('please sign up');
                  let urlstr = window.location.href;
                if (urlstr.includes("#")) {
                    urlstr = urlstr.split("#")[0] + "#/Signup"
                }
                
                window.location.replace(urlstr);
                //return (<SignUp />)
                }
            }
            console.log(user_id);
            if ( user_id > 0 ) {
                console.log("Sign_in=" + userDetail.email);
                //user id found
                //direct to homepage
                User.setEmail(userDetail.email);
                User.setUserType(userDetail.user_type);
                User.setUserId(user_id);
                
                //http://localhost:3000/#/home
                let urlstr = window.location.href;
                if (urlstr.includes("#")) {
                    urlstr = urlstr.split("#")[0] + "#/"
                }
                
                window.location.replace(urlstr);
                //return (<Home />)
            }
        });
    }
    render() {
        return(
            <div>
                <h1>Sign in</h1>
                <form onSubmit={this._handleSubmit}>
                <label>
                    Email:
                    <input name="email" type="text" placeholder="type your email" required onInput={ this._handleInputEmail } defaultValue=""/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" placeholder="type your password" required onInput={this._handleInputPassword} defaultValue=""/>
                </label>
                <label>
                    Confirm your password:
                    <input name="password" type="password" placeholder="type your password" required onInput={this._handleInputPassword} defaultValue=""/>
                </label>
                <input type="submit" value="Sign in" />
                <br />
                </form>
            </div>
        );
    }
}
export default Signin;