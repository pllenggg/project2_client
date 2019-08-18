import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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
        console.log(result.data);
        this.setState({ data: result.data });
      });
    };
    fetchCategories();
  }

  render() {
    return (
      <div>
        {
          this.state.data.map((c) => {
            return (
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={c.image} />
                  <Card.Body>
                    <Card.Title>{c.title}</Card.Title>

                    {/* <Button variant="primary">Search</Button> */}
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

export default CategoriesList;
