import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import axios from 'axios';

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
                this.setState({retail: results.data});
                console.log('retail:', results.data);
                console.log(this.state.retail.services);
            });
        }
        fetchData();
    }
    
    render() {
        return(
            <div>
                <Container>
                    <div>
                        <h3>Retail</h3>
                        <Row>
                        <Col sm={4}>
                            <Image src={this.state.retail.retail_image} roundedCircle />
                        </Col>
                        <Col sm={8}>
                            <h4>{this.state.retail.retail_name} </h4>
                            <p>Address: {this.state.retail.address1} {this.state.retail.address2}, {this.state.retail.suburb}, {this.state.retail.postcode}</p>
                            <p>Phone: {this.state.retail.phone}</p>
                            <p>Website:{this.state.retail.website}</p>
                            <p>fb: {this.state.retail.facebook}</p>
                            <p>ig: {this.state.retail.instagram}</p>
                        </Col>
                        </Row>
                    </div>
                    <div>
                        {
                            this.state.retail.services ?
                        <ServiceList info={this.state.retail.services} retail={this.state.retail.user_id}/>
                            : ''
                        }
                    </div>
                </Container>
            </div>
        );
    }
}

class ServiceList extends Component{
    render() {
        return(
            <div>
                <h3>Popular Services</h3>
                    {
                        
                        this.props.info.map((s) => {
                            return(
                                <div className="serviceList" key={s.id}>
                                <label>{s.title}</label>
                                    <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" width='300px' height='200px' src={s.service_image} />
                                    <Card.Body>
                                        <Card.Title className="titleCategory">{s.title}</Card.Title>
                                        <Card.Text>{s.description}</Card.Text>
                                        <Card.Text>💲{s.price}</Card.Text>
                                        <Card.Text>🕗 {s.duration} min.</Card.Text>
                                        <Button variant="warning" href={`#/booking/${this.props.retail}/${s.id}`}>Book Now!</Button>
                                    </Card.Body>
                                    </Card>
                                </div>
                            );
                        })
                    }
            </div>
        );
    }
}

export default RetailShowServices;