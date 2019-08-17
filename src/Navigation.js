import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand> 
            {/* we will change this word later */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
              <NavDropdown title="Customer" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/customerbookingsearch">Book services</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/customerbookinglist">Booking lists</Link></NavDropdown.Item> 
              </NavDropdown>
              
              <NavDropdown title="Retails" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/retailservicelist">Service lists</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/retailbookinglist">Booking lists</Link></NavDropdown.Item> 
              </NavDropdown>
              
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/retails">Retails</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/categories">Categories</Link></NavDropdown.Item> 
              </NavDropdown>

            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
