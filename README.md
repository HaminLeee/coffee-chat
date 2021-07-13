# Coffee Chat Web Application POC

# Deployed website URL
https://murmuring-plains-25485.herokuapp.com/


# How to run

## Using Yarn
```
yarn run setup

yarn run build-run

- The above command will build your React app and create a static directory that express can understand
```

## Technology used
- React
- Material UI 
     - We used Material UI for Phase 2. We didnt use any external libraries for Phase 1.
- Express
- Heroku

## How to use the application

### Admin
- Admin Credtials 
     - username: **admin** password **admin** 
- Admin user has more priviledged operation than regular user. As an admin you are able to add organization,
 delete organization, modify organization, and delete users from an organization. The admin user has access
 to all the organization it has created, we check this using a creator field.
- There is a sidebar that is created when logged in, this sidebar has a log out button in case you want to log in as regular user

### Regular User
- User Credtials
     - username: **user** password **user**
     - Or you can create a new user in the Sign up page


## API Calls
- Common error codes that might occur in API calls
     - 400: Bad Request
     - 500: MongoDB Error
     - 404: Not Found
- POST /users/login
     - Takes email and password as argument, returns currentUser email and boolean field to check if it is admin
     - body = {
          email: email,
          password: password
       }
     - returns = {
          currenUser: user.email, 
          isAdmin: user.isAdmin
     }

- GET /users/logout
     - Destroys the requests session and sends nothing

- GET /users/check-session
     - Sets the currentUser session for the user that is loggedin
     - returns = {
          currentUser: email
     }

- POST /api/users
     - Adds user when user signs up
     - body = {
          email: email,
          password: password,
          name: name,
          occupation: occupation
      }
      - returns the user that has been created, contacts is initialized as empty list
          - {email:"", .... , contacts:[]}

- GET /api/user/:uid 
     - Get the user information given the user id uid
     - return = {
          user: {
               ...userfields
          }
     }


- GET /api/joinOrganization/:orgId
     - Join an organization as a regular user
     - Find the organization id by req.params.orgId and the user by req.user._id
     - Returns = {
          people: [{user 1}, .... {user n}]
     }


- GET /api/allUsers/:orgId
     - Get all users for organization with id of orgId 
     - Returns = {
          people: [{user 1}, .... {user n}]
     }

- POST /api/unfollowOrganization/:orgId
     - Unfollow an organization as regular user given the orgId and currentUser id
     - Returns the list of people excluding the current user
     - This funciton is not fully implemented in the front end 
     - Returns = {
         people: [{user 1}, .... {user n}] 
     }

- POST /api/kickUser/:userId/:orgId
     - Kick the user from an organization as an Admin user
     - This funciton is not fully implemented in the front end 
     - Returns = {
         people: [{user 1}, .... {user n}] 
     }

- POST /api/organization
     - Given all the required fields from the body, post a new organization
     - body = {
          name: name,
          description: description,
          creator: req.user._id
     } 
     - returns the updated list of organizations with the organization from this request added
          - {organizations: [{organization 1} .... {organization n}]}

- DELETE /api/organization/:id
     - Given the organization id delete the organization
     - req.params.id => id of the organization
     - returns the updated organization list with organization from this request deleted.
          - {organizations: [{organization 1} .... {organization n}]}

- GET /api/admin/organizations
     - Find all the organizations that has been created by this admin and return organizations, this is used in the admin view
     - It only need the req.user._id, thus nothing to pass
     - return list of organization list created by this admin
          - {organizations: [{organization 1} .... {organization n}]}

- GET /api/allOrganizations
     - Find all the organizations that exists. This is used for the explore page in the user view
     - returns list of all organizations
          - {organizations: [{organization 1} .... {organization n}]}
 
- POST /api/messages
     - post message between logged in user and given user, this is used in the function sendMessagesToUsers in the mesage.js

- POST /api/getmessages (since GET method don't have body in their request)
     - get messages between logged in user and given user
     - returns list of all messages between the logged in user and the given user.
    
- GET /api/contacts
     - get the contacts of the logged in user
     - return list of contacts of logged in user:
          - {contacts: [{contact 1} .... {contact n}]}

- POST /api/contacts
     - post the contacts of the logged in user
     - create the contact of the logged in user inside the given user's contact list, and create the contact of the given user inside the logged in user's contact list.




# Phase 1 README.md 


## Purpose
- The overall purpose of this app is to help connect members within an organization by creating a platform where they can schedule 1-on-1 meetups (coffee chats). In the current environment, it is not easy to reach out to individuals within the organization for advice and it will serve those individuals with equal or more opportunity to connect and chat with members within the organization. At a high level, a user will be able to create his/her profile, explore other users' profiles, chat with other users, and search for other users within the same organization. The main focus of this website is to help clients to have as many 1-on-1 meetings (coffee chats) as possible within the organization especially in this unprecedented time. 

## Instruction
- When the user opens the app, it will open up the app's homepage, which has a welcoming message at the center of the page, and a login button. In addition, there is a navigation bar on the top, with the app title Coffee Chat on the left and two tabs on the right: Home, and Login. The Home tab will return to the original home page of the app, which has the same functionality as clicking into the title Coffee Chat. 

- The other tab on the homepage, or the login button in the homepage, will take the user to the login page. There, we will be able to enter our username and password. The username and password of the common user will be "user" and "user", while the username and password for the admin will be "admin" and "admin". The username and password field required input, so the user can't leave it blank. If the user enters anything except those two accounts, it will notify by an incorrect username/password notification, and reject the user from accessing the page. 

- If it's the regular user that is logging in, then the app will take the user to the exploration page, where it has the list of people in the user's organization, and a sizebar which contains the link to the user's profile, exploration page, and the list of organization the userwhere the user can view a list of organizations available in our web app, and a sidebar which contains the link to the user's profile, exploration page, and the list of organizations the user is in (in our case, we hard-coded that the user is only belongs to the UofT organization). For the purpose of phase 1, we have hard-coded our organization, which includes UofT, Amazon, Intel, CSC309, etc. For each organization, there is an explore button, so if the user clicks on it, it will direct the user into the page containing a list of users that are in this organization. We hard-coded the page so that every organization will have the same users inside. For each user card's, there will be two buttons: Explore and Message. The explore button goes into the user's profile page, which contains the user's profile picture, name and description of the user, and a Message button similar to the previous Message button. We only hard-coded one user's profile page, so every Explore button will go to that profile page for now. 

- When the user clicks the message button, the Chatbox will pops out on the bottom right corner of the app. The Chatbox is composed of 2 main parts: Contacts and Messages. Contacts are vertically aligned on the left side of the chatbox. You can specify any contact by clicking over it. After click, messages between you and specified contact will show up. Messages are also vertically aligned. In order to send a message, you will enter a message into input form on the bottom of the chat box and then either click send button or just simply press enter. There is a small scrollbar on the right side of the chatbox. If there are many messages, you can scroll up/down to see messages. After messaging, you can minimize chat box to not show up information about messages. For the Chatbox, we will hardcode the list of contacts, initial messages are hardcoded, since we are working “offline” and we don't have a database.

- For the admin, after he/she has logged in, the admin will go to a page similar to the explore page for the regular user, with the exception that the admin can create new organizations, and he/she also has the options to delete existing organization (we assume that when we delete the organization, all of the user inside it will get removed from the organization, so we don't have to delete every user out of that organization before removing it). If the admin chooses to explore an organization, he/she will also be directed into a page with a list of user belongs to that organization, similar to that page for the regular user, with the exception that the admin can add or delete users from the organization (since we haven't set up the database yet, we don't check whether a user existed or not before adding that user into the organization).


