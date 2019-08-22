import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
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

                <h3>{this.state.retail.retail_name}</h3>
                <p>PHONE: {this.state.retail.phone}</p>
                <p>ADDRESS: {this.state.retail.address1}, {this.state.retail.address2}</p>
                <p>SUBURB: {this.state.retail.suburb}</p>
                <p>POSTCODE: {this.state.retail.postcode}</p>
                <p>FACEBOOK: {this.state.retail.suburb}</p>
                <p>INSTAGRAM: {this.state.retail.indtagram}</p>
                <p>WEBSITE: {this.state.retail.website}</p>
                <Button href={`#/editretail`}>Edit</Button>
            </div>
        )
    }
}

export default RetailProfile;