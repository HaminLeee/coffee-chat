import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import UserExplorer from '../components/UserExplorer';

class UserExplorerPage extends Component {
     
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar></Sidebar>
                    <div id="homeHeader">
                         <h1>Thuy's Profile</h1>
                         <UserExplorer></UserExplorer>
                         
                    </div>
                    
               </div>
          );
     }
}

export default UserExplorerPage;