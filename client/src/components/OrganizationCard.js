import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../organization.css';

class OrganizationCard extends Component {
     state = {
          organizations: ['UofT', 'Amazon', 'Intel', 'CSC309', 'KDMFKSD', 'SSDFPSDP'],

     }

     render() {
          const organizationCards = this.state.organizations.map((organization) => {
               return (
                   <div className="organizationCard">
                        <div className="organizationContainer">
                            <div>
                                <h2><b>{organization}</b></h2>
                            </div>
                            <div>
                                {/*we only hard-code created the pages for Uoft right now
                                Our others pages will be blank */}
                                 <Link to={ '/' + organization }>
                                        <button className="exploreButton"> Explore </button>
                                 </Link>
                            </div>
                        </div>
                   </div>
               )
          })
          return (
              <div className="organizationCards">
                   {organizationCards}
              </div>
          );
     }
}

export default OrganizationCard;