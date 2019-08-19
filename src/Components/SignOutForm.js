import React, { Component } from 'react';
import User from './User';
class SignOutForm extends Component {

  componentDidMount(){
    User.clearUser();
    this.props.history.push("/signin");
    window.location.reload();
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default SignOutForm;
