import React, { Component } from 'react';
import CustomerForm from './CustomerForm';
import '../Css/Customer.css';
import axios from 'axios';
import { Container } from "react-bootstrap";


const CUSTOMER_API = 'https://bookbeauty.herokuapp.com/customers.json'
// const CUSTOMER_API = 'http://localhost:3000/customers.json'

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
<<<<<<< HEAD
    const addId = { user_id: localStorage.user_id };
    this.setState(({ data }) => {
      return {
        data: {
          ...data,
          ...addId,
        }
      };
    });
=======
    const data = this.state.data;
    data.user_id = Number(localStorage.user_id);
>>>>>>> 404f2cbd727ee93f25677ce9dab8965e6baf7d9d
    axios.post(CUSTOMER_API, this.state.data).then(() => {
      this.props.history.push("/");
    });
  }


  render() {
    return (
      <div>
        <Container>
          <div className="wrapperCreateCustomer">
            <CustomerForm
              customer={this.state.data}
              onTyping={this._handleChange}
              onSubmit={this._handleSubmit}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default CreateCustomer;
