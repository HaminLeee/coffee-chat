import React, { Component } from 'react';
import { uid } from 'react-uid';
import { createBrowserHistory } from 'history';

class Navbar extends Component {
     state = {
          pageName: 'Coffee Chat',
          navbarList: ['Login', 'Home' ]
     }

   

     render() {

          const navbarItems = this.state.navbarList.map((nav) => {
               if (nav === 'Home') {
                    return (
                         <a href={ '/' } key={ uid(nav) }>{ nav }</a>
                    )
               } else {
                    return (
                         <a href={ '/' + nav.toLowerCase() } key={ uid(nav) }>{ nav }</a>
                    )
               }
          })
          return (
               <div className="nav">
                    <a href={ '/' }>{ this.state.pageName }</a>
                    { navbarItems }
               </div>
          );
     }
}

export default Navbar;