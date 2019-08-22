import React, { Component } from 'react';
import CustomerForm from './CustomerForm';
import axios from 'axios';


const CUSTOMER_API = 'https://bookbeauty.herokuapp.com/customers.json'

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleChange(event) {
    const newData = {
        [event.currentTarget.name]: event.currentTarget.value
      };
      this.setState(({ data }) => {
        return {
          data: {
            ...data,
            ...newData,
          }
        };
      });
    
  }

  _handleSubmit(event) {
    event.preventDefault();
    const addId = {user_id:localStorage.user_id};
    this.setState(({ data }) => {
      return {
        data: {
          ...data,
          ...addId,
        }
      };
    });
    axios.post(CUSTOMER_API, this.state.data).then(() => {
      this.props.history.push("/");
    });
  }


  render() {
    return (
      <div>
        <CustomerForm
        customer = {this.state.data}
        onTyping = {this._handleChange}
        onSubmit = {this._handleSubmit}

        /> 
      </div>
    );
  }
}

export default CreateCustomer;
