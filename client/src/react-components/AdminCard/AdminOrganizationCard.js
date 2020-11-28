import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './organization.css';

class AdminOrganizationCard extends Component {
     constructor(props) {
          super(props);

          this.state = {
               organizations: ['UofT', 'CSC369', 'CSSU', 'CSC309', 'Trinity College', 'Arts & Science', 'CSC108', 'CSC-TAs'],
               newOrganizationName: ""
          }
          this.addOrganization = this.addOrganization.bind(this);
          this.deleteOrganization = this.deleteOrganization.bind(this);
          this.handleInputChange = this.handleInputChange.bind(this);
     }

     addOrganization = () => {
          this.state.organizations.push(this.state.newOrganizationName);
          let list = this.state.organizations;
          this.setState({
               organizations: list,
          })
     }

     deleteOrganization = (organization) => {
          let updated = this.state.organizations.filter((org) => org !== organization);

          this.setState({
               organizations: updated
          })
     }

     handleInputChange = e => {
          this.setState({ 
               newOrganizationName: e.target.value,
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
                            <div>
                                   <Link to={ '/admin/user' }>
                                             <button className="exploreButton"> Explore </button>
                                   </Link>
                                   <br></br>
                                   <button className="delOrgButton" onClick={() => this.deleteOrganization(organization)}> Delete </button>
                              </div>
                         </div>
                   </div>
               )
          })
          return (
               <div>
                    <div>
                         <form>
                              <label>
                                   <h4>New Organization Name</h4>
                                   <input onChange={this.handleInputChange} type="text" name="name" />
                              </label>
                         </form>
                         <br></br>
                         <button className="addOrgButton" onClick={this.addOrganization}> Add Organization </button>
                    </div>
                    <div className="organizationCards">
                         {organizationCards}
                    </div>
               </div>
          );
     }
}

export default AdminOrganizationCard;