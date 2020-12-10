import React, { Component } from 'react';
import { uid } from 'react-uid';
import { createBrowserHistory } from 'history';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HomeIcon from '@material-ui/icons/Home';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import './navbar.css';

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
               <>
               <CssBaseline />
               <Drawer
                 className="drawer"
                 variant="permanent"
                 anchor="left"
               >
                 <div className="toolbar" />
                 <Divider />
                 <List>
                   {['Coffee Chat', 'Home'].map((text, index) => (
                     <ListItem button key={text}>
                       <ListItemIcon>
                              {index % 2 === 0 ? <LocalCafeIcon/> : <HomeIcon />}
                       </ListItemIcon>
                       <ListItemText primary={text} />
                     </ListItem>
                   ))}
                 </List>
                 <Divider />
                 <List>
                   {['Organizations','Logout'].map((text, index) => (
                     <ListItem button key={text}>
                       <ListItemIcon>{index % 2 === 0 ? <AccountBalanceIcon /> : <ExitToAppIcon />}</ListItemIcon>
                       <ListItemText primary={text} />
                     </ListItem>
                   ))}
                 </List>
               </Drawer>
               <br></br>
               <br></br>
               </>
               // <div className="nav">
               //      <a href={ '/' }>{ this.state.pageName }</a>
               //      { navbarItems }
               // </div>
          );
     }
}

export default Navbar;