export const getMessagesFromUser = (chatComp) => {
    console.log(chatComp.state.chosenContact)
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
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
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