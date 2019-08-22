import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../Css/Retailshowservice.css';

const RETAILS_ID_URL = 'https://bookbeauty.herokuapp.com/retails/:id.json';

class RetailShowServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retail: {}
        };
        const id = this.props.match.params.id;
        const fetchData = () => {
            const url = RETAILS_ID_URL.replace(":id", id);
            axios.get(url).then((results) => {
                this.setState({ retail: results.data });
                console.log('retail:', results.data);
                console.log(this.state.retail.services);
            });
        }
        fetchData();
    }

    render() {
        return (
            <div>
                <Container>
                    <section className="retail-content">
                        <Row>
                            <Col>
                                <Image id="retail_image"src={this.state.retail.retail_image} width={280}height={280} roundedCircle />
                            </Col>
                            <Col>
                                <h1>{this.state.retail.retail_name} </h1>
                                <p>Address: {this.state.retail.address1} {this.state.retail.address2}, {this.state.retail.suburb}, {this.state.retail.postcode}</p>
                                <p>Phone: {this.state.retail.phone}</p>
                                <p>Website:{this.state.retail.website}</p>
                                <p>fb: {this.state.retail.facebook}</p>
                                <p>ig: {this.state.retail.instagram}</p>
                            </Col>
                        </Row>
                    </section>
                    <div>
                        {
                            this.state.retail.services ?
                                <ServiceList info={this.state.retail.services} retail={this.state.retail.user_id} />
                                : ''
                        }
                    </div>
                </Container>
            </div>
        );
    }
}

class ServiceList extends Component {
    render() {
        return (
            <div>
            <section className="service-content">
                <h3>Popular Services</h3>
                {
                    this.props.info.map((s) => {
                        return (
                            <div className="service-card" key={s.id}>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" width='260px' height='180px' src={s.service_image} />
                                    <Card.Body>
                                        <Card.Title className="titleCategory">{s.title}</Card.Title>
                                        <Card.Text>{s.description}</Card.Text>
                                        <Card.Text>
                                            <Row>
                                            <Col><span role='img' aria-label='sheep'>🕗</span> {s.duration} min.</Col>
                                            <Col><span role='img' aria-label='sheep'>💲</span> {s.price}</Col>  
                                            </Row>
                                        </Card.Text>
                                        <Button id="book" variant="info" href={`#/booking/${this.props.retail}/${s.id}`}>Book Now!</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })
                }
            </section>
            </div>
        );
    }
}

export default RetailShowServices;