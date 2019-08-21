import React,{Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class RetailForm extends Component {
    render(){
        return(
        <Form onSubmit={this.props.onSubmit}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Retail Name" name="retail_name" value={this.props.service.retail_name} onChange={this.props.onEditing} required maxLength="100" required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address 1</Form.Label>
          <Form.Control placeholder="Unit" name="address1" value={this.props.service.address1} onChange={this.props.onEditing} required maxLength="100" required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Street" name="address2" value={this.props.service.address2} onChange={this.props.onEditing} required maxLength="100" required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Suburb</Form.Label>
          <Form.Control placeholder="Surbub" name="suburb" value={this.props.service.suburb} onChange={this.props.onEditing} required maxLength="100" required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Postcode</Form.Label>
          <Form.Control placeholder="Postcode" name="postcode" value={this.props.service.postcode} onChange={this.props.onEditing} required maxLength="100" required/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Facebook</Form.Label>
          <Form.Control placeholder="facebook" name="facebook" value={this.props.service.facebook} onChange={this.props.onEditing} required maxLength="100"/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Instagram</Form.Label>
          <Form.Control placeholder="instagram" name="instagram" value={this.props.service.instagram} onChange={this.props.onEditing} required maxLength="100"/>
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="Phone" name="phone" value={this.props.service.phone} onChange={this.props.onEditing} onChange={this.props.onEditing} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Website</Form.Label>
          <Form.Control placeholder="website" name="website" value={this.props.service.website} onChange={this.props.onEditing}/>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form >

        )
    }
}

export default RetailForm;