import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

 class CustomerForm extends Component {
 
  render() {
    return (
        <Form onSubmit={this.props.onSubmit}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" name="name" required maxLength="100" required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="000-000-000" name="phone" required maxLength="100" required/>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form >
    );
  }
}

export default CustomerForm;
