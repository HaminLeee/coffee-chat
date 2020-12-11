import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import UserCards from './UserCards';

class OrganizationUsers extends Component {

     constructor(props) {
          super(props);
     }

     state = {
          message: { type: "", body: "" },
          pageName: '',
     }

     componentDidMount() {
          
     }

     render() {
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>People @{this.state.pageName}</h1>
                         <UserCards></UserCards>
                    </div>
               </div>
          );
     }
}

export default OrganizationUsers;