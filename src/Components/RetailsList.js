import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


const RETAILS_LIST_API = 'http://localhost:3000/retails.json';

class RetailsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retails: []

    };

    const fetchRetailsList = () => {
      axios.get(RETAILS_LIST_API).then((result) => {
        // console.log(result.data);
        this.setState({ retails: result.data });
      });
    };
    fetchRetailsList();
  }


  render() {
    return (

      <div>

        <Button className="newRetail" variant="light" size="lg" active>Add New Retail
        </Button>

        <Table striped bordered hover>
          <tr>
            <th>Name</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>Suburb</th>
            <th>Postcode</th>
          </tr>
          <tbody>
            {this.state.retails.map((retails) => (
              <tr key={retails.user_id}>
                <td>{retails.retail_name}</td>
                <td>{retails.address1}</td>
                <td>{retails.address2}</td>
                <td>{retails.suburb}</td>
                <td>{retails.postcode}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    );
  }
}

export default RetailsList;

