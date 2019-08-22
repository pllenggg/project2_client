import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Button, Container, Row } from 'react-bootstrap';
import CustomerForm from './CustomerForm'
=======
import { Button } from 'react-bootstrap';
>>>>>>> 404f2cbd727ee93f25677ce9dab8965e6baf7d9d
import '../Css/Customer.css';

const CUSTOMER_API = `https://bookbeauty.herokuapp.com/customers/:id.json`
// const CUSTOMER_API = `http://localhost:3000/customers/:id.json`;

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

            <Container>
                <Row className="justify-content-xl-center">
                    <div>
                        <p>Fullname: {this.state.full_name}</p>
                        <p>Phone: {this.state.phone}</p>
                        <Button variant="info" href={`#/editcustomerprofile`}>Edit</Button>
                    </div>
                </Row>
            </Container >


        );
    }
}

export default CustomerProfile;
