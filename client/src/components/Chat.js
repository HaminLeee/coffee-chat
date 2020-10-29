import React, { Component } from 'react';
import { uid } from 'react-uid';

class Chat extends Component {
    state = {
        pageName: 'Chat',
        chatList: ['Contact', 'Message']
    }
    render() {
        return (
            <div className ="Chat">
                <a>{ "Chat" }</a>
            </div>
        )
    }
}

export default Chat;