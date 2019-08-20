import React, { Component } from 'react';
import { InputGroup, DropdownButton, FormControl, Dropdown, Button, Card } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Search Beauty Services</h2>
        <>
          <h1 className="titleSearchHome">Filter By Category</h1>
          <InputGroup className="mb-3">
            <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Category"
              id="input-group-dropdown-1">
              <Dropdown.Item href="#">Nails</Dropdown.Item>
              <Dropdown.Item href="#">Hairdressing</Dropdown.Item>
              <Dropdown.Item href="#">Eyes, Brows and Lashes</Dropdown.Item>
              <Dropdown.Divider />
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
          <Button className="buttonHomeSearch" variant="secondary" size="lg" block>Search</Button>

        </>
        <hr />
        <h3>Explore popular treament</h3>
        <Card className="cardHomePage" style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Img variant="top" width='400px' height='225px' />
        </Card>
        <Card.Body>
          <Card.Title>Nails</Card.Title>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card className="cardHomePage" style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Img variant="top" width='400px' height='225px' />
        </Card>
        <Card.Body>
          <Card.Title>Hairdressing</Card.Title>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card className="cardHomePage" style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Img variant="top" width='400px' height='225px' />
        </Card>
        <Card.Body>
          <Card.Title>Eyes, Brows and Lashes</Card.Title>
          <Button variant="primary">Go</Button>
        </Card.Body>

      </div >


    );
  }
}


export default Home;
