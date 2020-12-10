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
import {logout} from '../../actions/user';
import {Link} from 'react-router-dom';

class Navbar extends Component {
      
      render() {
        const { app } = this.props;
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
                  // <Link to="/dashboard">
                    <ListItem button key={text} component={Link} to={'/dashboard'}>
                      <ListItemIcon>
                            {index % 2 === 0 ? <LocalCafeIcon color="secondary"/> : <HomeIcon color="primary"/>}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  // </Link>
                ))}
              </List>
              <Divider />
              <List>
                {['Organizations','Logout'].map((text, index) => (
                  <ListItem button key={text} component={Link} to={'/' + text}>
                    <ListItemIcon onClick={() => logout(app)}>
                      {index % 2 === 0 ? <AccountBalanceIcon color="primary" /> :<ExitToAppIcon onClick={() => logout(app)}/>}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <br></br>
            <br></br>
          </>
        );
    }
}

export default Navbar;