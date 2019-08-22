import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import CustomerForm from './CustomerForm'
import '../Css/Customer.css';

const CUSTOMER_API = `https://bookbeauty.herokuapp.com/customers/:id.json`

class CustomerProfile extends Component {
    constructor() {
        super();
        this.state = {
            full_name: '',
            phone: ''
        }
    }


    componentDidMount() {
        const url = CUSTOMER_API.replace(":id", localStorage.user_id)
        axios.get(url).then(result => {
            console.log(result.data);
            this.setState(result.data);
        })
    }


    render() {
        return (
            <div>
                <p>Fullname: {this.state.full_name}</p>
                <p>Phone: {this.state.phone}</p>
                <Button href={`#/editcustomerprofile/${localStorage.user_id}`}>Edit</Button>
            </div>
        );
    }
}

export default CustomerProfile;
