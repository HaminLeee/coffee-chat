import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import UserExplorer from './UserExplorer';

class UserExplorerPage extends Component {
     
     render() {
          return (
               <div className="pageContainer">
                    <div id="homeHeader">
                         <h1>User's Profile</h1>
                         <UserExplorer></UserExplorer>
                         
                    </div>
                    
               </div>
          );
     }
}

export default UserExplorerPage;