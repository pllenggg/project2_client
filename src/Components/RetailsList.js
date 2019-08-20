import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Form, Accordion, Card, Container } from 'react-bootstrap';


const RETAILS_LIST_API = 'http://localhost:3000/retails.json';

class RetailsList extends Component {
  constructor() {
    super();
    this.state = {
      retails: [],


    };

    const fetchRetailsList = () => {
      axios.get(RETAILS_LIST_API).then((result) => {
        // console.log(result.data);
        this.setState({ retails: result.data });
      });
    };
    fetchRetailsList();
    this.saveRetail = this.saveRetail.bind(this);
  }
  saveRetail(data) {
    axios.post(RETAILS_LIST_API, data).then((result) => {
      this.setState({ retails: [...this.state.retails, result.data] })
      window.location.reload();
    });

  }


  render() {
    return (

      <div>
        <div>
          <Container>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    + Add new retails
              </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body><RetailsForm onSubmit={this.saveRetail} /></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </div>
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address1</th>
                <th>Address2</th>
                <th>Suburb</th>
                <th>Postcode</th>
              </tr>
            </thead>
            <tbody>
              {this.state.retails.map((retails) => (
                <tr key={retails.user_id}>
                  <td>{retails.retail_name}</td>
                  <td>{retails.address1}</td>
                  <td>{retails.address2}</td>
                  <td>{retails.suburb}</td>
                  <td>{retails.postcode}</td>

                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

class RetailsForm extends Component {
  constructor() {
    super();
    this.state = { retail_name: '', address1: '', address2: '', suburb: '', postcode: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  };


  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    const data = { retail_name: this.state.retail_name, address1: this.state.address1, address2: this.state.address2, suburb: this.state.suburb, postcode: this.state.postcode }
    this.props.onSubmit(data)
  }



  render() {


    return (

      <Form onSubmit={this._handleSubmit}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Retail Name" name="retail_name" value={this.state.retail_name} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address 1</Form.Label>
          <Form.Control placeholder="Unit" name="address1" value={this.state.address1} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Street" name="address2" value={this.state.address2} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Suburb</Form.Label>
          <Form.Control placeholder="Surbub" name="suburb" value={this.state.suburb} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Postcode</Form.Label>
          <Form.Control placeholder="Postcode" name="postcode" value={this.state.postcode} onChange={this._handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Save</Button>
      </Form >

    );
  }
}

// class UpdateButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//     this._handleClick = this._handleClick.bind(this);
//   }

//   _handleClick(event) {
//     let retails_id = Number(event.target.id);
//     axios.get(RETAILS_LIST_API).then(response => {
//       let data = response.data.find((r) => { return r.id === retails_id })
//       console.log(data)

//     })
//   }

// class EditForm extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       retails: {
//         retail_name: props.info.retail_name,
//         address1: props.info.address1,
//         address2: props.info.address2,
//         suburb: props.info.suburb,
//         postcode: props.info.postcode,

//       }
//     }
//     this._handleChange = this._handleChange.bind(this);
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }

export default RetailsList;

