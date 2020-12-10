import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import OrganizationCard from '../UserCard/OrganizationCard';

class ExplorePage extends Component {
     constructor(props) {
          super(props);
          this.props.history.push("/dashboard");
      }
     render() {
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>Explore Organizations</h1>
                         <OrganizationCard></OrganizationCard>
                    </div>
               </div>
          );
     }
}


export default ExplorePage;