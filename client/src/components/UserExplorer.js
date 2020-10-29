import React, { Component } from 'react';
import '../userProfile.css'

class UserExplorer extends Component {
    state = {
        user: 'Hamin',
        description: 'Fourth year student at UofT'
    }

    render() {
        return (
            <div className="user">
                <div className="userContainer">
                    <div>
                        <h4><b>{this.state.user}</b></h4>
                    </div>
                    <div>
                        <h4><b>{this.state.description}</b></h4>
                    </div>
                    <div>
                        <button className="messageButton"> Message </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserExplorer;