import React, { Component } from 'react';

class UserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary'],
          
     }

     render() {
          const userCards = this.state.userNames.map((user) => {
               return (
                    <div className="userCard">
                         <div className="userContainer">
                              <h4><b>{user}</b></h4>
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