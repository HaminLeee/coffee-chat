// Functions to help with user actions.

// Send a request to check if a user is logged in through the session cookie
/**
 * Checking session of current user
 *
 * Parameter:
 *      app: App.js component
 * */
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
/**
 * Adding organization to Database
 *
 * Parameter:
 *      addOrgComp: AddOrganization component
 *      app: App.js component
 * */
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
/**
 * Getting all organizations created by admin
 *
 * Parameter:
 *      orgComp: Organization component
 * */
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
/**
 * Getting all organizations
 *
 * Parameter:
 *      orgComp: Organization component
 * */
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
/**
 * Deleting organization with given id
 *
 * Parameter:
 *      orgComp: Organization component
 *      id: id of deleted organization
 * */
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
                let updated = addOrgComp.state.organizations.filter((org) => org._id !== id);
                
                addOrgComp.setState({organizations: updated,  currentUser: json.currentUser, isAdmin: json.isAdmin })
            }
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 * Adding user with given id to organization
 *
 * Parameter:
 *      orgComp: Organization component
 *      id: id of joining user
 * */
export const joinOrganization = (orgComp, id) => {
    let url = '/api/joinOrganization/' + id;
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(orgComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        } 
    })
    console.log(request);
    fetch(request)
        .then(res => {
            return res.json()
        })
        .catch(error => {
            console.log(error)
        })
}