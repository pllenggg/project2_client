import React, { Component } from 'react';
import CustomerForm from './CustomerForm';
import '../Css/Customer.css';

const CUSTOMER_API = `https://bookbeauty.herokuapp.com/customers/:id.json`

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <CustomerForm />
      </div>
    );
  }
}

export default CreateCustomer;
