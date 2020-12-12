import React, { Component } from 'react';
import { uid } from 'react-uid';
import './chat.css';
import Message from "./Message";
import '../../actions/message'
import {getContactsOfUser, getMessagesFromUser, sendMessageToUser} from "../../actions/message";
import LoginPage from "../Login";

class Chat extends Component {
    state = {
        pageName: 'Chat',
        active: false,
        contacts: [],
        messages: [],
        inputValue: "",
        chosenContact: null,
    }
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onClickContact = this.onClickContact.bind(this);
    }
    //function to choose clicked contact
    onClickContact(uid, e) {
        e.preventDefault();
        this.state.contacts.forEach((contact)=>{
            if(contact._id == uid) {
                this.setState({chosenContact:  contact});
                getMessagesFromUser(this);
            }
        })
    }
    //function to open and close chatbox
    toggleClass() {
        if(!this.state.active){
            getContactsOfUser(this);
        }
        else {
            this.setState({chosenContact: ""});
            this.setState({messages: []});
            this.setState({inputValue: ""});
        }
        this.setState( {active: !this.state.active});
    };
    //function to send form inputs to user
    onSend(e) {
        e.preventDefault();
        sendMessageToUser(this);
    }
    //function to update input form
    onUpdate(e) {
        this.setState({inputValue: e.target.value});
    }
    render() {
        const contactList = this.state.contacts.map((contact)=> {
            if (!this.state.chosenContact || this.state.chosenContact._id !== contact._id){
                return (<li className="contact" onClick={this.onClickContact.bind(this, contact._id)}
                            key={uid(contact)}>
                    {contact.name}
                </li>);
            }
            else {
                return (<li className="contact chosen" onClick={this.onClickContact.bind(this, contact._id)}
                            key={uid(contact)}>
                    {contact.name}
                </li>);
            }

        });

        const messageList = this.state.messages.map((message ) => {
            return (<Message fromMe={message.to === this.state.chosenContact.email} content={message.content} key={uid(message)} />)
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