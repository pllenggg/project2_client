import React,{Component} from 'react';
import axios from 'axios';


const RETAIL_API = 'http://localhost:3000/retails/:id.json'

class RetailProfile extends Component {
    constructor() {
        super();
        this.state = {
            retail: {}
        };


        const id = localStorage.user_id;
        const fetchData = () => {
            const url = RETAIL_API.replace(":id", id);
            axios.get(url).then((results) => {
                this.setState({retail: results.data});
                console.log('retail:', results.data);
            });
        }
        fetchData();

    }
    
    render() {
        return(
            <div>
                
                <h3>{this.state.retail.retail_name}</h3> 
                <p>PHONE: {this.state.retail.phone}</p>
                <p>ADDRESS: {this.state.retail.address1}, {this.state.retail.address2}</p>
                <p>SUBURB: {this.state.retail.suburb}</p>
                <p>POSTCODE: {this.state.retail.postcode}</p>
                <p>FACEBOOK: {this.state.retail.suburb}</p>
                <p>INSTAGRAM: {this.state.retail.indtagram}</p>
                <p>WEBSITE: {this.state.retail.website}</p> 
                <button id="">edit</button>
            </div>
        )
    }
}

export default RetailProfile;