import React, { Component } from 'react';
import axios from 'axios';
import '../Css/User.css';

const CUSTOMER_API = 'https://bookbeauty.herokuapp.com/customers.json'
// const CUSTOMER_API = 'http://localhost:3000/customers.json'
class Profile extends Component {
    componentDidMount(){
        if (localStorage.user_id !== "0" && localStorage.user_type === "RETAIL"){
          this.props.history.push('/retailprofile');
        }else if (localStorage.user_id !== "0" && localStorage.user_type === "CUSTOMER"){
          axios.get(CUSTOMER_API).then((response)=>{
            if (response){
              const exitsUser = response.data.map((x)=> x.user_id).indexOf(Number(localStorage.user_id));
              if (exitsUser!==-1){
                this.props.history.push('/customerprofile');
              }else{
                this.props.history.push('/newcustomer');
              }
              
            }
          })
        }else{
          console.log('This person is admin.')
        }
      }
    
      render() {
        return (
            <div className="container">
                <div className="wrapperProfile">
                    <ShowProfile />
                </div>
            </div>
        );
      }
}

export default Profile;
