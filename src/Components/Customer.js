import React, { Component } from 'react';
import axios from 'axios';

class Customer extends Component {
  componentDidMount(){

    axios.get(`https://bookbeauty.herokuapp.com/customers/${localStorage.user_id}.json`).then((response)=>{
        if (response){
            this.props.history.push('/profile');
        }
    }, (rejectReason)=>{
        if (rejectReason && rejectReason.response && rejectReason.response.status===404){
            this.props.history.push('/newcustomer');
        }
    })
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Customer;
