import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Css/Retails.css';

class RetailForm extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col></Col>
 
          <Col xs={6}>
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label><strong>Name</strong></Form.Label>
          <Form.Control placeholder="Retail Name" name="retail_name" value={this.props.service.retail_name} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label><strong>Address 1</strong></Form.Label>
          <Form.Control placeholder="Unit" name="address1" value={this.props.service.address1} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Address 2</strong></Form.Label>
          <Form.Control placeholder="Street" name="address2" value={this.props.service.address2} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Suburb</strong></Form.Label>
          <Form.Control placeholder="Surbub" name="suburb" value={this.props.service.suburb} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Postcode</strong></Form.Label>
          <Form.Control placeholder="Postcode" name="postcode" value={this.props.service.postcode} onChange={this.props.onEditing} required maxLength="4" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Facebook</strong></Form.Label>
          <Form.Control placeholder="facebook" name="facebook" value={this.props.service.facebook} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Instagram</strong></Form.Label>
          <Form.Control placeholder="instagram" name="instagram" value={this.props.service.instagram} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Phone</strong></Form.Label>
          <Form.Control placeholder="Phone" name="phone" value={this.props.service.phone} onChange={this.props.onEditing} onChange={this.props.onEditing} required maxLength="15" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label><strong>Website</strong></Form.Label>
          <Form.Control placeholder="website" name="website" value={this.props.service.website} onChange={this.props.onEditing} required maxLength="100" />
        </Form.Group>

        <Button variant="info" type="submit">Submit</Button>
      </Form >
      </Col>

      <Col></Col>
      </Row>
      </Container>

    )
  }
}

export default RetailForm;