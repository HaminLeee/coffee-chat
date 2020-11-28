import React, { Component } from 'react';
import { uid } from 'react-uid';
import './chat.css';
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
            ],
        inputValue: "",
        chosenContact: "",
    }
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onClickContact = this.onClickContact.bind(this);
    }
    onClickContact(e) {
        e.preventDefault();
        this.setState({chosenContact:  e.target.textContent});
    }
    toggleClass() {
        this.setState( {active: !this.state.active});
    };
    onSend(e) {
        e.preventDefault();
        const newMessage = this.state.inputValue;
        this.setState({messages:[...this.state.messages, {content:newMessage, from:"Umid", to: this.state.chosenContact}]} );
    }
    onUpdate(e) {
        this.setState({inputValue: e.target.value});
    }
    render() {
        const contactList = this.state.contacts.map((contact)=> {
            if (this.state.chosenContact !== contact){
                return (<li className="contact" onClick={this.onClickContact} key={uid(contact)}>{contact}</li>);
            }
            else  {
                return (<li className="contact chosen" onClick={this.onClickContact} key={uid(contact)}>{contact}</li>);
            }

        });

        const messageList = this.state.messages.map((message, index ) => {

            if ((message.from === this.state.chosenContact && message.to === "Umid") ||
                (message.to === this.state.chosenContact && message.from === "Umid")) {
                return (<Message fromMe={message.from === "Umid"} content={message.content} key={uid(message)} />)
            }
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
                    <div className='messageContainer'>
                        <ul className="messages">
                            {messageList}
                        </ul>
                        <form className="messageForm" onSubmit={this.onSend}>
                            <input type="text" name="message" placeholder="Type something..." required="required"
                                   value={this.state.inputValue} onChange={this.onUpdate} className="messageInput"/>
                            <button type="submit" className="submitButton" >send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;