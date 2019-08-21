import React, { Component } from 'react';
import CustomerForm from './CustomerForm';
import axios from 'axios';

const CUSTOMER_API = `https://bookbeauty.herokuapp.com/customers/:id.json`
const Login_id = 14

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 10,// localStorage.user_id,
      customer: {}
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const data = this.state.customer;
    const URL = CUSTOMER_API.replace(":id", Login_id)
    axios.post(URL, data).then(() =>{
      this.props.history.push("/");
    })
  }

  componentDidMount(){
    axios.get(CUSTOMER_API).then((result) => {
      let data = result.data.filter((c)=>{return c.user_id === Login_id});
      this.setState({customer: data});
    })
  }

  render() {
    return (
      <div>
        <CustomerForm
        customer = {this.state.customer}
        onTyping = {this._handleChange}
        onSubmit = {this._handleSubmit}

        /> 
      </div>
    );
  }
}

export default CreateCustomer;
