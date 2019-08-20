import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';


const CATEGORIES_EDIT_API = 'http://localhost:3000/categories.json';
class CategoriesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };

    const fetchCategoryById = () => {
      axios.get(CATEGORIES_EDIT_API).then((result) => {
        const category = result.data.find(c => {
          return c.id === Number(this.props.match.params.id);
        });

        this.setState({ category: category });
      });
    };
    fetchCategoryById();

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    const newData = {
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.setState(({ category }) => {
      return {
        category: {
          ...category,
          ...newData,
        }
      };
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    const data = this.state.category;
    //put because I'm editing 
    axios.put(`http://localhost:3000/categories/${data.id}.json`, data).then((result) => {
      this.props.history.go(-1);
    });
  }


  render() {
    const { category } = this.state;

    if (category === null) {
      return null;
    }

    return (
      <div>
        <Form onSubmit={this._handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Title" type="text" name="title" value={category.title} onChange={this._handleChange} />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder="Add Image URL ..." type="text" name="image" value={category.image} onChange={this._handleChange} />
            <Card style={{ width: '18rem', marginTop: '20px' }}>
              <Card.Img variant="top" width='400px' height='225px' src={category.image} />
            </Card>
          </Form.Group>
          <Button variant="outline-secondary" type="submit">Submit</Button>
        </Form >
      </div>
    );
  }
}

export default CategoriesEdit;
