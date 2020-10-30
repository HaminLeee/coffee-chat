import React, { Component } from 'react';
import { uid } from 'react-uid';
import '../chat.css';
import Message from "./Message";

class Chat extends Component {
    state = {
        pageName: 'Chat',
        active: true,
        contacts: ["Umid", "Hamin", "Thuy", "Addie", "Trump", "Biden", "ADD"],
        messages: [
            {content:"Hi!", from: "Umid", to: "Thuy"},
            {content:"Hi!", from: "Thuy", to: "Umid"},
            {content:"Wassup!", from: "Umid", to: "Thuy"},
            {content:"Have u started 311?", from: "Umid", to: "Thuy"}
            ]
    }
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        this.setState( {active: !this.state.active});

    };
    render() {
        const contactList = this.state.contacts.map((contact)=> {
           return (<li className="contact">{contact}</li>)
        });

        const messageList = this.state.messages.map((message ) => {
          return (<Message fromMe={message.from == "Umid"} content={message.content} />)
        });

        return (
            <div className={this.state.active?"chat open": "chat"} >
               <div onClick={this.toggleClass} className="header">
                   Chat
               </div>
                <div className={this.state.active?null:"hide"}>
                    <ul className="contacts">
                        {contactList}
                    </ul>
                    <ul className="messages">
                        {messageList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Chat;