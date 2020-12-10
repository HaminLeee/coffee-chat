import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
     render() {
          return (
               <div className="splashContainer">
                    <h1>Welcome to Coffee Chat!</h1>
                    <br></br>
                    <Link to={'/login'}>
                         <button className="exploreButton">Log in</button>
                    </Link>
                    
               </div>
          );
     }
}

export default SplashPage;