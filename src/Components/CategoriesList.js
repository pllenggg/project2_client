import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
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
              <div className="categorieList" key={c.id}>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" width='400px' height='225px' src={c.image} />
                  <Card.Body>
                    <Card.Title className="titleCategory">{c.title}</Card.Title>
                    {/* <Button className="buttonCategories" variant="outline-secondary">Search</Button> */}
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

export default CategoriesList;
