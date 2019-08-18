import React, { Component } from 'react';
import axios from 'axios';
import {ListGroup, Container} from 'react-bootstrap';

const SERVICE_API = "http://localhost:3000/services.json"

class RetailServiceList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

    //fetching data from API 
    const fetchServices = () => {
      axios.get(SERVICE_API).then((results) => {
        this.setState({data: results.data});
        console.log(results.data); // done with fetching
      })
    }
    fetchServices();
  }
  //below here is rendering it on screen//
  render() {
    return(
      <div>
        {/* TODO: use login user instead of 8 */}
        {this.state.data.filter(p=>{return p.retail_id===8}).map((s)=>{
          return(
            <div>
              <Container>
                <ListGroup>
                  <ListGroup.Item>
                    <h5>{s.title}</h5>
                    <p><strong>Description:</strong> {s.description}</p>
                    <p><strong>Price:</strong> A$ {s.price}</p>
                    <p><strong>Duration:</strong> {s.duration} mins</p>
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



export default RetailServiceList;
