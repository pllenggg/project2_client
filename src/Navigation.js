import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand> 
            {/* we will change this word later */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto"></Nav>
            <Nav.Link><Link to="/signup">Sign up</Link></Nav.Link>
            <Nav.Link><Link to="/signin">Sign in</Link></Nav.Link>
              <NavDropdown title="Customer" id="basic-nav-dropdown">
                <NavDropdown.Item href="#customerbookingsearch">Book services</NavDropdown.Item>
                <NavDropdown.Item href="#customerbookinglist">Booking lists</NavDropdown.Item> 
              </NavDropdown>
              
              <NavDropdown title="Retails" id="basic-nav-dropdown">
                <NavDropdown.Item href="#retailservicelist">Service lists</NavDropdown.Item>
                <NavDropdown.Item href="#retailbookinglist">Booking lists</NavDropdown.Item> 
              </NavDropdown>
              
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#retails">Retails</NavDropdown.Item>
                <NavDropdown.Item href="#categories">Categories</NavDropdown.Item> 
              </NavDropdown>

            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
