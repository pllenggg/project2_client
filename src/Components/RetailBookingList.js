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

    const getBookingData = () =>{
      axios.get(BOOKING_SERVER_URL).then((result)=>{
        this.setState({booking_data:result.data});
      });
    }
    getBookingData();
  }

  render() {
    return (
        <div>
          <Table striped bordered size="sm">
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
            {
              // TODO: use login id instead of 8
              this.state.booking_data.filter((r)=>{return r.retail_id === 8}).map((b)=>{
                return(
                  <tr>
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
          </Table>
        </div>
    );
  }
}

export default RetailBookingList;
