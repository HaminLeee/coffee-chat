import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { updateLoginForm, login } from "../../actions/user";
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
          const { app } = this.props
          return (
               <div className="login">
                   <form onSubmit={this.handleSubmit}>
                         <input type="text" value={this.state.value} onChange={e => updateLoginForm(this, e.target)} name="userName" placeholder="Username" required="required" />
                         <input type="password" value={this.state.value} onChange={e => updateLoginForm(this, e.target)} name="passWord" placeholder="Password" required="required" />

                         <button type="submit" className="exploreButton" onClick={() => login(this, app)}>Log in.</button> 
                         { this.state.error === 1 &&
                              <h3>Invalid Username or Password</h3> }
               
                    </form>
               </div> 
          );
     }
}

export default LoginPage;