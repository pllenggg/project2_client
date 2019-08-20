import React, { Component } from 'react';
import axios from 'axios';
import {ListGroup, Container, Form, Button, Accordion, Card} from 'react-bootstrap';

const SERVICES_API = "http://localhost:3000/services.json"
const CATEGORIES_API = "http://localhost:3000/categories.json"
const SERVICES_UPDATE_API = "http://localhost:3000/services/:id.json"
const Login_id = 8; // localstorage.user_id
class RetailServiceList extends Component {
  constructor() {
    super();
    this.state = {
      services: []
    }

    //fetching data from API 
    const fetchServices = () => {
      axios.get(SERVICES_API).then((results) => {
        let data = results.data.filter((s)=>{return s.retail_id === Login_id});
        this.setState({services: data});
        
      })
    }
    fetchServices();

    this.saveServices = this.saveServices.bind(this);
    
  }

  saveServices(data) {
    axios.post(SERVICES_API, data).then((result) => {
      this.setState({services: [...this.state.services, result.data]})
      window.location.reload();
      })
    }

  // onDelete(){
  //   let serviceId = this.state.services.id;
  //   axios.delete(SERVICES_API +"/"+serviceId).then((response) => {
  //     this.props.history.push('/retailservicelist');
  //   }).catch(err => console.log(err));
  // }
  

  //below here is rendering the toggle form and show the list of services//
  render() {
    return(
      <div>
        <Container>
          <Accordion>
           <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              + Add new service
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body><AddServiceForm onSubmit={this.saveServices}/></Card.Body>
              </Accordion.Collapse>
          </Card>
          </Accordion>
        </Container>
        {/* TODO: use login user instead of 8 */}
        {this.state.services.map((s)=>{
          return(
            <div key={s.id}>
              <Container>
                <ListGroup>
                  <ListGroup.Item>
                    <h5>{s.title}</h5>
                    <p><strong>Description:</strong> {s.description}</p>
                    <p><strong>Price:</strong> A$ {s.price}</p>
                    <p><strong>Duration:</strong> {s.duration} mins</p>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          <UpdateButton id={s.id} >Edit</UpdateButton>
                          </Accordion.Toggle>
                        </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body><EditForm info={s}/></Card.Body>
                          </Accordion.Collapse>
                      </Card>
                    </Accordion>
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



class AddServiceForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      service_image: "",
      price: "",
      duration: "",
      category_id: "",
      category: []
    
    }

    const fetchCategories = ()=>{
      axios.get(CATEGORIES_API).then((results) => {
        this.setState({category: results.data});
      })
      
    }
    fetchCategories();
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    
  }

  _handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    //localStorage.user_id
    const submitData = {title: this.state.title, description: this.state.description, price: this.state.price, category_id: this.state.category_id, duration: this.state.duration, retail_id: Login_id}   
    this.props.onSubmit(submitData);
  }

  

  render() {
    return (
      <div>
        <Form onSubmit={this._handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label><strong>Title</strong></Form.Label>
              <Form.Control type="text" name="title" value={this.state.title} onChange={this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><strong>Description</strong></Form.Label>
              <Form.Control as="textarea" name="description" value={this.state.description} rows="4" onChange={this._handleChange} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label><strong>Price</strong></Form.Label>
              <Form.Control type="number" name="price" value={this.state.price} onChange={this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label><strong>Duration</strong></Form.Label>
              <Form.Control type="number" name="duration" value={this.state.duration} onChange={this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category_id" value={this.state.category_id} onChange={this._handleChange}>
  
              {this.state.category.map( (c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                
              </Form.Control> 
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}

class UpdateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event){
    let service_id = Number(event.target.id);
    axios.get(SERVICES_API).then(response =>{
      let data = response.data.find((s)=>{return s.id === service_id})
      // let url = SERVICES_UPDATE_API.replace(":id", service_id)
      console.log(data)
  
    })
  }

  //TODO when the edit button is on clicked! Two things will happen
  //1 detect the id of service
  //direct to another page to edit the form 


  render(){
    return (
      <Button variant="primary" id={this.props.id} onClick={this._handleClick}>Edit</Button>
      
    )
  }
}

class EditForm extends Component {
  constructor(props){
    super();
    this.state={
     service: {
        title: props.info.title,
        description: props.info.description,
        price: props.info.price,
        duration: props.info.duration,
        category_id: props.info.category_id,
        service_id: props.info.id,
        category: []
     }
    }
    const fetchCategories = ()=>{
      axios.get(CATEGORIES_API).then((results) => {
        this.setState({category: results.data});
      })
      
    }
    fetchCategories();
    
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    
  }

  _handleSubmit (event) {
    event.preventDefault();
    const data = this.state.service;
    console.log(data);
    const url = SERVICES_UPDATE_API.replace(":id", this.props.info.id);
    axios.put(url , data).then(() => {
      window.location.reload();
    })
 
  }

  _handleChange (event){
    console.log(event);
    const newData = {
      [event.currentTarget.name]:event.currentTarget.value
    }

    this.setState(( {service} ) => {
      return {
        service: {
          ...service,
          ...newData,
        }
      }
    })
  }

  render(){
    const {services} = this.state;
    if(services === null) {
      return null;
    }
    return(
      <div>
        <Form onSubmit={this._handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Title</strong></Form.Label>
                <Form.Control type="text" name="title" value={this.state.service.title} onChange = {this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Description</strong></Form.Label>
                <Form.Control type="textarea" name="description" value={this.state.service.description} onChange = {this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Price</strong></Form.Label>
                <Form.Control type="text" name="price" value={this.state.service.price} onChange = {this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Duration</strong></Form.Label>
                <Form.Control type="text" name="duration" value={this.state.service.duration} onChange = {this._handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category" value={this.state.service.category_id} >
              {this.state.service.category.map( (c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                
              </Form.Control> 
          </Form.Group>

          <Button variant="primary" type="submit" id={this.state.service.service_id} onSubmit={this._handleSubmit}>
            Save
          </Button>

        </Form>
      </div>
    )
  }
}



export default RetailServiceList;
