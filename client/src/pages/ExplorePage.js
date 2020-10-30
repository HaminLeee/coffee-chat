import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import OrganizationCard from '../components/OrganizationCard';

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