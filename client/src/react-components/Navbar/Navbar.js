import React, { Component } from 'react';
import { uid } from 'react-uid';
import { createBrowserHistory } from 'history';

class Navbar extends Component {
     state = {
          pageName: 'Coffee Chat',
          navbarList: ['Login', 'Home', 'Sign Up' ]
     }

     componentDidMount() {
          console.log(this.props)
          if (this.props.isAuthenticated) {
               let newList = ['Logout', 'Home'];
               this.setState({
                    navbarList: newList
               })
          }
     }

   
     
     render() {
     
          
          const navbarItems = this.state.navbarList.map((nav) => {
               if (nav === 'Home') {
                    return (
                         <a href={ '/' } key={ uid(nav) }>{ nav }</a>
                    )
               } 
               return (
                    <a href={ '/' + nav.split(' ').join('') } key={ uid(nav) }>{ nav }</a>
               )
               
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