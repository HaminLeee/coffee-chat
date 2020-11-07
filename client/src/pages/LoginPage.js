import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
const log = console.log;

class LoginPage extends Component {
     constructor(props) {
          super(props);
          this.state = {
               userName: '',
               password: '',
               error: 0,
          };
      
          this.handleUserNameInputChange = this.handleUserNameInputChange.bind(this);
          this.handlePassWordInputChange = this.handlePassWordInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }
     // state = {
     //      userName: '',
     //      password: ''
     // }
     handleUserNameInputChange(e) {
          this.setState({
               userName: e.target.value
          });
     }

     handlePassWordInputChange(e) {
          this.setState({
               password: e.target.value
          });
     }

     handleSubmit(e) {
          e.preventDefault();
          log(this.state.userName, this.state.password)
          if (this.state.userName === 'admin' && this.state.password === 'admin') {
               return <Redirect to="/admin"/>
          }
          else if (this.state.userName === 'user' && this.state.password === 'user') {
               return <Redirect to="/user"/>
          }
          else {
               alert('Incorrect Password or Username!')
          }
     }

     render() {
          let btn = () => {
               if (this.state.userName === 'admin' && this.state.password === 'admin') {
                    return (
                         <Link to={ '/admin' }>
                              <button id="loginBtn1" type="submit" className="exploreButton">Log in.</button>
                         </Link>
                    )
               } else if (this.state.userName === 'user' && this.state.password === 'user') {
                    return (
                         <Link to={ '/user' }>
                              <button type="submit" className="exploreButton">Log in.</button>
                         </Link>
                    )
               } else {
                    return (
                         <button type="submit" className="exploreButton">Log in.</button>
                     
                    )
               }
          }
          
          return (
               <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                         <input type="text" value={this.state.value} onChange={this.handleUserNameInputChange} name="userName" placeholder="Username" required="required" />
                         <input type="password" value={this.state.value} onChange={this.handlePassWordInputChange} name="passWord" placeholder="Password" required="required" />

                         {btn()}
                         { this.state.error === 1 &&
                              <h3>Invalid Username or Password</h3>}

                     
                    </form>
               </div> 
          );
     }
}

export default LoginPage;