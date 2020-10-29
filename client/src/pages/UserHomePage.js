import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import UserCards from '../components/UserCards';

class UserHomePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar></Sidebar>
                    <div id="homeHeader"> 
                         <h1>People @UofT</h1>
                         <UserCards></UserCards>
                    </div>
               </div>
          );
     }
}

export default UserHomePage;