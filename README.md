# Coffee Chat Web Application
# Deployed website URL
https://calm-brushlands-44336.herokuapp.com/

# How to run
## Using NPM

```
cd /client

npm install

npm start
```

## Using Yarn
```
cd /client

yarn install

yarn start
```


# Purpose
- The overall purpose of this app is to help connect members within an organization by creating a platform where they can schedule 1-on-1 meetups (coffee chats). In the current environment, it is not easy to reach out to individuals within the organization for advice and it will serve those individuals with equal or more opportunity to connect and chat with members within the organization. At a high level, a user will be able to create his/her profile, explore other users' profiles, chat with other users, and search for other users within the same organization. The main focus of this website is to help clients to have as many 1-on-1 meetings (coffee chats) as possible within the organization especially in this unprecedented time. 

# Instruction
- When the user opens the app, it will open up the app's homepage, which has a welcoming message at the center of the page, and a login button. In addition, there is a navigation bar on the top, with the app title Coffee Chat on the left and two tabs on the right: Home, and Login. The Home tab will return to the original home page of the app, which has the same functionality as clicking into the title Coffee Chat. 

- The other tab on the homepage, or the login button in the homepage, will take the user to the login page. There, we will be able to enter our username and password. The username and password of the common user will be "user" and "user", while the username and password for the admin will be "admin" and "admin". The username and password field required input, so the user can't leave it blank. If the user enters anything except those two accounts, it will notify by an incorrect username/password notification, and reject the user from accessing the page. 

- If it's the regular user that is logging in, then the app will take the user to the exploration page, where it has the list of people in the user's organization, and a sizebar which contains the link to the user's profile, exploration page, and the list of organization the userwhere the user can view a list of organizations available in our web app, and a sidebar which contains the link to the user's profile, exploration page, and the list of organizations the user is in (in our case, we hard-coded that the user is only belongs to the UofT organization). For the purpose of phase 1, we have hard-coded our organization, which includes UofT, Amazon, Intel, CSC309, etc. For each organization, there is an explore button, so if the user clicks on it, it will direct the user into the page containing a list of users that are in this organization. We hard-coded the page so that every organization will have the same users inside. For each user card's, there will be two buttons: Explore and Message. The explore button goes into the user's profile page, which contains the user's profile picture, name and description of the user, and a Message button similar to the previous Message button. We only hard-coded one user's profile page, so every Explore button will go to that profile page for now. 

- When the user clicks the message button, the Chatbox will pops out on the bottom right corner of the app. The Chatbox is composed of 2 main parts: Contacts and Messages. Contacts are vertically aligned on the left side of the chatbox. You can specify any contact by clicking over it. After click, messages between you and specified contact will show up. Messages are also vertically aligned. In order to send a message, you will enter a message into input form on the bottom of the chat box and then either click send button or just simply press enter. There is a small scrollbar on the right side of the chatbox. If there are many messages, you can scroll up/down to see messages. After messaging, you can minimize chat box to not show up information about messages. For the Chatbox, we will hardcode the list of contacts, initial messages are hardcoded, since we are working “offline” and we don't have a database.

- For the admin, after he/she has logged in, the admin will go to a page similar to the explore page for the regular user, with the exception that the admin can create new organizations, and he/she also has the options to delete existing organization (we assume that when we delete the organization, all of the user inside it will get removed from the organization, so we don't have to delete every user out of that organization before removing it). If the admin chooses to explore an organization, he/she will also be directed into a page with a list of user belongs to that organization, similar to that page for the regular user, with the exception that the admin can add or delete users from the organization (since we haven't set up the database yet, we don't check whether a user existed or not before adding that user into the organization).

# Frameworks used
- React
