# Coffee Chat Web Application POC

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
