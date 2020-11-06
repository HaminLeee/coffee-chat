import React, { Component } from 'react';

class UserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary', 'Benjamin', 'Robert', 'Berk', 'Ethan', 'More other users ...'],

     }

     addUser = () => {
          this.state.userNames.push('New User');
          let list = this.state.userNames;
          this.setState({
               userNames: list,
          })
     }

     deleteUser = (user) => {
          let updated = this.state.userNames.filter((u) => u !== user);
          this.setState({
               userNames: updated,
          })
     }

     render() {
          const userCards = this.state.userNames.map((user) => {
               return (
                    <div className="userCard">
                         <div className="userContainer">
                              <h2 className="userNameText"><b>{user}</b></h2>
                              <div>
                                   <button className="exploreButton">Connect</button>
                                   <br></br>
                                   <button className="delOrgButton" onClick={() => this.deleteUser(user)}> Delete </button>
                              </div>
                         </div>
                    </div> 
               )
          })
          return (
               <div>
                    <div>
                         <button className="addOrgButton" onClick={this.addUser}> Add User </button>
                         <br></br>
                    </div>
                    <div className="userCards">
                         {userCards}
                    </div> 
               </div>
          );
     }
}

export default UserCards;