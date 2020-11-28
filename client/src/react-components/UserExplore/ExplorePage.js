import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrganizationCard from '../UserCard/OrganizationCard';

class ExplorePage extends Component {
     render() {
          return (
               <div className="pageContainer">
                    <Sidebar></Sidebar>
                    <div id="homeHeader"> 
                         <h1>Explore Organizations</h1>
                         <OrganizationCard></OrganizationCard>
                    </div>
               </div>
          );
     }
}


export default ExplorePage;