import React, { Component } from 'react';
import { Button, Form, Container, Card, Col } from "react-bootstrap";
import axios from 'axios';

const SERVICES_URL = 'http://localhost:3000/services.json';
const CATEGORIES_URL = 'http://localhost:3000/categories.json';

class CustomerBookingSearch extends Component {
  constructor() {
    super();
    this.state = {
      services: []
    };
    this.fetchServices = this.fetchServices.bind(this);
  }
  fetchServices = (categoryParam, suburbParam) => {
    // console.log(categoryParam, suburbParam );
    axios.get(SERVICES_URL).then((results) => {
        let data = results.data.filter((s) => {
          return (s.category_id === categoryParam && s.retail.suburb === suburbParam)
        });
        this.setState({services: data});
        console.log(data);
      })
  };

  render() {
    return (
        <div>
        <Container>
        <h1>Finding your services</h1>
        <SearchForm onSubmit={this.fetchServices}/>
        <SearchResult services={this.state.services} />
        </Container>
        </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category_id: 0,
      suburb: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  componentDidMount(){
    axios.get(CATEGORIES_URL).then((results) => {
      this.setState({categories: results.data});
      this.setState({category_id: results.data[0].id});
    });
  }
  _handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.category_id, this.state.suburb);
  }
  render() {
    return(
      <div>
        <Container>
        <form onSubmit={this._handleSubmit} >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCategories">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="select" 
              name="category_id" 
              value={this.state.category_id} 
              onChange={this._handleChange} >
              {this.state.categories.map( (c) => 
              <option key={c.id} value={c.id}>{c.title}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSuburb">
              <Form.Label>Suburb</Form.Label>
                <Form.Control 
                  type="text" 
                  name="suburb" 
                  placeholder="suburb" 
                  onChange={this._handleChange} 
                  value={this.state.suburb}
                  required />
          </Form.Group>
        </Form.Row>
            <Button variant="primary" type="submit">
              Search
            </Button>
        </form>
        </Container>
      </div>
    );
  }
}

class SearchResult extends Component {
  render() {
    return(
      
      <div>
        <Container>
        {
          this.props.services.map((s) => {
            return (
              <div className="serviceList" key={s.id}>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" width='300px' height='200px' src={s.service_image} />
                  <Card.Body>
                    <Card.Title className="titleCategory">{s.title}</Card.Title>
                    <Card.Text>Description: {s.description} </Card.Text>
                    <Card.Text>Service price: ${s.price}</Card.Text>
                    <Card.Text>Retail: {s.retail.retail_name}</Card.Text>
                    <Card.Text>📍 {s.retail.address1}, {s.retail.address2}, {s.retail.suburb}</Card.Text>
                    <Card.Text>☎️ {s.retail.phone}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        }
        </Container>
      </div>
      
    );
  }
}

export default CustomerBookingSearch;
