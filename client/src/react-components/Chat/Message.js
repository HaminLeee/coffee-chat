import { Component } from 'react';
import "./chat.css";

class Message extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        if (this.props.fromMe) {
            return (
                <li className="message sent" >
                    <div className="messageContent">
                        {this.props.content}
                    </div>
                </li>
            );
        }
        else {
            return (
                <li className="message received" >
                    <div className="messageContent">
                        {this.props.content}
                    </div>
                </li>
            );
        }
    }
}

export default Message;