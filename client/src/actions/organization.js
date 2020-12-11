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
            if (json && json.currentUser && json.isAdmin) {
                app.setState({ currentUser: json.currentUser, isAdmin: json.isAdmin });
            }
            // if (json && json.isAdmin) {
            //     app.setState({ isAdmin: json.isAdmin });
            // }
        })
        .catch(error => {
            console.log(error);
        });
};

// A functon to update the login form state
export const updateOrgForm = (addOrgComp, field) => {
    const value = field.value;
    const name = field.name;

    addOrgComp.setState({
        [name]: value
    });
};

export const addOrganization = (addOrgComp, app) => {
    const request = new Request("/api/organization", {
        method: "post",
        body: JSON.stringify(addOrgComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        } 
    })
     // Send the request with fetch()
     fetch(request)
        .then(res => {
            if (res.status === 200) {
                console.log('Successfully added new organization')
                return res.json();
            }
        })
        .then(json => {
            console.log(json)
            if(json) {
                let updated =  [];
                console.log(addOrgComp.state)
                updated = addOrgComp.state.organizations;
                console.log(updated.push(json))
                addOrgComp.setState({organizations: updated,  currentUser: json.currentUser, isAdmin: json.isAdmin })
            }
            return json;
        })
        .catch(error => {
            console.log(error);
        });
}

export const getAdminAllOrganization = (orgComp) => {
    const url = "/api/admin/organizations";
  
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log(json)
            // if(json) {
            //     // console.log(result);
            orgComp.setState({organizations: json.organizations })
            // }
        })
        .catch(error=> {
            console.log(error)
        })
}

export const getAllOrganization = (orgComp) => {
    const url = "/api/allOrganizations";
  
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            console.log(json)
            // if(json) {
            //     // console.log(result);
            orgComp.setState({organizations: json.organizations })
            // }
        })
        .catch(error=> {
            console.log(error)
        })
}

export const deleteOrganization = (addOrgComp, id) => {
    let url = "/api/organization/" + id
    const request = new Request(url, {
        method: "delete",
        body: JSON.stringify(addOrgComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        } 
    })
     // Send the request with fetch()
     fetch(request)
        .then(res => {
            if (res.status === 200) {
                console.log('Successfully delete organization')
                return res.json();
            }
        })
        .then(json => {
            console.log(json)
            if(json) {
                let updated = addOrgComp.state.organizations.filter((org) => org._id != id);
                
                addOrgComp.setState({organizations: updated,  currentUser: json.currentUser, isAdmin: json.isAdmin })
            }
        })
        .catch(error => {
            console.log(error);
        });
}
