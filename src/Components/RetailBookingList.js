import React, { Component } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap";
const BOOKING_SERVER_URL = "http://localhost:3000/bookings.json";

class RetailBookingList extends Component {
  
  constructor() {
    super();
    this.state = {
      booking_data: []
    };
  }

  componentDidMount(){
    axios.get(BOOKING_SERVER_URL).then((result)=>{
      const login_id = Number(localStorage.user_id);
      let data = result.data.filter((b)=> {return b.retail_id === login_id});
        this.setState({booking_data:data});
    });
  }

  render() {
    return (
        <div>
          <h1>All Booking</h1>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Service</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
            {
              // TODO: use login id instead of 8
              this.state.booking_data.map((b)=>{
                return(
                  <tr key={b.id}>
                    <td>{b.customer.full_name}</td>
                    <td>{b.date}</td>
                    <td>{b.booking_time}</td>
                    <td>{b.service.title}</td>
                    <td>{b.service.duration}</td>
                    <td>{b.service.price}</td>
                    <td>{b.customer.phone}</td>
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

export default RetailBookingList;
