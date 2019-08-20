import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/"><img src="https://png.pngtree.com/svg/20161008/24671b749c.png" width='40px' height='45px' />Bookbeuty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SignInUpMenu />
            <Nav className="mr-auto"></Nav>
            <CustomerMenuList />
            <RetailMenuList />
            <AdminMenuList />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


const SignInUpMenu = () => {

  if (localStorage.user_id === "0") {
    return (
      <div className="navbar-collapse collapse">
        <Nav.Link href="#signup">Sign up</Nav.Link>
        <Nav.Link href="#signin">Sign in</Nav.Link>
      </div>
    );
  } else {
    // show sign out menu
    return (
      <Nav.Link href="#signout">Sign Out</Nav.Link>
    );
  }
}



const CustomerMenuList = () => {
  if (localStorage.user_id && localStorage.user_id !== "0" && (localStorage.user_type === "CUSTOMER" || localStorage.user_type === "ADMIN")) {
    return (
      <div>
        <NavDropdown title="Customer" id="basic-nav-dropdown">
          <NavDropdown.Item href="#customerbookingsearch">Book services</NavDropdown.Item>
          <NavDropdown.Item href="#customerbookinglist">Booking lists</NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

const RetailMenuList = () => {
  if (localStorage.user_id && localStorage.user_id !== "0" && (localStorage.user_type === "RETAIL" || localStorage.user_type === "ADMIN")) {
    return (
      <NavDropdown title="Retails" id="basic-nav-dropdown">
        <NavDropdown.Item href="#retailservicelist">Service lists</NavDropdown.Item>
        <NavDropdown.Item href="#retailbookinglist">Booking lists</NavDropdown.Item>
      </NavDropdown>
    );
  } else {
    return (
      <div></div>
    );
  }
}

const AdminMenuList = () => {
  if (localStorage.user_id && localStorage.user_id !== "0" && localStorage.user_type === "ADMIN") {
    return (
      <NavDropdown title="Admin" id="basic-nav-dropdown">
        <NavDropdown.Item href="#retails">Retails</NavDropdown.Item>
        <NavDropdown.Item href="#categories">Categories</NavDropdown.Item>
      </NavDropdown>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default Navigation;
