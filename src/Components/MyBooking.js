import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Container, Card, Col } from "react-bootstrap";

const BOOKING_ID_URL = 'http://localhost:3000/bookings/:id.json';

class MyBooking extends Component {
    constructor() {
        super();
        this.state = {
            booking: {}
        };
    }
    render() {
        return(
            <div>
                <Container>
                <h2>My Booking</h2>
                
                </Container>
            </div>
        );
    }
    
}
export default MyBooking;