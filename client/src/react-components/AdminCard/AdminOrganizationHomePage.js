import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import AdminOrganizationCard from './AdminOrganizationCard';

class AdminOrganizationHomePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>Your Organizations</h1>
                         <AdminOrganizationCard></AdminOrganizationCard>
                    </div>
               </div>
          );
     }
}

export default AdminOrganizationHomePage;