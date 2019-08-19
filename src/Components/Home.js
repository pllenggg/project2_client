import React, { Component } from 'react';
import { InputGroup, DropdownButton, FormControl, Dropdown, Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <>
          <InputGroup className="mb-3">
            <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Category"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Nails</Dropdown.Item>
              <Dropdown.Item href="#">Hairdressing</Dropdown.Item>
              <Dropdown.Item href="#">Eyes, Brows and Lashes</Dropdown.Item>
              <Dropdown.Divider />
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>

          <InputGroup>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Address"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <Button className="buttonHomeSearch" variant="secondary" size="lg" block>Search</Button>
          </InputGroup>
        </>

      </div>
    );
  }
}

export default Home;
