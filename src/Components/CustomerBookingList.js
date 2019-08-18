import React, { Component } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap";

const SERVER_URL = 'http://localhost:3000/bookings.json';


class CustomerBookingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
    const fetchBookings = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data);
        this.setState({bookings: results.data})
      })
    };
    fetchBookings();
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
        iscancel: false
      };
    }

  render() {
    
    return (
      <div>
        <h1>All bookings</h1>
        <Table striped bordered size='sm' >
            <thead>
              <tr>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Retail Name</th>
                <th>Service</th>
                <th>Service Image</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            {
              this.state.bookings.filter((u)=>{return u.user_id === 11}).map((b)=>{
                return(
                  <tr>
                    <td>{b.date}</td>
                    <td>{b.booking_time}</td>
                    <td>{b.retail.retail_name}</td>
                    <td>{b.service.title}</td>
                    <td> <img src={b.service.service_image} width="100" height="100" alt="" /></td>
                    <td>{b.service.duration}</td>
                    <td>{b.service.price}</td>
                    <td>{b.iscancel}</td>
                  </tr>
                );
              })
            }
          </Table>
      </div>
        
    );
  }
}

export default CustomerBookingList;
