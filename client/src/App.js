import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import UserHomePage from './pages/UserHomePage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import AdminOrganizationHomePage from './pages/AdminOrganizationHomePage';
import AdminUserHomePage from './pages/AdminUserHomePage';
import UserExplorerPage from './pages/UserExplorerPage';
import SplashPage from './pages/SplashPage';

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
