import React, { Component } from 'react';
import { uid } from 'react-uid';

class Navbar extends Component {
     state = {
          pageName: 'Coffee Chat',
          navbarList: ['Home', 'Explore']
     }

     render() {
          const navbarItems = this.state.navbarList.map((nav) => {
               return (
                    <a href={ nav.toLowerCase() } key={ uid(nav) }>{ nav }</a>
               )
          })
          return (
               <div className="nav">
                    <a>{ this.state.pageName }</a>
                    { navbarItems }
               </div>
          );
     }
}

export default Navbar;