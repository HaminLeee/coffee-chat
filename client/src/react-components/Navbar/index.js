import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
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
                {['Coffee Chat', 'Home', 'Organizations'].map((text, index) => (
                  // <Link to="/dashboard">
                    <ListItem button key={text} component={Link} to={!app.state.isAdmin ? '/dashboard' : '/admin'}>
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
                {['Logout'].map((text, index) => (
                  <ListItem button key={text} component={Link} to={'/'} onClick={() => logout(app)}>
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