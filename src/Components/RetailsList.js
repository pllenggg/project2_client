import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Form, Accordion, Card, Container } from 'react-bootstrap';

const RETAILS_LIST_API = 'http://localhost:3000';
const GET_RETAILS_LIST_API = `${RETAILS_LIST_API}/retails.json`;
const POST_RETAILS_LIST_API = `${RETAILS_LIST_API}/retails.json`;
const PUT_RETAILS_LIST_API = `${RETAILS_LIST_API}/retails/:id.json`;

class RetailsList extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: undefined,
      retails: [],
    };

    const fetchRetailsList = () => {
      axios.get(GET_RETAILS_LIST_API).then((result) => {
        this.setState({ retails: result.data });
      });
    };
    fetchRetailsList();
    this.saveRetail = this.saveRetail.bind(this);
    this.editRetail = this.editRetail.bind(this);
  }

  saveRetail(data) {
    if (data.id) {
      const url = PUT_RETAILS_LIST_API.replace(':id', data.id);
      axios.put(url, data).then(() => {
        window.location.reload();
      });
    } else {
      axios.post(POST_RETAILS_LIST_API, data).then(() => {
        window.location.reload();
      });
    }
  }

  editRetail(retails) {
    this.setState({ currentItem: retails })
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
                  <Card.Body>
                    <RetailsForm
                      currentItem={this.state.currentItem} onSubmit={this.saveRetail} />
                  </Card.Body>
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
                <th>Actions</th>
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
                  <td>
                    <Button
                      variant="outline-secondary" type="button" onClick={() => this.editRetail(retails)}>Edit</Button>
                  </td>
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
  constructor(props) {
    super(props);
    // if i have currentItem it means I'm editing.
    // if not I'm adding currentItem 
    if (this.props.currentItem) {
      this.state = {
        form: this.props.currentItem
      };
    } else {
      this.state = {
        form: {
          retail_name: '',
          address1: '',
          address2: '',
          suburb: '',
          postcode: '',
        }
      };
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  };

  _handleChange(event) {
    const newFormData = {
      [event.target.name]: event.target.value,
    }
    this.setState(({ form }) => {
      return {
        form: {
          ...form,
          ...newFormData,
        }
      };
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { form } = this.state;
    const data = {
      retail_name: form.retail_name,
      address1: form.address1,
      address2: form.address2,
      suburb: form.suburb,
      postcode: form.postcode
    };
    // if form has id it means I'm editing
    if (form.id) {
      data.id = form.id;
    }

    this.props.onSubmit(data);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentItemPropsHasBeenChanged =
      nextProps.currentItem !== this.props.currentItem;
    const formStateHasBeenChanged = nextState.form !== this.state.form;

    if (currentItemPropsHasBeenChanged) {
      this.setState({ form: nextProps.currentItem });
    }
    return currentItemPropsHasBeenChanged || formStateHasBeenChanged;
  }

  render() {
    const { form } = this.state;

    return (
      <Form onSubmit={this._handleSubmit}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Retail Name" name="retail_name" value={form.retail_name} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address 1</Form.Label>
          <Form.Control placeholder="Unit" name="address1" value={form.address1} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Street" name="address2" value={form.address2} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Suburb</Form.Label>
          <Form.Control placeholder="Surbub" name="suburb" value={form.suburb} onChange={this._handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Postcode</Form.Label>
          <Form.Control placeholder="Postcode" name="postcode" value={form.postcode} onChange={this._handleChange} />
        </Form.Group>

        <Button variant="outline-secondary" type="submit">Save</Button>
      </Form >
    );
  }
}

export default RetailsList;

