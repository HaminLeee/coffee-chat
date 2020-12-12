// Functions to help with user actions.

// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A functon to update the login form state
export const updateLoginForm = (loginComp, field) => {
    const value = field.value;
    const name = field.name;

    loginComp.setState({
        [name]: value
    });
};

export const signup = (signUpComp, app) => {
    const request = new Request("/api/users", {
        method: "post",
        body: JSON.stringify(signUpComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        } 
    })
     // Send the request with fetch()
     fetch(request)
        .then(res => {
            if (res.status === 200) {
                console.log('Successfully Added User')
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
        });
}
// A function to send a POST request with the user to be logged in
export const login = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(loginComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log(json)
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser, isAdmin: json.isAdmin });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllUsers = (app, id) => {
    let url = '/api/allUsers/' + id;
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json)
            app.setState({
                people: json.people
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const getUser = (app, id) => {
    let url = '/api/user/' + id;

    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json)
            app.setState({
                user: json.user.name,
                occupation: json.user.occupation
            })
        })
        .catch(error => {
            console.log(error);
        })
}

export const kickUserFromOrganization = (app, id, orgId) => {
    let url = "/api/kickUser/" + id + '/' + orgId;
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(app.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.log(error)
        })
 
}