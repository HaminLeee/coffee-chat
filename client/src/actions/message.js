
/**Getting messages from chosen user
 *
 * Parameter:
 *      chatComp: Chat component
 * */
export const getMessagesFromUser = (chatComp) => {
    console.log(chatComp.state.chosenContact)
    // Since get request wont have body, we make "post" request
    const request = new Request("/api/getmessages", {
        method: "post",
        body: JSON.stringify({
            "email": chatComp.state.chosenContact.email
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            //Converting values to json
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            //If json returned, load messages to screen
            if(json) {
                chatComp.setState(
                    {
                        messages: json.messages
                    }
                )
            }

        })
        .catch(error => {
            console.log(error);
        });
}

/**
 * Send Message to chose contact
 *
 * Parameter:
 *      chatComp: Chat Component
 * */
export const sendMessageToUser = (chatComp) => {
    const request = new Request("/api/messages", {
        method: "post",
        body: JSON.stringify({
            "content": chatComp.state.inputValue,
            "to": chatComp.state.chosenContact.email
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if(json) {
                const newMessage = {content:json.content, from:json.from, to: json.to}
                console.log("new message added: ", newMessage)
                chatComp.setState({messages:[...chatComp.state.messages, newMessage]} );
            }

        })
        .catch(error => {
            console.log(error);
        });
}
/**
 * Get contacts of current user
 *
 * Parameter:
 *      chatComp: Chat component
 * */
export const getContactsOfUser = (chatComp) => {
    const request = new Request("/api/contacts", {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if(json) {
                const {contacts} = json;
                console.log(contacts);
                chatComp.setState({contacts: contacts})
            }
        })
        .catch(error=> {
            console.log(error)
        })
}
/**
 * Adding contact to on both of the User's contact list
 *
 * Parameter:
 *      orgComp: Organization component
 *      values: dictionary storing email and name of clicked contact
 * */
export const addContactUser = (orgComp, values) => {
    const request = new Request("/api/contacts", {
        method: "post",
        body: JSON.stringify(values),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error=> {
            console.log(error)
        })
}