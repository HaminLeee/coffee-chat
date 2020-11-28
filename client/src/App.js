import React from 'react';
import Navbar from "./react-components/Navbar/Navbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import UserHomePage from './react-components/UserCard/UserHomePage';
import LoginPage from './react-components/Login/LoginPage';
import ExplorePage from './react-components/UserExplore/ExplorePage';
import AdminOrganizationHomePage from './react-components/AdminCard/AdminOrganizationHomePage';
import AdminUserHomePage from './react-components/AdminCard/AdminUserHomePage';
import UserExplorerPage from './react-components/UserExplore/UserExplorerPage';
import SplashPage from './react-components/LandingPage/SplashPage';

function App() {
  return (
    <div id="app">
      <Navbar id="navbar"></Navbar>
      <BrowserRouter>
          <Switch>
            <Route exact path='/'
                  render={() => <SplashPage/>} />
            <Route exact path='/user'
                  render={() => <UserHomePage />}/>
            <Route exact path='/admin'
                  render={() => <AdminOrganizationHomePage/>}/>
            <Route exact path='/admin/user'
                  render={() => <AdminUserHomePage/>}/>
            <Route exact path='/explore'
                  render={() => <ExplorePage/>}/>
            <Route exact path='/login'
                  render={() => <LoginPage/>}/>
              <Route exact path='/organization/:orgName'
                  component={UserHomePage}/>
            <Route exact path='/user/explorer'
                  render={() => <UserExplorerPage/>}/>
          </Switch>
        </BrowserRouter>
        {/*  <Chat style = {{width: '100rem'}}></Chat> */}
    </div>
  );
}

export default App;
