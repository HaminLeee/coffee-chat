import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import AdminUserCards from './AdminUserCards';

class AdminUserHomePage extends Component {
     render() {
          const {app} = this.props;
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>Organization Users</h1>
                         <AdminUserCards app={app}></AdminUserCards>
                    </div>
               </div>
          );
     }
}

export default AdminUserHomePage;