import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Figure } from 'react-bootstrap';




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
                  {/* <Figure>
                    <Figure.Image src={c.image} width={400} height={200} />
                  </Figure> */}
                  <Card.Img variant="top" width='400px' height='225px' src={c.image} />
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
