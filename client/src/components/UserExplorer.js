import React, { Component } from 'react';
import '../userProfile.css'
import Chat from './Chat';

class UserExplorer extends Component {
    state = {
        user: 'Hamin',
        description: 'Fourth year student at UofT',
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
                <div className="userExplorerContainer">
                    <div>
                        <h4><b>{this.state.user}</b></h4>
                    </div>
                    <div>
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