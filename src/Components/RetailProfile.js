import React, { Component } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container } from 'react-bootstrap';
import '../Css/Retails.css';



const RETAIL_API = 'https://bookbeauty.herokuapp.com/retails/:id.json'

class RetailProfile extends Component {
    constructor() {
        super();
        this.state = {
            user_id: localStorage.user_id,
            retail: {}
        };
    }

    componentDidMount() {
        const url = RETAIL_API.replace(":id", localStorage.user_id);
        axios.get(url).then((results) => {
            this.setState({ retail: results.data });
            console.log('retail:', results.data);
        });
    }

    render() {
        return (
            <div>
                <Container>
                <h3>{this.state.retail.retail_name}</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>PHONE: {this.state.retail.phone}</ListGroup.Item>
                    <ListGroup.Item>ADDRESS: {this.state.retail.address1}, {this.state.retail.address2}</ListGroup.Item>
                    <ListGroup.Item>SUBURB: {this.state.retail.suburb}</ListGroup.Item>
                    <ListGroup.Item>POSTCODE: {this.state.retail.postcode}</ListGroup.Item>
                    <ListGroup.Item>FACEBOOK: {this.state.retail.suburb}</ListGroup.Item>
                    <ListGroup.Item>INSTAGRAM: {this.state.retail.indtagram}</ListGroup.Item>
                    <ListGroup.Item>WEBSITE: {this.state.retail.website}</ListGroup.Item>
                    <Button href={`#/editretail`}>Edit</Button>
                </ListGroup>
                </Container>
            </div>
        )
    }
}

export default RetailProfile;