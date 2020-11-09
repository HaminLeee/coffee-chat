import React, { Component } from 'react';
import '../userProfile.css'
import '../assets/profile_picture.png'
import Chat from './Chat';

class UserExplorer extends Component {
    state = {
        user: 'Thuy',
        description: 'Third year student at UofT',
        chatOn: false
    }

   handleOnClick = () => {
        this.setState({
             chatOn: !this.state.chatOn
        })
   }

    render() {
        return (
            <div className="user">
                <div className="userContainer">
                    <div>
                        <img src={require("../assets/profile_picture2.png")} className="profilePicture" alt=""></img>
                    </div>
                    <div>
                        <h4><b>{this.state.user}</b></h4>
                        <h4><b>{this.state.description}</b></h4>
                    </div>
                    <div>
                        <button onClick={this.handleOnClick} className="messageButton"> Message </button>
                    </div>
                </div>
                {this.state.chatOn === true  &&
                        <Chat></Chat>
                }
            </div>
        )
    }
}

export default UserExplorer;