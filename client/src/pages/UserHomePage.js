import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import UserCards from '../components/UserCards';

class UserHomePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar></Sidebar>
                    <UserCards></UserCards>
               </div>
          );
     }
}

export default UserHomePage;