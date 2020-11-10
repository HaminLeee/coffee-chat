import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import UserCards from '../components/UserCards';
import App from '../App.js';

class UserHomePage extends Component {
    state = {
        pageName: 'UofT',
    }
    constructor(props) {
        super(props);
        this.state.pageName = this.props.match.params.orgName;
    }
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar></Sidebar>
                    <div id="homeHeader"> 
                         <h1>People @{this.state.pageName}</h1>
                         <UserCards></UserCards>
                    </div>
               </div>
          );
     }
}

export default UserHomePage;