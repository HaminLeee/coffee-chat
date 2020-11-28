import React, { Component } from 'react';
import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';
// import '../organization.css';
import { uid } from 'react-uid';

class UserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary', 'Benjamin', 'Robert', 'Berk', 'Ethan'],
          chatOn: false
     }

     handleOnClick = () => {
          this.setState({
               chatOn: !this.state.chatOn
          })
     }

     render() {
          const userCards = this.state.userNames.map((user) => {
               return (
                    <div className="userCard" key={uid(user)}>
                         <div>
                              <h2 className="userNameText"><b>{user}</b></h2>
                              <Link to='/user/explorer'>
                                   <button className="exploreButton">Explore</button>
                              </Link>
                              <br></br>
                              <button onClick={this.handleOnClick} className="connectButton">Message</button>
                         </div>
                    </div> 
               )
          })
          return (
               <div>
                    <div className="userCards">
                         {userCards}
                    </div> 
                    {this.state.chatOn === true  &&
                         <Chat></Chat>
                    }
               </div>
          );
     }
}

export default UserCards;