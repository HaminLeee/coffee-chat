import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

class SplashPage extends Component {
     render() {
          return (
               <div className="splashContainer">
                    <LocalCafeIcon fontSize="x-large"/>
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