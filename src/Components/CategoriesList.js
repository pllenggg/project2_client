import React, { Component } from 'react';
import { ListGroup, Container, Button, Accordion, Card } from 'react-bootstrap';
import axios from 'axios';

const CATEGORIES_API = 'http://localhost:3000/categories.json';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    const fetchCategories = () => {
      axios.get(CATEGORIES_API).then((result) => {
        this.setState({ data: result.data });
      });
    };
    fetchCategories();
    this.saveNewCategory = this.saveNewCategory.bind(this);
  }
  saveNewCategory(data) {
    axios.post(CATEGORIES_API, data).then((result) => {
      this.setState({ data: [...this.state.data, result.data] })
      window.location.reload();
    });
  }

  render() {
    return (
      <div>
        <div>
          {/* <Button className="buttonCategories" variant="outline-secondary">+ Add New Category</Button> */}
        </div>
        {
          this.state.data.map((c) => {
            return (
              <div className="categorieList" key={c.id}>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" width='400px' height='225px' src={c.image} />
                  <Card.Body>
                    <Card.Title className="titleCategory">{c.title}</Card.Title>
                    <Button className="buttonCategories" variant="outline-secondary" href={`#/categoryEdit/${c.id}`}>Edit</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        }
      </div >

    );

  }


}

class AddNewCategory extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      image: "",
      category: []


    };

  }
  render() {
    return (
      <div>
        <Container>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  + Add new category
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body><AddNewCategory onSubmit={this.saveNewCategory} /></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
        {this.state.data.map((c) => {
          return (
            <div key={c.id}>
              <Container>
                <ListGroup>
                  <ListGroup.Item>
                    <h5>{c.title}</h5>
                    <p><strong>title</strong> {c.title}</p>
                  </ListGroup.Item>
                </ListGroup>
              </Container>
            </div>
          );

        })}
      </div>
    )
  }
}




export default CategoriesList;
