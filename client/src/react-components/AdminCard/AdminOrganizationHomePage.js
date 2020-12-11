import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import AdminOrganizationCard from './AdminOrganizationCard';

class AdminOrganizationHomePage extends Component {
     constructor(props) {
          super(props);
     }

     render() {
          const {app} = this.props;
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>Your Organizations</h1>
                         <AdminOrganizationCard {...this.props} app={app}></AdminOrganizationCard>
                    </div>
               </div>
          );
     }
}

export default AdminOrganizationHomePage;