import React, { Component } from 'react';
import { uid } from 'react-uid';
import '../chat.css';

class Chat extends Component {
    state = {
        pageName: 'Chat',
    }
    render() {
        function handleClick(e) {
            e.preventDefault();
            // setChatAnimation(true);
            // chatAnimation = {chatAnimation}
        }
        return (
            <div className ="chat">
                <a href="#" onClick={handleClick}>
                    Chat
                </a>
            </div>
        )
    }
}

export default Chat;