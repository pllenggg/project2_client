import React, { Component } from 'react';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container" >
          <p className="iconFooter"><img src="https://png.pngtree.com/svg/20161008/24671b749c.png" alt="" width='35px' height='40px' />Bookbeauty</p>
          <small className="copyRight">© 2019</small>
        </div>

        <div class="col-6 col-md">
          <h5><img src="https://image.flaticon.com/icons/svg/33/33999.svg" alt="" width='20px' height='23px' />Contact Us</h5>
          <ul class="list-unstyled text-small">
            <ul className="contactUs"></ul>
            <li className="emailFooter">amy@ga.co</li>
            <li className="emailFooter">mee@ga.co</li>
            <li className="emailFooter">nilana@ga.co</li>
            <li className="emailFooter">plleng@ga.co</li>
          </ul>
        </div>
      </footer >
    );
  }
}
export default Footer;
