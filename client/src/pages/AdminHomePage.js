import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import AdminOrganizationCard from '../components/AdminOrganizationCard';

class AdminHomePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar isAdmin="true"></Sidebar>
                    <div id="homeHeader"> 
                         <h1>Your Organizations</h1>
                         <AdminOrganizationCard></AdminOrganizationCard>
                    </div>
               </div>
          );
     }
}

export default AdminHomePage;