import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminUserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary', 'Robert' ],
          newUserName: ''

     }

     addUser = () => {
          this.state.userNames.push(this.state.newUserName);
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

     handleInputChange = e => {
          this.setState({ 
               newUserName: e.target.value,
          })

     }

     render() {
          const userCards = this.state.userNames.map((user) => {
               return (
                    <div className="userCard">
                         <div className="adminContainer">
                              <h2 className="userNameText"><b>{user}</b></h2>
                              <div>
                                   <Link to={'/user/explorer'}>
                                        <button className="exploreButton">View Profile</button>
                                   </Link>
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
                         <form>
                              <label>
                                   <h4>New User Name</h4>
                                   <input onChange={this.handleInputChange} type="text" name="name" />
                              </label>
                         </form>
                         <br></br>
                         <button className="addOrgButton" onClick={this.addUser}> Add User </button>
                    </div>
                    <div className="userCards">
                         {userCards}
                    </div> 
               </div>
          );
     }
}

export default AdminUserCards;