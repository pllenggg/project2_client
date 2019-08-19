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
        this.setState({ data: result.data });
      });
    };
    fetchCategories();
  }

  render() {
    return (
      <div>
        <div>
          <Button className="buttonCategories" variant="outline-secondary">+ Add New Category</Button>
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
// class AddNewCategory extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       image: "",
//       category: []

//     }

//     const fetchCategories = ()=>{
//       axios.get().then((results) => {
//         this.setState({category: results.data});
//       })

//     }
//     fetchCategories();
//     this._handleChange = this._handleChange.bind(this);
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }

//   _handleChange (event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   _handleSubmit(event) {
//     event.preventDefault();
//     //localStorage.user_id
//     const submitData = {title: this.state.title, description: this.state.description, price: this.state.price, category_id: this.state.category_id, duration: this.state.duration, retail_id: Login_id}   
//     this.props.onSubmit(submitData);
//   }


export default CategoriesList;
