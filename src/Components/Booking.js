import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button, ListGroup, Form} from 'react-bootstrap';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const SERVICES_ID_URL = 'https://bookbeauty.herokuapp.com/services/:id.json';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: []
        };
        const id = this.props.match.params.serviceId;
        const fetchData = () => {
            const url = SERVICES_ID_URL.replace(":id", id);
            axios.get(url).then((results) => {
                this.setState({service: results.data});
                console.log('service:', results.data);
            });
        }
        fetchData();
    }
    render() {
        return(
            <div>
                <Container>
                    <h3>Choosing your service time</h3>
                    <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col><strong>{this.state.service.title}</strong></Col>
                            <Col>{this.state.service.description}</Col>
                            <Col><span role='img' aria-label='sheep'>🕗</span>{this.state.service.duration} min</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item variant="secondary">
                        <Row>
                            <Col>Total</Col>
                            <Col></Col>
                            <Col><span role='img' aria-label='sheep'>💲</span>{this.state.service.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                       
                    </ListGroup.Item>
                    </ListGroup>
                    <BookingForm/>
                </Container>
                
            </div>
        );
    }
}
class BookingForm extends Component {
    constructor() {
        super();
        this.state = {
            startDate: Date.now()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({startDate: date});
    }
    render() {
        return(
            <div>
                <h4>Please select a date</h4>
                <div>
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    isClearable={true}
                    placeholderText="Click to select a date"
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                      }) => {}}
                />
            </div>
  
            
            </div>
        );
    }
}
export default Booking;