import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../organization.css';

class AdminOrganizationCard extends Component {
     state = {
          organizations: ['UofT', 'CSC369', 'CSSU', 'CSC309', 'Trinity College', 'Arts & Science', 'CSC108', 'CSC-TAs'],

     }

     addOrganization = () => {
          this.state.organizations.push('Google');
          let list = this.state.organizations;
          this.setState({
               organizations: list
          })
     }

     render() {
          const organizationCards = this.state.organizations.map((organization) => {
               return (
                   <div className="organizationCard">
                        <div className="organizationContainer">
                            <div>
                                <h2><b>{organization}</b></h2>
                            </div>
                            <Link to={ '/uoft' }>
                                   <button className="exploreButton"> Explore </button>
                            </Link>
                        </div>
                   </div>
               )
          })
          return (
               <div>
                    <button className="addOrgButton" onClick={this.addOrganization}> Add Organization </button>
                    <div className="organizationCards">
                         {organizationCards}
                    </div>
               </div>
          );
     }
}

export default AdminOrganizationCard;