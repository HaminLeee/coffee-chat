import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UserCards from './UserCards';

class UserHomePage extends Component {
    state = {
        pageName: 'UofT',
    }
    constructor(props) {
        super(props);
        this.state.pageName = this.props.match.params.orgName;
        this.props.history.push("/dashboard");
    }

    state = {
          message: { type: "", body: "" }
     }
     render() {
          const { history, app } = this.props;
          return (
               <div className="pageContainer">
                    <Sidebar></Sidebar>
                    <div id="homeHeader"> 
                         <h1>People @{this.state.pageName}</h1>
                         <UserCards></UserCards>
                    </div>
               </div>
          );
     }
}

export default UserHomePage;