import React, { Component } from 'react';
import CustomerForm from './CustomerForm';

const CUSTOMER_API = `https://bookbeauty.herokuapp.com/customers/:id.json`

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: localStorage.user_id
    };
  }

  render() {
    return (
      <div>
        <CustomerForm/> 
      </div>
    );
  }
}

export default CreateCustomer;
