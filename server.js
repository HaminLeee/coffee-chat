/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const path = require('path')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");
const { Person } = require("./models/person");
const { Organization } = require("./models/organization");
const { Message } = require("./models/message");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));


function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}


/*** Session handling **************************************/
// Create a session and session cookie
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        }
    })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByEmailPassword(email, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.email = user.email; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            res.send({ currentUser: user.email, isAdmin: user.isAdmin });
        })
        .catch(error => {
            console.log(error)
            res.status(400).send()
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ currentUser: req.session.email });
    } else {
        res.status(401).send();
    }
});

/*********************************************************/

/*** API Routes below ************************************/
// User API Route
app.post('/api/users', mongoChecker, async (req, res) => {
    log(req.body)

    // Create a new user
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        occupation: req.body.occupation,
        contacts: [],
    })
    if (user.name === 'admin') {
        user.isAdmin = true;
    }

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

app.post('/api/joinOrganization', mongoChecker, async (req, res) => {
    log(req.body)
    // Find user by ID

    // Add to subdocument of Organizatio model
    
})

/** Student resource routes **/
// Get user
app.get('/api/user/:uid', mongoChecker, authenticate, async (req, res) => {
    // Find user Given Id 
    
    // Get info of the user

    // Save student to the database
    // async-await version:
    try {
        const result = await person.save() 
        res.send(result)
    } catch(error) {
        log(error) // log server error to the console, not to the client.
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})


// Get all user given orgId
app.get('/api/allUsers/:orgId', mongoChecker, authenticate, async (req, res) => {    

    // Get allUsers
    try {
        const people = await Person.find({creator: req.user._id})
        // res.send(students) // just the array
        res.send({ people }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

// other student API routes can go here...
// ...
// a POST route to *create* a student
app.post('/api/organization', mongoChecker, authenticate, async (req, res) => {
    log(`Adding organization ${req.body.name}, created by user ${req.user._id}`)
    
    // Create a new student using the Student mongoose model
    const organization = new Organization({
        name: req.body.name,
        description: req.body.description,
        creator: req.user._id,
        people: [],
    })


    // Save student to the database
    // async-await version:
    try {
        const result = await organization.save() 
        res.send(result)
    } catch(error) {
        log(error) // log server error to the console, not to the client.
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})

/// Route for deleting organization  
// DELETE /api/organization/<organization_id>/ 

app.delete('/api/organization/:id', async (req, res) => {  
    const id = req.params.id;  
    if (!ObjectID.isValid(id)) {  
        res.status(404).send();  
        return;  
    }  
  

    // Add code here  
    try {  
        const organization = await Organization.findById(id);  
        if (!organization) {  
            res.status(404).send('Resource not found');  
            return;  
        }   
        await organization.deleteOne({_id: id});
        res.send({organization});  
    } catch (error) {  
        log(error);  
        if (isMongoError(error)) {  
            res.status(500).send('Internal server error');  
        } else {  
            res.status(400).send('Bad Request');  
        }  
    }  
  
})  
  

app.get('/api/admin/organizations', mongoChecker, authenticate, async (req, res) => {
    // Get the students
    try {
        const organizations = await Organization.find({creator: req.user._id})
        // res.send(students) // just the array
        res.send({ organizations }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }
})

// a GET route to get all students
app.get('/api/allOrganizations', mongoChecker, authenticate, async (req, res) => {
    // Get the students
    try {
        const organizations = await Organization.find()
        // res.send(students) // just the array
        res.send({ organizations }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }
})

/** Message resource routes **/

/**Finding messages between logged in user and given user*/
app.post("/api/getmessages", mongoChecker, authenticate, async (req, res) => {
    // Get the messages
    console.log(req.user.email)
    console.log(req.body.email)
    try {
        const messages = await Message.find({$or: [{$and: [{from: req.user.email}, {to: req.body.email}]},
                {$and:[{to: req.user.email}, {from: req.body.email}]}]})
        // res.send(students) // just the array
        res.send({ messages }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

app.post('/api/messages', mongoChecker, authenticate, async (req, res) => {

    // Get the messages
    try {

        const message = new Message({
            "from": req.user.email,
            "to": req.body.to,
            "content": req.body.content
        })
        const result = await message.save()
        console.log(result)
        res.send(result)

    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})
/**Finding contacts of user*/
app.get('/api/contacts', mongoChecker, authenticate, async (req, res) => {
    try {
        const contacts = req.user.contacts;
        // res.send(students) // just the array
        res.send({ contacts }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }
})
app.post('/api/contacts', mongoChecker, authenticate, async (req, res) => {
    // Get the messages
    try {
        const contact1 = {
            "email": req.body.email,
            "name": req.body.name
        }
        req.user.contacts.push(contact1);
        req.user.save();
        const user = await User.findOne({email: req.body.email})
        console.log("found user:", user)
        if(user){
            const contact2 = {
                "name": req.user.name,
                "email": req.user.email
            }
            user.contacts.push(contact2)
            user.save();
        }else{
            console.log("couldn't find email")
        }

    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/login", "/dashboard"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
