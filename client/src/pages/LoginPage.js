import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
     state = {
          userName: 'bob',
          password: 'bob',
          adminUsername: 'hamin',
          adminPassword: 'hamin'
     }

     render() {
          let btn = () => {
               if (this.state.userName === 'hamin') {
                    return (
                         <Link to={ '/admin' }>
                              <button id="loginBtn1" type="submit" className="exploreButton">Admin.</button>
                         </Link>
                    )
               } else {
                    return (
                         <Link to={ '/' }>
                              <button type="submit" className="exploreButton">Log in.</button>
                         </Link>
                    )
               }
          }
          return (
               <div className="login">
                    <h1>Login</h1>
                    <form>
                         <input type="text" name="u" placeholder="Username" required="required" />
                         <input type="password" name="p" placeholder="Password" required="required" />

                         {btn()}
                         
                         {/* <Link to={ '/admin' }>
                              <button id="loginBtn1" type="submit" className="exploreButton">Admin.</button>
                         </Link>
                    
                         <Link to={ '/' }>
                              <button type="submit" className="exploreButton">Log in.</button>
                         </Link> */}
                     
                    </form>
               </div> 
          );
     }
}

export default LoginPage;