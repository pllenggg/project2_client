import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap';
import axios from 'axios';

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
                            <Col>🕗 {this.state.service.duration} min</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item variant="secondary">
                        <Row>
                            <Col>Total</Col>
                            <Col></Col>
                            <Col>💲{this.state.service.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <BookingForm/>
                    </ListGroup.Item>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}
class BookingForm extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return(
            <div>
                <h4>Booking form coming</h4>
                <Form>

                </Form>
            </div>
        );
    }
}
export default Booking;