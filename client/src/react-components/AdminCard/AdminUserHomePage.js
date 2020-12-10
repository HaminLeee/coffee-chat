import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import AdminUserCards from './AdminUserCards';

class AdminUserHomePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>Your Users</h1>
                         <AdminUserCards></AdminUserCards>
                    </div>
               </div>
          );
     }
}

export default AdminUserHomePage;