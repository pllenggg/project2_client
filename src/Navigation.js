import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
          <Link to="/">Home</Link> |  
          {/* we will change this word later */}
          <Link to="#">Customer</Link> - <Link to="/customerbookingsearch">Book Service</Link> - <Link to="/customerbookinglist">Booking List</Link> |
          
          <Link to="#">Retail</Link> -
          <Link to="/retailservicelist">Service List</Link> - 
          <Link to="/retailbookinglist">Booking List</Link> |

          <Link to="#">Admin</Link> -
          <Link to="/retails">Retail List</Link> -
          <Link to="/categories">Categories List</Link> 

      </div>
    );
  }
}

export default Navigation;
