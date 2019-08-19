import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from "react-bootstrap";

const SERVER_URL = 'http://localhost:3000/bookings.json';

class CustomerBookingList extends Component {
  constructor() {
    super();
    this.state = {
      bookings: []
    };
  }

  componentDidMount(){
    axios.get(SERVER_URL).then((results) => {
      this.setState({bookings: results.data})
    });
  }

  render() {
    return (
      <div>
        <BookingCancelForm data={this.state.bookings}/>
      </div>
    );
  }
  
}
  
class BookingCancelForm extends Component {
    constructor() {
      super();
      this.state = {
        bookingId: 0
      }
    }

  render() {
    return (
      <div>
        <h1>All bookings</h1>
          <Table striped size='sm' >
              <thead>
                <tr>
                  <th>Booking Date</th>
                  <th>Booking Time</th>
                  <th>Retail Name</th>
                  <th>Service</th>
                  <th>Service Image</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.data.filter((u)=>{return u.user_id === 2}).map((b)=>{
                  return(
                      <tr key={b.id}>
                        <td>{b.date}</td>
                        <td>{b.booking_time}</td>
                        <td>{b.retail.retail_name}</td>
                        <td>{b.service.title}</td>
                        <td> <img src={b.service.service_image} width="100" height="100" alt="" /></td>
                        <td>{b.service.duration}</td>
                        <td>{b.service.price}</td>
                        <td><CancelButton id={b.id} iscancel={b.iscancel}/></td>
                      </tr>
                  );
                })
              }
              </tbody>
            </Table>
      </div>
        
    );
  }
}

class CancelButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      iscancel: props.iscancel?true:false
    }
    console.log(this.state.iscancel);
  }

  render() {
    return (
      <div>
        <Button variant="danger" id={this.props.id} onClick={this._buttonClick} size="sm" disabled={this.state.iscancel}>Cancel</Button>
      </div>
    )
  };
}

export default CustomerBookingList;
