import React, { Component } from 'react';

class LoginPage extends Component {
     render() {
          return (
               <div className="login">
                    <h1>Login</h1>
                    <form method="post">
                         <input type="text" name="u" placeholder="Username" required="required" />
                         <input type="password" name="p" placeholder="Password" required="required" />
                         <button type="submit" class="exploreButton">Log in.</button>
                    </form>
               </div> 
          );
     }
}

export default LoginPage;