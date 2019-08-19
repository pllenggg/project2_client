import React, { Component } from 'react';
import { Button, Form, Container } from "react-bootstrap";
import axios from 'axios';

const SERVICES_URL = 'http://localhost:3000/services.json';
const CATEGORIES_URL = 'http://localhost:3000/categories.json';

class CustomerBookingSearch extends Component {
  constructor() {
    super();
    this.state = {
      retails: []
    };
    this.fetchRetails = this.fetchRetails.bind(this);
  }
  fetchRetails = (categoryParam, suburbParam) => {
    // console.log(categoryParam, suburbParam );
    axios.get(SERVICES_URL).then((results) => {
        let data = results.data.filter((s) => {
          return (s.category_id === categoryParam && s.retail.suburb === suburbParam)
        });
        this.setState({retails: data});
        console.log(data);
      })
  };

  render() {
    return (
        <div>
        <h1>Finding your retails</h1>
        <SearchForm onSubmit={this.fetchRetails}/>
        <SearchResult />
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
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="select" 
              name="category_id" 
              value={this.state.category_id} 
              onChange={this._handleChange} >
              {this.state.categories.map( (c) => 
              <option key={c.id} value={c.id}>{c.title}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Suburb</Form.Label>
                <Form.Control 
                  type="text" 
                  name="suburb" 
                  placeholder="suburb" 
                  onChange={this._handleChange} 
                  value={this.state.suburb}
                  required />
          </Form.Group>
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
        
      </div>
    );
  }
}

export default CustomerBookingSearch;
