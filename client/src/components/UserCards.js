import React, { Component } from 'react';

class UserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary', 'Benjamin', 'Robert', 'Berk', 'Ethan'],

     }

     render() {
          const userCards = this.state.userNames.map((user) => {
               return (
                    <div className="organizationCard">
                         <div className="userContainer">
                              <h2 className="userNameText"><b>{user}</b></h2>
                              
                              <button className="exploreButton">Connect</button>
                         </div>
                    </div> 
               )
          })
          return (
              <div className="userCards">
                   {userCards}
              </div> 
          );
     }
}

export default UserCards;