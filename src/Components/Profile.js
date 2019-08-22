import React, { Component } from 'react';
import RetailProfile from './RetailProfile';
import CustomerProfile from './CustomerProfile';
import '../Css/User.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
const ShowProfile = () => {
    if (localStorage.user_id !== "0" && localStorage.user_type === "CUSTOMER") {
        return (
            <CustomerProfile />
        )

    } else if (localStorage.user_id !== "0" && localStorage.user_type === "RETAIL") {
        return (
            <RetailProfile />
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Profile;
