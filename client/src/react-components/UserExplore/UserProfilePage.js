import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import UserProfile from './UserProfile';

class UserProfilePage extends Component {
     
     render() {
          return (
               <div className="pageContainer">
                    <div id="homeHeader">
                         <h1>User's Profile</h1>
                         <UserProfile></UserProfile>
                         
                    </div>
                    
               </div>
          );
     }
}

export default UserProfilePage;