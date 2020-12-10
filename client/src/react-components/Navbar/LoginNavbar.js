import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {uid} from 'react-uid';
import './navbar.css';
import {Link} from 'react-router-dom';

class LoginNavbar extends Component {
   state = {
        pageName: 'Coffee Chat',
        navbarList: ['Login', 'Home', 'Sign Up' ]
   }
   
   
   
   render() {
       const navbarItems = this.state.navbarList.map((nav) => {
           console.log(nav);
           if (nav === 'Home') {
                return (
                     <Button color="inherit" component={Link} to={ '/' } key={ uid(nav) }>{ nav }</Button>
                )
           } 
           return (
                <Button color="inherit" component={Link} to={ '/' + nav.split(' ').join('') } key={ uid(nav) }>{ nav }</Button>
           )
        })
        return (
            <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="start" className="" color="inherit" aria-label="menu">
                    </IconButton>
                    
                    <Typography variant="h6" color="inherit">
                        Coffee Chat 
                    </Typography>
                    <div className="navbarItems">
                        {navbarItems}
                    </div>
                    
                </Toolbar>
            </AppBar>
                
            </>
        )
    }
}

export default LoginNavbar;