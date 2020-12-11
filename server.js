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

/** Student resource routes **/
// a POST route to *create* a student
app.post('/api/person', mongoChecker, authenticate, async (req, res) => {
    log(`Adding person ${req.body.name}, created by user ${req.user._id}`)

    // Create a new student using the Student mongoose model
    const person = new Person({
        name: req.body.name,
        occupation: req.body.occupation,
        creator: req.user._id // creator id from the authenticate middleware
    })


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

// a GET route to get all students
app.get('/api/people', mongoChecker, authenticate, async (req, res) => {

    // Get the students
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

// a GET route to get all students
app.get('/api/organizations', mongoChecker, authenticate, async (req, res) => {
    // Get the students
    try {
        const people = await Organization.find({creator: req.user._id})
        // res.send(students) // just the array
        res.send({ people }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }
})

/** Message resource routes **/
app.post('/api/messages', mongoChecker,  async (req, res) => {

    // Create a new message using the Message mongoose model
    const message = new Message({
        "fromId": req.body.fromId,
        "toId": req.body.toId,
        "content": req.body.content
    })


    // Save message to the database
    // async-await version:
    try {
        const result = await message.save()
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

app.get('/api/messages', mongoChecker, authenticate, async (req, res) => {

    // Get the messages
    try {
        const messages = await Message.find({$or: [{fromId: req.user._id}, {toId: req.user._id}]})
        // res.send(students) // just the array
        res.send({ messages }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})
/**Finding messages between logged in user and given user*/
app.get('/api/messages/:id', mongoChecker, authenticate, async (req, res) => {
    const id = req.params.id;
    // Get the messages
    try {
        const messages = await Message.find({$or: [{fromId: req.user._id, toId: id}, {toId: req.user._id, fromId: id}]})
        // res.send(students) // just the array
        res.send({ messages }) // can wrap students in object if want to add more properties
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
