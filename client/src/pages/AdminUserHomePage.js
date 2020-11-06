import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import AdminUserCards from '../components/AdminUserCards';

class AdminUserHomePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar isAdmin="true"></Sidebar>
                    <div id="homeHeader"> 
                         <h1>Your Users</h1>
                         <AdminUserCards></AdminUserCards>
                    </div>
               </div>
          );
     }
}

export default AdminUserHomePage;